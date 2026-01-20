export const BANKS = [
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

export const getBankById = (id) => BANKS.find((bank) => bank.id === id);

export const getEligibleBanks = () => BANKS;
