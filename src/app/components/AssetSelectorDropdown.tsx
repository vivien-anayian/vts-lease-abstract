import { useState } from 'react';
import { Search, X, Check, Building2, Plus, ChevronRight } from 'lucide-react';
import { MOCK_ASSETS } from '../data/searchData';
import { useAsset } from '../context/AssetContext';

export default function AssetSelectorDropdown() {
  const { selectedAssetId, setSelectedAssetId } = useAsset();
  const [isOpen, setIsOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const selectedAsset = selectedAssetId 
    ? MOCK_ASSETS.find(a => a.id === selectedAssetId) 
    : null;

  const displayText = selectedAsset ? selectedAsset.name : 'All assets';
  const displaySubtext = selectedAsset 
    ? `${selectedAsset.address}`
    : `${MOCK_ASSETS.length} assets`;

  const filteredAssets = MOCK_ASSETS.filter(asset =>
    asset.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    asset.address.toLowerCase().includes(searchQuery.toLowerCase()) ||
    asset.city.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleSelectAsset = (assetId: string | null) => {
    setSelectedAssetId(assetId);
    setIsOpen(false);
    setSearchQuery('');
  };

  return (
    <>
      {/* Trigger: Asset Card */}
      <div
        onClick={() => setIsOpen(!isOpen)}
        className="relative h-[136px] w-[192px] rounded-[8px] overflow-hidden shadow-[0px_0px_10px_0px_rgba(0,0,0,0.2)] cursor-pointer hover:brightness-105 transition-all"
      >
        <div className="absolute inset-0 bg-[#013c3c]" />
        <img 
          alt={displayText}
          className="absolute inset-0 w-full h-full object-cover opacity-60 mix-blend-multiply" 
          src="https://images.unsplash.com/photo-1560922604-d08a31f8f7d1?w=400"
        />
        <div className="absolute bottom-[16px] left-[16px] right-[16px]">
          <p className="text-white text-[14px] font-semibold leading-[20px] mb-0.5">
            {displayText}
          </p>
          <p className="text-[#ecedef] text-[12px] leading-[16px]">
            {displaySubtext}
          </p>
        </div>
        <div className="absolute right-[12px] bottom-[12px]">
          <ChevronRight className="w-5 h-5 text-white" strokeWidth={2} />
        </div>
      </div>

      {/* Flyout Panel */}
      {isOpen && (
        <>
          {/* Backdrop overlay */}
          <div 
            className="fixed inset-0 z-40"
            onClick={() => setIsOpen(false)}
          />
          
          {/* Panel */}
          <div className="fixed left-[224px] top-[48px] w-[380px] bg-white rounded-r-lg shadow-[4px_0px_20px_0px_rgba(0,0,0,0.15)] border-r border-t border-b border-[#e5e7eb] z-50 h-[calc(100vh-48px)] flex flex-col">
            {/* Header */}
            <div className="px-4 py-3 border-b border-[#e5e7eb]">
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-[16px] font-semibold text-[#1d1e20]">
                  Select Asset
                </h3>
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-1 hover:bg-[#f4f5f6] rounded transition-colors"
                >
                  <X className="w-5 h-5 text-[#72777e]" />
                </button>
              </div>

              {/* Search Input */}
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#72777e]" />
                <input
                  type="text"
                  placeholder="Search portfolios or assets"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full h-10 pl-10 pr-3 border border-[#d6d8db] rounded-[6px] text-[14px] text-[#1d1e20] placeholder:text-[#bbbfc4] focus:outline-none focus:border-[#4837b9] focus:ring-1 focus:ring-[#4837b9]"
                />
              </div>
            </div>

            {/* Scrollable Content */}
            <div className="flex-1 overflow-y-auto">
              {/* Portfolios Section */}
              <div className="px-4 py-4 border-b border-[#e5e7eb]">
                <div className="flex items-center justify-between mb-3">
                  <p className="text-[#72777e] text-[11px] font-bold tracking-[0.5px] uppercase">
                    PORTFOLIOS
                  </p>
                  <button className="p-1 hover:bg-[#f4f5f6] rounded transition-colors">
                    <Plus className="w-4 h-4 text-[#72777e]" />
                  </button>
                </div>
                <div className="text-[13px] text-[#bbbfc4]">
                  No saved portfolios to show
                </div>
              </div>

              {/* Assets Section */}
              <div className="px-4 py-4">
                <div className="flex items-center justify-between mb-3">
                  <p className="text-[#72777e] text-[11px] font-bold tracking-[0.5px] uppercase">
                    ASSETS
                  </p>
                  <label className="flex items-center gap-2 cursor-not-allowed opacity-50">
                    <span className="text-[12px] text-[#72777e]">
                      Multi-select
                    </span>
                    <div className="relative inline-block w-9 h-5">
                      <input
                        type="checkbox"
                        disabled
                        className="sr-only"
                      />
                      <div className="w-9 h-5 bg-[#e5e7eb] rounded-full"></div>
                      <div className="absolute left-0.5 top-0.5 w-4 h-4 bg-white rounded-full transition-transform"></div>
                    </div>
                  </label>
                </div>

                {/* "All Assets" Option */}
                <button
                  onClick={() => handleSelectAsset(null)}
                  className="w-full flex items-center gap-3 px-3 py-3 hover:bg-[#f9fafa] rounded-[6px] transition-colors group"
                >
                  <div className="w-10 h-10 rounded-[6px] bg-[#013c3c] flex items-center justify-center flex-shrink-0">
                    <Building2 className="w-5 h-5 text-white" />
                  </div>
                  <div className="flex-1 text-left min-w-0">
                    <p className="text-[14px] font-semibold text-[#1d1e20] truncate">
                      All assets
                    </p>
                    <p className="text-[12px] text-[#72777e]">
                      {MOCK_ASSETS.length} buildings
                    </p>
                  </div>
                  {selectedAssetId === null && (
                    <Check className="w-5 h-5 text-[#4837b9] flex-shrink-0" strokeWidth={2.5} />
                  )}
                </button>

                {/* Individual Assets */}
                <div className="mt-2 space-y-1">
                  {filteredAssets.map((asset) => (
                    <button
                      key={asset.id}
                      onClick={() => handleSelectAsset(asset.id)}
                      className="w-full flex items-center gap-3 px-3 py-3 hover:bg-[#f9fafa] rounded-[6px] transition-colors group"
                    >
                      <div className="w-10 h-10 rounded-[6px] overflow-hidden bg-[#f4f5f6] flex-shrink-0">
                        <img
                          src={asset.image || "https://images.unsplash.com/photo-1560922604-d08a31f8f7d1?w=100"}
                          alt={asset.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="flex-1 text-left min-w-0">
                        <p className="text-[14px] font-semibold text-[#1d1e20] truncate">
                          {asset.name}
                        </p>
                        <p className="text-[12px] text-[#72777e] truncate">
                          {asset.address}
                        </p>
                      </div>
                      {selectedAssetId === asset.id && (
                        <Check className="w-5 h-5 text-[#4837b9] flex-shrink-0" strokeWidth={2.5} />
                      )}
                    </button>
                  ))}
                </div>

                {/* No Results */}
                {filteredAssets.length === 0 && (
                  <div className="text-center py-8">
                    <Building2 className="w-12 h-12 text-[#bbbfc4] mx-auto mb-2" />
                    <p className="text-[13px] text-[#72777e]">
                      No assets found
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
}
