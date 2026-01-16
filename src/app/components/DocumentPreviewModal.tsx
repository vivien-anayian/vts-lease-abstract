import { X, MessageSquare, Search, ZoomOut, ZoomIn, Download } from 'lucide-react';
import { useState } from 'react';
import { DocumentsTab } from './LeaseAbstractPageDocumentsTab';
import ChatPanel from './ChatPanel';

interface DocumentPreviewModalProps {
  isOpen: boolean;
  onClose: () => void;
  documentName: string;
  fileName: string;
  assetName?: string;
}

export default function DocumentPreviewModal({ isOpen, onClose, documentName, fileName, assetName = 'VTS Tower' }: DocumentPreviewModalProps) {
  const [isChatOpen, setIsChatOpen] = useState(true); // Chat open by default
  const [searchQuery, setSearchQuery] = useState('');

  if (!isOpen) return null;

  const handleDownload = () => {
    console.log('Download document:', fileName);
  };

  const handleSearch = () => {
    console.log('Search:', searchQuery);
  };

  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg shadow-2xl w-full max-w-[95vw] h-[90vh] flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-[#ecedef]">
          <div>
            <h2 className="text-[16px] font-semibold text-[#1d1e20] font-['Inter:SemiBold',sans-serif]">
              Document preview
            </h2>
            <p className="text-[12px] text-[#72777e] font-['Inter:Regular',sans-serif] mt-0.5">
              {fileName}
            </p>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={() => setIsChatOpen(!isChatOpen)}
              className="flex items-center gap-2 px-4 py-2 bg-[#4837b9] text-white rounded-md hover:bg-[#3c2d99] transition-colors text-[13px] font-['Inter:Medium',sans-serif]"
            >
              <MessageSquare className="w-4 h-4" />
              Chat about this document
            </button>
            <button
              onClick={onClose}
              className="px-4 py-2 border border-[#d6d8db] rounded-md hover:bg-gray-50 transition-colors text-[13px] font-['Inter:Medium',sans-serif] text-[#1d1e20]"
            >
              Close
            </button>
          </div>
        </div>

        {/* Search Bar */}
        <div className="px-6 py-3 border-b border-[#ecedef]">
          <div className="flex items-center gap-2">
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#72777e]" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter') {
                    handleSearch();
                  }
                }}
                placeholder="Search in document..."
                className="w-full pl-9 pr-4 py-2 border border-[#d6d8db] rounded-md text-[13px] focus:outline-none focus:ring-2 focus:ring-[#4837b9] focus:border-transparent"
              />
            </div>
            <button
              onClick={handleSearch}
              className="px-4 py-2 bg-[#4837b9] text-white rounded-md hover:bg-[#3c2d99] transition-colors text-[13px] font-['Inter:Medium',sans-serif]"
            >
              Search
            </button>
          </div>
        </div>

        {/* Document Controls */}
        <div className="px-6 py-3 border-b border-[#ecedef] flex items-center justify-between">
          <div className="flex items-center gap-4">
            {/* Document Selector Dropdown */}
            <select className="px-3 py-1.5 border border-[#d6d8db] rounded text-[13px] font-['Inter:Regular',sans-serif] bg-white focus:outline-none focus:ring-2 focus:ring-[#4837b9]">
              <option>{documentName}</option>
            </select>

            {/* Page Navigation */}
            <div className="flex items-center gap-2">
              <button className="p-1 hover:bg-gray-100 rounded">
                <svg className="w-4 h-4" fill="none" viewBox="0 0 16 16">
                  <path d="M10 12L6 8L10 4" stroke="#1d1e20" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
              <span className="text-[13px] text-[#1d1e20] font-['Inter:Regular',sans-serif]">
                Page 1 of 15
              </span>
              <button className="p-1 hover:bg-gray-100 rounded">
                <svg className="w-4 h-4" fill="none" viewBox="0 0 16 16">
                  <path d="M6 4L10 8L6 12" stroke="#1d1e20" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
            </div>
          </div>

          {/* Zoom & Download Controls */}
          <div className="flex items-center gap-2">
            <button className="p-2 hover:bg-gray-100 rounded transition-colors">
              <ZoomOut className="w-4 h-4 text-[#1d1e20]" />
            </button>
            <span className="text-[13px] text-[#1d1e20] font-['Inter:Regular',sans-serif] min-w-[50px] text-center">
              100%
            </span>
            <button className="p-2 hover:bg-gray-100 rounded transition-colors">
              <ZoomIn className="w-4 h-4 text-[#1d1e20]" />
            </button>
            <div className="w-px h-6 bg-[#ecedef] mx-2" />
            <button onClick={handleDownload} className="p-2 hover:bg-gray-100 rounded transition-colors">
              <Download className="w-4 h-4 text-[#1d1e20]" />
            </button>
          </div>
        </div>

        {/* Main Content Area */}
        <div className="flex-1 overflow-hidden flex">
          {/* Document Preview */}
          <div className={`${isChatOpen ? 'flex-1' : 'w-full'} overflow-y-auto bg-[#f4f5f6] p-6`}>
            <DocumentsTab 
              fileName={fileName}
              uploadDate={new Date().toISOString()}
              onDownload={handleDownload}
            />
          </div>

          {/* Chat Panel */}
          {isChatOpen && (
            <div className="w-[400px] flex-shrink-0 h-full overflow-hidden">
              <ChatPanel 
                documentName={documentName}
                assetName={assetName}
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}