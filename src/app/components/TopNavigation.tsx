import { useState } from 'react';
import GlobalSearch from './GlobalSearch';
import svgPaths from "../../imports/svg-5el1co7sei";

interface TopNavigationProps {
  currentPage: 'deals' | 'leases' | 'insights' | 'document-central' | 'vts-ai' | 'building-documents';
  onNavigate: (page: 'deals' | 'leases' | 'insights' | 'document-central' | 'vts-ai' | 'building-documents') => void;
}

export default function TopNavigation({ currentPage, onNavigate }: TopNavigationProps) {
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  return (
    <>
      <div className="bg-[#1d1e20] h-[48px] w-full flex items-center fixed top-0 left-0 right-0 z-30">
        {/* Logo Section */}
        <button 
          onClick={() => onNavigate('deals')}
          className="bg-[#1d1e20] content-stretch flex items-center justify-center px-[16px] py-[8px] shrink-0 hover:bg-[#303030] transition-colors"
        >
          <div className="content-stretch flex gap-[24px] items-center justify-center">
            <div className="h-[20px] w-[80px]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 80 20">
                <g>
                  <path d={svgPaths.p7778840} fill="#E5E5E5" />
                </g>
              </svg>
            </div>
            <div className="size-[14px]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
                <g clipPath="url(#clip0_5_96)">
                  <g>
                    <path d={svgPaths.p10779b00} fill="#D6D8DB" />
                    <path d={svgPaths.p6271100} fill="#D6D8DB" />
                    <path d={svgPaths.p31eb0680} fill="#D6D8DB" />
                    <path d={svgPaths.p4258000} fill="#D6D8DB" />
                    <path d={svgPaths.p1edd2e80} fill="#D6D8DB" />
                    <path d={svgPaths.p25d01d00} fill="#D6D8DB" />
                    <path d={svgPaths.p68ff600} fill="#D6D8DB" />
                    <path d={svgPaths.p2960ac00} fill="#D6D8DB" />
                    <path d={svgPaths.p29761c80} fill="#D6D8DB" />
                  </g>
                </g>
                <defs>
                  <clipPath id="clip0_5_96">
                    <rect fill="white" height="14" width="14" />
                  </clipPath>
                </defs>
              </svg>
            </div>
          </div>
        </button>

        {/* Separator */}
        <div className="content-stretch flex items-start pl-0 pr-[16px] py-0 shrink-0">
          <div className="bg-white h-[24px] opacity-20 shrink-0 w-px" />
        </div>

        {/* Nav Items - MARKET (never active in this demo) */}
        <button
          onClick={() => onNavigate('deals')}
          className="bg-[#1d1e20] content-stretch flex items-center justify-center p-[16px] shrink-0 hover:bg-[#303030] transition-colors relative"
        >
          <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[16px] not-italic shrink-0 text-[#ecedef] text-[12px] text-nowrap">MARKET</p>
        </button>
        
        <button
          onClick={() => onNavigate('leases')}
          className={`${
            currentPage === 'leases' || currentPage === 'deals' || currentPage === 'building-documents' ? 'bg-[#303030]' : 'bg-[#1d1e20]'
          } content-stretch flex items-center justify-center p-[16px] relative shrink-0 hover:bg-[#303030] transition-colors`}
        >
          <p className={`font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[16px] not-italic shrink-0 text-[12px] text-nowrap ${
            currentPage === 'leases' || currentPage === 'deals' || currentPage === 'building-documents' ? 'text-white' : 'text-[#ecedef]'
          }`}>LEASE</p>
          {(currentPage === 'leases' || currentPage === 'deals' || currentPage === 'building-documents') && (
            <div className="absolute inset-0 pointer-events-none shadow-[inset_0px_4px_0px_0px_#4837b9]" />
          )}
        </button>
        
        <button
          onClick={() => onNavigate('insights')}
          className={`${
            currentPage === 'insights' ? 'bg-[#303030]' : 'bg-[#1d1e20]'
          } content-stretch flex items-center justify-center p-[16px] shrink-0 hover:bg-[#303030] transition-colors relative`}
        >
          <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[16px] not-italic shrink-0 text-[#ecedef] text-[12px] text-nowrap">INSIGHTS</p>
          {currentPage === 'insights' && (
            <div className="absolute inset-0 pointer-events-none shadow-[inset_0px_4px_0px_0px_#4837b9]" />
          )}
        </button>
        
        {/* VTS AI - Placeholder */}
        <button
          onClick={() => onNavigate('vts-ai')}
          className={`${
            currentPage === 'vts-ai' ? 'bg-[#303030]' : 'bg-[#1d1e20]'
          } content-stretch flex items-center justify-center p-[16px] shrink-0 hover:bg-[#303030] transition-colors relative group`}
        >
          <svg width="92" height="13" viewBox="0 0 92 13" fill="none" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient gradientUnits="userSpaceOnUse" id="vts-ai-gradient" x1="4.22342e-05" x2="15.1644" y1="2.24053" y2="3.52435">
                <stop stopColor="#8C82FF" />
                <stop offset="1" stopColor="#673FFF" />
              </linearGradient>
            </defs>
            <path d="M12.5689 7.99859C12.5329 7.90285 12.3979 7.90288 12.3619 7.99859L11.9214 9.18316C11.7952 9.52294 11.5267 9.79122 11.1871 9.91753L10.0035 10.358C9.90716 10.3938 9.90716 10.5302 10.0035 10.566L11.1871 11.0054C11.5267 11.1317 11.7951 11.4 11.9214 11.7398L12.3619 12.9244C12.3977 13.0206 12.5331 13.0207 12.5689 12.9244L13.0093 11.7398C13.1356 11.4001 13.4032 11.1318 13.7427 11.0054L14.9273 10.566C15.0236 10.5302 15.0236 10.3938 14.9273 10.358L13.7427 9.91753C13.4032 9.79117 13.1356 9.52281 13.0093 9.18316L12.5689 7.99859ZM4.97416 2.78472C4.9066 2.60306 4.65011 2.60303 4.58256 2.78472L3.75248 5.01812C3.51438 5.65877 3.00939 6.16377 2.3687 6.40191L0.136274 7.23199C-0.0453849 7.29955 -0.0453849 7.557 0.136274 7.62457L2.3687 8.45464C3.00918 8.69276 3.51435 9.19767 3.75248 9.83843L4.58256 12.0718C4.65011 12.2535 4.90662 12.2535 4.97416 12.0718L5.80424 9.83843C6.04233 9.19789 6.54747 8.69282 7.18803 8.45464L9.42143 7.62457C9.60297 7.55695 9.60301 7.29956 9.42143 7.23199L7.18803 6.40191C6.54763 6.16371 6.0423 5.65889 5.80424 5.01812L4.97416 2.78472ZM11.4341 0.101128C11.386 -0.0285011 11.203 -0.0285011 11.1548 0.101128L10.5621 1.6939C10.3922 2.15104 10.0319 2.51234 9.57475 2.68218L7.981 3.27398C7.85184 3.3223 7.85181 3.50499 7.981 3.55328L9.57475 4.14507C10.0317 4.31485 10.3921 4.67547 10.5621 5.13238L11.1548 6.72613C11.203 6.85576 11.386 6.85576 11.4341 6.72613L12.0259 5.13238C12.1958 4.67546 12.5563 4.31488 13.0132 4.14507L14.607 3.55328C14.7365 3.50511 14.7365 3.32218 14.607 3.27398L13.0132 2.68218C12.5561 2.51233 12.1958 2.15103 12.0259 1.6939L11.4341 0.101128Z" className={`${currentPage === 'vts-ai' ? 'fill-[url(#vts-ai-gradient)]' : 'fill-white/75'} group-hover:fill-[url(#vts-ai-gradient)] transition-colors`} />
            <path d="M22.2885 10L18.9345 1.329H21.0405L23.4455 7.998L25.8375 1.329H27.9435L24.6025 10H22.2885ZM30.7462 10V2.954H28.2112V1.329H35.1272V2.954H32.6052V10H30.7462ZM35.6238 8.778L36.6378 7.374C37.2488 8.011 38.1978 8.544 39.3938 8.544C40.4078 8.544 40.9018 8.063 40.9018 7.569C40.9018 6.919 40.1478 6.698 39.1468 6.464C37.7298 6.139 35.9098 5.749 35.9098 3.812C35.9098 2.369 37.1578 1.199 39.1988 1.199C40.5768 1.199 41.7208 1.615 42.5788 2.408L41.5518 3.76C40.8498 3.11 39.9138 2.811 39.0688 2.811C38.2368 2.811 37.7948 3.175 37.7948 3.695C37.7948 4.28 38.5228 4.462 39.5238 4.696C40.9538 5.021 42.7738 5.45 42.7738 7.374C42.7738 8.96 41.6428 10.156 39.3028 10.156C37.6388 10.156 36.4428 9.597 35.6238 8.778ZM53.4139 10L52.8679 8.505H48.9939L48.4479 10H46.4199L49.7739 1.329H52.0879L55.4289 10H53.4139ZM50.9309 2.928L49.4879 6.906H52.3609L50.9309 2.928ZM56.2296 10V1.329H58.0756V10H56.2296Z" className={`${currentPage === 'vts-ai' ? 'fill-[url(#vts-ai-gradient)]' : 'fill-white'} group-hover:fill-[url(#vts-ai-gradient)] transition-colors`} />
          </svg>
          {currentPage === 'vts-ai' && (
            <div className="absolute inset-0 pointer-events-none shadow-[inset_0px_4px_0px_0px_#4837b9]" />
          )}
        </button>
        
        {/* DOCUMENT CENTRAL - Hidden for now */}
        <button
          onClick={() => onNavigate('document-central')}
          className={`${
            currentPage === 'document-central' ? 'bg-[#303030]' : 'bg-[#1d1e20]'
          } content-stretch flex items-center justify-center p-[16px] shrink-0 hover:bg-[#303030] transition-colors relative hidden`}
        >
          <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[16px] not-italic shrink-0 text-[#ecedef] text-[12px] text-nowrap">DOCUMENT CENTRAL</p>
          {currentPage === 'document-central' && (
            <div className="absolute inset-0 pointer-events-none shadow-[inset_0px_4px_0px_0px_#4837b9]" />
          )}
        </button>
        
        <button 
          onClick={() => setIsSearchOpen(true)}
          className="bg-[#1d1e20] content-stretch flex gap-[4px] items-center justify-center p-[16px] shrink-0 hover:bg-[#303030] transition-colors cursor-pointer"
        >
          <div className="size-[16px]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
              <g>
                <path d={svgPaths.p3fac18f0} fill="#ECEDEF" />
              </g>
            </svg>
          </div>
          <p className="font-['Inter:Regular',sans-serif] font-normal leading-[16px] not-italic shrink-0 text-[#ecedef] text-[12px] text-nowrap">SEARCH</p>
        </button>
      </div>

      {/* Global Search Overlay */}
      <GlobalSearch isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />
    </>
  );
}