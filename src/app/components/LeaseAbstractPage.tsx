import { useState, useEffect } from 'react';
import { FileText, Calendar, DollarSign, Download, ChevronLeft, ChevronDown, ChevronRight, ChevronUp, Clock, CheckCircle2, Sparkles, Plus, Building2, MessageSquare, Eye, Upload, AlertTriangle, Scale } from 'lucide-react';
import { MOCK_LEASES, type Lease } from '../data/leaseData';
import { ASSET_DOCUMENTS } from '../data/documentData';
import LeaseReviewExtractPage from './LeaseReviewExtractPage';
import PDFViewerModal from './PDFViewerModal';
import TopNavigation from './TopNavigation';
import { DocumentsTab } from './LeaseAbstractPageDocumentsTab';
import { TimelineTab } from './LeaseAbstractPageTimelineTab';
import imgIStock51422918632 from "../../assets/istock-514229186-32.png";
import AssetSelectorDropdown from './AssetSelectorDropdown';
import ChatPanel from './ChatPanel';

interface LeaseAbstractPageProps {
  leaseId: string;
  onBack: () => void;
  onNavigate?: (page: 'deals' | 'leases' | 'insights' | 'document-central') => void;
  initialTab?: string;
  pdfPage?: number;
  searchTerm?: string;
  showReviewExtract?: boolean;
  onUploadDocument?: (assetId?: string, tenantId?: string) => void;
  isBuildingDocument?: boolean;
  buildingDocumentName?: string;
}

interface ConfidenceLevel {
  score: number;
  level: 'very_low' | 'low' | 'medium' | 'high' | 'very_high';
  color: string;
}

function getConfidenceLevel(score: number): ConfidenceLevel {
  if (score >= 0.95) {
    return { score, level: 'very_high', color: 'bg-green-500' };
  } else if (score >= 0.80) {
    return { score, level: 'high', color: 'bg-blue-500' };
  } else if (score >= 0.60) {
    return { score, level: 'medium', color: 'bg-yellow-500' };
  } else if (score >= 0.40) {
    return { score, level: 'low', color: 'bg-orange-500' };
  } else {
    return { score, level: 'very_low', color: 'bg-red-500' };
  }
}

function getStatusColor(status: string): string {
  switch (status) {
    case 'Expert verified':
      return 'bg-[#dcfce7] text-[#016630] border border-[#bbf7d0]';
    case 'AI Abstracted':
      return 'bg-[#fef9c2] text-[#894b00] border border-[#fff085]';
    case 'Processing':
      return 'bg-gray-100 text-gray-800 border border-gray-200';
    default:
      return 'bg-gray-100 text-gray-800 border border-gray-200';
  }
}

interface FieldHistoryEntry {
  documentType: string;
  value: string;
  documentName: string;
  date: string;
}

interface FieldDisplayProps {
  label: string;
  value: string | number | null | undefined;
  fullWidth?: boolean;
  onClick?: () => void;
  aiExtracted?: boolean; // Whether this field was extracted by AI
  history?: FieldHistoryEntry[]; // Audit history for this field
}

function FieldDisplay({ label, value, fullWidth, onClick, aiExtracted, history }: FieldDisplayProps) {
  const [isHistoryExpanded, setIsHistoryExpanded] = useState(false);
  const hasValue = value !== null && value !== undefined && value !== '';
  const hasHistory = history && history.length > 0;
  
  return (
    <div className={`${fullWidth ? 'col-span-2' : ''}`}>
      <div className="flex items-center justify-between mb-[4px]">
        <p className="text-[10px] font-medium font-['Inter:Medium',sans-serif] text-[#72777e] uppercase tracking-wider leading-[15px]">
          {label}
        </p>
      </div>
      <div className="flex items-center gap-[6px] mb-1">
        <p
          className={`text-[13px] font-['Inter:Regular',sans-serif] leading-[20px] ${
            hasValue 
              ? `text-[#1d1e20] ${onClick ? 'cursor-pointer hover:text-[#4837b9]' : ''}` 
              : 'text-[#bbbfc4]'
          }`}
          onClick={onClick}
        >
          {value || '—'}
        </p>
        {hasValue && aiExtracted && (
          <div className="group relative">
            {/* Sparkle icon removed per user request */}
          </div>
        )}
        {/* History Toggle Button */}
        {hasHistory && (
          <button
            onClick={() => setIsHistoryExpanded(!isHistoryExpanded)}
            className="flex items-center gap-0.5 hover:opacity-70 transition-opacity"
          >
            {isHistoryExpanded ? (
              <ChevronUp className="w-[14px] h-[14px] text-[#72777e]" />
            ) : (
              <ChevronDown className="w-[14px] h-[14px] text-[#72777e]" />
            )}
            <span className="text-[11px] font-['Inter:Medium',sans-serif] text-[#72777e] min-w-[10px] text-center">
              {history.length}
            </span>
            <Clock className="w-[14px] h-[14px] text-[#4837b9]" />
          </button>
        )}
      </div>

      {/* Collapsible History Timeline */}
      {hasHistory && isHistoryExpanded && (
        <div className="mt-2 mb-2">
          <div className="bg-white border border-[#e5d5c0] rounded-[8px] px-2 py-3">
            <div className="pl-[10px] flex flex-col gap-2">
              {history.map((entry, index) => (
                <div key={index} className="flex gap-[15px] items-start relative">
                  {/* Timeline Dot */}
                  <div className="relative flex-shrink-0 pt-[2px]">
                    <div
                      className={`size-3 rounded-full border-2 border-white ${
                        index === 0 ? 'bg-[#22c55e]' : 'bg-[#9ca3af]'
                      }`}
                    />
                    {/* Vertical Line - don't render for last item */}
                    {index < history.length - 1 && (
                      <div 
                        className="absolute left-1/2 top-[16px] w-px bg-[#72777e] -translate-x-1/2" 
                        style={{ height: '63px' }} 
                      />
                    )}
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
                        // Handle document click
                        console.log('Navigate to document:', entry.documentName);
                      }}
                      className="font-['Inter:Regular',sans-serif] text-[12px] leading-4 text-[#4837b9] hover:underline text-left"
                    >
                      {label}: {entry.value}
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
}

export default function LeaseAbstractPage({ leaseId, onBack, onNavigate, initialTab, pdfPage, searchTerm, showReviewExtract, onUploadDocument, isBuildingDocument, buildingDocumentName }: LeaseAbstractPageProps) {
  const [lease, setLease] = useState<Lease | null>(null);
  const [loading, setLoading] = useState(true);
  const [showEditFields, setShowEditFields] = useState(showReviewExtract || false);
  const [showPDFViewer, setShowPDFViewer] = useState(false);
  const [pdfViewerPage, setPdfViewerPage] = useState(pdfPage || 1);
  const [pdfViewerRegion, setPdfViewerRegion] = useState<{
    page: number;
    x: number;
    y: number;
    width: number;
    height: number;
  } | null>(null);
  const [initialFieldToView, setInitialFieldToView] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState<'summary' | 'documents' | 'timeline' | 'critical-dates'>((initialTab as 'summary' | 'documents' | 'timeline' | 'critical-dates') || 'summary');
  const [citationSearchTerm, setCitationSearchTerm] = useState<string | undefined>(searchTerm);

  // Collapsible sections state - Property Information expanded by default
  const [collapsedSections, setCollapsedSections] = useState<Record<string, boolean>>({
    'property-information': false, // expanded
    'lease-terms': false, // expanded
    'important-dates': false, // expanded
    'financial-terms': false, // expanded
    'legal-provisions': false, // expanded
    'premises-use': false, // expanded
  });

  const toggleSection = (sectionId: string) => {
    setCollapsedSections(prev => ({
      ...prev,
      [sectionId]: !prev[sectionId],
    }));
  };
  
  // Update showEditFields when showReviewExtract prop changes
  useEffect(() => {
    if (showReviewExtract) {
      setShowEditFields(true);
    }
  }, [showReviewExtract]);

  // Navigate back to Documents page  
  const onNavigateToDocuments = () => {
    onNavigate?.('document-central');
    onBack();
  };

  // Handle Upload Document button click - pass current lease's asset and tenant
  const handleUploadClick = () => {
    if (onUploadDocument && lease) {
      onUploadDocument(lease.assetId, lease.tenantId || undefined);
    }
  };

  // Field location mapping (page number and coordinates in the PDF)
  const fieldLocations: { [key: string]: { page: number; x: number; y: number; width: number; height: number } } = {
    buildingName: { page: 1, x: 120, y: 360, width: 200, height: 20 },
    suite: { page: 1, x: 120, y: 380, width: 100, height: 20 },
    squareFootage: { page: 1, x: 270, y: 320, width: 260, height: 15 },
    floor: { page: 1, x: 120, y: 400, width: 80, height: 20 },
    leaseTerm: { page: 2, x: 150, y: 120, width: 120, height: 20 },
    tenantName: { page: 1, x: 120, y: 320, width: 150, height: 20 },
    leaseType: { page: 2, x: 150, y: 240, width: 120, height: 20 },
    commencementDate: { page: 2, x: 200, y: 150, width: 120, height: 20 },
    expirationDate: { page: 2, x: 200, y: 190, width: 120, height: 20 },
    rentCommencementDate: { page: 2, x: 200, y: 170, width: 120, height: 20 },
    baseRent: { page: 3, x: 150, y: 300, width: 130, height: 20 },
    securityDeposit: { page: 3, x: 150, y: 340, width: 140, height: 20 },
    operatingExpenses: { page: 3, x: 150, y: 380, width: 200, height: 20 },
  };

  const handleFieldClick = (fieldName: string) => {
    setInitialFieldToView(fieldName);
    setShowEditFields(true);
  };

  const handleOpenSourceFromChat = (page: number, searchTerm: string) => {
    // Open Review Extract modal with the specific page and search term
    setCitationSearchTerm(searchTerm);
    setInitialFieldToView(null);
    setShowEditFields(true);
  };

  useEffect(() => {
    // Simulate fetching lease data and merging with Document Central data
    setTimeout(() => {
      // Find the lease
      const lease = MOCK_LEASES.find((l) => l.id === leaseId);
      
      // Find tenant data with brand info for the current lease
      const tenantData = lease ? ASSET_DOCUMENTS
        .find(asset => asset.assetId === lease.assetId)
        ?.tenants.find(t => t.tenantId === lease.tenantId)
        : null;

      if (lease) {
        setLease({
          ...lease,
          tenantName: tenantData?.tenantName || lease.tenantName,
        });
      } else {
        setLease(null);
      }
      
      setLoading(false);
    }, 500);
  }, [leaseId]);

  const handleDownload = () => {
    console.log('Download lease:', leaseId);
    // TODO: Implement download
  };

  const handleEdit = () => {
    setShowEditFields(true);
  };

  const handleSaveEdits = (updatedLease: Lease) => {
    setLease(updatedLease);
    setShowEditFields(false);
  };

  const handleApprove = () => {
    if (!lease) return;
    const confirmed = window.confirm(
      'Are you sure you want to mark this lease as completed? This action will finalize the lease record.'
    );
    if (confirmed) {
      setLease({ ...lease, status: 'Completed' });
    }
  };

  // Show Edit Fields page
  if (showEditFields && lease && !isBuildingDocument) {
    return (
      <LeaseReviewExtractPage
        lease={lease}
        onClose={() => {
          setShowEditFields(false);
          setInitialFieldToView(null);
        }}
        onSave={handleSaveEdits}
        initialFieldToView={initialFieldToView}
        searchTerm={searchTerm}
      />
    );
  }

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen bg-[#f4f5f6]">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#4837b9] mx-auto mb-4"></div>
          <p className="text-[#72777e] text-[14px] font-['Inter:Regular',sans-serif]">
            Loading lease details...
          </p>
        </div>
      </div>
    );
  }

  if (!lease) {
    return (
      <div className="flex items-center justify-center h-screen bg-[#f4f5f6]">
        <div className="text-center">
          <AlertTriangle className="h-12 w-12 text-red-500 mx-auto mb-4" />
          <p className="text-[#1d1e20] font-medium text-[16px] font-['Inter:Medium',sans-serif] mb-2">
            Failed to load lease
          </p>
          <p className="text-[#72777e] text-[14px] font-['Inter:Regular',sans-serif] mb-4">
            Lease not found
          </p>
          <button
            onClick={onBack}
            className="px-4 py-2 bg-white border border-[#d6d8db] rounded-[4px] text-[14px] font-['Inter:Medium',sans-serif] text-[#1d1e20] hover:bg-gray-50 transition-colors"
          >
            Back to Document Central
          </button>
        </div>
      </div>
    );
  }

  // Find tenant data with brand info for the current lease
  const tenantData = lease ? ASSET_DOCUMENTS
    .find(asset => asset.assetId === lease.assetId)
    ?.tenants.find(t => t.tenantId === lease.tenantId)
    : null;

  // Determine if AI icons should be shown based on status
  const showAIIndicators = lease.status === 'AI Abstracted' || lease.status === 'Pending human review';

  return (
    <div className="min-h-screen w-full bg-[#f4f5f6]">
      {/* Top Navigation */}
      <TopNavigation
        onNavigate={onNavigate || (() => {})}
        currentPage="document-central"
      />

      {/* Sidebar */}
      <div className="fixed left-0 top-[48px] w-[224px] h-[calc(100vh-48px)] bg-[#f9fafa] border-r border-[#d0d9e1] z-20">
        <div className="pt-[16px] pb-[16px]">
          {/* Asset Selector Dropdown */}
          <div className="ml-[16px] mb-[25px]">
            <AssetSelectorDropdown />
          </div>

          {/* Add Deal Button */}
          <div className="mb-[25px] ml-[16px]">
            <button className="relative w-[190px] h-[43px] bg-white border-2 border-[#4837b9] rounded-[38px] text-[#4837b9] font-medium font-['Inter:Medium',sans-serif] text-[14px] flex items-center justify-center hover:bg-[#4837b9] hover:text-white transition-colors group">
              <div className="absolute left-[23px] w-[32px] h-[32px] bg-[#ffb200] rounded-[28px] flex items-center justify-center">
                <Plus className="w-[23px] h-[23px] text-white" strokeWidth={2.5} />
              </div>
              <span className="ml-[16px]">Add deal</span>
            </button>
          </div>

          {/* TOOLS Section */}
          <div className="mb-[16px]">
            <p className="text-[#1d1e20] text-[12px] font-['Inter:Bold',sans-serif] font-bold leading-[28px] tracking-[0.5px] uppercase pl-[24px] mb-[8px]">
              TOOLS
            </p>
          </div>

          {/* Nav Items - All inactive */}
          <div className="space-y-0">
            <div onClick={() => onNavigate?.('deals')} className="h-[36px] flex items-center pl-[24px] text-[#373a3e] text-[14px] font-['Inter:Regular',sans-serif] leading-[20px] cursor-pointer hover:bg-[#ecedef] transition-colors">
              Requirements
            </div>
            <div onClick={() => onNavigate?.('deals')} className="h-[36px] flex items-center pl-[24px] text-[#373a3e] text-[14px] font-['Inter:Regular',sans-serif] leading-[20px] cursor-pointer hover:bg-[#ecedef] transition-colors">
              Deals
            </div>
            <div onClick={() => onNavigate?.('deals')} className="h-[36px] flex items-center pl-[24px] text-[#373a3e] text-[14px] font-['Inter:Regular',sans-serif] leading-[20px] cursor-pointer hover:bg-[#ecedef] transition-colors">
              Deal tasks
            </div>
            <div onClick={() => onNavigate?.('deals')} className="h-[36px] flex items-center pl-[24px] text-[#373a3e] text-[14px] font-['Inter:Regular',sans-serif] leading-[20px] cursor-pointer hover:bg-[#ecedef] transition-colors">
              Tenant coordination
            </div>
            <div onClick={() => onNavigate?.('leases')} className="h-[36px] flex items-center pl-[24px] text-[#373a3e] text-[14px] font-['Inter:Regular',sans-serif] leading-[20px] cursor-pointer hover:bg-[#ecedef] transition-colors">
              Leases
            </div>
            <div onClick={() => onNavigate?.('deals')} className="h-[36px] flex items-center pl-[24px] text-[#373a3e] text-[14px] font-['Inter:Regular',sans-serif] leading-[20px] cursor-pointer hover:bg-[#ecedef] transition-colors">
              Options
            </div>
            <div onClick={() => onNavigate?.('deals')} className="h-[36px] flex items-center pl-[24px] text-[#373a3e] text-[14px] font-['Inter:Regular',sans-serif] leading-[20px] cursor-pointer hover:bg-[#ecedef] transition-colors">
              Budgets
            </div>
            <div onClick={() => onNavigate?.('deals')} className="h-[36px] flex items-center pl-[24px] text-[#373a3e] text-[14px] font-['Inter:Regular',sans-serif] leading-[20px] cursor-pointer hover:bg-[#ecedef] transition-colors">
              Documents
            </div>
            <div onClick={() => onNavigate?.('abstraction-pipeline')} className="h-[36px] flex items-center pl-[24px] text-[#373a3e] text-[14px] font-['Inter:Regular',sans-serif] leading-[20px] cursor-pointer hover:bg-[#ecedef] transition-colors">
              Abstraction pipeline
            </div>
            <div onClick={() => onNavigate?.('deals')} className="h-[36px] flex items-center pl-[24px] text-[#373a3e] text-[14px] font-['Inter:Regular',sans-serif] leading-[20px] cursor-pointer hover:bg-[#ecedef] transition-colors">
              Appraisals
            </div>
            <div onClick={() => onNavigate?.('deals')} className="h-[36px] flex items-center pl-[24px] text-[#373a3e] text-[14px] font-['Inter:Regular',sans-serif] leading-[20px] cursor-pointer hover:bg-[#ecedef] transition-colors">
              Comps
            </div>
            <div onClick={() => onNavigate?.('deals')} className="h-[36px] flex items-center pl-[24px] text-[#373a3e] text-[14px] font-['Inter:Regular',sans-serif] leading-[20px] cursor-pointer hover:bg-[#ecedef] transition-colors">
              Tenants
            </div>
          </div>

          {/* INVENTORY Section */}
          <div className="mt-[24px] mb-[4px]">
            <p className="text-[#1d1e20] text-[12px] font-['Inter:Bold',sans-serif] font-bold leading-[28px] tracking-[0.5px] uppercase pl-[24px]">
              INVENTORY
            </p>
          </div>
          <div className="space-y-0">
            <div className="h-[36px] flex items-center gap-[8px] pl-[24px] text-[#373a3e] text-[14px] font-['Inter:Regular',sans-serif] leading-[20px] cursor-pointer hover:bg-[#ecedef] transition-colors">
              Assets
            </div>
            <div className="h-[36px] flex items-center gap-[8px] pl-[24px] text-[#373a3e] text-[14px] font-['Inter:Regular',sans-serif] leading-[20px] cursor-pointer hover:bg-[#ecedef] transition-colors">
              Spaces
            </div>
            <div className="h-[36px] flex items-center gap-[8px] pl-[24px] text-[#373a3e] text-[14px] font-['Inter:Regular',sans-serif] leading-[20px] cursor-pointer hover:bg-[#ecedef] transition-colors">
              Stacking plan
            </div>
            <div className="h-[36px] flex items-center gap-[8px] pl-[24px] text-[#373a3e] text-[14px] font-['Inter:Regular',sans-serif] leading-[20px] cursor-pointer hover:bg-[#ecedef] transition-colors">
              Site plan
            </div>
          </div>
        </div>
      </div>

      {/* Main Content Area - Restructured for Figma Match */}
      <div className="ml-[224px] pt-[48px] min-h-screen bg-[#f4f5f6] overflow-y-auto">
        <div className="px-[20px] py-[20px]">
          <div className="flex gap-[10px] items-start">
            
            {/* Content Panel - Flex to Fill Available Space */}
            <div className="flex-1 flex flex-col bg-white rounded-[6px] overflow-hidden">
              
              {/* Header Section - Now Inside Content Panel */}
              <div className="border-b border-[#ecedef]">
                <div className="px-[20px] pt-[20px] pb-px">
                  {/* Breadcrumb */}
                  <div className="flex items-center gap-2 py-[8px] text-[13px] font-['Inter:Regular',sans-serif]">
                    <span className="text-[#4837b9] cursor-default">
                      VTS Lease
                    </span>
                    <span className="text-[#99a1af]">{'>'}</span>
                    <span 
                      onClick={onNavigateToDocuments}
                      className="text-[#4837b9] hover:text-[#3a2b94] cursor-pointer transition-colors"
                    >
                      Documents
                    </span>
                    <span className="text-[#99a1af]">{'>'}</span>
                    <span 
                      onClick={onNavigateToDocuments}
                      className="text-[#4837b9] hover:text-[#3a2b94] cursor-pointer transition-colors"
                    >
                      {lease.buildingName}
                    </span>
                    <span className="text-[#99a1af]">{'>'}</span>
                    <span className="text-[#1d1e20]">
                      {lease.tenantName}
                    </span>
                  </div>

                  {/* Title and Status */}
                  <div className="flex items-start justify-between pb-4 mt-[12px]">
                    <div className="flex items-center gap-3">
                      {/* Tenant Brand Logo */}
                      {tenantData ? (
                        <div 
                          className="w-[48px] h-[48px] rounded-[8px] flex items-center justify-center flex-shrink-0 font-semibold text-[14px]"
                          style={{ backgroundColor: tenantData.brandColor, color: tenantData.textColor }}
                        >
                          {tenantData.logoText}
                        </div>
                      ) : (
                        <div className="w-[48px] h-[48px] bg-[#4837b9] rounded-[8px] flex items-center justify-center flex-shrink-0">
                          <FileText className="w-6 h-6 text-white" />
                        </div>
                      )}
                      <div className="max-w-[450px]">
                        {/* Display Tenant Name prominently */}
                        <div className="flex items-center gap-2 mb-1">
                          <h1 className="text-[20px] font-bold font-['Inter:Bold',sans-serif] text-[#1d1e20] leading-[30px] break-words">
                            {lease.tenantName}
                          </h1>
                          <div className={`px-2 py-0.5 rounded text-[10px] font-['Inter:Semi_Bold',sans-serif] uppercase ${
                            lease.status === 'Expert verified' 
                              ? 'bg-[#dcfce7] text-[#016630] border border-[#bbf7d0]' 
                              : lease.status === 'AI Abstracted'
                              ? 'bg-[#fef9c2] text-[#894b00] border border-[#fff085]'
                              : 'bg-gray-100 text-gray-800 border border-gray-200'
                          }`}>
                            {lease.status.replace('Expert verified', 'EXPERT VERIFIED').replace('AI Abstracted', 'AI ABSTRACTED').replace('Processing', 'PROCESSING')}
                          </div>
                        </div>
                        <div className="flex items-center gap-3 text-[11px] font-['Inter:Regular',sans-serif] text-[#72777e] leading-[16px]">
                          <span className="flex items-center gap-1.5">
                            <Building2 className="h-3 w-3" />
                            {lease.buildingName}
                          </span>
                          <span>•</span>
                          <span className="flex items-center gap-1.5">
                            <svg className="h-3 w-3" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M3 6h18M3 12h18M3 18h18" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                            </svg>
                            {lease.squareFootage}
                          </span>
                          <span>•</span>
                          <span className="flex items-center gap-1.5">
                            <Calendar className="h-3 w-3" />
                            Modified {new Date(lease.expirationDate).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>

                </div>
              </div>

              {/* Tabs Section with Action Buttons - Single Row */}
              <div className="border-b border-[#ecedef]">
                <div className="px-[20px]">
                  <div className="flex items-center justify-between">
                    {/* Tabs */}
                    <div className="flex gap-6">
                      <button
                      onClick={() => setActiveTab('summary')}
                      className={`relative py-2 text-[13px] font-['Inter:Medium',sans-serif] transition-colors ${
                        activeTab === 'summary'
                          ? 'text-[#4837b9]'
                          : 'text-[#72777e] hover:text-[#1d1e20]'
                      }`}
                    >
                      Summary
                      {activeTab === 'summary' && (
                        <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#4837b9]" />
                      )}
                    </button>
                    <button
                      onClick={() => setActiveTab('documents')}
                      className={`relative py-2 text-[13px] font-['Inter:Medium',sans-serif] transition-colors ${
                        activeTab === 'documents'
                          ? 'text-[#4837b9]'
                          : 'text-[#72777e] hover:text-[#1d1e20]'
                      }`}
                    >
                      Documents
                      {activeTab === 'documents' && (
                        <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#4837b9]" />
                      )}
                    </button>
                    <button
                      onClick={() => setActiveTab('timeline')}
                      className={`relative py-2 text-[13px] font-['Inter:Medium',sans-serif] transition-colors ${
                        activeTab === 'timeline'
                          ? 'text-[#4837b9]'
                          : 'text-[#72777e] hover:text-[#1d1e20]'
                      }`}
                    >
                      Timeline
                      {activeTab === 'timeline' && (
                        <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#4837b9]" />
                      )}
                    </button>
                    <button
                      onClick={() => setActiveTab('critical-dates')}
                      className={`relative py-2 text-[13px] font-['Inter:Medium',sans-serif] transition-colors ${
                        activeTab === 'critical-dates'
                          ? 'text-[#4837b9]'
                          : 'text-[#72777e] hover:text-[#1d1e20]'
                      }`}
                    >
                      Critical dates
                      {activeTab === 'critical-dates' && (
                        <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#4837b9]" />
                      )}
                    </button>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex items-center gap-2">
                    <button
                      onClick={handleDownload}
                      className="flex items-center gap-1.5 px-3 h-[32px] bg-white border border-[#d6d8db] rounded-[4px] text-[13px] font-['Inter:Medium',sans-serif] text-[#1d1e20] hover:bg-gray-50 transition-colors"
                    >
                      Download
                      <ChevronDown className="h-4 w-4" />
                    </button>

                    <button
                      onClick={handleUploadClick}
                      className="flex items-center gap-2 px-3 h-[32px] bg-[#4837b9] hover:bg-[#3a2b94] rounded-[4px] text-[13px] font-['Inter:Medium',sans-serif] text-white transition-colors"
                    >
                      Upload document(s)
                    </button>
                  </div>
                </div>
                </div>
              </div>

              {/* Content Area - Scrollable Within Panel */}
              <div className="flex-1 overflow-y-auto max-h-[calc(100vh-300px)]">
                {activeTab === 'summary' ? (
                <div className="px-[16px] py-3">
                  <div className="space-y-3">
                    {/* Alert for AI Abstracted status only */}
                    {lease.status === 'AI Abstracted' && (
                      <div className="bg-amber-50 border border-amber-200 rounded-[6px] p-3 flex items-start gap-2">
                        <AlertTriangle className="h-4 w-4 text-amber-600 flex-shrink-0 mt-0.5" />
                        <div>
                          <p className="font-['Inter:Medium',sans-serif] text-[13px] text-amber-800 leading-[18px]">
                            Document extraction complete.
                          </p>
                          <p className="text-[11px] font-['Inter:Regular',sans-serif] text-amber-700 leading-[16px] mt-0.5">
                            This lease abstract has been sent for expert verification. You'll be notified when the verified version is ready to review.
                          </p>
                        </div>
                      </div>
                    )}

                    {/* Quick Stats Card */}
                    <div className="bg-white rounded-[6px] border border-[#ecedef] shadow-sm p-3">
                      <h2 className="text-[12px] font-semibold font-['Inter:Semi_Bold',sans-serif] text-[#72777e] leading-[18px] tracking-[0.5px] uppercase mb-2">
                        Quick Stats
                      </h2>
                      <div className="grid grid-cols-5 gap-2">
                        {/* Lease Term */}
                        <div>
                          <p className="font-['Inter:Regular',sans-serif] text-[11px] text-[#72777e] leading-[16px] mb-0.5 uppercase">
                            LEASE TERM
                          </p>
                          <p className="font-['Inter:Semi_Bold',sans-serif] text-[15px] text-[#1d1e20] leading-[22px]">
                            {lease.leaseTerm || '10 years'}
                          </p>
                        </div>

                        {/* Commencement Date */}
                        <div>
                          <p className="font-['Inter:Regular',sans-serif] text-[11px] text-[#72777e] leading-[16px] mb-0.5 uppercase">
                            COMMENCEMENT DATE
                          </p>
                          <p className="font-['Inter:Semi_Bold',sans-serif] text-[15px] text-[#1d1e20] leading-[22px]">
                            01/01/2024
                          </p>
                        </div>

                        {/* Size */}
                        <div>
                          <p className="font-['Inter:Regular',sans-serif] text-[11px] text-[#72777e] leading-[16px] mb-0.5 uppercase">
                            SIZE
                          </p>
                          <p className="font-['Inter:Semi_Bold',sans-serif] text-[15px] text-[#1d1e20] leading-[22px]">
                            12500 sf
                          </p>
                        </div>

                        {/* Base Rent */}
                        <div>
                          <p className="font-['Inter:Regular',sans-serif] text-[11px] text-[#72777e] leading-[16px] mb-0.5 uppercase">
                            BASE RENT
                          </p>
                          <p className="font-['Inter:Semi_Bold',sans-serif] text-[15px] text-[#1d1e20] leading-[22px]">
                            $43 psf
                          </p>
                        </div>

                        {/* Annual Rent */}
                        <div>
                          <p className="font-['Inter:Regular',sans-serif] text-[11px] text-[#72777e] leading-[16px] mb-0.5 uppercase">
                            ANNUAL RENT
                          </p>
                          <p className="font-['Inter:Semi_Bold',sans-serif] text-[15px] text-[#1d1e20] leading-[22px]">
                            $537,500
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Extracted Lease Abstract Card */}
                    <div className="bg-white rounded-[6px] border border-[#ecedef] shadow-sm">
                      {/* Card Header */}
                      <div className="px-4 py-3 border-b border-[#ecedef]">
                        <h2 className="font-['Inter:Medium',sans-serif] text-[15px] text-[#0a0a0a] leading-[20px] tracking-[-0.3125px]">
                          Extracted Lease Abstract
                        </h2>
                      </div>

                      {/* Property Information Section */}
                      <div className="border border-[#ecedef]">
                        <button
                          onClick={() => toggleSection('property-information')}
                          className={`flex items-center justify-between px-4 py-2 w-full rounded-t-lg transition-colors ${
                            collapsedSections['property-information']
                              ? 'bg-[#f9fafb] hover:bg-[#f3f4f6]'
                              : 'bg-[#f9fafb]'
                          }`}
                        >
                          <div className="flex items-center gap-2">
                            <Building2 className="h-4 w-4 text-[#374151]" />
                            <h3 className="font-['Inter:Medium',sans-serif] text-[13px] text-[#374151]">
                              Property Information
                            </h3>
                          </div>
                          <div className="flex items-center gap-2">
                            {collapsedSections['property-information'] ? (
                              <ChevronRight className="w-4 h-4 text-[#9ca3af]" />
                            ) : (
                              <ChevronDown className="w-4 h-4 text-[#9ca3af]" />
                            )}
                          </div>
                        </button>
                        {!collapsedSections['property-information'] && (
                          <div className="px-4 py-3 bg-white border-b border-[#ecedef]">
                            <div className="grid grid-cols-2 gap-x-4 gap-y-3">
                              <FieldDisplay
                                label="Building Name"
                                value={lease.buildingName}
                                onClick={() => handleFieldClick('buildingName')}
                                aiExtracted={showAIIndicators}
                              />
                              <FieldDisplay
                                label="Suite / Space"
                                value={lease.suite}
                                onClick={() => handleFieldClick('suite')}
                                aiExtracted={showAIIndicators}
                              />
                              <FieldDisplay
                                label="Size"
                                value={showAIIndicators ? null : '12500 sf'}
                                onClick={() => handleFieldClick('squareFootage')}
                                aiExtracted={false}
                                history={[
                                  {
                                    documentType: 'Contraction Amendment',
                                    value: '12500 sf',
                                    documentName: 'ThirdAmendment-06246.pdf',
                                    date: '03/13/2025'
                                  },
                                  {
                                    documentType: 'Expansion Amendment',
                                    value: '14250 sf',
                                    documentName: 'SecondAmendment-07654.pdf',
                                    date: '07/24/2021'
                                  },
                                  {
                                    documentType: 'Main Lease Agreement',
                                    value: '10000 sf',
                                    documentName: 'LeaseAgreement-07-31-2012.pdf',
                                    date: '07/31/2012'
                                  }
                                ]}
                              />
                              <FieldDisplay
                                label="Floor"
                                value={lease.floor}
                                onClick={() => handleFieldClick('floor')}
                                aiExtracted={showAIIndicators}
                              />
                            </div>
                          </div>
                        )}
                      </div>

                      {/* Lease Terms Section */}
                      <div className="border border-[#ecedef]">
                        <button
                          onClick={() => toggleSection('lease-terms')}
                          className={`w-full transition-colors px-4 py-2 flex items-center justify-between ${
                            collapsedSections['lease-terms']
                              ? 'bg-white hover:bg-gray-50'
                              : 'bg-[#f9fafb]'
                          }`}
                        >
                          <div className="flex items-center gap-2">
                            <FileText className="h-4 w-4 text-[#374151]" />
                            <h3 className="font-['Inter:Medium',sans-serif] text-[13px] text-[#374151]">
                              Lease Terms
                            </h3>
                          </div>
                          <div className="flex items-center gap-2">
                            {collapsedSections['lease-terms'] ? (
                              <ChevronRight className="w-4 h-4 text-[#9ca3af]" />
                            ) : (
                              <ChevronDown className="w-4 h-4 text-[#9ca3af]" />
                            )}
                          </div>
                        </button>
                        {!collapsedSections['lease-terms'] && (
                          <div className="px-4 py-3 bg-white border-b border-[#ecedef]">
                            <div className="grid grid-cols-2 gap-x-4 gap-y-3">
                              <FieldDisplay
                                label="Lease Term"
                                value={lease.leaseTerm}
                                onClick={() => handleFieldClick('leaseTerm')}
                                aiExtracted={showAIIndicators}
                              />
                              <FieldDisplay
                                label="Tenant Name"
                                value={lease.tenantName}
                                onClick={() => handleFieldClick('tenantName')}
                                aiExtracted={false}
                              />
                              <FieldDisplay
                                label="Lease Type"
                                value={showAIIndicators ? null : lease.leaseType}
                                onClick={() => handleFieldClick('leaseType')}
                                aiExtracted={false}
                              />
                            </div>
                          </div>
                        )}
                      </div>

                      {/* Financial Terms Section */}
                      <div className="border border-[#ecedef]">
                        <button
                          onClick={() => toggleSection('financial-terms')}
                          className={`w-full transition-colors px-4 py-2 flex items-center justify-between ${
                            collapsedSections['financial-terms']
                              ? 'bg-white hover:bg-gray-50'
                              : 'bg-[#f9fafb]'
                          }`}
                        >
                          <div className="flex items-center gap-2">
                            <DollarSign className="h-4 w-4 text-[#374151]" />
                            <h3 className="font-['Inter:Medium',sans-serif] text-[13px] text-[#374151]">
                              Financial Terms
                            </h3>
                          </div>
                          <div className="flex items-center gap-2">
                            {collapsedSections['financial-terms'] ? (
                              <ChevronRight className="w-4 h-4 text-[#9ca3af]" />
                            ) : (
                              <ChevronDown className="w-4 h-4 text-[#9ca3af]" />
                            )}
                          </div>
                        </button>
                        {!collapsedSections['financial-terms'] && (
                          <div className="px-4 py-4 bg-white border-b border-[#ecedef]">
                            <div className="grid grid-cols-2 gap-x-4 gap-y-4">
                              <FieldDisplay
                                label="Base Rent"
                                value={lease.baseRent}
                                onClick={() => handleFieldClick('baseRent')}
                                aiExtracted={showAIIndicators}
                              />
                              <FieldDisplay
                                label="Security Deposit"
                                value={lease.securityDeposit}
                                onClick={() => handleFieldClick('securityDeposit')}
                                aiExtracted={showAIIndicators}
                              />
                              <FieldDisplay
                                label="Operating Expenses"
                                value={showAIIndicators ? null : lease.operatingExpenses}
                                onClick={() => handleFieldClick('operatingExpenses')}
                                aiExtracted={false}
                              />
                            </div>
                          </div>
                        )}
                      </div>

                      {/* Legal Provisions Section */}
                      <div className="border border-[#ecedef]">
                        <button
                          onClick={() => toggleSection('legal-provisions')}
                          className={`w-full transition-colors px-4 py-4 flex items-center justify-between ${
                            collapsedSections['legal-provisions']
                              ? 'bg-white hover:bg-gray-50'
                              : 'bg-[#f9fafb]'
                          }`}
                        >
                          <div className="flex items-center gap-3">
                            <Scale className={`h-5 w-5 ${
                              collapsedSections['legal-provisions'] ? 'text-[#374151]' : 'text-[#374151]'
                            }`} />
                            <h3 className={`font-['Inter:Medium',sans-serif] text-[15px] ${
                              collapsedSections['legal-provisions'] ? 'text-[#374151]' : 'text-[#374151]'
                            }`}>
                              Legal Provisions
                            </h3>
                          </div>
                          <div className="flex items-center gap-2">
                            {collapsedSections['legal-provisions'] ? (
                              <ChevronRight className="w-5 h-5 text-[#9ca3af]" />
                            ) : (
                              <ChevronDown className="w-5 h-5 text-[#9ca3af]" />
                            )}
                          </div>
                        </button>
                        {!collapsedSections['legal-provisions'] && (
                          <div className="px-4 py-4 bg-white">
                            <div className="grid grid-cols-2 gap-x-4 gap-y-4">
                              <FieldDisplay
                                label="Renewal Options"
                                value="Two 5-year options"
                              />
                              <FieldDisplay
                                label="Extension Notice Period"
                                value="180 days prior to expiration"
                              />
                              <FieldDisplay
                                label="Right of First Refusal"
                                value="Yes - Adjacent spaces"
                              />
                              <FieldDisplay
                                label="Expansion Rights"
                                value="Floor 12 - Suite 1200"
                              />
                              <FieldDisplay
                                label="Early Termination"
                                value="Allowed after year 5 with 12 months notice"
                                fullWidth
                              />
                              <FieldDisplay
                                label="Sublease Rights"
                                value="Permitted with landlord consent"
                                fullWidth
                              />
                            </div>
                          </div>
                        )}
                      </div>

                      {/* Premises Use Section */}
                      <div className="border border-[#ecedef]">
                        <button
                          onClick={() => toggleSection('premises-use')}
                          className={`w-full transition-colors px-4 py-4 flex items-center justify-between ${
                            collapsedSections['premises-use']
                              ? 'bg-white hover:bg-gray-50'
                              : 'bg-[#f9fafb]'
                          }`}
                        >
                          <div className="flex items-center gap-3">
                            <Building2 className={`h-5 w-5 ${
                              collapsedSections['premises-use'] ? 'text-[#374151]' : 'text-[#374151]'
                            }`} />
                            <h3 className={`font-['Inter:Medium',sans-serif] text-[15px] ${
                              collapsedSections['premises-use'] ? 'text-[#374151]' : 'text-[#374151]'
                            }`}>
                              Premises Use
                            </h3>
                          </div>
                          <div className="flex items-center gap-2">
                            {collapsedSections['premises-use'] ? (
                              <ChevronRight className="w-5 h-5 text-[#9ca3af]" />
                            ) : (
                              <ChevronDown className="w-5 h-5 text-[#9ca3af]" />
                            )}
                          </div>
                        </button>
                        {!collapsedSections['premises-use'] && (
                          <div className="px-4 py-4 bg-white">
                            <div className="grid grid-cols-2 gap-x-4 gap-y-4">
                              <FieldDisplay
                                label="Permitted Uses"
                                value="Office, Retail, and Light Manufacturing"
                              />
                              <FieldDisplay
                                label="Prohibited Uses"
                                value="Heavy Manufacturing, Storage of Hazardous Materials"
                              />
                              <FieldDisplay
                                label="Parking"
                                value="100 spaces, 50 reserved for tenants"
                              />
                              <FieldDisplay
                                label="Utilities"
                                value="Electricity, Water, and Sewerage"
                              />
                              <FieldDisplay
                                label="HVAC"
                                value="Centralized HVAC system"
                              />
                              <FieldDisplay
                                label="Security"
                                value="24/7 security guard presence"
                              />
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
                ) : activeTab === 'timeline' ? (
                  <TimelineTab lease={lease} />
                ) : activeTab === 'critical-dates' ? (
                  <div className="px-[16px] py-3">
                    <div className="bg-white rounded-[6px] border border-[#ecedef] shadow-sm p-4">
                      <h2 className="text-[12px] font-semibold font-['Inter:Semi_Bold',sans-serif] text-[#72777e] leading-[18px] tracking-[0.5px] uppercase mb-3">
                        Critical Dates
                      </h2>
                      <div className="grid grid-cols-2 gap-x-4 gap-y-4">
                        <FieldDisplay
                          label="Commencement Date"
                          value={lease.commencementDate}
                          onClick={() => handleFieldClick('commencementDate')}
                          aiExtracted={showAIIndicators}
                        />
                        <FieldDisplay
                          label="Expiration Date"
                          value={lease.expirationDate}
                          onClick={() => handleFieldClick('expirationDate')}
                          aiExtracted={showAIIndicators}
                        />
                        <FieldDisplay
                          label="Rent Commencement"
                          value={showAIIndicators ? null : lease.rentCommencementDate}
                          onClick={() => handleFieldClick('rentCommencementDate')}
                          aiExtracted={false}
                        />
                      </div>
                    </div>
                  </div>
                ) : (
                  <DocumentsTab 
                    fileName={lease.fileName}
                    uploadDate={lease.uploadDate}
                    onDownload={handleDownload}
                    initialPdfPage={pdfPage}
                    searchTerm={citationSearchTerm}
                  />
                )}
              </div>
            </div>

            {/* Chat Panel - 362px Fixed Width */}
            <div className="w-[362px] h-[calc(100vh-88px)] flex-shrink-0 sticky top-[68px]">
              <ChatPanel lease={lease} onOpenSource={handleOpenSourceFromChat} />
            </div>

          </div>
        </div>
      </div>

      {/* PDF Viewer Modal */}
      <PDFViewerModal
        isOpen={showPDFViewer}
        onClose={() => setShowPDFViewer(false)}
        fileName={lease.fileName}
        initialPage={pdfViewerPage}
        highlightedRegion={pdfViewerRegion}
      />
    </div>
  );
}