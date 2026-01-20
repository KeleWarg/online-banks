// Vercel Serverless Function for Banking Chat API
// All logic bundled into a single file for serverless deployment

// ============== BANKS DATA ==============
const BANKS = [
  {
    id: 'bank5-connect',
    name: 'Bank5 Connect',
    rating: 5.0,
    category: 'Best Online Bank for Checking Accounts',
    description: 'Checking, savings and CDs with a checking-first focus.',
    accountTypes: ['checking', 'savings', 'cds'],
    priorityTags: ['fees', 'ease'],
    accessFeatures: ['atm', 'mobile_deposit', 'direct_deposit'],
    applyUrl: 'https://www.forbes.com/advisor/banking/bank5-connect-review/'
  },
  {
    id: 'quontic-bank',
    name: 'Quontic Bank',
    rating: 4.9,
    category: 'Best Online Bank for High APYs',
    description: 'Savings, checking, MMAs and CDs with strong yields.',
    accountTypes: ['checking', 'savings', 'money_market', 'cds'],
    priorityTags: ['apy'],
    accessFeatures: ['atm', 'mobile_deposit', 'direct_deposit'],
    applyUrl: 'https://www.quonticbank.com/'
  },
  {
    id: 'ally-bank',
    name: 'Ally Bank',
    rating: 4.8,
    category: 'Best Online Bank for Savings Tools',
    description: 'Savings, checking, MMAs and CDs with goal tools.',
    accountTypes: ['checking', 'savings', 'money_market', 'cds'],
    priorityTags: ['tools', 'ease'],
    accessFeatures: ['atm', 'mobile_deposit', 'direct_deposit'],
    applyUrl: 'https://www.forbes.com/advisor/banking/ally-bank-review/'
  },
  {
    id: 'discover-bank',
    name: 'Discover Bank',
    rating: 4.7,
    category: 'Best Online Bank for No Fees',
    description: 'Savings, checking and CDs with low fees.',
    accountTypes: ['checking', 'savings', 'cds'],
    priorityTags: ['fees'],
    accessFeatures: ['atm', 'mobile_deposit', 'direct_deposit'],
    applyUrl: 'https://www.forbes.com/advisor/banking/discover-bank-review/'
  },
  {
    id: 'synchrony-bank',
    name: 'Synchrony Bank',
    rating: 4.7,
    category: 'Best Online Bank for High-Yield Savings',
    description: 'High-yield savings, MMAs, CDs and IRAs.',
    accountTypes: ['savings', 'money_market', 'cds'],
    priorityTags: ['apy'],
    accessFeatures: ['atm', 'mobile_deposit', 'direct_deposit'],
    applyUrl: 'https://www.forbes.com/advisor/banking/synchrony-bank-review/'
  },
  {
    id: 'nbkc-bank',
    name: 'NBKC Bank',
    rating: 4.6,
    category: 'Best Online Bank for Full-Service Banking',
    description: 'Savings, checking, MMAs and CDs in one place.',
    accountTypes: ['checking', 'savings', 'money_market', 'cds'],
    priorityTags: ['support', 'ease'],
    accessFeatures: ['atm', 'mobile_deposit', 'direct_deposit'],
    applyUrl: 'https://www.forbes.com/advisor/banking/nbkc-bank-review/'
  },
  {
    id: 'sofi',
    name: 'SoFi',
    rating: 4.5,
    category: 'Best Online Bank for Mobile Check Deposit',
    description: 'Checking and savings with mobile-first access.',
    accountTypes: ['checking', 'savings'],
    priorityTags: ['mobile', 'ease'],
    accessFeatures: ['mobile_deposit', 'direct_deposit'],
    applyUrl: 'https://www.sofi.com/banking/'
  },
  {
    id: 'everbank',
    name: 'EverBank',
    rating: 4.5,
    category: 'Best Online Bank for CDs',
    description: 'Checking, MMAs and CDs with competitive rates.',
    accountTypes: ['checking', 'money_market', 'cds'],
    priorityTags: ['apy'],
    accessFeatures: ['atm', 'mobile_deposit', 'direct_deposit'],
    applyUrl: 'https://www.forbes.com/advisor/banking/everbank-review/'
  },
  {
    id: 'capital-one-360',
    name: 'Capital One 360',
    rating: 4.4,
    category: 'Best Online Bank for Customer Service',
    description: 'Savings, checking and CDs with strong support.',
    accountTypes: ['checking', 'savings', 'cds'],
    priorityTags: ['support', 'ease'],
    accessFeatures: ['atm', 'mobile_deposit', 'direct_deposit', 'cash_deposit'],
    applyUrl: 'https://www.capitalone.com/bank/'
  },
  {
    id: 'first-internet-bank',
    name: 'First Internet Bank',
    rating: 4.4,
    category: 'Best Online Bank for Small Business',
    description: 'Checking, savings, MMAs and CDs for SMBs.',
    accountTypes: ['checking', 'savings', 'money_market', 'cds', 'business'],
    priorityTags: ['support'],
    accessFeatures: ['mobile_deposit', 'direct_deposit'],
    applyUrl: 'https://www.firstib.com/'
  }
];

const getEligibleBanks = () => BANKS;

// ============== CONTENT LIBRARY ==============
const CONTENT_LIBRARY = {
  education: {
    apy_basics: {
      id: 'apy_basics',
      title: 'APY Basics',
      body: 'APY is the annual percentage yield you earn on savings. It includes compound interest, so a higher APY generally means your money grows faster over time.',
      link: { text: 'APY guide', url: '/advisor/banking/what-is-apy/' },
      type: 'education'
    },
    fdic_insurance: {
      id: 'fdic_insurance',
      title: 'FDIC Insurance',
      body: 'FDIC insurance protects your deposits up to $250,000 per depositor, per bank, per ownership category. Most online banks are FDIC insured.',
      link: { text: 'FDIC coverage', url: '/advisor/banking/fdic-insurance/' },
      type: 'education'
    },
    cds_explainer: {
      id: 'cds_explainer',
      title: 'CDs Explained',
      body: 'A certificate of deposit (CD) locks your money for a set term in exchange for a fixed rate. Longer terms usually offer higher rates.',
      link: { text: 'CDs guide', url: '/advisor/banking/best-cd-rates/' },
      type: 'education'
    },
    checking_vs_savings: {
      id: 'checking_vs_savings',
      title: 'Checking vs Savings',
      body: 'Checking accounts are for everyday spending and bill pay. Savings accounts are for earning interest on balances you do not use daily.',
      link: { text: 'Compare accounts', url: '/advisor/banking/checking-vs-savings/' },
      type: 'education'
    },
    atm_fees: {
      id: 'atm_fees',
      title: 'ATM Fees',
      body: 'Some online banks reimburse out-of-network ATM fees, while others do not. Look for a large fee-free ATM network if you use cash often.',
      link: { text: 'ATM fee tips', url: '/advisor/banking/avoid-atm-fees/' },
      type: 'education'
    }
  },
  fee_breakdowns: {
    monthly_fees: {
      id: 'monthly_fees',
      title: 'Monthly Fees',
      body: 'Many online banks charge no monthly maintenance fees. When they do, fees can often be waived by maintaining a balance or using direct deposit.',
      link: { text: 'Fee-free banks', url: '/advisor/banking/no-fee-checking-accounts/' },
      type: 'education'
    }
  }
};

const findEducationContent = (topic) => {
  const normalized = topic.toLowerCase();
  const mappings = [
    { id: 'apy_basics', keywords: ['apy', 'yield', 'interest rate'] },
    { id: 'fdic_insurance', keywords: ['fdic', 'insurance', 'insured'] },
    { id: 'cds_explainer', keywords: ['cd', 'certificate of deposit'] },
    { id: 'checking_vs_savings', keywords: ['checking', 'savings', 'difference'] },
    { id: 'atm_fees', keywords: ['atm', 'fee', 'cash withdrawal'] }
  ];

  for (const mapping of mappings) {
    if (mapping.keywords.some((keyword) => normalized.includes(keyword))) {
      return CONTENT_LIBRARY.education[mapping.id];
    }
  }

  if (normalized.includes('fee')) {
    return CONTENT_LIBRARY.fee_breakdowns.monthly_fees;
  }

  return null;
};

// ============== INTENT CLASSIFIER ==============
const ACCOUNT_PATTERNS = [
  { type: 'checking', patterns: [/checking/i, /spending/i, /debit/i] },
  { type: 'savings', patterns: [/savings/i, /save/i, /high.?yield/i, /apy/i] },
  { type: 'money_market', patterns: [/money market/i, /\bmma\b/i] },
  { type: 'cds', patterns: [/cd\b/i, /certificate of deposit/i, /term deposit/i] },
  { type: 'business', patterns: [/business/i, /smb/i, /small business/i] },
  { type: 'both', patterns: [/both/i, /checking and savings/i, /combo/i] }
];

const PRIORITY_PATTERNS = [
  { type: 'apy', patterns: [/apy/i, /interest/i, /high.?yield/i, /rate/i] },
  { type: 'fees', patterns: [/fee/i, /no fee/i, /free/i, /low cost/i, /cheap/i] },
  { type: 'atm', patterns: [/atm/i, /cash/i, /withdraw/i, /fee reimbursement/i] },
  { type: 'mobile', patterns: [/mobile/i, /app/i, /deposit/i, /check deposit/i] },
  { type: 'support', patterns: [/support/i, /customer service/i, /phone/i, /help/i] }
];

const ACCESS_PATTERNS = [
  { type: 'direct_deposit', patterns: [/direct deposit/i] },
  { type: 'mobile_deposit', patterns: [/mobile check/i, /mobile deposit/i, /check deposit/i] },
  { type: 'cash_deposit', patterns: [/cash deposit/i, /deposit cash/i, /branch/i] },
  { type: 'transfers', patterns: [/transfer/i, /ach/i, /wire/i] }
];

const BALANCE_PATTERNS = [
  { type: 'under_1000', patterns: [/under \$?1,?000/i, /less than \$?1,?000/i] },
  { type: '1000_10000', patterns: [/\$?1,?000.*\$?10,?000/i, /between \$?1,?000 and \$?10,?000/i] },
  { type: '10000_plus', patterns: [/over \$?10,?000/i, /above \$?10,?000/i, /more than \$?10,?000/i] },
  { type: 'varies', patterns: [/varies/i, /depends/i, /not sure/i] }
];

const EDUCATION_PATTERNS = [
  /what('s| is| are) /i,
  /how (do|does|to) /i,
  /explain/i,
  /tell me about/i,
  /learn about/i
];

const READY_PATTERNS = [
  /show me/i,
  /what do you recommend/i,
  /recommend/i,
  /best bank/i,
  /top banks/i,
  /find me/i,
  /what are my options/i
];

const GREETING_PATTERNS = [
  /^(hi|hello|hey|howdy|hiya|greetings|yo|sup)\b/i,
  /^good (morning|afternoon|evening)/i
];

const THANKS_PATTERNS = [
  /thank/i,
  /thanks/i,
  /appreciate/i,
  /helpful/i,
  /great job/i
];

const CONFUSED_PATTERNS = [
  /^(what|huh|confused|idk|i don'?t know|not sure|maybe)\?*$/i,
  /what do you mean/i,
  /i'?m confused/i,
  /don'?t understand/i,
  /can you explain/i
];

const AFFIRMATIVE_PATTERNS = [
  /^(yes|yeah|yep|yup|sure|ok|okay|alright|sounds good|let'?s do it|go ahead)\b/i
];

const NEGATIVE_PATTERNS = [
  /^no\b/i,
  /^(nope|nah|not really|nevermind|cancel|stop)\b/i,
  /no thanks/i,
  /no thank you/i,
  /i don'?t want/i,
  /not interested/i,
  /never\s*mind/i
];

const OFF_TOPIC_PATTERNS = [
  /weather/i,
  /sports/i,
  /news/i,
  /joke/i,
  /pizza/i,
  /movie/i,
  /music/i,
  /game/i,
  /who are you/i,
  /your name/i,
  /are you (a |an )?(bot|ai|robot|human)/i
];

const BANKING_RELATED = [
  /bank/i,
  /account/i,
  /money/i,
  /save|saving/i,
  /check|checking/i,
  /deposit/i,
  /withdraw/i,
  /interest/i,
  /apy/i,
  /fee/i,
  /atm/i,
  /online/i,
  /cd\b/i,
  /rate/i
];

const classifyIntent = (message) => {
  const normalized = message.toLowerCase().trim();
  const readyForResults = READY_PATTERNS.some((pattern) => pattern.test(normalized));
  const isBankingRelated = BANKING_RELATED.some((pattern) => pattern.test(normalized));

  if (GREETING_PATTERNS.some((pattern) => pattern.test(normalized))) {
    return { type: 'greeting', readyForResults: false };
  }

  if (NEGATIVE_PATTERNS.some((pattern) => pattern.test(normalized))) {
    return { type: 'negative', readyForResults: false };
  }

  if (THANKS_PATTERNS.some((pattern) => pattern.test(normalized))) {
    return { type: 'thanks', readyForResults: false };
  }

  if (CONFUSED_PATTERNS.some((pattern) => pattern.test(normalized))) {
    return { type: 'confused', readyForResults: false };
  }

  if (AFFIRMATIVE_PATTERNS.some((pattern) => pattern.test(normalized))) {
    return { type: 'affirmative', readyForResults: false };
  }

  if (OFF_TOPIC_PATTERNS.some((pattern) => pattern.test(normalized))) {
    return { type: 'off_topic', readyForResults: false };
  }

  if (EDUCATION_PATTERNS.some((pattern) => pattern.test(normalized))) {
    return { type: 'education_request', topic: message, readyForResults };
  }

  for (const account of ACCOUNT_PATTERNS) {
    if (account.patterns.some((pattern) => pattern.test(normalized))) {
      return { type: 'account_signal', accountType: account.type, readyForResults };
    }
  }

  for (const priority of PRIORITY_PATTERNS) {
    if (priority.patterns.some((pattern) => pattern.test(normalized))) {
      return { type: 'priority_signal', priority: priority.type, readyForResults };
    }
  }

  for (const access of ACCESS_PATTERNS) {
    if (access.patterns.some((pattern) => pattern.test(normalized))) {
      return { type: 'access_signal', access: access.type, readyForResults };
    }
  }

  for (const balance of BALANCE_PATTERNS) {
    if (balance.patterns.some((pattern) => pattern.test(normalized))) {
      return { type: 'balance_signal', balance: balance.type, readyForResults };
    }
  }

  if (isBankingRelated) {
    return { type: 'banking_unclear', readyForResults };
  }

  if (normalized.length < 3 || !/[a-z]/i.test(normalized)) {
    return { type: 'gibberish', readyForResults: false };
  }

  return { type: 'unrecognized', readyForResults };
};

const extractDataFromMessage = (message) => {
  const normalized = message.toLowerCase();
  const data = {};

  for (const account of ACCOUNT_PATTERNS) {
    if (account.patterns.some((pattern) => pattern.test(normalized))) {
      data.accountType = account.type;
      break;
    }
  }

  for (const priority of PRIORITY_PATTERNS) {
    if (priority.patterns.some((pattern) => pattern.test(normalized))) {
      data.priority = priority.type;
      break;
    }
  }

  for (const access of ACCESS_PATTERNS) {
    if (access.patterns.some((pattern) => pattern.test(normalized))) {
      data.access = access.type;
      break;
    }
  }

  for (const balance of BALANCE_PATTERNS) {
    if (balance.patterns.some((pattern) => pattern.test(normalized))) {
      data.balance = balance.type;
      break;
    }
  }

  return data;
};

// ============== SCORING ENGINE ==============
const PRIORITY_POINTS = 20;
const ACCOUNT_POINTS = 10;
const ACCESS_POINTS = 5;
const BALANCE_POINTS = 5;

const priorityReasonMap = {
  apy: 'Strong APY offering',
  fees: 'Low-fee structure',
  atm: 'ATM access and reimbursements',
  mobile: 'Mobile-first access',
  support: 'Strong customer support'
};

const hasMinimumData = (state) => {
  return Boolean(state.accountType && state.priority);
};

const matchesAccountType = (bank, accountType) => {
  if (!accountType) return true;
  if (accountType === 'both') {
    return bank.accountTypes.includes('checking') && bank.accountTypes.includes('savings');
  }
  return bank.accountTypes.includes(accountType);
};

const matchesAccess = (bank, access) => {
  if (!access) return true;
  return bank.accessFeatures.includes(access);
};

const matchesPriority = (bank, priority) => {
  if (!priority) return true;
  return bank.priorityTags.includes(priority);
};

const getMatchReasons = (bank, state) => {
  const reasons = [];

  if (state.priority && matchesPriority(bank, state.priority)) {
    reasons.push(priorityReasonMap[state.priority]);
  }

  if (state.accountType && matchesAccountType(bank, state.accountType)) {
    if (state.accountType === 'checking') {
      reasons.push('Strong checking features');
    } else if (state.accountType === 'savings') {
      reasons.push('Competitive savings options');
    } else if (state.accountType === 'cds') {
      reasons.push('Solid CD offerings');
    } else if (state.accountType === 'business') {
      reasons.push('Business-friendly accounts');
    } else if (state.accountType === 'both') {
      reasons.push('Balanced checking and savings');
    }
  }

  if (state.access && matchesAccess(bank, state.access)) {
    if (state.access === 'mobile_deposit') {
      reasons.push('Mobile check deposit available');
    } else if (state.access === 'cash_deposit') {
      reasons.push('Cash deposit options');
    } else if (state.access === 'direct_deposit') {
      reasons.push('Direct deposit friendly');
    } else if (state.access === 'transfers') {
      reasons.push('Flexible transfer options');
    }
  }

  if (reasons.length === 0) {
    reasons.push(bank.category);
  }

  return reasons.slice(0, 3);
};

const scoreBank = (bank, state) => {
  const baseline = 60 * (bank.rating / 5);
  let accountPoints = 0;
  let priorityPoints = 0;
  let accessPoints = 0;
  let balancePoints = 0;

  if (state.accountType && matchesAccountType(bank, state.accountType)) {
    accountPoints = ACCOUNT_POINTS;
  }

  if (state.priority) {
    priorityPoints = matchesPriority(bank, state.priority) ? PRIORITY_POINTS : PRIORITY_POINTS * 0.3;
  } else {
    priorityPoints = PRIORITY_POINTS * 0.5;
  }

  if (state.access) {
    accessPoints = matchesAccess(bank, state.access) ? ACCESS_POINTS : 0;
  } else {
    accessPoints = ACCESS_POINTS * 0.5;
  }

  if (state.balance) {
    balancePoints = BALANCE_POINTS * 0.5;
  }

  return baseline + accountPoints + priorityPoints + accessPoints + balancePoints;
};

const runScoring = (state) => {
  let disclosureNeeded = false;
  const candidates = getEligibleBanks();

  let filtered = candidates.filter((bank) => matchesAccountType(bank, state.accountType));

  if (filtered.length < 3) {
    filtered = candidates;
    disclosureNeeded = true;
  }

  const results = filtered
    .map((bank) => ({
      bank: {
        id: bank.id,
        name: bank.name,
        rating: bank.rating,
        category: bank.category,
        description: bank.description,
        applyUrl: bank.applyUrl
      },
      finalScore: scoreBank(bank, state),
      matchReasons: getMatchReasons(bank, state)
    }))
    .sort((a, b) => b.finalScore - a.finalScore)
    .slice(0, 3);

  return { results, disclosureNeeded };
};

// ============== CHAT LOGIC ==============
const getInitialState = () => ({
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
  afterResults: [
    { text: 'Why is this the best match?', action: 'explain_match' },
    { text: 'What about fees?', action: 'ask_fees' },
    { text: 'Start over', action: 'restart' }
  ]
};

const actionToState = (action) => {
  switch (action) {
    case 'set_account_checking': return { accountType: 'checking' };
    case 'set_account_savings': return { accountType: 'savings' };
    case 'set_account_both': return { accountType: 'both' };
    case 'set_account_cds': return { accountType: 'cds' };
    case 'set_account_money_market': return { accountType: 'money_market' };
    case 'set_account_business': return { accountType: 'business' };
    case 'set_priority_apy': return { priority: 'apy' };
    case 'set_priority_fees': return { priority: 'fees' };
    case 'set_priority_atm': return { priority: 'atm' };
    case 'set_priority_mobile': return { priority: 'mobile' };
    case 'set_priority_support': return { priority: 'support' };
    case 'set_access_direct_deposit': return { access: 'direct_deposit' };
    case 'set_access_mobile_deposit': return { access: 'mobile_deposit' };
    case 'set_access_cash_deposit': return { access: 'cash_deposit' };
    case 'set_access_transfers': return { access: 'transfers' };
    default: return {};
  }
};

const buildResultsResponse = (state) => {
  const { results, disclosureNeeded } = runScoring(state);
  
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

const handleChat = ({ state, message, action }) => {
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

  // Handle show_popular action
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

// ============== VERCEL HANDLER ==============
export default function handler(req, res) {
  // Handle CORS
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { state, message, action } = req.body || {};

  // Use provided state or initialize fresh
  const currentState = state || getInitialState();
  
  const { reply, contentCard, options, resultsCard, updatedState } = handleChat({
    state: currentState,
    message,
    action
  });

  // Return updated state to client - server stores nothing
  res.status(200).json({
    reply,
    contentCard,
    options,
    resultsCard,
    state: updatedState || currentState
  });
}
