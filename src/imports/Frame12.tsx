import svgPaths from "./svg-5el1co7sei";

function Frame1() {
  return (
    <div className="h-[20px] relative shrink-0 w-[80px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 80 20">
        <g id="Frame 11">
          <path d={svgPaths.p7778840} fill="var(--fill-0, #E5E5E5)" id="Union" />
        </g>
      </svg>
    </div>
  );
}

function Dots() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="Dots">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g clipPath="url(#clip0_5_96)" id="Dots">
          <g id="Shape">
            <path d={svgPaths.p10779b00} fill="var(--fill-0, #D6D8DB)" />
            <path d={svgPaths.p6271100} fill="var(--fill-0, #D6D8DB)" />
            <path d={svgPaths.p31eb0680} fill="var(--fill-0, #D6D8DB)" />
            <path d={svgPaths.p4258000} fill="var(--fill-0, #D6D8DB)" />
            <path d={svgPaths.p1edd2e80} fill="var(--fill-0, #D6D8DB)" />
            <path d={svgPaths.p25d01d00} fill="var(--fill-0, #D6D8DB)" />
            <path d={svgPaths.p68ff600} fill="var(--fill-0, #D6D8DB)" />
            <path d={svgPaths.p2960ac00} fill="var(--fill-0, #D6D8DB)" />
            <path d={svgPaths.p29761c80} fill="var(--fill-0, #D6D8DB)" />
          </g>
        </g>
        <defs>
          <clipPath id="clip0_5_96">
            <rect fill="white" height="14" width="14" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Frame5() {
  return (
    <div className="content-stretch flex gap-[24px] items-center justify-center relative shrink-0">
      <Frame1 />
      <Dots />
    </div>
  );
}

function Frame() {
  return (
    <div className="bg-[#1d1e20] content-stretch flex items-center justify-center px-[16px] py-[8px] relative shrink-0">
      <Frame5 />
    </div>
  );
}

function Frame3() {
  return (
    <div className="content-stretch flex items-start pl-0 pr-[16px] py-0 relative shrink-0">
      <div className="bg-white h-[24px] opacity-20 shrink-0 w-px" data-name="Rectangle" />
    </div>
  );
}

function NavPrimaryTabs() {
  return (
    <div className="bg-[#1d1e20] content-stretch flex items-center justify-center p-[16px] relative shrink-0" data-name="nav-primary-tabs">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[16px] not-italic relative shrink-0 text-[#ecedef] text-[12px] text-nowrap">MARKET</p>
    </div>
  );
}

function NavPrimaryTabs1() {
  return (
    <div className="bg-[#303030] content-stretch flex items-center justify-center p-[16px] relative shrink-0" data-name="nav-primary-tabs">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[16px] not-italic relative shrink-0 text-[12px] text-nowrap text-white">LEASE</p>
      <div className="absolute inset-0 pointer-events-none shadow-[inset_0px_4px_0px_0px_#4837b9]" />
    </div>
  );
}

function NavPrimaryTabs2() {
  return (
    <div className="bg-[#1d1e20] content-stretch flex items-center justify-center p-[16px] relative shrink-0" data-name="nav-primary-tabs">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[16px] not-italic relative shrink-0 text-[#ecedef] text-[12px] text-nowrap">INSIGHTS</p>
    </div>
  );
}

function NavPrimaryTabs3() {
  return (
    <div className="bg-[#1d1e20] content-stretch flex items-center justify-center p-[16px] relative shrink-0" data-name="nav-primary-tabs">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[16px] not-italic relative shrink-0 text-[#ecedef] text-[12px] text-nowrap">DOCUMENT CENTRAL</p>
    </div>
  );
}

function Mag() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="mag">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="mag">
          <path d={svgPaths.p3fac18f0} fill="var(--fill-0, #ECEDEF)" id="Union" />
        </g>
      </svg>
    </div>
  );
}

function Frame4() {
  return (
    <div className="bg-[#1d1e20] content-stretch flex gap-[4px] items-center justify-center p-[16px] relative shrink-0">
      <Mag />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[16px] not-italic relative shrink-0 text-[#ecedef] text-[12px] text-nowrap">SEARCH</p>
    </div>
  );
}

export default function Frame2() {
  return (
    <div className="bg-[#1d1e20] content-stretch flex items-center relative size-full">
      <Frame />
      <Frame3 />
      <NavPrimaryTabs />
      <NavPrimaryTabs1 />
      <NavPrimaryTabs2 />
      <NavPrimaryTabs3 />
      <Frame4 />
    </div>
  );
}