import { createContext, useContext, useState, ReactNode } from 'react';
import { VTS_TOWER_BUILDING_DOCUMENTS, type BuildingDocument } from '../data/buildingDocuments';

interface BuildingDocumentsContextType {
  buildingDocuments: BuildingDocument[];
  addBuildingDocument: (document: BuildingDocument) => void;
  addBuildingDocuments: (documents: BuildingDocument[]) => void;
  getBuildingDocumentsByAsset: (assetId: string) => BuildingDocument[];
}

const BuildingDocumentsContext = createContext<BuildingDocumentsContextType | undefined>(undefined);

export function BuildingDocumentsProvider({ children }: { children: ReactNode }) {
  // Initialize with VTS Tower documents
  const [buildingDocuments, setBuildingDocuments] = useState<BuildingDocument[]>(VTS_TOWER_BUILDING_DOCUMENTS);

  const addBuildingDocument = (document: BuildingDocument) => {
    setBuildingDocuments(prev => [...prev, document]);
  };

  const addBuildingDocuments = (documents: BuildingDocument[]) => {
    setBuildingDocuments(prev => [...prev, ...documents]);
  };

  const getBuildingDocumentsByAsset = (assetId: string) => {
    return buildingDocuments.filter(doc => doc.assetId === assetId);
  };

  return (
    <BuildingDocumentsContext.Provider 
      value={{ 
        buildingDocuments, 
        addBuildingDocument, 
        addBuildingDocuments,
        getBuildingDocumentsByAsset 
      }}
    >
      {children}
    </BuildingDocumentsContext.Provider>
  );
}

export function useBuildingDocuments() {
  const context = useContext(BuildingDocumentsContext);
  if (context === undefined) {
    throw new Error('useBuildingDocuments must be used within a BuildingDocumentsProvider');
  }
  return context;
}
