
import React from 'react';
import { cn } from '@/lib/utils';
import type { ChatMessage as ChatMessageType } from '@/types/chat';

interface ChatMessageProps {
  message: ChatMessageType;
}

const ChatMessage: React.FC<ChatMessageProps> = ({ message }) => {
  const isUser = message.role === 'user';
  
  return (
    <div 
      className={cn(
        "group animate-fade-in flex w-full mb-4 items-start max-w-4xl mx-auto", 
        isUser ? "justify-end" : "justify-start"
      )}
    >
      <div
        className={cn(
          "max-w-[85%] sm:max-w-[75%] px-5 py-3 rounded-2xl",
          isUser 
            ? "bg-chat-user text-white rounded-tr-none shadow-lg" 
            : "bg-chat-ai text-foreground rounded-tl-none glass-morphism"
        )}
      >
        <p className="whitespace-pre-wrap break-words">{message.content}</p>
        <div 
          className={cn(
            "text-xs mt-2 opacity-70 text-right",
            isUser ? "text-white/70" : "text-foreground/70"
          )}
        >
          {new Date(message.timestamp).toLocaleTimeString([], { 
            hour: '2-digit', 
            minute: '2-digit' 
          })}
        </div>
      </div>
    </div>
  );
};

export default ChatMessage;
