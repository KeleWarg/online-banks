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

export interface BankResult {
  bank: {
    id: string;
    name: string;
    rating: number;
    category: string;
    description: string;
    applyUrl: string;
  };
  finalScore: number;
  matchReasons: string[];
}

export interface ResultsCard {
  title: string;
  results: BankResult[];
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
