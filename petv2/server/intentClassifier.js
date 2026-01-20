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

export const classifyIntent = (message) => {
  const normalized = message.toLowerCase().trim();

  const readyForResults = READY_PATTERNS.some((pattern) => pattern.test(normalized));

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

  return { type: 'generic_query', readyForResults };
};

export const extractDataFromMessage = (message) => {
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
