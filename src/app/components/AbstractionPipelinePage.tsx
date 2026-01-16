import { useState } from 'react';
import { 
  Search, 
  Building2, 
  ChevronRight, 
  ChevronDown, 
  FileText, 
  File,
  FolderOpen,
  Folder,
  Filter,
  Users,
  Plus,
  Upload,
  Calendar,
  Download,
} from 'lucide-react';
import AssetSelectorDropdown from './AssetSelectorDropdown';

interface AbstractionPipelinePageProps {
  onViewDocument?: (leaseId: string) => void;
  currentPage?: string;
  onNavigate?: (page: string) => void;
}

// Mock data for pipeline stages
const PIPELINE_DATA = [
  { stage: 'Submitted', count: 1, color: '#4169E1' },
  { stage: 'Work-in-Progress', count: 1, color: '#FFA500' },
  { stage: 'QA', count: 2, color: '#9370DB' },
  { stage: 'Review', count: 3, color: '#20B2AA' },
  { stage: 'Completed', count: 5, color: '#32CD32' },
];

// Mock lease items for the table
const MOCK_LEASE_ITEMS = [
  { id: '1', tenant: 'Stripe', asset: 'One World Trade Center', suite: 'Suite 4200', stage: 'Submitted', submittedDate: '12/15/2025', assignedTo: 'John Smith' },
  { id: '2', tenant: 'Airbnb', asset: 'VTS Tower', suite: 'Suite 2100', stage: 'Work-in-Progress', submittedDate: '12/10/2025', assignedTo: 'Sarah Johnson' },
  { id: '3', tenant: 'Slack', asset: 'Hudson Yards', suite: 'Floor 15', stage: 'QA', submittedDate: '12/08/2025', assignedTo: 'Mike Chen' },
  { id: '4', tenant: 'Zoom', asset: 'One World Trade Center', suite: 'Suite 3500', stage: 'QA', submittedDate: '12/07/2025', assignedTo: 'Emily Davis' },
  { id: '5', tenant: 'Figma', asset: 'VTS Tower', suite: 'Suite 1800', stage: 'Review', submittedDate: '12/05/2025', assignedTo: 'John Smith' },
  { id: '6', tenant: 'Notion', asset: 'Hudson Yards', suite: 'Suite 2200', stage: 'Review', submittedDate: '12/04/2025', assignedTo: 'Sarah Johnson' },
  { id: '7', tenant: 'Dropbox', asset: 'One World Trade Center', suite: 'Floor 22', stage: 'Review', submittedDate: '12/03/2025', assignedTo: 'Mike Chen' },
  { id: '8', tenant: 'Shopify', asset: 'VTS Tower', suite: 'Suite 4100', stage: 'Completed', submittedDate: '11/28/2025', assignedTo: 'Emily Davis' },
  { id: '9', tenant: 'Asana', asset: 'Hudson Yards', suite: 'Suite 3300', stage: 'Completed', submittedDate: '11/25/2025', assignedTo: 'John Smith' },
  { id: '10', tenant: 'Square', asset: 'One World Trade Center', suite: 'Suite 1900', stage: 'Completed', submittedDate: '11/22/2025', assignedTo: 'Sarah Johnson' },
  { id: '11', tenant: 'Lyft', asset: 'VTS Tower', suite: 'Floor 8', stage: 'Completed', submittedDate: '11/20/2025', assignedTo: 'Mike Chen' },
  { id: '12', tenant: 'Pinterest', asset: 'Hudson Yards', suite: 'Suite 2700', stage: 'Completed', submittedDate: '11/18/2025', assignedTo: 'Emily Davis' },
];

function getStageColor(stage: string): string {
  switch (stage) {
    case 'Submitted':
      return 'bg-blue-100 text-blue-800 border border-blue-200';
    case 'Work-in-Progress':
      return 'bg-orange-100 text-orange-800 border border-orange-200';
    case 'QA':
      return 'bg-purple-100 text-purple-800 border border-purple-200';
    case 'Review':
      return 'bg-teal-100 text-teal-800 border border-teal-200';
    case 'Completed':
      return 'bg-green-100 text-green-800 border border-green-200';
    default:
      return 'bg-gray-100 text-gray-800 border border-gray-200';
  }
}

export default function AbstractionPipelinePage({ onViewDocument, currentPage = 'abstraction-pipeline', onNavigate }: AbstractionPipelinePageProps) {
  const [selectedStage, setSelectedStage] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState('');

  const totalCount = PIPELINE_DATA.reduce((sum, item) => sum + item.count, 0);
  const maxCount = Math.max(...PIPELINE_DATA.map(item => item.count));

  const filteredLeases = MOCK_LEASE_ITEMS.filter(lease => {
    const matchesStage = selectedStage === 'all' || lease.stage === selectedStage;
    const matchesSearch = searchQuery === '' || 
      lease.tenant.toLowerCase().includes(searchQuery.toLowerCase()) ||
      lease.asset.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesStage && matchesSearch;
  });

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
                <Plus className="w-[23px] h-[23px] text-white" strokeWidth={2.5} />
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

          {/* Nav Items - REORDERED */}
          <div className="space-y-0">
            <div onClick={() => onNavigate?.('deals')} className="h-[36px] flex items-center pl-[24px] text-[#373a3e] text-[14px] font-['Inter:Regular',sans-serif] leading-[20px] cursor-pointer hover:bg-[#ecedef] transition-colors">
              Requirements
            </div>
            <div onClick={() => onNavigate?.('deals')} className="h-[36px] flex items-center pl-[24px] text-[#373a3e] text-[14px] font-['Inter:Regular',sans-serif] leading-[20px] cursor-pointer hover:bg-[#ecedef] transition-colors">
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
            {/* Documents moved here (after Budgets) */}
            <div onClick={() => onNavigate?.('documents')} className="h-[36px] flex items-center pl-[24px] text-[#373a3e] text-[14px] font-['Inter:Regular',sans-serif] leading-[20px] cursor-pointer hover:bg-[#ecedef] transition-colors">
              Documents
            </div>
            {/* NEW: Abstraction pipeline (after Documents) */}
            <div className="h-[36px] flex items-center pl-[24px] bg-[#ecedef] border-l-4 border-[#4837b9] text-[#1d1e20] text-[14px] font-['Inter:Regular',sans-serif] leading-[20px] cursor-pointer relative">
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
      <div className="ml-[224px] pt-[48px]">
        <div className="p-[32px]">
          {/* Page Header */}
          <div className="flex items-center justify-between mb-[24px]">
            <h1 className="text-[28px] font-bold font-['Inter:Bold',sans-serif] text-[#1d1e20]">
              Abstraction Pipeline
            </h1>
            <div className="flex gap-[12px]">
              <button className="px-[16px] h-[36px] bg-white border border-[#d0d9e1] rounded-[6px] text-[#1d1e20] text-[14px] font-['Inter:Medium',sans-serif] hover:bg-[#f9fafb] transition-colors flex items-center gap-[8px]">
                <Download className="w-4 h-4" />
                Reports
              </button>
              <button className="px-[16px] h-[36px] bg-[#4837b9] rounded-[6px] text-white text-[14px] font-['Inter:Medium',sans-serif] hover:bg-[#3a2b94] transition-colors flex items-center gap-[8px]">
                <Download className="w-4 h-4" />
                Export
              </button>
            </div>
          </div>

          {/* Top Controls */}
          <div className="flex items-center gap-[16px] mb-[32px]">
            {/* Dropdown */}
            <div className="relative">
              <button className="h-[40px] px-[16px] bg-white border border-[#d0d9e1] rounded-[6px] text-[#1d1e20] text-[14px] font-['Inter:Regular',sans-serif] flex items-center gap-[8px] hover:bg-[#f9fafb] transition-colors">
                Lease Abstraction
                <ChevronDown className="w-4 h-4 text-[#72777e]" />
              </button>
            </div>

            {/* Date Range */}
            <div className="flex items-center gap-[8px] h-[40px] px-[16px] bg-white border border-[#d0d9e1] rounded-[6px]">
              <Calendar className="w-4 h-4 text-[#72777e]" />
              <span className="text-[14px] font-['Inter:Regular',sans-serif] text-[#1d1e20]">
                08/04/2025 to 12/17/2025
              </span>
            </div>
          </div>

          {/* Chart Section */}
          <div className="bg-white rounded-[8px] border border-[#e5e7eb] p-[24px] mb-[24px]">
            <h2 className="text-[16px] font-semibold font-['Inter:SemiBold',sans-serif] text-[#1d1e20] mb-[24px]">
              Pipeline Overview
            </h2>

            {/* Bar Chart */}
            <div className="flex items-end gap-[24px] h-[240px] mb-[16px]">
              {PIPELINE_DATA.map((item) => {
                const heightPercent = (item.count / maxCount) * 100;
                return (
                  <div key={item.stage} className="flex-1 flex flex-col items-center gap-[12px]">
                    <div className="w-full flex flex-col items-center justify-end" style={{ height: '200px' }}>
                      {/* Count label */}
                      <div className="text-[18px] font-semibold font-['Inter:SemiBold',sans-serif] text-[#1d1e20] mb-[8px]">
                        {item.count}
                      </div>
                      {/* Bar */}
                      <div 
                        className="w-full rounded-t-[6px] transition-all duration-300 hover:opacity-80 cursor-pointer"
                        style={{ 
                          backgroundColor: item.color,
                          height: `${heightPercent}%`,
                          minHeight: '20px'
                        }}
                      />
                    </div>
                    {/* Stage label */}
                    <div className="text-[12px] font-['Inter:Regular',sans-serif] text-[#72777e] text-center">
                      {item.stage}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Filter Tabs */}
          <div className="flex items-center gap-[8px] mb-[16px] border-b border-[#e5e7eb]">
            <button
              onClick={() => setSelectedStage('all')}
              className={`px-[16px] h-[40px] text-[14px] font-['Inter:Medium',sans-serif] border-b-2 transition-colors ${
                selectedStage === 'all'
                  ? 'border-[#4837b9] text-[#4837b9]'
                  : 'border-transparent text-[#72777e] hover:text-[#1d1e20]'
              }`}
            >
              All Staging ({totalCount})
            </button>
            {PIPELINE_DATA.map((item) => (
              <button
                key={item.stage}
                onClick={() => setSelectedStage(item.stage)}
                className={`px-[16px] h-[40px] text-[14px] font-['Inter:Medium',sans-serif] border-b-2 transition-colors ${
                  selectedStage === item.stage
                    ? 'border-[#4837b9] text-[#4837b9]'
                    : 'border-transparent text-[#72777e] hover:text-[#1d1e20]'
                }`}
              >
                {item.stage} ({item.count})
              </button>
            ))}
          </div>

          {/* Search Bar */}
          <div className="mb-[16px]">
            <div className="relative">
              <Search className="absolute left-[12px] top-1/2 -translate-y-1/2 w-4 h-4 text-[#72777e]" />
              <input
                type="text"
                placeholder="Search by tenant or asset..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full h-[40px] pl-[40px] pr-[16px] bg-white border border-[#d0d9e1] rounded-[6px] text-[14px] font-['Inter:Regular',sans-serif] text-[#1d1e20] placeholder:text-[#bbbfc4] focus:outline-none focus:ring-2 focus:ring-[#4837b9] focus:border-transparent"
              />
            </div>
          </div>

          {/* Table */}
          <div className="bg-white rounded-[8px] border border-[#e5e7eb] overflow-hidden">
            <table className="w-full">
              <thead className="bg-[#f9fafb] border-b border-[#e5e7eb]">
                <tr>
                  <th className="px-[16px] py-[12px] text-left text-[12px] font-semibold font-['Inter:SemiBold',sans-serif] text-[#72777e] uppercase tracking-wider">
                    Tenant
                  </th>
                  <th className="px-[16px] py-[12px] text-left text-[12px] font-semibold font-['Inter:SemiBold',sans-serif] text-[#72777e] uppercase tracking-wider">
                    Asset
                  </th>
                  <th className="px-[16px] py-[12px] text-left text-[12px] font-semibold font-['Inter:SemiBold',sans-serif] text-[#72777e] uppercase tracking-wider">
                    Suite/Space
                  </th>
                  <th className="px-[16px] py-[12px] text-left text-[12px] font-semibold font-['Inter:SemiBold',sans-serif] text-[#72777e] uppercase tracking-wider">
                    Stage
                  </th>
                  <th className="px-[16px] py-[12px] text-left text-[12px] font-semibold font-['Inter:SemiBold',sans-serif] text-[#72777e] uppercase tracking-wider">
                    Submitted Date
                  </th>
                  <th className="px-[16px] py-[12px] text-left text-[12px] font-semibold font-['Inter:SemiBold',sans-serif] text-[#72777e] uppercase tracking-wider">
                    Assigned To
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#e5e7eb]">
                {filteredLeases.map((lease) => (
                  <tr
                    key={lease.id}
                    className="hover:bg-[#f9fafb] transition-colors cursor-pointer"
                    onClick={() => onViewDocument && onViewDocument(lease.id)}
                  >
                    <td className="px-[16px] py-[12px] text-[14px] font-['Inter:Regular',sans-serif] text-[#1d1e20]">
                      {lease.tenant}
                    </td>
                    <td className="px-[16px] py-[12px] text-[14px] font-['Inter:Regular',sans-serif] text-[#1d1e20]">
                      {lease.asset}
                    </td>
                    <td className="px-[16px] py-[12px] text-[14px] font-['Inter:Regular',sans-serif] text-[#72777e]">
                      {lease.suite}
                    </td>
                    <td className="px-[16px] py-[12px]">
                      <span className={`inline-flex items-center px-[8px] py-[4px] rounded-[4px] text-[12px] font-medium font-['Inter:Medium',sans-serif] ${getStageColor(lease.stage)}`}>
                        {lease.stage}
                      </span>
                    </td>
                    <td className="px-[16px] py-[12px] text-[14px] font-['Inter:Regular',sans-serif] text-[#72777e]">
                      {lease.submittedDate}
                    </td>
                    <td className="px-[16px] py-[12px] text-[14px] font-['Inter:Regular',sans-serif] text-[#72777e]">
                      {lease.assignedTo}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>

            {filteredLeases.length === 0 && (
              <div className="py-[48px] text-center">
                <p className="text-[14px] font-['Inter:Regular',sans-serif] text-[#72777e]">
                  No leases found matching your criteria
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}