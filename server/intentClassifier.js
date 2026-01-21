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

// Conversational patterns for natural responses
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

export const classifyIntent = (message) => {
  const normalized = message.toLowerCase().trim();
  const readyForResults = READY_PATTERNS.some((pattern) => pattern.test(normalized));
  const isCreditCardRelated = CREDIT_CARD_RELATED.some((pattern) => pattern.test(normalized));

  // Check conversational patterns first (order matters!)
  if (GREETING_PATTERNS.some((pattern) => pattern.test(normalized))) {
    return { type: 'greeting', readyForResults: false };
  }

  // Check negative before thanks (to catch "no thanks")
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

  // Check if it's at least credit-card-related but unrecognized
  if (isCreditCardRelated) {
    return { type: 'card_unclear', readyForResults };
  }

  // Completely unrecognized - check message length to determine if gibberish
  if (normalized.length < 3 || !/[a-z]/i.test(normalized)) {
    return { type: 'gibberish', readyForResults: false };
  }

  return { type: 'unrecognized', readyForResults };
};

export const extractDataFromMessage = (message) => {
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
