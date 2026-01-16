import { useState } from 'react';
import { Search, FileText, Building2, Upload, ArrowLeft } from 'lucide-react';
import { MOCK_ASSETS } from '../data/searchData';
import type { Asset } from '../data/searchData';
import { useBuildingDocuments } from '../context/BuildingDocumentsContext';
import type { BuildingDocument } from '../data/buildingDocuments';
import TopNavigation from './TopNavigation';
import AssetSelectorDropdown from './AssetSelectorDropdown';

interface BuildingDocumentsPageProps {
  assetId: string;
  onBack: () => void;
  onNavigate?: (page: 'deals' | 'leases' | 'insights' | 'document-central' | 'vts-ai' | 'abstraction-pipeline' | 'building-documents') => void;
  onUploadDocument?: (assetId?: string, tenantId?: string) => void;
  onOpenDocument?: (fileName: string, documentName: string) => void;
  currentPage?: 'deals' | 'building-documents';
}

export default function BuildingDocumentsPage({ assetId, onBack, onNavigate, onUploadDocument, onOpenDocument, currentPage = 'building-documents' }: BuildingDocumentsPageProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeTab, setActiveTab] = useState<'tenants' | 'building'>('building');
  
  const { getBuildingDocumentsByAsset } = useBuildingDocuments();
  const asset = MOCK_ASSETS.find(a => a.id === assetId);
  const buildingDocuments = getBuildingDocumentsByAsset(assetId);
  
  // Mock tenant count (in real app, would count actual tenants for this asset)
  const tenantCount = 2;
  
  // Filter documents based on search
  const filteredDocuments = buildingDocuments.filter(doc =>
    doc.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    doc.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
    doc.fileName.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleUploadClick = () => {
    if (onUploadDocument) {
      // Pass asset ID and 'asset-level' as tenant ID to indicate building-level document
      onUploadDocument(assetId, 'asset-level');
    }
  };

  const handleDocumentClick = (doc: BuildingDocument) => {
    if (onOpenDocument) {
      onOpenDocument(doc.fileName, doc.name);
    }
  };

  if (!asset) {
    return (
      <div className="flex items-center justify-center h-screen">
        <p className="text-gray-500">Asset not found</p>
      </div>
    );
  }

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
                <svg className="w-[23px] h-[23px]" fill="none" viewBox="0 0 23 23">
                  <path d="M11.5 5.75v11.5M5.75 11.5h11.5" stroke="white" strokeWidth="2.5" strokeLinecap="round" />
                </svg>
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

          {/* Nav Items */}
          <div className="space-y-0">
            <div onClick={() => onNavigate?.('deals')} className="h-[36px] flex items-center pl-[24px] text-[#373a3e] text-[14px] font-['Inter:Regular',sans-serif] leading-[20px] cursor-pointer hover:bg-[#ecedef] transition-colors">
              Requirements
            </div>
            <div 
              onClick={() => onNavigate?.('deals')} 
              className={`h-[36px] flex items-center pl-[24px] text-[14px] font-['Inter:Regular',sans-serif] leading-[20px] cursor-pointer hover:bg-[#ecedef] transition-colors ${
                currentPage === 'deals' ? 'bg-[#ecedef] text-[#1d1e20] font-medium' : 'text-[#373a3e]'
              }`}
            >
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
            <div 
              className={`h-[36px] flex items-center pl-[24px] text-[14px] font-['Inter:Regular',sans-serif] leading-[20px] cursor-pointer hover:bg-[#ecedef] transition-colors ${
                currentPage === 'building-documents' ? 'bg-[#ecedef] text-[#1d1e20] font-medium' : 'text-[#373a3e]'
              }`}
            >
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

      {/* Main Content */}
      <div className="ml-[224px] pt-[48px]">
        {/* Breadcrumb */}
        <div className="bg-white border-b border-[#ecedef] px-[20px] py-[8px]">
          <div className="flex items-center gap-2">
            <button
              onClick={onBack}
              className="font-['Inter:Regular',sans-serif] text-[13px] text-[#4837b9] hover:text-[#3a2b94] transition-colors"
            >
              Documents
            </button>
            <span className="text-[#99a1af] text-[13px]">{'>'}</span>
            <span className="font-['Inter:Regular',sans-serif] text-[13px] text-[#1d1e20]">
              {asset.name}
            </span>
          </div>
        </div>

        {/* Header */}
        <div className="bg-white border-b border-[#ecedef] px-[22px] py-6">
          <div className="flex items-start justify-between mb-6">
            <div className="flex items-center gap-4">
              {/* Building Image */}
              <div className="w-[80px] h-[80px] rounded-[8px] overflow-hidden bg-gray-200 flex-shrink-0">
                {asset.image ? (
                  <img src={asset.image} alt={asset.name} className="w-full h-full object-cover" />
                ) : (
                  <div className="w-full h-full flex items-center justify-center bg-[#4837b9]">
                    <Building2 className="w-10 h-10 text-white" />
                  </div>
                )}
              </div>

              <div>
                <h1 className="text-[24px] font-['Inter:Bold',sans-serif] text-[#1d1e20] leading-[32px] mb-1">
                  {asset.name}
                </h1>
                <div className="flex items-center gap-6 text-[13px] text-[#72777e]">
                  <div>
                    <span className="font-['Inter:Semi_Bold',sans-serif] text-[#1d1e20]">ADDRESS</span>
                    <p className="font-['Inter:Regular',sans-serif]">{asset.address}</p>
                  </div>
                  <div>
                    <span className="font-['Inter:Semi_Bold',sans-serif] text-[#1d1e20]">OCCUPANCY</span>
                    <p className="font-['Inter:Regular',sans-serif]">98%</p>
                  </div>
                  <div>
                    <span className="font-['Inter:Semi_Bold',sans-serif] text-[#1d1e20]">LEASES</span>
                    <p className="font-['Inter:Regular',sans-serif]">3</p>
                  </div>
                  <div>
                    <span className="font-['Inter:Semi_Bold',sans-serif] text-[#1d1e20]">TOTAL DOCUMENTS</span>
                    <p className="font-['Inter:Regular',sans-serif]">{buildingDocuments.length + tenantCount}</p>
                  </div>
                </div>
              </div>
            </div>

            <button
              onClick={handleUploadClick}
              className="flex items-center gap-2 px-4 h-[36px] bg-[#4837b9] hover:bg-[#3c2d99] rounded-[4px] text-[13px] font-['Inter:Medium',sans-serif] text-white transition-colors"
            >
              <Upload className="h-4 w-4" />
              Upload Document
            </button>
          </div>
        </div>

        {/* Search Bar */}
        <div className="bg-white border-b border-[#ecedef] px-[22px] py-4">
          <div className="relative max-w-md">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-[#72777e]" />
            <input
              type="text"
              placeholder="Search documents..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full h-[36px] pl-10 pr-4 bg-white border border-[#d6d8db] rounded-[4px] text-[13px] font-['Inter:Regular',sans-serif] text-[#1d1e20] placeholder-[#bbbfc4] focus:outline-none focus:border-[#4837b9]"
            />
          </div>
        </div>

        {/* Tabs */}
        <div className="bg-white border-b border-[#ecedef] px-[22px]">
          <div className="flex gap-6">
            <button
              onClick={() => setActiveTab('tenants')}
              className={`relative py-3 text-[13px] font-['Inter:Semi_Bold',sans-serif] transition-colors ${
                activeTab === 'tenants'
                  ? 'text-[#4837b9]'
                  : 'text-[#72777e] hover:text-[#1d1e20]'
              }`}
            >
              Tenants ({tenantCount})
              {activeTab === 'tenants' && (
                <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#4837b9]" />
              )}
            </button>
            <button
              onClick={() => setActiveTab('building')}
              className={`relative py-3 text-[13px] font-['Inter:Semi_Bold',sans-serif] transition-colors ${
                activeTab === 'building'
                  ? 'text-[#4837b9]'
                  : 'text-[#72777e] hover:text-[#1d1e20]'
              }`}
            >
              Building Documents ({buildingDocuments.length})
              {activeTab === 'building' && (
                <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#4837b9]" />
              )}
            </button>
          </div>
        </div>

        {/* Documents Table */}
        <div className="bg-white">
          <div className="px-[22px] py-6">
            <table className="w-full">
              <thead>
                <tr className="border-b border-[#ecedef]">
                  <th className="text-left pb-3 text-[11px] font-['Inter:Semi_Bold',sans-serif] text-[#72777e] uppercase tracking-[0.5px]">
                    Document Name
                  </th>
                  <th className="text-left pb-3 text-[11px] font-['Inter:Semi_Bold',sans-serif] text-[#72777e] uppercase tracking-[0.5px]">
                    Category
                  </th>
                  <th className="text-left pb-3 text-[11px] font-['Inter:Semi_Bold',sans-serif] text-[#72777e] uppercase tracking-[0.5px]">
                    Status
                  </th>
                  <th className="text-left pb-3 text-[11px] font-['Inter:Semi_Bold',sans-serif] text-[#72777e] uppercase tracking-[0.5px]">
                    Upload Date
                  </th>
                </tr>
              </thead>
              <tbody>
                {filteredDocuments.map((doc) => (
                  <tr 
                    key={doc.id} 
                    onClick={() => handleDocumentClick(doc)}
                    className="border-b border-[#ecedef] hover:bg-[#f9fafb] transition-colors cursor-pointer"
                  >
                    <td className="py-4">
                      <div className="flex items-center gap-2">
                        <FileText className="h-4 w-4 text-[#72777e] flex-shrink-0" />
                        <span className="text-[13px] font-['Inter:Regular',sans-serif] text-[#1d1e20] hover:text-[#4837b9] transition-colors">
                          {doc.fileName}
                        </span>
                      </div>
                    </td>
                    <td className="py-4">
                      <span className="text-[13px] font-['Inter:Regular',sans-serif] text-[#72777e]">
                        {doc.category}
                      </span>
                    </td>
                    <td className="py-4">
                      <span className="inline-flex items-center px-2.5 h-[24px] rounded-[100px] bg-[#dcfce7] text-[11px] font-['Inter:Semi_Bold',sans-serif] text-[#016630]">
                        {doc.status}
                      </span>
                    </td>
                    <td className="py-4">
                      <span className="text-[13px] font-['Inter:Regular',sans-serif] text-[#72777e]">
                        {doc.uploadDate}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>

            {filteredDocuments.length === 0 && (
              <div className="py-12 text-center">
                <FileText className="h-12 w-12 text-[#bbbfc4] mx-auto mb-3" />
                <p className="text-[14px] font-['Inter:Medium',sans-serif] text-[#72777e]">
                  {searchQuery ? 'No documents found matching your search' : 'No building documents'}
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}