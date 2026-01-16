import { useState, useEffect, useRef } from 'react';
import { Search, X, Building2, Users, FileText, File } from 'lucide-react';
import { MOCK_ASSETS, MOCK_TENANTS, MOCK_LEASES, MOCK_DOCUMENTS } from '../data/searchData';
import type { Asset, Tenant, Lease, Document } from '../data/searchData';

interface GlobalSearchProps {
  isOpen: boolean;
  onClose: () => void;
}

type SearchCategory = 'all' | 'assets' | 'tenants' | 'leases' | 'documents';

interface SearchResults {
  assets: Asset[];
  tenants: Tenant[];
  leases: Lease[];
  documents: Document[];
}

export default function GlobalSearch({ isOpen, onClose }: GlobalSearchProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeTab, setActiveTab] = useState<SearchCategory>('all');
  const [results, setResults] = useState<SearchResults>({
    assets: [],
    tenants: [],
    leases: [],
    documents: [],
  });
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen) {
      inputRef.current?.focus();
      setSearchQuery('');
      setActiveTab('all');
    }
  }, [isOpen]);

  useEffect(() => {
    if (searchQuery.length >= 3) {
      performSearch(searchQuery);
    } else {
      setResults({
        assets: [],
        tenants: [],
        leases: [],
        documents: [],
      });
    }
  }, [searchQuery]);

  const performSearch = (query: string) => {
    const lowerQuery = query.toLowerCase();

    const filteredAssets = MOCK_ASSETS.filter(
      (asset) =>
        asset.name.toLowerCase().includes(lowerQuery) ||
        asset.address.toLowerCase().includes(lowerQuery) ||
        asset.city.toLowerCase().includes(lowerQuery) ||
        asset.state.toLowerCase().includes(lowerQuery)
    );

    const filteredTenants = MOCK_TENANTS.filter(
      (tenant) =>
        tenant.name.toLowerCase().includes(lowerQuery) ||
        tenant.industry.toLowerCase().includes(lowerQuery) ||
        tenant.contact.toLowerCase().includes(lowerQuery)
    );

    const filteredLeases = MOCK_LEASES.filter(
      (lease) =>
        lease.tenant.toLowerCase().includes(lowerQuery) ||
        lease.asset.toLowerCase().includes(lowerQuery) ||
        lease.status.toLowerCase().includes(lowerQuery)
    );

    const filteredDocuments = MOCK_DOCUMENTS.filter(
      (doc) =>
        doc.name.toLowerCase().includes(lowerQuery) ||
        doc.relatedTo.toLowerCase().includes(lowerQuery) ||
        doc.category.toLowerCase().includes(lowerQuery)
    );

    setResults({
      assets: filteredAssets,
      tenants: filteredTenants,
      leases: filteredLeases,
      documents: filteredDocuments,
    });
  };

  const handleResultClick = (type: string, id: string) => {
    console.log(`Navigate to ${type}:`, id);
    // TODO: Navigation logic will be implemented later
    onClose();
  };

  const getTotalResults = () => {
    return results.assets.length + results.tenants.length + results.leases.length + results.documents.length;
  };

  const hasResults = getTotalResults() > 0;
  const showEmptyState = searchQuery.length >= 3 && !hasResults;

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/50" onClick={onClose}>
      <div className="flex justify-center pt-[80px]">
        <div
          className="w-[800px] bg-white rounded-[8px] shadow-[0px_4px_20px_rgba(0,0,0,0.2)] overflow-hidden"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Search Input */}
          <div className="h-[48px] border-b border-[#ecedef] px-[12px] flex items-center gap-[8px]">
            <Search className="w-4 h-4 text-[#72777e]" />
            <input
              ref={inputRef}
              type="text"
              placeholder="Search assets, tenants, leases, documents..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="flex-1 text-[12px] font-['Inter:Regular',sans-serif] text-[#1d1e20] placeholder:text-[#bbbfc4] outline-none"
            />
            {searchQuery && (
              <button onClick={() => setSearchQuery('')} className="p-1 hover:bg-gray-100 rounded">
                <X className="w-4 h-4 text-[#72777e]" />
              </button>
            )}
            <button onClick={onClose} className="text-[#72777e] text-[12px] font-['Inter:Regular',sans-serif]">
              ESC
            </button>
          </div>

          {/* Tabs */}
          {searchQuery.length >= 3 && hasResults && (
            <div className="h-[44px] border-b border-[#ecedef] px-[16px] flex items-center gap-[24px]">
              <button
                onClick={() => setActiveTab('all')}
                className={`text-[14px] font-['Inter:Semi_Bold',sans-serif] pb-[12px] border-b-2 transition-colors ${
                  activeTab === 'all'
                    ? 'border-[#4837b9] text-[#4837b9]'
                    : 'border-transparent text-[#72777e] hover:text-[#1d1e20]'
                }`}
              >
                All ({getTotalResults()})
              </button>
              {results.assets.length > 0 && (
                <button
                  onClick={() => setActiveTab('assets')}
                  className={`text-[14px] font-['Inter:Semi_Bold',sans-serif] pb-[12px] border-b-2 transition-colors ${
                    activeTab === 'assets'
                      ? 'border-[#4837b9] text-[#4837b9]'
                      : 'border-transparent text-[#72777e] hover:text-[#1d1e20]'
                  }`}
                >
                  Assets ({results.assets.length})
                </button>
              )}
              {results.tenants.length > 0 && (
                <button
                  onClick={() => setActiveTab('tenants')}
                  className={`text-[14px] font-['Inter:Semi_Bold',sans-serif] pb-[12px] border-b-2 transition-colors ${
                    activeTab === 'tenants'
                      ? 'border-[#4837b9] text-[#4837b9]'
                      : 'border-transparent text-[#72777e] hover:text-[#1d1e20]'
                  }`}
                >
                  Tenants ({results.tenants.length})
                </button>
              )}
              {results.leases.length > 0 && (
                <button
                  onClick={() => setActiveTab('leases')}
                  className={`text-[14px] font-['Inter:Semi_Bold',sans-serif] pb-[12px] border-b-2 transition-colors ${
                    activeTab === 'leases'
                      ? 'border-[#4837b9] text-[#4837b9]'
                      : 'border-transparent text-[#72777e] hover:text-[#1d1e20]'
                  }`}
                >
                  Leases ({results.leases.length})
                </button>
              )}
              {results.documents.length > 0 && (
                <button
                  onClick={() => setActiveTab('documents')}
                  className={`text-[14px] font-['Inter:Semi_Bold',sans-serif] pb-[12px] border-b-2 transition-colors ${
                    activeTab === 'documents'
                      ? 'border-[#4837b9] text-[#4837b9]'
                      : 'border-transparent text-[#72777e] hover:text-[#1d1e20]'
                  }`}
                >
                  Documents ({results.documents.length})
                </button>
              )}
            </div>
          )}

          {/* Results */}
          <div className="max-h-[500px] overflow-y-auto">
            {/* Empty State */}
            {showEmptyState && (
              <div className="py-[48px] px-[24px] text-center">
                <p className="text-[#72777e] text-[14px] font-['Inter:Regular',sans-serif]">
                  No results found for "{searchQuery}"
                </p>
              </div>
            )}

            {/* Minimum characters message */}
            {searchQuery.length > 0 && searchQuery.length < 3 && (
              <div className="py-[48px] px-[24px] text-center">
                <p className="text-[#72777e] text-[14px] font-['Inter:Regular',sans-serif]">
                  Type at least 3 characters to search
                </p>
              </div>
            )}

            {/* Assets Results */}
            {searchQuery.length >= 3 && hasResults && (activeTab === 'all' || activeTab === 'assets') && results.assets.length > 0 && (
              <div className="border-b border-[#ecedef]">
                <div className="px-[16px] py-[12px] bg-[#f9fafa]">
                  <p className="text-[#72777e] text-[12px] font-['Inter:Bold',sans-serif] font-bold uppercase tracking-[0.5px]">
                    ASSETS
                  </p>
                </div>
                {results.assets.map((asset) => (
                  <div
                    key={asset.id}
                    onClick={() => handleResultClick('asset', asset.id)}
                    className="px-[16px] py-[12px] hover:bg-[#f9fafa] cursor-pointer transition-colors border-b border-[#ecedef] last:border-b-0"
                  >
                    <div className="flex items-center gap-[12px]">
                      <div className="w-[40px] h-[40px] bg-[#4837b9] rounded-[4px] flex items-center justify-center shrink-0">
                        <Building2 className="w-5 h-5 text-white" />
                      </div>
                      <div className="flex-1">
                        <p className="text-[#1d1e20] text-[14px] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[20px]">
                          {asset.name}
                        </p>
                        <p className="text-[#72777e] text-[12px] font-['Inter:Regular',sans-serif] leading-[16px]">
                          {asset.address}, {asset.city}, {asset.state} {asset.zip}
                        </p>
                      </div>
                      {asset.badge && (
                        <div className="w-[32px] h-[32px] bg-[#ecedef] rounded-full flex items-center justify-center">
                          <p className="text-[#1d1e20] text-[12px] font-['Inter:Semi_Bold',sans-serif] font-semibold">
                            {asset.badge}
                          </p>
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* Tenants Results */}
            {searchQuery.length >= 3 && hasResults && (activeTab === 'all' || activeTab === 'tenants') && results.tenants.length > 0 && (
              <div className="border-b border-[#ecedef]">
                <div className="px-[16px] py-[12px] bg-[#f9fafa]">
                  <p className="text-[#72777e] text-[12px] font-['Inter:Bold',sans-serif] font-bold uppercase tracking-[0.5px]">
                    TENANTS
                  </p>
                </div>
                {results.tenants.map((tenant) => (
                  <div
                    key={tenant.id}
                    onClick={() => handleResultClick('tenant', tenant.id)}
                    className="px-[16px] py-[12px] hover:bg-[#f9fafa] cursor-pointer transition-colors border-b border-[#ecedef] last:border-b-0"
                  >
                    <div className="flex items-center gap-[12px]">
                      <div className="w-[40px] h-[40px] bg-[#1d1e20] rounded-full flex items-center justify-center shrink-0">
                        <p className="text-white text-[16px] font-['Inter:Semi_Bold',sans-serif] font-semibold">
                          {tenant.name.charAt(0)}
                        </p>
                      </div>
                      <div className="flex-1">
                        <p className="text-[#1d1e20] text-[14px] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[20px]">
                          {tenant.name}
                        </p>
                        <p className="text-[#72777e] text-[12px] font-['Inter:Regular',sans-serif] leading-[16px]">
                          {tenant.industry} • {tenant.contact}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* Leases Results */}
            {searchQuery.length >= 3 && hasResults && (activeTab === 'all' || activeTab === 'leases') && results.leases.length > 0 && (
              <div className="border-b border-[#ecedef]">
                <div className="px-[16px] py-[12px] bg-[#f9fafa]">
                  <p className="text-[#72777e] text-[12px] font-['Inter:Bold',sans-serif] font-bold uppercase tracking-[0.5px]">
                    LEASES
                  </p>
                </div>
                {results.leases.map((lease) => (
                  <div
                    key={lease.id}
                    onClick={() => handleResultClick('lease', lease.id)}
                    className="px-[16px] py-[12px] hover:bg-[#f9fafa] cursor-pointer transition-colors border-b border-[#ecedef] last:border-b-0"
                  >
                    <div className="flex items-center gap-[12px]">
                      <div className="w-[40px] h-[40px] bg-[#ffb200] rounded-full flex items-center justify-center shrink-0">
                        <FileText className="w-5 h-5 text-white" />
                      </div>
                      <div className="flex-1">
                        <p className="text-[#1d1e20] text-[14px] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[20px]">
                          {lease.tenant} • {lease.asset}
                        </p>
                        <p className="text-[#72777e] text-[12px] font-['Inter:Regular',sans-serif] leading-[16px]">
                          {lease.sqft.toLocaleString()} sf • {lease.status} • {new Date(lease.startDate).toLocaleDateString()} - {new Date(lease.endDate).toLocaleDateString()}
                        </p>
                      </div>
                      <div className="px-[8px] py-[4px] bg-[#e6f4ea] rounded-[4px]">
                        <p className="text-[#137333] text-[11px] font-['Inter:Semi_Bold',sans-serif] font-semibold">
                          {lease.status}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* Documents Results */}
            {searchQuery.length >= 3 && hasResults && (activeTab === 'all' || activeTab === 'documents') && results.documents.length > 0 && (
              <div>
                <div className="px-[16px] py-[12px] bg-[#f9fafa]">
                  <p className="text-[#72777e] text-[12px] font-['Inter:Bold',sans-serif] font-bold uppercase tracking-[0.5px]">
                    DOCUMENTS
                  </p>
                </div>
                {results.documents.map((doc) => (
                  <div
                    key={doc.id}
                    onClick={() => handleResultClick('document', doc.id)}
                    className="px-[16px] py-[12px] hover:bg-[#f9fafa] cursor-pointer transition-colors border-b border-[#ecedef] last:border-b-0"
                  >
                    <div className="flex items-center gap-[12px]">
                      <div className="w-[40px] h-[40px] bg-[#ea4335] rounded-[4px] flex items-center justify-center shrink-0">
                        <File className="w-5 h-5 text-white" />
                      </div>
                      <div className="flex-1">
                        <p className="text-[#1d1e20] text-[14px] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[20px]">
                          {doc.name}
                        </p>
                        <p className="text-[#72777e] text-[12px] font-['Inter:Regular',sans-serif] leading-[16px]">
                          {doc.category} • {doc.relatedTo} • {doc.size}
                        </p>
                      </div>
                      <div className="px-[8px] py-[4px] bg-[#ecedef] rounded-[4px]">
                        <p className="text-[#72777e] text-[11px] font-['Inter:Semi_Bold',sans-serif] font-semibold">
                          {doc.type}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
