import { classifyIntent, extractDataFromMessage } from './intentClassifier.js';
import { findEducationContent } from './content.js';
import { runScoring, hasMinimumData } from './scoring.js';

export const getInitialState = () => ({
  accountType: null,
  priority: null,
  access: null,
  balance: null,
  messagesCount: 0
});

const quickReplies = {
  accountType: [
    { text: 'Checking account', action: 'set_account_checking' },
    { text: 'Savings account', action: 'set_account_savings' },
    { text: 'Both checking and savings', action: 'set_account_both' },
    { text: 'CDs for saving', action: 'set_account_cds' }
  ],
  priority: [
    { text: 'Highest APY rates', action: 'set_priority_apy' },
    { text: 'No monthly fees', action: 'set_priority_fees' },
    { text: 'Good ATM access', action: 'set_priority_atm' },
    { text: 'Great mobile app', action: 'set_priority_mobile' },
    { text: 'Strong customer support', action: 'set_priority_support' }
  ],
  access: [
    { text: 'Direct deposit my paycheck', action: 'set_access_direct_deposit' },
    { text: 'Deposit checks with my phone', action: 'set_access_mobile_deposit' },
    { text: 'Deposit cash sometimes', action: 'set_access_cash_deposit' },
    { text: 'Just transfers, no deposits', action: 'set_access_transfers' }
  ],
  refine: [
    { text: 'Tell me more about the top pick', action: 'expand_top_result' },
    { text: 'Compare all three', action: 'compare_results' },
    { text: 'Start over with different needs', action: 'restart' }
  ],
  afterResults: [
    { text: 'Why is this the best match?', action: 'explain_match' },
    { text: 'What about fees?', action: 'ask_fees' },
    { text: 'Start over', action: 'restart' }
  ]
};

const actionToState = (action) => {
  switch (action) {
    case 'set_account_checking':
      return { accountType: 'checking' };
    case 'set_account_savings':
      return { accountType: 'savings' };
    case 'set_account_both':
      return { accountType: 'both' };
    case 'set_account_cds':
      return { accountType: 'cds' };
    case 'set_account_money_market':
      return { accountType: 'money_market' };
    case 'set_account_business':
      return { accountType: 'business' };
    case 'set_priority_apy':
      return { priority: 'apy' };
    case 'set_priority_fees':
      return { priority: 'fees' };
    case 'set_priority_atm':
      return { priority: 'atm' };
    case 'set_priority_mobile':
      return { priority: 'mobile' };
    case 'set_priority_support':
      return { priority: 'support' };
    case 'set_access_direct_deposit':
      return { access: 'direct_deposit' };
    case 'set_access_mobile_deposit':
      return { access: 'mobile_deposit' };
    case 'set_access_cash_deposit':
      return { access: 'cash_deposit' };
    case 'set_access_transfers':
      return { access: 'transfers' };
    default:
      return {};
  }
};

const buildResultsResponse = (state) => {
  const { results, disclosureNeeded } = runScoring(state);
  
  // Build a personalized intro based on what we know
  let intro = "Great choices! ";
  if (state.accountType && state.priority) {
    const accountName = state.accountType === 'both' ? 'checking and savings' : state.accountType;
    const priorityName = {
      apy: 'high APY',
      fees: 'low fees',
      atm: 'ATM access',
      mobile: 'mobile features',
      support: 'customer support'
    }[state.priority] || state.priority;
    
    intro = `Based on your interest in ${accountName} with ${priorityName}, I found some excellent options for you. `;
  }
  
  const topBank = results[0]?.bank?.name || 'our top pick';
  intro += `${topBank} stands out as the best match. Here's why:`;

  return {
    reply: intro,
    resultsCard: {
      title: 'YOUR TOP MATCHES',
      results,
      disclosureNeeded
    },
    options: quickReplies.afterResults
  };
};

const askNextQuestion = (state) => {
  if (!state.accountType) {
    return {
      reply: "Let's find you the perfect online bank! First, what type of account do you need?",
      options: quickReplies.accountType
    };
  }

  if (!state.priority) {
    // Acknowledge their account choice
    const accountAck = {
      checking: "A checking account is great for everyday spending. ",
      savings: "Smart move focusing on savings! ",
      both: "Having both checking and savings in one place is super convenient. ",
      cds: "CDs are a solid choice for earning guaranteed returns. ",
      money_market: "Money market accounts offer a nice balance of access and rates. "
    }[state.accountType] || "";
    
    return {
      reply: `${accountAck}Now, what's most important to you when choosing a bank?`,
      options: quickReplies.priority
    };
  }

  if (!state.access) {
    // Acknowledge their priority and ask about access
    const priorityAck = {
      apy: "Finding the best rates is definitely worth it — even small differences add up! ",
      fees: "Avoiding fees is smart — why pay for something you can get free? ",
      atm: "Good ATM access makes a big difference for cash needs. ",
      mobile: "A great mobile app makes banking so much easier. ",
      support: "Having reliable support is really valuable when you need help. "
    }[state.priority] || "";
    
    return {
      reply: `${priorityAck}One more thing — how do you typically deposit money?`,
      options: quickReplies.access
    };
  }

  return buildResultsResponse(state);
};

export const handleChat = ({ state, message, action }) => {
  let updatedState = { ...state };

  // Handle init action
  if (action === 'init' && state.messagesCount === 0) {
    return {
      reply: "Hi there! I'm here to help you find the perfect online bank. Whether you're looking for high APY, no fees, or great mobile features — I'll match you with the best options. What brings you here today?",
      options: [
        { text: "I'm comparing online banks", action: 'generic_query' },
        { text: 'I want to earn more interest', action: 'set_priority_apy' },
        { text: 'I hate paying bank fees', action: 'set_priority_fees' },
        { text: 'I need a checking account', action: 'set_account_checking' }
      ],
      updatedState: { ...updatedState }
    };
  }

  // Handle restart action
  if (action === 'restart') {
    updatedState = getInitialState();
    return {
      reply: "No problem, let's start fresh! What type of account are you looking for this time?",
      options: quickReplies.accountType,
      updatedState
    };
  }

  // Handle explain_match action
  if (action === 'explain_match') {
    const { results } = runScoring(updatedState);
    const topBank = results[0];
    if (topBank) {
      return {
        reply: `${topBank.bank.name} came out on top because it excels in the areas you care about most. ${topBank.matchReasons.join('. ')}. Their ${topBank.bank.category.toLowerCase()} makes them especially strong for your needs.`,
        options: [
          { text: 'What about the #2 pick?', action: 'explain_second' },
          { text: 'Tell me about fees', action: 'ask_fees' },
          { text: 'Start over', action: 'restart' }
        ],
        updatedState
      };
    }
  }

  // Handle ask_fees action
  if (action === 'ask_fees') {
    return {
      reply: "Great question! Most online banks have eliminated monthly maintenance fees — that's one of their biggest advantages over traditional banks. The banks I recommended all have either no monthly fees or easy ways to waive them. ATM fees vary more, so if you use cash often, look for banks with large fee-free ATM networks or ATM fee reimbursements.",
      options: [
        { text: 'Show me the results again', action: 'show_results' },
        { text: 'Start over', action: 'restart' }
      ],
      updatedState
    };
  }

  // Handle explain_process action
  if (action === 'explain_process') {
    return {
      reply: "Here's how I work: I ask a few quick questions about what you're looking for — the type of account, what features matter most, and how you'll use it. Then I match you with the best online banks from Forbes Advisor's rankings. It only takes a minute! Ready to try?",
      options: quickReplies.accountType,
      updatedState
    };
  }

  // Handle show_popular action - show results with default preferences
  if (action === 'show_popular') {
    const popularState = { 
      ...updatedState, 
      accountType: updatedState.accountType || 'both',
      priority: updatedState.priority || 'apy'
    };
    return { 
      ...buildResultsResponse(popularState), 
      reply: "Here are some of the most popular online banks right now, known for great rates and low fees:",
      updatedState: popularState 
    };
  }

  // Handle show_results action
  if (action === 'show_results') {
    if (hasMinimumData(updatedState)) {
      return { ...buildResultsResponse(updatedState), updatedState };
    }
    return { ...askNextQuestion(updatedState), updatedState };
  }

  // Apply data from quick reply action
  let actionAppliedData = false;
  if (action && action !== 'generic_query') {
    const dataFromAction = actionToState(action);
    if (Object.keys(dataFromAction).length > 0) {
      updatedState = { ...updatedState, ...dataFromAction };
      actionAppliedData = true;
    }
  }

  // Extract data from free-text message
  if (message) {
    const extracted = extractDataFromMessage(message);
    updatedState = { ...updatedState, ...extracted };
    updatedState.messagesCount += 1;
  }

  // If action applied data, move to next question with acknowledgment
  if (actionAppliedData) {
    if (hasMinimumData(updatedState)) {
      return { ...buildResultsResponse(updatedState), updatedState };
    }
    return { ...askNextQuestion(updatedState), updatedState };
  }

  // Classify intent from message
  const intent = message ? classifyIntent(message) : { type: 'generic_query', readyForResults: false };

  // Handle ready for results
  if (intent.readyForResults && hasMinimumData(updatedState)) {
    return { ...buildResultsResponse(updatedState), updatedState };
  }

  // Handle greetings
  if (intent.type === 'greeting') {
    return {
      reply: "Hey there! I'm here to help you find the best online bank. Let's get started — what type of account are you looking for?",
      options: quickReplies.accountType,
      updatedState
    };
  }

  // Handle thanks
  if (intent.type === 'thanks') {
    const hasResults = hasMinimumData(updatedState);
    return {
      reply: hasResults 
        ? "You're welcome! Feel free to ask if you have more questions about these banks, or start over if you want to explore different options."
        : "Happy to help! Let's keep going — what type of account interests you?",
      options: hasResults ? quickReplies.afterResults : quickReplies.accountType,
      updatedState
    };
  }

  // Handle confusion
  if (intent.type === 'confused') {
    const contextHelp = !updatedState.accountType 
      ? "No worries! I'm helping you find an online bank. Start by telling me what type of account you need — checking for everyday spending, savings for earning interest, or both?"
      : !updatedState.priority
        ? "Let me clarify — I'm trying to understand what's most important to you in a bank. Is it earning the highest interest? Avoiding fees? Or maybe having lots of ATM access?"
        : "I'm finding you the best online banks based on your preferences. Just one more question — how do you usually put money into your account?";
    
    return {
      reply: contextHelp,
      options: !updatedState.accountType 
        ? quickReplies.accountType 
        : !updatedState.priority 
          ? quickReplies.priority 
          : quickReplies.access,
      updatedState
    };
  }

  // Handle affirmative responses
  if (intent.type === 'affirmative') {
    if (hasMinimumData(updatedState)) {
      return { ...buildResultsResponse(updatedState), updatedState };
    }
    return {
      reply: "Great! Let's continue.",
      ...askNextQuestion(updatedState),
      updatedState
    };
  }

  // Handle negative responses
  if (intent.type === 'negative') {
    return {
      reply: "No problem! Would you like to start over with different preferences, or is there something specific I can help clarify?",
      options: [
        { text: 'Start over', action: 'restart' },
        { text: 'Explain how this works', action: 'explain_process' },
        { text: 'Just show me popular banks', action: 'show_popular' }
      ],
      updatedState
    };
  }

  // Handle off-topic
  if (intent.type === 'off_topic') {
    return {
      reply: "I'm specifically designed to help you find the best online bank! I can compare rates, fees, and features across top banks. Want me to help you find a great account?",
      options: quickReplies.accountType,
      updatedState
    };
  }

  // Handle gibberish
  if (intent.type === 'gibberish') {
    return {
      reply: "I didn't quite catch that. Try telling me what type of bank account you're looking for, or just tap one of the options below!",
      options: quickReplies.accountType,
      updatedState
    };
  }

  // Handle unrecognized but potentially on-topic
  if (intent.type === 'unrecognized' || intent.type === 'banking_unclear') {
    // Give a helpful nudge back to the flow
    const nudge = !updatedState.accountType
      ? "I want to make sure I find the right banks for you. Are you looking for a checking account, savings account, or both?"
      : !updatedState.priority
        ? "Got it! To narrow down the best options, what matters most — high interest rates, low fees, or something else?"
        : "Thanks! One more thing — how do you plan to deposit money into your account?";
    
    return {
      reply: nudge,
      options: !updatedState.accountType 
        ? quickReplies.accountType 
        : !updatedState.priority 
          ? quickReplies.priority 
          : quickReplies.access,
      updatedState
    };
  }

  // Handle education requests
  if (intent.type === 'education_request') {
    const content = findEducationContent(intent.topic);
    if (content) {
      return {
        reply: "Good question! Here's what you need to know:",
        contentCard: content,
        options: [
          { text: 'Now help me find a bank', action: 'show_results' },
          { text: 'I have another question', action: 'generic_query' }
        ],
        updatedState
      };
    }
    // If no content found, treat as banking_unclear
    return {
      reply: "That's a great question! While I don't have specific info on that, I can definitely help you compare online banks. What type of account are you interested in?",
      options: quickReplies.accountType,
      updatedState
    };
  }

  // Handle specific intent signals from messages
  if (intent.type === 'priority_signal' && !updatedState.accountType) {
    const priorityAck = {
      apy: "Earning more on your money is definitely a smart priority! ",
      fees: "I'm with you — bank fees are the worst. ",
      atm: "ATM access is important for many people. ",
      mobile: "A good mobile experience makes banking so much easier. ",
      support: "Having great support when you need it is valuable. "
    }[updatedState.priority] || "";
    
    return {
      reply: `${priorityAck}To find your best match, what type of account do you need?`,
      options: quickReplies.accountType,
      updatedState
    };
  }

  if (intent.type === 'account_signal' && !updatedState.priority) {
    return {
      reply: "Got it! Now, what matters most to you when choosing a bank?",
      options: quickReplies.priority,
      updatedState
    };
  }

  if (intent.type === 'access_signal' && !updatedState.accountType) {
    return {
      reply: "That's helpful to know! What type of account are you looking for?",
      options: quickReplies.accountType,
      updatedState
    };
  }

  // Check if we have enough data to show results
  if (hasMinimumData(updatedState) && updatedState.messagesCount >= 3) {
    return { ...buildResultsResponse(updatedState), updatedState };
  }

  // Default: ask next question in the flow
  return { ...askNextQuestion(updatedState), updatedState };
};
