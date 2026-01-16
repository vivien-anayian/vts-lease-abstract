import { useState } from 'react';
import SearchableDropdown from './SearchableDropdown';
import { STAGES } from '../data/demoData';
import { Search, Plus } from 'lucide-react';
import imgStripeJpeg0 from "../../assets/94597ae9b6d0f8b64d4c690326576763307fa4f8.png";
import imgAmazonSymbolPng from "../../assets/9669ba8f4f98c0bc6952e9281673372fcb16cfc0.png";
import imgCarecomIconJpeg from "../../assets/6c70c51b9619ce8c7a570c1c6a1603c59f07152d.png";
import imgTgiFridaysIconJpeg from "../../assets/79341dca7da15fadd994eb33ad38399a52d0a75a.png";
import imgSageLogoRgbWhite1 from "../../assets/162f97aef4b5a25a179dede85e871d846244afd0.png";
import imgIStock51422918632 from "../../assets/1e9f70b30721711c22e4a13debb4b35dd7e8cfe5.png";
import svgPaths from "../../imports/svg-5el1co7sei";
import toolbarSvgPaths from "../../imports/svg-lc9ryvp98u";
import AssetSelectorDropdown from './AssetSelectorDropdown';

interface DealPageContentProps {
  onComplete?: () => void;
  onNavigateToDocuments?: () => void;
  onNavigate?: (page: string) => void;
  onStageChange?: (stage: string, dealData: {asset: string, tenant: string, assetId: string, tenantId: string}) => void;
}

interface Deal {
  id: string;
  tenant: string;
  tenantLogo?: string;
  tenantId: string;
  asset: string;
  assetId: string;
  stage: string;
  ner: string;
  contact: string;
  lastUpdate: string;
}

export default function DealPageContent({ onComplete, onNavigateToDocuments, onNavigate, onStageChange }: DealPageContentProps) {
  const [deals, setDeals] = useState<Deal[]>([
    {
      id: '1',
      tenant: 'Stripe',
      tenantLogo: imgStripeJpeg0,
      tenantId: 't1',
      asset: 'VTS Tower',
      assetId: 'a2',
      stage: 'Legal',
      ner: '$54.00',
      contact: 'Arlene McCoy',
      lastUpdate: '14 hours',
    },
    {
      id: '2',
      tenant: 'Amazon',
      tenantLogo: imgAmazonSymbolPng,
      tenantId: 't2',
      asset: 'One East Broad...',
      assetId: 'a3',
      stage: 'Legal',
      ner: '$54.00',
      contact: 'Arlene McCoy',
      lastUpdate: '14 hours',
    },
    {
      id: '3',
      tenant: 'Care.com',
      tenantLogo: imgCarecomIconJpeg,
      tenantId: 't3',
      asset: 'VTS Tower',
      assetId: 'a2',
      stage: 'Legal',
      ner: '$54.00',
      contact: 'Arlene McCoy',
      lastUpdate: '14 hours',
    },
    {
      id: '4',
      tenant: 'Tenco',
      tenantId: 't15',
      asset: 'VTS Tower',
      assetId: 'a2',
      stage: 'Legal',
      ner: '$54.00',
      contact: 'Arlene McCoy',
      lastUpdate: '14 hours',
    },
    {
      id: '5',
      tenant: 'TGI Fridays',
      tenantLogo: imgTgiFridaysIconJpeg,
      tenantId: 't4',
      asset: 'VTS Tower',
      assetId: 'a2',
      stage: 'Legal',
      ner: '$54.00',
      contact: 'Arlene McCoy',
      lastUpdate: '14 hours',
    },
    {
      id: '6',
      tenant: 'WeWork',
      tenantId: 't5',
      asset: 'One East Broad...',
      assetId: 'a3',
      stage: 'Proposal',
      ner: '$62.50',
      contact: 'Devon Lane',
      lastUpdate: '1 day',
    },
    {
      id: '7',
      tenant: 'Salesforce',
      tenantId: 't6',
      asset: 'Madison Square',
      assetId: 'a4',
      stage: 'Lease Executed',
      ner: '$75.00',
      contact: 'Robert Fox',
      lastUpdate: '2 days',
    },
    {
      id: '8',
      tenant: 'Meta',
      tenantId: 't7',
      asset: 'VTS Tower',
      assetId: 'a2',
      stage: 'Negotiation',
      ner: '$68.00',
      contact: 'Jenny Wilson',
      lastUpdate: '3 days',
    },
    {
      id: '9',
      tenant: 'Shopify',
      tenantId: 't8',
      asset: 'Central Plaza',
      assetId: 'a5',
      stage: 'Tour',
      ner: '$45.00',
      contact: 'Kristin Watson',
      lastUpdate: '5 days',
    },
    {
      id: '10',
      tenant: 'Netflix',
      tenantId: 't9',
      asset: 'One East Broad...',
      assetId: 'a3',
      stage: 'Proposal',
      ner: '$72.00',
      contact: 'Cameron Williamson',
      lastUpdate: '1 week',
    },
    {
      id: '11',
      tenant: 'Airbnb',
      tenantId: 't10',
      asset: 'Madison Square',
      assetId: 'a4',
      stage: 'Legal',
      ner: '$58.00',
      contact: 'Esther Howard',
      lastUpdate: '1 week',
    },
    {
      id: '12',
      tenant: 'Uber',
      tenantId: 't11',
      asset: 'VTS Tower',
      assetId: 'a2',
      stage: 'Negotiation',
      ner: '$66.00',
      contact: 'Wade Warren',
      lastUpdate: '2 weeks',
    },
    {
      id: '13',
      tenant: 'LinkedIn',
      tenantId: 't12',
      asset: 'Central Plaza',
      assetId: 'a5',
      stage: 'Tour',
      ner: '$52.00',
      contact: 'Courtney Henry',
      lastUpdate: '2 weeks',
    },
    {
      id: '14',
      tenant: 'Dropbox',
      tenantId: 't13',
      asset: 'One East Broad...',
      assetId: 'a3',
      stage: 'Proposal',
      ner: '$48.00',
      contact: 'Darrell Steward',
      lastUpdate: '3 weeks',
    },
    {
      id: '15',
      tenant: 'Slack',
      tenantId: 't14',
      asset: 'VTS Tower',
      assetId: 'a2',
      stage: 'Legal',
      ner: '$55.00',
      contact: 'Theresa Webb',
      lastUpdate: '1 month',
    },
  ]);

  const handleStageChange = (dealId: string, newStage: string) => {
    const deal = deals.find(d => d.id === dealId);
    if (!deal) return;

    setDeals(prevDeals =>
      prevDeals.map(d =>
        d.id === dealId ? { ...d, stage: newStage } : d
      )
    );
    
    onComplete?.();
    onStageChange?.(newStage, {asset: deal.asset, tenant: deal.tenant, assetId: deal.assetId, tenantId: deal.tenantId});
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

          {/* Nav Items */}
          <div className="space-y-0">
            <div className="h-[36px] flex items-center pl-[24px] text-[#373a3e] text-[14px] font-['Inter:Regular',sans-serif] leading-[20px] cursor-pointer hover:bg-[#ecedef] transition-colors">
              Requirements
            </div>
            <div className="h-[36px] flex items-center pl-[24px] bg-[#ecedef] border-l-4 border-[#4837b9] text-[#1d1e20] text-[14px] font-['Inter:Regular',sans-serif] leading-[20px] cursor-pointer relative">
              Deals
            </div>
            <div className="h-[36px] flex items-center pl-[24px] text-[#373a3e] text-[14px] font-['Inter:Regular',sans-serif] leading-[20px] cursor-pointer hover:bg-[#ecedef] transition-colors">
              Deal tasks
            </div>
            <div className="h-[36px] flex items-center pl-[24px] text-[#373a3e] text-[14px] font-['Inter:Regular',sans-serif] leading-[20px] cursor-pointer hover:bg-[#ecedef] transition-colors">
              Tenant coordination
            </div>
            <div onClick={() => onNavigate?.('leases')} className="h-[36px] flex items-center pl-[24px] text-[#373a3e] text-[14px] font-['Inter:Regular',sans-serif] leading-[20px] cursor-pointer hover:bg-[#ecedef] transition-colors">
              Leases
            </div>
            <div className="h-[36px] flex items-center pl-[24px] text-[#373a3e] text-[14px] font-['Inter:Regular',sans-serif] leading-[20px] cursor-pointer hover:bg-[#ecedef] transition-colors">
              Options
            </div>
            <div className="h-[36px] flex items-center pl-[24px] text-[#373a3e] text-[14px] font-['Inter:Regular',sans-serif] leading-[20px] cursor-pointer hover:bg-[#ecedef] transition-colors">
              Budgets
            </div>
            <button
              onClick={() => onNavigate?.('building-documents')}
              className="w-full h-[36px] flex items-center pl-[24px] text-[#373a3e] text-[14px] font-['Inter:Regular',sans-serif] leading-[20px] cursor-pointer hover:bg-[#ecedef] transition-colors"
            >
              Documents
            </button>
            <div onClick={() => onNavigate?.('abstraction-pipeline')} className="h-[36px] flex items-center pl-[24px] text-[#373a3e] text-[14px] font-['Inter:Regular',sans-serif] leading-[20px] cursor-pointer hover:bg-[#ecedef] transition-colors">
              Abstraction pipeline
            </div>
            <div className="h-[36px] flex items-center pl-[24px] text-[#373a3e] text-[14px] font-['Inter:Regular',sans-serif] leading-[20px] cursor-pointer hover:bg-[#ecedef] transition-colors">
              Appraisals
            </div>
            <div className="h-[36px] flex items-center pl-[24px] text-[#373a3e] text-[14px] font-['Inter:Regular',sans-serif] leading-[20px] cursor-pointer hover:bg-[#ecedef] transition-colors">
              Comps
            </div>
            <div className="h-[36px] flex items-center pl-[24px] text-[#373a3e] text-[14px] font-['Inter:Regular',sans-serif] leading-[20px] cursor-pointer hover:bg-[#ecedef] transition-colors">
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

      {/* Main Content */}
      <div className="ml-[224px] pt-[48px] p-[24px]">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 py-[8px]">
          <p className="text-[#4837b9] text-[13px] font-['Inter:Regular',sans-serif]">VTS Lease</p>
          <p className="text-[#99a1af] text-[13px]">{'>'}</p>
          <p className="text-[#1d1e20] text-[13px] font-['Inter:Regular',sans-serif]">Deals</p>
        </div>

        {/* Page Title */}
        <div className="mb-[32px] mt-[12px]">
          <p className="text-[#1d1e20] text-[24px] font-semibold font-['Inter:Semi_Bold',sans-serif] leading-[32px]">Deals</p>
        </div>

        {/* Filters */}
        <div className="flex gap-[8px] mb-[24px]">
          <div className="relative w-[276px]">
            <input 
              type="text" 
              placeholder="Keyword filter" 
              className="w-full h-[32px] px-[8px] py-[6px] bg-white border border-[#d6d8db] rounded-[3px] text-[14px] font-['IBM_Plex_Sans:Regular',sans-serif] leading-[20px] placeholder:text-[#bbbfc4]"
            />
          </div>
          <select className="w-[173px] h-[32px] px-[8px] py-[6px] bg-white border border-[#d6d8db] rounded-[3px] text-[14px] font-['IBM_Plex_Sans:Regular',sans-serif] leading-[20px] text-[#72777e]">
            <option>Select</option>
          </select>
          <select className="w-[173px] h-[32px] px-[8px] py-[6px] bg-white border border-[#d6d8db] rounded-[3px] text-[14px] font-['IBM_Plex_Sans:Regular',sans-serif] leading-[20px] text-[#72777e]">
            <option>Select</option>
          </select>
          <select className="w-[173px] h-[32px] px-[8px] py-[6px] bg-white border border-[#d6d8db] rounded-[3px] text-[14px] font-['IBM_Plex_Sans:Regular',sans-serif] leading-[20px] text-[#72777e]">
            <option>Select</option>
          </select>
          <button className="px-[12px] py-[6px] border border-[#280f96] text-[#280f96] rounded-[4px] text-[14px] font-['Inter:Regular',sans-serif] leading-[20px] hover:bg-[#280f96] hover:text-white transition-colors">
            All filters
          </button>
        </div>

        {/* Table */}
        <div className="bg-white rounded-[8px] shadow-[0px_0px_5px_0px_rgba(0,0,0,0.15)] overflow-hidden">
          {/* Toolbar */}
          <div className="h-[56px] flex items-center justify-end px-[24px] border-b border-[#ecedef]">
            <div className="flex gap-[8px]">
              <button className="content-stretch flex gap-[6px] h-[32px] items-center justify-center overflow-clip px-[12px] py-[6px] rounded-[4px] hover:bg-gray-50 transition-colors">
                <div className="size-[14px]">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
                    <g clipPath="url(#clip0_chart)">
                      <path d={toolbarSvgPaths.p85f9100} fill="#4837B9" />
                    </g>
                    <defs>
                      <clipPath id="clip0_chart">
                        <rect fill="white" height="14" width="14" />
                      </clipPath>
                    </defs>
                  </svg>
                </div>
                <p className="font-['Inter:Regular',sans-serif] font-normal leading-[20px] not-italic shrink-0 text-[#4837b9] text-[14px] text-center text-nowrap">View leasing report</p>
                <div className="bg-[#ccf] content-stretch flex items-end justify-center pb-[2px] pt-0 px-[6px] rounded-[100px] shrink-0">
                  <p className="font-['Inter:Regular',sans-serif] font-normal leading-[14px] not-italic shrink-0 text-[#1d1e20] text-[10px] text-nowrap">Beta</p>
                </div>
              </button>
              <button className="content-stretch flex gap-[6px] h-[32px] items-center justify-center overflow-clip px-[12px] py-[6px] rounded-[4px] hover:bg-gray-50 transition-colors">
                <div className="size-[14px]">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
                    <g>
                      <path d={toolbarSvgPaths.p33b1de00} fill="#72777E" />
                    </g>
                  </svg>
                </div>
                <p className="font-['Inter:Regular',sans-serif] font-normal leading-[20px] not-italic shrink-0 text-[#72777e] text-[14px] text-center text-nowrap">Export</p>
              </button>
              <button className="content-stretch flex gap-[6px] h-[32px] items-center justify-center overflow-clip px-[12px] py-[6px] rounded-[4px] hover:bg-gray-50 transition-colors">
                <div className="size-[14px]">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
                    <g clipPath="url(#clip0_setup)">
                      <path d={toolbarSvgPaths.pf42dda0} fill="#72777E" />
                    </g>
                    <defs>
                      <clipPath id="clip0_setup">
                        <rect fill="white" height="14" width="14" />
                      </clipPath>
                    </defs>
                  </svg>
                </div>
                <p className="font-['Inter:Regular',sans-serif] font-normal leading-[20px] not-italic shrink-0 text-[#72777e] text-[14px] text-center text-nowrap">Edit columns</p>
              </button>
              <button className="content-stretch flex items-center justify-center overflow-clip px-[16px] py-[4px] rounded-[4px] size-[32px] hover:bg-gray-50 transition-colors">
                <div className="size-[14px]">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
                    <g>
                      <g>
                        <path d={toolbarSvgPaths.p282e5280} fill="#72777E" />
                        <path d={toolbarSvgPaths.p1e9bf000} fill="#72777E" />
                        <path d={toolbarSvgPaths.p22979df0} fill="#72777E" />
                      </g>
                    </g>
                  </svg>
                </div>
              </button>
              <button className="bg-[#4837b9] content-stretch flex gap-[6px] h-[32px] items-center justify-center overflow-clip px-[12px] py-[6px] rounded-[4px] hover:bg-[#3626a8] transition-colors">
                <div className="size-[14px]">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
                    <g clipPath="url(#clip0_plus)">
                      <path d={toolbarSvgPaths.p1383ff00} fill="white" />
                    </g>
                    <defs>
                      <clipPath id="clip0_plus">
                        <rect fill="white" height="14" width="14" />
                      </clipPath>
                    </defs>
                  </svg>
                </div>
                <p className="font-['Inter:Regular',sans-serif] font-normal leading-[20px] not-italic shrink-0 text-[14px] text-center text-nowrap text-white">Deal</p>
              </button>
            </div>
          </div>

          {/* Table Header */}
          <div className="h-[36px] bg-[#f4f5f6] border-b border-[#ecedef] flex items-center px-[24px] text-[#72777e] text-[12px] font-['Inter:Regular',sans-serif] leading-[16px]">
            <div className="w-[40px]"></div>
            <div className="w-[220px]">Tenant</div>
            <div className="w-[180px]">Asset</div>
            <div className="w-[150px]">Stage</div>
            <div className="w-[120px]">NER/Size/yr</div>
            <div className="w-[150px]">Contact</div>
            <div className="flex-1">Last update</div>
          </div>

          {/* Table Rows */}
          {deals.map((deal) => (
            <div key={deal.id} className="flex items-center px-[24px] py-[8px] border-b border-[#ecedef] hover:bg-gray-50 transition-colors">
              <div className="w-[40px] flex items-center gap-3">
                <div className="w-4 h-4 bg-white border border-[#ecedef] rounded-[1px]" />
                <svg className="w-4 h-4" fill="none" viewBox="0 0 16 16">
                  <path d="M8 2L9.5 6.5L14 8L9.5 9.5L8 14L6.5 9.5L2 8L6.5 6.5L8 2Z" stroke="#72777e" strokeWidth="1" fill="none"/>
                </svg>
              </div>
              
              <div className="w-[220px] flex items-center gap-3">
                {deal.tenantLogo && (
                  <img src={deal.tenantLogo} alt={deal.tenant} className="w-8 h-8 rounded-[2px] object-cover" />
                )}
                {!deal.tenantLogo && (
                  <div className="w-8 h-8 rounded-[2px] bg-[#1d1e20] flex items-center justify-center text-white text-[12px] font-['IBM_Plex_Sans:Regular',sans-serif]">
                    {deal.tenant.substring(0, 1)}
                  </div>
                )}
                <div>
                  <p className="text-[#1d1e20] text-[12px] font-semibold font-['Inter:Semi_Bold',sans-serif] leading-[16px]">{deal.tenant}</p>
                  <p className="text-[#72777e] text-[11px] font-['Inter:Regular',sans-serif] leading-[14px]">New deal</p>
                </div>
              </div>

              <div className="w-[180px]">
                <p className="text-[#1d1e20] text-[12px] font-['Inter:Regular',sans-serif] leading-[16px]">{deal.asset}</p>
                <p className="text-[#72777e] text-[11px] font-['Inter:Regular',sans-serif] leading-[14px]">Level 2, 13 | 2,000 sf</p>
              </div>

              <div className="w-[150px]">
                <SearchableDropdown
                  value={deal.stage}
                  options={STAGES.map((s, i) => ({ id: String(i), name: s }))}
                  onChange={(newStage) => handleStageChange(deal.id, newStage)}
                  placeholder="Select stage"
                  className="w-[144px]"
                  compact={true}
                />
              </div>

              <div className="w-[120px]">
                <p className="text-[#1d1e20] text-[12px] font-['Inter:Regular',sans-serif] leading-[16px]">{deal.ner}</p>
              </div>

              <div className="w-[150px]">
                <p className="text-[#1d1e20] text-[12px] font-['Inter:Regular',sans-serif] leading-[16px]">{deal.contact}</p>
                <p className="text-[#72777e] text-[11px] font-['Inter:Regular',sans-serif] leading-[14px]">Contact</p>
              </div>

              <div className="flex-1">
                <p className="text-[#1d1e20] text-[12px] font-['Inter:Regular',sans-serif] leading-[16px]">{deal.lastUpdate}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}