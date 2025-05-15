
import React from 'react';

const LoadingSkeleton: React.FC = () => {
  return (
    <div className="flex items-start animate-fade-in mb-4 max-w-4xl mx-auto">
      <div className="max-w-[85%] sm:max-w-[75%] bg-chat-ai glass-morphism px-5 py-4 rounded-2xl rounded-tl-none shadow-lg">
        <div className="flex items-center space-x-1">
          <div className="h-2 w-2 rounded-full bg-chat-loading animate-typing-dot-1"></div>
          <div className="h-2 w-2 rounded-full bg-chat-loading animate-typing-dot-2"></div>
          <div className="h-2 w-2 rounded-full bg-chat-loading animate-typing-dot-3"></div>
          <span className="ml-2 text-sm text-foreground/70">AI is thinking...</span>
        </div>
        <div className="space-y-3 mt-4">
          <div className="h-4 bg-foreground/10 rounded animate-pulse w-[280px]"></div>
          <div className="h-4 bg-foreground/10 rounded animate-pulse w-[230px]"></div>
          <div className="h-4 bg-foreground/10 rounded animate-pulse w-[300px]"></div>
          <div className="h-4 bg-foreground/10 rounded animate-pulse w-[200px]"></div>
        </div>
        <div className="text-xs mt-3 opacity-70 text-right text-foreground/70">
          {new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
        </div>
      </div>
    </div>
  );
};

export default LoadingSkeleton;
