import { useState } from 'react';
import { toast, Toaster } from 'sonner';
import DealPageContent from './components/DealPageContent';
import LeaseAbstractPage from './components/LeaseAbstractPage';
import CompleteDealModal from './components/CompleteDealModal';
import PDFViewerModal from './components/PDFViewerModal';
import TopNavigation from './components/TopNavigation';
import DocumentsPage from './components/DocumentsPage';
import AbstractionPipelinePage from './components/AbstractionPipelinePage';
import VtsAiPage from './components/VtsAiPage';
import BuildingDocumentsPage from './components/BuildingDocumentsPage';
import DocumentPreviewModal from './components/DocumentPreviewModal';
import { MOCK_LEASES } from './data/leaseData';
import type { Lease } from './data/leaseData';
import { MOCK_ASSETS, MOCK_TENANTS } from './data/searchData';
import { AssetProvider } from './context/AssetContext';
import { ChatProvider } from './context/ChatContext';
import { BuildingDocumentsProvider, useBuildingDocuments } from './context/BuildingDocumentsContext';
import type { BuildingDocument } from './data/buildingDocuments';

type Page = 'deals' | 'leases' | 'insights' | 'documents' | 'abstraction-pipeline' | 'vts-ai' | 'building-documents';

function AppContent() {
  const [currentPage, setCurrentPage] = useState<Page>('vts-ai');
  const [showModal, setShowModal] = useState(false);
  const [showLeaseDetail, setShowLeaseDetail] = useState(false);
  const [selectedAssetId, setSelectedAssetId] = useState<string | undefined>(undefined);
  const [selectedTenantId, setSelectedTenantId] = useState<string | undefined>(undefined);
  const [currentLeaseId, setCurrentLeaseId] = useState<string | null>(null);
  const [uploadedFileName, setUploadedFileName] = useState('');
  const [uploadedFileCount, setUploadedFileCount] = useState(1);
  const [showPDFViewer, setShowPDFViewer] = useState(false);
  const [pdfViewerData, setPdfViewerData] = useState<{fileName: string, page: number, searchTerm?: string} | null>(null);
  const [leaseViewConfig, setLeaseViewConfig] = useState<{showReviewExtract?: boolean, initialField?: string, searchTerm?: string} | null>(null);
  const [buildingDocumentsAssetId, setBuildingDocumentsAssetId] = useState<string | null>(null);
  const [documentPreviewData, setDocumentPreviewData] = useState<{documentName: string, fileName: string, assetName?: string} | null>(null);
  const [viewingDocumentId, setViewingDocumentId] = useState<string | null>(null);
  const [showDocumentPreview, setShowDocumentPreview] = useState(false);
  const [originPage, setOriginPage] = useState<Page | null>(null); // Track where Review Extract was opened from
  
  const { addBuildingDocuments } = useBuildingDocuments();

  const handleStageChange = (stage: string, dealData: {asset: string, tenant: string, assetId: string, tenantId: string}) => {
    if (stage === 'Lease Executed') {
      setSelectedAssetId(dealData.assetId);
      setSelectedTenantId(dealData.tenantId);
      setShowModal(true);
    }
  };

  const handleCompleteDeal = (leaseId: string, fileName: string, fileCount: number, assetId: string, tenantId: string, uploadedFiles?: File[]) => {
    // Check if this is a building-level document upload
    if (tenantId === 'asset-level') {
      // Get asset details
      const asset = MOCK_ASSETS.find(a => a.id === assetId);
      
      // Create building documents from uploaded files
      if (uploadedFiles && uploadedFiles.length > 0) {
        const newBuildingDocs: BuildingDocument[] = uploadedFiles.map((file, index) => ({
          id: `bd-${Date.now()}-${index}`,
          name: file.name.replace(/\.[^/.]+$/, ''), // Remove file extension
          fileName: file.name,
          category: 'General Documents',
          status: 'Completed' as const,
          uploadDate: new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }),
          assetId: assetId,
          assetName: asset?.name || 'Unknown Asset',
        }));
        
        // Add to building documents context
        addBuildingDocuments(newBuildingDocs);
      }
      
      setShowModal(false);
      setBuildingDocumentsAssetId(assetId);
      setCurrentPage('building-documents');
      toast.success(`${fileCount} building document(s) uploaded successfully`);
      return;
    }

    // Create a new lease entry and add to MOCK_LEASES
    const asset = MOCK_ASSETS.find(a => a.id === assetId);
    const tenant = MOCK_TENANTS.find(t => t.id === tenantId);
    
    const newLease: Lease = {
      id: leaseId,
      buildingName: asset?.name || 'Unknown Asset',
      tenantName: tenant?.name || 'N/A',
      uploadDate: new Date().toISOString(),
      status: 'Pending human review',
      assetId: assetId,
      tenantId: tenantId,
      extractedData: {
        commencement: { value: 'January 1, 2024', confidence: 95, page: 1 },
        expiration: { value: 'December 31, 2028', confidence: 92, page: 1 },
        rentableArea: { value: '15,000 SF', confidence: 98, page: 2 },
        baseRent: { value: '$45.00/SF/Year', confidence: 96, page: 3 },
        escalation: { value: '3% annually', confidence: 89, page: 3 },
        securityDeposit: { value: '$56,250', confidence: 94, page: 4 },
        parkingSpaces: { value: '25 spaces', confidence: 91, page: 5 },
        useClause: { value: 'General office use', confidence: 87, page: 2 },
        opex: { value: '$12.50/SF/Year', confidence: 90, page: 6 },
        utilities: { value: 'Tenant responsible', confidence: 93, page: 6 },
        renewalOptions: { value: '2 x 5-year options', confidence: 88, page: 7 },
        expansionRights: { value: 'ROFR on adjacent 5,000 SF', confidence: 85, page: 8 },
        brokerCommission: { value: '6% of base rent', confidence: 92, page: 9 }
      },
    };
    
    // Add to MOCK_LEASES array
    MOCK_LEASES.push(newLease);
    
    setCurrentLeaseId(leaseId);
    setUploadedFileName(fileName);
    setUploadedFileCount(fileCount);
    setShowModal(false);
    
    // Navigate directly after scanning animation completes
    if (fileCount > 1) {
      setCurrentPage('abstraction-pipeline');
      toast.success(`${fileCount} leases uploaded successfully`);
    } else {
      // Single file, show detail page
      setShowLeaseDetail(true);
    }
  };

  const handleBackToDeals = () => {
    setShowLeaseDetail(false);
    setCurrentLeaseId(null);
    setSelectedAssetId(undefined);
    setSelectedTenantId(undefined);
    setCurrentPage('documents');
  };

  const handleCloseReviewExtract = () => {
    // If there's an origin page, navigate back to it
    if (originPage) {
      setShowLeaseDetail(false);
      setCurrentLeaseId(null);
      setLeaseViewConfig(null);
      setCurrentPage(originPage);
      setOriginPage(null); // Clear the origin page
    } else {
      // Fallback to default behavior
      handleBackToDeals();
    }
  };

  const handleViewLeaseDetails = (leaseId: string) => {
    setCurrentLeaseId(leaseId);
    setShowLeaseDetail(true);
    setLeaseViewConfig(null); // Reset the view config to show normal Summary view
  };

  const handleUploadLease = (assetId?: string, tenantId?: string) => {
    setSelectedAssetId(assetId);
    setSelectedTenantId(tenantId);
    setShowModal(true);
  };

  const handleNewDeal = () => {
    setCurrentPage('deals');
    toast.success('Navigated to Deals page');
  };

  const handleNavigate = (page: Page) => {
    if (showLeaseDetail) {
      setShowLeaseDetail(false);
      setCurrentLeaseId(null);
    }
    if (page === 'leases') {
      setCurrentPage('building-documents');
    } else {
      setCurrentPage(page);
    }
  };

  const handleOpenPDFViewer = (fileName: string, page: number, searchTerm?: string, leaseId?: string) => {
    // Navigate to lease detail and show Review Extract view
    if (leaseId) {
      setLeaseViewConfig({
        showReviewExtract: true,
        searchTerm: searchTerm
      });
      setCurrentLeaseId(leaseId);
      setShowLeaseDetail(true);
      setOriginPage(currentPage); // Track the origin page
    }
  };

  const handleOpenBuildingDocument = (fileName: string, documentName: string) => {
    // Open the document preview modal
    const asset = MOCK_ASSETS.find(a => a.id === buildingDocumentsAssetId);
    setDocumentPreviewData({
      documentName,
      fileName,
      assetName: asset?.name || 'VTS Tower'
    });
  };

  const renderPageContent = () => {
    // If viewing a lease detail, show it regardless of current page
    if (showLeaseDetail && currentLeaseId) {
      return (
        <LeaseAbstractPage 
          leaseId={currentLeaseId} 
          onBack={handleCloseReviewExtract} 
          onNavigate={handleNavigate}
          showReviewExtract={leaseViewConfig?.showReviewExtract}
          searchTerm={leaseViewConfig?.searchTerm}
          onUploadDocument={handleUploadLease}
        />
      );
    }

    switch (currentPage) {
      case 'deals':
        return (
          <DealPageContent
            onComplete={() => handleStageChange('Lease Executed', { asset: 'VTS Tower', tenant: 'Stripe', assetId: 'a2', tenantId: 't1' })}
            onNavigateToDocuments={() => handleNavigate('documents')}
            onNavigate={handleNavigate}
            onStageChange={handleStageChange}
          />
        );
      
      case 'insights':
        return (
          <div className="flex items-center justify-center h-screen bg-[#f4f5f6]">
            <div className="text-center">
              <h1 className="text-[24px] font-bold font-['Inter:Bold',sans-serif] text-[#1d1e20] mb-2">
                Insights Page
              </h1>
              <p className="text-[14px] font-['Inter:Regular',sans-serif] text-[#72777e]">
                Coming soon...
              </p>
            </div>
          </div>
        );
      
      case 'documents':
        return <DocumentsPage 
          onViewDocument={handleViewLeaseDetails} 
          onUploadLease={handleUploadLease} 
          onNavigate={handleNavigate} 
          onViewBuildingDocuments={(assetId) => {
            setBuildingDocumentsAssetId(assetId);
            setCurrentPage('building-documents');
          }}
          onViewBuildingDocument={(documentId) => {
            // Open the document preview modal
            setViewingDocumentId(documentId);
            setShowDocumentPreview(true);
          }}
        />;      
      case 'abstraction-pipeline':
        return <AbstractionPipelinePage onNavigate={handleNavigate} />;
      
      case 'vts-ai':
        return <VtsAiPage onViewLeaseDetails={handleViewLeaseDetails} onOpenPDFViewer={handleOpenPDFViewer} onNavigate={handleNavigate} />;
      
      case 'building-documents':
        if (!buildingDocumentsAssetId) {
          return <DocumentsPage onViewDocument={handleViewLeaseDetails} onUploadLease={handleUploadLease} onNavigate={handleNavigate} />;
        }
        return (
          <BuildingDocumentsPage 
            assetId={buildingDocumentsAssetId} 
            onBack={() => {
              setBuildingDocumentsAssetId(null);
              setCurrentPage('documents');
            }} 
            onNavigate={handleNavigate}
            onUploadDocument={handleUploadLease}
            onOpenDocument={handleOpenBuildingDocument}
            currentPage="building-documents"
          />
        );
      
      default:
        return <DealPageContent onStageChange={handleStageChange} />;
    }
  };

  return (
    <div className="bg-[#f4f5f6] min-h-screen w-full">
      <Toaster position="top-right" />
      
      <TopNavigation currentPage={currentPage} onNavigate={handleNavigate} />
      
      {renderPageContent()}
      
      <CompleteDealModal
        isOpen={showModal}
        onClose={() => setShowModal(false)}
        prefilledAssetId={selectedAssetId}
        prefilledTenantId={selectedTenantId}
        onComplete={handleCompleteDeal}
      />
      <PDFViewerModal
        isOpen={showPDFViewer}
        onClose={() => setShowPDFViewer(false)}
        fileName={pdfViewerData?.fileName || 'Master Lease Agreement.pdf'}
        initialPage={pdfViewerData?.page || 1}
        searchTerm={pdfViewerData?.searchTerm}
      />
      <DocumentPreviewModal
        isOpen={documentPreviewData !== null}
        onClose={() => setDocumentPreviewData(null)}
        documentName={documentPreviewData?.documentName || 'Document'}
        fileName={documentPreviewData?.fileName || 'document.pdf'}
        assetName={documentPreviewData?.assetName}
      />
    </div>
  );
}

export default function App() {
  return (
    <AssetProvider>
      <ChatProvider>
        <BuildingDocumentsProvider>
          <AppContent />
        </BuildingDocumentsProvider>
      </ChatProvider>
    </AssetProvider>
  );
}