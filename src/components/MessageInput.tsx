
import React, { useState, useRef, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';
import { cn } from '@/lib/utils';

interface MessageInputProps {
  onSendMessage: (message: string) => void;
  isLoading: boolean;
}

const MessageInput: React.FC<MessageInputProps> = ({ onSendMessage, isLoading }) => {
  const [message, setMessage] = useState('');
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (message.trim() && !isLoading) {
      onSendMessage(message);
      setMessage('');
      
      if (textareaRef.current) {
        textareaRef.current.style.height = 'auto';
      }
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSubmit(e);
    }
  };

  const resizeTextarea = () => {
    if (textareaRef.current) {
      textareaRef.current.style.height = 'auto';
      textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
    }
  };

  useEffect(() => {
    resizeTextarea();
  }, [message]);

  return (
    <div className="sticky bottom-0 w-full px-4 py-4">
      <form 
        onSubmit={handleSubmit}
        className="neo-blur rounded-2xl flex items-end relative max-w-4xl mx-auto w-full ring-1 ring-primary/20 hover:ring-primary/30 transition-all duration-300"
      >
        <textarea
          ref={textareaRef}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="Message EzChat..."
          rows={1}
          disabled={isLoading}
          className={cn(
            "w-full p-4 pr-12 bg-transparent resize-none outline-none",
            "max-h-[200px] overflow-y-auto",
            "placeholder:text-foreground/50",
            "focus:ring-2 focus:ring-primary/50 rounded-2xl transition-all duration-300"
          )}
        />
        <button
          type="submit"
          disabled={!message.trim() || isLoading}
          className={cn(
            "absolute right-3 bottom-3 p-2 rounded-full", 
            "bg-primary text-primary-foreground",
            "disabled:opacity-50 disabled:cursor-not-allowed",
            "transition-all duration-300 hover:scale-105",
            !message.trim() || isLoading ? "opacity-50" : "hover:shadow-[0_0_12px_rgba(155,135,245,0.5)]"
          )}
        >
          <ArrowUp className="h-5 w-5" />
        </button>
      </form>
    </div>
  );
};

export default MessageInput;
