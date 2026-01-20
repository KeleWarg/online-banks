import React from 'react';
import type { QuickReply } from '../../types/bankingChat';

interface QuickRepliesProps {
  options: QuickReply[];
  onSelect: (option: QuickReply) => void;
  disabled?: boolean;
}

export const QuickReplies: React.FC<QuickRepliesProps> = ({ options, onSelect, disabled = false }) => {
  return (
    <div className="flex flex-wrap gap-2 mt-3">
      {options.map((option, index) => (
        <button
          key={`${option.action}-${index}`}
          onClick={() => onSelect(option)}
          disabled={disabled}
          className={`
            px-4 py-2.5
            rounded-full
            text-sm font-medium
            border border-[#007AC8]
            transition-all duration-200
            opacity-0 animate-slideUp
            ${
              disabled
                ? 'opacity-50 cursor-not-allowed bg-gray-50 text-gray-400 border-gray-300'
                : 'bg-white text-[#007AC8] hover:bg-[#007AC8] hover:text-white hover:scale-105 hover:shadow-md active:scale-95'
            }
          `}
          style={{ 
            fontFamily: 'Work Sans',
            animationDelay: `${index * 75}ms`,
            animationFillMode: 'forwards'
          }}
        >
          {option.text}
        </button>
      ))}
    </div>
  );
};
