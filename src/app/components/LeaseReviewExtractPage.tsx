import { useState, useRef, useEffect } from 'react';
import { ChevronDown, ChevronRight, ChevronUp, FileText, Clock, X, Search } from 'lucide-react';
import { type Lease } from '../data/leaseData';
import ChatPanel from './ChatPanel';
import svgPaths from '@/imports/svg-67nnpntv6c';
import leasePage1 from '../../assets/8a568f83c60464c7f4278045d07945617c1db8db.png';
import leasePage2 from '../../assets/e3a6e024f04b77cff594e5f98330ece0d728c57d.png';
import expansionAmendmentImg from '../../assets/72702bd81590969ae6d850612ff7cd17135cf687.png';
import contractionAmendmentImg from '../../assets/922a42e22fa08a623162af226e1ad8b219150b75.png';
import amazonTerminationImg from '../../assets/b06a02365200a2aeac33fc19a5711257f6c5a277.png';
import amazonRentImg from '../../assets/56bd9e96f0c46880678c9b72179e872ed4aecf9c.png';

interface LeaseReviewExtractPageProps {
  lease: Lease;
  onClose: () => void;
  onSave: (updatedLease: Lease) => void;
  initialFieldToView?: string | null;
  searchTerm?: string;
}

interface FieldHistoryEntry {
  documentType: string;
  value: string;
  documentName: string;
  date: string;
}

interface ExtractedField {
  label: string;
  value: string;
  source: 'human' | 'ai';
  history?: FieldHistoryEntry[];
}

interface FieldSection {
  id: string;
  title: string;
  badge?: number;
  fields: ExtractedField[];
}

// Sparkle Icon Component (from Figma)
function SparklesIcon() {
  return (
    <div className="h-4 w-[15.467px] shrink-0">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15.4667 16">
        <g clipPath="url(#clip0_8262_685)">
          <path d={svgPaths.p6ef82a0} fill="url(#paint0_radial_8262_685)" />
          <path d={svgPaths.p28c4c6f0} fill="url(#paint1_radial_8262_685)" />
        </g>
        <defs>
          <radialGradient cx="0" cy="0" gradientTransform="matrix(2.67947 11.3972 48.0685 -21.2682 10.5283 1.40789)" gradientUnits="userSpaceOnUse" id="paint0_radial_8262_685" r="1">
            <stop stopColor="#8822AA" />
            <stop offset="1" stopColor="#181818" />
          </radialGradient>
          <radialGradient cx="0" cy="0" gradientTransform="matrix(16.3766 3.85336 -30.5602 69.1275 2.02306 8.37114)" gradientUnits="userSpaceOnUse" id="paint1_radial_8262_685" r="1">
            <stop stopColor="#8822AA" />
            <stop offset="1" stopColor="#181818" />
          </radialGradient>
          <clipPath id="clip0_8262_685">
            <rect fill="white" height="16" width="15.4667" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

export default function LeaseReviewExtractPage({
  lease,
  onClose,
  onSave,
  initialFieldToView,
  searchTerm,
}: LeaseReviewExtractPageProps) {
  const [expandedSections, setExpandedSections] = useState<Record<string, boolean>>({
    'lease-info': false,
    'financials': true,
    'critical-dates': false,
    'clauses-rights': false,
    'premises': false,
  });

  const [selectedField, setSelectedField] = useState<string | null>(null);
  const [expandedTimelines, setExpandedTimelines] = useState<Record<string, boolean>>({});
  const [isChatOpen, setIsChatOpen] = useState(true); // Add chat toggle state
  const [currentDocument, setCurrentDocument] = useState<{
    type: string;
    name: string;
    date: string;
  }>({
    type: 'Master Lease',
    name: 'LeaseAgreement-07-31-2012.pdf',
    date: '07/31/2012',
  });
  const [currentFieldLabel, setCurrentFieldLabel] = useState<string>('BASE RENT (PSF)');
  const [showDocumentDropdown, setShowDocumentDropdown] = useState(false);
  const [searchTermState, setSearchTermState] = useState<string>(''); // Always start with empty search, don't use searchTerm prop for UI
  const documentScrollRef = useRef<HTMLDivElement>(null);
  const terminationImgRef = useRef<HTMLImageElement>(null);
  const rentImgRef = useRef<HTMLImageElement>(null);

  // Available documents for dropdown
  const availableDocuments = [
    { type: 'Master Lease', name: 'LeaseAgreement-07-31-2012.pdf', date: '07/31/2012' },
    { type: 'Expansion Amendment', name: 'SecondAmendment-07654.pdf', date: '07/24/2021' },
    { type: 'Contraction Amendment', name: 'ThirdAmendment-06246.pdf', date: '03/13/2025' },
  ];

  // Check if this is the Amazon lease
  const isAmazonLease = lease.tenantName === 'Amazon' && lease.buildingName === '100 Park Avenue';

  // Handle searchTerm prop on mount or change
  useEffect(() => {
    if (searchTerm && isAmazonLease) {
      if (searchTerm === 'termination right') {
        // Automatically switch to Amazon Termination document
        setCurrentDocument({
          type: 'Amazon Termination',
          name: 'Amazon_100Park_Lease.pdf',
          date: '09/25/2018'
        });
        
        // Scroll to the highlighted termination section after document loads
        setTimeout(() => {
          if (terminationImgRef.current && documentScrollRef.current) {
            const imgElement = terminationImgRef.current;
            const scrollContainer = documentScrollRef.current;
            
            // The yellow highlight for Section 3 Termination appears around 240px from top
            const highlightOffset = 240; 
            const containerHeight = scrollContainer.clientHeight;
            // Position the highlight closer to the top (1/3 from top instead of centered)
            const scrollTo = highlightOffset - (containerHeight / 3) + imgElement.offsetTop;
            
            scrollContainer.scrollTo({
              top: Math.max(0, scrollTo),
              behavior: 'smooth'
            });
          }
        }, 150);
      } else if (searchTerm === 'current rent') {
        // Automatically switch to Amazon Rent document
        setCurrentDocument({
          type: 'Amazon Rent',
          name: 'Amazon_100Park_Lease.pdf',
          date: '09/25/2018'
        });
        
        // Scroll to the highlighted rent table section after document loads
        setTimeout(() => {
          if (rentImgRef.current && documentScrollRef.current) {
            const imgElement = rentImgRef.current;
            const scrollContainer = documentScrollRef.current;
            
            // The yellow highlight for Section 4 Rent table appears around 580px from top
            const highlightOffset = 580; 
            const containerHeight = scrollContainer.clientHeight;
            // Position the highlight closer to the top (1/3 from top instead of centered)
            const scrollTo = highlightOffset - (containerHeight / 3) + imgElement.offsetTop;
            
            scrollContainer.scrollTo({
              top: Math.max(0, scrollTo),
              behavior: 'smooth'
            });
          }
        }, 150);
      }
    }
  }, [searchTerm, isAmazonLease]);

  const toggleSection = (sectionId: string) => {
    setExpandedSections(prev => ({
      ...prev,
      [sectionId]: !prev[sectionId],
    }));
  };

  const toggleTimeline = (fieldId: string, e: React.MouseEvent) => {
    e.stopPropagation();
    setExpandedTimelines(prev => ({
      ...prev,
      [fieldId]: !prev[fieldId],
    }));
  };

  const handleFieldClick = (fieldId: string) => {
    setSelectedField(fieldId);
    // TODO: Scroll to and highlight the field in the PDF
  };

  const handleDocumentClick = (documentType: string, documentName: string, date: string) => {
    setCurrentDocument({
      type: documentType,
      name: documentName,
      date: date,
    });
    // TODO: Load and display the selected document
  };

  const handleOpenSourceFromChat = (page: number, searchTerm: string) => {
    // Check if this is the Amazon termination question
    if (isAmazonLease && searchTerm === 'termination right') {
      // Change to Amazon Termination document
      setCurrentDocument({
        type: 'Amazon Termination',
        name: 'Amazon_100Park_Lease.pdf',
        date: '09/25/2018'
      });
      
      // Scroll to the highlighted termination section after a brief delay for image to load
      setTimeout(() => {
        if (terminationImgRef.current && documentScrollRef.current) {
          // Get the position of the termination highlight (approximately 33% down the page based on the image)
          const imgElement = terminationImgRef.current;
          const scrollContainer = documentScrollRef.current;
          
          // Calculate scroll position to center the highlighted section
          // The highlight appears to be around 380px from top of the document
          const highlightOffset = 380; 
          const containerHeight = scrollContainer.clientHeight;
          const scrollTo = highlightOffset - (containerHeight / 2) + imgElement.offsetTop;
          
          scrollContainer.scrollTo({
            top: Math.max(0, scrollTo),
            behavior: 'smooth'
          });
        }
      }, 100);
    } else if (isAmazonLease && searchTerm === 'Section 4') {
      // Handle Amazon current rent question
      setCurrentDocument({
        type: 'Amazon Rent',
        name: 'Amazon_100Park_Lease.pdf',
        date: '09/25/2018'
      });
      
      // Scroll to the rent table section
      setTimeout(() => {
        if (rentImgRef.current && documentScrollRef.current) {
          const imgElement = rentImgRef.current;
          const scrollContainer = documentScrollRef.current;
          
          // Calculate scroll position to center the rent table (around 615px from top based on highlight coords)
          const highlightOffset = 615;
          const containerHeight = scrollContainer.clientHeight;
          const scrollTo = highlightOffset - (containerHeight / 2) + imgElement.offsetTop;
          
          scrollContainer.scrollTo({
            top: Math.max(0, scrollTo),
            behavior: 'smooth'
          });
        }
      }, 100);
    } else {
      // Default behavior for other sources
      console.log('Navigate to page', page, 'with search term', searchTerm);
    }
  };

  // Mock data for abstracted fields
  const sections: FieldSection[] = [
    {
      id: 'lease-info',
      title: 'Lease Info',
      fields: [
        { label: 'Lease Type', value: 'Full Service Gross', source: 'human' },
        { label: 'Tenant Name', value: 'Metro Financial Services LLC', source: 'ai' },
      ],
    },
    {
      id: 'financials',
      title: 'Financials',
      fields: [
        { 
          label: 'BASE RENT (PSF)', 
          value: '$48.50', 
          source: 'ai',
          history: [
            {
              documentType: 'Contraction Amendment',
              value: '$48.50',
              documentName: 'ThirdAmendment-06246.pdf',
              date: '03/13/2025'
            },
            {
              documentType: 'Expansion Amendment',
              value: '$49.50',
              documentName: 'SecondAmendment-07654.pdf',
              date: '07/24/2021'
            },
            {
              documentType: 'Main Lease Agreement',
              value: '$44.99',
              documentName: 'LeaseAgreement-07-31-2012.pdf',
              date: '07/31/2012'
            }
          ]
        },
        { label: 'ANNUAL RENT', value: '$245,000.00', source: 'ai' },
        { 
          label: 'RENT ESCALATION', 
          value: '3% Fixed', 
          source: 'human',
          history: [
            {
              documentType: 'Expansion Amendment',
              value: '3% Fixed',
              documentName: 'SecondAmendment-07654.pdf',
              date: '07/24/2021'
            },
            {
              documentType: 'Main Lease Agreement',
              value: '2.5% Fixed',
              documentName: 'LeaseAgreement-07-31-2012.pdf',
              date: '07/31/2012'
            }
          ]
        },
        { label: 'Security Deposit', value: '$250,000', source: 'ai' },
        { label: 'Operating Expenses', value: 'Included in base rent', source: 'human' },
        { label: 'CAM Charges', value: 'Pro-rata share', source: 'ai' },
      ],
    },
    {
      id: 'critical-dates',
      title: 'Critical Dates',
      fields: [
        { label: 'Commencement Date', value: 'January 1, 2024', source: 'ai' },
        { 
          label: 'Expiration Date', 
          value: 'December 31, 2033', 
          source: 'ai',
          history: [
            {
              documentType: 'Expansion Amendment',
              value: 'December 31, 2033',
              documentName: 'SecondAmendment-07654.pdf',
              date: '07/24/2021'
            },
            {
              documentType: 'Main Lease Agreement',
              value: 'December 31, 2022',
              documentName: 'LeaseAgreement-07-31-2012.pdf',
              date: '07/31/2012'
            }
          ]
        },
        { label: 'Rent Commencement', value: 'April 1, 2024', source: 'human' },
      ],
    },
    {
      id: 'clauses-rights',
      title: 'Clauses & Rights',
      fields: [
        { label: 'Renewal Options', value: 'Two 5-year options', source: 'ai' },
        { label: 'Early Termination', value: 'Allowed after year 5', source: 'human' },
      ],
    },
    {
      id: 'premises',
      title: 'Premises',
      fields: [
        { label: 'Square Footage', value: '25,000 SF', source: 'ai' },
        { label: 'Floor', value: '11th Floor', source: 'ai' },
      ],
    },
  ];

  // Search functionality - filter abstracted fields
  const searchFields = () => {
    if (!searchTermState.trim()) return [];
    
    const results: Array<{ sectionId: string; sectionTitle: string; field: ExtractedField; fieldIndex: number }> = [];
    const term = searchTermState.toLowerCase();
    
    sections.forEach(section => {
      section.fields.forEach((field, index) => {
        const labelMatch = field.label.toLowerCase().includes(term);
        const valueMatch = field.value.toLowerCase().includes(term);
        
        if (labelMatch || valueMatch) {
          results.push({
            sectionId: section.id,
            sectionTitle: section.title,
            field,
            fieldIndex: index
          });
        }
      });
    });
    
    return results;
  };

  // Mock PDF search results
  const searchPDFResults = () => {
    if (!searchTermState.trim()) return [];
    
    const term = searchTermState.toLowerCase();
    
    // Mock PDF results based on common search terms
    if (term.includes('base') || term.includes('rent')) {
      return [
        { page: 1, preview: '...the premises comprises base...' },
        { page: 3, preview: '...annual rent of base per annum...' },
        { page: 7, preview: '...base as stated in Section 4.2...' },
      ];
    } else if (term.includes('term')) {
      return [
        { page: 2, preview: '...lease term shall be ten years...' },
        { page: 5, preview: '...termination rights as follows...' },
      ];
    } else if (term.includes('deposit') || term.includes('security')) {
      return [
        { page: 4, preview: '...security deposit in the amount...' },
        { page: 8, preview: '...return of deposit upon termination...' },
      ];
    }
    
    return [];
  };

  const abstractedFieldResults = searchFields();
  const pdfResults = searchPDFResults();
  const totalResults = abstractedFieldResults.length + pdfResults.length;

  // Handle clicking on an abstracted field search result
  const handleSearchResultClick = (sectionId: string, fieldIndex: number) => {
    // Expand the section if it's collapsed
    if (expandedSections[sectionId]) {
      toggleSection(sectionId);
    }
    
    // Clear search to show field list
    setSearchTermState('');
    
    // TODO: Scroll to the specific field
  };

  // Handle clicking on a PDF search result
  const handlePDFResultClick = (page: number) => {
    // TODO: Navigate to that page in the PDF viewer and highlight the search term
    console.log(`Navigate to page ${page} and highlight "${searchTermState}"`);
  };

  return (
    <div className="fixed inset-0 bg-[#f4f5f6] z-50 flex flex-col">
      {/* Header */}
      <div className="bg-white border-b border-[#ecedef] px-6 py-4 flex items-center justify-between flex-shrink-0">
        <div>
          <h1 className="text-[18px] font-['Inter:SemiBold',sans-serif] text-[#1d1e20] mb-1">
            Review Lease Abstract
          </h1>
          <p className="text-[13px] font-['Inter:Regular',sans-serif] text-[#72777e]">
            {lease.tenantName} • {lease.buildingName} • {currentDocument.type}
          </p>
        </div>
        <button
          onClick={onClose}
          className="p-2 hover:bg-[#f9fafa] rounded-[6px] transition-colors"
        >
          <X className="w-5 h-5 text-[#72777e]" />
        </button>
      </div>

      {/* Main Content - 3 Column Layout: 25% | 50% | 25% (responsive when chat closed) */}
      <div className="flex-1 flex overflow-hidden">
        {/* Left Sidebar - Abstracted Fields (25%) */}
        <div className="w-1/4 bg-white border-r border-[#ecedef] overflow-y-auto flex-shrink-0">
          {/* Search Input - Always Visible */}
          <div className="px-4 py-3 border-b border-[#ecedef] sticky top-0 bg-white z-10">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#72777e]" />
              <input
                type="text"
                value={searchTermState}
                onChange={(e) => setSearchTermState(e.target.value)}
                placeholder="Search fields and documents..."
                className="w-full pl-10 pr-3 py-2 text-[13px] font-['Inter:Regular',sans-serif] border border-[#ecedef] rounded-[4px] focus:outline-none focus:border-[#4837b9] transition-colors"
              />
            </div>
          </div>

          {/* Conditional Display: Search Results OR Field List */}
          {searchTermState.trim() ? (
            /* Search Results Panel */
            <div className="px-4 py-3">
              {/* Results Count */}
              <p className="text-[11px] font-['Inter:Semi_Bold',sans-serif] text-[#72777e] uppercase tracking-[0.5px] mb-3">
                {totalResults} {totalResults === 1 ? 'result' : 'results'} found
              </p>

              {/* Abstracted Fields Results */}
              {abstractedFieldResults.length > 0 && (
                <div className="mb-4">
                  <h4 className="text-[11px] font-['Inter:Bold',sans-serif] text-[#72777e] uppercase tracking-[0.5px] mb-2">
                    Abstracted Fields
                  </h4>
                  <div className="flex flex-col gap-1">
                    {abstractedFieldResults.map((result, index) => (
                      <button
                        key={index}
                        onClick={() => handleSearchResultClick(result.sectionId, result.fieldIndex)}
                        className="text-left p-3 rounded-[4px] hover:bg-[#f9fafa] transition-colors"
                      >
                        <p className="text-[11px] font-['Inter:Semi_Bold',sans-serif] text-[#4837b9] leading-[16.5px] mb-1">
                          {result.sectionTitle}
                        </p>
                        <p className="text-[12px] font-['Inter:Regular',sans-serif] text-[#72777e] leading-[18px] truncate">
                          {result.field.label}: {result.field.value}
                        </p>
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Document (PDF) Results */}
              {pdfResults.length > 0 && (
                <div>
                  <h4 className="text-[11px] font-['Inter:Bold',sans-serif] text-[#72777e] uppercase tracking-[0.5px] mb-2">
                    Document (PDF)
                  </h4>
                  <div className="flex flex-col gap-1">
                    {pdfResults.map((result, index) => (
                      <button
                        key={index}
                        onClick={() => handlePDFResultClick(result.page)}
                        className="text-left p-3 rounded-[4px] hover:bg-[#f9fafa] transition-colors"
                      >
                        <p className="text-[11px] font-['Inter:Semi_Bold',sans-serif] text-[#4837b9] leading-[16.5px] mb-1">
                          Page {result.page}
                        </p>
                        <p className="text-[12px] font-['Inter:Regular',sans-serif] text-[#72777e] leading-[18px] truncate">
                          {result.preview}
                        </p>
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* No Results */}
              {totalResults === 0 && (
                <div className="text-center py-8">
                  <p className="text-[13px] font-['Inter:Regular',sans-serif] text-[#72777e]">
                    No results found for "{searchTermState}"
                  </p>
                </div>
              )}
            </div>
          ) : (
            /* Normal Field List - Sections */
            <div className="divide-y divide-[#ecedef]">
              {sections.map((section) => (
                <div key={section.id}>
                  {/* Section Header */}
                  <button
                    onClick={() => toggleSection(section.id)}
                    className="w-full px-4 py-3 flex items-center gap-2 hover:bg-[#f9fafa] transition-colors text-left group"
                  >
                    <div className="flex items-center gap-2 flex-1">
                      <FileText className="w-4 h-4 text-[#4837b9]" />
                      <span className="text-[14px] font-['Inter:Medium',sans-serif] text-[#1d1e20]">
                        {section.title}
                      </span>
                      {section.badge && (
                        <span className="ml-auto px-2 py-0.5 bg-[#f0f0f1] text-[11px] font-['Inter:SemiBold',sans-serif] text-[#72777e] rounded-full">
                          {section.badge}
                        </span>
                      )}
                    </div>
                    {expandedSections[section.id] ? (
                      <ChevronDown className="w-4 h-4 text-[#72777e]" />
                    ) : (
                      <ChevronRight className="w-4 h-4 text-[#72777e]" />
                    )}
                  </button>

                  {/* Section Content */}
                  {expandedSections[section.id] && (
                    <div className="bg-[#f9fafa] px-4 py-2">
                      {section.fields.map((field, index) => {
                        const fieldId = `${section.id}-${index}`;
                        const isExpanded = expandedTimelines[fieldId];
                        const hasHistory = field.history && field.history.length > 0;

                        return (
                          <div
                            key={index}
                            className={`w-full text-left py-3 ${
                              index < section.fields.length - 1 ? 'border-b border-[#ecedef]' : ''
                            }`}
                          >
                            {/* Field Label */}
                            <div className="flex items-center gap-2 mb-1">
                              <span className={`text-[11px] font-['Helvetica:Regular',sans-serif] ${
                                field.label === field.label.toUpperCase() 
                                  ? 'text-[#4837b9]' 
                                  : 'text-[#72777e]'
                              }`}>
                                {field.label}
                              </span>
                            </div>

                            {/* Field Value on new line */}
                            <div className="relative">
                              <div className="flex items-center gap-1 mb-2">
                                <span className="text-[15px] font-['Helvetica:Regular',sans-serif] text-[#1d1e20] leading-[22.5px]">
                                  {field.value}
                                </span>
                                {/* Sparkle icon removed per user request */}
                                {/* History Toggle Button (inline with value) */}
                                {hasHistory && (
                                  <button
                                    onClick={(e) => {
                                      e.stopPropagation();
                                      toggleTimeline(fieldId, e);
                                    }}
                                    className="flex items-center gap-0.5 hover:opacity-70 transition-opacity ml-1"
                                  >
                                    {isExpanded ? (
                                      <ChevronUp className="w-[14px] h-[14px] text-[#72777e]" />
                                    ) : (
                                      <ChevronDown className="w-[14px] h-[14px] text-[#72777e]" />
                                    )}
                                    <span className="text-[11px] font-['Inter:Medium',sans-serif] text-[#72777e] min-w-[10px] text-center">
                                      {field.history.length}
                                    </span>
                                    <Clock className="w-[14px] h-[14px] text-[#4837b9]" />
                                  </button>
                                )}
                              </div>
                            </div>

                            {/* Collapsible Timeline */}
                            {hasHistory && isExpanded && (
                              <div className="mt-4">
                                <div className="bg-white border border-[#e5d5c0] rounded-[8px] px-2 py-3 relative">
                                  <div className="pl-[10px] flex flex-col gap-2">
                                    {field.history.map((entry, historyIndex) => (
                                      <div key={historyIndex} className="flex gap-[15px] items-start relative">
                                        {/* Timeline Dot */}
                                        <div className="relative flex-shrink-0 pt-[2px]">
                                          <div
                                            className={`size-3 rounded-full border-2 border-white ${
                                              historyIndex === 0 ? 'bg-[#22c55e]' : 'bg-[#9ca3af]'
                                            }`}
                                          />
                                          {/* Vertical Line - always render, positioned 2px below dot */}
                                          <div 
                                            className="absolute left-1/2 top-[16px] w-px bg-[#72777e] -translate-x-1/2" 
                                            style={{ 
                                              height: historyIndex === 0 ? '63px' : historyIndex === 1 ? '64px' : '56px' 
                                            }} 
                                          />
                                        </div>
                                        
                                        {/* Entry Content */}
                                        <div className="flex-1 flex flex-col gap-1">
                                          <p className="font-['Helvetica:Regular',sans-serif] text-[13px] leading-[18px] text-[#1d1e20]">
                                            {entry.documentType}
                                          </p>
                                          <p className="font-['Inter:Regular',sans-serif] text-[11px] leading-4 text-[#9ca3af]">
                                            {entry.documentName}
                                          </p>
                                          <button
                                            onClick={() => {
                                              handleDocumentClick(entry.documentType, entry.documentName, entry.date);
                                              setCurrentFieldLabel(field.label);
                                            }}
                                            className="font-['Inter:Regular',sans-serif] text-[12px] leading-4 text-[#4837b9] hover:underline text-left"
                                          >
                                            {field.label.charAt(0).toUpperCase() + field.label.slice(1).toLowerCase()}:  {entry.value}
                                          </button>
                                          <p className="font-['Inter:Regular',sans-serif] text-[11px] leading-4 text-[#9ca3af]">
                                            {entry.date}
                                          </p>
                                        </div>
                                      </div>
                                    ))}
                                  </div>
                                </div>
                              </div>
                            )}
                          </div>
                        );
                      })}
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Middle - Document Viewer */}
        <div className="flex-1 bg-[#f4f5f6] overflow-hidden flex flex-col">
          {/* Document Viewer Header */}
          <div className="bg-white border-b border-[#ecedef] px-4 py-3 flex items-center justify-between flex-shrink-0">
            <div className="flex items-center gap-3">
              <span className="text-[13px] font-['Inter:Regular',sans-serif] text-[#72777e]">
                {currentFieldLabel}
              </span>
              <div className="flex items-center gap-2">
                <ChevronRight className="w-4 h-4 text-[#72777e]" />
                {/* Document Dropdown */}
                <div className="relative">
                  <button
                    onClick={() => setShowDocumentDropdown(!showDocumentDropdown)}
                    className="flex items-center gap-2 px-3 py-1.5 text-[13px] font-['Inter:Medium',sans-serif] text-[#1d1e20] hover:bg-[#f9fafa] rounded-[4px] transition-colors"
                  >
                    {currentDocument.type}
                    <ChevronDown className="w-4 h-4 text-[#72777e]" />
                  </button>
                  
                  {/* Dropdown Menu */}
                  {showDocumentDropdown && (
                    <div className="absolute top-full left-0 mt-1 bg-white border border-[#ecedef] rounded-[6px] shadow-lg min-w-[280px] z-50">
                      {availableDocuments.map((doc, index) => (
                        <button
                          key={index}
                          onClick={() => {
                            handleDocumentClick(doc.type, doc.name, doc.date);
                            setShowDocumentDropdown(false);
                          }}
                          className={`w-full text-left px-4 py-3 hover:bg-[#f9fafa] transition-colors flex flex-col gap-1 ${
                            index < availableDocuments.length - 1 ? 'border-b border-[#ecedef]' : ''
                          } ${currentDocument.name === doc.name ? 'bg-[#f9fafa]' : ''}`}
                        >
                          <span className="text-[13px] font-['Inter:Medium',sans-serif] text-[#1d1e20]">
                            {doc.type}
                          </span>
                          <span className="text-[11px] font-['Inter:Regular',sans-serif] text-[#72777e]">
                            {doc.name} • {doc.date}
                          </span>
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              </div>
              <span className="text-[13px] font-['Inter:Medium',sans-serif] text-[#1d1e20]">
                1 / 1 Source(s)
              </span>
            </div>
            <div className="flex items-center gap-2">
              <button className="px-3 py-1.5 text-[13px] font-['Inter:Medium',sans-serif] text-[#1d1e20] hover:bg-[#f9fafa] rounded-[4px] transition-colors">
                Zoom
              </button>
              <button className="px-3 py-1.5 text-[13px] font-['Inter:Medium',sans-serif] text-[#1d1e20] hover:bg-[#f9fafa] rounded-[4px] transition-colors flex items-center gap-1">
                <ChevronRight className="w-4 h-4 rotate-180" />
              </button>
              <span className="text-[13px] font-['Inter:Medium',sans-serif] text-[#1d1e20]">
                1 / 4
              </span>
              <button className="px-3 py-1.5 text-[13px] font-['Inter:Medium',sans-serif] text-[#1d1e20] hover:bg-[#f9fafa] rounded-[4px] transition-colors flex items-center gap-1">
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Document Content */}
          <div ref={documentScrollRef} className="flex-1 overflow-y-auto p-8 bg-[#f4f5f6]">
            <div className="max-w-[800px] mx-auto bg-white shadow-lg rounded-[4px] overflow-hidden">
              {/* Conditionally render document based on currentDocument.type */}
              {currentDocument.type === 'Master Lease' && (
                <>
                  <img 
                    src={leasePage1} 
                    alt="Master Lease Agreement Page 1"
                    className="w-full h-auto"
                  />
                  <img 
                    src={leasePage2} 
                    alt="Master Lease Agreement Page 2"
                    className="w-full h-auto"
                  />
                </>
              )}
              {currentDocument.type === 'Expansion Amendment' && (
                <img 
                  src={expansionAmendmentImg} 
                  alt="Expansion Amendment"
                  className="w-full h-auto"
                />
              )}
              {currentDocument.type === 'Contraction Amendment' && (
                <img 
                  src={contractionAmendmentImg} 
                  alt="Contraction Amendment"
                  className="w-full h-auto"
                />
              )}
              {currentDocument.type === 'Amazon Termination' && (
                <img 
                  ref={terminationImgRef}
                  src={amazonTerminationImg} 
                  alt="Amazon Termination"
                  className="w-full h-auto"
                />
              )}
              {currentDocument.type === 'Amazon Rent' && (
                <img 
                  ref={rentImgRef}
                  src={amazonRentImg} 
                  alt="Amazon Rent"
                  className="w-full h-auto"
                />
              )}
            </div>
          </div>
        </div>

        {/* Right Sidebar - Chat Panel (25%) */}
        <div className="w-1/4 bg-white border-l border-[#ecedef] flex-shrink-0 overflow-hidden">
          <ChatPanel lease={lease} onOpenSource={handleOpenSourceFromChat} />
        </div>
      </div>
    </div>
  );
}