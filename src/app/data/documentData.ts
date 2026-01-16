export interface Document {
  id: string;
  name: string;
  type: string;
  category: string;
  uploadDate: string;
  fileSize: number;
  status: 'Processing' | 'AI Abstracted' | 'Pending human review' | 'Expert verified';
  leaseId?: string; // Link to lease abstract
}

export interface DocumentCategory {
  name: string;
  documents: Document[];
  isPredefined: boolean;
}

export interface TenantDocuments {
  tenantId: string;
  tenantName: string;
  status: 'Processing' | 'AI Abstracted' | 'Pending human review' | 'Expert verified';
  brandColor: string; // Background color for logo
  textColor: string; // Text color for logo
  logoText: string; // Short text/initials for logo
  thumbnail?: string; // Optional custom thumbnail image
  categories: DocumentCategory[];
}

export interface AssetDocuments {
  assetId: string;
  assetName: string;
  address: string;
  occupancyRate: string;
  leaseCount: number;
  buildingDocuments: Document[];
  tenants: TenantDocuments[];
}

// Predefined document categories
export const DOCUMENT_CATEGORIES = [
  'Main Lease Agreement',
  'Commencement Letter',
  'Expansion - Amendment',
  'Extension - Amendment',
  'Move - Amendment',
  'Correction - Amendment',
  'Insurance Documents',
];

// Mock document data organized by asset and tenant
// Asset IDs match MOCK_ASSETS from searchData.ts
export const ASSET_DOCUMENTS: AssetDocuments[] = [
  {
    assetId: 'a1', // 100 North Tampa
    assetName: '100 North Tampa',
    address: '100 North Tampa Street',
    occupancyRate: '96%',
    leaseCount: 2,
    buildingDocuments: [
      {
        id: 'doc100',
        name: 'Building_Lease_Agreement.pdf',
        type: 'PDF',
        category: 'Main Lease Agreement',
        uploadDate: '2024-01-15T10:00:00Z',
        fileSize: 786432,
        status: 'Expert verified',
        leaseId: 'LEASE-2024-001',
      },
      {
        id: 'doc101',
        name: 'Building_Insurance_Certificate.pdf',
        type: 'PDF',
        category: 'Insurance Documents',
        uploadDate: '2024-02-01T09:30:00Z',
        fileSize: 2345678,
        status: 'Expert verified',
      },
    ],
    tenants: [
      {
        tenantId: 't1',
        tenantName: 'Acme Corporation',
        status: 'Expert verified',
        brandColor: '#FF5733',
        textColor: '#FFFFFF',
        logoText: 'AC',
        categories: [
          {
            name: 'Main Lease Agreement',
            isPredefined: true,
            documents: [
              {
                id: 'doc1',
                name: '2_LL_FaceTec_10.10.25 - varying rent escalation length.docx',
                type: 'DOCX',
                category: 'Main Lease Agreement',
                uploadDate: '2024-01-15T10:00:00Z',
                fileSize: 786432,
                status: 'Completed',
                leaseId: 'LEASE-2024-001',
              },
              {
                id: 'doc1b',
                name: 'Original_Lease_Agreement_Signed.pdf',
                type: 'PDF',
                category: 'Main Lease Agreement',
                uploadDate: '2024-01-10T09:30:00Z',
                fileSize: 1024567,
                status: 'Completed',
                leaseId: 'LEASE-2024-001',
              },
            ],
          },
          {
            name: 'Insurance Documents',
            isPredefined: true,
            documents: [
              {
                id: 'doc4',
                name: 'Certificate_of_Insurance_2024.pdf',
                type: 'PDF',
                category: 'Insurance Documents',
                uploadDate: '2024-02-01T11:30:00Z',
                fileSize: 321654,
                status: 'Completed',
              },
            ],
          },
        ],
      },
      {
        tenantId: 't2',
        tenantName: 'TechStart Incubator',
        status: 'Pending human review',
        brandColor: '#33FF57',
        textColor: '#000000',
        logoText: 'TS',
        categories: [
          {
            name: 'Main Lease Agreement',
            isPredefined: true,
            documents: [
              {
                id: 'doc17',
                name: 'TechStart_Original_Lease.pdf',
                type: 'PDF',
                category: 'Main Lease Agreement',
                uploadDate: '2024-01-31T02:00:00Z',
                fileSize: 678901,
                status: 'Pending human review',
                leaseId: 'LEASE-2024-001',
              },
            ],
          },
        ],
      },
    ],
  },
  {
    assetId: 'a2', // VTS Tower
    assetName: 'VTS Tower',
    address: '350 Fifth Avenue',
    occupancyRate: '98%',
    leaseCount: 3,
    buildingDocuments: [
      {
        id: 'doc200',
        name: 'VTS_Tower_Certificate_of_Occupancy.pdf',
        type: 'PDF',
        category: 'Certificate of Occupancy',
        uploadDate: '2024-01-15T10:00:00Z',
        fileSize: 786432,
        status: 'Human verified',
      },
      {
        id: 'doc201',
        name: 'Building_Insurance_Policy_2024.pdf',
        type: 'PDF',
        category: 'Insurance Documents',
        uploadDate: '2024-02-01T09:30:00Z',
        fileSize: 2345678,
        status: 'Expert verified',
      },
      {
        id: 'doc202',
        name: 'Property_Tax_Assessment_2024.pdf',
        type: 'PDF',
        category: 'Tax Documents',
        uploadDate: '2024-01-20T14:15:00Z',
        fileSize: 1234567,
        status: 'Processing',
      },
      {
        id: 'doc203',
        name: 'Fire_Safety_Inspection_Report.pdf',
        type: 'PDF',
        category: 'Safety & Compliance',
        uploadDate: '2024-03-05T11:00:00Z',
        fileSize: 987654,
        status: 'Expert verified',
      },
      {
        id: 'doc204',
        name: 'Elevator_Maintenance_Contract.pdf',
        type: 'PDF',
        category: 'Maintenance Contracts',
        uploadDate: '2024-01-10T08:45:00Z',
        fileSize: 654321,
        status: 'Processing',
      },
      {
        id: 'doc205',
        name: 'HVAC_Service_Agreement.pdf',
        type: 'PDF',
        category: 'Maintenance Contracts',
        uploadDate: '2024-02-15T13:20:00Z',
        fileSize: 876543,
        status: 'AI Abstracted',
      },
      {
        id: 'doc206',
        name: 'Building_Architectural_Plans.pdf',
        type: 'PDF',
        category: 'Building Plans',
        uploadDate: '2023-12-01T10:00:00Z',
        fileSize: 5432100,
        status: 'Expert verified',
      },
      {
        id: 'doc207',
        name: 'Environmental_Impact_Assessment.pdf',
        type: 'PDF',
        category: 'Environmental Documents',
        uploadDate: '2024-01-25T15:30:00Z',
        fileSize: 1987654,
        status: 'AI Abstracted',
      },
      {
        id: 'doc208',
        name: 'Parking_Garage_License.pdf',
        type: 'PDF',
        category: 'Permits & Licenses',
        uploadDate: '2024-02-10T09:15:00Z',
        fileSize: 543210,
        status: 'Pending human review',
      },
      {
        id: 'doc209',
        name: 'Roofing_Warranty_Documentation.pdf',
        type: 'PDF',
        category: 'Warranties',
        uploadDate: '2024-01-18T12:00:00Z',
        fileSize: 765432,
        status: 'Expert verified',
      },
      {
        id: 'doc210',
        name: 'Asbestos_Inspection_Report.pdf',
        type: 'PDF',
        category: 'Safety & Compliance',
        uploadDate: '2024-03-01T10:30:00Z',
        fileSize: 1123456,
        status: 'Processing',
      },
      {
        id: 'doc211',
        name: 'Property_Deed.pdf',
        type: 'PDF',
        category: 'Title Documents',
        uploadDate: '2023-11-15T14:00:00Z',
        fileSize: 987654,
        status: 'Expert verified',
      },
      {
        id: 'doc212',
        name: 'Zoning_Compliance_Certificate.pdf',
        type: 'PDF',
        category: 'Permits & Licenses',
        uploadDate: '2024-02-20T16:45:00Z',
        fileSize: 543219,
        status: 'Processing',
      },
      {
        id: 'doc213',
        name: 'Building_Management_Agreement.pdf',
        type: 'PDF',
        category: 'Management Contracts',
        uploadDate: '2024-01-05T10:00:00Z',
        fileSize: 1456789,
        status: 'Expert verified',
      },
      {
        id: 'doc214',
        name: 'Energy_Audit_Report_2024.pdf',
        type: 'PDF',
        category: 'Environmental Documents',
        uploadDate: '2024-03-10T14:30:00Z',
        fileSize: 2345678,
        status: 'Processing',
      },
      {
        id: 'doc215',
        name: 'Security_System_Contract.pdf',
        type: 'PDF',
        category: 'Maintenance Contracts',
        uploadDate: '2024-02-05T11:20:00Z',
        fileSize: 678901,
        status: 'AI Abstracted',
      },
      {
        id: 'doc216',
        name: 'Plumbing_Inspection_Report.pdf',
        type: 'PDF',
        category: 'Safety & Compliance',
        uploadDate: '2024-03-15T09:00:00Z',
        fileSize: 876543,
        status: 'Pending human review',
      },
      {
        id: 'doc217',
        name: 'Title_Insurance_Policy.pdf',
        type: 'PDF',
        category: 'Title Documents',
        uploadDate: '2023-11-20T13:30:00Z',
        fileSize: 1234567,
        status: 'Processing',
      },
      {
        id: 'doc218',
        name: 'Lease_Admin_Software_License.pdf',
        type: 'PDF',
        category: 'Management Contracts',
        uploadDate: '2024-01-12T10:15:00Z',
        fileSize: 456789,
        status: 'Expert verified',
      },
      {
        id: 'doc219',
        name: 'Window_Washing_Service_Agreement.pdf',
        type: 'PDF',
        category: 'Maintenance Contracts',
        uploadDate: '2024-02-25T15:00:00Z',
        fileSize: 345678,
        status: 'Processing',
      },
    ],
    tenants: [
      {
        tenantId: 'lanebryant',
        tenantName: 'Lane Bryant, Inc.',
        status: 'Expert verified',
        brandColor: '#000000',
        textColor: '#FFFFFF',
        logoText: 'LB',
        thumbnail: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxMYW5lJTIwQnJ5YW50JTIwZmFzaGlvbiUyMHN0b3JlfGVufDF8fHx8MTc2ODM4MjEyM3ww&ixlib=rb-4.1.0&q=80&w=400',
        categories: [
          {
            name: 'Leases',
            isPredefined: true,
            documents: [
              {
                id: 'doc5000',
                name: 'Lane_Bryant_Master_Lease_Agreement_2024.pdf',
                type: 'PDF',
                category: 'Main Lease Agreement',
                uploadDate: '2024-01-17T12:00:00Z',
                fileSize: 2891234,
                status: 'Expert verified',
                leaseId: 'LEASE-2024-004',
              },
              {
                id: 'doc5001',
                name: 'Lane_Bryant_Lease_Addendum_A.pdf',
                type: 'PDF',
                category: 'Main Lease Agreement',
                uploadDate: '2024-01-20T10:30:00Z',
                fileSize: 1245678,
                status: 'Expert verified',
                leaseId: 'LEASE-2024-004',
              },
            ],
          },
          {
            name: 'Amendments',
            isPredefined: true,
            documents: [
              {
                id: 'doc5002',
                name: 'Lane_Bryant_Commencement_Letter_Signed.pdf',
                type: 'PDF',
                category: 'Commencement Letter',
                uploadDate: '2024-02-01T09:00:00Z',
                fileSize: 456789,
                status: 'Expert verified',
              },
            ],
          },
          {
            name: 'Insurance',
            isPredefined: true,
            documents: [
              {
                id: 'doc5003',
                name: 'Lane_Bryant_Liability_Insurance_Certificate.pdf',
                type: 'PDF',
                category: 'Insurance Documents',
                uploadDate: '2024-01-25T14:20:00Z',
                fileSize: 789012,
                status: 'Expert verified',
              },
              {
                id: 'doc5004',
                name: 'Lane_Bryant_Property_Insurance_2024.pdf',
                type: 'PDF',
                category: 'Insurance Documents',
                uploadDate: '2024-01-25T14:25:00Z',
                fileSize: 654321,
                status: 'Expert verified',
              },
            ],
          },
          {
            name: 'Other',
            isPredefined: true,
            documents: [
              {
                id: 'doc5005',
                name: 'Lane_Bryant_Extension_Amendment_2025.pdf',
                type: 'PDF',
                category: 'Extension - Amendment',
                uploadDate: '2024-03-10T11:15:00Z',
                fileSize: 1123456,
                status: 'AI Abstracted',
              },
            ],
          },
        ],
      },
      {
        tenantId: 'louisvuitton',
        tenantName: 'Louis Vuitton Malletier, S.A.',
        status: 'AI Abstracted',
        brandColor: '#5c4d3c',
        textColor: '#FFFFFF',
        logoText: 'LV',
        thumbnail: 'https://images.unsplash.com/photo-1596622723231-b20320c7346b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxMb3VpcyUyMFZ1aXR0b24lMjBsb2dvfGVufDF8fHx8MTc2ODM4MjEyM3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
        categories: [
          {
            name: 'Leases',
            isPredefined: true,
            documents: [
              {
                id: 'doc5100',
                name: 'Louis_Vuitton_Retail_Lease_2024.pdf',
                type: 'PDF',
                category: 'Main Lease Agreement',
                uploadDate: '2024-02-10T09:15:00Z',
                fileSize: 2567890,
                status: 'AI Abstracted',
                leaseId: 'LEASE-2024-003',
              },
              {
                id: 'doc5101',
                name: 'Louis_Vuitton_Tenant_Improvement_Agreement.pdf',
                type: 'PDF',
                category: 'Main Lease Agreement',
                uploadDate: '2024-02-12T10:30:00Z',
                fileSize: 1876543,
                status: 'AI Abstracted',
                leaseId: 'LEASE-2024-003',
              },
            ],
          },
          {
            name: 'Insurance',
            isPredefined: true,
            documents: [
              {
                id: 'doc5102',
                name: 'Louis_Vuitton_General_Liability_Insurance.pdf',
                type: 'PDF',
                category: 'Insurance Documents',
                uploadDate: '2024-02-15T13:45:00Z',
                fileSize: 723456,
                status: 'AI Abstracted',
              },
              {
                id: 'doc5103',
                name: 'Louis_Vuitton_Workers_Comp_Certificate.pdf',
                type: 'PDF',
                category: 'Insurance Documents',
                uploadDate: '2024-02-15T13:50:00Z',
                fileSize: 534210,
                status: 'AI Abstracted',
              },
            ],
          },
          {
            name: 'Amendments',
            isPredefined: true,
            documents: [
              {
                id: 'doc5104',
                name: 'Louis_Vuitton_Space_Expansion_Amendment.pdf',
                type: 'PDF',
                category: 'Expansion - Amendment',
                uploadDate: '2024-03-01T10:00:00Z',
                fileSize: 987654,
                status: 'Pending human review',
              },
            ],
          },
        ],
      },
      {
        tenantId: 'linkedin',
        tenantName: 'LinkedIn Corporation',
        status: 'Pending human review',
        brandColor: '#0077B5',
        textColor: '#FFFFFF',
        logoText: 'in',
        thumbnail: 'https://images.unsplash.com/photo-1611944212129-29977ae1398c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxMaW5rZWRJbiUyMGxvZ298ZW58MXx8fHwxNzY4MzgyMTI0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
        categories: [
          {
            name: 'Leases',
            isPredefined: true,
            documents: [
              {
                id: 'doc5200',
                name: 'LinkedIn_Corporate_Office_Lease.pdf',
                type: 'PDF',
                category: 'Main Lease Agreement',
                uploadDate: '2024-01-28T14:30:00Z',
                fileSize: 3123456,
                status: 'Pending human review',
                leaseId: 'LEASE-2024-004',
              },
            ],
          },
          {
            name: 'Amendments',
            isPredefined: true,
            documents: [
              {
                id: 'doc5201',
                name: 'LinkedIn_Floor_Expansion_Notice.pdf',
                type: 'PDF',
                category: 'Expansion - Amendment',
                uploadDate: '2024-02-05T11:00:00Z',
                fileSize: 445678,
                status: 'Pending human review',
              },
            ],
          },
          {
            name: 'Insurance',
            isPredefined: true,
            documents: [
              {
                id: 'doc5202',
                name: 'LinkedIn_Insurance_Package_2024.pdf',
                type: 'PDF',
                category: 'Insurance Documents',
                uploadDate: '2024-02-08T15:20:00Z',
                fileSize: 1234567,
                status: 'AI Abstracted',
              },
            ],
          },
        ],
      },
      {
        tenantId: 'shakeshack',
        tenantName: 'Shake Shack',
        status: 'Expert verified',
        brandColor: '#5EB130',
        textColor: '#FFFFFF',
        logoText: 'SS',
        thumbnail: 'https://images.unsplash.com/photo-1600728619239-d2a73f7aa541?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxTaGFrZSUyMFNoYWNrJTIwbG9nb3xlbnwxfHx8fDE3NjgzODIxMjV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
        categories: [
          {
            name: 'Leases',
            isPredefined: true,
            documents: [
              {
                id: 'doc5300',
                name: 'Shake_Shack_Restaurant_Lease_2024.pdf',
                type: 'PDF',
                category: 'Main Lease Agreement',
                uploadDate: '2024-01-10T10:00:00Z',
                fileSize: 2789012,
                status: 'Expert verified',
                leaseId: 'LEASE-2024-005',
              },
              {
                id: 'doc5301',
                name: 'Shake_Shack_Lease_Exhibit_Kitchen_Plans.pdf',
                type: 'PDF',
                category: 'Main Lease Agreement',
                uploadDate: '2024-01-10T10:15:00Z',
                fileSize: 3456789,
                status: 'Expert verified',
                leaseId: 'LEASE-2024-005',
              },
            ],
          },
          {
            name: 'Amendments',
            isPredefined: true,
            documents: [
              {
                id: 'doc5302',
                name: 'Shake_Shack_Outdoor_Seating_Agreement.pdf',
                type: 'PDF',
                category: 'Expansion - Amendment',
                uploadDate: '2024-01-20T09:30:00Z',
                fileSize: 567890,
                status: 'Expert verified',
              },
            ],
          },
          {
            name: 'Insurance',
            isPredefined: true,
            documents: [
              {
                id: 'doc5303',
                name: 'Shake_Shack_Comprehensive_Insurance_2024.pdf',
                type: 'PDF',
                category: 'Insurance Documents',
                uploadDate: '2024-01-25T11:45:00Z',
                fileSize: 892345,
                status: 'Expert verified',
              },
              {
                id: 'doc5304',
                name: 'Shake_Shack_Workers_Comp_Certificate.pdf',
                type: 'PDF',
                category: 'Insurance Documents',
                uploadDate: '2024-01-25T11:50:00Z',
                fileSize: 1123456,
                status: 'Expert verified',
              },
            ],
          },
          {
            name: 'Other',
            isPredefined: true,
            documents: [
              {
                id: 'doc5305',
                name: 'Shake_Shack_Health_Permit_2024.pdf',
                type: 'PDF',
                category: 'Extension - Amendment',
                uploadDate: '2024-02-20T14:00:00Z',
                fileSize: 1567890,
                status: 'Expert verified',
              },
            ],
          },
        ],
      },
      {
        tenantId: 'amazon',
        tenantName: 'Amazon.com, Inc.',
        status: 'Processing',
        brandColor: '#FF9900',
        textColor: '#000000',
        logoText: 'a',
        thumbnail: 'https://images.unsplash.com/photo-1704204656144-3dd12c110dd8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxBbWF6b24lMjBsb2dvfGVufDF8fHx8MTc2ODMzNzAzNnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
        categories: [
          {
            name: 'Leases',
            isPredefined: true,
            documents: [
              {
                id: 'doc5400',
                name: 'Amazon_Distribution_Center_Lease.pdf',
                type: 'PDF',
                category: 'Main Lease Agreement',
                uploadDate: '2024-03-15T13:20:00Z',
                fileSize: 3234567,
                status: 'Processing',
                leaseId: 'LEASE-2024-006',
              },
            ],
          },
          {
            name: 'Insurance',
            isPredefined: true,
            documents: [
              {
                id: 'doc5401',
                name: 'Amazon_Insurance_Binder_2024.pdf',
                type: 'PDF',
                category: 'Insurance Documents',
                uploadDate: '2024-03-18T10:30:00Z',
                fileSize: 876543,
                status: 'Processing',
              },
            ],
          },
        ],
      },
      {
        tenantId: 'starbucks',
        tenantName: 'Starbucks Corporation',
        status: 'Expert verified',
        brandColor: '#00704A',
        textColor: '#FFFFFF',
        logoText: 'S',
        thumbnail: 'https://images.unsplash.com/photo-1607807494273-cf2a6257670f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxTdGFyYnVja3MlMjBsb2dvfGVufDF8fHx8MTc2ODM4MjEyOHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
        categories: [
          {
            name: 'Leases',
            isPredefined: true,
            documents: [
              {
                id: 'doc5500',
                name: 'Starbucks_Retail_Cafe_Lease_2024.pdf',
                type: 'PDF',
                category: 'Main Lease Agreement',
                uploadDate: '2024-02-01T11:00:00Z',
                fileSize: 2945678,
                status: 'Expert verified',
                leaseId: 'LEASE-2024-007',
              },
              {
                id: 'doc5501',
                name: 'Starbucks_Drive_Thru_Design_Addendum.pdf',
                type: 'PDF',
                category: 'Main Lease Agreement',
                uploadDate: '2024-02-01T11:15:00Z',
                fileSize: 1678901,
                status: 'Expert verified',
                leaseId: 'LEASE-2024-007',
              },
            ],
          },
          {
            name: 'Amendments',
            isPredefined: true,
            documents: [
              {
                id: 'doc5502',
                name: 'Starbucks_Extended_Hours_Letter_2024.pdf',
                type: 'PDF',
                category: 'Extension - Amendment',
                uploadDate: '2024-02-10T09:00:00Z',
                fileSize: 398765,
                status: 'Expert verified',
              },
            ],
          },
          {
            name: 'Insurance',
            isPredefined: true,
            documents: [
              {
                id: 'doc5503',
                name: 'Starbucks_Liability_Coverage_2024.pdf',
                type: 'PDF',
                category: 'Insurance Documents',
                uploadDate: '2024-02-12T14:30:00Z',
                fileSize: 745632,
                status: 'Expert verified',
              },
            ],
          },
        ],
      },
      {
        tenantId: 'walmart',
        tenantName: 'Walmart Inc.',
        status: 'AI Abstracted',
        brandColor: '#0071CE',
        textColor: '#FFFFFF',
        logoText: 'W',
        thumbnail: 'https://images.unsplash.com/photo-1648091855110-77a1c3dead63?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxXYWxtYXJ0JTIwbG9nbyUyMHNpZ258ZW58MXx8fHwxNzY4MzgyMTI4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
        categories: [
          {
            name: 'Leases',
            isPredefined: true,
            documents: [
              {
                id: 'doc5600',
                name: 'Walmart_Supercenter_Lease_Agreement.pdf',
                type: 'PDF',
                category: 'Main Lease Agreement',
                uploadDate: '2024-01-15T15:45:00Z',
                fileSize: 2834567,
                status: 'AI Abstracted',
                leaseId: 'LEASE-2024-008',
              },
            ],
          },
          {
            name: 'Insurance',
            isPredefined: true,
            documents: [
              {
                id: 'doc5601',
                name: 'Walmart_Comprehensive_Insurance_Policy.pdf',
                type: 'PDF',
                category: 'Insurance Documents',
                uploadDate: '2024-01-20T10:00:00Z',
                fileSize: 1456789,
                status: 'AI Abstracted',
              },
              {
                id: 'doc5602',
                name: 'Walmart_General_Liability_2024.pdf',
                type: 'PDF',
                category: 'Insurance Documents',
                uploadDate: '2024-01-20T10:05:00Z',
                fileSize: 678912,
                status: 'AI Abstracted',
              },
            ],
          },
        ],
      },
      {
        tenantId: 'ikea',
        tenantName: 'IKEA Limited',
        status: 'Expert verified',
        brandColor: '#0051BA',
        textColor: '#FFDB00',
        logoText: 'IKEA',
        thumbnail: 'https://images.unsplash.com/photo-1739115517835-4b07f4d7d959?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxJS0VBJTIwbG9nbyUyMHNpZ258ZW58MXx8fHwxNzY4MzgyMTI5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
        categories: [
          {
            name: 'Leases',
            isPredefined: true,
            documents: [
              {
                id: 'doc5700',
                name: 'IKEA_Showroom_Lease_2024.pdf',
                type: 'PDF',
                category: 'Main Lease Agreement',
                uploadDate: '2024-02-20T09:00:00Z',
                fileSize: 3456789,
                status: 'Expert verified',
                leaseId: 'LEASE-2024-009',
              },
              {
                id: 'doc5701',
                name: 'IKEA_Warehouse_Space_Addendum.pdf',
                type: 'PDF',
                category: 'Main Lease Agreement',
                uploadDate: '2024-02-20T09:30:00Z',
                fileSize: 2123456,
                status: 'Expert verified',
                leaseId: 'LEASE-2024-009',
              },
            ],
          },
          {
            name: 'Insurance',
            isPredefined: true,
            documents: [
              {
                id: 'doc5702',
                name: 'IKEA_Property_Insurance_2024.pdf',
                type: 'PDF',
                category: 'Insurance Documents',
                uploadDate: '2024-02-25T14:00:00Z',
                fileSize: 987654,
                status: 'Expert verified',
              },
            ],
          },
        ],
      },
      {
        tenantId: 'alphabet',
        tenantName: 'Alphabet Inc.',
        status: 'Processing',
        brandColor: '#4285F4',
        textColor: '#FFFFFF',
        logoText: 'G',
        thumbnail: 'https://images.unsplash.com/photo-1706426629246-2a3c3e3e3ff2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxBbHBoYWJldCUyMEdvb2dsZSUyMGxvZ298ZW58MXx8fHwxNzY4MzgyMTMwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
        categories: [
          {
            name: 'Leases',
            isPredefined: true,
            documents: [
              {
                id: 'doc5800',
                name: 'Alphabet_Tech_Campus_Lease.pdf',
                type: 'PDF',
                category: 'Main Lease Agreement',
                uploadDate: '2024-03-05T10:30:00Z',
                fileSize: 4123456,
                status: 'Processing',
                leaseId: 'LEASE-2024-010',
              },
            ],
          },
          {
            name: 'Insurance',
            isPredefined: true,
            documents: [
              {
                id: 'doc5801',
                name: 'Alphabet_Insurance_Documents_2024.pdf',
                type: 'PDF',
                category: 'Insurance Documents',
                uploadDate: '2024-03-08T11:00:00Z',
                fileSize: 1234567,
                status: 'Processing',
              },
            ],
          },
        ],
      },
      {
        tenantId: 'chewy',
        tenantName: 'Chewy, Inc.',
        status: 'AI Abstracted',
        brandColor: '#001E62',
        textColor: '#FFFFFF',
        logoText: 'C',
        thumbnail: 'https://images.unsplash.com/photo-1653499676737-becf2c9562c8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxDaGV3eSUyMHBldCUyMGxvZ298ZW58MXx8fHwxNzY4MzgyMTMwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
        categories: [
          {
            name: 'Leases',
            isPredefined: true,
            documents: [
              {
                id: 'doc5900',
                name: 'Chewy_Fulfillment_Center_Lease.pdf',
                type: 'PDF',
                category: 'Main Lease Agreement',
                uploadDate: '2024-02-28T13:00:00Z',
                fileSize: 2987654,
                status: 'AI Abstracted',
                leaseId: 'LEASE-2024-011',
              },
            ],
          },
          {
            name: 'Amendments',
            isPredefined: true,
            documents: [
              {
                id: 'doc5901',
                name: 'Chewy_Storage_Expansion_Amendment.pdf',
                type: 'PDF',
                category: 'Expansion - Amendment',
                uploadDate: '2024-03-05T09:00:00Z',
                fileSize: 876543,
                status: 'AI Abstracted',
              },
            ],
          },
          {
            name: 'Insurance',
            isPredefined: true,
            documents: [
              {
                id: 'doc5902',
                name: 'Chewy_Liability_Insurance_2024.pdf',
                type: 'PDF',
                category: 'Insurance Documents',
                uploadDate: '2024-03-08T14:30:00Z',
                fileSize: 654321,
                status: 'Pending human review',
              },
            ],
          },
        ],
      },
      {
        tenantId: 'warbyparker',
        tenantName: 'Parker Warby Retail Inc',
        status: 'Expert verified',
        brandColor: '#00A0D2',
        textColor: '#FFFFFF',
        logoText: 'WP',
        thumbnail: 'https://images.unsplash.com/photo-1549287401-84022a38157e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxXYXJieSUyMFBhcmtlciUyMGdsYXNzZXMlMjBsb2dvfGVufDF8fHx8MTc2ODM4MjEzMHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
        categories: [
          {
            name: 'Leases',
            isPredefined: true,
            documents: [
              {
                id: 'doc6000',
                name: 'Warby_Parker_Optical_Store_Lease.pdf',
                type: 'PDF',
                category: 'Main Lease Agreement',
                uploadDate: '2024-01-12T11:00:00Z',
                fileSize: 2456789,
                status: 'Expert verified',
                leaseId: 'LEASE-2024-012',
              },
            ],
          },
          {
            name: 'Insurance',
            isPredefined: true,
            documents: [
              {
                id: 'doc6001',
                name: 'Warby_Parker_Insurance_Certificate.pdf',
                type: 'PDF',
                category: 'Insurance Documents',
                uploadDate: '2024-01-15T10:00:00Z',
                fileSize: 789012,
                status: 'Expert verified',
              },
            ],
          },
        ],
      },
      {
        tenantId: 'ross',
        tenantName: 'Ross Dress For Less, Inc.',
        status: 'Pending human review',
        brandColor: '#E31E24',
        textColor: '#FFFFFF',
        logoText: 'ROSS',
        thumbnail: 'https://images.unsplash.com/photo-1744871358423-65f4147237f5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxSb3NzJTIwc3RvcmUlMjBsb2dvfGVufDF8fHx8MTc2ODM4MjEyNHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
        categories: [
          {
            name: 'Leases',
            isPredefined: true,
            documents: [
              {
                id: 'doc6100',
                name: 'Ross_Discount_Store_Lease_2024.pdf',
                type: 'PDF',
                category: 'Main Lease Agreement',
                uploadDate: '2024-03-10T09:45:00Z',
                fileSize: 2765432,
                status: 'Pending human review',
                leaseId: 'LEASE-2024-013',
              },
            ],
          },
          {
            name: 'Insurance',
            isPredefined: true,
            documents: [
              {
                id: 'doc6101',
                name: 'Ross_Property_Insurance_2024.pdf',
                type: 'PDF',
                category: 'Insurance Documents',
                uploadDate: '2024-03-12T13:00:00Z',
                fileSize: 898765,
                status: 'Pending human review',
              },
            ],
          },
        ],
      },
    ],
  },
  {
    assetId: 'a3', // One East Broad
    assetName: 'One East Broad',
    address: '1 East Broad Street',
    occupancyRate: '94%',
    leaseCount: 2,
    buildingDocuments: [],
    tenants: [
      {
        tenantId: 't5',
        tenantName: 'Sterling & Associates Law',
        status: 'Completed',
        brandColor: '#FF33FF',
        textColor: '#000000',
        logoText: 'SA',
        categories: [
          {
            name: 'Main Lease Agreement',
            isPredefined: true,
            documents: [
              {
                id: 'doc8',
                name: 'Sterling_Law_Lease.pdf',
                type: 'PDF',
                category: 'Main Lease Agreement',
                uploadDate: '2024-01-20T14:30:00Z',
                fileSize: 723456,
                status: 'Completed',
                leaseId: 'LEASE-2024-004',
              },
            ],
          },
        ],
      },
      {
        tenantId: 't6',
        tenantName: 'Vertex Pharmaceuticals',
        status: 'Completed',
        brandColor: '#33FF33',
        textColor: '#000000',
        logoText: 'VP',
        categories: [
          {
            name: 'Main Lease Agreement',
            isPredefined: true,
            documents: [
              {
                id: 'doc9',
                name: 'Vertex_Pharma_Lease.pdf',
                type: 'PDF',
                category: 'Main Lease Agreement',
                uploadDate: '2024-03-05T11:00:00Z',
                fileSize: 834567,
                status: 'Completed',
                leaseId: 'LEASE-2024-005',
              },
            ],
          },
        ],
      },
    ],
  },
  {
    assetId: 'a4', // Madison Square Plaza
    assetName: 'Madison Square Plaza',
    address: '5 Madison Square',
    occupancyRate: '92%',
    leaseCount: 2,
    buildingDocuments: [],
    tenants: [
      {
        tenantId: 't7',
        tenantName: 'Digital Dynamics Inc',
        status: 'Completed',
        brandColor: '#FF3333',
        textColor: '#FFFFFF',
        logoText: 'DD',
        categories: [
          {
            name: 'Main Lease Agreement',
            isPredefined: true,
            documents: [
              {
                id: 'doc10',
                name: 'Digital_Dynamics_Lease.pdf',
                type: 'PDF',
                category: 'Main Lease Agreement',
                uploadDate: '2024-02-15T10:45:00Z',
                fileSize: 645789,
                status: 'Completed',
                leaseId: 'LEASE-2024-006',
              },
            ],
          },
        ],
      },
    ],
  },
  {
    assetId: 'a5', // Central Plaza
    assetName: 'Central Plaza',
    address: '230 Park Avenue',
    occupancyRate: '96%',
    leaseCount: 3,
    buildingDocuments: [],
    tenants: [
      {
        tenantId: 't8',
        tenantName: 'Atlas Marketing Solutions',
        status: 'Completed',
        brandColor: '#33FF33',
        textColor: '#000000',
        logoText: 'AM',
        categories: [
          {
            name: 'Main Lease Agreement',
            isPredefined: true,
            documents: [
              {
                id: 'doc11',
                name: 'Atlas_Marketing_Lease.pdf',
                type: 'PDF',
                category: 'Main Lease Agreement',
                uploadDate: '2024-01-22T09:30:00Z',
                fileSize: 756234,
                status: 'Completed',
                leaseId: 'LEASE-2024-007',
              },
            ],
          },
        ],
      },
      {
        tenantId: 't9',
        tenantName: 'Zenith Architecture',
        status: 'Completed',
        brandColor: '#FF33FF',
        textColor: '#000000',
        logoText: 'ZA',
        categories: [
          {
            name: 'Main Lease Agreement',
            isPredefined: true,
            documents: [
              {
                id: 'doc12',
                name: 'Zenith_Architecture_Lease.pdf',
                type: 'PDF',
                category: 'Main Lease Agreement',
                uploadDate: '2024-02-28T13:20:00Z',
                fileSize: 812345,
                status: 'Completed',
                leaseId: 'LEASE-2024-008',
              },
            ],
          },
        ],
      },
    ],
  },
  {
    assetId: 'a6', // Harbor Point
    assetName: 'Harbor Point',
    address: '100 Harbor Boulevard',
    occupancyRate: '91%',
    leaseCount: 2,
    buildingDocuments: [],
    tenants: [
      {
        tenantId: 't10',
        tenantName: 'Coastal Ventures LLC',
        status: 'Completed',
        brandColor: '#FF3333',
        textColor: '#FFFFFF',
        logoText: 'CV',
        categories: [
          {
            name: 'Main Lease Agreement',
            isPredefined: true,
            documents: [
              {
                id: 'doc13',
                name: 'Coastal_Ventures_Lease.pdf',
                type: 'PDF',
                category: 'Main Lease Agreement',
                uploadDate: '2024-03-10T15:00:00Z',
                fileSize: 678345,
                status: 'Completed',
                leaseId: 'LEASE-2024-009',
              },
            ],
          },
        ],
      },
    ],
  },
  {
    assetId: 'a7', // Tech Center East - Empty asset for demo
    assetName: 'Tech Center East',
    address: '1500 Mission Street',
    occupancyRate: '0%',
    leaseCount: 0,
    buildingDocuments: [],
    tenants: [],
  },
  {
    assetId: 'a10', // Midtown Exchange - Empty asset for demo
    assetName: 'Midtown Exchange',
    address: '2929 Peachtree Road',
    occupancyRate: '0%',
    leaseCount: 0,
    buildingDocuments: [],
    tenants: [],
  },
  // Moved CloudNine and Innovate Labs to a different asset - keeping old data commented for reference
  /*
  {
    assetId: 'a7', // Tech Center East
    assetName: 'Tech Center East',
    address: '1500 Mission Street',
    occupancyRate: '95%',
    leaseCount: 3,
    buildingDocuments: [],
    tenants: [
      {
        tenantId: 't11',
        tenantName: 'CloudNine Technologies',
        status: 'Completed',
        brandColor: '#33FF33',
        textColor: '#000000',
        logoText: 'CN',
        categories: [
          {
            name: 'Main Lease Agreement',
            isPredefined: true,
            documents: [
              {
                id: 'doc14',
                name: 'CloudNine_Tech_Lease.pdf',
                type: 'PDF',
                category: 'Main Lease Agreement',
                uploadDate: '2024-01-18T11:45:00Z',
                fileSize: 734567,
                status: 'Completed',
                leaseId: 'LEASE-2024-010',
              },
            ],
          },
        ],
      },
      {
        tenantId: 't12',
        tenantName: 'Innovate Labs',
        status: 'Completed',
        brandColor: '#FF33FF',
        textColor: '#000000',
        logoText: 'IL',
        categories: [
          {
            name: 'Main Lease Agreement',
            isPredefined: true,
            documents: [
              {
                id: 'doc15',
                name: 'Innovate_Labs_Lease.pdf',
                type: 'PDF',
                category: 'Main Lease Agreement',
                uploadDate: '2024-02-20T14:15:00Z',
                fileSize: 689012,
                status: 'Completed',
                leaseId: 'LEASE-2024-011',
              },
            ],
          },
        ],
      },
    ],
  },
  */
  {
    assetId: 'a8', // Downtown Austin Tower
    assetName: 'Downtown Austin Tower',
    address: '500 Congress Avenue',
    occupancyRate: '93%',
    leaseCount: 2,
    buildingDocuments: [],
    tenants: [
      {
        tenantId: 't13',
        tenantName: 'Lone Star Media Group',
        status: 'Completed',
        brandColor: '#FF3333',
        textColor: '#FFFFFF',
        logoText: 'LS',
        categories: [
          {
            name: 'Main Lease Agreement',
            isPredefined: true,
            documents: [
              {
                id: 'doc16',
                name: 'Lone_Star_Media_Lease.pdf',
                type: 'PDF',
                category: 'Main Lease Agreement',
                uploadDate: '2024-03-01T10:00:00Z',
                fileSize: 698765,
                status: 'Completed',
                leaseId: 'LEASE-2024-012',
              },
            ],
          },
        ],
      },
    ],
  },
  {
    assetId: 'a9', // River North Center
    assetName: 'River North Center',
    address: '350 North Orleans Street',
    occupancyRate: '97%',
    leaseCount: 2,
    buildingDocuments: [],
    tenants: [
      {
        tenantId: 't14',
        tenantName: 'Midwest Financial Advisors',
        status: 'Completed',
        brandColor: '#33FF33',
        textColor: '#000000',
        logoText: 'MF',
        categories: [
          {
            name: 'Main Lease Agreement',
            isPredefined: true,
            documents: [
              {
                id: 'doc17',
                name: 'Midwest_Financial_Lease.pdf',
                type: 'PDF',
                category: 'Main Lease Agreement',
                uploadDate: '2024-01-25T12:30:00Z',
                fileSize: 723456,
                status: 'Completed',
                leaseId: 'LEASE-2024-013',
              },
            ],
          },
        ],
      },
    ],
  },
  {
    assetId: 'a10', // Midtown Exchange
    assetName: 'Midtown Exchange',
    address: '2929 Peachtree Road',
    occupancyRate: '90%',
    leaseCount: 2,
    buildingDocuments: [],
    tenants: [
      {
        tenantId: 't15',
        tenantName: 'Southern Hospitality Group',
        status: 'Completed',
        brandColor: '#FF33FF',
        textColor: '#000000',
        logoText: 'SH',
        categories: [
          {
            name: 'Main Lease Agreement',
            isPredefined: true,
            documents: [
              {
                id: 'doc18',
                name: 'Southern_Hospitality_Lease.pdf',
                type: 'PDF',
                category: 'Main Lease Agreement',
                uploadDate: '2024-02-12T09:00:00Z',
                fileSize: 701234,
                status: 'Completed',
                leaseId: 'LEASE-2024-014',
              },
            ],
          },
        ],
      },
    ],
  },
];

// Helper function to get total document count for an asset
export function getAssetDocumentCount(assetId: string): number {
  const asset = ASSET_DOCUMENTS.find(a => a.assetId === assetId);
  if (!asset) return 0;
  
  const buildingDocs = asset.buildingDocuments.length;
  const tenantDocs = asset.tenants.reduce((sum, tenant) => {
    return sum + tenant.categories.reduce((catSum, category) => {
      return catSum + category.documents.length;
    }, 0);
  }, 0);
  
  return buildingDocs + tenantDocs;
}

// Helper function to get total document count for a tenant
export function getTenantDocumentCount(assetId: string, tenantId: string): number {
  const asset = ASSET_DOCUMENTS.find(a => a.assetId === assetId);
  if (!asset) return 0;
  
  const tenant = asset.tenants.find(t => t.tenantId === tenantId);
  if (!tenant) return 0;
  
  return tenant.categories.reduce((sum, category) => {
    return sum + category.documents.length;
  }, 0);
}