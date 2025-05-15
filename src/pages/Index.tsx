
import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import ChatContainer from '@/components/ChatContainer';
import MessageInput from '@/components/MessageInput';
import type { ChatMessage, ChatState } from '@/types/chat';

const Index: React.FC = () => {
  const [chatState, setChatState] = useState<ChatState>({
    messages: [],
    isLoading: false
  });

  const handleSendMessage = async (content: string) => {
    // Create a new user message
    const userMessage: ChatMessage = {
      id: uuidv4(),
      role: 'user',
      content,
      timestamp: new Date()
    };

    // Update chat with user message
    setChatState(prev => ({
      ...prev,
      messages: [...prev.messages, userMessage],
      isLoading: true
    }));

    // Simulate AI response delay
    setTimeout(() => {
      // Create AI response
      const aiMessage: ChatMessage = {
        id: uuidv4(),
        role: 'ai',
        content: generateAIResponse(content),
        timestamp: new Date()
      };

      // Update chat with AI message
      setChatState(prev => ({
        ...prev,
        messages: [...prev.messages, aiMessage],
        isLoading: false
      }));
    }, 1500);
  };

  // Mock AI response generator
  const generateAIResponse = (userMessage: string): string => {
    const responses = [
      "I'm an AI assistant. How can I help you today?",
      "That's an interesting question. Let me think about it...",
      "I understand your query. Here's what I think:",
      "Based on my knowledge, I can provide the following information:",
      "Thanks for sharing. I'd be happy to help you with that.",
      `I see you're asking about "${userMessage.substring(0, 30)}...". Let me elaborate on that topic.`,
      "Great question! Here's what I know about this subject:",
      "I appreciate your curiosity. Here's my response:",
      "I'm designed to assist with questions like yours. Here's my answer:",
      "Thanks for reaching out. I'm here to help with queries like this one."
    ];
    
    const randomIndex = Math.floor(Math.random() * responses.length);
    return responses[randomIndex] + "\n\nThis is a simulated response in this demo chat interface. In a real implementation, this would be connected to an actual Large Language Model API that would generate contextually relevant responses based on the conversation history.";
  };

  return (
    <div className="flex flex-col h-screen w-full bg-gradient">
      <header className="sticky top-0 z-10 neo-blur border-b border-foreground/5">
        <div className="container flex justify-center py-4">
          <h1 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-foreground/80 via-foreground/70 to-foreground/90">
            EzChat
          </h1>
        </div>
      </header>

      <main className="flex-1 w-full max-w-screen-xl mx-auto flex flex-col overflow-hidden">
        <ChatContainer 
          messages={chatState.messages} 
          isLoading={chatState.isLoading} 
        />
        
        <MessageInput 
          onSendMessage={handleSendMessage}
          isLoading={chatState.isLoading}
        />
      </main>
    </div>
  );
};

export default Index;
