import { useState, useEffect } from 'react';
import { Mic, Send, Plus, Lock, Sparkles, ExternalLink, MapPin, Building2, FileText, FileStack, Home, Briefcase, FileSignature, DollarSign, Layout, ChevronDown, ChevronRight, TrendingUp, Paperclip } from 'lucide-react';
import { useChat } from '../context/ChatContext';

type AnalystContext = 'leases' | 'deals' | 'proposals' | 'loan-documents' | 'building-documents' | 'floor-plans' | 'market-data';

interface VtsAiPageProps {
  onViewLeaseDetails: (leaseId: string) => void;
  onOpenPDFViewer?: (fileName: string, page: number, searchTerm?: string, leaseId?: string) => void;
  onNavigate?: (page: 'deals' | 'leases' | 'insights' | 'document-central' | 'vts-ai' | 'abstraction-pipeline' | 'documents') => void;
}

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

interface Message {
  role: 'user' | 'assistant';
  content: string;
  timestamp?: string;
  sources?: DocumentSource[];
}

interface Conversation {
  id: string;
  title: string;
  messages: Message[];
}

export default function VtsAiPage({ onViewLeaseDetails, onOpenPDFViewer, onNavigate }: VtsAiPageProps) {
  const { chatMessages, chatInput, setChatInput, addMessage, clearChat } = useChat();
  const [activeContext, setActiveContext] = useState<AnalystContext>('leases');
  const [isConversationsExpanded, setIsConversationsExpanded] = useState(true);
  const [conversations, setConversations] = useState<Conversation[]>([]);
  const [activeConversationId, setActiveConversationId] = useState<string | null>(null);

  // Sync chatMessages to conversations
  useEffect(() => {
    if (chatMessages.length > 0 && activeContext === 'leases') {
      // Get first user message for title
      const firstUserMessage = chatMessages.find(msg => msg.role === 'user');
      const title = firstUserMessage?.content.slice(0, 50) || 'New conversation';

      if (activeConversationId) {
        // Update existing conversation
        setConversations(prev => prev.map(conv => 
          conv.id === activeConversationId 
            ? { ...conv, messages: [...chatMessages] }
            : conv
        ));
      } else {
        // Create new conversation
        const newConversation: Conversation = {
          id: Date.now().toString(),
          title,
          messages: [...chatMessages]
        };
        setConversations(prev => [newConversation, ...prev]);
        setActiveConversationId(newConversation.id);
      }
    }
  }, [chatMessages]);

  // Analyst contexts configuration
  const analystContexts: Array<{
    id: AnalystContext;
    label: string;
    icon: typeof FileStack;
  }> = [
    { id: 'deals', label: 'Deals', icon: TrendingUp },
    { id: 'proposals', label: 'Proposals', icon: Briefcase },
    { id: 'loan-documents', label: 'Loan documents', icon: FileSignature },
    { id: 'building-documents', label: 'Building documents', icon: Building2 },
    { id: 'floor-plans', label: 'Floor plans', icon: Layout },
    { id: 'market-data', label: 'Market data', icon: DollarSign },
  ];

  // Coming soon page configurations
  const comingSoonConfig: Record<Exclude<AnalystContext, 'leases'>, {
    title: string;
    description: string;
    upcomingCapabilities: string[];
  }> = {
    'deals': {
      title: 'Deals AI is coming soon',
      description: 'We are currently training our AI on your deals data to provide you with the most accurate insights.',
      upcomingCapabilities: [
        'What is the status of the deal at 123 Main Street?',
        'Show me all active deals in Downtown'
      ]
    },
    'proposals': {
      title: 'Proposals AI is coming soon',
      description: 'We are currently training our AI on your proposal data to provide you with the most accurate insights.',
      upcomingCapabilities: [
        'What proposals are pending for Empire State Building?',
        'Show me all approved proposals from last quarter'
      ]
    },
    'loan-documents': {
      title: 'Loan Documents AI is coming soon',
      description: 'We are currently training our AI on your loan documents to provide you with the most accurate insights.',
      upcomingCapabilities: [
        'What are the terms of the loan for 100 Park Avenue?',
        'Show me all loans with interest rates above 5%'
      ]
    },
    'building-documents': {
      title: 'Building Documents AI is coming soon',
      description: 'We are currently training our AI on your building documents to provide you with the most accurate insights.',
      upcomingCapabilities: [
        'What is the latest inspection report for Central Plaza?',
        'Show me all maintenance records from this year'
      ]
    },
    'floor-plans': {
      title: 'Floor Plans AI is coming soon',
      description: 'We are currently training our AI on your floor plans to provide you with the most accurate insights.',
      upcomingCapabilities: [
        'What is the square footage of Suite 400?',
        'Show me all available spaces on the 5th floor'
      ]
    },
    'market-data': {
      title: 'Market Data AI is coming soon',
      description: 'We are currently training our AI on market data to provide you with the most accurate insights.',
      upcomingCapabilities: [
        'What are current rental rates in Downtown?',
        'Show me market trends for office space in Manhattan'
      ]
    }
  };
  
  const suggestedQuestions = [
    "What is my average letter of credit for technology tenants bet 20,000-30,00 sf",
    "Does Amazon at 100 Park Avenue have a termination right?",
    "What are the renewal options for Google at Empire State Building?"
  ];

  // Generate AI response based on question
  const generateResponse = (question: string): { content: string; sources?: DocumentSource[] } => {
    const lowerQuestion = question.toLowerCase();
    
    // Amazon termination question
    if (lowerQuestion.includes('amazon') && lowerQuestion.includes('100 park avenue') && lowerQuestion.includes('termination')) {
      return {
        content: 'Yes, Amazon has a one-time termination option to terminate this lease with a notice end date of 12/31/2027. This termination right is outlined in Section 3 of the lease agreement.',
        sources: [{
          fileName: 'Master Lease Agreement.pdf',
          tenant: 'Amazon',
          asset: '100 Park Avenue',
          page: 1,
          excerpt: 'Termination. Tenant shall have a one-time Termination Option to terminate this Lease with a notice end date of 12/31/2027.',
          keyword: 'termination right',
          leaseId: 'LEASE-AMAZON-001',
          highlightRegion: { x: 100, y: 250, width: 400, height: 60 }
        }]
      };
    }
    
    // Amazon current rent question
    if (lowerQuestion.includes('amazon') && (lowerQuestion.includes('current rent') || lowerQuestion.includes('rent at amazon') || (lowerQuestion.includes('rent') && lowerQuestion.includes('amazon')))) {
      return {
        content: 'Amazon\'s current Rent at 100 Park Avenue is $80.26 psf and $11,490,021.60 per year.',
        sources: [{
          fileName: 'Amazon_100Park_Lease.pdf',
          tenant: 'Amazon, Inc.',
          asset: '100 Park Avenue',
          page: 1,
          excerpt: 'Section 4 - Rent table for period 1/1/2026 - 12/31/2026: Basic Rent (Per RSF) $80.26, Basic Rent (Annual) $11,490,021.60',
          keyword: 'Section 4',
          leaseId: 'LEASE-AMAZON-001',
          highlightRegion: { x: 100, y: 580, width: 400, height: 30 }
        }]
      };
    }
    
    if (lowerQuestion.includes('top performing') || lowerQuestion.includes('best asset')) {
      return {
        content: 'Based on your portfolio data, here are your top 3 performing assets:\n\n1. **Empire State Building** - Occupancy: 98%, Revenue: $12.5M/year\n2. **Central Plaza** - Occupancy: 95%, Revenue: $8.2M/year\n3. **Tech Hub Tower** - Occupancy: 92%, Revenue: $6.8M/year\n\nThese assets show strong occupancy rates and consistent revenue growth over the past 12 months.',
        sources: [
          { fileName: 'Portfolio Performance Report Q4 2024.pdf', tenant: 'N/A', asset: 'N/A', page: 10, excerpt: 'Top performing assets', keyword: 'top performing', highlightRegion: { x: 50, y: 150, width: 300, height: 50 } },
          { fileName: 'Asset Analytics Dashboard.pdf', tenant: 'N/A', asset: 'N/A', page: 3, excerpt: 'Asset performance metrics', keyword: 'performance metrics', highlightRegion: { x: 100, y: 200, width: 200, height: 50 } }
        ]
      };
    }
    
    if (lowerQuestion.includes('expiration') || lowerQuestion.includes('renewal')) {
      return {
        content: 'Here\'s your lease expiration forecast for the next 6 months:\n\n**Q1 2025 (Jan-Mar)**\n- 12 leases expiring (450,000 sq ft)\n- Estimated impact: $2.1M annual revenue at risk\n\n**Q2 2025 (Apr-Jun)**\n- 8 leases expiring (320,000 sq ft)\n- Estimated impact: $1.6M annual revenue at risk\n\nI recommend prioritizing renewal conversations with tenants in premium spaces, particularly in Empire State Building where 5 leases expire in Q1.',
        sources: [
          { fileName: 'Lease Expiration Report.pdf', tenant: 'N/A', asset: 'N/A', page: 7, excerpt: 'Lease expiration forecast', keyword: 'expiration forecast', highlightRegion: { x: 50, y: 150, width: 300, height: 50 } },
          { fileName: 'Tenant Renewal Analysis.pdf', tenant: 'N/A', asset: 'N/A', page: 4, excerpt: 'Renewal analysis', keyword: 'renewal analysis', highlightRegion: { x: 100, y: 200, width: 200, height: 50 } }
        ]
      };
    }
    
    if (lowerQuestion.includes('comparable') || lowerQuestion.includes('market')) {
      return {
        content: 'Based on market analysis for 123 Main Street:\n\n**Comparable Properties:**\n- 456 Oak Avenue: $85/sq ft (95% occupied)\n- 789 Pine Street: $92/sq ft (88% occupied)\n- 321 Elm Boulevard: $88/sq ft (91% occupied)\n\n**Market Insights:**\nYour property is competitively positioned. The average market rate in this submarket is $88/sq ft. Consider a slight rent increase of 3-5% to align with top-performing comparables.',
        sources: [
          { fileName: 'Market Comparables Report - Downtown.pdf', tenant: 'N/A', asset: 'N/A', page: 6, excerpt: 'Market comparables', keyword: 'market comparables', highlightRegion: { x: 50, y: 150, width: 300, height: 50 } },
          { fileName: 'Submarket Analysis Q4 2024.pdf', tenant: 'N/A', asset: 'N/A', page: 2, excerpt: 'Submarket analysis', keyword: 'submarket analysis', highlightRegion: { x: 100, y: 200, width: 200, height: 50 } }
        ]
      };
    }
    
    return {
      content: `I understand you're asking about "${question}". Based on your portfolio data, I can help analyze trends, comparables, lease terms, and performance metrics. Could you provide more specific details about what aspect you'd like to explore?`,
      sources: [
        { fileName: 'VTS Portfolio Database.pdf', tenant: 'N/A', asset: 'N/A', page: 1, excerpt: 'Portfolio database', keyword: 'portfolio database', highlightRegion: { x: 50, y: 150, width: 300, height: 50 } }
      ]
    };
  };

  const handleSuggestionClick = (question: string) => {
    setChatInput(question);
    handleSend(question);
  };

  const handleSend = (questionText?: string) => {
    const question = questionText || chatInput.trim();
    if (!question) return;

    const timestamp = new Date().toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit' });
    
    const userMessage: Message = {
      role: 'user',
      content: question,
      timestamp
    };
    
    const aiResponse = generateResponse(question);
    const assistantMessage: Message = {
      role: 'assistant',
      content: aiResponse.content,
      timestamp,
      sources: aiResponse.sources
    };
    
    addMessage(userMessage);
    // Add a small delay before the AI response for better UX
    setTimeout(() => {
      addMessage(assistantMessage);
    }, 100);
    
    setChatInput('');
  };

  const handleNewChat = () => {
    setChatInput('');
    clearChat();
    setActiveConversationId(null);
    setActiveContext('leases');
  };

  const handleSelectConversation = (conversationId: string) => {
    const conversation = conversations.find(c => c.id === conversationId);
    if (conversation) {
      setActiveConversationId(conversationId);
      setActiveContext('leases'); // Always switch back to leases when selecting a conversation
      clearChat();
      conversation.messages.forEach(msg => addMessage(msg));
    }
  };

  const handleContextChange = (contextId: AnalystContext) => {
    setActiveContext(contextId);
  };

  const handleOpenPDFViewer = (source: DocumentSource) => {
    if (onOpenPDFViewer && source.fileName && source.page) {
      onOpenPDFViewer(source.fileName, source.page, source.keyword, source.leaseId);
    }
  };

  const renderComingSoonPage = (contextId: Exclude<AnalystContext, 'leases'>) => {
    const config = comingSoonConfig[contextId];
    const contextLabel = analystContexts.find(c => c.id === contextId)?.label || contextId;

    return (
      <div className="flex-1 flex flex-col bg-white">
        {/* Breadcrumb */}
        <div className="px-[20px] pt-[20px] pb-[8px] flex-shrink-0">
          <div className="flex items-center gap-2 py-[8px] text-[13px] font-['Inter:Regular',sans-serif]">
            <span className="text-[#4837b9] cursor-default">
              VTS AI
            </span>
            <span className="text-[#99a1af]">{'>'}</span>
            <span className="text-[#1d1e20]">
              {contextLabel}
            </span>
          </div>
        </div>

        {/* Coming Soon Content */}
        <div className="flex-1 flex flex-col items-center justify-center p-8 max-w-2xl mx-auto">
          {/* Icon with Sparkle */}
          <div className="mb-8 relative">
            <div className="w-20 h-20 bg-gradient-to-br from-[#8C82FF] to-[#673FFF] rounded-2xl flex items-center justify-center relative">
              <FileStack className="w-10 h-10 text-white" />
              <div className="absolute -top-1 -right-1 w-6 h-6 bg-white rounded-full flex items-center justify-center shadow-lg">
                <Sparkles className="w-4 h-4 text-[#673FFF]" />
              </div>
            </div>
          </div>

          <h1 className="text-3xl font-semibold text-[#111827] mb-3">{config.title}</h1>
          <p className="text-[#6b7280] text-center mb-8 max-w-md leading-relaxed">{config.description}</p>

          <button className="px-6 py-3 bg-[#4837b9] text-white rounded-lg hover:bg-[#3d2d9f] transition-colors text-sm font-medium mb-16">
            Notify me when it's ready
          </button>

          {/* Upcoming Capabilities */}
          <div className="w-full">
            <h2 className="text-xs font-semibold text-[#9ca3af] uppercase tracking-wider mb-4 text-center">Upcoming capabilities</h2>
            <div className="grid grid-cols-2 gap-4 max-w-3xl mx-auto">
              {config.upcomingCapabilities.map((capability, idx) => (
                <div key={idx} className="p-4 bg-white rounded-lg border border-[#e5e7eb] text-center">
                  <p className="text-sm text-[#9ca3af]">{capability}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Disabled Input Area */}
        <div className="border-t border-[#e5e7eb] p-6 bg-white">
          <div className="max-w-3xl mx-auto">
            <div className="flex items-center gap-3 bg-[#f9fafb] rounded-lg px-4 py-3 border border-[#e5e7eb] mb-3">
              <Lock className="w-5 h-5 text-[#9ca3af]" />
              <input
                type="text"
                disabled
                placeholder={`Chat for ${contextLabel} is not yet available.`}
                className="flex-1 bg-transparent text-[#9ca3af] placeholder-[#9ca3af] outline-none text-sm"
              />
              <button disabled className="p-2 rounded-lg bg-[#e5e7eb] cursor-not-allowed">
                <Send className="w-5 h-5 text-[#9ca3af]" />
              </button>
            </div>
            <p className="text-xs text-center text-[#9ca3af] uppercase tracking-wide">
              Access to {contextLabel} assistant restricted during training
            </p>
          </div>
        </div>
      </div>
    );
  };

  const renderLeaseChat = () => (
    <div className="flex-1 flex flex-col bg-white overflow-hidden">
      {/* Breadcrumb and Header*/}
      <div className="px-[20px] pt-[20px] pb-[8px] flex-shrink-0">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 py-[8px] text-[13px] font-['Inter:Regular',sans-serif]">
          <span className="text-[#4837b9] cursor-default">
            VTS AI
          </span>
          <span className="text-[#99a1af]">{'>'}</span>
          <span className="text-[#1d1e20]">
            Leases
          </span>
        </div>
      </div>

      {chatMessages.length === 0 ? (
        /* Empty State */
        <div className="flex-1 flex flex-col items-center justify-center p-6 max-w-5xl mx-auto w-full overflow-y-auto">
          {/* Header */}
          <h1 className="text-[32px] font-semibold text-[#1d1e20] mb-2 text-center">How can I help you today?</h1>
          <p className="text-[#6b7280] text-center mb-12 leading-relaxed max-w-2xl">Ask me anything about your uploaded leases, tenant and building documents.</p>
          
          {/* Prompts Grid - 3 columns */}
          <div className="grid grid-cols-3 gap-4 w-full max-w-4xl mb-auto">
            {/* Prompt 1 */}
            <button
              onClick={() => handleSuggestionClick(suggestedQuestions[0])}
              className="p-6 rounded-xl bg-white hover:bg-[#f9fafb] border border-[#e5e7eb] text-left transition-all group shadow-sm hover:shadow-md hover:border-[#4837b9] flex flex-col"
            >
              {/* Icon */}
              <div className="w-10 h-10 rounded-lg bg-[#ede9fe] flex items-center justify-center mb-4">
                <FileText className="w-5 h-5 text-[#7c3aed]" />
              </div>
              {/* Question */}
              <p className="text-sm text-[#374151] group-hover:text-[#111827] transition-colors leading-relaxed">{suggestedQuestions[0]}</p>
            </button>

            {/* Prompt 2 */}
            <button
              onClick={() => handleSuggestionClick(suggestedQuestions[1])}
              className="p-6 rounded-xl bg-white hover:bg-[#f9fafb] border border-[#e5e7eb] text-left transition-all group shadow-sm hover:shadow-md hover:border-[#4837b9] flex flex-col"
            >
              {/* Icon */}
              <div className="w-10 h-10 rounded-lg bg-[#dbeafe] flex items-center justify-center mb-4">
                <FileText className="w-5 h-5 text-[#3b82f6]" />
              </div>
              {/* Question */}
              <p className="text-sm text-[#374151] group-hover:text-[#111827] transition-colors leading-relaxed">{suggestedQuestions[1]}</p>
            </button>

            {/* Prompt 3 */}
            <button
              onClick={() => handleSuggestionClick(suggestedQuestions[2])}
              className="p-6 rounded-xl bg-white hover:bg-[#f9fafb] border border-[#e5e7eb] text-left transition-all group shadow-sm hover:shadow-md hover:border-[#4837b9] flex flex-col"
            >
              {/* Icon */}
              <div className="w-10 h-10 rounded-lg bg-[#ede9fe] flex items-center justify-center mb-4">
                <FileText className="w-5 h-5 text-[#7c3aed]" />
              </div>
              {/* Question */}
              <p className="text-sm text-[#374151] group-hover:text-[#111827] transition-colors leading-relaxed">{suggestedQuestions[2]}</p>
            </button>
          </div>
        </div>
      ) : (
        /* Chat History */
        <div className="flex-1 overflow-y-auto p-4 bg-[#f9fafb]">
          <div className="max-w-3xl mx-auto space-y-4">
            {chatMessages.map((message, idx) => (
              <div key={idx} className={`flex gap-3 ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                {message.role === 'assistant' && (
                  <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#8C82FF] to-[#673FFF] flex items-center justify-center flex-shrink-0">
                    <Sparkles className="w-4 h-4 text-white" />
                  </div>
                )}
                <div className={`flex flex-col ${message.role === 'user' ? 'items-end' : 'items-start'} max-w-[70%]`}>
                  <div className={`px-4 py-2.5 rounded-2xl ${
                    message.role === 'user' 
                      ? 'bg-gradient-to-br from-[#8C82FF] to-[#673FFF] text-white' 
                      : 'bg-white text-[#111827] border border-[#e5e7eb] shadow-sm'
                  }`}>
                    <p className="whitespace-pre-wrap text-sm leading-relaxed">{message.content}</p>
                  </div>
                  {message.sources && message.sources.length > 0 && (
                    <div className="mt-2 space-y-2 w-full">
                      <div className="text-xs text-[#6b7280] mb-1">Sources:</div>
                      {message.sources.map((source, sidx) => (
                        <div 
                          key={sidx}
                          className="bg-white border border-[#e5e7eb] rounded-lg p-2.5 hover:border-[#4837b9] hover:shadow-md transition-all cursor-pointer group"
                          onClick={() => handleOpenPDFViewer(source)}
                        >
                          <div className="flex items-start justify-between mb-1.5">
                            <div className="flex items-center gap-2 flex-1">
                              <FileText className="w-4 h-4 text-[#4837b9] flex-shrink-0" />
                              <div className="flex-1 min-w-0">
                                <div className="text-sm font-medium text-[#111827] truncate group-hover:text-[#4837b9] transition-colors">
                                  {source.fileName}
                                </div>
                                <div className="text-xs text-[#6b7280] mt-0.5">Page {source.page}</div>
                              </div>
                            </div>
                            <ExternalLink className="w-3.5 h-3.5 text-[#9ca3af] group-hover:text-[#4837b9] transition-colors flex-shrink-0 ml-2" />
                          </div>

                          <div className="flex items-center gap-4 mb-1.5 text-xs">
                            {source.tenant && source.tenant !== 'N/A' && (
                              <div className="flex items-center gap-1.5 text-[#6b7280]">
                                <Building2 className="w-3 h-3" />
                                <span>{source.tenant}</span>
                              </div>
                            )}
                            {source.asset && source.asset !== 'N/A' && (
                              <div className="flex items-center gap-1.5 text-[#6b7280]">
                                <MapPin className="w-3 h-3" />
                                <span>{source.asset}</span>
                              </div>
                            )}
                          </div>

                          <div className="bg-[#f9fafb] rounded p-2 border border-[#e5e7eb]">
                            <div className="text-xs text-[#6b7280] mb-1">Extract:</div>
                            <div className="text-xs text-[#374151]">
                              "...{source.excerpt}..."
                            </div>
                            {source.keyword && (
                              <div className="text-xs text-[#4837b9] mt-1">
                                → Keyword: <span className="font-medium">{source.keyword}</span>
                              </div>
                            )}
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                  <span className="text-xs text-[#9ca3af] mt-1">{message.timestamp}</span>
                </div>
                {message.role === 'user' && (
                  <div className="w-8 h-8 rounded-full bg-[#e5e7eb] flex items-center justify-center flex-shrink-0">
                    <span className="text-[#6b7280] text-sm font-semibold">U</span>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Input Area - Sticky at Bottom */}
      <div className="flex-shrink-0">
        {/* Chat with Lease Analyst - no border, no purple gradient */}
        <div className="px-4 py-3 bg-white">
          <div className="max-w-3xl mx-auto">
            <p className="text-sm text-[#374151]">
              Chat with the <span className="font-semibold">Lease Analyst</span>
            </p>
          </div>
        </div>

        {/* White Input Area - no purple gradient */}
        <div className="px-4 pb-4 bg-white">
          <div className="max-w-3xl mx-auto">
            {/* Input Container */}
            <div className="bg-white rounded-[14px] border border-[#d1d5db]">
              <div className="flex items-center gap-[12px] px-[17px] py-3">
                {/* Mic Button */}
                <button 
                  type="button"
                  className="bg-[#f3f4f6] rounded-[10px] w-[28px] h-[28px] flex items-center justify-center hover:bg-[#e5e7eb] transition-colors flex-shrink-0"
                >
                  <Mic className="w-[20px] h-[20px] text-[#6b7280]" strokeWidth={1.67} />
                </button>

                {/* Input */}
                <input
                  type="text"
                  value={chatInput}
                  onChange={(e) => setChatInput(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' && !e.shiftKey) {
                      e.preventDefault();
                      handleSend();
                    }
                  }}
                  placeholder="Ask a question..."
                  className="flex-1 bg-transparent border-none outline-none text-[14px] text-[#111827] placeholder:text-[#9ca3af] font-['Inter:Regular',sans-serif]"
                />

                {/* Send Button */}
                <button 
                  type="button"
                  onClick={(e) => {
                    e.preventDefault();
                    handleSend();
                  }}
                  className="bg-gradient-to-b from-[#8C82FF] to-[#673FFF] rounded-[10px] w-[32px] h-[32px] flex items-center justify-center hover:opacity-90 transition-opacity flex-shrink-0"
                >
                  <Send className="w-[16px] h-[16px] text-white" />
                </button>
              </div>
            </div>
          </div>
        </div>
        
        {/* Footer Text */}
        <div className="bg-white pb-2 px-4">
          <p className="text-xs text-center text-[#9ca3af] max-w-3xl mx-auto">
            VTS AI can make mistakes. Check important info.
          </p>
        </div>
      </div>
    </div>
  );

  return (
    <div className="h-screen flex flex-col pt-[48px]">
      <div className="flex-1 flex overflow-hidden bg-[#f3f4f6]">
        {/* Sidebar */}
        <div className="w-[280px] bg-[#f9fafb] border-r border-[#e5e7eb] flex flex-col p-4 overflow-y-auto">
          {/* New Chat Button */}
          <button 
            onClick={handleNewChat}
            className="w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg bg-white hover:bg-[#f9fafb] transition-colors text-[#4837b9] text-sm font-medium border border-[#4837b9] shadow-sm mb-3"
          >
            <Plus className="w-4 h-4" />
            New chat
          </button>

          {/* All Analyst Contexts (including Leases) */}
          <div className="space-y-0.5 mb-3">
            {/* Leases */}
            <button
              onClick={() => {
                setActiveContext('leases');
              }}
              className={`w-full flex items-center gap-3 px-3 py-1.5 rounded-lg transition-colors text-sm ${
                activeContext === 'leases'
                  ? 'bg-[#4837b9] text-white'
                  : 'hover:bg-white text-[#374151] hover:text-[#111827]'
              }`}
            >
              <FileStack className="w-4 h-4" />
              <span>Leases</span>
            </button>

            {/* Other Contexts */}
            {analystContexts.map((context) => {
              const Icon = context.icon;
              const isActive = activeContext === context.id;
              return (
                <button
                  key={context.id}
                  onClick={() => handleContextChange(context.id)}
                  className={`w-full flex items-center gap-3 px-3 py-1.5 rounded-lg transition-colors text-sm ${
                    isActive
                      ? 'bg-[#4837b9] text-white'
                      : 'hover:bg-white text-[#374151] hover:text-[#111827]'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  <span>{context.label}</span>
                </button>
              );
            })}
          </div>

          {/* Recent Conversations Section */}
          <div className="pt-3 border-t border-[#e5e7eb]">
            <button
              onClick={() => setIsConversationsExpanded(!isConversationsExpanded)}
              className="w-full flex items-center justify-between px-3 py-1.5 rounded-lg transition-colors text-sm hover:bg-white"
            >
              <span className="text-xs font-semibold text-[#9ca3af] uppercase tracking-wider">Recent conversations</span>
              {isConversationsExpanded ? (
                <ChevronDown className="w-4 h-4 text-[#9ca3af]" />
              ) : (
                <ChevronRight className="w-4 h-4 text-[#9ca3af]" />
              )}
            </button>

            {/* Recent Conversations List */}
            {isConversationsExpanded && (
              <div className="mt-1 space-y-0.5">
                {conversations.length === 0 ? (
                  <p className="text-xs text-[#9ca3af] px-3 py-1.5">No conversations yet</p>
                ) : (
                  conversations.map((conversation) => (
                    <button
                      key={conversation.id}
                      onClick={() => handleSelectConversation(conversation.id)}
                      className={`w-full flex items-start gap-2 px-3 py-1.5 rounded-lg hover:bg-white transition-colors text-left group ${
                        activeConversationId === conversation.id ? 'bg-white' : ''
                      }`}
                    >
                      <div className={`w-2 h-2 rounded-sm flex-shrink-0 mt-1.5 ${
                        activeConversationId === conversation.id ? 'bg-[#8C82FF]' : 'bg-[#d1d5db]'
                      }`} />
                      <p className="text-sm text-[#374151] group-hover:text-[#111827] truncate flex-1">
                        {conversation.title}
                      </p>
                    </button>
                  ))
                )}
              </div>
            )}
          </div>
        </div>

        {/* Main Content */}
        {activeContext === 'leases' ? renderLeaseChat() : renderComingSoonPage(activeContext)}
      </div>
    </div>
  );
}