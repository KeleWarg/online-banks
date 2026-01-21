export const CARDS = [
  {
    id: 'chase-sapphire-preferred',
    name: 'Chase Sapphire Preferred®',
    rating: 5.0,
    category: 'Best Credit Card for Travel Rewards',
    description: 'Earn valuable points with flexible transfer partners and strong travel benefits.',
    cardType: ['travel', 'rewards'],
    priorityTags: ['travel', 'rewards', 'bonus'],
    features: ['transfer_partners', 'travel_insurance', 'no_foreign_fee'],
    annualFee: '$95',
    welcomeBonus: '75,000 points',
    applyUrl: 'https://www.forbes.com/advisor/credit-cards/chase-sapphire-preferred-review/'
  },
  {
    id: 'capital-one-venture-x',
    name: 'Capital One Venture X',
    rating: 4.9,
    category: 'Best Credit Card for Premium Travel',
    description: 'Premium perks including lounge access and elevated travel rewards.',
    cardType: ['travel', 'premium'],
    priorityTags: ['travel', 'lounge', 'premium'],
    features: ['lounge_access', 'travel_credit', 'no_foreign_fee'],
    annualFee: '$395',
    welcomeBonus: '75,000 miles',
    applyUrl: 'https://www.forbes.com/advisor/credit-cards/capital-one-venture-x-review/'
  },
  {
    id: 'amex-gold',
    name: 'American Express® Gold',
    rating: 4.8,
    category: 'Best Credit Card for Dining & Groceries',
    description: 'Earn 4X points at restaurants and U.S. supermarkets with valuable credits.',
    cardType: ['dining', 'groceries', 'rewards'],
    priorityTags: ['dining', 'groceries', 'rewards'],
    features: ['dining_credits', 'uber_credits', 'membership_rewards'],
    annualFee: '$325',
    welcomeBonus: '60,000 points',
    applyUrl: 'https://www.forbes.com/advisor/credit-cards/american-express-gold-card-review/'
  },
  {
    id: 'chase-freedom-unlimited',
    name: 'Chase Freedom Unlimited®',
    rating: 4.8,
    category: 'Best Credit Card for No Annual Fee',
    description: 'Earn unlimited 1.5% cash back with no annual fee and intro APR offer.',
    cardType: ['cash_back', 'no_fee'],
    priorityTags: ['no_fee', 'cash_back', 'intro_apr'],
    features: ['no_annual_fee', 'intro_apr', 'cash_back'],
    annualFee: '$0',
    welcomeBonus: '$200',
    applyUrl: 'https://www.forbes.com/advisor/credit-cards/chase-freedom-unlimited-review/'
  },
  {
    id: 'wells-fargo-active-cash',
    name: 'Wells Fargo Active Cash®',
    rating: 4.7,
    category: 'Best Credit Card for Flat-Rate Cash Back',
    description: 'Earn unlimited 2% cash rewards on purchases with no annual fee.',
    cardType: ['cash_back', 'no_fee'],
    priorityTags: ['cash_back', 'no_fee', 'simple'],
    features: ['no_annual_fee', 'flat_rate', 'cell_phone_protection'],
    annualFee: '$0',
    welcomeBonus: '$200',
    applyUrl: 'https://www.forbes.com/advisor/credit-cards/wells-fargo-active-cash-review/'
  },
  {
    id: 'citi-double-cash',
    name: 'Citi Double Cash®',
    rating: 4.7,
    category: 'Best Credit Card for Simple Cash Back',
    description: 'Earn 2% on every purchase—1% when you buy plus 1% when you pay.',
    cardType: ['cash_back', 'no_fee'],
    priorityTags: ['cash_back', 'simple', 'no_fee'],
    features: ['no_annual_fee', 'balance_transfer', 'flat_rate'],
    annualFee: '$0',
    welcomeBonus: '$200',
    applyUrl: 'https://www.forbes.com/advisor/credit-cards/citi-double-cash-review/'
  },
  {
    id: 'capital-one-venture',
    name: 'Capital One Venture',
    rating: 4.6,
    category: 'Best Credit Card for Everyday Travel',
    description: 'Earn unlimited 2X miles on every purchase with flexible redemption.',
    cardType: ['travel', 'rewards'],
    priorityTags: ['travel', 'miles', 'flexible'],
    features: ['no_foreign_fee', 'global_entry_credit', 'flexible_redemption'],
    annualFee: '$95',
    welcomeBonus: '75,000 miles',
    applyUrl: 'https://www.forbes.com/advisor/credit-cards/capital-one-venture-review/'
  },
  {
    id: 'chase-sapphire-reserve',
    name: 'Chase Sapphire Reserve®',
    rating: 4.6,
    category: 'Best Credit Card for Premium Perks',
    description: 'Luxury travel benefits with $300 travel credit and Priority Pass access.',
    cardType: ['travel', 'premium'],
    priorityTags: ['premium', 'travel', 'lounge'],
    features: ['travel_credit', 'lounge_access', 'travel_insurance'],
    annualFee: '$550',
    welcomeBonus: '60,000 points',
    applyUrl: 'https://www.forbes.com/advisor/credit-cards/chase-sapphire-reserve-review/'
  },
  {
    id: 'amex-blue-cash-preferred',
    name: 'Blue Cash Preferred®',
    rating: 4.5,
    category: 'Best Credit Card for Families',
    description: 'Earn 6% cash back at U.S. supermarkets on up to $6,000 per year.',
    cardType: ['cash_back', 'groceries'],
    priorityTags: ['groceries', 'streaming', 'gas'],
    features: ['grocery_rewards', 'streaming_rewards', 'intro_apr'],
    annualFee: '$95',
    welcomeBonus: '$350',
    applyUrl: 'https://www.forbes.com/advisor/credit-cards/blue-cash-preferred-review/'
  },
  {
    id: 'discover-it-cash-back',
    name: 'Discover it® Cash Back',
    rating: 4.5,
    category: 'Best Credit Card for Rotating Categories',
    description: 'Earn 5% cash back in rotating categories each quarter, plus cashback match.',
    cardType: ['cash_back', 'no_fee'],
    priorityTags: ['cash_back', 'rotating', 'no_fee'],
    features: ['no_annual_fee', 'cashback_match', 'no_foreign_fee'],
    annualFee: '$0',
    welcomeBonus: 'Cashback Match',
    applyUrl: 'https://www.forbes.com/advisor/credit-cards/discover-it-cash-back-review/'
  }
];

// Backward compatibility alias
export const BANKS = CARDS;

export const getCardById = (id) => CARDS.find((card) => card.id === id);
export const getBankById = getCardById;

export const getEligibleCards = () => CARDS;
export const getEligibleBanks = getEligibleCards;
