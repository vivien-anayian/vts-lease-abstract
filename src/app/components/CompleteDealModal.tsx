import { useState, useRef, useEffect } from 'react';
import { X, Upload, FileText, Building2, Users, AlertTriangle, ChevronDown, Check } from 'lucide-react';
import { MOCK_ASSETS, MOCK_TENANTS } from '../data/searchData';
import type { Asset, Tenant } from '../data/searchData';
import FileCardWithDropdown from './FileCardWithDropdown';

interface CompleteDealModalProps {
  isOpen: boolean;
  onClose: () => void;
  prefilledAssetId?: string;
  prefilledTenantId?: string;
  dealId?: string;
  onComplete: (leaseId: string, fileName: string, fileCount: number, assetId: string, tenantId: string, uploadedFiles?: File[]) => void;
}

const MAX_FILE_SIZE = 50 * 1024 * 1024; // 50MB
const MAX_FILES = 5; // Maximum 5 documents

const VALID_FILE_TYPES = [
  'application/pdf',
  'application/msword',
  'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
  'text/plain',
  'application/rtf',
  'text/rtf', // Some browsers use this MIME type for RTF
  'application/octet-stream', // Generic binary - check extension
  'application/x-msword', // Alternative MIME for .doc
  'application/vnd.ms-word', // Alternative MIME for .doc
  '', // Empty MIME type for folder uploads
];

const VALID_FILE_EXTENSIONS = ['.pdf', '.doc', '.docx', '.txt', '.rtf'];

const DOCUMENT_TYPES = [
  'Master Lease',
  'Amendment',
  'Commencement Letter',
  'Sublease',
  'TI Work Agreement',
  'Sublease Consent Form',
  'Other',
];

const PROCESSING_STAGES = [
  { label: 'Uploading document', progress: 0 },
  { label: 'Preparing file for AI extraction', progress: 15 },
  { label: 'Extraction could take up to a minute', progress: 25 },
  { label: 'Generating term details, rent structure and other income', progress: 35 },
  { label: 'Generating expenses, recoveries and costs', progress: 55 },
  { label: 'Generating options and rights', progress: 75 },
  { label: 'Finalizing', progress: 90 },
];

export default function CompleteDealModal({
  isOpen,
  onClose,
  prefilledAssetId,
  prefilledTenantId,
  dealId,
  onComplete,
}: CompleteDealModalProps) {
  const [selectedAsset, setSelectedAsset] = useState<Asset | null>(null);
  const [selectedTenant, setSelectedTenant] = useState<Tenant | null>(null);
  const [individualDocumentTypes, setIndividualDocumentTypes] = useState<Record<number, string>>({});
  const [uploadedFiles, setUploadedFiles] = useState<File[]>([]);
  const [isDragging, setIsDragging] = useState(false);
  const [uploadError, setUploadError] = useState<string | null>(null);
  const [uploadWarning, setUploadWarning] = useState<string | null>(null);
  
  // Processing state
  const [isProcessing, setIsProcessing] = useState(false);
  const [processingProgress, setProcessingProgress] = useState(0);
  const [currentStageIndex, setCurrentStageIndex] = useState(0);
  const [showConfetti, setShowConfetti] = useState(false);
  
  const [assetSearchQuery, setAssetSearchQuery] = useState('');
  const [tenantSearchQuery, setTenantSearchQuery] = useState('');
  const [showAssetDropdown, setShowAssetDropdown] = useState(false);
  const [showTenantDropdown, setShowTenantDropdown] = useState(false);
  
  const fileInputRef = useRef<HTMLInputElement>(null);
  const dragCounterRef = useRef(0);
  const assetDropdownRef = useRef<HTMLDivElement>(null);
  const tenantDropdownRef = useRef<HTMLDivElement>(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  // Update selected asset/tenant when pre-filled IDs change
  useEffect(() => {
    if (prefilledAssetId) {
      const asset = MOCK_ASSETS.find(a => a.id === prefilledAssetId);
      setSelectedAsset(asset || null);
    } else {
      setSelectedAsset(null);
    }
  }, [prefilledAssetId]);

  useEffect(() => {
    if (prefilledTenantId) {
      const tenant = MOCK_TENANTS.find(t => t.id === prefilledTenantId);
      setSelectedTenant(tenant || null);
    } else {
      setSelectedTenant(null);
    }
  }, [prefilledTenantId]);

  // Reset form when modal closes
  useEffect(() => {
    if (!isOpen) {
      setUploadedFiles([]);
      setUploadError(null);
      setUploadWarning(null);
      setAssetSearchQuery('');
      setTenantSearchQuery('');
      setShowAssetDropdown(false);
      setShowTenantDropdown(false);
      setIsProcessing(false);
      setProcessingProgress(0);
      setCurrentStageIndex(0);
      setShowConfetti(false);
      setIsDragging(false);
      dragCounterRef.current = 0;
    }
  }, [isOpen]);

  // Processing logic - 12 second duration
  useEffect(() => {
    let intervalRef: NodeJS.Timeout | null = null;
    
    if (isProcessing) {
      let currentProgress = 0;
      intervalRef = setInterval(() => {
        currentProgress += 0.833; // 100 / 12000ms * 100ms = 0.833 per 100ms
        
        // Cap at 100% to prevent overflow
        if (currentProgress > 100) {
          currentProgress = 100;
        }
        
        setProcessingProgress(currentProgress);
        
        // Update stage based on progress thresholds
        const stageIndex = PROCESSING_STAGES.findIndex((stage, idx) => {
          const nextStage = PROCESSING_STAGES[idx + 1];
          return currentProgress >= stage.progress && 
                 (!nextStage || currentProgress < nextStage.progress);
        });
        
        if (stageIndex !== -1) {
          setCurrentStageIndex(stageIndex);
        }
        
        if (currentProgress >= 100) {
          clearInterval(intervalRef!);
          setTimeout(() => {
            setIsProcessing(false);
            setProcessingProgress(0);
            setCurrentStageIndex(0);
          }, 500);
        }
      }, 100);
    }
    
    return () => {
      if (intervalRef) clearInterval(intervalRef);
    };
  }, [isProcessing]);

  // Click outside to close dropdowns
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Node;
      
      if (showAssetDropdown && assetDropdownRef.current && !assetDropdownRef.current.contains(target)) {
        setShowAssetDropdown(false);
      }
      
      if (showTenantDropdown && tenantDropdownRef.current && !tenantDropdownRef.current.contains(target)) {
        setShowTenantDropdown(false);
      }
    };
    
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [showAssetDropdown, showTenantDropdown]);

  // Close dropdowns on scroll
  useEffect(() => {
    const handleScroll = () => {
      if (showAssetDropdown) setShowAssetDropdown(false);
      if (showTenantDropdown) setShowTenantDropdown(false);
    };
    
    const scrollContainer = scrollContainerRef.current;
    if (scrollContainer) {
      scrollContainer.addEventListener('scroll', handleScroll);
      return () => scrollContainer.removeEventListener('scroll', handleScroll);
    }
  }, [showAssetDropdown, showTenantDropdown]);

  const isValidFileType = (file: File): boolean => {
    // Skip hidden files and system files
    if (file.name.startsWith('.') || file.name.startsWith('~')) {
      return false;
    }
    
    // Check MIME type first
    if (file.type && VALID_FILE_TYPES.includes(file.type)) {
      return true;
    }
    
    // Fallback: Check file extension (case-insensitive)
    const fileName = file.name.toLowerCase();
    const hasValidExtension = VALID_FILE_EXTENSIONS.some(ext => fileName.endsWith(ext));
    
    // For folder uploads, MIME type might be empty, so rely on extension
    if (hasValidExtension) {
      return true;
    }
    
    return false;
  };

  const isValidFileSize = (file: File): boolean => {
    return file.size > 0 && file.size <= MAX_FILE_SIZE;
  };

  const validateFile = (file: File): string | null => {
    // Skip validation for hidden/system files (they'll be filtered out)
    if (file.name.startsWith('.') || file.name.startsWith('~')) {
      return 'System or hidden file';
    }
    
    if (!isValidFileType(file)) {
      return `Invalid file type`;
    }
    if (!isValidFileSize(file)) {
      if (file.size === 0) {
        return `Empty file`;
      }
      return `File size exceeds ${MAX_FILE_SIZE / 1024 / 1024}MB limit`;
    }
    return null;
  };

  const handleDragEnter = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    dragCounterRef.current++;
    setIsDragging(true);
  };

  const handleDragLeave = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    dragCounterRef.current--;
    if (dragCounterRef.current === 0) {
      setIsDragging(false);
    }
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);
    dragCounterRef.current = 0;
    setUploadError(null);
    setUploadWarning(null);
    
    // Close all dropdowns when files are uploaded
    setShowAssetDropdown(false);
    setShowTenantDropdown(false);

    const files = Array.from(e.dataTransfer.files);
    
    if (files.length === 0) return;

    // Validate all files and filter valid ones
    const validFiles: File[] = [];
    const invalidFiles: string[] = [];
    
    for (const file of files) {
      const error = validateFile(file);
      if (error) {
        invalidFiles.push(file.name);
      } else {
        validFiles.push(file);
      }
    }

    // If we have valid files, use them - NO PROCESSING ANIMATION
    if (validFiles.length > 0) {
      // Limit to MAX_FILES
      const filesToUpload = validFiles.slice(0, MAX_FILES);
      
      // Trigger confetti on drop
      setShowConfetti(true);
      setTimeout(() => setShowConfetti(false), 1000);
      
      setUploadedFiles(filesToUpload);
      
      // Show warning if some files were skipped
      if (invalidFiles.length > 0 || validFiles.length > MAX_FILES) {
        const uploadedCount = filesToUpload.length;
        const skippedCount = invalidFiles.length + Math.max(0, validFiles.length - MAX_FILES);
        setUploadWarning(`Uploaded ${uploadedCount} file(s). Skipped ${skippedCount} file(s) (max ${MAX_FILES} files allowed).`);
      }
    } else {
      // No valid files found
      setUploadError('No valid files found. Please upload PDF, DOC, DOCX, TXT, or RTF files.');
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUploadError(null);
    setUploadWarning(null);
    
    // Close all dropdowns when files are uploaded
    setShowAssetDropdown(false);
    setShowTenantDropdown(false);
    
    const files = e.target.files ? Array.from(e.target.files) : [];

    if (files.length === 0) return;

    // Validate all files and filter valid ones
    const validFiles: File[] = [];
    const invalidFiles: string[] = [];
    
    for (const file of files) {
      const error = validateFile(file);
      if (error) {
        invalidFiles.push(file.name);
      } else {
        validFiles.push(file);
      }
    }

    // If we have valid files, use them - NO PROCESSING ANIMATION
    if (validFiles.length > 0) {
      // Limit to MAX_FILES
      const filesToUpload = validFiles.slice(0, MAX_FILES);
      
      setUploadedFiles(filesToUpload);
      
      // Show warning if some files were skipped
      if (invalidFiles.length > 0 || validFiles.length > MAX_FILES) {
        const uploadedCount = filesToUpload.length;
        const skippedCount = invalidFiles.length + Math.max(0, validFiles.length - MAX_FILES);
        setUploadWarning(`Uploaded ${uploadedCount} file(s). Skipped ${skippedCount} file(s) (max ${MAX_FILES} files allowed).`);
      }
    } else {
      // No valid files found
      setUploadError('No valid files found. Please upload PDF, DOC, DOCX, TXT, or RTF files.');
    }
  };

  const handleRemoveFile = (index?: number) => {
    if (index !== undefined) {
      // Remove specific file
      setUploadedFiles(prev => prev.filter((_, i) => i !== index));
    } else {
      // Remove all files
      setUploadedFiles([]);
    }
    setUploadError(null);
    setUploadWarning(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  const handleComplete = () => {
    if (!selectedAsset || !selectedTenant || uploadedFiles.length === 0) return;

    // Show the scanning animation inside the modal
    setIsProcessing(true);
    setProcessingProgress(0);
    setCurrentStageIndex(0);

    // After the scanning animation completes (12 seconds), trigger the callback
    setTimeout(() => {
      setIsProcessing(false);
      
      // Generate unique lease ID
      const leaseId = `LEASE-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
      
      // Trigger completion with lease ID, filename, and file count
      const fileName = uploadedFiles.length === 1 ? uploadedFiles[0].name : `${uploadedFiles.length} files`;
      onComplete(leaseId, fileName, uploadedFiles.length, selectedAsset.id, selectedTenant.id, uploadedFiles);
    }, 12000); // 12 seconds for the full scanning animation
  };

  const filteredAssets = MOCK_ASSETS.filter(asset =>
    asset.name.toLowerCase().includes(assetSearchQuery.toLowerCase()) ||
    asset.address.toLowerCase().includes(assetSearchQuery.toLowerCase()) ||
    asset.city.toLowerCase().includes(assetSearchQuery.toLowerCase())
  );

  const filteredTenants = MOCK_TENANTS.filter(tenant =>
    tenant.name.toLowerCase().includes(tenantSearchQuery.toLowerCase()) ||
    tenant.industry.toLowerCase().includes(tenantSearchQuery.toLowerCase())
  );

  const isFormValid = selectedAsset && selectedTenant && uploadedFiles.length > 0 && !uploadError && 
    // Check that all uploaded files have a document type selected
    uploadedFiles.every((_, index) => individualDocumentTypes[index] && individualDocumentTypes[index] !== '');

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center p-4">
      <div className="bg-white rounded-[8px] shadow-[0px_4px_20px_rgba(0,0,0,0.2)] w-full max-w-[600px] max-h-[90vh] flex flex-col">
        {/* Header with Logo and Close Button */}
        <div className="relative shrink-0 w-full">
          <div className="flex flex-col gap-[16px] items-start px-[24px] py-[16px] relative w-full">
            {/* VTS AI Logo */}
            <div className="h-[24px] w-[71px]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 94.5564 32">
                <g>
                  <path d="M62.1164 2.5094L52.8103 29.9338H59.393L65.7093 9.7721L70.0938 23.7663H65.9317L63.9991 29.9338H72.0264H76.5487H78.911L69.6819 2.5094H62.1164Z" fill="#1D1E20"/>
                  <path d="M94.5564 2.5094H88.0498V29.9338H94.5564V2.5094Z" fill="#1D1E20"/>
                  <path d="M22.172 7.21449L22.1906 7.20349L29.5311 12.0811L34.9627 8.48738L22.1906 0L22.172 0.0118409L9.39648 8.50176L14.8272 12.0955L22.172 7.21449Z" fill="#1D1E20"/>
                  <path d="M22.1687 22.7269L0 8.8232V18.0972L22.1687 32.0001L22.1721 31.9975L44.345 18.0929V8.81897L22.1721 22.7244L22.1687 22.7269Z" fill="#1D1E20"/>
                </g>
              </svg>
            </div>
            
            {/* Close Button - Absolutely positioned */}
            <button
              onClick={onClose}
              className="absolute left-[548px] top-[16px] flex flex-col items-start pt-[4px] px-[4px] pb-0 rounded-[4px] size-[28px] hover:bg-gray-100 transition-colors"
            >
              <div className="h-[20px] w-full overflow-hidden">
                <div className="absolute inset-1/4">
                  <div className="absolute inset-[-8.33%]">
                    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.6667 11.6667">
                      <path d="M11.6667 1.175L10.4917 0L5.83333 4.65833L1.175 0L0 1.175L4.65833 5.83333L0 10.4917L1.175 11.6667L5.83333 7.00833L10.4917 11.6667L11.6667 10.4917L7.00833 5.83333L11.6667 1.175Z" stroke="#72777E" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
                    </svg>
                  </div>
                </div>
                <div className="absolute inset-1/4">
                  <div className="absolute inset-[-8.33%]">
                    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.6667 11.6667">
                      <path d="M0 10.4917L1.175 11.6667L5.83333 7.00833L10.4917 11.6667L11.6667 10.4917L7.00833 5.83333L11.6667 1.175L10.4917 0L5.83333 4.65833L1.175 0L0 1.175L4.65833 5.83333L0 10.4917Z" stroke="#72777E" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
                    </svg>
                  </div>
                </div>
              </div>
            </button>
          </div>
        </div>

        {/* Title Section */}
        <div className="h-[45px] border-b border-[#ecedef] shrink-0">
          <div className="flex flex-row items-center size-full">
            <div className="flex items-center justify-between px-[24px] size-full">
              <h2 className="text-[20px] font-semibold font-['Inter:Semi_Bold',sans-serif] leading-[30px] text-[#1d1e20]">
                Upload documents
              </h2>
            </div>
          </div>
        </div>

        {/* Content - Scrollable */}
        <div 
          ref={scrollContainerRef} 
          className="flex-1 overflow-y-auto px-[24px] pt-[16px] pb-0"
          style={{
            paddingBottom: (showAssetDropdown || showTenantDropdown) ? '250px' : '0px'
          }}
        >
          <div className="flex flex-col gap-[16px]">
            {/* Asset Selection */}
            <div className="flex flex-col gap-[8px]">
              <label className="text-[14px] font-medium font-['Inter:Medium',sans-serif] leading-[21px] text-[#1d1e20]">
                Asset / Property <span className="text-[#fb2c36]">*</span>
              </label>
              <div ref={assetDropdownRef} className="relative">
                <div
                  className="w-full h-[40px] px-[13px] bg-white border border-[#d6d8db] rounded-[4px] flex items-center gap-[8px] cursor-pointer hover:border-[#4837b9] transition-colors"
                  onClick={() => {
                    setShowAssetDropdown(!showAssetDropdown);
                    setShowTenantDropdown(false);
                  }}
                >
                  {selectedAsset ? (
                    <>
                      <Building2 className="w-4 h-4 text-[#72777e] shrink-0" />
                      <span className="text-[14px] font-['Inter:Regular',sans-serif] leading-[21px] text-[#1d1e20] flex-1 truncate">
                        {selectedAsset.name}
                      </span>
                    </>
                  ) : (
                    <span className="text-[14px] font-['Inter:Regular',sans-serif] leading-[21px] text-[#bbbfc4] flex-1">
                      Select an asset
                    </span>
                  )}
                  <ChevronDown className="w-4 h-4 text-[#72777e] shrink-0" />
                </div>

                {showAssetDropdown && (
                  <div className="absolute z-10 w-full mt-1 bg-white border border-[#d6d8db] rounded-[4px] shadow-lg max-h-[200px] overflow-y-auto">
                    <div className="sticky top-0 bg-white border-b border-[#ecedef] p-2 z-10">
                      <input
                        type="text"
                        placeholder="Search assets..."
                        value={assetSearchQuery}
                        onChange={(e) => setAssetSearchQuery(e.target.value)}
                        className="w-full px-3 py-2 text-[14px] border border-[#d6d8db] rounded-[4px] outline-none focus:border-[#4837b9]"
                        autoFocus
                      />
                    </div>
                    <div className="p-1">
                      {filteredAssets.map((asset) => (
                        <div
                          key={asset.id}
                          onClick={() => {
                            setSelectedAsset(asset);
                            setShowAssetDropdown(false);
                            setAssetSearchQuery('');
                          }}
                          className="px-3 py-2 hover:bg-[#f9fafa] cursor-pointer rounded-[4px] transition-colors"
                        >
                          <p className="text-[14px] font-['Inter:Semi_Bold',sans-serif] text-[#1d1e20]">
                            {asset.name}
                          </p>
                          <p className="text-[12px] font-['Inter:Regular',sans-serif] text-[#72777e]">
                            {asset.address}, {asset.city}, {asset.state} {asset.zip}
                          </p>
                        </div>
                      ))}
                      {filteredAssets.length === 0 && (
                        <p className="px-3 py-4 text-[14px] text-[#72777e] text-center">
                          No assets found
                        </p>
                      )}
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Tenant Selection */}
            <div className="flex flex-col gap-[8px]">
              <label className="text-[14px] font-medium font-['Inter:Medium',sans-serif] leading-[21px] text-[#1d1e20]">
                Tenant <span className="text-[#fb2c36]">*</span>
              </label>
              <div ref={tenantDropdownRef} className="relative">
                <div
                  className="w-full h-[40px] px-[13px] bg-white border border-[#d6d8db] rounded-[4px] flex items-center gap-[8px] cursor-pointer hover:border-[#4837b9] transition-colors"
                  onClick={() => {
                    setShowTenantDropdown(!showTenantDropdown);
                    setShowAssetDropdown(false);
                  }}
                >
                  {selectedTenant ? (
                    <>
                      <Users className="w-4 h-4 text-[#72777e] shrink-0" />
                      <span className="text-[14px] font-['Inter:Regular',sans-serif] leading-[21px] text-[#1d1e20] flex-1 truncate">
                        {selectedTenant.name}
                      </span>
                    </>
                  ) : (
                    <span className="text-[14px] font-['Inter:Regular',sans-serif] leading-[21px] text-[#bbbfc4] flex-1">
                      Select a tenant
                    </span>
                  )}
                  <ChevronDown className="w-4 h-4 text-[#72777e] shrink-0" />
                </div>

                {showTenantDropdown && (
                  <div className="absolute z-10 w-full mt-1 bg-white border border-[#d6d8db] rounded-[4px] shadow-lg max-h-[200px] overflow-y-auto">
                    <div className="sticky top-0 bg-white border-b border-[#ecedef] p-2 z-10">
                      <input
                        type="text"
                        placeholder="Search tenants..."
                        value={tenantSearchQuery}
                        onChange={(e) => setTenantSearchQuery(e.target.value)}
                        className="w-full px-3 py-2 text-[14px] border border-[#d6d8db] rounded-[4px] outline-none focus:border-[#4837b9]"
                        autoFocus
                      />
                    </div>
                    <div className="p-1">
                      {filteredTenants.map((tenant) => (
                        <div
                          key={tenant.id}
                          onClick={() => {
                            setSelectedTenant(tenant);
                            setShowTenantDropdown(false);
                            setTenantSearchQuery('');
                          }}
                          className="px-3 py-2 hover:bg-[#f9fafa] cursor-pointer rounded-[4px] transition-colors"
                        >
                          <p className="text-[14px] font-['Inter:Semi_Bold',sans-serif] text-[#1d1e20]">
                            {tenant.name}
                          </p>
                          <p className="text-[12px] font-['Inter:Regular',sans-serif] text-[#72777e]">
                            {tenant.industry}
                          </p>
                        </div>
                      ))}
                      {filteredTenants.length === 0 && (
                        <p className="px-3 py-4 text-[14px] text-[#72777e] text-center">
                          No tenants found
                        </p>
                      )}
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* File Upload */}
            <div className="flex flex-col gap-[8px]">
              <label className="text-[14px] font-medium font-['Inter:Medium',sans-serif] leading-[21px] text-[#1d1e20]">
                Lease Document(s)
              </label>
              <div
                className={`border-2 rounded-[16px] p-8 text-center transition-all duration-500 relative ${
                  isProcessing
                    ? 'border-dashed border-[#d6a6ff] bg-white'
                    : isDragging
                      ? 'border-dashed border-[#c928ff] bg-[#faf8ff] scale-[1.05]'
                      : 'border-dashed border-[#d6a6ff] bg-white'
                } ${uploadError ? 'border-red-300 bg-red-50' : ''}`}
                onDragEnter={handleDragEnter}
                onDragOver={handleDragOver}
                onDragLeave={handleDragLeave}
                onDrop={handleDrop}
              >
                {/* Animated gradient background - only visible on drag */}
                <div className={`animated-gradient-bg absolute inset-0 transition-opacity duration-[3000ms] ease-in-out ${
                  isDragging && !isProcessing ? 'opacity-100' : 'opacity-0'
                }`} />
                
                {/* Confetti particles */}
                {showConfetti && (
                  <div className="absolute inset-0 pointer-events-none z-50">
                    {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((i) => {
                      const colors = ['#c928ff', '#8b28ff', '#d6a6ff', 'white'];
                      const sizes = [6, 7, 8, 6, 7, 8, 7, 6, 8, 7, 6, 8];
                      return (
                        <div
                          key={i}
                          className={`confetti-particle confetti-${i}`}
                          style={{
                            width: `${sizes[i - 1]}px`,
                            height: `${sizes[i - 1]}px`,
                            background: colors[(i - 1) % 4],
                          }}
                        />
                      );
                    })}
                  </div>
                )}
                
                {/* Content based on state */}
                <div className="relative z-10">
                  {isProcessing ? (
                    // PROCESSING STATE
                    <div className="flex flex-col items-center justify-center py-6">
                      {/* Animated Document Icon */}
                      <div className="relative w-16 h-20 mb-6">
                        {/* Document container */}
                        <div 
                          className="absolute inset-0 rounded-[10px] border-2 border-[#c928ff]/30"
                          style={{
                            background: 'linear-gradient(128.66deg, rgba(201,40,255,0.1) 0%, rgba(139,40,255,0.1) 100%)'
                          }}
                        >
                          {/* Document text lines */}
                          <div className="absolute top-[12px] left-[12px] right-[12px] space-y-[6px]">
                            <div className="h-[4px] bg-[#c928ff]/20 rounded" style={{ width: '36px' }} />
                            <div className="h-[4px] bg-[#c928ff]/20 rounded" style={{ width: '28.8px' }} />
                            <div className="h-[4px] bg-[#c928ff]/20 rounded" style={{ width: '36px' }} />
                            <div className="h-[4px] bg-[#c928ff]/20 rounded" style={{ width: '21.6px' }} />
                          </div>
                          
                          {/* Scanning line */}
                          <div 
                            className="scanning-line absolute left-[8px] right-[8px] h-[2px]"
                            style={{
                              background: 'linear-gradient(90deg, transparent 0%, #c928ff 50%, transparent 100%)'
                            }}
                          />
                          
                          {/* Sparkle particles (barely visible) */}
                          <div className="sparkle-particle absolute" style={{ width: '7.98px', height: '7.98px', left: '45px', top: '11px', opacity: 0.2 }}>
                            <svg viewBox="0 0 12 12" fill="none">
                              <path d="M6 0L7.5 4.5L12 6L7.5 7.5L6 12L4.5 7.5L0 6L4.5 4.5L6 0Z" fill="#c928ff" />
                            </svg>
                          </div>
                          <div className="sparkle-particle absolute" style={{ width: '0.01px', height: '0.01px', opacity: 0 }} />
                          <div className="sparkle-particle absolute" style={{ width: '10px', height: '10px', opacity: 0 }} />
                        </div>
                        
                        {/* Percentage badge */}
                        <div 
                          className="absolute w-[32px] h-[32px] rounded-full flex items-center justify-center shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1)]"
                          style={{
                            left: '40px',
                            top: '-8px',
                            background: 'linear-gradient(128.66deg, #c928ff 0%, #8b28ff 100%)'
                          }}
                        >
                          <span className="font-['Inter:Semi_Bold',sans-serif] font-semibold text-white text-[10px] leading-none">
                            {Math.round(processingProgress)}%
                          </span>
                        </div>
                      </div>
                      
                      {/* Stage text with animated ellipsis */}
                      <p className="font-['Inter:Regular',sans-serif] leading-[20px] text-[#1d1e20] text-[14px]">
                        {PROCESSING_STAGES[currentStageIndex].label}
                        <span className="chatgpt-dots">
                          <span></span>
                          <span></span>
                          <span></span>
                        </span>
                      </p>
                    </div>
                  ) : uploadedFiles.length > 0 ? (
                    // UPLOADED FILES VIEW - Always show individual document type dropdowns
                    <div className="space-y-2">
                      {uploadedFiles.map((file, index) => (
                        <FileCardWithDropdown
                          key={index}
                          file={file}
                          index={index}
                          selectedType={individualDocumentTypes[index] || ''}
                          documentTypes={DOCUMENT_TYPES}
                          onTypeChange={(idx, type) => {
                            setIndividualDocumentTypes(prev => ({
                              ...prev,
                              [idx]: type
                            }));
                          }}
                          onRemove={handleRemoveFile}
                        />
                      ))}
                      {uploadedFiles.length > 1 && (
                        <button
                          type="button"
                          onClick={() => handleRemoveFile()}
                          className="text-[12px] text-[#4837b9] hover:underline mt-2"
                        >
                          Remove all files
                        </button>
                      )}
                    </div>
                  ) : (
                    // IDLE STATE
                    <>
                      {/* Purple gradient upload icon box */}
                      <div className="mx-auto w-[100.8px] h-[57.6px] mb-4 rounded-[10px] border-2 border-[#c928ff] relative overflow-hidden flex items-center justify-center"
                        style={{ background: 'linear-gradient(151.189deg, rgba(255, 255, 255, 0) 0%, rgba(214, 166, 255, 0.15) 25%, rgba(235, 211, 255, 0.22) 50%, rgba(214, 166, 255, 0.15) 75%, rgba(255, 255, 255, 0) 100%)' }}
                      >
                        <Upload className="w-7 h-7 text-[#b4b7bc]" strokeWidth={2} />
                      </div>
                      <p className="text-[14px] font-['Inter:Regular',sans-serif] leading-[21px] text-[#72777e] mb-3">
                        Drag and drop lease document(s) here, or
                      </p>
                      <div className="flex items-center justify-center gap-3">
                        <button
                          type="button"
                          onClick={() => fileInputRef.current?.click()}
                          className="px-4 h-[39px] bg-white border border-[#8c82ff] rounded-[4px] text-[14px] font-['Inter:Medium',sans-serif] leading-[21px] text-[#4837b9] hover:bg-[#f9fafa] transition-colors"
                        >
                          Upload files
                        </button>
                        <input
                          ref={fileInputRef}
                          type="file"
                          className="hidden"
                          accept=".pdf,.doc,.docx,.txt,.rtf"
                          multiple
                          onChange={handleFileChange}
                        />
                      </div>
                      <p className="text-[12px] font-['Inter:Regular',sans-serif] leading-[18px] text-[#bbbfc4] mt-3">
                        Upload single file or multiple files (max 5)
                      </p>
                      <p className="text-[12px] font-['Inter:Regular',sans-serif] leading-[18px] text-[#bbbfc4] mt-1">
                        Supported formats: PDF, DOC, DOCX, TXT, RTF (Max 50MB each)
                      </p>
                    </>
                  )}
                </div>

                {uploadError && (
                  <div className="mt-4 p-3 bg-red-50 border border-red-200 rounded-[8px] relative z-10">
                    <p className="text-[14px] text-red-600 flex items-center justify-center gap-2">
                      <AlertTriangle className="h-4 w-4" />
                      {uploadError}
                    </p>
                  </div>
                )}

                {uploadWarning && (
                  <div className="mt-4 p-3 bg-yellow-50 border border-yellow-200 rounded-[8px] relative z-10">
                    <p className="text-[14px] text-yellow-600 flex items-center justify-center gap-2">
                      <AlertTriangle className="h-4 w-4" />
                      {uploadWarning}
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Footer - Sticky */}
        <div className="h-[70px] px-[24px] border-t border-[#ecedef] flex items-center justify-end gap-[12px] shrink-0">
          <button
            onClick={onClose}
            className="h-[37px] px-4 text-[14px] font-['Inter:Medium',sans-serif] leading-[21px] text-[#72777e] hover:bg-gray-100 rounded-[4px] transition-colors"
          >
            Cancel
          </button>
          <button
            onClick={handleComplete}
            disabled={!isFormValid}
            className={`h-[40px] px-[16px] py-[8px] text-[16px] font-semibold font-['Inter:Semi_Bold',sans-serif] leading-[24px] text-white rounded-[4px] transition-all flex items-center gap-[8px] ${
              isFormValid
                ? 'opacity-100'
                : 'opacity-50 cursor-not-allowed'
            }`}
            style={isFormValid ? {
              background: 'linear-gradient(167.67deg, rgb(118, 32, 205) 0%, rgb(136, 34, 170) 48%, rgb(80, 29, 97) 100%)'
            } : {
              background: 'linear-gradient(167.67deg, rgb(118, 32, 205) 0%, rgb(136, 34, 170) 48%, rgb(80, 29, 97) 100%)'
            }}
          >
            <Upload className="w-[24px] h-[24px]" />
            Upload to start
          </button>
        </div>
      </div>
    </div>
  );
}