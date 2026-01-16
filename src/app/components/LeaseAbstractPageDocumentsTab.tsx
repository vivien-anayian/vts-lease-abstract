import { FileText, Calendar, Clock, Download, ChevronDown, ChevronRight, Folder, Search } from 'lucide-react';
import { useState } from 'react';

interface DocumentsTabProps {
  fileName: string;
  uploadDate: string;
  onDownload: () => void;
  initialPdfPage?: number;
  searchTerm?: string;
}

interface Document {
  id: string;
  name: string;
  fileName: string;
  size: string;
  uploadDate: string;
  extractionTime: string;
  type: string;
  status: 'Expert verified' | 'AI Abstracted' | 'Processing';
  summary?: string;
  iconColor: string;
}

// Organize documents into folder categories
interface DocumentFolder {
  name: string;
  documents: Document[];
  count: number;
}

const LEASE_DOCUMENTS: Document[] = [
  {
    id: 'main-lease',
    name: 'Lane_Bryant_Master_Lease',
    fileName: 'Lane_Bryant_Master_Lease_Agreement_2024.pdf',
    size: '2.4 MB',
    uploadDate: '1/17/2024',
    extractionTime: '9s',
    type: 'Leases',
    status: 'Expert verified',
    iconColor: '#DC2626',
  },
  {
    id: 'lease-addendum',
    name: 'Lane_Bryant_Lease_Adden',
    fileName: 'Lane_Bryant_Lease_Addendum_A.pdf',
    size: '1.2 MB',
    uploadDate: '1/20/2024',
    extractionTime: '5s',
    type: 'Leases',
    status: 'Expert verified',
    iconColor: '#DC2626',
  },
  {
    id: 'insurance-cert',
    name: 'Liability_Insurance_Certificate.pdf',
    fileName: 'Lane_Bryant_Liability_Insurance_Certificate.pdf',
    size: '780 KB',
    uploadDate: '1/25/2024',
    extractionTime: '3s',
    type: 'Insurance',
    status: 'Expert verified',
    iconColor: '#673FFF',
  },
  {
    id: 'property-insurance',
    name: 'Property_Insurance_2024.pdf',
    fileName: 'Lane_Bryant_Property_Insurance_2024.pdf',
    size: '650 KB',
    uploadDate: '1/25/2024',
    extractionTime: '3s',
    type: 'Insurance',
    status: 'Expert verified',
    iconColor: '#673FFF',
  },
  {
    id: 'commencement-letter',
    name: 'Commencement_Letter_Signed.pdf',
    fileName: 'Lane_Bryant_Commencement_Letter_Signed.pdf',
    size: '456 KB',
    uploadDate: '2/1/2024',
    extractionTime: '2s',
    type: 'Amendments',
    status: 'Expert verified',
    iconColor: '#00A63E',
  },
  {
    id: 'extension-amendment',
    name: 'Extension_Amendment_2025.pdf',
    fileName: 'Lane_Bryant_Extension_Amendment_2025.pdf',
    size: '1.1 MB',
    uploadDate: '3/10/2024',
    extractionTime: '4s',
    type: 'Other',
    status: 'AI Abstracted',
    iconColor: '#FE9A00',
  },
];

export function DocumentsTab({ fileName, uploadDate, onDownload, initialPdfPage, searchTerm }: DocumentsTabProps) {
  const [searchQuery, setSearchQuery] = useState('');
  
  // Filter documents based on search query
  const filteredDocuments = LEASE_DOCUMENTS.filter(doc => {
    if (!searchQuery) return true;
    const query = searchQuery.toLowerCase();
    return (
      doc.name.toLowerCase().includes(query) ||
      doc.fileName.toLowerCase().includes(query) ||
      doc.type.toLowerCase().includes(query) ||
      doc.summary?.toLowerCase().includes(query)
    );
  });
  
  // Group documents by folder type - match Figma structure
  const folders: DocumentFolder[] = [
    {
      name: 'Leases',
      documents: filteredDocuments.filter(doc => doc.type === 'Leases'),
      count: filteredDocuments.filter(doc => doc.type === 'Leases').length,
    },
    {
      name: 'Amendments',
      documents: filteredDocuments.filter(doc => doc.type === 'Amendments'),
      count: filteredDocuments.filter(doc => doc.type === 'Amendments').length,
    },
    {
      name: 'Insurance',
      documents: filteredDocuments.filter(doc => doc.type === 'Insurance'),
      count: filteredDocuments.filter(doc => doc.type === 'Insurance').length,
    },
    {
      name: 'Other',
      documents: filteredDocuments.filter(doc => doc.type === 'Other'),
      count: filteredDocuments.filter(doc => doc.type === 'Other').length,
    },
  ];

  const [expandedFolders, setExpandedFolders] = useState<Record<string, boolean>>({
    'Leases': true, // Expanded by default
    'Amendments': false,
    'Insurance': false,
    'Other': false,
  });

  const toggleFolder = (folderName: string) => {
    setExpandedFolders(prev => ({
      ...prev,
      [folderName]: !prev[folderName],
    }));
  };

  const getStatusBadge = (status: string) => {
    if (status === 'Expert verified') {
      return (
        <div className="inline-flex items-center gap-1.5 px-[11px] py-[5px] bg-[#f3f4f6] rounded-[6px] border border-[#e5e7eb]">
          <span className="text-[11px] font-['Helvetica:Regular',sans-serif] text-[#6b7280] tracking-[0.275px] uppercase">
            EXPERT VERIFIED
          </span>
        </div>
      );
    } else if (status === 'AI Abstracted') {
      return (
        <div className="inline-flex items-center gap-1.5 px-[11px] py-[5px] bg-[#fef9c2] rounded-[6px] border border-[#fff085]">
          <span className="text-[11px] font-['Helvetica:Regular',sans-serif] text-[#894b00] tracking-[0.275px] uppercase">
            AI ABSTRACTED
          </span>
        </div>
      );
    } else {
      return (
        <div className="inline-flex items-center gap-1.5 px-[11px] py-[5px] bg-gray-100 rounded-[6px] border border-gray-200">
          <span className="text-[11px] font-['Helvetica:Regular',sans-serif] text-gray-800 tracking-[0.275px] uppercase">
            PROCESSING
          </span>
        </div>
      );
    }
  };

  return (
    <div className="px-[16px] py-[20px]">
      <div className="bg-white rounded-[6px] border border-[#ecedef]">
        {/* Header Section */}
        <div className="px-[20px] py-[20px] border-b border-[#ecedef]">
          <h2 className="font-['Inter:Medium',sans-serif] text-[15px] text-[#0a0a0a] leading-[20px] tracking-[-0.3125px] mb-1">
            Lease Documents
          </h2>
          <p className="text-[13px] text-[#72777e] font-['Inter:Regular',sans-serif] mb-4">
            All documents related to this lease agreement
          </p>
          
          {/* Search Bar */}
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#72777e]" />
            <input
              type="text"
              placeholder="Search documents by name, type, or content..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full h-[36px] pl-10 pr-4 bg-white border border-[#d0d9e1] rounded-[6px] text-[13px] font-['Inter:Regular',sans-serif] text-[#1d1e20] placeholder:text-[#bbbfc4] focus:outline-none focus:ring-2 focus:ring-[#4837b9] focus:border-transparent transition-all"
            />
          </div>
        </div>

        {/* Folder Structure */}
        <div className="divide-y divide-[#ecedef]">
          {folders.map((folder) => (
            <div key={folder.name}>
              {/* Folder Header */}
              <button
                onClick={() => toggleFolder(folder.name)}
                className="w-full px-[20px] py-[14px] flex items-center gap-3 hover:bg-[#f9fafa] transition-colors text-left"
              >
                {expandedFolders[folder.name] ? (
                  <ChevronDown className="w-4 h-4 text-[#72777e] flex-shrink-0" />
                ) : (
                  <ChevronRight className="w-4 h-4 text-[#72777e] flex-shrink-0" />
                )}
                <Folder className="w-[18px] h-[18px] text-[#fbbf24] flex-shrink-0" />
                <div className="flex-1 flex items-center justify-between">
                  <span className="font-['Inter:Medium',sans-serif] text-[13px] text-[#0a0a0a]">
                    {folder.name}
                  </span>
                  <span className="text-[11px] font-['Inter:Regular',sans-serif] text-[#72777e]">
                    {folder.count}
                  </span>
                </div>
              </button>

              {/* Documents Table */}
              {expandedFolders[folder.name] && folder.documents.length > 0 && (
                <div className="bg-white">
                  {/* Table Header */}
                  <div className="grid grid-cols-[2fr_1fr_1fr_auto] gap-4 px-[20px] py-[10px] bg-[#fafbfc] border-y border-[#ecedef]">
                    <div className="text-[10px] font-['Inter:SemiBold',sans-serif] text-[#72777e] uppercase tracking-[0.5px]">
                      Document Name
                    </div>
                    <div className="text-[10px] font-['Inter:SemiBold',sans-serif] text-[#72777e] uppercase tracking-[0.5px]">
                      Status
                    </div>
                    <div className="text-[10px] font-['Inter:SemiBold',sans-serif] text-[#72777e] uppercase tracking-[0.5px]">
                      Modified
                    </div>
                    <div className="text-[10px] font-['Inter:SemiBold',sans-serif] text-[#72777e] uppercase tracking-[0.5px]">
                      Actions
                    </div>
                  </div>

                  {/* Document Rows */}
                  {folder.documents.map((doc) => {
                    const uploadDate = new Date(doc.uploadDate);
                    const formattedDate = uploadDate.toLocaleDateString('en-US', { 
                      month: 'short', 
                      day: 'numeric', 
                      year: 'numeric' 
                    });
                    
                    return (
                      <div
                        key={doc.id}
                        className="grid grid-cols-[2fr_1fr_1fr_auto] gap-4 px-[20px] py-[14px] hover:bg-[#f9fafa] transition-colors cursor-pointer border-b border-[#f4f5f6] last:border-b-0 items-center"
                      >
                        {/* Document Name with Icon */}
                        <div className="flex items-center gap-[10px] min-w-0">
                          <div 
                            className="w-[20px] h-[20px] rounded-[4px] flex items-center justify-center flex-shrink-0"
                            style={{ backgroundColor: doc.iconColor }}
                          >
                            <FileText className="w-[12px] h-[12px] text-white" />
                          </div>
                          <div className="min-w-0 flex-1">
                            <p className="text-[13px] font-['Inter:Medium',sans-serif] text-[#1d1e20] truncate">
                              {doc.name}
                            </p>
                          </div>
                        </div>

                        {/* Status */}
                        <div>
                          {getStatusBadge(doc.status)}
                        </div>

                        {/* Modified Date */}
                        <div className="text-[13px] font-['Inter:Regular',sans-serif] text-[#72777e]">
                          {formattedDate}
                        </div>

                        {/* Actions */}
                        <div className="flex items-center justify-end">
                          <button 
                            onClick={(e) => {
                              e.stopPropagation();
                              onDownload();
                            }}
                            className="p-[6px] hover:bg-[#e5e7eb] rounded-[6px] transition-colors"
                            title="Download"
                          >
                            <Download className="w-4 h-4 text-[#72777e]" />
                          </button>
                        </div>
                      </div>
                    );
                  })}
                </div>
              )}

              {/* Empty State for Folder */}
              {expandedFolders[folder.name] && folder.documents.length === 0 && (
                <div className="px-[20px] py-[20px] text-center bg-[#fafbfc]">
                  <p className="text-[13px] text-[#72777e] font-['Inter:Regular',sans-serif]">
                    No documents in this folder
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Global Empty State */}
        {filteredDocuments.length === 0 && searchQuery && (
          <div className="px-6 py-12 text-center">
            <FileText className="w-12 h-12 text-[#d0d9e1] mx-auto mb-4" />
            <p className="text-[14px] text-[#72777e] font-['Inter:Regular',sans-serif]">
              No documents found matching "{searchQuery}"
            </p>
          </div>
        )}
      </div>
    </div>
  );
}