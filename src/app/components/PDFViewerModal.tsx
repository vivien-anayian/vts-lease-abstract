import { useState } from 'react';
import { X, ZoomIn, ZoomOut, ChevronLeft, ChevronRight, Search, ChevronDown, ChevronUp } from 'lucide-react';
import leasePage1 from '../../assets/8a568f83c60464c7f4278045d07945617c1db8db.png';
import leasePage2 from '../../assets/e3a6e024f04b77cff594e5f98330ece0d728c57d.png';

interface PDFViewerModalProps {
  isOpen: boolean;
  onClose: () => void;
  fileName: string;
  initialPage?: number;
  searchTerm?: string;
  highlightedRegion?: {
    page: number;
    x: number;
    y: number;
    width: number;
    height: number;
  };
}

export default function PDFViewerModal({
  isOpen,
  onClose,
  fileName,
  initialPage = 1,
  searchTerm,
  highlightedRegion,
}: PDFViewerModalProps) {
  const [currentPage, setCurrentPage] = useState(initialPage);
  const [zoomLevel, setZoomLevel] = useState(100);
  const [searchQuery, setSearchQuery] = useState(searchTerm || '');
  const [searchResults, setSearchResults] = useState<Array<{page: number; text: string}>>([]);
  const [currentSearchIndex, setCurrentSearchIndex] = useState(0);
  const totalPages = 2; // Updated to match the 2 lease agreement pages we have

  // Lease agreement page images
  const leasePages = [leasePage1, leasePage2];

  // Helper function to highlight search term in text
  const highlightText = (text: string, highlight?: string) => {
    if (!highlight) return text;
    
    const parts = text.split(new RegExp(`(${highlight})`, 'gi'));
    return (
      <>
        {parts.map((part, i) => 
          part.toLowerCase() === highlight.toLowerCase() ? (
            <mark key={i} className="bg-yellow-300 font-medium">{part}</mark>
          ) : (
            <span key={i}>{part}</span>
          )
        )}
      </>
    );
  };

  if (!isOpen) return null;

  const handleZoomIn = () => {
    setZoomLevel(Math.min(200, zoomLevel + 25));
  };

  const handleZoomOut = () => {
    setZoomLevel(Math.max(50, zoomLevel - 25));
  };

  const handlePrevPage = () => {
    setCurrentPage(Math.max(1, currentPage - 1));
  };

  const handleNextPage = () => {
    setCurrentPage(Math.min(totalPages, currentPage + 1));
  };

  // Mock search functionality
  const handleSearch = () => {
    if (!searchQuery.trim()) {
      setSearchResults([]);
      return;
    }
    
    // Mock search results
    const mockResults = [
      { page: 1, text: 'Suite 1101' },
      { page: 1, text: '12,500 square feet' },
      { page: 2, text: 'February 29, 2024' },
      { page: 3, text: '$1,187,500' },
    ].filter(result => 
      result.text.toLowerCase().includes(searchQuery.toLowerCase())
    );
    
    setSearchResults(mockResults);
    setCurrentSearchIndex(0);
    if (mockResults.length > 0) {
      setCurrentPage(mockResults[0].page);
    }
  };

  const handlePrevSearch = () => {
    if (searchResults.length === 0) return;
    const newIndex = currentSearchIndex === 0 ? searchResults.length - 1 : currentSearchIndex - 1;
    setCurrentSearchIndex(newIndex);
    setCurrentPage(searchResults[newIndex].page);
  };

  const handleNextSearch = () => {
    if (searchResults.length === 0) return;
    const newIndex = currentSearchIndex === searchResults.length - 1 ? 0 : currentSearchIndex + 1;
    setCurrentSearchIndex(newIndex);
    setCurrentPage(searchResults[newIndex].page);
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center">
      <div className="bg-white rounded-[8px] shadow-xl w-[90vw] h-[90vh] max-w-[1200px] flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-[#ecedef]">
          <div>
            <h2 className="text-[18px] font-semibold font-['Inter:Semi_Bold',sans-serif] text-[#1d1e20]">
              {fileName}
            </h2>
            <p className="text-[12px] font-['Inter:Regular',sans-serif] text-[#72777e] mt-1">
              Page {currentPage} of {totalPages}
            </p>
          </div>

          <button
            onClick={onClose}
            className="w-8 h-8 flex items-center justify-center rounded-[4px] hover:bg-[#f4f5f6] transition-colors"
          >
            <X className="w-5 h-5 text-[#72777e]" />
          </button>
        </div>

        {/* Toolbar */}
        <div className="flex items-center justify-between px-6 py-3 border-b border-[#ecedef] bg-[#f9fafa]">
          <div className="flex items-center gap-2">
            <button
              onClick={handlePrevPage}
              disabled={currentPage === 1}
              className="px-3 h-8 flex items-center gap-2 bg-white border border-[#d6d8db] rounded-[4px] text-[13px] font-['Inter:Medium',sans-serif] text-[#1d1e20] hover:bg-gray-50 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <ChevronLeft className="w-4 h-4" />
              Previous
            </button>
            <button
              onClick={handleNextPage}
              disabled={currentPage === totalPages}
              className="px-3 h-8 flex items-center gap-2 bg-white border border-[#d6d8db] rounded-[4px] text-[13px] font-['Inter:Medium',sans-serif] text-[#1d1e20] hover:bg-gray-50 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Next
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>

          {/* Search Bar */}
          <div className="flex items-center gap-2">
            <div className="flex items-center gap-2 bg-white border border-[#d6d8db] rounded-[4px] px-2">
              <Search className="w-4 h-4 text-[#72777e]" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
                placeholder="Search in document"
                className="px-2 py-1.5 text-[13px] font-['Inter:Regular',sans-serif] text-[#1d1e20] focus:outline-none w-[200px]"
              />
            </div>
            {searchResults.length > 0 && (
              <>
                <span className="text-[12px] font-['Inter:Regular',sans-serif] text-[#72777e]">
                  {currentSearchIndex + 1} of {searchResults.length}
                </span>
                <button
                  onClick={handlePrevSearch}
                  className="w-7 h-7 flex items-center justify-center bg-white border border-[#d6d8db] rounded-[4px] hover:bg-gray-50 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <ChevronUp className="w-3.5 h-3.5 text-[#72777e]" />
                </button>
                <button
                  onClick={handleNextSearch}
                  className="w-7 h-7 flex items-center justify-center bg-white border border-[#d6d8db] rounded-[4px] hover:bg-gray-50 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <ChevronDown className="w-3.5 h-3.5 text-[#72777e]" />
                </button>
              </>
            )}
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleZoomOut}
              disabled={zoomLevel <= 50}
              className="w-8 h-8 flex items-center justify-center bg-white border border-[#d6d8db] rounded-[4px] hover:bg-gray-50 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <ZoomOut className="w-4 h-4 text-[#72777e]" />
            </button>
            <span className="text-[13px] font-['Inter:Medium',sans-serif] text-[#1d1e20] min-w-[50px] text-center">
              {zoomLevel}%
            </span>
            <button
              onClick={handleZoomIn}
              disabled={zoomLevel >= 200}
              className="w-8 h-8 flex items-center justify-center bg-white border border-[#d6d8db] rounded-[4px] hover:bg-gray-50 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <ZoomIn className="w-4 h-4 text-[#72777e]" />
            </button>
          </div>
        </div>

        {/* Document Preview */}
        <div className="flex-1 overflow-auto bg-[#525659] p-8">
          <div
            className="bg-white mx-auto shadow-lg relative"
            style={{
              width: `${(8.5 * 96 * zoomLevel) / 100}px`,
              minHeight: `${(11 * 96 * zoomLevel) / 100}px`,
            }}
          >
            {/* Display actual lease agreement page image */}
            <img 
              src={leasePages[currentPage - 1]} 
              alt={`Lease Agreement Page ${currentPage}`}
              className="w-full h-auto"
              style={{
                transform: `scale(${zoomLevel / 100})`,
                transformOrigin: 'top left',
                width: '100%',
              }}
            />
            
            {/* Highlighted region overlay */}
            {highlightedRegion && highlightedRegion.page === currentPage && (
              <div
                className="absolute border-2 border-[#4837b9] bg-[#4837b9] bg-opacity-10 pointer-events-none"
                style={{
                  left: `${(highlightedRegion.x * zoomLevel) / 100}px`,
                  top: `${(highlightedRegion.y * zoomLevel) / 100}px`,
                  width: `${(highlightedRegion.width * zoomLevel) / 100}px`,
                  height: `${(highlightedRegion.height * zoomLevel) / 100}px`,
                }}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}