// Vercel Serverless Function for Credit Card Chat API
// All logic bundled into a single file for serverless deployment

// ============== CARDS DATA ==============
const CARDS = [
  {
    id: 'chase-sapphire-preferred',
    name: 'Chase Sapphire Preferred® Card',
    rating: 4.9,
    category: 'Best Travel Rewards Card',
    description: '5x on travel through Chase, 3x on dining, streaming and online groceries. 25% bonus when redeeming for travel.',
    cardTypes: ['travel', 'rewards'],
    priorityTags: ['travel', 'dining', 'points'],
    features: ['no_foreign_fees', 'travel_insurance', 'transfer_partners'],
    annualFee: 95,
    signupBonus: '60,000 points after spending $4,000 in 3 months',
    applyUrl: 'https://www.forbes.com/advisor/credit-cards/reviews/chase-sapphire-preferred/'
  },
  {
    id: 'capital-one-venture',
    name: 'Capital One Venture Rewards',
    rating: 4.8,
    category: 'Best Flat-Rate Travel Card',
    description: 'Unlimited 2x miles on every purchase. Simple redemption with no blackout dates.',
    cardTypes: ['travel', 'rewards'],
    priorityTags: ['travel', 'simplicity'],
    features: ['no_foreign_fees', 'transfer_partners', 'travel_insurance'],
    annualFee: 95,
    signupBonus: '75,000 miles after spending $4,000 in 3 months',
    applyUrl: 'https://www.forbes.com/advisor/credit-cards/reviews/capital-one-venture-rewards/'
  },
  {
    id: 'wells-fargo-active-cash',
    name: 'Wells Fargo Active Cash® Card',
    rating: 4.9,
    category: 'Best Flat-Rate Cash Back Card',
    description: 'Unlimited 2% cash rewards on all purchases. No category tracking needed.',
    cardTypes: ['cash_back'],
    priorityTags: ['cash_back', 'simplicity', 'no_fee'],
    features: ['cell_phone_protection', 'zero_liability'],
    annualFee: 0,
    signupBonus: '$200 after spending $500 in 3 months',
    applyUrl: 'https://www.forbes.com/advisor/credit-cards/reviews/wells-fargo-active-cash/'
  },
  {
    id: 'chase-freedom-unlimited',
    name: 'Chase Freedom Unlimited®',
    rating: 4.8,
    category: 'Best Hybrid Cash Back Card',
    description: '5% on travel through Chase, 3% on dining and drugstores, 1.5% on everything else.',
    cardTypes: ['cash_back', 'rewards'],
    priorityTags: ['cash_back', 'dining', 'flexibility'],
    features: ['purchase_protection', 'extended_warranty'],
    annualFee: 0,
    signupBonus: '$200 after spending $500 in 3 months',
    applyUrl: 'https://www.forbes.com/advisor/credit-cards/reviews/chase-freedom-unlimited/'
  },
  {
    id: 'discover-it-cash-back',
    name: 'Discover it® Cash Back',
    rating: 4.7,
    category: 'Best Rotating Categories Card',
    description: '5% cash back on rotating quarterly categories, 1% on all other purchases. First year cashback match.',
    cardTypes: ['cash_back'],
    priorityTags: ['cash_back', 'bonus_categories'],
    features: ['cashback_match', 'no_foreign_fees', 'free_fico'],
    annualFee: 0,
    signupBonus: 'Unlimited Cashback Match for first year',
    applyUrl: 'https://www.forbes.com/advisor/credit-cards/reviews/discover-it-cash-back/'
  },
  {
    id: 'citi-double-cash',
    name: 'Citi Double Cash® Card',
    rating: 4.7,
    category: 'Best for Balance Transfers',
    description: '2% cash back (1% when you buy, 1% when you pay). 18-month 0% intro APR on balance transfers.',
    cardTypes: ['cash_back', 'balance_transfer'],
    priorityTags: ['cash_back', 'balance_transfer', 'simplicity'],
    features: ['zero_liability', 'citi_entertainment'],
    annualFee: 0,
    signupBonus: 'N/A - focus on ongoing rewards',
    applyUrl: 'https://www.forbes.com/advisor/credit-cards/reviews/citi-double-cash/'
  },
  {
    id: 'amex-gold',
    name: 'American Express® Gold Card',
    rating: 4.8,
    category: 'Best for Dining & Groceries',
    description: '4x points at restaurants and U.S. supermarkets (up to $25K/year). $120 dining credit annually.',
    cardTypes: ['rewards', 'dining'],
    priorityTags: ['dining', 'groceries', 'points'],
    features: ['dining_credit', 'uber_credit', 'no_foreign_fees'],
    annualFee: 250,
    signupBonus: '60,000 points after spending $6,000 in 6 months',
    applyUrl: 'https://www.forbes.com/advisor/credit-cards/reviews/american-express-gold-card/'
  },
  {
    id: 'capital-one-savor',
    name: 'Capital One SavorOne Cash Rewards',
    rating: 4.6,
    category: 'Best for Dining & Entertainment',
    description: '3% on dining, entertainment, streaming and grocery stores. 1% on everything else.',
    cardTypes: ['cash_back', 'dining'],
    priorityTags: ['dining', 'entertainment', 'no_fee'],
    features: ['no_foreign_fees', 'extended_warranty'],
    annualFee: 0,
    signupBonus: '$200 after spending $500 in 3 months',
    applyUrl: 'https://www.forbes.com/advisor/credit-cards/reviews/capital-one-savorone/'
  },
  {
    id: 'chase-sapphire-reserve',
    name: 'Chase Sapphire Reserve®',
    rating: 4.7,
    category: 'Best Premium Travel Card',
    description: '10x on hotels and car rentals through Chase, 5x on flights, 3x on dining. $300 annual travel credit.',
    cardTypes: ['travel', 'premium'],
    priorityTags: ['travel', 'luxury', 'lounge_access'],
    features: ['lounge_access', 'global_entry_credit', 'travel_insurance', 'no_foreign_fees'],
    annualFee: 550,
    signupBonus: '60,000 points after spending $4,000 in 3 months',
    applyUrl: 'https://www.forbes.com/advisor/credit-cards/reviews/chase-sapphire-reserve/'
  },
  {
    id: 'discover-it-secured',
    name: 'Discover it® Secured Credit Card',
    rating: 4.5,
    category: 'Best for Building Credit',
    description: '2% cash back at gas stations and restaurants (up to $1,000/quarter), 1% on all else. Reports to all 3 bureaus.',
    cardTypes: ['secured', 'credit_building'],
    priorityTags: ['credit_building', 'cash_back'],
    features: ['cashback_match', 'free_fico', 'automatic_reviews'],
    annualFee: 0,
    signupBonus: 'Unlimited Cashback Match for first year',
    applyUrl: 'https://www.forbes.com/advisor/credit-cards/reviews/discover-it-secured/'
  }
];

const getEligibleCards = () => CARDS;

// ============== CONTENT LIBRARY ==============
const CONTENT_LIBRARY = {
  education: {
    apr_basics: {
      id: 'apr_basics',
      title: 'APR Basics',
      body: 'APR (Annual Percentage Rate) is the yearly interest rate you pay on balances carried month-to-month. Pay your full balance to avoid interest charges entirely.',
      link: { text: 'APR guide', url: '/advisor/credit-cards/what-is-apr/' },
      type: 'education'
    },
    credit_score: {
      id: 'credit_score',
      title: 'Credit Score Impact',
      body: 'Credit cards can help build your score when used responsibly. Keep utilization under 30%, pay on time, and avoid opening too many accounts at once.',
      link: { text: 'Credit score tips', url: '/advisor/credit-cards/improve-credit-score/' },
      type: 'education'
    },
    rewards_types: {
      id: 'rewards_types',
      title: 'Rewards: Points vs Cash Back vs Miles',
      body: 'Cash back gives you money back on purchases. Points offer flexible redemption options. Miles are best for travel. Choose based on how you want to redeem rewards.',
      link: { text: 'Rewards comparison', url: '/advisor/credit-cards/rewards-guide/' },
      type: 'education'
    },
    annual_fees: {
      id: 'annual_fees',
      title: 'Annual Fees Explained',
      body: 'Premium cards charge annual fees but offer valuable perks like travel credits, lounge access, and higher rewards rates. Calculate if the benefits outweigh the cost.',
      link: { text: 'Fee comparison', url: '/advisor/credit-cards/annual-fee-worth-it/' },
      type: 'education'
    },
    balance_transfer: {
      id: 'balance_transfer',
      title: 'Balance Transfers',
      body: 'Balance transfer cards let you move high-interest debt to a card with 0% intro APR. Watch for transfer fees (typically 3-5%) and pay off before the intro period ends.',
      link: { text: 'Balance transfer guide', url: '/advisor/credit-cards/balance-transfer/' },
      type: 'education'
    },
    signup_bonus: {
      id: 'signup_bonus',
      title: 'Sign-Up Bonuses',
      body: 'Many cards offer welcome bonuses worth $200-$1,000+ after meeting minimum spend requirements. Only apply if you can meet the spend naturally without overspending.',
      link: { text: 'Best bonuses', url: '/advisor/credit-cards/best-signup-bonuses/' },
      type: 'education'
    },
    secured_cards: {
      id: 'secured_cards',
      title: 'Secured Credit Cards',
      body: 'Secured cards require a refundable deposit that becomes your credit limit. They\'re great for building or rebuilding credit, and many graduate to unsecured cards.',
      link: { text: 'Secured cards', url: '/advisor/credit-cards/best-secured-cards/' },
      type: 'education'
    }
  }
};

const findEducationContent = (topic) => {
  const normalized = topic.toLowerCase();
  const mappings = [
    { id: 'apr_basics', keywords: ['apr', 'interest rate', 'interest'] },
    { id: 'credit_score', keywords: ['credit score', 'fico', 'credit rating', 'build credit'] },
    { id: 'rewards_types', keywords: ['rewards', 'points', 'miles', 'cash back', 'cashback'] },
    { id: 'annual_fees', keywords: ['annual fee', 'yearly fee', 'fee worth'] },
    { id: 'balance_transfer', keywords: ['balance transfer', 'transfer debt', '0% apr', 'pay off debt'] },
    { id: 'signup_bonus', keywords: ['sign up bonus', 'signup bonus', 'welcome bonus', 'intro bonus'] },
    { id: 'secured_cards', keywords: ['secured', 'deposit', 'build credit', 'bad credit', 'no credit'] }
  ];

  for (const mapping of mappings) {
    if (mapping.keywords.some((keyword) => normalized.includes(keyword))) {
      return CONTENT_LIBRARY.education[mapping.id];
    }
  }

  return null;
};

// ============== INTENT CLASSIFIER ==============
const CARD_TYPE_PATTERNS = [
  { type: 'travel', patterns: [/travel/i, /airline/i, /hotel/i, /miles/i, /points/i, /vacation/i] },
  { type: 'cash_back', patterns: [/cash\s*back/i, /cashback/i, /cash rewards/i, /percent back/i] },
  { type: 'rewards', patterns: [/rewards/i, /points/i, /earn/i] },
  { type: 'balance_transfer', patterns: [/balance transfer/i, /transfer balance/i, /pay off debt/i, /0% apr/i, /zero apr/i] },
  { type: 'credit_building', patterns: [/build credit/i, /building credit/i, /no credit/i, /bad credit/i, /first card/i, /starter/i, /secured/i] },
  { type: 'business', patterns: [/business/i, /small business/i, /company/i] },
  { type: 'student', patterns: [/student/i, /college/i, /university/i] }
];

const PRIORITY_PATTERNS = [
  { type: 'no_annual_fee', patterns: [/no (annual )?fee/i, /fee.?free/i, /\$0 fee/i, /zero fee/i, /without fee/i] },
  { type: 'high_rewards', patterns: [/high(est)? reward/i, /best reward/i, /most points/i, /maximize/i, /best rate/i] },
  { type: 'signup_bonus', patterns: [/sign.?up bonus/i, /welcome bonus/i, /intro bonus/i, /bonus offer/i] },
  { type: 'low_interest', patterns: [/low interest/i, /low apr/i, /0% interest/i, /zero interest/i] },
  { type: 'lounge_access', patterns: [/lounge/i, /airport lounge/i, /priority pass/i] },
  { type: 'no_foreign_fees', patterns: [/no foreign/i, /foreign transaction/i, /international/i, /travel abroad/i] }
];

const SPENDING_PATTERNS = [
  { type: 'dining', patterns: [/dining/i, /restaurant/i, /eat out/i, /food/i] },
  { type: 'groceries', patterns: [/grocery/i, /groceries/i, /supermarket/i] },
  { type: 'gas', patterns: [/gas/i, /fuel/i, /gas station/i] },
  { type: 'online_shopping', patterns: [/online shop/i, /amazon/i, /e-commerce/i] },
  { type: 'entertainment', patterns: [/entertainment/i, /streaming/i, /movies/i, /concerts/i] },
  { type: 'everything', patterns: [/everything/i, /all purchases/i, /everyday/i, /general/i] }
];

const CREDIT_SCORE_PATTERNS = [
  { type: 'excellent', patterns: [/excellent credit/i, /great credit/i, /800/i, /750\+/i] },
  { type: 'good', patterns: [/good credit/i, /700/i, /decent credit/i] },
  { type: 'fair', patterns: [/fair credit/i, /average credit/i, /650/i, /okay credit/i] },
  { type: 'poor', patterns: [/poor credit/i, /bad credit/i, /low credit/i, /rebuilding/i] },
  { type: 'none', patterns: [/no credit/i, /no history/i, /first card/i, /new to credit/i] }
];

const EDUCATION_PATTERNS = [
  /what('s| is| are) /i,
  /how (do|does|to) /i,
  /explain/i,
  /tell me about/i,
  /learn about/i,
  /difference between/i
];

const READY_PATTERNS = [
  /show me/i,
  /what do you recommend/i,
  /recommend/i,
  /best card/i,
  /top cards/i,
  /find me/i,
  /what are my options/i,
  /which card/i
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

const CREDIT_CARD_RELATED = [
  /card/i,
  /credit/i,
  /reward/i,
  /points/i,
  /miles/i,
  /cash\s*back/i,
  /apr/i,
  /annual fee/i,
  /bonus/i,
  /travel/i,
  /dining/i
];

const classifyIntent = (message) => {
  const normalized = message.toLowerCase().trim();
  const readyForResults = READY_PATTERNS.some((pattern) => pattern.test(normalized));
  const isCreditCardRelated = CREDIT_CARD_RELATED.some((pattern) => pattern.test(normalized));

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

  for (const cardType of CARD_TYPE_PATTERNS) {
    if (cardType.patterns.some((pattern) => pattern.test(normalized))) {
      return { type: 'card_type_signal', cardType: cardType.type, readyForResults };
    }
  }

  for (const priority of PRIORITY_PATTERNS) {
    if (priority.patterns.some((pattern) => pattern.test(normalized))) {
      return { type: 'priority_signal', priority: priority.type, readyForResults };
    }
  }

  for (const spending of SPENDING_PATTERNS) {
    if (spending.patterns.some((pattern) => pattern.test(normalized))) {
      return { type: 'spending_signal', spending: spending.type, readyForResults };
    }
  }

  for (const credit of CREDIT_SCORE_PATTERNS) {
    if (credit.patterns.some((pattern) => pattern.test(normalized))) {
      return { type: 'credit_score_signal', creditScore: credit.type, readyForResults };
    }
  }

  if (isCreditCardRelated) {
    return { type: 'card_unclear', readyForResults };
  }

  if (normalized.length < 3 || !/[a-z]/i.test(normalized)) {
    return { type: 'gibberish', readyForResults: false };
  }

  return { type: 'unrecognized', readyForResults };
};

const extractDataFromMessage = (message) => {
  const normalized = message.toLowerCase();
  const data = {};

  for (const cardType of CARD_TYPE_PATTERNS) {
    if (cardType.patterns.some((pattern) => pattern.test(normalized))) {
      data.cardType = cardType.type;
      break;
    }
  }

  for (const priority of PRIORITY_PATTERNS) {
    if (priority.patterns.some((pattern) => pattern.test(normalized))) {
      data.priority = priority.type;
      break;
    }
  }

  for (const spending of SPENDING_PATTERNS) {
    if (spending.patterns.some((pattern) => pattern.test(normalized))) {
      data.spending = spending.type;
      break;
    }
  }

  for (const credit of CREDIT_SCORE_PATTERNS) {
    if (credit.patterns.some((pattern) => pattern.test(normalized))) {
      data.creditScore = credit.type;
      break;
    }
  }

  return data;
};

// ============== SCORING ENGINE ==============
const CARD_TYPE_POINTS = 20;
const PRIORITY_POINTS = 15;
const SPENDING_POINTS = 10;
const CREDIT_SCORE_POINTS = 5;

const priorityReasonMap = {
  no_annual_fee: 'No annual fee',
  high_rewards: 'Excellent rewards rates',
  signup_bonus: 'Strong sign-up bonus',
  low_interest: 'Low APR options',
  lounge_access: 'Airport lounge access',
  no_foreign_fees: 'No foreign transaction fees'
};

const spendingReasonMap = {
  dining: 'Great for dining rewards',
  groceries: 'Strong grocery rewards',
  gas: 'Gas station bonuses',
  online_shopping: 'Online shopping rewards',
  entertainment: 'Entertainment perks',
  everything: 'Solid flat-rate rewards'
};

const hasMinimumData = (state) => {
  return Boolean(state.cardType && (state.priority || state.spending));
};

const matchesCardType = (card, cardType) => {
  if (!cardType) return true;
  return card.cardTypes.includes(cardType);
};

const matchesPriority = (card, priority) => {
  if (!priority) return true;
  
  if (priority === 'no_annual_fee') {
    return card.annualFee === 0;
  }
  if (priority === 'lounge_access') {
    return card.features.includes('lounge_access');
  }
  if (priority === 'no_foreign_fees') {
    return card.features.includes('no_foreign_fees');
  }
  
  return card.priorityTags.includes(priority);
};

const matchesSpending = (card, spending) => {
  if (!spending) return true;
  if (spending === 'everything') {
    return card.priorityTags.includes('simplicity') || card.cardTypes.includes('cash_back');
  }
  return card.priorityTags.includes(spending);
};

const matchesCreditScore = (card, creditScore) => {
  if (!creditScore) return true;
  
  if (creditScore === 'poor' || creditScore === 'none') {
    return card.cardTypes.includes('secured') || card.cardTypes.includes('credit_building');
  }
  
  if (card.cardTypes.includes('premium') || card.annualFee > 200) {
    return creditScore === 'excellent' || creditScore === 'good';
  }
  
  return true;
};

const getMatchReasons = (card, state) => {
  const reasons = [];

  if (state.cardType && matchesCardType(card, state.cardType)) {
    if (state.cardType === 'travel') {
      reasons.push('Excellent for travel rewards');
    } else if (state.cardType === 'cash_back') {
      reasons.push('Strong cash back earning');
    } else if (state.cardType === 'balance_transfer') {
      reasons.push('Great for paying down debt');
    } else if (state.cardType === 'credit_building') {
      reasons.push('Helps build credit history');
    }
  }

  if (state.priority && priorityReasonMap[state.priority]) {
    if (matchesPriority(card, state.priority)) {
      reasons.push(priorityReasonMap[state.priority]);
    }
  }

  if (state.spending && spendingReasonMap[state.spending]) {
    if (matchesSpending(card, state.spending)) {
      reasons.push(spendingReasonMap[state.spending]);
    }
  }

  if (card.annualFee === 0) {
    reasons.push('$0 annual fee');
  } else {
    reasons.push(`$${card.annualFee} annual fee`);
  }

  if (reasons.length === 0) {
    reasons.push(card.category);
  }

  return reasons.slice(0, 3);
};

const scoreCard = (card, state) => {
  const baseline = 60 * (card.rating / 5);
  let cardTypePoints = 0;
  let priorityPoints = 0;
  let spendingPoints = 0;
  let creditPoints = 0;

  if (state.cardType && matchesCardType(card, state.cardType)) {
    cardTypePoints = CARD_TYPE_POINTS;
  }

  if (state.priority) {
    priorityPoints = matchesPriority(card, state.priority) ? PRIORITY_POINTS : PRIORITY_POINTS * 0.3;
  } else {
    priorityPoints = PRIORITY_POINTS * 0.5;
  }

  if (state.spending) {
    spendingPoints = matchesSpending(card, state.spending) ? SPENDING_POINTS : SPENDING_POINTS * 0.3;
  } else {
    spendingPoints = SPENDING_POINTS * 0.5;
  }

  if (state.creditScore) {
    creditPoints = matchesCreditScore(card, state.creditScore) ? CREDIT_SCORE_POINTS : -10;
  }

  return baseline + cardTypePoints + priorityPoints + spendingPoints + creditPoints;
};

const runScoring = (state) => {
  let disclosureNeeded = false;
  const candidates = getEligibleCards();

  let filtered = candidates.filter((card) => matchesCardType(card, state.cardType));

  if (state.creditScore) {
    filtered = filtered.filter((card) => matchesCreditScore(card, state.creditScore));
  }

  if (filtered.length < 3) {
    filtered = candidates;
    disclosureNeeded = true;
  }

  const results = filtered
    .map((card) => ({
      card: {
        id: card.id,
        name: card.name,
        rating: card.rating,
        category: card.category,
        description: card.description,
        annualFee: card.annualFee,
        signupBonus: card.signupBonus,
        applyUrl: card.applyUrl
      },
      finalScore: scoreCard(card, state),
      matchReasons: getMatchReasons(card, state)
    }))
    .sort((a, b) => b.finalScore - a.finalScore)
    .slice(0, 3);

  return { results, disclosureNeeded };
};

// ============== CHAT LOGIC ==============
const getInitialState = () => ({
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

const handleChat = ({ state, message, action }) => {
  let updatedState = { ...state };

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

  if (action === 'restart') {
    updatedState = getInitialState();
    return {
      reply: "No problem, let's start fresh! What type of credit card are you looking for?",
      options: quickReplies.cardType,
      updatedState
    };
  }

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

  if (action === 'explain_process') {
    return {
      reply: "Here's how I work: I ask a few quick questions about what you're looking for — the type of rewards, what features matter most, and where you spend. Then I match you with the best credit cards from Forbes Advisor's rankings. Ready to try?",
      options: quickReplies.cardType,
      updatedState
    };
  }

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

  if (action === 'show_results') {
    if (hasMinimumData(updatedState)) {
      return { ...buildResultsResponse(updatedState), updatedState };
    }
    return { ...askNextQuestion(updatedState), updatedState };
  }

  let actionAppliedData = false;
  if (action && action !== 'generic_query') {
    const dataFromAction = actionToState(action);
    if (Object.keys(dataFromAction).length > 0) {
      updatedState = { ...updatedState, ...dataFromAction };
      actionAppliedData = true;
    }
  }

  if (message) {
    const extracted = extractDataFromMessage(message);
    updatedState = { ...updatedState, ...extracted };
    updatedState.messagesCount += 1;
  }

  if (actionAppliedData) {
    if (hasMinimumData(updatedState)) {
      return { ...buildResultsResponse(updatedState), updatedState };
    }
    return { ...askNextQuestion(updatedState), updatedState };
  }

  const intent = message ? classifyIntent(message) : { type: 'generic_query', readyForResults: false };

  if (intent.readyForResults && hasMinimumData(updatedState)) {
    return { ...buildResultsResponse(updatedState), updatedState };
  }

  if (intent.type === 'greeting') {
    return {
      reply: "Hey there! I'm here to help you find the best credit card. Let's get started — what type of card interests you?",
      options: quickReplies.cardType,
      updatedState
    };
  }

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

  if (intent.type === 'off_topic') {
    return {
      reply: "I'm specifically designed to help you find the best credit card! I can compare rewards, fees, and perks across top cards. Want me to help you find a great match?",
      options: quickReplies.cardType,
      updatedState
    };
  }

  if (intent.type === 'gibberish') {
    return {
      reply: "I didn't quite catch that. Try telling me what type of credit card you're looking for, or just tap one of the options below!",
      options: quickReplies.cardType,
      updatedState
    };
  }

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

  if (hasMinimumData(updatedState) && updatedState.messagesCount >= 3) {
    return { ...buildResultsResponse(updatedState), updatedState };
  }

  return { ...askNextQuestion(updatedState), updatedState };
};

// ============== VERCEL HANDLER ==============
export default function handler(req, res) {
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

  const currentState = state || getInitialState();
  
  const { reply, contentCard, options, resultsCard, updatedState } = handleChat({
    state: currentState,
    message,
    action
  });

  res.status(200).json({
    reply,
    contentCard,
    options,
    resultsCard,
    state: updatedState || currentState
  });
}
