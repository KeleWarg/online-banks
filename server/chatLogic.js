import { classifyIntent, extractDataFromMessage } from './intentClassifier.js';
import { findEducationContent } from './content.js';
import { runScoring, hasMinimumData } from './scoring.js';

export const getInitialState = () => ({
  cardType: null,
  priority: null,
  spending: null,
  creditScore: null,
  messagesCount: 0
});

const quickReplies = {
  cardType: [
    { text: 'Travel rewards', action: 'set_card_travel' },
    { text: 'Cash back', action: 'set_card_cash_back' },
    { text: 'Balance transfer', action: 'set_card_balance_transfer' },
    { text: 'Building credit', action: 'set_card_credit_building' }
  ],
  priority: [
    { text: 'No annual fee', action: 'set_priority_no_fee' },
    { text: 'Best sign-up bonus', action: 'set_priority_bonus' },
    { text: 'Highest rewards rate', action: 'set_priority_rewards' },
    { text: 'Low interest rate', action: 'set_priority_low_apr' }
  ],
  spending: [
    { text: 'Dining & restaurants', action: 'set_spending_dining' },
    { text: 'Groceries', action: 'set_spending_groceries' },
    { text: 'Gas & commuting', action: 'set_spending_gas' },
    { text: 'A bit of everything', action: 'set_spending_everything' }
  ],
  afterResults: [
    { text: 'Why is this the best match?', action: 'explain_match' },
    { text: 'Tell me about the fees', action: 'ask_fees' },
    { text: 'Start over', action: 'restart' }
  ]
};

const actionToState = (action) => {
  switch (action) {
    case 'set_card_travel': return { cardType: 'travel' };
    case 'set_card_cash_back': return { cardType: 'cash_back' };
    case 'set_card_balance_transfer': return { cardType: 'balance_transfer' };
    case 'set_card_credit_building': return { cardType: 'credit_building' };
    case 'set_card_rewards': return { cardType: 'rewards' };
    case 'set_card_business': return { cardType: 'business' };
    case 'set_priority_no_fee': return { priority: 'no_annual_fee' };
    case 'set_priority_bonus': return { priority: 'signup_bonus' };
    case 'set_priority_rewards': return { priority: 'high_rewards' };
    case 'set_priority_low_apr': return { priority: 'low_interest' };
    case 'set_priority_lounge': return { priority: 'lounge_access' };
    case 'set_priority_no_foreign': return { priority: 'no_foreign_fees' };
    case 'set_spending_dining': return { spending: 'dining' };
    case 'set_spending_groceries': return { spending: 'groceries' };
    case 'set_spending_gas': return { spending: 'gas' };
    case 'set_spending_everything': return { spending: 'everything' };
    case 'set_spending_entertainment': return { spending: 'entertainment' };
    case 'set_credit_excellent': return { creditScore: 'excellent' };
    case 'set_credit_good': return { creditScore: 'good' };
    case 'set_credit_fair': return { creditScore: 'fair' };
    case 'set_credit_poor': return { creditScore: 'poor' };
    case 'set_credit_none': return { creditScore: 'none' };
    default: return {};
  }
};

const buildResultsResponse = (state) => {
  const { results, disclosureNeeded } = runScoring(state);
  
  let intro = "Great! ";
  if (state.cardType && state.priority) {
    const cardName = {
      travel: 'travel rewards',
      cash_back: 'cash back',
      balance_transfer: 'balance transfer',
      credit_building: 'credit building',
      rewards: 'rewards'
    }[state.cardType] || state.cardType;
    
    const priorityName = {
      no_annual_fee: 'no annual fee',
      signup_bonus: 'great sign-up bonuses',
      high_rewards: 'high rewards rates',
      low_interest: 'low interest rates',
      lounge_access: 'lounge access',
      no_foreign_fees: 'no foreign fees'
    }[state.priority] || state.priority;
    
    intro = `Based on your interest in ${cardName} cards with ${priorityName}, I found some excellent options. `;
  }
  
  const topCard = results[0]?.card?.name || 'our top pick';
  intro += `The ${topCard} stands out as the best match. Here's why:`;

  return {
    reply: intro,
    resultsCard: {
      title: 'YOUR TOP CARD MATCHES',
      results,
      disclosureNeeded
    },
    options: quickReplies.afterResults
  };
};

const askNextQuestion = (state) => {
  if (!state.cardType) {
    return {
      reply: "Let's find your perfect credit card! First, what type of card are you looking for?",
      options: quickReplies.cardType
    };
  }

  if (!state.priority) {
    const cardAck = {
      travel: "Travel cards are great for earning flights, hotels and more! ",
      cash_back: "Cash back is simple and valuable — money back on every purchase. ",
      balance_transfer: "Smart move — paying off debt faster saves you money. ",
      credit_building: "Building credit now sets you up for better rates in the future. ",
      rewards: "Rewards cards offer great flexibility in how you redeem. "
    }[state.cardType] || "";
    
    return {
      reply: `${cardAck}What's most important to you in a credit card?`,
      options: quickReplies.priority
    };
  }

  if (!state.spending) {
    const priorityAck = {
      no_annual_fee: "No annual fee is smart — why pay for a card you can get free? ",
      signup_bonus: "Sign-up bonuses can be worth hundreds of dollars! ",
      high_rewards: "Maximizing rewards puts more money back in your pocket. ",
      low_interest: "A low APR is valuable if you ever carry a balance. ",
      lounge_access: "Airport lounges make travel so much more comfortable! ",
      no_foreign_fees: "Perfect for international travel or online shopping abroad. "
    }[state.priority] || "";
    
    return {
      reply: `${priorityAck}One more thing — where do you spend the most money?`,
      options: quickReplies.spending
    };
  }

  return buildResultsResponse(state);
};

export const handleChat = ({ state, message, action }) => {
  let updatedState = { ...state };

  // Handle init action
  if (action === 'init' && state.messagesCount === 0) {
    return {
      reply: "Hi there! I'm here to help you find the perfect credit card. Whether you want travel rewards, cash back, or to build your credit — I'll match you with the best options. What are you looking for?",
      options: [
        { text: "I'm comparing credit cards", action: 'generic_query' },
        { text: 'I want travel rewards', action: 'set_card_travel' },
        { text: 'I want cash back', action: 'set_card_cash_back' },
        { text: 'I need to build credit', action: 'set_card_credit_building' }
      ],
      updatedState: { ...updatedState }
    };
  }

  // Handle restart action
  if (action === 'restart') {
    updatedState = getInitialState();
    return {
      reply: "No problem, let's start fresh! What type of credit card are you looking for?",
      options: quickReplies.cardType,
      updatedState
    };
  }

  // Handle explain_match action
  if (action === 'explain_match') {
    const { results } = runScoring(updatedState);
    const topCard = results[0];
    if (topCard) {
      return {
        reply: `${topCard.card.name} came out on top because it excels in what you care about. ${topCard.matchReasons.join('. ')}. ${topCard.card.signupBonus ? `Plus, you can earn ${topCard.card.signupBonus}.` : ''}`,
        options: [
          { text: 'What about the #2 pick?', action: 'explain_second' },
          { text: 'Compare annual fees', action: 'ask_fees' },
          { text: 'Start over', action: 'restart' }
        ],
        updatedState
      };
    }
  }

  // Handle ask_fees action
  if (action === 'ask_fees') {
    const { results } = runScoring(updatedState);
    const feeInfo = results.map(r => 
      `${r.card.name}: $${r.card.annualFee}/year`
    ).join('. ');
    
    return {
      reply: `Here's the annual fee breakdown: ${feeInfo}. Remember, cards with annual fees often provide enough value in rewards and perks to offset the cost — calculate based on your spending.`,
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
      reply: "Here's how I work: I ask a few quick questions about what you're looking for — the type of rewards, what features matter most, and where you spend. Then I match you with the best credit cards from Forbes Advisor's rankings. Ready to try?",
      options: quickReplies.cardType,
      updatedState
    };
  }

  // Handle show_popular action
  if (action === 'show_popular') {
    const popularState = { 
      ...updatedState, 
      cardType: updatedState.cardType || 'cash_back',
      priority: updatedState.priority || 'no_annual_fee'
    };
    return { 
      ...buildResultsResponse(popularState), 
      reply: "Here are some of the most popular credit cards right now, loved for their rewards and low fees:",
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

  // If action applied data, move to next question
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
      reply: "Hey there! I'm here to help you find the best credit card. Let's get started — what type of card interests you?",
      options: quickReplies.cardType,
      updatedState
    };
  }

  // Handle thanks
  if (intent.type === 'thanks') {
    const hasResults = hasMinimumData(updatedState);
    return {
      reply: hasResults 
        ? "You're welcome! Feel free to ask if you have more questions about these cards, or start over if you want to explore different options."
        : "Happy to help! Let's keep going — what type of credit card interests you?",
      options: hasResults ? quickReplies.afterResults : quickReplies.cardType,
      updatedState
    };
  }

  // Handle confusion
  if (intent.type === 'confused') {
    const contextHelp = !updatedState.cardType 
      ? "No worries! I'm helping you find a credit card. Start by telling me what type you need — travel rewards for flights and hotels, cash back for simple savings, or maybe a card to build credit?"
      : !updatedState.priority
        ? "Let me clarify — I'm trying to understand what's most important to you. Is it avoiding annual fees? Getting a big sign-up bonus? Or earning the highest rewards rate?"
        : "I'm finding you the best credit cards based on your preferences. Last question — where do you spend most of your money?";
    
    return {
      reply: contextHelp,
      options: !updatedState.cardType 
        ? quickReplies.cardType 
        : !updatedState.priority 
          ? quickReplies.priority 
          : quickReplies.spending,
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
        { text: 'Just show me popular cards', action: 'show_popular' }
      ],
      updatedState
    };
  }

  // Handle off-topic
  if (intent.type === 'off_topic') {
    return {
      reply: "I'm specifically designed to help you find the best credit card! I can compare rewards, fees, and perks across top cards. Want me to help you find a great match?",
      options: quickReplies.cardType,
      updatedState
    };
  }

  // Handle gibberish
  if (intent.type === 'gibberish') {
    return {
      reply: "I didn't quite catch that. Try telling me what type of credit card you're looking for, or just tap one of the options below!",
      options: quickReplies.cardType,
      updatedState
    };
  }

  // Handle unrecognized but potentially on-topic
  if (intent.type === 'unrecognized' || intent.type === 'card_unclear') {
    const nudge = !updatedState.cardType
      ? "I want to make sure I find the right card for you. Are you looking for travel rewards, cash back, or something else?"
      : !updatedState.priority
        ? "Got it! To narrow down the best options, what matters most — no annual fee, best rewards, or a great sign-up bonus?"
        : "Thanks! One more thing — where do you typically spend the most?";
    
    return {
      reply: nudge,
      options: !updatedState.cardType 
        ? quickReplies.cardType 
        : !updatedState.priority 
          ? quickReplies.priority 
          : quickReplies.spending,
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
          { text: 'Now help me find a card', action: 'show_results' },
          { text: 'I have another question', action: 'generic_query' }
        ],
        updatedState
      };
    }
    return {
      reply: "That's a great question! While I don't have specific info on that, I can definitely help you compare credit cards. What type are you interested in?",
      options: quickReplies.cardType,
      updatedState
    };
  }

  // Handle specific intent signals from messages
  if (intent.type === 'card_type_signal' && !updatedState.priority) {
    return {
      reply: "Got it! Now, what's most important to you in a credit card?",
      options: quickReplies.priority,
      updatedState
    };
  }

  if (intent.type === 'priority_signal' && !updatedState.cardType) {
    const priorityAck = {
      no_annual_fee: "No annual fee is definitely smart! ",
      signup_bonus: "Sign-up bonuses can be really valuable! ",
      high_rewards: "Maximizing rewards is a great goal! ",
      low_interest: "Low interest is important if you might carry a balance. "
    }[updatedState.priority] || "";
    
    return {
      reply: `${priorityAck}To find your best match, what type of card do you need?`,
      options: quickReplies.cardType,
      updatedState
    };
  }

  if (intent.type === 'spending_signal' && !updatedState.cardType) {
    return {
      reply: "That's helpful to know! What type of credit card are you looking for?",
      options: quickReplies.cardType,
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
