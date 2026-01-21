export const CONTENT_LIBRARY = {
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

export const findEducationContent = (topic) => {
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
