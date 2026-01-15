// src/components/ChatOverlay.tsx
import React, { useState, useEffect, useRef } from 'react';
import { Loader2 } from 'lucide-react';
import {
  InsurancePlan,
  CostData,
  PlanDetails,
  UserOpinion,
  ClaimsData
} from '../data/insurance-providers';

interface Message {
  id: string;
  type: 'bot' | 'user' | 'table';
  text: string;
  options?: ConversationQuestion;
  timestamp: Date;
  isTyping?: boolean;
  tableData?: any;
  showOptions?: boolean;
  onComplete?: () => void;
}

interface ConversationQuestion {
  id: string;
  text: string;
  type: 'buttons';
  options: string[];
  field: 'accountType' | 'balance' | 'priority' | 'access';
}

export interface UserPreferences {
  accountType?: string;
  balance?: string;
  priority?: string;
  access?: string;
}

// Track what info we still need
interface MissingInfo {
  accountType: boolean;
  balance: boolean;
  priority: boolean;
  access: boolean;
}

export interface ProviderRecommendation {
  provider: string;
  score: number;
  matchReasons: string[];
  costData?: CostData;
  planDetails?: PlanDetails;
  userOpinion?: UserOpinion;
  claimsData?: ClaimsData;
  plan?: InsurancePlan;
}

interface ParsedResponse {
  extracted_value: string;
  confidence: 'high' | 'medium' | 'low';
}

interface ChatOverlayProps {
  plans: InsurancePlan[];
  costData: CostData[];
  planDetails: PlanDetails[];
  userOpinions: UserOpinion[];
  claimsData: ClaimsData[];
  onRecommendations?: (recommendations: ProviderRecommendation[], preferences: UserPreferences) => void;
  isOpen?: boolean;
  onClose?: () => void;
}

// Helper to get bank data summary for Claude context
const getBankDataSummary = (plans: InsurancePlan[], costData: CostData[]) => {
  return plans.map(plan => {
    const cost = costData.find(c => c.provider === plan.provider);
    return `- ${plan.provider}: ${plan.category.replace(/\n/g, ' ')} - ${plan.description}${cost ? ` (Rating: ${cost.dogCost}, Best For: ${cost.catCost})` : ''}`;
  }).join('\n');
};

export const ChatOverlay: React.FC<ChatOverlayProps> = ({
  plans,
  costData,
  planDetails,
  userOpinions,
  claimsData,
  onRecommendations,
  isOpen = false,
  onClose
}) => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [userPreferences, setUserPreferences] = useState<UserPreferences>({});
  const [showRecommendations, setShowRecommendations] = useState(false);
  const [textInput, setTextInput] = useState('');
  const [isProcessing, setIsProcessing] = useState(false);
  const [isClosing, setIsClosing] = useState(false);
  const [typingMessageId, setTypingMessageId] = useState<string | null>(null);
  const [isTypingActive, setIsTypingActive] = useState(false);
  const [isChatInitialized, setIsChatInitialized] = useState(false); // Prevent double initialization
  const initializingRef = useRef(false); // Track if initialization is in progress
  const firstQuestionAskedRef = useRef(false); // Track if first question has been asked
  const isShowingResultsRef = useRef(false); // Prevent duplicate results flow
  const botChainIdRef = useRef(0); // Prevent overlapping async bot chains
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToNewest = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToNewest();
  }, [messages]);

  // Typing effect component
  const TypingText: React.FC<{ text: string; speed?: number; onComplete?: () => void }> = ({ 
    text, 
    speed = 30, 
    onComplete 
  }) => {
    const [displayedText, setDisplayedText] = useState('');
    const [currentIndex, setCurrentIndex] = useState(0);
    const completedRef = useRef(false);
    const onCompleteRef = useRef(onComplete);

    // Update ref when onComplete changes
    useEffect(() => {
      onCompleteRef.current = onComplete;
    }, [onComplete]);

    useEffect(() => {
      if (currentIndex < text.length) {
        const timer = setTimeout(() => {
          setDisplayedText(prev => prev + text[currentIndex]);
          setCurrentIndex(prev => prev + 1);
        }, speed);
        return () => clearTimeout(timer);
      } else if (currentIndex === text.length && !completedRef.current) {
        completedRef.current = true;
        if (onCompleteRef.current) {
          onCompleteRef.current();
        }
      }
    }, [currentIndex, text, speed]);

    return <span>{displayedText}</span>;
  };

  const calculateTypingDelay = (text: string) => {
    return text.length * 20 + 500; // 20ms per character + 500ms buffer
  };

  const addBotMessage = (text: string, options?: ConversationQuestion, withTyping: boolean = true, onComplete?: () => void) => {
    const messageId = `bot-${Date.now()}-${Math.random()}`;
    
    if (withTyping) {
      setIsTypingActive(true);
      // Add message with typing state
      setMessages(prev => [...prev, {
        id: messageId,
        type: 'bot',
        text,
        options,
        timestamp: new Date(),
        isTyping: true,
        showOptions: false,
        onComplete // Store callback in message
      }]);
      setTypingMessageId(messageId);
    } else {
      // Add message immediately without typing, with options shown
      setMessages(prev => [...prev, {
        id: messageId,
        type: 'bot',
        text,
        options,
        timestamp: new Date(),
        isTyping: false,
        showOptions: true // Show options immediately when not typing
      }]);
      
      // Call callback immediately for non-typing messages
      if (onComplete) {
        setTimeout(onComplete, 300);
      }
    }
  };

  const addBotMessageWithDelay = (text: string, options?: ConversationQuestion, withTyping: boolean = true, callback?: () => void) => {
    addBotMessage(text, options, withTyping, callback);
  };

  const handleTypingComplete = (messageId: string) => {
    setTypingMessageId(null);
    setIsTypingActive(false);
    
    // Get the callback from the current state and update message in one go
    setMessages(prev => {
      const messageIndex = prev.findIndex(m => m.id === messageId);
      if (messageIndex === -1) {
        return prev;
      }
      
      const message = prev[messageIndex];
      const callback = message?.onComplete;
      
      // Update the message to mark typing as complete and show options immediately
      const updatedMessages = prev.map((msg) => 
        msg.id === messageId ? { ...msg, isTyping: false, showOptions: true, onComplete: undefined } : msg
      );
      
      // Call the callback after typing completes (with a small delay for options to show)
      if (callback) {
        setTimeout(() => {
          callback();
        }, 400);
      }
      
      return updatedMessages;
    });
  };


  const addUserMessage = (text: string) => {
    const messageId = `user-${Date.now()}-${Math.random()}`;
    setMessages(prev => [...prev, {
      id: messageId,
      type: 'user',
      text,
      timestamp: new Date()
    }]);
  };

  const addTableMessage = (recommendations: any[]) => {
    const messageId = `table-${Date.now()}-${Math.random()}`;
    setMessages(prev => [...prev, {
      id: messageId,
      type: 'table',
      text: '',
      timestamp: new Date(),
      tableData: recommendations,
      isTyping: false
    }]);
  };

  // Initialize chat when opened - now defined after helper functions
  useEffect(() => {
    // Only initialize if chat is open, not yet initialized, no messages, and not currently initializing
    if (isOpen && !isChatInitialized && messages.length === 0) {
      // Use setIsChatInitialized immediately to prevent double initialization in StrictMode
      setIsChatInitialized(true);
      
      // Add message directly
      addBotMessage(
        "Hi! 👋 I'll help you find the best online bank for your needs. What are you looking for today?", 
        undefined, 
        true, 
        () => {
          if (firstQuestionAskedRef.current) {
            return;
          }
          firstQuestionAskedRef.current = true;

          // No scripted follow-up prompts in freeform mode.
        }
      );
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isOpen]);

  // Generate natural response using Claude
  const generateNaturalResponse = async (
    userMessage: string, 
    currentPrefs: UserPreferences,
    conversationHistory: Message[]
  ): Promise<{ response: string; extractedPrefs: Partial<UserPreferences>; isQuestion: boolean; readyForResults: boolean }> => {
    try {
      const bankSummary = getBankDataSummary(plans, costData);
      const historyContext = conversationHistory
        .filter(m => m.type !== 'table')
        .slice(-6)
        .map(m => `${m.type === 'user' ? 'User' : 'Assistant'}: ${m.text}`)
        .join('\n');

      const currentPrefsStr = Object.entries(currentPrefs)
        .filter(([_, v]) => v)
        .map(([k, v]) => `${k}: ${v}`)
        .join(', ') || 'None yet';

      const missingFields = [];
      if (!currentPrefs.accountType) missingFields.push('account type (checking/savings/both)');
      if (!currentPrefs.priority) missingFields.push('priority (APY/fees/ATM access/mobile)');

      const prompt = `You are a helpful online banking advisor for Forbes Advisor. You help users find the best online bank for their needs.

AVAILABLE BANKS:
${bankSummary}

CONVERSATION HISTORY:
${historyContext}

CURRENT USER PREFERENCES COLLECTED:
${currentPrefsStr}

STILL NEED TO KNOW (optional but helpful):
${missingFields.length > 0 ? missingFields.join(', ') : 'We have enough info to make recommendations'}

USER'S NEW MESSAGE: "${userMessage}"

INSTRUCTIONS:
1. If the user is asking a QUESTION about online banking (rates, fees, how banks work, comparisons, etc.), answer it helpfully and naturally using your knowledge. Keep answers concise (2-3 sentences max).

2. If the user is sharing PREFERENCES or what they're looking for, acknowledge naturally and extract any info about:
   - accountType: "checking", "savings", or "both"
   - balance: "under $1,000", "$1,000-$10,000", "$10,000+", or "varies"
   - priority: "highest apy", "lowest fees", "atm access", or "mobile tools"
   - access: "direct deposit", "mobile check deposit", "cash deposits", or "transfers only"

3. If we have at least accountType OR priority, we have enough to show recommendations.

4. Be conversational, warm, and helpful. Don't sound robotic. Use contractions. Be concise.

5. If the user seems ready for recommendations (says things like "show me", "what do you recommend", "find me a bank"), indicate that.

Respond with ONLY a JSON object in this exact format:
{
  "response": "Your natural conversational response to the user",
  "extractedPrefs": {
    "accountType": "value or null if not mentioned",
    "balance": "value or null if not mentioned", 
    "priority": "value or null if not mentioned",
    "access": "value or null if not mentioned"
  },
  "isQuestion": true/false (was this primarily a question about banking?),
  "readyForResults": true/false (should we show bank recommendations now?)
}`;

      const response = await fetch("https://api.anthropic.com/v1/messages", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "x-api-key": import.meta.env.VITE_ANTHROPIC_API_KEY || "YOUR_API_KEY_HERE",
          "anthropic-version": "2023-06-01",
          "anthropic-dangerous-direct-browser-access": "true"
        },
        body: JSON.stringify({
          model: "claude-sonnet-4-20250514",
          max_tokens: 500,
          messages: [{ role: "user", content: prompt }]
        })
      });

      if (!response.ok) {
        throw new Error('Claude API request failed');
      }

      const data = await response.json();
      let responseText = data.content[0].text.trim();
      responseText = responseText.replace(/```json\n?/g, "").replace(/```\n?/g, "").trim();

      const parsed = JSON.parse(responseText);
      
      // Clean up null values from extractedPrefs
      const cleanedPrefs: Partial<UserPreferences> = {};
      if (parsed.extractedPrefs) {
        Object.entries(parsed.extractedPrefs).forEach(([key, value]) => {
          if (value && value !== 'null' && value !== null) {
            cleanedPrefs[key as keyof UserPreferences] = value as string;
          }
        });
      }

      return {
        response: parsed.response || "I'd be happy to help you find the right online bank!",
        extractedPrefs: cleanedPrefs,
        isQuestion: parsed.isQuestion || false,
        readyForResults: parsed.readyForResults || false
      };
    } catch (error) {
      console.error('Error generating natural response:', error);
      // Fallback response
      return {
        response: "Thanks for that! Let me help you find the best online bank. What matters most to you—high APY, low fees, or easy ATM access?",
        extractedPrefs: {},
        isQuestion: false,
        readyForResults: false
      };
    }
  };

  // Check if we have enough info for recommendations
  const hasEnoughInfo = (prefs: UserPreferences): boolean => {
    // We need at least account type OR priority to make meaningful recommendations
    return !!(prefs.accountType || prefs.priority);
  };

  // Scripted flow is disabled for freeform chat.

  const handleTextSubmit = async () => {
    if (!textInput.trim()) return;

    const userMessage = textInput;
    addUserMessage(userMessage);
    setTextInput('');
    setIsProcessing(true);
    const chainId = ++botChainIdRef.current;

    try {
      // If showing recommendations, handle follow-up questions
      if (showRecommendations) {
        const result = await generateNaturalResponse(userMessage, userPreferences, messages);
        setIsProcessing(false);
        
        if (result.response.toLowerCase().includes('start over') || result.response.toLowerCase().includes('new search')) {
          addBotMessage("Sure! Click 'Get Quotes from All' above to start fresh, or just tell me what you're looking for now.", undefined, true);
        } else {
          addBotMessage(result.response, undefined, true);
        }
        return;
      }

      // Generate natural response and extract any preferences
      const result = await generateNaturalResponse(userMessage, userPreferences, messages);
      
      // Merge extracted preferences
      const newPreferences = { ...userPreferences, ...result.extractedPrefs };
      setUserPreferences(newPreferences);

      // Add the natural response
      setTimeout(() => {
        if (chainId !== botChainIdRef.current) return;
        addBotMessageWithDelay(result.response, undefined, true, () => {
          setIsProcessing(false);
          
          setTimeout(() => {
            if (chainId !== botChainIdRef.current) return;
            // Check if we should show results
            if (result.readyForResults && hasEnoughInfo(newPreferences)) {
              showResults();
              return;
            }

            // If this was a question, don't push the flow - let user continue naturally
            if (result.isQuestion) {
              // Just wait for their next input
              return;
            }

            // Stay freeform; don't inject scripted questions.
          }, 600);
        });
      }, 400);
    } catch (error) {
      console.error('Error processing input:', error);
      setIsProcessing(false);
      addBotMessage("I had trouble processing that. Could you rephrase it?", undefined, true);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && !isProcessing) {
      handleTextSubmit();
    }
  };

  const calculateMatchScore = (preferences: UserPreferences, providerName: string): { score: number; reasons: string[] } => {
    let score = 0;
    let maxScore = 0;
    const reasons: string[] = [];

    const cost = costData.find(c => c.provider === providerName);
    const opinion = userOpinions.find(o => o.provider === providerName);
    const plan = plans.find(p => p.provider === providerName);

    const category = plan?.category.toLowerCase() || '';
    const description = plan?.description.toLowerCase() || '';
    const bestFor = cost?.catCost.toLowerCase() || '';

    if (preferences.accountType && plan) {
      maxScore += 2;
      const pref = preferences.accountType.toLowerCase();
      if (pref.includes('checking') && (description.includes('checking') || category.includes('checking'))) {
        score += 2;
        reasons.push('Strong checking features for daily use');
      } else if (pref.includes('savings') && (description.includes('savings') || category.includes('savings') || category.includes('apy'))) {
        score += 2;
        reasons.push('Competitive savings options');
      } else if (pref.includes('both')) {
        score += 1;
        reasons.push('Balanced checking + savings availability');
      }
    }

    if (preferences.balance) {
      maxScore += 1;
      reasons.push('Balance preferences considered');
      score += 1;
    }

    if (preferences.priority) {
      maxScore += 3;
      const pref = preferences.priority.toLowerCase();
      if (pref.includes('apy') && (category.includes('apy') || category.includes('high-yield') || bestFor.includes('high apy'))) {
        score += 3;
        reasons.push('High‑APY focused option');
      } else if (pref.includes('fees') && (category.includes('no fees') || bestFor.includes('no fees'))) {
        score += 3;
        reasons.push('Low‑fee account structure');
      } else if (pref.includes('atm') && (category.includes('full-service') || description.includes('checking'))) {
        score += 2;
        reasons.push('Good everyday access and ATM convenience');
      } else if (pref.includes('mobile') && (category.includes('mobile') || bestFor.includes('mobile'))) {
        score += 3;
        reasons.push('Mobile-first experience');
      } else if (opinion) {
        score += 1;
        reasons.push(`Strong user sentiment (${opinion.csiRating})`);
      }
    }

    if (preferences.access) {
      maxScore += 1;
      const pref = preferences.access.toLowerCase();
      if (pref.includes('mobile') && (category.includes('mobile') || description.includes('mobile'))) {
        score += 1;
        reasons.push('Great mobile deposit experience');
      } else if (pref.includes('cash')) {
        score += 1;
        reasons.push('Consider cash deposit availability');
      } else {
        score += 1;
        reasons.push('Flexible deposit options');
      }
    }

    if (reasons.length === 0) {
      if (plan) {
        reasons.push(`Solid ${plan.category.replace(/\n/g, ' ').toLowerCase()} option`);
      }
      if (cost) {
        reasons.push(`Best for: ${cost.catCost}`);
      }
    }

    return {
      score: maxScore > 0 ? score / maxScore : 0,
      reasons: reasons.slice(0, 3)
    };
  };

  const showResults = () => {
    if (showRecommendations || isShowingResultsRef.current) {
      return;
    }
    isShowingResultsRef.current = true;
    const chainId = ++botChainIdRef.current;
    setTimeout(() => {
      // Step 1: Initial message
      addBotMessageWithDelay("Perfect! Let me find the best matches for you...", undefined, true, () => {
        // Step 2: Analyzing message
        addBotMessageWithDelay("Analyzing results...", undefined, true, () => {
          // Step 3: Wait 5 seconds for analyzing, then show final message
          setTimeout(() => {
            if (chainId !== botChainIdRef.current) return;
            setShowRecommendations(true);
            addBotMessageWithDelay("Thanks—here are 3 strong fits based on your preferences", undefined, true, () => {
              // Step 4: Generate and show table after final message completes
              setTimeout(() => {
                if (chainId !== botChainIdRef.current) return;
                const providerNames = Array.from(new Set(costData.map(c => c.provider)));

                const recommendations: ProviderRecommendation[] = providerNames.map(providerName => {
                  const { score, reasons } = calculateMatchScore(userPreferences, providerName);

                  return {
                    provider: providerName,
                    score,
                    matchReasons: reasons,
                    costData: costData.find(c => c.provider === providerName),
                    planDetails: planDetails.find(p => p.provider === providerName),
                    userOpinion: userOpinions.find(o => o.provider === providerName),
                    claimsData: claimsData.find(c => c.provider === providerName),
                    plan: plans.find(p => p.provider === providerName)
                  };
                })
                .filter(r => r.score > 0.3)
                .sort((a, b) => b.score - a.score)
                .slice(0, 3);

                addTableMessage(recommendations);

                if (onRecommendations) {
                  onRecommendations(recommendations, userPreferences);
                }
              }, 500);
            });
          }, 5000); // 5 second analyzing delay
        });
      });
    }, 400);
  };

  const getRecommendations = (): ProviderRecommendation[] => {
    const providerNames = Array.from(new Set(costData.map(c => c.provider)));

    return providerNames.map(providerName => {
      const { score, reasons } = calculateMatchScore(userPreferences, providerName);

      return {
        provider: providerName,
        score,
        matchReasons: reasons,
        costData: costData.find(c => c.provider === providerName),
        planDetails: planDetails.find(p => p.provider === providerName),
        userOpinion: userOpinions.find(o => o.provider === providerName),
        claimsData: claimsData.find(c => c.provider === providerName),
        plan: plans.find(p => p.provider === providerName)
      };
    })
    .filter(r => r.score > 0.3)
    .sort((a, b) => b.score - a.score)
    .slice(0, 3);
  };

  const resetChat = () => {
    setMessages([]);
    setUserPreferences({});
    setShowRecommendations(false);
    setTextInput('');
    setIsProcessing(false);
    setIsChatInitialized(false); // Reset initialization flag
    initializingRef.current = false; // Reset initialization ref
    firstQuestionAskedRef.current = false; // Reset first question flag
    isShowingResultsRef.current = false;
    botChainIdRef.current += 1;

    setTimeout(() => {
      addBotMessageWithDelay(
        "Hi! 👋 I'll help you find the best online bank for your needs. What are you looking for today?", 
        undefined, 
        true, 
        () => {
          if (firstQuestionAskedRef.current) return;
          firstQuestionAskedRef.current = true;

          // No scripted follow-up prompts in freeform mode.
        }
      );
    }, 300);
  };

  const handleClose = () => {
    // Start the closing animation
    setIsClosing(true);
    
    // After animation completes, clear the chat
    setTimeout(() => {
      setMessages([]);
      setUserPreferences({});
      setShowRecommendations(false);
      setTextInput('');
      setIsProcessing(false);
      setIsClosing(false);
      setIsChatInitialized(false); // Reset initialization flag
      initializingRef.current = false; // Reset initialization ref
      firstQuestionAskedRef.current = false; // Reset first question flag
      isShowingResultsRef.current = false;
      botChainIdRef.current += 1;
      
      // Call the onClose callback if provided
      if (onClose) {
        onClose();
      }
    }, 200); // Match the fade-out duration
  };

  // Prevent background page scroll while the chat is open
  useEffect(() => {
    if (!isOpen) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [isOpen]);

  // Don't render if not open
  if (!isOpen) {
    return null;
  }

  return (
    <div className="fixed inset-0 z-50">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/30"
        onClick={handleClose}
        aria-hidden="true"
      />

      {/* Gradient Background Overlay */}
      <div className="absolute inset-x-0 bottom-0 h-32 pointer-events-none" style={{
        background: 'linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, white 32%, white 100%)'
      }} />

      {/* Container */}
      <div className="relative w-full h-full flex flex-col justify-end">
        <div className="relative w-full px-4 pb-2" style={{ minHeight: messages.length > 0 ? 'calc(100vh - 120px)' : 'auto' }}>
        {/* Expanded Chat Container - Shows when there are messages */}
        {messages.length > 0 && (
          <div
            role="dialog"
            aria-modal="true"
            aria-label="Online banking chat"
            className="mb-4 rounded-[24px] overflow-hidden max-w-[1260px] mx-auto transform transition-all duration-500 ease-out"
            style={{
            background: 'white',
            boxShadow: '0px 0px 16px 4px rgba(125, 10, 248, 0.12)',
            outline: '1px rgba(0, 122, 200, 0.40) solid',
            outlineOffset: '-1px',
            height: 'calc(100vh - 140px)',
            display: 'flex',
            flexDirection: 'column',
            animation: isClosing ? 'slideDownFadeOut 0.2s ease-in forwards' : 'slideUpFadeIn 0.3s ease-out'
          }}>
            {/* Header with Forbes Logo */}
            <div className="px-4 py-[14px] bg-white shadow-[0px_4px_8px_-1px_rgba(0,0,0,0.10)] flex items-center justify-between">
              <div className="relative w-[135px] h-[17px]">
                {/* Forbes Advisor Logo */}
                <img src="/forbes-advisor-logo.svg" alt="Forbes Advisor" className="w-[135px] h-[17px] object-contain" />
              </div>
              
              {/* Close Button */}
              <button
                onClick={handleClose}
                className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-100 transition-all duration-200 hover:scale-110 hover:rotate-90 transform"
                aria-label="Close chat"
              >
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 4L4 12M4 4L12 12" stroke="#666666" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
            </div>

            {/* Messages Area */}
            <div className="px-4 pt-10 pb-6 flex-1 overflow-y-auto messages-container">
              <div className="flex flex-col-reverse space-y-6 space-y-reverse min-h-full justify-start">
            {messages.slice().reverse().map((message, reversedIdx) => {
              const originalIdx = messages.length - 1 - reversedIdx;
              return (
              <div 
                key={message.id}
                className="transform transition-all duration-300 ease-out"
                style={{
                  animation: 'messageSlideIn 0.3s ease-out',
                  animationDelay: `${reversedIdx * 100}ms`,
                  animationFillMode: 'both'
                }}
              >
                <div className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}>
                  {message.type === 'user' ? (
                    <div className="relative max-w-[649px] px-[14px] py-[7px] rounded-2xl bg-[#F8F8FA] text-black transform transition-all duration-200 hover:scale-[1.02] hover:shadow-lg" style={{ fontFamily: 'Work Sans', fontSize: '17px', lineHeight: '22px' }}>
                      {message.text}
                    </div>
                  ) : message.type === 'table' ? (
                    <div className="w-full max-w-4xl">
                      {/* Comparison Table */}
                      <div className="overflow-x-auto bg-white rounded-lg border border-gray-200">
                        <table className="w-full min-w-[600px]">
                          <thead>
                            <tr className="bg-gray-50 border-b border-gray-200">
                              <th className="px-4 py-3 text-left text-sm font-semibold text-gray-900" style={{ fontFamily: 'Work Sans' }}>Provider</th>
                              <th className="px-4 py-3 text-left text-sm font-semibold text-gray-900" style={{ fontFamily: 'Work Sans' }}>Why It Matches</th>
                              <th className="px-4 py-3 text-left text-sm font-semibold text-gray-900" style={{ fontFamily: 'Work Sans' }}>Rating</th>
                              <th className="px-4 py-3 text-left text-sm font-semibold text-gray-900" style={{ fontFamily: 'Work Sans' }}>Best For</th>
                              <th className="px-4 py-3 text-left text-sm font-semibold text-gray-900" style={{ fontFamily: 'Work Sans' }}>Match Score</th>
                            </tr>
                          </thead>
                          <tbody>
                            {message.tableData?.map((rec: any, index: number) => (
                              <tr key={rec.provider} className={`border-b border-gray-100 ${index % 2 === 0 ? 'bg-white' : 'bg-gray-50/30'}`}>
                                <td className="px-4 py-4">
                                  <div className="font-semibold text-gray-900" style={{ fontFamily: 'Work Sans', fontSize: '14px' }}>
                                    {rec.provider}
                                  </div>
                                  {rec.plan?.category && (
                                    <div className="text-xs text-gray-500 mt-1" style={{ fontFamily: 'Work Sans' }}>
                                      {rec.plan.category.replace(/\n/g, ' ')}
                                    </div>
                                  )}
                                </td>
                                <td className="px-4 py-4">
                                  <div className="text-sm text-gray-600 space-y-1" style={{ fontFamily: 'Work Sans' }}>
                                    {rec.matchReasons.slice(0, 2).map((reason: string, idx: number) => (
                                      <div key={idx} className="flex items-start gap-1">
                                        <span className="text-green-500 mt-0.5">•</span>
                                        <span>{reason}</span>
                                      </div>
                                    ))}
                                  </div>
                                </td>
                                <td className="px-4 py-4">
                                  <div className="text-sm font-medium text-gray-900" style={{ fontFamily: 'Work Sans' }}>
                                    {rec.costData?.dogCost || 'N/A'}
                                  </div>
                                </td>
                                <td className="px-4 py-4">
                                  <div className="text-sm font-medium text-gray-900" style={{ fontFamily: 'Work Sans' }}>
                                    {rec.costData?.catCost || 'N/A'}
                                  </div>
                                </td>
                                <td className="px-4 py-4">
                                  <div className="flex items-center gap-2">
                                    <div className="w-16 bg-gray-200 rounded-full h-2">
                                      <div 
                                        className="bg-blue-500 h-2 rounded-full transition-all duration-300" 
                                        style={{ width: `${Math.round(rec.score * 100)}%` }}
                                      ></div>
                                    </div>
                                    <span className="text-xs font-medium text-gray-600" style={{ fontFamily: 'Work Sans' }}>
                                      {Math.round(rec.score * 100)}%
                                    </span>
                                  </div>
                                </td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                      
                      {/* Action buttons */}
                      <div className="flex flex-wrap gap-2 justify-end mt-6">
                        {message.tableData?.map((rec: any) => (
                          <button
                            key={rec.provider}
                            className="h-14 px-4 rounded-[28px] flex items-center gap-2 transition-all duration-200 hover:opacity-90 hover:scale-105 hover:shadow-lg transform button-bounce"
                            style={{
                              background: '#007AC8',
                              boxShadow: '0px 0px 0.5px rgba(0, 0, 0, 0.11) inset',
                              fontFamily: 'Work Sans',
                              fontSize: '14px',
                              fontWeight: '600',
                              lineHeight: '20px',
                              color: 'white'
                            }}
                          >
                            Get Quotes from {rec.provider}
                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M5 5L15 15M15 15V5M15 15H5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                          </button>
                        ))}
                        <button
                          onClick={resetChat}
                          className="h-14 px-4 rounded-[28px] transition-all duration-200 hover:bg-gray-800 hover:scale-105 hover:shadow-lg transform button-bounce"
                          style={{
                            background: 'black',
                            boxShadow: '0px 0px 0.5px rgba(0, 0, 0, 0.11) inset',
                            outline: '1px black solid',
                            outlineOffset: '-1px',
                            fontFamily: 'Work Sans',
                            fontSize: '14px',
                            fontWeight: '600',
                            lineHeight: '20px',
                            color: 'white'
                          }}
                        >
                          Get Quotes from All
                        </button>
                      </div>
                    </div>
                  ) : (
                    <div className="relative w-full text-black transform transition-all duration-200" style={{ fontFamily: 'Work Sans', fontSize: '17px', lineHeight: '22px' }}>
                      {message.isTyping ? (
                        <TypingText 
                          text={message.text} 
                          speed={20}
                          onComplete={() => handleTypingComplete(message.id)}
                        />
                      ) : (
                        message.text
                      )}
                    </div>
                  )}
                </div>

                {/* Separator after user messages */}
                {message.type === 'user' && (
                  <div className="mt-4 mb-2">
                    <div className="w-full h-px bg-gray-200"></div>
                  </div>
                )}

                {/* Scripted option buttons removed for freeform chat */}
              </div>
              );
            })}

            {isProcessing && (
              <div className="flex justify-start transform transition-all duration-300 ease-out" style={{ animation: 'messageSlideIn 0.3s ease-out' }}>
                <div className="text-black flex items-center gap-2 bg-gray-50 px-4 py-2 rounded-2xl animate-pulse">
                  <Loader2 className="w-4 h-4 animate-spin text-blue-500" />
                  <span style={{ fontFamily: 'Work Sans', fontSize: '17px', lineHeight: '22px' }}>Analyzing your response...</span>
                </div>
              </div>
            )}


              </div>
              <div ref={messagesEndRef} />
            </div>

            {/* Suggested prompts removed for freeform chat */}

            {/* Bottom Input Box */}
            <div className="px-4 pb-[10px] flex-shrink-0">
              <div className="px-4 py-3 bg-white rounded-lg shadow-[0px_4px_8px_-1px_rgba(0,0,0,0.10)] flex items-center gap-[10px] transition-all duration-200 hover:shadow-lg focus-within:shadow-lg focus-within:ring-2 focus-within:ring-blue-200" style={{
                outline: '1px #CED4DB solid',
                outlineOffset: '-1px'
              }}>
                {/* Search Icon */}
                <img src="/star-06.svg" alt="Search" className="w-6 h-6" />

                {/* Input */}
                <input
                  type="text"
                  value={textInput}
                  onChange={(e) => setTextInput(e.target.value)}
                  onKeyDown={handleKeyDown}
                  placeholder="Hi there! What are you interested in..."
                  disabled={isProcessing}
                  className="flex-1 bg-transparent border-none outline-none placeholder:text-[#B6B6B6] transition-all duration-200 focus:placeholder:text-[#999999]"
                  style={{ fontFamily: 'Work Sans', fontSize: '16px', fontWeight: '500', lineHeight: '24px' }}
                />

                {/* Send Button */}
                <button
                  onClick={handleTextSubmit}
                  disabled={!textInput.trim() || isProcessing}
                  className="min-w-[48px] h-12 bg-[#007AC8] rounded-[44px] shadow-[0px_4px_8px_-1px_rgba(0,0,0,0.10)] flex items-center justify-center transition-all duration-200 hover:bg-[#0066a3] hover:scale-105 hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 disabled:hover:bg-[#007AC8]"
                >
                  {isProcessing ? (
                    <Loader2 className="w-6 h-6 text-white animate-spin" />
                  ) : (
                    <img src="/arrow-right-white.svg" alt="Send" className="w-6 h-6 transition-transform duration-200 hover:scale-110" />
                  )}
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Default Search Bar - Show when no messages */}
        {messages.length === 0 && (
          <div className="space-y-2 max-w-[1260px] mx-auto">
            {/* Search Bar */}
            <div className="px-4 py-3 bg-white/80 shadow-[0px_0px_16px_4px_rgba(125,10,248,0.12)] rounded-lg flex items-center gap-[10px]" style={{
              outline: '1px #CED4DB solid',
              outlineOffset: '-1px'
            }}>
              {/* Search Icon */}
              <img src="/star-06.svg" alt="Search" className="w-6 h-6" />

              {/* Input */}
              <input
                type="text"
                value={textInput}
                onChange={(e) => setTextInput(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Hi there! What are you interested in..."
                disabled={isProcessing}
                className="flex-1 bg-transparent border-none outline-none placeholder:text-[#B6B6B6]"
                style={{ fontFamily: 'Work Sans', fontSize: '16px', fontWeight: '500', lineHeight: '24px' }}
              />

              {/* Send Button */}
              <button
                onClick={handleTextSubmit}
                disabled={!textInput.trim() || isProcessing}
                className="min-w-[48px] h-12 bg-[#007AC8] rounded-[44px] shadow-[0px_4px_8px_-1px_rgba(0,0,0,0.10)] flex items-center justify-center hover:opacity-90 transition-opacity disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isProcessing ? (
                  <Loader2 className="w-6 h-6 text-white animate-spin" />
                ) : (
                  <img src="/arrow-right-white.svg" alt="Send" className="w-6 h-6" />
                )}
              </button>
            </div>

            {/* Subtext */}
            <div className="text-center">
              <p className="text-gray-500" style={{
                fontFamily: 'Work Sans',
                fontSize: '12px',
                lineHeight: '16px'
              }}>
                Ask questions about online banking and get tailored recommendations
              </p>
            </div>
          </div>
        )}
        </div>
      </div>
    </div>
  );
};
