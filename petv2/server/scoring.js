import { getEligibleBanks } from './data/banks.js';

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

export const hasMinimumData = (state) => {
  // Require at least account type AND priority to show results
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

export const runScoring = (state) => {
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
