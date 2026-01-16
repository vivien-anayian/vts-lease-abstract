import { createContext, useContext, useState, ReactNode } from 'react';

interface DocumentSource {
  fileName: string;
  tenant: string;
  asset: string;
  page: number;
  excerpt: string;
  keyword: string;
  leaseId?: string;
  highlightRegion?: {
    x: number;
    y: number;
    width: number;
    height: number;
  };
}

interface ChatMessage {
  role: 'user' | 'assistant';
  content: string;
  timestamp?: string;
  sources?: DocumentSource[];
}

interface ChatContextType {
  chatMessages: ChatMessage[];
  isChatOpen: boolean;
  chatInput: string;
  setChatMessages: (messages: ChatMessage[]) => void;
  setIsChatOpen: (open: boolean) => void;
  setChatInput: (input: string) => void;
  addMessage: (message: ChatMessage) => void;
  clearChat: () => void;
}

const ChatContext = createContext<ChatContextType | undefined>(undefined);

export function ChatProvider({ children }: { children: ReactNode }) {
  const [chatMessages, setChatMessages] = useState<ChatMessage[]>([]);
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [chatInput, setChatInput] = useState('');

  const addMessage = (message: ChatMessage) => {
    setChatMessages(prev => [...prev, message]);
  };

  const clearChat = () => {
    setChatMessages([]);
    setChatInput('');
  };

  return (
    <ChatContext.Provider
      value={{
        chatMessages,
        isChatOpen,
        chatInput,
        setChatMessages,
        setIsChatOpen,
        setChatInput,
        addMessage,
        clearChat,
      }}
    >
      {children}
    </ChatContext.Provider>
  );
}

export function useChat() {
  const context = useContext(ChatContext);
  if (context === undefined) {
    throw new Error('useChat must be used within a ChatProvider');
  }
  return context;
}