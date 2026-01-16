export interface Asset {
  id: string;
  name: string;
  location: string;
  squareFeet: string;
}

export interface Tenant {
  id: string;
  name: string;
  standardizedName?: string;
  logo?: string;
}

export const ASSETS: Asset[] = [
  { id: '1', name: 'Empire State Building', location: 'Level 2, 13', squareFeet: '2,000 sf' },
  { id: '2', name: 'VTS Tower', location: 'Level 2, 13', squareFeet: '2,000 sf' },
  { id: '3', name: 'One East Broad...', location: 'Level 2, 13', squareFeet: '2,000 sf' },
  { id: '4', name: 'Chrysler Building', location: 'Level 5, 10', squareFeet: '3,500 sf' },
  { id: '5', name: 'Freedom Tower', location: 'Level 20, 25', squareFeet: '5,000 sf' },
  { id: '6', name: 'Flatiron Building', location: 'Level 3, 8', squareFeet: '1,500 sf' },
  { id: '7', name: 'Rockefeller Center', location: 'Level 15, 20', squareFeet: '4,200 sf' },
  { id: '8', name: 'MetLife Building', location: 'Level 10, 12', squareFeet: '2,800 sf' },
];

export const TENANTS: Tenant[] = [
  { id: '1', name: 'GlobalTech Solutions Inc.', standardizedName: 'GlobalTech Inc.' },
  { id: '2', name: 'Stripe', standardizedName: 'Stripe, Inc.' },
  { id: '3', name: 'Amazon', standardizedName: 'Amazon.com Inc.' },
  { id: '4', name: 'Care.com', standardizedName: 'Care.com inc.' },
  { id: '5', name: 'TGI Fridays', standardizedName: 'TGI Fridays Inc.' },
  { id: '6', name: 'Microsoft Corporation', standardizedName: 'Microsoft Corp.' },
  { id: '7', name: 'Apple Inc.', standardizedName: 'Apple Inc.' },
  { id: '8', name: 'Google LLC', standardizedName: 'Google LLC' },
  { id: '9', name: 'Meta Platforms', standardizedName: 'Meta Platforms Inc.' },
  { id: '10', name: 'Tesla Inc.', standardizedName: 'Tesla, Inc.' },
  { id: '11', name: 'Netflix Inc.', standardizedName: 'Netflix Inc.' },
  { id: '12', name: 'Adobe Systems', standardizedName: 'Adobe Inc.' },
];

export const STAGES = [
  'Inquiries',
  'Touring',
  'Proposals',
  'LOI',
  'Legal',
  'Leases out',
  'Lease Executed',
  'Dead deals',
];

export const CONTACTS = [
  'Arlene McCoy',
  'John Smith',
  'Jane Doe',
  'Michael Johnson',
  'Sarah Williams',
];
