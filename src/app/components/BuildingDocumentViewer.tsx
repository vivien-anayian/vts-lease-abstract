import { Download, MessageSquare } from 'lucide-react';
import { useState } from 'react';
import TopNavigation from './TopNavigation';
import ChatPanel from './ChatPanel';
import { DocumentsTab } from './LeaseAbstractPageDocumentsTab';

interface BuildingDocumentViewerProps {
  documentName: string;
  fileName: string;
  onBack: () => void;
  onNavigate?: (page: 'deals' | 'leases' | 'insights' | 'document-central') => void;
}

export default function BuildingDocumentViewer({ documentName, fileName, onBack, onNavigate }: BuildingDocumentViewerProps) {
  const [isChatOpen, setIsChatOpen] = useState(true);

  const handleDownload = () => {
    console.log('Download document:', fileName);
  };

  return (
    <div className="min-h-screen w-full bg-[#f4f5f6]">
      {/* Top Navigation */}
      <TopNavigation
        onNavigate={onNavigate || (() => {})}
        currentPage="document-central"
      />

      {/* Main Content Area */}
      <div className="pt-[48px] h-screen overflow-hidden flex flex-col">
        {/* Breadcrumb - Fixed */}
        <div className="bg-white border-b border-[#ecedef] px-[20px] py-[8px] flex-shrink-0">
          <div className="flex items-center gap-2">
            <button
              onClick={onBack}
              className="font-['Inter:Regular',sans-serif] text-[13px] text-[#4837b9] hover:text-[#3a2b94] transition-colors"
            >
              Building Documents
            </button>
            <span className="text-[#99a1af] text-[13px]">{'>'}</span>
            <span className="font-['Inter:Regular',sans-serif] text-[13px] text-[#1d1e20]">
              {documentName}
            </span>
          </div>
        </div>

        {/* Header - Fixed */}
        <div className="bg-white border-b border-[#ecedef] flex-shrink-0">
          <div className="px-[20px] pt-[20px] pb-3">
            {/* Title */}
            <div className="flex items-start justify-between pb-4">
              <div>
                <h1 className="text-[20px] font-bold font-['Inter:Bold',sans-serif] text-[#1d1e20] leading-[30px] mb-1">
                  {documentName}
                </h1>
                <p className="text-[13px] font-['Inter:Regular',sans-serif] text-[#72777e]">
                  Reference Document
                </p>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex items-center justify-end pb-2">
              <div className="flex items-center gap-2">
                <button
                  onClick={() => setIsChatOpen(!isChatOpen)}
                  className={`flex items-center gap-2 px-3 h-[32px] rounded-[4px] text-[13px] font-['Inter:Medium',sans-serif] transition-colors ${
                    isChatOpen 
                      ? 'bg-[#4837b9] text-white hover:bg-[#3c2d99]'
                      : 'bg-white border border-[#d6d8db] text-[#1d1e20] hover:bg-gray-50'
                  }`}
                >
                  <MessageSquare className="h-4 w-4" />
                  Chat
                </button>

                <button
                  onClick={handleDownload}
                  className="flex items-center gap-2 px-3 h-[32px] bg-white border border-[#d6d8db] rounded-[4px] text-[13px] font-['Inter:Medium',sans-serif] text-[#1d1e20] hover:bg-gray-50 transition-colors"
                >
                  <Download className="h-4 w-4" />
                  Download
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Main Content Area with Chat */}
        <div className="flex-1 overflow-hidden flex">
          {/* Document Preview Area */}
          <div className="flex-1 overflow-y-auto">
            <DocumentsTab 
              fileName={fileName}
              uploadDate={new Date().toISOString()}
              onDownload={handleDownload}
            />
          </div>

          {/* Fixed Chat Panel on Right */}
          {isChatOpen && (
            <div className="w-[400px] flex-shrink-0 h-full overflow-hidden">
              <ChatPanel 
                documentName={documentName}
                assetName="VTS Tower"
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
