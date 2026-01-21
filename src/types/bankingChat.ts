export interface ContentCard {
  id: string;
  title: string;
  body: string;
  link?: { text: string; url: string };
  type: 'education' | 'comparison' | 'overview';
}

export interface QuickReply {
  text: string;
  action: string;
}

export interface CardResult {
  card: {
    id: string;
    name: string;
    rating: number;
    category: string;
    description: string;
    annualFee: number;
    signupBonus: string;
    applyUrl: string;
  };
  finalScore: number;
  matchReasons: string[];
}

export interface ResultsCard {
  title: string;
  results: CardResult[];
  disclosureNeeded: boolean;
}

export interface ChatMessage {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  contentCard?: ContentCard;
  options?: QuickReply[];
  resultsCard?: ResultsCard;
}

export interface ChatResponse {
  reply: string;
  contentCard?: ContentCard;
  options?: QuickReply[];
  resultsCard?: ResultsCard;
}
