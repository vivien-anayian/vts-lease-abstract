import { Send, FileText, ExternalLink, Building2, MapPin, X, Maximize2, Mic } from 'lucide-react';
import { useChat } from '../context/ChatContext';
import { type Lease } from '../data/leaseData';
import svgPathsLogo from '@/imports/svg-l29pyqr89j';
import { imgVector } from '@/imports/svg-yb50e';

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

interface ChatPanelProps {
  lease?: Lease;
  onSendMessage?: (message: string) => void;
  onOpenSource?: (page: number, searchTerm: string) => void;
  // For building/asset documents
  documentName?: string;
  assetName?: string;
}

// Market Icon Component (gradient purple icon)
function MarketIcon() {
  return (
    <svg className="w-[32px] h-[32px]" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
      <g clipPath="url(#clip0_8110_218)">
        <path d="M32 16C32 24.8366 24.8366 32 16 32C7.16344 32 0 24.8366 0 16C0 7.16344 7.16344 0 16 0C24.8366 0 32 7.16344 32 16Z" fill="url(#paint0_linear_8110_218)" />
        <path d="M26 10.6667C26 13.2439 23.8995 15.3333 21.3333 15.3333C18.7572 15.3333 16.6667 13.2439 16.6667 10.6667C16.6667 8.09948 18.7572 6 21.3333 6C23.8995 6 26 8.09948 26 10.6667Z" fill="url(#paint1_linear_8110_218)" />
        <path d="M24.1111 10.6667C24.1111 12.2004 22.8671 13.4444 21.3333 13.4444C19.7996 13.4444 18.5556 12.2004 18.5556 10.6667C18.5556 9.13289 19.7996 7.88889 21.3333 7.88889C22.8671 7.88889 24.1111 9.13289 24.1111 10.6667Z" fill="white" fillOpacity="0.51" />
      </g>
      <defs>
        <linearGradient id="paint0_linear_8110_218" x1="0" x2="32" y1="0" y2="32" gradientUnits="userSpaceOnUse">
          <stop stopColor="#AD46FF" />
          <stop offset="1" stopColor="#155DFC" />
        </linearGradient>
        <linearGradient id="paint1_linear_8110_218" x1="26.0196" x2="13.3626" y1="8.20644" y2="9.13462" gradientUnits="userSpaceOnUse">
          <stop stopColor="#8C82FF" />
          <stop offset="1" stopColor="#673FFF" />
        </linearGradient>
        <clipPath id="clip0_8110_218">
          <rect fill="white" height="32" width="32" />
        </clipPath>
      </defs>
    </svg>
  );
}

// Portfolio Icon Component (gradient purple icon)
function PortfolioIcon() {
  return (
    <svg className="w-[32px] h-[32px]" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
      <g clipPath="url(#clip0_8110_187)">
        <path d="M32 16C32 24.8366 24.8366 32 16 32C7.16344 32 0 24.8366 0 16C0 7.16344 7.16344 0 16 0C24.8366 0 32 7.16344 32 16Z" fill="url(#paint0_linear_8110_187)" />
        <g opacity="0.8">
          <path d="M8 14C8 11.7909 9.79086 10 12 10H20C22.2091 10 24 11.7909 24 14V22C24 24.2091 22.2091 26 20 26H12C9.79086 26 8 24.2091 8 22V14Z" fill="url(#paint1_linear_8110_187)" />
          <g>
            <path d="M12 16C12 15.4477 12.4477 15 13 15H15C15.5523 15 16 15.4477 16 16V22C16 22.5523 15.5523 23 15 23H13C12.4477 23 12 22.5523 12 22V16Z" fill="white" fillOpacity="0.51" />
            <path d="M17 18C17 17.4477 17.4477 17 18 17H19C19.5523 17 20 17.4477 20 18V22C20 22.5523 19.5523 23 19 23H18C17.4477 23 17 22.5523 17 22V18Z" fill="white" fillOpacity="0.51" />
            <path d="M12 12C12 11.4477 12.4477 11 13 11H19C19.5523 11 20 11.4477 20 12V13C20 13.5523 19.5523 14 19 14H13C12.4477 14 12 13.5523 12 13V12Z" fill="white" fillOpacity="0.51" />
          </g>
        </g>
      </g>
      <defs>
        <linearGradient id="paint0_linear_8110_187" x1="0" x2="32" y1="0" y2="32" gradientUnits="userSpaceOnUse">
          <stop stopColor="#AD46FF" />
          <stop offset="1" stopColor="#155DFC" />
        </linearGradient>
        <linearGradient id="paint1_linear_8110_187" x1="23.5" x2="6.9063" y1="18.7308" y2="22.1786" gradientUnits="userSpaceOnUse">
          <stop stopColor="#8C82FF" />
          <stop offset="1" stopColor="#673FFF" />
        </linearGradient>
        <clipPath id="clip0_8110_187">
          <rect fill="white" height="32" width="32" />
        </clipPath>
      </defs>
    </svg>
  );
}

// Sparkles Icon Component
function SparklesIcon() {
  return (
    <svg className="w-[29px] h-[30px]" fill="none" preserveAspectRatio="none" viewBox="0 0 29 30">
      <g clipPath="url(#clip0_5306_54358)">
        <foreignObject x="9.69857" y="-4.80143" width="24.1026" height="24.1088">
          <div style={{ backdropFilter: 'blur(2.4px)', clipPath: 'url(#bgblur_1_5306_54358_clip_path)', height: '100%', width: '100%' }}></div>
        </foreignObject>
        <path data-figma-bg-blur-radius="4.80143" d="M20.2127 11.1983L21.4322 14.2899C21.5009 14.4658 21.6999 14.5516 21.8759 14.4815C21.9632 14.4472 22.0334 14.3771 22.0677 14.2899L23.2872 11.1983C23.7252 10.0915 24.6012 9.21633 25.7091 8.77876L28.7836 7.56042C28.9597 7.49178 29.0456 7.29301 28.9754 7.11713C28.9411 7.0299 28.8709 6.95983 28.7836 6.92551L25.7091 5.70717C24.6012 5.27102 23.7238 4.39445 23.2872 3.28764L22.0677 0.216047C21.999 0.0401599 21.8001 -0.0456389 21.624 0.0244299C21.5367 0.0587494 21.4665 0.128818 21.4322 0.216047L20.2127 3.28764C19.7761 4.39444 18.8987 5.27102 17.7908 5.70716L14.7163 6.9255C14.5402 6.99414 14.4543 7.19291 14.5245 7.3688C14.5588 7.45603 14.629 7.52609 14.7163 7.56041L17.7908 8.77876C18.8987 9.21633 19.7747 10.0915 20.2127 11.1983Z" fill="url(#paint0_radial_5306_54358)" />
        <foreignObject x="-4.80143" y="3.35824" width="30.4464" height="30.4552">
          <div style={{ backdropFilter: 'blur(2.4px)', clipPath: 'url(#bgblur_2_5306_54358_clip_path)', height: '100%', width: '100%' }}></div>
        </foreignObject>
        <path data-figma-bg-blur-radius="4.80143" d="M16.0908 16.3751L20.5331 18.1288C20.7859 18.2277 20.9091 18.5138 20.8085 18.767C20.7591 18.8925 20.6585 18.9934 20.5331 19.0428L16.0908 20.7966C14.5004 21.4265 13.2429 22.6862 12.6142 24.2794L10.8636 28.701C10.7649 28.9541 10.4793 29.0777 10.2266 28.9768C10.1013 28.9274 10.0006 28.8265 9.95125 28.701L8.20062 24.2794C7.57393 22.6862 6.31437 21.4244 4.72401 20.7966L0.310438 19.0428C0.0577056 18.944 -0.0655785 18.6579 0.0351033 18.4047C0.0844168 18.2791 0.185099 18.1782 0.310438 18.1288L4.72401 16.3751C6.31437 15.7472 7.57392 14.4854 8.20061 12.8922L9.95125 8.47066C10.0499 8.21747 10.3355 8.09397 10.5882 8.19483C10.7136 8.24423 10.8142 8.34509 10.8635 8.47066L12.6142 12.8922C13.2429 14.4854 14.5004 15.7452 16.0908 16.3751Z" fill="url(#paint1_radial_5306_54358)" />
      </g>
      <defs>
        <clipPath id="bgblur_1_5306_54358_clip_path" transform="translate(-9.69857 4.80143)">
          <path d="M20.2127 11.1983L21.4322 14.2899C21.5009 14.4658 21.6999 14.5516 21.8759 14.4815C21.9632 14.4472 22.0334 14.3771 22.0677 14.2899L23.2872 11.1983C23.7252 10.0915 24.6012 9.21633 25.7091 8.77876L28.7836 7.56042C28.9597 7.49178 29.0456 7.29301 28.9754 7.11713C28.9411 7.0299 28.8709 6.95983 28.7836 6.92551L25.7091 5.70717C24.6012 5.27102 23.7238 4.39445 23.2872 3.28764L22.0677 0.216047C21.999 0.0401599 21.8001 -0.0456389 21.624 0.0244299C21.5367 0.0587494 21.4665 0.128818 21.4322 0.216047L20.2127 3.28764C19.7761 4.39444 18.8987 5.27102 17.7908 5.70716L14.7163 6.9255C14.5402 6.99414 14.4543 7.19291 14.5245 7.3688C14.5588 7.45603 14.629 7.52609 14.7163 7.56041L17.7908 8.77876C18.8987 9.21633 19.7747 10.0915 20.2127 11.1983Z" />
        </clipPath>
        <clipPath id="bgblur_2_5306_54358_clip_path" transform="translate(4.80143 -3.35824)">
          <path d="M16.0908 16.3751L20.5331 18.1288C20.7859 18.2277 20.9091 18.5138 20.8085 18.767C20.7591 18.8925 20.6585 18.9934 20.5331 19.0428L16.0908 20.7966C14.5004 21.4265 13.2429 22.6862 12.6142 24.2794L10.8636 28.701C10.7649 28.9541 10.4793 29.0777 10.2266 28.9768C10.1013 28.9274 10.0006 28.8265 9.95125 28.701L8.20062 24.2794C7.57393 22.6862 6.31437 21.4244 4.72401 20.7966L0.310438 19.0428C0.0577056 18.944 -0.0655785 18.6579 0.0351033 18.4047C0.0844168 18.2791 0.185099 18.1782 0.310438 18.1288L4.72401 16.3751C6.31437 15.7472 7.57392 14.4854 8.20061 12.8922L9.95125 8.47066C10.0499 8.21747 10.3355 8.09397 10.5882 8.19483C10.7136 8.24423 10.8142 8.34509 10.8635 8.47066L12.6142 12.8922C13.2429 14.4854 14.5004 15.7452 16.0908 16.3751Z" />
        </clipPath>
        <radialGradient id="paint0_radial_5306_54358" cx="0" cy="0" r="1" gradientTransform="matrix(5.02401 21.3697 90.1284 -39.8778 19.7404 2.63979)" gradientUnits="userSpaceOnUse">
          <stop stopColor="#8822AA" />
          <stop offset="1" stopColor="#181818" />
        </radialGradient>
        <radialGradient id="paint1_radial_5306_54358" cx="0" cy="0" r="1" gradientTransform="matrix(30.7061 7.22504 -57.3004 129.614 3.79311 15.6959)" gradientUnits="userSpaceOnUse">
          <stop stopColor="#8822AA" />
          <stop offset="1" stopColor="#181818" />
        </radialGradient>
        <clipPath id="clip0_5306_54358">
          <rect width="29" height="30" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
}

// VTS Logo Component
function VTSLogo() {
  return (
    <svg width="66.5" height="22.4" viewBox="0 0 95 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g clipPath="url(#clip0_10339_4025)">
        <mask id="mask0_10339_4025" style={{ maskType: 'luminance' }} maskUnits="userSpaceOnUse" x="0" y="0" width="95" height="32">
          <path d="M94.1136 0H0V32H94.1136V0Z" fill="white" />
        </mask>
        <g mask="url(#mask0_10339_4025)">
          <path d="M61.8264 2.51053L52.5645 29.9344H59.1152L65.4026 9.77164L69.7657 23.7677H65.624L63.6998 29.9344H71.69H76.1908H78.543L69.3558 2.51053H61.8264Z" fill="#1B1B1B" />
          <path d="M94.1134 2.51053H87.6375V29.9344H94.1134V2.51053Z" fill="#1B1B1B" />
          <path d="M22.0668 7.216L22.0847 7.20397L29.3926 12.0808L34.7972 8.48782L22.0847 -1.52588e-05L22.0668 0.0120114L9.35132 8.50285L14.7589 12.0958L22.0668 7.216Z" fill="#1B1B1B" />
          <path d="M22.0638 22.7273L-0.000488281 8.8245V18.0971L22.0638 31.9999L22.0668 31.9969L44.1371 18.0941V8.81848L22.0668 22.7243L22.0638 22.7273Z" fill="#1B1B1B" />
        </g>
      </g>
      <defs>
        <clipPath id="clip0_10339_4025">
          <rect width="94.5547" height="32" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
}

export default function ChatPanel({ lease, onSendMessage, onOpenSource, documentName, assetName }: ChatPanelProps) {
  const { chatMessages, chatInput, setChatInput, addMessage, clearChat } = useChat();

  // Only 2 example questions as per Figma design
  const exampleQuestions = [
    "What is my average letter of credit for technology tenants bet 20,000-30,00 sf",
    "Does Amazon at 100 Park Avenue have a termination right?"
  ];

  const handleSendMessage = () => {
    if (!chatInput.trim()) return;

    const userMessage = chatInput.trim();
    addMessage({ role: 'user', content: userMessage });
    setChatInput('');

    // Call custom handler if provided, otherwise use default AI response
    if (onSendMessage) {
      onSendMessage(userMessage);
    } else {
      // Default AI response simulation with sources
      setTimeout(() => {
        let response = '';
        let sources: DocumentSource[] | undefined;
        const lowerMessage = userMessage.toLowerCase();
        
        if (lease) {
          if (lowerMessage.includes('confidence') || lowerMessage.includes('low')) {
            response = `I see you're asking about confidence scores. Looking at this lease for ${lease.tenantLegalName}, the extraction confidence is generally high (above 90%) for most fields. The Base Rent field has a 93% confidence score, which indicates high reliability. Fields with lower confidence typically need human review.`;
          } else if (lowerMessage.includes('amazon') && lowerMessage.includes('termination') && lowerMessage.includes('100 park')) {
            // Special handling for Amazon termination question
            response = `Yes, Amazon has a one-time termination option to terminate this lease with a notice end date of 12/31/2027. This termination right is outlined in Section 3 of the lease agreement.`;
            sources = [{
              fileName: 'Amazon_100Park_Lease.pdf',
              tenant: 'Amazon, Inc.',
              asset: '100 Park Avenue',
              page: 1,
              excerpt: 'Tenant shall have a one-time Termination Option to terminate this Lease with a notice end date of 12/31/2027.',
              keyword: 'termination right'
            }];
          } else if (lowerMessage.includes('amazon') && (lowerMessage.includes('current rent') || lowerMessage.includes('rent at amazon') || (lowerMessage.includes('rent') && lowerMessage.includes('amazon')))) {
            // Special handling for Amazon current rent question
            response = `Amazon's current Rent at 100 Park Avenue is $80.26 psf and $11,490,021.60 per year.`;
            sources = [{
              fileName: 'Amazon_100Park_Lease.pdf',
              tenant: 'Amazon, Inc.',
              asset: '100 Park Avenue',
              page: 1,
              excerpt: '... Section 4 - Rent table for period 1/1/2026 - 12/31/2026: Basic Rent (Per RSF) $80.26, Basic Rent (Annual) $11,490,021.60...',
              keyword: 'Section 4',
              highlightRegion: {
                x: 88,
                y: 615,
                width: 510,
                height: 18
              }
            }];
          } else if (lowerMessage.includes('rent') || lowerMessage.includes('price')) {
            response = `The annual base rent for this lease is ${lease.baseRent} ($${lease.startingRentPSF}/sq ft). The lease includes a ${lease.rentSchedule?.toLowerCase()}. You can find this information on Page 3 of the lease agreement.`;
            sources = [{
              fileName: 'Metro_Financial_Lease.pdf',
              tenant: lease.tenantLegalName || 'Metro Financial Corp',
              asset: lease.buildingName || 'Central Plaza Tower',
              page: 3,
              excerpt: `Base annual rent shall be ${lease.baseRent} payable in equal monthly installments of $181,250.00. Rent shall be subject to annual escalations as outlined in Schedule A.`,
              keyword: 'base rent'
            }];
          } else if (lowerMessage.includes('date') || lowerMessage.includes('term')) {
            response = `This lease commences on ${lease.commencementDate} and expires on ${lease.expirationDate}, giving it a total term of ${lease.leaseTerm}. The rent commencement date is ${lease.rentCommencementDate}.`;
            sources = [{
              fileName: 'Metro_Financial_Lease.pdf',
              tenant: lease.tenantLegalName || 'Metro Financial Corp',
              asset: lease.buildingName || 'Central Plaza Tower',
              page: 2,
              excerpt: `The term of this Lease shall commence on ${lease.commencementDate} (the "Commencement Date") and shall expire on ${lease.expirationDate} (the "Expiration Date"), for a total term of ${lease.leaseTerm}.`,
              keyword: 'lease term'
            }];
          } else if (lowerMessage.includes('amendment') || lowerMessage.includes('modification')) {
            response = `This lease has 2 amendments on file:\n\n**Amendment #1** (03/15/2024): Rent increase of 3% effective 01/01/2024. Extension of lease term by 2 years.\n\n**Amendment #2** (06/20/2024): Additional parking spaces granted (10 spaces). Updated maintenance responsibilities.\n\nThese amendments modify the original lease terms and are legally binding.`;
            sources = [
              {
                fileName: 'Lease_Amendment_1.pdf',
                tenant: lease.tenantLegalName || 'Metro Financial Corp',
                asset: lease.buildingName || 'Central Plaza Tower',
                page: 1,
                excerpt: 'The parties hereby agree to increase the Base Rent by three percent (3%) effective January 1, 2024, and to extend the Lease Term by an additional two (2) years.',
                keyword: 'rent increase'
              },
              {
                fileName: 'Lease_Amendment_2.pdf',
                tenant: lease.tenantLegalName || 'Metro Financial Corp',
                asset: lease.buildingName || 'Central Plaza Tower',
                page: 1,
                excerpt: 'Landlord grants Tenant ten (10) additional parking spaces in the underground parking facility. Tenant shall be responsible for HVAC maintenance in the Premises.',
                keyword: 'parking spaces'
              }
            ];
          } else if (lowerMessage.includes('parking') || lowerMessage.includes('spaces')) {
            response = `According to Amendment #2, this lease includes 10 additional parking spaces in the underground parking facility. These were granted on 06/20/2024 as part of the lease modification.`;
            sources = [{
              fileName: 'Lease_Amendment_2.pdf',
              tenant: lease.tenantLegalName || 'Metro Financial Corp',
              asset: lease.buildingName || 'Central Plaza Tower',
              page: 1,
              excerpt: 'Landlord hereby grants to Tenant ten (10) additional parking spaces in the underground parking facility located at the Property, for a total of fifteen (15) parking spaces.',
              keyword: 'parking spaces'
            }];
          } else if (lowerMessage.includes('security') || lowerMessage.includes('deposit')) {
            response = `The security deposit for this lease is ${lease.securityDeposit}. This deposit is held by the landlord and will be returned at the end of the lease term, subject to lease conditions and property condition.`;
            sources = [{
              fileName: 'Metro_Financial_Lease.pdf',
              tenant: lease.tenantLegalName || 'Metro Financial Corp',
              asset: lease.buildingName || 'Central Plaza Tower',
              page: 3,
              excerpt: `Tenant shall deposit with Landlord the sum of ${lease.securityDeposit} as security for the faithful performance and observance by Tenant of the terms and conditions of this Lease.`,
              keyword: 'security deposit'
            }];
          } else if (lowerMessage.includes('where') || lowerMessage.includes('find')) {
            response = `I can help you locate information in the lease. What specific clause or information are you looking for? I can direct you to the exact page and section.`;
          } else {
            response = `I'm here to help you review this lease for ${lease.tenantLegalName} at ${lease.buildingName}. I can answer questions about extracted fields, explain confidence scores, locate specific clauses, or help clarify any lease terms. What would you like to know?`;
          }
        } else if (documentName) {
          // Building document responses
          if (lowerMessage.includes('type') || lowerMessage.includes('what is')) {
            response = `This is a building document titled "${documentName}". It contains important information related to ${assetName || 'the property'}. I can help you find specific information or explain sections of the document.`;
          } else if (lowerMessage.includes('summarize') || lowerMessage.includes('summary')) {
            response = `This building document provides essential information about ${assetName || 'the property'}. It includes details about property management, maintenance schedules, and operational procedures. Would you like me to focus on any specific section?`;
          } else if (lowerMessage.includes('date') || lowerMessage.includes('deadline')) {
            response = `I can help you identify important dates and deadlines in this document. Could you specify which type of dates you're looking for? (e.g., maintenance schedules, compliance deadlines, renewal dates)`;
          } else if (lowerMessage.includes('maintenance') || lowerMessage.includes('requirement')) {
            response = `The document outlines various maintenance requirements for the building. These include regular inspections, scheduled maintenance activities, and compliance procedures. Would you like details on a specific type of maintenance?`;
          } else {
            response = `I'm here to help you understand this building document for ${assetName || 'the property'}. I can answer questions about its contents, explain specific sections, or help you locate particular information. What would you like to know?`;
          }
        } else {
          response = `I'm here to help! I can answer questions about leases, explain document details, and assist with your lease management needs. What would you like to know?`;
        }

        addMessage({ role: 'assistant', content: response, sources });
      }, 800);
    }
  };

  const handleSourceClick = (source: DocumentSource) => {
    if (onOpenSource) {
      onOpenSource(source.page, source.keyword);
    }
  };

  return (
    <div className="w-full h-full flex flex-col bg-white rounded-[16px] border border-[#f3f4f6] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)] overflow-hidden">
      {/* Header - 80px */}
      <div className="h-[80px] flex-shrink-0 flex items-center justify-between px-[24px] border-b border-[#f3f4f6] bg-white">
        {/* VTS AI Logo */}
        <VTSLogo />

        {/* Control Buttons */}
        <div className="flex items-center gap-[12px]">
          {/* Restart Button */}
          <button 
            onClick={() => clearChat()}
            className="w-[36px] h-[36px] rounded-[4px] flex items-center justify-center hover:bg-[#f4f5f6] transition-colors"
            title="Restart conversation"
          >
            <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M10.5 18C10.5 19.4834 10.9399 20.9334 11.764 22.1668C12.5881 23.4001 13.7594 24.3614 15.1299 24.9291C16.5003 25.4968 18.0083 25.6453 19.4632 25.3559C20.918 25.0665 22.2544 24.3522 23.3033 23.3033C24.3522 22.2544 25.0665 20.918 25.3559 19.4632C25.6453 18.0083 25.4968 16.5003 24.9291 15.1299C24.3614 13.7594 23.4001 12.5881 22.1668 11.764C20.9334 10.9399 19.4834 10.5 18 10.5C15.9033 10.5079 13.8908 11.326 12.3833 12.7833L10.5 14.6667" stroke="#6A7282" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M10.5 10.5V14.6667H14.6667" stroke="#6A7282" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
          
          {/* Maximize Button */}
          <button className="w-[36px] h-[36px] rounded-[4px] flex items-center justify-center hover:bg-[#f4f5f6] transition-colors">
            <Maximize2 className="w-4 h-4 text-[#101828]" strokeWidth={1.33} />
          </button>
          
          {/* Close Button */}
          <button className="w-[36px] h-[36px] rounded-[4px] flex items-center justify-center hover:bg-[#f4f5f6] transition-colors">
            <X className="w-4 h-4 text-[#101828]" strokeWidth={1.33} />
          </button>
        </div>
      </div>

      {/* WHEN NO MESSAGES: Empty State */}
      {chatMessages.length === 0 && (
        <div className="flex-1 flex flex-col min-h-0">
          {/* Centered Content Area */}
          <div className="flex-1 flex flex-col items-center justify-center px-[24px]">
            {/* Sparkles Icon */}
            <div className="mb-[44px]">
              <SparklesIcon />
            </div>

            {/* Description Text */}
            <p className="font-['Inter:Bold',sans-serif] font-bold text-[18px] leading-[22px] text-[#4a5565] text-center mb-[16px] w-[311px]">
              Explore your leases with a question.
            </p>
          </div>

          {/* Example Questions - Above input */}
          <div className="flex-shrink-0 px-[24px] pb-[16px] space-y-[16px]">
            {exampleQuestions.map((question, idx) => (
              <button 
                key={idx}
                onClick={() => {
                  setChatInput(question);
                  setTimeout(handleSendMessage, 100);
                }}
                className="w-full text-left bg-[#f9fafb] hover:bg-[#f3f4f6] rounded-[16px] border border-[#f3f4f6] transition-colors group"
                style={{ 
                  minHeight: idx === 0 ? '84px' : '70px',
                  padding: '18px'
                }}
              >
                <div className="flex items-start gap-[12px]">
                  {/* Icon */}
                  <div className="flex-shrink-0 mt-[2px]">
                    {idx === 0 ? <MarketIcon /> : <PortfolioIcon />}
                  </div>
                  {/* Text */}
                  <p className="font-['Inter:Medium',sans-serif] font-medium text-[14px] leading-[20px] text-[#364153] tracking-[-0.15px] flex-1">
                    {question}
                  </p>
                </div>
              </button>
            ))}
          </div>

          {/* Purple Gradient Input Area - 90px */}
          <div 
            className="h-[90px] flex-shrink-0 px-[24px] pt-[16px] pb-0"
            style={{ backgroundImage: "linear-gradient(167.258deg, rgb(152, 16, 250) 0%, rgb(67, 45, 215) 100%)"}}
          >
            <div className="bg-[rgba(255,255,255,0.1)] rounded-[14px] border border-[rgba(255,255,255,0.2)] h-[58px]">
              <div className="flex items-center gap-[12px] px-[17px] h-full">
                {/* Mic Button */}
                <button className="bg-white rounded-[10px] w-[28px] h-[28px] flex items-center justify-center hover:bg-[#f0f0f0] transition-colors flex-shrink-0">
                  <Mic className="w-[20px] h-[20px] text-[#101828]" strokeWidth={1.67} />
                </button>

                {/* Input */}
                <input
                  type="text"
                  value={chatInput}
                  onChange={(e) => setChatInput(e.target.value)}
                  onKeyDown={(e) => e.key === 'Enter' && handleSendMessage()}
                  placeholder="AI Analyst ✨"
                  className="flex-1 bg-transparent border-none outline-none text-[14px] text-white placeholder:text-white placeholder:opacity-80 font-['Inter:Regular',sans-serif] tracking-[-0.1504px]"
                />

                {/* Send Button */}
                <button 
                  onClick={handleSendMessage}
                  className="bg-white rounded-[10px] w-[32px] h-[32px] flex items-center justify-center hover:bg-[#f0f0f0] transition-colors flex-shrink-0"
                >
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8 2.66667V13.3333" stroke="#9810FA" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M13.3333 8H2.66667" stroke="#9810FA" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* WHEN MESSAGES EXIST: Chat Interface */}
      {chatMessages.length > 0 && (
        <>
          {/* Chat Messages - Scrollable */}
          <div className="flex-1 overflow-y-auto px-6 pb-4">
            {chatMessages.map((message, idx) => (
              <div key={idx} className="space-y-3 mb-4">
                <div className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <div className={`max-w-[85%] px-4 py-3 rounded-[16px] ${
                    message.role === 'user' 
                      ? 'bg-[#673FFF] text-white' 
                      : 'bg-[#f3f4f6] text-[#1d1e20]'
                  }`}>
                    <p className="text-[14px] font-['Inter:Regular',sans-serif] leading-[1.5] whitespace-pre-wrap">
                      {message.content}
                    </p>
                  </div>
                </div>
                
                {/* Source Citations */}
                {message.role === 'assistant' && message.sources && message.sources.length > 0 && (
                  <div className="space-y-2 ml-0 max-w-[85%]">
                    <div className="text-[12px] text-[#1d1e20] font-['Inter:SemiBold',sans-serif] mb-1.5">Sources:</div>
                    {message.sources.map((source, sidx) => (
                      <div 
                        key={sidx}
                        className="bg-white border border-[#e5e7eb] rounded-[8px] p-3 hover:border-[#8C82FF] hover:shadow-sm transition-all cursor-pointer group"
                        onClick={() => handleSourceClick(source)}
                      >
                        {/* Header - File and Page */}
                        <div className="flex items-start justify-between mb-2">
                          <div className="flex items-center gap-2 flex-1">
                            <FileText className="w-4 h-4 text-[#4837b9] flex-shrink-0" />
                            <div className="flex-1 min-w-0">
                              <div className="text-[13px] font-['Inter:Medium',sans-serif] text-[#1d1e20] truncate group-hover:text-[#8C82FF] transition-colors">
                                {source.fileName}
                              </div>
                              <div className="text-[11px] text-[#4a5565] font-['Inter:Medium',sans-serif] mt-0.5">Page {source.page}</div>
                            </div>
                          </div>
                          <ExternalLink className="w-3.5 h-3.5 text-[#4a5565] group-hover:text-[#8C82FF] transition-colors flex-shrink-0 ml-2" />
                        </div>

                        {/* Tenant & Asset Info */}
                        {(source.tenant || source.asset) && (
                          <div className="flex items-center gap-4 mb-2 text-[11px]">
                            {source.tenant && source.tenant !== 'N/A' && (
                              <div className="flex items-center gap-1.5 text-[#4a5565] font-['Inter:Medium',sans-serif]">
                                <Building2 className="w-3 h-3" />
                                <span>{source.tenant}</span>
                              </div>
                            )}
                            {source.asset && source.asset !== 'N/A' && (
                              <div className="flex items-center gap-1.5 text-[#4a5565] font-['Inter:Medium',sans-serif]">
                                <MapPin className="w-3 h-3" />
                                <span>{source.asset}</span>
                              </div>
                            )}
                          </div>
                        )}

                        {/* Document Excerpt */}
                        <div className="bg-[#f9fafb] rounded-[6px] p-2 border border-[#ecedef]">
                          <div className="text-[10px] text-[#4a5565] font-['Inter:SemiBold',sans-serif] mb-1">Extract:</div>
                          <div className="text-[11px] text-[#1d1e20] font-['Inter:Regular',sans-serif] leading-[1.5]">
                            "...{source.excerpt}..."
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Purple Gradient Input Area - 90px */}
          <div 
            className="h-[90px] flex-shrink-0 px-[24px] pt-[16px] pb-0"
            style={{ backgroundImage: "linear-gradient(167.258deg, rgb(152, 16, 250) 0%, rgb(67, 45, 215) 100%)"}}
          >
            <div className="bg-[rgba(255,255,255,0.1)] rounded-[14px] border border-[rgba(255,255,255,0.2)] h-[58px]">
              <div className="flex items-center gap-[12px] px-[17px] h-full">
                {/* Mic Button */}
                <button className="bg-white rounded-[10px] w-[28px] h-[28px] flex items-center justify-center hover:bg-[#f0f0f0] transition-colors flex-shrink-0">
                  <Mic className="w-[20px] h-[20px] text-[#101828]" strokeWidth={1.67} />
                </button>

                {/* Input */}
                <input
                  type="text"
                  value={chatInput}
                  onChange={(e) => setChatInput(e.target.value)}
                  onKeyDown={(e) => e.key === 'Enter' && handleSendMessage()}
                  placeholder="AI Analyst ✨"
                  className="flex-1 bg-transparent border-none outline-none text-[14px] text-white placeholder:text-white placeholder:opacity-80 font-['Inter:Regular',sans-serif] tracking-[-0.1504px]"
                />

                {/* Send Button */}
                <button 
                  onClick={handleSendMessage}
                  className="bg-white rounded-[10px] w-[32px] h-[32px] flex items-center justify-center hover:bg-[#f0f0f0] transition-colors flex-shrink-0"
                >
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8 2.66667V13.3333" stroke="#9810FA" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M13.3333 8H2.66667" stroke="#9810FA" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}