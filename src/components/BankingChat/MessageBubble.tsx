import React, { useEffect, useState } from 'react';
import type { ChatMessage, QuickReply } from '../../types/bankingChat';
import { ContentCard } from './ContentCard';
import { QuickReplies } from './QuickReplies';
import { ResultsCard } from './ResultsCard';

interface MessageBubbleProps {
  message: ChatMessage;
  onQuickReply?: (option: QuickReply) => void;
  isLatest?: boolean;
}

// Typewriter hook for animated text
const useTypewriter = (text: string, speed: number = 20, enabled: boolean = true) => {
  const [displayedText, setDisplayedText] = useState(enabled ? '' : text);
  const [isComplete, setIsComplete] = useState(!enabled);

  useEffect(() => {
    if (!enabled) {
      setDisplayedText(text);
      setIsComplete(true);
      return;
    }

    setDisplayedText('');
    setIsComplete(false);
    let index = 0;

    const timer = setInterval(() => {
      if (index < text.length) {
        setDisplayedText(text.slice(0, index + 1));
        index++;
      } else {
        setIsComplete(true);
        clearInterval(timer);
      }
    }, speed);

    return () => clearInterval(timer);
  }, [text, speed, enabled]);

  return { displayedText, isComplete };
};

export const MessageBubble: React.FC<MessageBubbleProps> = ({
  message,
  onQuickReply,
  isLatest = false
}) => {
  const isUser = message.role === 'user';
  
  // Only animate the latest assistant message
  const shouldAnimate = !isUser && isLatest;
  const { displayedText, isComplete } = useTypewriter(message.content, 15, shouldAnimate);

  // Track if cards should be shown (after text animation completes)
  const [showCards, setShowCards] = useState(!shouldAnimate);
  const [showOptions, setShowOptions] = useState(!shouldAnimate);

  useEffect(() => {
    if (isComplete && shouldAnimate) {
      // Stagger the card animations
      const cardTimer = setTimeout(() => setShowCards(true), 100);
      const optionsTimer = setTimeout(() => setShowOptions(true), 300);
      return () => {
        clearTimeout(cardTimer);
        clearTimeout(optionsTimer);
      };
    }
  }, [isComplete, shouldAnimate]);

  // For non-animated messages, show everything immediately
  useEffect(() => {
    if (!shouldAnimate) {
      setShowCards(true);
      setShowOptions(true);
    }
  }, [shouldAnimate]);

  return (
    <div 
      className={`flex ${isUser ? 'justify-end' : 'justify-start'} mb-4 animate-fadeIn`}
    >
      <div
        className={`
          max-w-[85%]
          ${isUser ? 'bg-[#007AC8] text-white rounded-2xl rounded-br-md' : 'bg-transparent text-gray-900'}
          ${isUser ? 'px-4 py-3 shadow-sm' : ''}
        `}
      >
        <p
          className={`text-[15px] leading-relaxed whitespace-pre-line ${isUser ? 'text-white' : 'text-gray-800'}`}
          style={{ fontFamily: 'Work Sans' }}
        >
          {isUser ? message.content : displayedText}
          {!isUser && !isComplete && (
            <span className="inline-block w-0.5 h-4 bg-gray-400 ml-0.5 animate-blink" />
          )}
        </p>

        {!isUser && message.contentCard && showCards && (
          <div className="animate-slideUp">
            <ContentCard card={message.contentCard} />
          </div>
        )}
        
        {!isUser && message.resultsCard && showCards && (
          <div className="animate-slideUp">
            <ResultsCard results={message.resultsCard} />
          </div>
        )}

        {!isUser && message.options && isLatest && onQuickReply && showOptions && (
          <div className="animate-slideUp">
            <QuickReplies options={message.options} onSelect={onQuickReply} />
          </div>
        )}
      </div>
    </div>
  );
};
