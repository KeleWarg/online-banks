export const CARDS = [
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

export const getCardById = (id) => CARDS.find((card) => card.id === id);

export const getEligibleCards = () => CARDS;
