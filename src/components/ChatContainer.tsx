
import React, { useRef, useEffect } from 'react';
import ChatMessage from './ChatMessage';
import LoadingSkeleton from './LoadingSkeleton';
import type { ChatMessage as ChatMessageType } from '@/types/chat';

interface ChatContainerProps {
  messages: ChatMessageType[];
  isLoading: boolean;
}

const ChatContainer: React.FC<ChatContainerProps> = ({ messages, isLoading }) => {
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isLoading]);

  return (
    <div className="flex-1 overflow-y-auto py-4 px-4 space-y-6 w-full">
      {messages.length === 0 ? (
        <div className="flex items-center justify-center h-full">
          <div className="text-center p-8 rounded-xl glass-morphism max-w-md w-full">
            <h2 className="text-2xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary via-purple-400 to-blue-400">Welcome to EzChat</h2>
            <p className="text-foreground/70">
              Start a conversation with the AI by typing a message below. Ask questions, get creative responses, or just chat!
            </p>
          </div>
        </div>
      ) : (
        messages.map(message => (
          <ChatMessage key={message.id} message={message} />
        ))
      )}
      {isLoading && <LoadingSkeleton />}
      <div ref={messagesEndRef} />
    </div>
  );
};

export default ChatContainer;
