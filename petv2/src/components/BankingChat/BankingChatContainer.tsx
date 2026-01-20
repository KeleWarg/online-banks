import React, { useEffect, useRef, useState } from 'react';
import { X, Send, Sparkles } from 'lucide-react';
import { useBankingChat } from '../../hooks/useBankingChat';
import { MessageBubble } from './MessageBubble';
import { TypingIndicator } from './TypingIndicator';

interface BankingChatContainerProps {
  isOpen: boolean;
  onClose: () => void;
}

export const BankingChatContainer: React.FC<BankingChatContainerProps> = ({ isOpen, onClose }) => {
  const [inputValue, setInputValue] = useState('');
  const [isClosing, setIsClosing] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const { messages, isTyping, handleUserMessage, handleQuickReply, resetChat, initializeChat } = useBankingChat();

  useEffect(() => {
    if (isOpen) {
      initializeChat();
      setTimeout(() => inputRef.current?.focus(), 300);
    }
  }, [initializeChat, isOpen]);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isTyping]);

  useEffect(() => {
    if (isOpen) {
      const originalOverflow = document.body.style.overflow;
      document.body.style.overflow = 'hidden';
      return () => {
        document.body.style.overflow = originalOverflow;
      };
    }
  }, [isOpen]);

  const handleClose = () => {
    setIsClosing(true);
    setTimeout(() => {
      setIsClosing(false);
      resetChat();
      onClose();
    }, 200);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputValue.trim() || isTyping) return;
    const message = inputValue.trim();
    setInputValue('');
    await handleUserMessage(message);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50">
      <div className="absolute inset-0 bg-black/30 backdrop-blur-sm" onClick={handleClose} aria-hidden="true" />

      <div className="relative w-full h-full flex flex-col justify-end px-4 pb-4">
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Online banking chat"
          className={`
            w-full max-w-[900px] mx-auto
            bg-white rounded-3xl overflow-hidden
            shadow-2xl
            flex flex-col
            transform transition-all duration-300 ease-out
            ${isClosing ? 'opacity-0 translate-y-8' : 'opacity-100 translate-y-0'}
          `}
          style={{ maxHeight: 'calc(100vh - 100px)' }}
        >
          <div className="px-5 py-4 bg-white border-b border-gray-100 flex items-center justify-between flex-shrink-0">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#007AC8] to-[#005a9e] flex items-center justify-center">
                <Sparkles className="w-5 h-5 text-white" />
              </div>
              <div>
                <h2 className="font-bold text-gray-900 text-base" style={{ fontFamily: 'Work Sans' }}>
                  Forbes Advisor
                </h2>
                <p className="text-xs text-gray-500" style={{ fontFamily: 'Work Sans' }}>
                  Online banking assistant
                </p>
              </div>
            </div>
            <button
              onClick={handleClose}
              className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-gray-100 transition-all duration-200 hover:rotate-90"
              aria-label="Close chat"
            >
              <X className="w-5 h-5 text-gray-500" />
            </button>
          </div>

          <div className="flex-1 overflow-y-auto px-5 py-6 min-h-0">
            <div className="space-y-1">
              {messages.map((message, index) => (
                <MessageBubble
                  key={message.id}
                  message={message}
                  onQuickReply={handleQuickReply}
                  isLatest={index === messages.length - 1}
                />
              ))}
              {isTyping && (
                <div className="flex justify-start mb-4">
                  <TypingIndicator />
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>
          </div>

          <div className="px-5 py-4 bg-gray-50 border-t border-gray-100 flex-shrink-0">
            <form onSubmit={handleSubmit} className="flex items-center gap-3">
              <div className="flex-1 relative">
                <input
                  ref={inputRef}
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  placeholder="Ask about APYs, fees, or account types..."
                  disabled={isTyping}
                  className={`
                    w-full px-4 py-3
                    bg-white
                    rounded-xl
                    border border-gray-200
                    text-sm text-gray-900
                    placeholder:text-gray-400
                    focus:outline-none focus:ring-2 focus:ring-[#007AC8]/20 focus:border-[#007AC8]
                    transition-all duration-200
                    disabled:bg-gray-100 disabled:cursor-not-allowed
                  `}
                  style={{ fontFamily: 'Work Sans' }}
                />
              </div>
              <button
                type="submit"
                disabled={!inputValue.trim() || isTyping}
                className={`
                  w-12 h-12
                  rounded-xl
                  flex items-center justify-center
                  transition-all duration-200
                  ${
                    inputValue.trim() && !isTyping
                      ? 'bg-[#007AC8] text-white hover:bg-[#006bb3] hover:scale-105 active:scale-95 shadow-lg shadow-[#007AC8]/25'
                      : 'bg-gray-200 text-gray-400 cursor-not-allowed'
                  }
                `}
                aria-label="Send message"
              >
                <Send className="w-5 h-5" />
              </button>
            </form>
            <p className="text-xs text-gray-400 text-center mt-3" style={{ fontFamily: 'Work Sans' }}>
              Recommendations based on Forbes Advisor editorial analysis
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
