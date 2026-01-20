import React from 'react';
import type { ContentCard as ContentCardType } from '../../types/bankingChat';
import { ExternalLink, BookOpen } from 'lucide-react';

interface ContentCardProps {
  card: ContentCardType;
}

export const ContentCard: React.FC<ContentCardProps> = ({ card }) => {
  return (
    <div className="mt-3 p-4 rounded-xl border border-blue-200 bg-blue-50/50 transition-all duration-200 hover:shadow-md">
      <div className="flex items-center gap-2 mb-2">
        <BookOpen className="w-4 h-4 text-blue-600" />
        <h4 className="font-semibold text-sm text-gray-900" style={{ fontFamily: 'Work Sans' }}>
          {card.title}
        </h4>
      </div>
      <p className="text-sm text-gray-600 leading-relaxed whitespace-pre-line" style={{ fontFamily: 'Work Sans' }}>
        {card.body}
      </p>
      {card.link && (
        <a
          href={card.link.url}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1 mt-3 text-xs font-medium text-blue-600 hover:text-blue-700 transition-colors"
          style={{ fontFamily: 'Work Sans' }}
        >
          {card.link.text}
          <ExternalLink className="w-3 h-3" />
        </a>
      )}
    </div>
  );
};
