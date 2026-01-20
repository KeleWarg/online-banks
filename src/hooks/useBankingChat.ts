import { useCallback, useMemo, useRef, useState } from 'react';
import type { ChatMessage, ChatResponse, QuickReply } from '../types/bankingChat';

const API_URL = import.meta.env.VITE_BANKING_CHAT_API_URL || '/api/chat';

const buildId = () => `msg-${Date.now()}-${Math.random().toString(36).slice(2, 9)}`;

// Chat state shape (managed client-side, sent to server each request)
interface ChatState {
  accountType: string | null;
  priority: string | null;
  access: string | null;
  balance: string | null;
  messagesCount: number;
}

interface ServerResponse extends ChatResponse {
  state?: ChatState;
}

export const useBankingChat = () => {
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [isTyping, setIsTyping] = useState(false);
  const chatStateRef = useRef<ChatState | null>(null);

  const addMessage = useCallback((message: Omit<ChatMessage, 'id'>) => {
    setMessages((prev) => [...prev, { ...message, id: buildId() }]);
  }, []);

  const sendRequest = useCallback(async (payload: { message?: string; action?: string }) => {
    const response = await fetch(API_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        state: chatStateRef.current,
        message: payload.message,
        action: payload.action
      })
    });

    if (!response.ok) {
      throw new Error('Chat request failed');
    }

    const data = (await response.json()) as ServerResponse;
    
    // Update local state with server response
    if (data.state) {
      chatStateRef.current = data.state;
    }

    return data;
  }, []);

  const handleResponse = useCallback((response: ChatResponse) => {
    addMessage({
      role: 'assistant',
      content: response.reply,
      contentCard: response.contentCard,
      options: response.options,
      resultsCard: response.resultsCard
    });
  }, [addMessage]);

  const handleUserMessage = useCallback(async (message: string) => {
    addMessage({ role: 'user', content: message });
    setIsTyping(true);

    try {
      const response = await sendRequest({ message });
      handleResponse(response);
    } catch (error) {
      addMessage({
        role: 'assistant',
        content: 'Sorry, I had trouble processing that. Could you try again?'
      });
    } finally {
      setIsTyping(false);
    }
  }, [addMessage, handleResponse, sendRequest]);

  const handleQuickReply = useCallback(async (option: QuickReply) => {
    addMessage({ role: 'user', content: option.text });
    setIsTyping(true);

    try {
      const response = await sendRequest({ action: option.action });
      handleResponse(response);
    } catch (error) {
      addMessage({
        role: 'assistant',
        content: 'Sorry, I had trouble processing that. Could you try again?'
      });
    } finally {
      setIsTyping(false);
    }
  }, [addMessage, handleResponse, sendRequest]);

  const initializeChat = useCallback(async () => {
    if (messages.length > 0) return;
    setIsTyping(true);
    try {
      const response = await sendRequest({ action: 'init' });
      handleResponse(response);
    } catch (error) {
      addMessage({
        role: 'assistant',
        content: 'Hi! I can help you compare online banks. What are you looking for?'
      });
    } finally {
      setIsTyping(false);
    }
  }, [addMessage, handleResponse, messages.length, sendRequest]);

  const resetChat = useCallback(() => {
    setMessages([]);
    chatStateRef.current = null;
  }, []);

  return useMemo(() => ({
    messages,
    isTyping,
    handleUserMessage,
    handleQuickReply,
    initializeChat,
    resetChat
  }), [handleQuickReply, handleUserMessage, initializeChat, isTyping, messages, resetChat]);
};
