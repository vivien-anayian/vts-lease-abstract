import { createContext, useContext, useState, ReactNode } from 'react';

interface AssetContextType {
  selectedAssetId: string | null;
  setSelectedAssetId: (id: string | null) => void;
}

const AssetContext = createContext<AssetContextType | undefined>(undefined);

export function AssetProvider({ children }: { children: ReactNode }) {
  const [selectedAssetId, setSelectedAssetId] = useState<string | null>(null);
  
  return (
    <AssetContext.Provider value={{ selectedAssetId, setSelectedAssetId }}>
      {children}
    </AssetContext.Provider>
  );
}

export function useAsset() {
  const context = useContext(AssetContext);
  if (!context) {
    throw new Error('useAsset must be used within AssetProvider');
  }
  return context;
}
