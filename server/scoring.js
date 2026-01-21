import { getEligibleCards } from './data/cards.js';

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

export const hasMinimumData = (state) => {
  // Require at least card type AND (priority OR spending category) to show results
  return Boolean(state.cardType && (state.priority || state.spending));
};

const matchesCardType = (card, cardType) => {
  if (!cardType) return true;
  return card.cardTypes.includes(cardType);
};

const matchesPriority = (card, priority) => {
  if (!priority) return true;
  
  // Map priorities to card attributes
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
  
  // Secured cards for poor/no credit
  if (creditScore === 'poor' || creditScore === 'none') {
    return card.cardTypes.includes('secured') || card.cardTypes.includes('credit_building');
  }
  
  // Premium cards need excellent/good credit
  if (card.cardTypes.includes('premium') || card.annualFee > 200) {
    return creditScore === 'excellent' || creditScore === 'good';
  }
  
  return true;
};

const getMatchReasons = (card, state) => {
  const reasons = [];

  // Card type match
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

  // Priority match
  if (state.priority && priorityReasonMap[state.priority]) {
    if (matchesPriority(card, state.priority)) {
      reasons.push(priorityReasonMap[state.priority]);
    }
  }

  // Spending match
  if (state.spending && spendingReasonMap[state.spending]) {
    if (matchesSpending(card, state.spending)) {
      reasons.push(spendingReasonMap[state.spending]);
    }
  }

  // Add annual fee info
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

export const runScoring = (state) => {
  let disclosureNeeded = false;
  const candidates = getEligibleCards();

  // Filter by card type first
  let filtered = candidates.filter((card) => matchesCardType(card, state.cardType));

  // Also filter by credit score if specified
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
