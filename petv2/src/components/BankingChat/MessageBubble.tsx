import React from 'react';
import type { ChatMessage, QuickReply } from '../../types/bankingChat';
import { ContentCard } from './ContentCard';
import { QuickReplies } from './QuickReplies';
import { ResultsCard } from './ResultsCard';

interface MessageBubbleProps {
  message: ChatMessage;
  onQuickReply?: (option: QuickReply) => void;
  isLatest?: boolean;
}

export const MessageBubble: React.FC<MessageBubbleProps> = ({
  message,
  onQuickReply,
  isLatest = false
}) => {
  const isUser = message.role === 'user';

  return (
    <div className={`flex ${isUser ? 'justify-end' : 'justify-start'} mb-4`}>
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
          {message.content}
        </p>

        {!isUser && message.contentCard && <ContentCard card={message.contentCard} />}
        {!isUser && message.resultsCard && <ResultsCard results={message.resultsCard} />}

        {!isUser && message.options && isLatest && onQuickReply && (
          <QuickReplies options={message.options} onSelect={onQuickReply} />
        )}
      </div>
    </div>
  );
};
