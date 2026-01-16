import svgPaths from "./svg-5euaqrj3r2";
import imgIStock51422918632 from "../assets/1e9f70b30721711c22e4a13debb4b35dd7e8cfe5.png";
import imgSageLogoRgbWhite1 from "../assets/162f97aef4b5a25a179dede85e871d846244afd0.png";
import { imgIStock51422918631 } from "./svg-ocp7l";

function AllAssets() {
  return (
    <div className="absolute contents inset-0" data-name="AllAssets">
      <div className="absolute bg-[#013c3c] inset-0 rounded-[8px] shadow-[0px_0px_10px_0px_rgba(0,0,0,0.2)]" data-name="Mask" />
    </div>
  );
}

function MaskGroup() {
  return (
    <div className="absolute contents left-0 top-0" data-name="Mask group">
      <div className="absolute h-[195px] left-[-6px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[6px_20px] mask-size-[192px_136px] top-[-20px] w-[293px]" data-name="iStock-514229186 (3) 1" style={{ maskImage: `url('${imgIStock51422918631}')` }}>
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgIStock51422918632} />
      </div>
      <div className="absolute bg-black inset-0 mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0px] mask-size-[192px_136px] mix-blend-multiply opacity-60 rounded-[8px]" data-name="Rectangle" style={{ maskImage: `url('${imgIStock51422918631}')` }} />
    </div>
  );
}

function Frame() {
  return (
    <div className="absolute bottom-[16px] h-[80px] left-[16px] not-italic text-nowrap w-[144px]">
      <p className="absolute font-['IBM_Plex_Sans:SemiBold',sans-serif] leading-[20px] left-0 right-[56.25%] text-[14px] text-white top-[calc(50%+7px)]">All assets</p>
      <p className="absolute font-['IBM_Plex_Sans:Regular',sans-serif] leading-[16px] left-0 right-[63.89%] text-[#ecedef] text-[12px] top-[calc(50%+24px)]">45 assets</p>
    </div>
  );
}

function NavRight() {
  return (
    <div className="absolute left-[168px] size-[16px] top-[104px]" data-name="nav-right">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="nav-right">
          <path d={svgPaths.p1c21e080} fill="var(--fill-0, white)" id="Union" />
        </g>
      </svg>
    </div>
  );
}

function NavSecondaryAssetTabs() {
  return (
    <div className="absolute h-[136px] left-[calc(50%+0.5px)] top-[15px] translate-x-[-50%] w-[192px]" data-name="nav-secondary-asset-tabs">
      <AllAssets />
      <MaskGroup />
      <Frame />
      <div className="absolute h-[21px] left-[16px] top-[19px] w-[72px]" data-name="Sage_Logo_RGB_White 1">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgSageLogoRgbWhite1} />
      </div>
      <NavRight />
    </div>
  );
}

function ColorBlack1() {
  return <div className="absolute inset-[0_14.29%_99.81%_0]" data-name="color/ $black-020" />;
}

function ButtonV() {
  return (
    <div className="absolute bg-white border border-[#4837b9] border-solid h-[43px] left-[17px] rounded-[38px] top-[4px] w-[190px]" data-name="Button v2">
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[20px] left-[98.5px] not-italic text-[#4837b9] text-[14px] text-center top-[10px] translate-x-[-50%] w-[181px]">Add deal</p>
    </div>
  );
}

function PlusV() {
  return (
    <div className="absolute inset-[14.29%]" data-name="plus-v2">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 23 23">
        <g id="plus-v2">
          <path d={svgPaths.p13a75400} fill="var(--fill-0, white)" id="Union" />
        </g>
      </svg>
    </div>
  );
}

function NavPrimarySuperAddSuperAddInactive() {
  return (
    <div className="absolute left-[23px] size-[32px] top-[9.25px]" data-name="nav/ primary/ superAdd/ superAdd_inactive">
      <div className="absolute bg-[#ffb200] inset-0 rounded-[28px]" data-name="Rectangle" />
      <PlusV />
    </div>
  );
}

function Frame1() {
  return (
    <div className="absolute h-[85px] left-0 top-[25px] w-[224px]">
      <ButtonV />
      <NavPrimarySuperAddSuperAddInactive />
    </div>
  );
}

function NavItem() {
  return (
    <div className="absolute content-stretch flex h-[36px] items-center left-0 pl-[24px] pr-0 py-[6px] top-0 w-[224px]" data-name="Nav-Item">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[#373a3e] text-[14px] text-nowrap">Requirements</p>
    </div>
  );
}

function NavItem1() {
  return (
    <div className="absolute bg-[#ecedef] content-stretch flex h-[36px] items-center left-0 pl-[24px] pr-0 py-[6px] top-[36px] w-[224px]" data-name="Nav-Item">
      <div aria-hidden="true" className="absolute border-[#4837b9] border-[0px_0px_0px_4px] border-solid inset-0 pointer-events-none" />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[#1d1e20] text-[14px] text-nowrap">Deals</p>
    </div>
  );
}

function NavItem2() {
  return (
    <div className="absolute content-stretch flex h-[36px] items-center left-0 pl-[24px] pr-0 py-[6px] top-[72px] w-[224px]" data-name="Nav-Item">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[#373a3e] text-[14px] text-nowrap">Deal tasks</p>
    </div>
  );
}

function NavItem3() {
  return (
    <div className="absolute content-stretch flex h-[36px] items-center left-0 pl-[24px] pr-0 py-[6px] top-[108px] w-[224px]" data-name="Nav-Item">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[#373a3e] text-[14px] text-nowrap">Tenant coordination</p>
    </div>
  );
}

function NavItem4() {
  return (
    <div className="absolute content-stretch flex h-[36px] items-center left-0 pl-[24px] pr-0 py-[6px] top-[144px] w-[224px]" data-name="Nav-Item">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[#373a3e] text-[14px] text-nowrap">Leases</p>
    </div>
  );
}

function NavItem5() {
  return (
    <div className="absolute content-stretch flex h-[36px] items-center left-0 pl-[24px] pr-0 py-[6px] top-[180px] w-[224px]" data-name="Nav-Item">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[#373a3e] text-[14px] text-nowrap">Options</p>
    </div>
  );
}

function NavItem6() {
  return (
    <div className="absolute content-stretch flex h-[36px] items-center left-0 pl-[24px] pr-0 py-[6px] top-[216px] w-[224px]" data-name="Nav-Item">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[#373a3e] text-[14px] text-nowrap">Budgets</p>
    </div>
  );
}

function NavItem7() {
  return (
    <div className="absolute content-stretch flex h-[36px] items-center left-0 pl-[24px] pr-0 py-[6px] top-[252px] w-[224px]" data-name="Nav-Item">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[#373a3e] text-[14px] text-nowrap">Appraisals</p>
    </div>
  );
}

function NavItem8() {
  return (
    <div className="absolute content-stretch flex h-[36px] items-center left-0 pl-[24px] pr-0 py-[6px] top-[288px] w-[224px]" data-name="Nav-Item">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[#373a3e] text-[14px] text-nowrap">Comps</p>
    </div>
  );
}

function NavItem9() {
  return (
    <div className="absolute content-stretch flex h-[36px] items-center left-0 pl-[24px] pr-0 py-[6px] top-[324px] w-[224px]" data-name="Nav-Item">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[#373a3e] text-[14px] text-nowrap">Appraisals</p>
    </div>
  );
}

function NavItem10() {
  return (
    <div className="absolute content-stretch flex h-[36px] items-center left-0 pl-[24px] pr-0 py-[6px] top-[360px] w-[224px]" data-name="Nav-Item">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[#373a3e] text-[14px] text-nowrap">Tenants</p>
    </div>
  );
}

function Frame2() {
  return (
    <div className="absolute h-[396px] left-0 top-[134px] w-[224px]">
      <NavItem />
      <NavItem1 />
      <NavItem2 />
      <NavItem3 />
      <NavItem4 />
      <NavItem5 />
      <NavItem6 />
      <NavItem7 />
      <NavItem8 />
      <NavItem9 />
      <NavItem10 />
    </div>
  );
}

function NavSection() {
  return (
    <div className="h-[530px] relative shrink-0 w-[224px]" data-name="Nav Section">
      <p className="absolute font-['Inter:Bold',sans-serif] font-bold leading-[28px] left-[24px] not-italic text-[#1d1e20] text-[12px] text-nowrap top-[106px] tracking-[0.5px] uppercase">Tools</p>
      <ColorBlack1 />
      <Frame1 />
      <Frame2 />
    </div>
  );
}

function ColorBlack() {
  return <div className="h-px shrink-0 w-[192px]" data-name="color/ $black-020" />;
}

function Frame4() {
  return (
    <div className="content-stretch flex items-center pb-[4px] pl-[24px] pr-0 pt-0 relative shrink-0">
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[28px] not-italic relative shrink-0 text-[#1d1e20] text-[12px] text-nowrap tracking-[0.5px] uppercase">Inventory</p>
    </div>
  );
}

function BuildingsMultiple() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="BuildingsMultiple">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g clipPath="url(#clip0_5_612)" id="BuildingsMultiple">
          <g id="Shape">
            <path d={svgPaths.p3ca97700} fill="var(--fill-0, #373A3E)" />
            <path d={svgPaths.p317a0900} fill="var(--fill-0, #373A3E)" />
            <path d={svgPaths.p11a2e680} fill="var(--fill-0, #373A3E)" />
            <path d={svgPaths.p3c72bf00} fill="var(--fill-0, #373A3E)" />
            <path d={svgPaths.p33ca2e80} fill="var(--fill-0, #373A3E)" />
            <path d={svgPaths.p32860100} fill="var(--fill-0, #373A3E)" />
            <path d={svgPaths.p38782840} fill="var(--fill-0, #373A3E)" />
            <path d={svgPaths.pbc25f00} fill="var(--fill-0, #373A3E)" />
            <path clipRule="evenodd" d={svgPaths.p3f523980} fill="var(--fill-0, #373A3E)" fillRule="evenodd" />
          </g>
        </g>
        <defs>
          <clipPath id="clip0_5_612">
            <rect fill="white" height="16" width="16" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function NavItem11() {
  return (
    <div className="content-stretch flex gap-[8px] h-[36px] items-center pl-[24px] pr-0 py-[6px] relative shrink-0 w-[224px]" data-name="Nav-Item">
      <BuildingsMultiple />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[#373a3e] text-[14px] text-nowrap">Assets</p>
    </div>
  );
}

function Floorplan() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Floorplan">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g clipPath="url(#clip0_5_609)" id="Floorplan">
          <path d={svgPaths.p2bc85700} fill="var(--fill-0, #1D1E20)" id="Shape" />
        </g>
        <defs>
          <clipPath id="clip0_5_609">
            <rect fill="white" height="16" width="16" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function NavItem12() {
  return (
    <div className="content-stretch flex gap-[8px] h-[36px] items-center pl-[24px] pr-0 py-[6px] relative shrink-0 w-[224px]" data-name="Nav-Item">
      <Floorplan />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[#373a3e] text-[14px] text-nowrap">Spaces</p>
    </div>
  );
}

function Stack() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Stack">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Stack">
          <g id="Shape">
            <path clipRule="evenodd" d={svgPaths.pe3eae80} fill="#1D1E20" fillRule="evenodd" />
            <path clipRule="evenodd" d={svgPaths.p19c39800} fill="#1D1E20" fillRule="evenodd" />
            <path clipRule="evenodd" d={svgPaths.p54ec00} fill="#1D1E20" fillRule="evenodd" />
            <path clipRule="evenodd" d={svgPaths.p81c7500} fill="#1D1E20" fillRule="evenodd" />
            <path clipRule="evenodd" d={svgPaths.p35161600} fill="#1D1E20" fillRule="evenodd" />
            <path clipRule="evenodd" d={svgPaths.p1803cc70} fill="#1D1E20" fillRule="evenodd" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function NavItem13() {
  return (
    <div className="content-stretch flex gap-[8px] h-[36px] items-center pl-[24px] pr-0 py-[6px] relative shrink-0 w-[224px]" data-name="Nav-Item">
      <Stack />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[#373a3e] text-[14px] text-nowrap">Stacking plan</p>
    </div>
  );
}

function SitePlan() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="SitePlan">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g clipPath="url(#clip0_5_615)" id="SitePlan">
          <g id="Shape">
            <path clipRule="evenodd" d={svgPaths.p12907df0} fill="var(--fill-0, #1D1E20)" fillRule="evenodd" />
            <path clipRule="evenodd" d={svgPaths.p378d3700} fill="var(--fill-0, #1D1E20)" fillRule="evenodd" />
            <path clipRule="evenodd" d={svgPaths.p31a07880} fill="var(--fill-0, #1D1E20)" fillRule="evenodd" />
            <path clipRule="evenodd" d={svgPaths.p3b7e9e00} fill="var(--fill-0, #1D1E20)" fillRule="evenodd" />
          </g>
        </g>
        <defs>
          <clipPath id="clip0_5_615">
            <rect fill="white" height="16" width="16" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function NavItem14() {
  return (
    <div className="content-stretch flex gap-[8px] h-[36px] items-center pl-[24px] pr-0 py-[6px] relative shrink-0 w-[224px]" data-name="Nav-Item">
      <SitePlan />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[#373a3e] text-[14px] text-nowrap">Site plan</p>
    </div>
  );
}

function Frame3() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[224px]">
      <Frame4 />
      <NavItem11 />
      <NavItem12 />
      <NavItem13 />
      <NavItem14 />
    </div>
  );
}

function NavSection1() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-[224px]" data-name="Nav Section">
      <ColorBlack />
      <Frame3 />
    </div>
  );
}

function Frame5() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 top-[151px]">
      <NavSection />
      <NavSection1 />
    </div>
  );
}

function ChevronLeft() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="ChevronLeft">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g clipPath="url(#clip0_1_11501)" id="ChevronLeft">
          <path d={svgPaths.p164fee00} fill="var(--fill-0, #4837B9)" id="Shape" />
        </g>
        <defs>
          <clipPath id="clip0_1_11501">
            <rect fill="white" height="14" width="14" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function ButtonV1() {
  return (
    <div className="absolute bg-[#f4f5f6] content-stretch flex items-center justify-center left-[195px] p-[9px] rounded-[4px] top-[-3px]" data-name="Button v2">
      <div aria-hidden="true" className="absolute border border-[#d6d8db] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <ChevronLeft />
    </div>
  );
}

export default function Nav() {
  return (
    <div className="bg-[#f9fafa] border-[#d0d9e1] border-[0px_1px_0px_0px] border-solid relative size-full" data-name="Nav">
      <NavSecondaryAssetTabs />
      <Frame5 />
      <ButtonV1 />
    </div>
  );
}