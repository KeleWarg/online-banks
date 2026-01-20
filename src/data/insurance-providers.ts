import bank5ConnectLogo from "../assets/brands/banks/bank5-connect.png";
import quonticBankLogo from "../assets/brands/banks/quontic-bank.png";
import allyBankLogo from "../assets/brands/banks/ally-bank.png";
import discoverBankLogo from "../assets/brands/banks/discover-bank.png";
import synchronyBankLogo from "../assets/brands/banks/synchrony-bank.jpg";
import nbkcBankLogo from "../assets/brands/banks/nbkc-bank.png";
import sofiLogo from "../assets/brands/banks/sofi.png";
import everBankLogo from "../assets/brands/banks/everbank.jpg";
import capitalOneLogo from "../assets/brands/banks/capital-one-360.png";
import firstInternetBankLogo from "../assets/brands/banks/first-internet-bank.png";

// Insurance provider data - extracted from components for better maintainability
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

// Insurance plans data
export const INSURANCE_PLANS: InsurancePlan[] = [
  {
    provider: "Bank5 Connect",
    category: "Best Online Bank for\nChecking Accounts",
    description: "Checking, savings and CDs with a checking-first focus.",
    logoSrc: bank5ConnectLogo,
    petImageSrc: "/avatar-placeholder.svg",
    petImageClasses: "absolute -top-2.5 left-[206px] w-[106px] h-[146px] hidden",
    isPopular: false,
  },
  {
    provider: "Quontic Bank",
    category: "Best Online Bank for\nHigh APYs",
    description: "Savings, checking, MMAs and CDs with strong yields.",
    logoSrc: quonticBankLogo,
    petImageSrc: "/avatar-placeholder.svg",
    petImageClasses: "absolute -top-2.5 left-[206px] w-[106px] h-[146px] hidden",
    isPopular: false,
  },
  {
    provider: "Ally Bank",
    category: "Best Online Bank for\nSavings Tools",
    description: "Savings, checking, MMAs and CDs with goal tools.",
    logoSrc: allyBankLogo,
    petImageSrc: "/avatar-placeholder.svg",
    petImageClasses: "absolute -top-2.5 left-[206px] w-[106px] h-[146px] hidden",
    isPopular: true,
  },
  {
    provider: "Discover® Bank",
    category: "Best Online Bank for\nNo Fees",
    description: "Savings, checking and CDs with low fees.",
    logoSrc: discoverBankLogo,
    petImageSrc: "/avatar-placeholder.svg",
    petImageClasses: "absolute -top-2.5 left-[206px] w-[106px] h-[146px] hidden",
    isPopular: false,
  },
  {
    provider: "Synchrony Bank",
    category: "Best Online Bank for\nHigh-Yield Savings",
    description: "High-yield savings, MMAs, CDs and IRAs.",
    logoSrc: synchronyBankLogo,
    petImageSrc: "/avatar-placeholder.svg",
    petImageClasses: "absolute -top-2.5 left-[206px] w-[106px] h-[146px] hidden",
    isPopular: false,
  },
  {
    provider: "NBKC Bank",
    category: "Best Online Bank for\nFull-Service Banking",
    description: "Savings, checking, MMAs and CDs in one place.",
    logoSrc: nbkcBankLogo,
    petImageSrc: "/avatar-placeholder.svg",
    petImageClasses: "absolute -top-2.5 left-[206px] w-[106px] h-[146px] hidden",
    isPopular: false,
  },
  {
    provider: "SoFi®",
    category: "Best Online Bank for\nMobile Check Deposit",
    description: "Checking and savings with mobile-first access.",
    logoSrc: sofiLogo,
    petImageSrc: "/avatar-placeholder.svg",
    petImageClasses: "absolute -top-2.5 left-[206px] w-[106px] h-[146px] hidden",
    isPopular: false,
  },
  {
    provider: "EverBank",
    category: "Best Online Bank for\nCDs",
    description: "Checking, MMAs and CDs with competitive rates.",
    logoSrc: everBankLogo,
    petImageSrc: "/avatar-placeholder.svg",
    petImageClasses: "absolute -top-2.5 left-[206px] w-[106px] h-[146px] hidden",
    isPopular: false,
  },
  {
    provider: "Capital One 360",
    category: "Best Online Bank for\nCustomer Service",
    description: "Savings, checking and CDs with strong support.",
    logoSrc: capitalOneLogo,
    petImageSrc: "/avatar-placeholder.svg",
    petImageClasses: "absolute -top-2.5 left-[206px] w-[106px] h-[146px] hidden",
    isPopular: false,
  },
  {
    provider: "First Internet Bank",
    category: "Best Online Bank for\nSmall Business",
    description: "Checking, savings, MMAs and CDs for SMBs.",
    logoSrc: firstInternetBankLogo,
    petImageSrc: "/avatar-placeholder.svg",
    petImageClasses: "absolute -top-2.5 left-[206px] w-[106px] h-[146px] hidden",
    isPopular: false,
  },
];

// Cost comparison data
export const COST_DATA: CostData[] = [
  { provider: "Bank5 Connect", dogCost: "5.0", catCost: "Best Online Bank for Checking Accounts", applyNowUrl: "https://www.forbes.com/advisor/banking/bank5-connect-review/" },
  { provider: "Quontic Bank", dogCost: "4.9", catCost: "Best Online Bank for High APYs", applyNowUrl: "https://www.quonticbank.com/" },
  { provider: "Ally Bank", dogCost: "4.8", catCost: "Best Online Bank for Savings Tools", applyNowUrl: "https://www.forbes.com/advisor/banking/ally-bank-review/" },
  { provider: "Discover® Bank", dogCost: "4.7", catCost: "Best Online Bank for No Fees", applyNowUrl: "https://www.forbes.com/advisor/banking/discover-bank-review/" },
  { provider: "Synchrony Bank", dogCost: "4.7", catCost: "Best Online Bank for High-Yield Savings", applyNowUrl: "https://www.forbes.com/advisor/banking/synchrony-bank-review/" },
  { provider: "NBKC Bank", dogCost: "4.6", catCost: "Best Online Bank for Full-Service Banking", applyNowUrl: "https://www.forbes.com/advisor/banking/nbkc-bank-review/" },
  { provider: "SoFi®", dogCost: "4.5", catCost: "Best Online Bank for Mobile Check Deposit", applyNowUrl: "https://www.sofi.com/banking/" },
  { provider: "EverBank", dogCost: "4.5", catCost: "Best Online Bank for CDs", applyNowUrl: "https://www.forbes.com/advisor/banking/everbank-review/" },
  { provider: "Capital One 360", dogCost: "4.4", catCost: "Best Online Bank for Customer Service", applyNowUrl: "https://www.capitalone.com/bank/" },
  { provider: "First Internet Bank", dogCost: "4.4", catCost: "Best Online Bank for Small Business", applyNowUrl: "https://www.firstib.com/" },
];

// Plan details data
export const PLAN_DETAILS_DATA: PlanDetails[] = [
  {
    provider: "Bank5 Connect",
    ageRestrictions: "Low or no minimum balance",
    waitingPeriods: "No monthly fee",
    endOfLife: "ATM access varies",
    vetExamFees: "Overdraft policies vary",
    microchipping: "Mobile deposit available",
    applyNowUrl: "https://www.forbes.com/advisor/banking/bank5-connect-review/",
  },
  {
    provider: "Quontic Bank",
    ageRestrictions: "Low or no minimum balance",
    waitingPeriods: "Low monthly fees",
    endOfLife: "ATM access varies",
    vetExamFees: "Overdraft policies vary",
    microchipping: "Mobile deposit available",
    applyNowUrl: "https://www.quonticbank.com/",
  },
  {
    provider: "Ally Bank",
    ageRestrictions: "No minimum balance",
    waitingPeriods: "No monthly fees",
    endOfLife: "Large ATM network",
    vetExamFees: "Overdraft policies vary",
    microchipping: "Mobile deposit available",
    applyNowUrl: "https://www.forbes.com/advisor/banking/ally-bank-review/",
  },
  {
    provider: "Discover® Bank",
    ageRestrictions: "No minimum balance",
    waitingPeriods: "No monthly fees",
    endOfLife: "Large ATM network",
    vetExamFees: "Overdraft policies vary",
    microchipping: "Mobile deposit available",
    applyNowUrl: "https://www.forbes.com/advisor/banking/discover-bank-review/",
  },
  {
    provider: "Synchrony Bank",
    ageRestrictions: "No minimum balance",
    waitingPeriods: "No monthly fees",
    endOfLife: "ATM access varies",
    vetExamFees: "Overdraft policies vary",
    microchipping: "Mobile deposit available",
    applyNowUrl: "https://www.forbes.com/advisor/banking/synchrony-bank-review/",
  },
  {
    provider: "NBKC Bank",
    ageRestrictions: "No minimum balance",
    waitingPeriods: "No monthly fees",
    endOfLife: "ATM access varies",
    vetExamFees: "Overdraft policies vary",
    microchipping: "Mobile deposit available",
    applyNowUrl: "https://www.forbes.com/advisor/banking/nbkc-bank-review/",
  },
  {
    provider: "SoFi®",
    ageRestrictions: "No minimum balance",
    waitingPeriods: "No monthly fees",
    endOfLife: "ATM access varies",
    vetExamFees: "Overdraft policies vary",
    microchipping: "Mobile deposit available",
    applyNowUrl: "https://www.sofi.com/banking/",
  },
  {
    provider: "EverBank",
    ageRestrictions: "No minimum balance",
    waitingPeriods: "Low monthly fees",
    endOfLife: "ATM access varies",
    vetExamFees: "Overdraft policies vary",
    microchipping: "Mobile deposit available",
    applyNowUrl: "https://www.forbes.com/advisor/banking/everbank-review/",
  },
  {
    provider: "Capital One 360",
    ageRestrictions: "No minimum balance",
    waitingPeriods: "No monthly fees",
    endOfLife: "Large ATM network",
    vetExamFees: "Overdraft policies vary",
    microchipping: "Mobile deposit available",
    applyNowUrl: "https://www.capitalone.com/bank/",
  },
  {
    provider: "First Internet Bank",
    ageRestrictions: "Low or no minimums",
    waitingPeriods: "Low monthly fees",
    endOfLife: "ATM access varies",
    vetExamFees: "Overdraft policies vary",
    microchipping: "Mobile deposit available",
    applyNowUrl: "https://www.firstib.com/",
  },
];

// User opinion data
export const USER_OPINION_DATA: UserOpinion[] = [
  {
    provider: "Bank5 Connect",
    csiRating: "8.6/10",
    likelyToRecommend: "Very likely",
    positiveComments: "Solid checking features",
    negativeComments: "Branch access limited",
    applyNowUrl: "https://www.forbes.com/advisor/banking/bank5-connect-review/",
  },
  {
    provider: "Quontic Bank",
    csiRating: "8.4/10",
    likelyToRecommend: "Likely",
    positiveComments: "Flexible account options",
    negativeComments: "App experience varies",
    applyNowUrl: "https://www.quonticbank.com/",
  },
  {
    provider: "Ally Bank",
    csiRating: "8.7/10",
    likelyToRecommend: "Very likely",
    positiveComments: "Great tools and rates",
    negativeComments: "Cash deposits limited",
    applyNowUrl: "https://www.forbes.com/advisor/banking/ally-bank-review/",
  },
  {
    provider: "Discover® Bank",
    csiRating: "8.5/10",
    likelyToRecommend: "Very likely",
    positiveComments: "Low fees, easy to use",
    negativeComments: "Branch access limited",
    applyNowUrl: "https://www.forbes.com/advisor/banking/discover-bank-review/",
  },
  {
    provider: "Synchrony Bank",
    csiRating: "8.3/10",
    likelyToRecommend: "Likely",
    positiveComments: "Savings rates competitive",
    negativeComments: "Checking options limited",
    applyNowUrl: "https://www.forbes.com/advisor/banking/synchrony-bank-review/",
  },
  {
    provider: "NBKC Bank",
    csiRating: "8.1/10",
    likelyToRecommend: "Likely",
    positiveComments: "Service focused",
    negativeComments: "Fewer branch options",
    applyNowUrl: "https://www.forbes.com/advisor/banking/nbkc-bank-review/",
  },
  {
    provider: "SoFi®",
    csiRating: "8.0/10",
    likelyToRecommend: "Likely",
    positiveComments: "Mobile-first experience",
    negativeComments: "Cash deposits limited",
    applyNowUrl: "https://www.sofi.com/banking/",
  },
];

// Claims satisfaction data
export const CLAIMS_DATA: ClaimsData[] = [
  { provider: "Bank5 Connect", claimsSatisfaction: "Responsive support", overallSatisfaction: "High satisfaction", applyNowUrl: "https://www.forbes.com/advisor/banking/bank5-connect-review/" },
  { provider: "Ally Bank", claimsSatisfaction: "Helpful service", overallSatisfaction: "High satisfaction", applyNowUrl: "https://www.forbes.com/advisor/banking/ally-bank-review/" },
  { provider: "Discover® Bank", claimsSatisfaction: "Reliable support", overallSatisfaction: "High satisfaction", applyNowUrl: "https://www.forbes.com/advisor/banking/discover-bank-review/" },
  { provider: "Capital One 360", claimsSatisfaction: "Consistent service", overallSatisfaction: "High satisfaction", applyNowUrl: "https://www.capitalone.com/bank/" },
  { provider: "SoFi®", claimsSatisfaction: "Fast in‑app help", overallSatisfaction: "High satisfaction", applyNowUrl: "https://www.sofi.com/banking/" },
  { provider: "NBKC Bank", claimsSatisfaction: "Strong service", overallSatisfaction: "High satisfaction", applyNowUrl: "https://www.forbes.com/advisor/banking/nbkc-bank-review/" },
];
