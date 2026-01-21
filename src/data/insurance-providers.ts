// Credit card provider data - extracted from components for better maintainability
export interface InsurancePlan {
  provider: string;
  category: string;
  description: string;
  logoSrc: string;
  petImageSrc: string;
  petImageClasses: string;
  isPopular: boolean;
}

export interface CostData {
  provider: string;
  dogCost: string;
  catCost: string;
  applyNowUrl: string;
}

export interface PlanDetails {
  provider: string;
  ageRestrictions: string;
  waitingPeriods: string;
  endOfLife: string;
  vetExamFees: string;
  microchipping: string;
  applyNowUrl: string;
}

export interface UserOpinion {
  provider: string;
  csiRating: string;
  likelyToRecommend: string;
  positiveComments: string;
  negativeComments: string;
  applyNowUrl: string;
}

export interface ClaimsData {
  provider: string;
  claimsSatisfaction: string;
  overallSatisfaction: string;
  applyNowUrl: string;
}

// Credit card plans data
export const INSURANCE_PLANS: InsurancePlan[] = [
  {
    provider: "Chase Sapphire Preferred®",
    category: "Best Credit Card for\nTravel Rewards",
    description: "Earn valuable points with flexible transfer partners and strong travel benefits.",
    logoSrc: "/cards/chase-sapphire-preferred.png",
    petImageSrc: "/avatar-placeholder.svg",
    petImageClasses: "absolute -top-2.5 left-[206px] w-[106px] h-[146px] hidden",
    isPopular: true,
  },
  {
    provider: "Capital One Venture X",
    category: "Best Credit Card for\nPremium Travel",
    description: "Premium perks including lounge access and elevated travel rewards.",
    logoSrc: "/cards/capital-one-venture-x.png",
    petImageSrc: "/avatar-placeholder.svg",
    petImageClasses: "absolute -top-2.5 left-[206px] w-[106px] h-[146px] hidden",
    isPopular: false,
  },
  {
    provider: "American Express® Gold",
    category: "Best Credit Card for\nDining & Groceries",
    description: "Earn 4X points at restaurants and U.S. supermarkets with valuable credits.",
    logoSrc: "/cards/amex-gold.png",
    petImageSrc: "/avatar-placeholder.svg",
    petImageClasses: "absolute -top-2.5 left-[206px] w-[106px] h-[146px] hidden",
    isPopular: false,
  },
  {
    provider: "Chase Freedom Unlimited®",
    category: "Best Credit Card for\nNo Annual Fee",
    description: "Earn unlimited 1.5% cash back with no annual fee and intro APR offer.",
    logoSrc: "/cards/chase-freedom-unlimited.png",
    petImageSrc: "/avatar-placeholder.svg",
    petImageClasses: "absolute -top-2.5 left-[206px] w-[106px] h-[146px] hidden",
    isPopular: false,
  },
  {
    provider: "Wells Fargo Active Cash®",
    category: "Best Credit Card for\nFlat-Rate Cash Back",
    description: "Earn unlimited 2% cash rewards on purchases with no annual fee.",
    logoSrc: "/cards/wells-fargo-active-cash.png",
    petImageSrc: "/avatar-placeholder.svg",
    petImageClasses: "absolute -top-2.5 left-[206px] w-[106px] h-[146px] hidden",
    isPopular: false,
  },
  {
    provider: "Citi Double Cash®",
    category: "Best Credit Card for\nSimple Cash Back",
    description: "Earn 2% on every purchase—1% when you buy plus 1% when you pay.",
    logoSrc: "/cards/citi-double-cash.png",
    petImageSrc: "/avatar-placeholder.svg",
    petImageClasses: "absolute -top-2.5 left-[206px] w-[106px] h-[146px] hidden",
    isPopular: false,
  },
  {
    provider: "Capital One Venture",
    category: "Best Credit Card for\nEveryday Travel",
    description: "Earn unlimited 2X miles on every purchase with flexible redemption.",
    logoSrc: "/cards/capital-one-venture.png",
    petImageSrc: "/avatar-placeholder.svg",
    petImageClasses: "absolute -top-2.5 left-[206px] w-[106px] h-[146px] hidden",
    isPopular: false,
  },
  {
    provider: "Chase Sapphire Reserve®",
    category: "Best Credit Card for\nPremium Perks",
    description: "Luxury travel benefits with $300 travel credit and Priority Pass access.",
    logoSrc: "/cards/chase-sapphire-reserve.png",
    petImageSrc: "/avatar-placeholder.svg",
    petImageClasses: "absolute -top-2.5 left-[206px] w-[106px] h-[146px] hidden",
    isPopular: false,
  },
  {
    provider: "Blue Cash Preferred®",
    category: "Best Credit Card for\nFamilies",
    description: "Earn 6% cash back at U.S. supermarkets on up to $6,000 per year.",
    logoSrc: "/cards/amex-blue-cash-preferred.png",
    petImageSrc: "/avatar-placeholder.svg",
    petImageClasses: "absolute -top-2.5 left-[206px] w-[106px] h-[146px] hidden",
    isPopular: false,
  },
  {
    provider: "Discover it® Cash Back",
    category: "Best Credit Card for\nRotating Categories",
    description: "Earn 5% cash back in rotating categories each quarter, plus cashback match.",
    logoSrc: "/cards/discover-it-cash-back.png",
    petImageSrc: "/avatar-placeholder.svg",
    petImageClasses: "absolute -top-2.5 left-[206px] w-[106px] h-[146px] hidden",
    isPopular: false,
  },
];

// Cost comparison data (Rating and Best For category)
export const COST_DATA: CostData[] = [
  { provider: "Chase Sapphire Preferred®", dogCost: "5.0", catCost: "Best Credit Card for Travel Rewards", applyNowUrl: "https://www.forbes.com/advisor/credit-cards/chase-sapphire-preferred-review/" },
  { provider: "Capital One Venture X", dogCost: "4.9", catCost: "Best Credit Card for Premium Travel", applyNowUrl: "https://www.forbes.com/advisor/credit-cards/capital-one-venture-x-review/" },
  { provider: "American Express® Gold", dogCost: "4.8", catCost: "Best Credit Card for Dining & Groceries", applyNowUrl: "https://www.forbes.com/advisor/credit-cards/american-express-gold-card-review/" },
  { provider: "Chase Freedom Unlimited®", dogCost: "4.8", catCost: "Best Credit Card for No Annual Fee", applyNowUrl: "https://www.forbes.com/advisor/credit-cards/chase-freedom-unlimited-review/" },
  { provider: "Wells Fargo Active Cash®", dogCost: "4.7", catCost: "Best Credit Card for Flat-Rate Cash Back", applyNowUrl: "https://www.forbes.com/advisor/credit-cards/wells-fargo-active-cash-review/" },
  { provider: "Citi Double Cash®", dogCost: "4.7", catCost: "Best Credit Card for Simple Cash Back", applyNowUrl: "https://www.forbes.com/advisor/credit-cards/citi-double-cash-review/" },
  { provider: "Capital One Venture", dogCost: "4.6", catCost: "Best Credit Card for Everyday Travel", applyNowUrl: "https://www.forbes.com/advisor/credit-cards/capital-one-venture-review/" },
  { provider: "Chase Sapphire Reserve®", dogCost: "4.6", catCost: "Best Credit Card for Premium Perks", applyNowUrl: "https://www.forbes.com/advisor/credit-cards/chase-sapphire-reserve-review/" },
  { provider: "Blue Cash Preferred®", dogCost: "4.5", catCost: "Best Credit Card for Families", applyNowUrl: "https://www.forbes.com/advisor/credit-cards/blue-cash-preferred-review/" },
  { provider: "Discover it® Cash Back", dogCost: "4.5", catCost: "Best Credit Card for Rotating Categories", applyNowUrl: "https://www.forbes.com/advisor/credit-cards/discover-it-cash-back-review/" },
];

// Plan details data (Annual Fee, Welcome Bonus, Rewards Rate, Foreign Transaction Fee, Intro APR)
export const PLAN_DETAILS_DATA: PlanDetails[] = [
  {
    provider: "Chase Sapphire Preferred®",
    ageRestrictions: "$95 annual fee",
    waitingPeriods: "75,000 points bonus",
    endOfLife: "5X on travel via Chase",
    vetExamFees: "No foreign transaction fees",
    microchipping: "0% intro APR available",
    applyNowUrl: "https://www.forbes.com/advisor/credit-cards/chase-sapphire-preferred-review/",
  },
  {
    provider: "Capital One Venture X",
    ageRestrictions: "$395 annual fee",
    waitingPeriods: "75,000 miles bonus",
    endOfLife: "10X on hotels & car rentals",
    vetExamFees: "No foreign transaction fees",
    microchipping: "$300 travel credit annually",
    applyNowUrl: "https://www.forbes.com/advisor/credit-cards/capital-one-venture-x-review/",
  },
  {
    provider: "American Express® Gold",
    ageRestrictions: "$325 annual fee",
    waitingPeriods: "60,000 points bonus",
    endOfLife: "4X on restaurants & groceries",
    vetExamFees: "Foreign transaction fees apply",
    microchipping: "$120 Uber Cash annually",
    applyNowUrl: "https://www.forbes.com/advisor/credit-cards/american-express-gold-card-review/",
  },
  {
    provider: "Chase Freedom Unlimited®",
    ageRestrictions: "$0 annual fee",
    waitingPeriods: "$200 bonus",
    endOfLife: "1.5% on all purchases",
    vetExamFees: "3% foreign transaction fee",
    microchipping: "0% intro APR for 15 months",
    applyNowUrl: "https://www.forbes.com/advisor/credit-cards/chase-freedom-unlimited-review/",
  },
  {
    provider: "Wells Fargo Active Cash®",
    ageRestrictions: "$0 annual fee",
    waitingPeriods: "$200 bonus",
    endOfLife: "2% on all purchases",
    vetExamFees: "3% foreign transaction fee",
    microchipping: "0% intro APR for 15 months",
    applyNowUrl: "https://www.forbes.com/advisor/credit-cards/wells-fargo-active-cash-review/",
  },
  {
    provider: "Citi Double Cash®",
    ageRestrictions: "$0 annual fee",
    waitingPeriods: "$200 bonus",
    endOfLife: "2% on all purchases",
    vetExamFees: "3% foreign transaction fee",
    microchipping: "0% intro APR for 18 months",
    applyNowUrl: "https://www.forbes.com/advisor/credit-cards/citi-double-cash-review/",
  },
  {
    provider: "Capital One Venture",
    ageRestrictions: "$95 annual fee",
    waitingPeriods: "75,000 miles bonus",
    endOfLife: "2X on all purchases",
    vetExamFees: "No foreign transaction fees",
    microchipping: "Global Entry/TSA credit",
    applyNowUrl: "https://www.forbes.com/advisor/credit-cards/capital-one-venture-review/",
  },
  {
    provider: "Chase Sapphire Reserve®",
    ageRestrictions: "$550 annual fee",
    waitingPeriods: "60,000 points bonus",
    endOfLife: "10X on hotels via Chase",
    vetExamFees: "No foreign transaction fees",
    microchipping: "$300 travel credit annually",
    applyNowUrl: "https://www.forbes.com/advisor/credit-cards/chase-sapphire-reserve-review/",
  },
  {
    provider: "Blue Cash Preferred®",
    ageRestrictions: "$95 annual fee",
    waitingPeriods: "$350 bonus",
    endOfLife: "6% on groceries",
    vetExamFees: "2.7% foreign transaction fee",
    microchipping: "0% intro APR for 12 months",
    applyNowUrl: "https://www.forbes.com/advisor/credit-cards/blue-cash-preferred-review/",
  },
  {
    provider: "Discover it® Cash Back",
    ageRestrictions: "$0 annual fee",
    waitingPeriods: "Cashback Match first year",
    endOfLife: "5% on rotating categories",
    vetExamFees: "No foreign transaction fees",
    microchipping: "0% intro APR for 15 months",
    applyNowUrl: "https://www.forbes.com/advisor/credit-cards/discover-it-cash-back-review/",
  },
];

// User opinion data
export const USER_OPINION_DATA: UserOpinion[] = [
  {
    provider: "Chase Sapphire Preferred®",
    csiRating: "8.8/10",
    likelyToRecommend: "Very likely",
    positiveComments: "Excellent transfer partners",
    negativeComments: "Annual fee for some",
    applyNowUrl: "https://www.forbes.com/advisor/credit-cards/chase-sapphire-preferred-review/",
  },
  {
    provider: "Capital One Venture X",
    csiRating: "8.7/10",
    likelyToRecommend: "Very likely",
    positiveComments: "Great lounge access",
    negativeComments: "Higher annual fee",
    applyNowUrl: "https://www.forbes.com/advisor/credit-cards/capital-one-venture-x-review/",
  },
  {
    provider: "American Express® Gold",
    csiRating: "8.6/10",
    likelyToRecommend: "Very likely",
    positiveComments: "Best dining rewards",
    negativeComments: "Foreign transaction fees",
    applyNowUrl: "https://www.forbes.com/advisor/credit-cards/american-express-gold-card-review/",
  },
  {
    provider: "Chase Freedom Unlimited®",
    csiRating: "8.5/10",
    likelyToRecommend: "Very likely",
    positiveComments: "No annual fee, solid rewards",
    negativeComments: "Lower earn rate than premium",
    applyNowUrl: "https://www.forbes.com/advisor/credit-cards/chase-freedom-unlimited-review/",
  },
  {
    provider: "Wells Fargo Active Cash®",
    csiRating: "8.4/10",
    likelyToRecommend: "Likely",
    positiveComments: "Simple 2% on everything",
    negativeComments: "Foreign transaction fees",
    applyNowUrl: "https://www.forbes.com/advisor/credit-cards/wells-fargo-active-cash-review/",
  },
  {
    provider: "Citi Double Cash®",
    csiRating: "8.3/10",
    likelyToRecommend: "Likely",
    positiveComments: "Reliable cash back",
    negativeComments: "No bonus categories",
    applyNowUrl: "https://www.forbes.com/advisor/credit-cards/citi-double-cash-review/",
  },
  {
    provider: "Discover it® Cash Back",
    csiRating: "8.5/10",
    likelyToRecommend: "Very likely",
    positiveComments: "Cashback match is valuable",
    negativeComments: "Must track rotating categories",
    applyNowUrl: "https://www.forbes.com/advisor/credit-cards/discover-it-cash-back-review/",
  },
];

// Claims satisfaction data (Customer Service feedback)
export const CLAIMS_DATA: ClaimsData[] = [
  { provider: "Chase Sapphire Preferred®", claimsSatisfaction: "Excellent support", overallSatisfaction: "High satisfaction", applyNowUrl: "https://www.forbes.com/advisor/credit-cards/chase-sapphire-preferred-review/" },
  { provider: "Capital One Venture X", claimsSatisfaction: "Responsive service", overallSatisfaction: "High satisfaction", applyNowUrl: "https://www.forbes.com/advisor/credit-cards/capital-one-venture-x-review/" },
  { provider: "American Express® Gold", claimsSatisfaction: "Premium support", overallSatisfaction: "Very high satisfaction", applyNowUrl: "https://www.forbes.com/advisor/credit-cards/american-express-gold-card-review/" },
  { provider: "Chase Freedom Unlimited®", claimsSatisfaction: "Reliable support", overallSatisfaction: "High satisfaction", applyNowUrl: "https://www.forbes.com/advisor/credit-cards/chase-freedom-unlimited-review/" },
  { provider: "Wells Fargo Active Cash®", claimsSatisfaction: "Helpful service", overallSatisfaction: "High satisfaction", applyNowUrl: "https://www.forbes.com/advisor/credit-cards/wells-fargo-active-cash-review/" },
  { provider: "Discover it® Cash Back", claimsSatisfaction: "Outstanding support", overallSatisfaction: "Very high satisfaction", applyNowUrl: "https://www.forbes.com/advisor/credit-cards/discover-it-cash-back-review/" },
];
