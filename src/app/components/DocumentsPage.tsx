import { Search, Upload, ChevronRight, ChevronDown, Folder, Building2, MapPin, FileText, Users, Download, Clock, Eye, ChevronUp, ArrowUpDown, Plus, MoreVertical } from 'lucide-react';
import { useState, useEffect } from 'react';
import { useAsset } from '../context/AssetContext';
import { MOCK_ASSETS } from '../data/searchData';
import AssetSelectorDropdown from './AssetSelectorDropdown';
import ChatPanel from './ChatPanel';
import EmptyDocumentVault from './EmptyDocumentVault';
import Pagination from './Pagination';
import emptyVaultImage from "../../assets/84a9c299aeaebc7ec5a46f90e8b3cb22f6e047d7.png";
import {
  ASSET_DOCUMENTS,
  BUILDING_DOCUMENT_TYPES,
  TENANT_DOCUMENT_TYPES,
} from '../data/documentData';
import type { AssetDocuments, Document } from '../data/documentData';

interface DocumentsPageProps {
  onViewDocument: (leaseId: string) => void;
  onUploadLease?: (assetId?: string, tenantId?: string) => void;
  onNavigate?: (page: string) => void;
  onViewBuildingDocuments?: (assetId: string) => void;
  onViewBuildingDocument?: (documentId: string) => void;
}

// Extended asset data with document counts and last accessed dates
interface AssetWithDocuments {
  id: string;
  name: string;
  address: string;
  image?: string;
  documentCount: number;
  lastAccessed: string;
}

// Mock data with varied document counts including assets with 0 documents
const ASSETS_WITH_DOCS: AssetWithDocuments[] = [
  {
    id: 'a2',
    name: 'VTS Tower',
    address: '350 Fifth Avenue, New York, NY',
    image: 'https://images.unsplash.com/photo-1694702740570-0a31ee1525c7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBvZmZpY2UlMjBidWlsZGluZ3xlbnwxfHx8fDE3Njc4MjAzNDB8MA&ixlib=rb-4.1.0&q=80&w=400',
    documentCount: 42,
    lastAccessed: 'Today at 2:34 PM',
  },
  {
    id: 'a1',
    name: '100 North Tampa',
    address: '100 North Tampa Street, Tampa, FL',
    image: 'https://images.unsplash.com/photo-1580742432710-d3c3703559a9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx1cmJhbiUyMGNvbW1lcmNpYWwlMjBidWlsZGluZ3xlbnwxfHx8fDE3Njc4MTA1ODV8MA&ixlib=rb-4.1.0&q=80&w=400',
    documentCount: 128,
    lastAccessed: 'Yesterday at 10:15 AM',
  },
  {
    id: 'a4',
    name: 'Madison Square Plaza',
    address: '5 Madison Square, New York, NY',
    image: 'https://images.unsplash.com/photo-1745792820242-d5dcf7815967?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3Jwb3JhdGUlMjB0b3dlcnxlbnwxfHx8fDE3Njc4MzI2MjZ8MA&ixlib=rb-4.1.0&q=80&w=400',
    documentCount: 89,
    lastAccessed: 'Jan 7, 2025',
  },
  {
    id: 'a5',
    name: 'Central Plaza',
    address: '230 Park Avenue, New York, NY',
    image: 'https://images.unsplash.com/photo-1685211041228-5e7985ab3beb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaXR5JTIwc2t5c2NyYXBlcnxlbnwxfHx8fDE3Njc4MzA5ODd8MA&ixlib=rb-4.1.0&q=80&w=400',
    documentCount: 215,
    lastAccessed: 'Jan 5, 2025',
  },
  {
    id: 'a3',
    name: 'One East Broad',
    address: '1 East Broad Street, Columbus, OH',
    image: 'https://images.unsplash.com/photo-1542548824-309f951016d7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb21tZXJjaWFsJTIwc2t5c2NyYXBlcnxlbnwxfHx8fDE3Njc4MzI2MjV8MA&ixlib=rb-4.1.0&q=80&w=400',
    documentCount: 67,
    lastAccessed: 'Jan 3, 2025',
  },
  {
    id: 'a6',
    name: 'Harbor Point',
    address: '100 Harbor Boulevard, Boston, MA',
    image: 'https://images.unsplash.com/photo-1526642591341-bcfc36ffae2f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkb3dudG93biUyMG9mZmljZXxlbnwxfHx8fDE3Njc4MzI2Mjd8MA&ixlib=rb-4.1.0&q=80&w=400',
    documentCount: 154,
    lastAccessed: 'Dec 28, 2024',
  },
  {
    id: 'a7',
    name: 'Tech Center East',
    address: '1500 Mission Street, San Francisco, CA',
    image: 'https://images.unsplash.com/photo-1711720743865-10787dd6934a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnbGFzcyUyMG9mZmljZSUyMGJ1aWxkaW5nfGVufDF8fHx8MTc2Nzc5NDE0OHww&ixlib=rb-4.1.0&q=80&w=400',
    documentCount: 0,
    lastAccessed: 'Never',
  },
  {
    id: 'a8',
    name: 'Downtown Austin Tower',
    address: '500 Congress Avenue, Austin, TX',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb21tZXJjaWFsJTIwcmVhbCUyMGVzdGF0ZXxlbnwxfHx8fDE3Njc4MTQ0NzR8MA&ixlib=rb-4.1.0&q=80&w=400',
    documentCount: 93,
    lastAccessed: 'Dec 20, 2024',
  },
  {
    id: 'a9',
    name: 'River North Center',
    address: '350 North Orleans Street, Chicago, IL',
    image: 'https://images.unsplash.com/photo-1695067438561-75492f7b6a9c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBhcmNoaXRlY3R1cmUlMjBidWlsZGluZ3xlbnwxfHx8fDE3Njc3NjEzNDl8MA&ixlib=rb-4.1.0&q=80&w=400',
    documentCount: 178,
    lastAccessed: 'Dec 15, 2024',
  },
  {
    id: 'a10',
    name: 'Midtown Exchange',
    address: '2929 Peachtree Road, Atlanta, GA',
    image: 'https://images.unsplash.com/photo-1570545775790-4619939d7d50?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMHRvd2VyfGVufDF8fHx8MTc2NzgzMjYyOHww&ixlib=rb-4.1.0&q=80&w=400',
    documentCount: 0,
    lastAccessed: 'Never',
  },
  {
    id: 'a11',
    name: 'Skyline Plaza',
    address: '1800 Market Street, Philadelphia, PA',
    image: 'https://images.unsplash.com/photo-1694702740570-0a31ee1525c7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBvZmZpY2UlMjBidWlsZGluZ3xlbnwxfHx8fDE3Njc4MjAzNDB8MA&ixlib=rb-4.1.0&q=80&w=400',
    documentCount: 76,
    lastAccessed: 'Dec 10, 2024',
  },
  {
    id: 'a12',
    name: 'Gateway Center',
    address: '400 Liberty Avenue, Pittsburgh, PA',
    image: 'https://images.unsplash.com/photo-1580742432710-d3c3703559a9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx1cmJhbiUyMGNvbW1lcmNpYWwlMjBidWlsZGluZ3xlbnwxfHx8fDE3Njc4MTA1ODV8MA&ixlib=rb-4.1.0&q=80&w=400',
    documentCount: 112,
    lastAccessed: 'Dec 5, 2024',
  },
  {
    id: 'a13',
    name: 'Lakefront Tower',
    address: '875 North Michigan Avenue, Chicago, IL',
    image: 'https://images.unsplash.com/photo-1745792820242-d5dcf7815967?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3Jwb3JhdGUlMjB0b3dlcnxlbnwxfHx8fDE3Njc4MzI2MjZ8MA&ixlib=rb-4.1.0&q=80&w=400',
    documentCount: 145,
    lastAccessed: 'Nov 28, 2024',
  },
  {
    id: 'a14',
    name: 'Financial District Center',
    address: '555 California Street, San Francisco, CA',
    image: 'https://images.unsplash.com/photo-1685211041228-5e7985ab3beb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaXR5JTIwc2t5c2NyYXBlcnxlbnwxfHx8fDE3Njc4MzA5ODd8MA&ixlib=rb-4.1.0&q=80&w=400',
    documentCount: 198,
    lastAccessed: 'Nov 22, 2024',
  },
  {
    id: 'a15',
    name: 'Metro Square',
    address: '655 15th Street NW, Washington, DC',
    image: 'https://images.unsplash.com/photo-1542548824-309f951016d7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb21tZXJjaWFsJTIwc2t5c2NyYXBlcnxlbnwxfHx8fDE3Njc4MzI2MjV8MA&ixlib=rb-4.1.0&q=80&w=400',
    documentCount: 83,
    lastAccessed: 'Nov 15, 2024',
  },
  {
    id: 'a16',
    name: 'Ocean View Plaza',
    address: '1250 Broadway, Oakland, CA',
    image: 'https://images.unsplash.com/photo-1526642591341-bcfc36ffae2f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkb3dudG93biUyMG9mZmljZXxlbnwxfHx8fDE3Njc4MzI2Mjd8MA&ixlib=rb-4.1.0&q=80&w=400',
    documentCount: 67,
    lastAccessed: 'Nov 8, 2024',
  },
  {
    id: 'a17',
    name: 'Commerce Plaza',
    address: '2200 Ross Avenue, Dallas, TX',
    image: 'https://images.unsplash.com/photo-1711720743865-10787dd6934a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnbGFzcyUyMG9mZmljZSUyMGJ1aWxkaW5nfGVufDF8fHx8MTc2Nzc5NDE0OHww&ixlib=rb-4.1.0&q=80&w=400',
    documentCount: 124,
    lastAccessed: 'Nov 1, 2024',
  },
  {
    id: 'a18',
    name: 'Riverside Center',
    address: '1100 West River Drive, Minneapolis, MN',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb21tZXJjaWFsJTIwcmVhbCUyMGVzdGF0ZXxlbnwxfHx8fDE3Njc4MTQ0NzR8MA&ixlib=rb-4.1.0&q=80&w=400',
    documentCount: 91,
    lastAccessed: 'Oct 25, 2024',
  },
  {
    id: 'a19',
    name: 'Capitol Heights',
    address: '300 Capitol Mall, Sacramento, CA',
    image: 'https://images.unsplash.com/photo-1695067438561-75492f7b6a9c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBhcmNoaXRlY3R1cmUlMjBidWlsZGluZ3xlbnwxfHx8fDE3Njc3NjEzNDl8MA&ixlib=rb-4.1.0&q=80&w=400',
    documentCount: 58,
    lastAccessed: 'Oct 18, 2024',
  },
  {
    id: 'a20',
    name: 'Parkside Tower',
    address: '700 Louisiana Street, Houston, TX',
    image: 'https://images.unsplash.com/photo-1570545775790-4619939d7d50?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMHRvd2VyfGVufDF8fHx8MTc2NzgzMjYyOHww&ixlib=rb-4.1.0&q=80&w=400',
    documentCount: 135,
    lastAccessed: 'Oct 12, 2024',
  },
  {
    id: 'a21',
    name: 'Innovation Hub',
    address: '2500 University Drive, Durham, NC',
    image: 'https://images.unsplash.com/photo-1694702740570-0a31ee1525c7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBvZmZpY2UlMjBidWlsZGluZ3xlbnwxfHx8fDE3Njc4MjAzNDB8MA&ixlib=rb-4.1.0&q=80&w=400',
    documentCount: 72,
    lastAccessed: 'Oct 5, 2024',
  },
  {
    id: 'a22',
    name: 'South Station Tower',
    address: '700 Atlantic Avenue, Boston, MA',
    image: 'https://images.unsplash.com/photo-1580742432710-d3c3703559a9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx1cmJhbiUyMGNvbW1lcmNpYWwlMjBidWlsZGluZ3xlbnwxfHx8fDE3Njc4MTA1ODV8MA&ixlib=rb-4.1.0&q=80&w=400',
    documentCount: 104,
    lastAccessed: 'Sep 28, 2024',
  },
  {
    id: 'a23',
    name: 'Uptown Plaza',
    address: '3500 Maple Avenue, Dallas, TX',
    image: 'https://images.unsplash.com/photo-1745792820242-d5dcf7815967?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3Jwb3JhdGUlMjB0b3dlcnxlbnwxfHx8fDE3Njc4MzI2MjZ8MA&ixlib=rb-4.1.0&q=80&w=400',
    documentCount: 88,
    lastAccessed: 'Sep 20, 2024',
  },
  {
    id: 'a24',
    name: 'Bayside Center',
    address: '1500 Biscayne Boulevard, Miami, FL',
    image: 'https://images.unsplash.com/photo-1685211041228-5e7985ab3beb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaXR5JTIwc2t5c2NyYXBlcnxlbnwxfHx8fDE3Njc4MzA5ODd8MA&ixlib=rb-4.1.0&q=80&w=400',
    documentCount: 156,
    lastAccessed: 'Sep 14, 2024',
  },
  {
    id: 'a25',
    name: 'Crossroads Plaza',
    address: '1200 Main Street, Kansas City, MO',
    image: 'https://images.unsplash.com/photo-1542548824-309f951016d7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb21tZXJjaWFsJTIwc2t5c2NyYXBlcnxlbnwxfHx8fDE3Njc4MzI2MjV8MA&ixlib=rb-4.1.0&q=80&w=400',
    documentCount: 95,
    lastAccessed: 'Sep 8, 2024',
  },
];

export default function DocumentsPage({ 
  onViewDocument, 
  onUploadLease, 
  onNavigate,
  onViewBuildingDocuments,
  onViewBuildingDocument
}: DocumentsPageProps) {
  const { selectedAssetId, setSelectedAssetId } = useAsset();
  const [searchQuery, setSearchQuery] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(25);
  const [tenantsPage, setTenantsPage] = useState(1);
  const [tenantsPerPage, setTenantsPerPage] = useState(25);
  const [buildingDocsPage, setBuildingDocsPage] = useState(1);
  const [buildingDocsPerPage, setBuildingDocsPerPage] = useState(25);
  const [activeTab, setActiveTab] = useState<'building' | 'tenants'>('tenants');
  const [expandedTenants, setExpandedTenants] = useState<Set<string>>(new Set());
  const [expandedCategories, setExpandedCategories] = useState<Set<string>>(new Set());
  const [tenantDocsPagination, setTenantDocsPagination] = useState<Record<string, { page: number; perPage: number }>>({});
  const [sortField, setSortField] = useState<'name' | 'category' | 'status' | 'uploadDate'>('uploadDate');
  const [sortDirection, setSortDirection] = useState<'asc' | 'desc'>('desc');

  // Get selected asset if any
  const selectedAsset = selectedAssetId 
    ? ASSET_DOCUMENTS.find(a => a.assetId === selectedAssetId)
    : null;

  // Check if selected asset has no documents
  const selectedAssetDocCount = selectedAsset 
    ? selectedAsset.tenants.reduce((sum, t) => sum + t.categories.reduce((catSum, c) => catSum + c.documents.length, 0), 0) + selectedAsset.buildingDocuments.length
    : 0;

  // Get asset name and details for empty state
  const selectedAssetDetails = selectedAssetId 
    ? ASSETS_WITH_DOCS.find(a => a.id === selectedAssetId)
    : null;

  // Filter assets based on search
  const filteredAssets = ASSETS_WITH_DOCS.filter(asset => {
    if (!searchQuery) return true;
    const query = searchQuery.toLowerCase();
    return (
      asset.name.toLowerCase().includes(query) ||
      asset.address.toLowerCase().includes(query)
    );
  });

  // Pagination logic for all assets view
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const displayedAssets = filteredAssets.slice(startIndex, endIndex);

  const handleAssetClick = (assetId: string, documentCount: number) => {
    // Always allow click for any asset
    setSelectedAssetId(assetId);
  };

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    // Scroll to top of page when changing pages
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleItemsPerPageChange = (newItemsPerPage: number) => {
    setItemsPerPage(newItemsPerPage);
    setCurrentPage(1); // Reset to first page when changing items per page
  };

  const handleTenantsPageChange = (page: number) => {
    setTenantsPage(page);
  };

  const handleTenantsPerPageChange = (newItemsPerPage: number) => {
    setTenantsPerPage(newItemsPerPage);
    setTenantsPage(1);
  };

  const handleBuildingDocsPageChange = (page: number) => {
    setBuildingDocsPage(page);
  };

  const handleBuildingDocsPerPageChange = (newItemsPerPage: number) => {
    setBuildingDocsPerPage(newItemsPerPage);
    setBuildingDocsPage(1);
  };

  // Reset to page 1 when search changes
  useEffect(() => {
    setCurrentPage(1);
    setTenantsPage(1);
    setBuildingDocsPage(1);
  }, [searchQuery]);

  // Reset tenant and building doc pages when switching tabs
  useEffect(() => {
    setTenantsPage(1);
    setBuildingDocsPage(1);
  }, [activeTab]);

  // Helper to get tenant document pagination state
  const getTenantDocsPagination = (tenantId: string) => {
    return tenantDocsPagination[tenantId] || { page: 1, perPage: 25 };
  };

  // Helper to update tenant document pagination
  const updateTenantDocsPagination = (tenantId: string, page: number, perPage?: number) => {
    setTenantDocsPagination(prev => ({
      ...prev,
      [tenantId]: {
        page,
        perPage: perPage ?? prev[tenantId]?.perPage ?? 25
      }
    }));
  };

  // Handle clicking on a tenant row - navigate to lease abstract
  const handleTenantClick = (tenantId: string) => {
    if (!selectedAsset) return;
    
    const tenant = selectedAsset.tenants.find(t => t.tenantId === tenantId);
    if (!tenant) return;
    
    // Find the first document with a leaseId
    let leaseId: string | undefined;
    for (const category of tenant.categories) {
      const docWithLease = category.documents.find(doc => doc.leaseId);
      if (docWithLease?.leaseId) {
        leaseId = docWithLease.leaseId;
        break;
      }
    }
    
    // If we found a leaseId, navigate to it
    if (leaseId) {
      onViewDocument(leaseId);
    }
  };

  // Handle clicking on a building document
  const handleBuildingDocClick = (doc: Document) => {
    // Always call the document preview callback, regardless of leaseId
    if (onViewBuildingDocument) {
      onViewBuildingDocument(doc.id);
    } else if (doc.leaseId) {
      // Fallback to lease view if callback not provided but has leaseId
      onViewDocument(doc.leaseId);
    }
  };

  // Filter tenants based on search (when in single asset view)
  const filteredTenants = selectedAsset?.tenants.filter(tenant => {
    if (!searchQuery) return true;
    const query = searchQuery.toLowerCase();
    // Search in tenant name
    if (tenant.tenantName.toLowerCase().includes(query)) return true;
    // Search in tenant documents
    for (const category of tenant.categories) {
      for (const doc of category.documents) {
        if (doc.name.toLowerCase().includes(query)) return true;
      }
    }
    return false;
  }) || [];

  // Paginate tenants
  const paginatedTenants = filteredTenants.slice(
    (tenantsPage - 1) * tenantsPerPage,
    tenantsPage * tenantsPerPage
  );

  // Filter building documents based on search (when in single asset view)
  const filteredBuildingDocs = selectedAsset?.buildingDocuments.filter(doc => {
    if (!searchQuery) return true;
    const query = searchQuery.toLowerCase();
    return doc.name.toLowerCase().includes(query);
  }) || [];

  // Sort building documents
  const sortedBuildingDocs = [...filteredBuildingDocs].sort((a, b) => {
    let comparison = 0;
    
    switch (sortField) {
      case 'name':
        comparison = a.name.localeCompare(b.name);
        break;
      case 'category':
        comparison = (a.category || '').localeCompare(b.category || '');
        break;
      case 'status':
        comparison = a.status.localeCompare(b.status);
        break;
      case 'uploadDate':
        comparison = new Date(a.uploadDate).getTime() - new Date(b.uploadDate).getTime();
        break;
    }
    
    return sortDirection === 'asc' ? comparison : -comparison;
  });

  // Paginate building documents
  const paginatedBuildingDocs = sortedBuildingDocs.slice(
    (buildingDocsPage - 1) * buildingDocsPerPage,
    buildingDocsPage * buildingDocsPerPage
  );

  // Handle sort column click
  const handleSort = (field: 'name' | 'category' | 'status' | 'uploadDate') => {
    if (sortField === field) {
      // Toggle direction if same field
      setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc');
    } else {
      // New field, default to ascending
      setSortField(field);
      setSortDirection('asc');
    }
  };

  // Auto-expand tenants and categories when search matches documents
  useEffect(() => {
    if (!searchQuery || !selectedAsset) return;

    const query = searchQuery.toLowerCase();
    const tenantsToExpand = new Set<string>();
    const categoriesToExpand = new Set<string>();

    // Find tenants with matching documents and auto-expand them
    selectedAsset.tenants.forEach(tenant => {
      let hasMatchingDoc = false;
      
      tenant.categories.forEach(category => {
        category.documents.forEach(doc => {
          if (doc.name.toLowerCase().includes(query)) {
            hasMatchingDoc = true;
            tenantsToExpand.add(tenant.tenantId);
            categoriesToExpand.add(`${tenant.tenantId}-${category.name}`);
          }
        });
      });
    });

    // Update expanded states
    if (tenantsToExpand.size > 0) {
      setExpandedTenants(tenantsToExpand);
    }
    if (categoriesToExpand.size > 0) {
      setExpandedCategories(categoriesToExpand);
    }
  }, [searchQuery, selectedAsset]);

  // Toggle tenant expand/collapse
  const toggleTenant = (tenantId: string) => {
    setExpandedTenants(prev => {
      const newSet = new Set(prev);
      if (newSet.has(tenantId)) {
        newSet.delete(tenantId);
      } else {
        newSet.add(tenantId);
      }
      return newSet;
    });
  };

  // Toggle category expand/collapse
  const toggleCategory = (categoryKey: string) => {
    setExpandedCategories(prev => {
      const newSet = new Set(prev);
      if (newSet.has(categoryKey)) {
        newSet.delete(categoryKey);
      } else {
        newSet.add(categoryKey);
      }
      return newSet;
    });
  };

  // Format file size
  const formatFileSize = (bytes: number) => {
    if (bytes < 1024) return bytes + ' B';
    if (bytes < 1024 * 1024) return (bytes / 1024).toFixed(1) + ' KB';
    return (bytes / (1024 * 1024)).toFixed(1) + ' MB';
  };

  // Get status badge color
  const getStatusBadgeClass = (status: string) => {
    switch (status) {
      case 'Expert verified':
        return 'bg-[#dcfce7] text-[#016630] border border-[#bbf7d0]';
      case 'AI Abstracted':
        return 'bg-[#dbeafe] text-[#1e40af] border border-[#bfdbfe]';
      case 'Processing':
        return 'bg-[#fef3c7] text-[#92400e] border border-[#fde68a]';
      case 'Pending human review':
        return 'bg-[#fef9c2] text-[#894b00] border border-[#fff085]';
      default:
        return 'bg-[#f3f4f6] text-[#6b7280] border border-[#e5e7eb]';
    }
  };

  return (
    <div className="min-h-screen w-full bg-[#f4f5f6]">
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
                <svg className="w-[23px] h-[23px] text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
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
            <div onClick={() => onNavigate?.('deals')} className="h-[36px] flex items-center pl-[24px] text-[#373a3e] text-[14px] font-['Inter:Regular',sans-serif] leading-[20px] cursor-pointer hover:bg-[#ecedef] transition-colors">
              Deals
            </div>
            <div onClick={() => onNavigate?.('deals')} className="h-[36px] flex items-center pl-[24px] text-[#373a3e] text-[#373a3e] text-[14px] font-['Inter:Regular',sans-serif] leading-[20px] cursor-pointer hover:bg-[#ecedef] transition-colors">
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
            <div className="h-[36px] flex items-center pl-[24px] bg-[#ecedef] border-l-4 border-[#4837b9] text-[#1d1e20] text-[14px] font-['Inter:Regular',sans-serif] leading-[20px] cursor-pointer relative">
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

      {/* Main Content Area */}
      <div className="ml-[224px] pt-[32px]">
        {!selectedAssetId ? (
          /* VAULT VIEW: Show all assets */
          <div className="flex justify-center py-[24px] px-[32px]">
            <div className="w-full max-w-[800px]">
              {/* Breadcrumb */}
              <div className="flex items-center gap-2 py-[8px] text-[13px] font-['Inter:Regular',sans-serif]">
                <span className="text-[#4837b9] cursor-default">
                  VTS Lease
                </span>
                <span className="text-[#99a1af]">{'>'}</span>
                <span className="text-[#1d1e20]">
                  Documents
                </span>
              </div>

              {/* Header with Icon */}
              <div className="mb-[16px] mt-[32px]">
                <h1 className="text-[28px] font-['Inter:Bold',sans-serif] text-[#1d1e20] mb-[8px]">
                  Document Vault
                </h1>
                <p className="text-[14px] font-['Inter:Regular',sans-serif] text-[#72777e] leading-[21px]">
                  Access, organize, and manage all your lease documentation in one secure place.
                </p>
              </div>

              {/* Search Bar */}
              <div className="mb-[8px]">
                <div className="relative">
                  <Search className="absolute left-[12px] top-1/2 -translate-y-1/2 w-4 h-4 text-[#72777e]" />
                  <input
                    type="text"
                    placeholder="Search by building name or address..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full h-[40px] pl-[36px] pr-[12px] bg-white border border-[#d6d8db] rounded-[8px] text-[12px] font-['Inter:Regular',sans-serif] text-[#1d1e20] placeholder:text-[#bbbfc4] focus:outline-none focus:ring-2 focus:ring-[#4837b9] focus:border-transparent"
                  />
                </div>
              </div>

              {/* Assets List */}
              <div className="space-y-0 mb-[24px]">{displayedAssets.map((asset, index) => {
                
                return (
                  <div
                    key={asset.id}
                    onClick={() => handleAssetClick(asset.id, asset.documentCount)}
                    className="flex items-center gap-[12px] py-[4px] px-[12px] bg-white rounded-[12px] border border-[#e5e7eb] cursor-pointer hover:bg-[#fafbfc] transition-colors"
                  >
                    {/* Building Thumbnail */}
                    <div className="w-[32px] h-[32px] rounded-[6px] overflow-hidden bg-[#f4f5f6] flex-shrink-0">
                      {asset.image ? (
                        <img 
                          src={asset.image} 
                          alt={asset.name}
                          className="w-full h-full object-cover"
                        />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center bg-[#4837b9]">
                          <Folder className="w-4 h-4 text-white opacity-60" />
                        </div>
                      )}
                    </div>

                    {/* Building Info */}
                    <div className="flex-1 min-w-0">
                      <h3 className="text-[14px] font-['Inter:SemiBold',sans-serif] text-[#1d1e20] mb-[2px] truncate">
                        {asset.name}
                      </h3>
                      <p className="text-[12px] font-['Inter:Regular',sans-serif] text-[#72777e] truncate">
                        {asset.address}
                      </p>
                    </div>

                    {/* Document Count */}
                    <div className="text-right flex-shrink-0 mr-[8px]">
                      <p className={`text-[14px] font-['Inter:SemiBold',sans-serif] ${
                        asset.documentCount === 0 ? 'text-[#bbbfc4]' : 'text-[#1d1e20]'
                      }`}>
                        {asset.documentCount} files
                      </p>
                    </div>

                    {/* Chevron */}
                    <ChevronRight className={`w-4 h-4 flex-shrink-0 ${
                      asset.documentCount > 0 ? 'text-[#bbbfc4]' : 'text-[#e5e7eb]'
                    }`} />
                  </div>
                );
              })}</div>

              {/* Empty State */}
              {filteredAssets.length === 0 && searchQuery && (
                <div className="py-[80px] text-center">
                  <Folder className="w-16 h-16 text-[#d0d9e1] mx-auto mb-[16px]" />
                  <p className="text-[16px] font-['Inter:Medium',sans-serif] text-[#72777e] mb-[8px]">
                    No assets found
                  </p>
                  <p className="text-[14px] font-['Inter:Regular',sans-serif] text-[#bbbfc4]">
                    Try adjusting your search query
                  </p>
                </div>
              )}
              
              {/* First Time User Empty State */}
              {filteredAssets.length === 0 && !searchQuery && (
                <div className="py-[80px]">
                  <div className="max-w-[560px] mx-auto text-center">
                    {/* Empty Vault Illustration */}
                    <div className="mb-[32px] flex justify-center">
                      <img 
                        src={emptyVaultImage} 
                        alt="Empty Document Vault" 
                        className="w-[240px] h-auto"
                      />
                    </div>
                    
                    {/* Heading */}
                    <h2 className="text-[28px] font-['Inter:Bold',sans-serif] text-[#1d1e20] mb-[12px]">
                      Your Document Vault is Empty
                    </h2>
                    <p className="text-[15px] font-['Inter:Regular',sans-serif] text-[#72777e] leading-[22px] mb-[40px]">
                      Start by uploading your lease documents. Our team and AI will help<br />
                      organize and extract key data for you.
                    </p>
                    
                    {/* Steps */}
                    <div className="grid grid-cols-3 gap-[32px] mb-[40px]">
                      <div>
                        <div className="text-[40px] font-['Inter:Bold',sans-serif] text-[#4837b9] mb-[12px]">
                          1
                        </div>
                        <h3 className="text-[16px] font-['Inter:SemiBold',sans-serif] text-[#1d1e20] mb-[8px]">
                          Upload your first lease
                        </h3>
                        <p className="text-[13px] font-['Inter:Regular',sans-serif] text-[#72777e] leading-[19px]">
                          PDF, Word, or scanned images are all supported.
                        </p>
                      </div>
                      <div>
                        <div className="text-[40px] font-['Inter:Bold',sans-serif] text-[#4837b9] mb-[12px]">
                          2
                        </div>
                        <h3 className="text-[16px] font-['Inter:SemiBold',sans-serif] text-[#1d1e20] mb-[8px]">
                          AI & Humans abstraction
                        </h3>
                        <p className="text-[13px] font-['Inter:Regular',sans-serif] text-[#72777e] leading-[19px]">
                          We extract leases, rent, and clauses with 99% accuracy.
                        </p>
                      </div>
                      <div>
                        <div className="text-[40px] font-['Inter:Bold',sans-serif] text-[#4837b9] mb-[12px]">
                          3
                        </div>
                        <h3 className="text-[16px] font-['Inter:SemiBold',sans-serif] text-[#1d1e20] mb-[8px]">
                          Explore insights
                        </h3>
                        <p className="text-[13px] font-['Inter:Regular',sans-serif] text-[#72777e] leading-[19px]">
                          Visualize your portfolio and engage with AI dashboards.
                        </p>
                      </div>
                    </div>
                    
                    {/* Upload Button */}
                    <button 
                      onClick={() => onUploadLease?.()}
                      className="inline-flex items-center gap-[10px] px-[28px] h-[48px] bg-[#4837b9] hover:bg-[#3a2b94] text-white rounded-[8px] text-[15px] font-['Inter:SemiBold',sans-serif] transition-colors mb-[16px]"
                    >
                      <Upload className="w-5 h-5" />
                      Upload document(s)
                    </button>
                    
                    {/* Security Note */}
                    <p className="text-[12px] font-['Inter:Regular',sans-serif] text-[#99a1af] flex items-center justify-center gap-[6px]">
                      <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 16 16">
                        <path d="M8 1a2 2 0 0 1 2 2v4H6V3a2 2 0 0 1 2-2zm3 6V3a3 3 0 0 0-6 0v4a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2z"/>
                      </svg>
                      All documents are encrypted and stored securely
                    </p>
                  </div>
                </div>
              )}

              {/* Pagination */}
              {filteredAssets.length > 0 && (
                <Pagination
                  currentPage={currentPage}
                  totalItems={filteredAssets.length}
                  itemsPerPage={itemsPerPage}
                  onPageChange={handlePageChange}
                  onItemsPerPageChange={handleItemsPerPageChange}
                />
              )}
            </div>
          </div>
        ) : (!selectedAsset || selectedAssetDocCount === 0) ? (
          /* EMPTY ASSET VIEW: Show empty document vault for asset with no documents */
          <div className="flex h-[calc(100vh-48px)]">
            {/* Main Content Area */}
            <div className="flex-1 overflow-y-auto flex flex-col">
              <div className="px-[48px] py-[40px]">
                {/* Breadcrumb */}
                <div className="flex items-center gap-2 py-[8px] text-[13px] font-['Inter:Regular',sans-serif]">
                  <span className="text-[#4837b9] cursor-default">
                    VTS Lease
                  </span>
                  <span className="text-[#99a1af]">{'>'}</span>
                  <span 
                    onClick={() => setSelectedAssetId(null)}
                    className="text-[#4837b9] hover:text-[#3a2b94] cursor-pointer transition-colors"
                  >
                    Documents
                  </span>
                  <span className="text-[#99a1af]">{'>'}</span>
                  <span className="text-[#1d1e20]">
                    {selectedAssetDetails?.name || 'Asset'}
                  </span>
                </div>

                {/* Page Header */}
                <h1 className="text-[36px] font-bold font-['Inter:Bold',sans-serif] text-[#0a0d14] mb-[32px] leading-tight">
                  {selectedAssetDetails?.name || 'Asset'}
                </h1>
              </div>

              {/* Empty Document Vault Component - Takes full remaining space */}
              <div className="flex-1">
                <EmptyDocumentVault 
                  assetName={selectedAssetDetails?.name || 'this asset'}
                  onUpload={() => onUploadLease?.(selectedAssetId)}
                />
              </div>
            </div>
            {/* Chat Panel on Right */}
            <div className="w-[400px] flex-shrink-0 h-full overflow-hidden">
              <ChatPanel />
            </div>
          </div>
        ) : (
          /* SINGLE ASSET VIEW: Show tenants and building documents */
          <div className="flex h-[calc(100vh-48px)]">
            {/* Main Content Area */}
            <div className="flex-1 overflow-y-auto">
              <div className="max-w-[1400px] mx-auto px-[48px] py-[24px]">
            {/* Breadcrumb */}
            <div className="flex items-center gap-2 py-[4px] text-[13px] font-['Inter:Regular',sans-serif]">
              <span className="text-[#4837b9] cursor-default">
                VTS Lease
              </span>
              <span className="text-[#99a1af]">{'>'}</span>
              <span 
                onClick={() => setSelectedAssetId(null)}
                className="text-[#4837b9] hover:text-[#3a2b94] cursor-pointer transition-colors"
              >
                Documents
              </span>
              <span className="text-[#99a1af]">{'>'}</span>
              <span className="text-[#1d1e20]">
                {selectedAsset.assetName}
              </span>
            </div>

            {/* Page Header */}
            <h1 className="text-[28px] font-['Inter:Bold',sans-serif] text-[#1d1e20] mb-[20px] mt-[12px]">
              {selectedAsset.assetName}
            </h1>

            {/* Search and Actions Bar */}
            <div className="flex items-center gap-[8px] mb-[20px]">
              {/* Search Input */}
              <div className="relative flex-1">
                <Search className="absolute left-[12px] top-1/2 -translate-y-1/2 w-4 h-4 text-[#72777e]" />
                <input
                  type="text"
                  placeholder="Search documents or tenants..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full h-[40px] pl-[36px] pr-[12px] bg-white border border-[#d0d9e1] rounded-[8px] text-[12px] font-['Inter:Regular',sans-serif] text-[#1d1e20] placeholder:text-[#99a1af] focus:outline-none focus:ring-2 focus:ring-[#4b7c7c] focus:border-transparent transition-all"
                />
              </div>

              {/* Download All Button */}
              <button className="px-[16px] h-[40px] bg-white border border-[#d0d9e1] rounded-[8px] text-[12px] font-['Inter:SemiBold',sans-serif] text-[#2d333a] hover:bg-[#f4f5f6] hover:border-[#4b7c7c] transition-all flex items-center gap-[6px]">
                <Download className="w-4 h-4" />
                Download all
              </button>

              {/* Upload Documents Button */}
              <button 
                onClick={() => onUploadLease?.(selectedAssetId)}
                className="px-[16px] h-[40px] bg-[#4837b9] rounded-[8px] text-white text-[12px] font-['Inter:SemiBold',sans-serif] hover:bg-[#3a2b94] transition-colors flex items-center gap-[6px]"
              >
                <Upload className="w-4 h-4" />
                Upload documents
              </button>
            </div>

            {/* Tab Navigation */}
            <div className="flex gap-[8px] border-b border-[#e5e7eb] mb-[20px]">
              <button
                onClick={() => setActiveTab('tenants')}
                className={`px-[4px] pb-[12px] text-[12px] font-['Inter:SemiBold',sans-serif] border-b-2 transition-all flex items-center gap-[6px] ${
                  activeTab === 'tenants'
                    ? 'border-[#4837b9] text-[#4837b9]'
                    : 'border-transparent text-[#72777e] hover:text-[#2d333a]'
                }`}
              >
                <span>Tenant documents</span>
                <span className={`text-[12px] font-['Inter:Regular',sans-serif] ${activeTab === 'tenants' ? 'text-[#99a1af]' : 'text-[#bbbfc4]'}`}>
                  {selectedAsset.tenants.reduce((sum, t) => sum + t.categories.reduce((catSum, c) => catSum + c.documents.length, 0), 0)}
                </span>
              </button>
              <button
                onClick={() => setActiveTab('building')}
                className={`px-[4px] pb-[12px] text-[12px] font-['Inter:SemiBold',sans-serif] border-b-2 transition-all flex items-center gap-[6px] ${
                  activeTab === 'building'
                    ? 'border-[#4837b9] text-[#4837b9]'
                    : 'border-transparent text-[#72777e] hover:text-[#2d333a]'
                }`}
              >
                <span>Building documents</span>
                <span className={`text-[12px] font-['Inter:Regular',sans-serif] ${activeTab === 'building' ? 'text-[#99a1af]' : 'text-[#bbbfc4]'}`}>
                  {selectedAsset.buildingDocuments.length}
                </span>
              </button>
            </div>

            {/* Tab Content */}
            {activeTab === 'tenants' ? (
              /* Tenants Tab - Expandable Hierarchy */
              <div className="space-y-[4px]">
                {filteredTenants.length > 0 ? (
                  <div className="space-y-[4px]">
                    {paginatedTenants.map((tenant) => {
                      const docCount = tenant.categories.reduce((sum, c) => sum + c.documents.length, 0);
                      const isExpanded = expandedTenants.has(tenant.tenantId);
                      
                      // Find if tenant has a lease
                      let hasLease = false;
                      for (const category of tenant.categories) {
                        const docWithLease = category.documents.find(doc => doc.leaseId);
                        if (docWithLease?.leaseId) {
                          hasLease = true;
                          break;
                        }
                      }
                      
                      return (
                        <div key={tenant.tenantId} className="bg-white rounded-[12px] border border-[#e5e7eb] overflow-hidden">
                          {/* Tenant Header */}
                          <div className="flex items-center justify-between py-[4px] px-[12px]">
                            <div className="flex items-center gap-[12px]">
                              {/* Expand/Collapse Button */}
                              <button 
                                onClick={() => toggleTenant(tenant.tenantId)}
                                className="p-[4px] hover:bg-[#f4f5f6] rounded-[4px] transition-colors"
                              >
                                {isExpanded ? (
                                  <ChevronDown className="w-3 h-3 text-[#72777e]" />
                                ) : (
                                  <ChevronRight className="w-3 h-3 text-[#72777e]" />
                                )}
                              </button>
                              
                              {/* Tenant Thumbnail or Brand Logo */}
                              {tenant.thumbnail ? (
                                <div className="w-[32px] h-[32px] rounded-[6px] overflow-hidden bg-[#f4f5f6] flex-shrink-0">
                                  <img 
                                    src={tenant.thumbnail} 
                                    alt={tenant.tenantName}
                                    className="w-full h-full object-cover"
                                  />
                                </div>
                              ) : (
                                <div 
                                  className="w-[32px] h-[32px] rounded-[6px] flex items-center justify-center font-semibold text-[11px] flex-shrink-0"
                                  style={{ backgroundColor: tenant.brandColor, color: tenant.textColor }}
                                >
                                  {tenant.logoText}
                                </div>
                              )}
                              
                              {/* Tenant Info */}
                              <div className="leading-tight">
                                <h3 className="text-[14px] font-semibold font-['Inter:SemiBold',sans-serif] text-[#0a0d14] mb-[2px]">
                                  {tenant.tenantName}
                                </h3>
                                <p className="text-[12px] font-['Inter:Regular',sans-serif] text-[#72777e]">
                                  Suite {Math.floor(Math.random() * 900) + 100} • {docCount} document{docCount !== 1 ? 's' : ''}
                                </p>
                              </div>
                            </div>
                            
                            {/* View Abstract Button */}
                            {hasLease && (
                              <button
                                onClick={(e) => {
                                  e.stopPropagation();
                                  handleTenantClick(tenant.tenantId);
                                }}
                                className="text-[12px] font-['Inter:SemiBold',sans-serif] text-[#2d333a] hover:text-[#4837b9] transition-all flex items-center gap-[4px]"
                              >
                                <Eye className="w-4 h-4" />
                                View abstract
                              </button>
                            )}
                          </div>

                          {/* Expanded Content */}
                          {isExpanded && (
                            <div className="border-t border-[#e5e7eb]">
                              {tenant.categories.map((category) => {
                                const categoryKey = `${tenant.tenantId}-${category.name}`;
                                const isCategoryExpanded = expandedCategories.has(categoryKey);
                                
                                return (
                                  <div key={categoryKey}>
                                    {/* Category Header */}
                                    <div 
                                      className="flex items-center justify-between px-[20px] py-[8px] cursor-pointer hover:bg-[#fafbfc] transition-colors border-b border-[#f4f5f6]"
                                      onClick={(e) => {
                                        e.stopPropagation();
                                        toggleCategory(categoryKey);
                                      }}
                                    >
                                      <div className="flex items-center gap-[8px]">
                                        <button className="p-[2px]">
                                          {isCategoryExpanded ? (
                                            <ChevronDown className="w-3 h-3 text-[#72777e]" />
                                          ) : (
                                            <ChevronRight className="w-3 h-3 text-[#72777e]" />
                                          )}
                                        </button>
                                        <Folder className="w-3 h-3 text-[#f59e0b]" />
                                        <span className="text-[12px] font-semibold font-['Inter:SemiBold',sans-serif] text-[#2d333a]">
                                          {category.name}
                                        </span>
                                      </div>
                                      <span className="text-[11px] font-['Inter:Regular',sans-serif] text-[#99a1af]">
                                        {category.documents.length}
                                      </span>
                                    </div>

                                    {/* Document Table */}
                                    {isCategoryExpanded && (
                                      <div className="bg-[#fafbfc]">
                                        {/* Table Header */}
                                        <div className="grid grid-cols-[1fr_120px_110px_48px] gap-[12px] px-[56px] py-[4px] border-b border-[#e5e7eb]">
                                          <div className="text-[11px] font-['Inter:SemiBold',sans-serif] text-[#72777e]">
                                            Document name
                                          </div>
                                          <div className="text-[11px] font-['Inter:SemiBold',sans-serif] text-[#72777e]">
                                            Status
                                          </div>
                                          <div className="text-[11px] font-['Inter:SemiBold',sans-serif] text-[#72777e]">
                                            Modified
                                          </div>
                                          <div className="text-[11px] font-['Inter:SemiBold',sans-serif] text-[#72777e] text-center">
                                            Actions
                                          </div>
                                        </div>

                                        {/* Document Rows */}
                                        {category.documents.map((doc) => {
                                          const uploadDate = new Date(doc.uploadDate);
                                          
                                          return (
                                            <div 
                                              key={doc.id}
                                              className="grid grid-cols-[1fr_120px_110px_48px] gap-[12px] px-[56px] py-[6px] hover:bg-white transition-colors cursor-pointer border-b border-[#f4f5f6] last:border-b-0 items-center"
                                              onClick={(e) => {
                                                e.stopPropagation();
                                                if (doc.leaseId) {
                                                  onViewDocument(doc.leaseId);
                                                }
                                              }}
                                            >
                                              {/* Document Name with PDF Icon */}
                                              <div className="flex items-center gap-[6px] min-w-0">
                                                <FileText className="w-3 h-3 text-[#dc2626] flex-shrink-0" />
                                                <span 
                                                  className="text-[12px] font-['Inter:Regular',sans-serif] text-[#2d333a] truncate"
                                                  title={doc.name}
                                                >
                                                  {doc.name}
                                                </span>
                                              </div>

                                              {/* Status Badge */}
                                              <div className="flex items-center">
                                                <span className={`inline-flex px-[8px] py-[2px] rounded-[6px] text-[11px] font-['Inter:SemiBold',sans-serif] ${getStatusBadgeClass(doc.status)}`}>
                                                  {doc.status}
                                                </span>
                                              </div>

                                              {/* Modified Date */}
                                              <div className="flex items-center text-[11px] font-['Inter:Regular',sans-serif] text-[#72777e]">
                                                {uploadDate.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                                              </div>

                                              {/* Actions */}
                                              <div className="flex items-center justify-center">
                                                <button 
                                                  onClick={(e) => {
                                                    e.stopPropagation();
                                                    // Handle menu
                                                  }}
                                                  className="p-[4px] hover:bg-[#e5e7eb] rounded-[6px] transition-colors"
                                                >
                                                  <MoreVertical className="w-3 h-3 text-[#72777e]" />
                                                </button>
                                              </div>
                                            </div>
                                          );
                                        })}
                                      </div>
                                    )}
                                  </div>
                                );
                              })}
                            </div>
                          )}
                        </div>
                      );
                    })}
                  </div>
                ) : (
                  <div className="py-[48px] text-center">
                    <Users className="w-12 h-12 text-[#d0d9e1] mx-auto mb-[16px]" />
                    <p className="text-[14px] font-['Inter:Regular',sans-serif] text-[#72777e]">
                      No tenants found for this asset
                    </p>
                  </div>
                )}

                {/* Tenants Pagination */}
                {filteredTenants.length > 0 && (
                  <Pagination
                    currentPage={tenantsPage}
                    totalItems={filteredTenants.length}
                    itemsPerPage={tenantsPerPage}
                    onPageChange={handleTenantsPageChange}
                    onItemsPerPageChange={handleTenantsPerPageChange}
                  />
                )}
              </div>
            ) : (
              /* Building Documents Tab */
              <div className="bg-white rounded-[8px] border border-[#e5e7eb] overflow-hidden">
                <table className="w-full">
                  <thead className="bg-[#f9fafb] border-b border-[#e5e7eb]">
                    <tr>
                      <th 
                        onClick={() => handleSort('name')}
                        className="px-[16px] py-[6px] text-left text-[11px] font-semibold font-['Inter:SemiBold',sans-serif] text-[#72777e] cursor-pointer hover:bg-[#f0f1f2] transition-colors select-none"
                      >
                        <div className="flex items-center gap-[6px]">
                          <span>Document name</span>
                          {sortField === 'name' ? (
                            sortDirection === 'asc' ? (
                              <ChevronUp className="w-3 h-3" />
                            ) : (
                              <ChevronDown className="w-3 h-3" />
                            )
                          ) : (
                            <ArrowUpDown className="w-3 h-3 opacity-40" />
                          )}
                        </div>
                      </th>
                      <th 
                        onClick={() => handleSort('category')}
                        className="px-[16px] py-[6px] text-left text-[11px] font-semibold font-['Inter:SemiBold',sans-serif] text-[#72777e] cursor-pointer hover:bg-[#f0f1f2] transition-colors select-none"
                      >
                        <div className="flex items-center gap-[6px]">
                          <span>Category</span>
                          {sortField === 'category' ? (
                            sortDirection === 'asc' ? (
                              <ChevronUp className="w-3 h-3" />
                            ) : (
                              <ChevronDown className="w-3 h-3" />
                            )
                          ) : (
                            <ArrowUpDown className="w-3 h-3 opacity-40" />
                          )}
                        </div>
                      </th>
                      <th 
                        onClick={() => handleSort('uploadDate')}
                        className="px-[16px] py-[6px] text-left text-[11px] font-semibold font-['Inter:SemiBold',sans-serif] text-[#72777e] cursor-pointer hover:bg-[#f0f1f2] transition-colors select-none"
                      >
                        <div className="flex items-center gap-[6px]">
                          <span>Upload date</span>
                          {sortField === 'uploadDate' ? (
                            sortDirection === 'asc' ? (
                              <ChevronUp className="w-3 h-3" />
                            ) : (
                              <ChevronDown className="w-3 h-3" />
                            )
                          ) : (
                            <ArrowUpDown className="w-3 h-3 opacity-40" />
                          )}
                        </div>
                      </th>
                      <th className="px-[16px] py-[6px] text-center text-[11px] font-semibold font-['Inter:SemiBold',sans-serif] text-[#72777e]">
                        Actions
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-[#e5e7eb]">
                    {paginatedBuildingDocs.map((doc) => {
                      const uploadDate = new Date(doc.uploadDate);
                      
                      return (
                        <tr
                          key={doc.id}
                          onClick={() => handleBuildingDocClick(doc)}
                          className="hover:bg-[#f9fafb] transition-colors cursor-pointer"
                        >
                          <td className="px-[16px] py-[8px]">
                            <div className="flex items-center gap-[6px]">
                              <div className="w-[24px] h-[24px] bg-[#f4f5f6] rounded-[4px] flex items-center justify-center">
                                <FileText className="w-3 h-3 text-[#72777e]" />
                              </div>
                              <span className="text-[12px] font-['Inter:Regular',sans-serif] text-[#4837b9] hover:text-[#3a2b94] hover:underline cursor-pointer">
                                {doc.name}
                              </span>
                            </div>
                          </td>
                          <td className="px-[16px] py-[8px] text-[12px] font-['Inter:Regular',sans-serif] text-[#72777e]">
                            {doc.category}
                          </td>
                          <td className="px-[16px] py-[8px] text-[11px] font-['Inter:Regular',sans-serif] text-[#72777e]">
                            {uploadDate.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                          </td>
                          <td className="px-[16px] py-[8px]">
                            <div className="flex items-center justify-center">
                              <button 
                                onClick={(e) => {
                                  e.stopPropagation();
                                  // Handle menu
                                }}
                                className="p-[4px] hover:bg-[#e5e7eb] rounded-[6px] transition-colors"
                              >
                                <MoreVertical className="w-3 h-3 text-[#72777e]" />
                              </button>
                            </div>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>

                {filteredBuildingDocs.length === 0 && (
                  <div className="py-[48px] text-center">
                    <FileText className="w-12 h-12 text-[#d0d9e1] mx-auto mb-[16px]" />
                    <p className="text-[14px] font-['Inter:Regular',sans-serif] text-[#72777e]">
                      No building documents found
                    </p>
                  </div>
                )}
              </div>
            )}
              </div>
            </div>
            {/* Chat Panel on Right */}
            <div className="w-[400px] flex-shrink-0 h-full overflow-hidden">
              <ChatPanel />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}