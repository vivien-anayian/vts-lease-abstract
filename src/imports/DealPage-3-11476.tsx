import svgPaths from "./svg-mg72x5tctf";
import imgStripeJpeg0 from "../assets/94597ae9b6d0f8b64d4c690326576763307fa4f8.png";
import imgAmazonSymbolPng from "../assets/9669ba8f4f98c0bc6952e9281673372fcb16cfc0.png";
import imgCarecomIconJpeg from "../assets/6c70c51b9619ce8c7a570c1c6a1603c59f07152d.png";
import imgTgiFridaysIconJpeg from "../assets/79341dca7da15fadd994eb33ad38399a52d0a75a.png";
import imgIStock51422918632 from "../assets/1e9f70b30721711c22e4a13debb4b35dd7e8cfe5.png";
import imgSageLogoRgbWhite1 from "../assets/162f97aef4b5a25a179dede85e871d846244afd0.png";
import imgImage14 from "../assets/37ce5ef5a9b3766e2565ed14ae645c7d5c261e1d.png";
import { imgIStock51422918631 } from "./svg-2zfi8";

function Item() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="item">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#bbbfc4] text-[12px] text-nowrap">
        <p className="leading-[16px]">VTS Lease</p>
      </div>
    </div>
  );
}

function NavRight() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="nav-right">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="nav-right">
          <path d={svgPaths.p1c21e080} fill="var(--fill-0, #BBBFC4)" id="Union" />
        </g>
      </svg>
    </div>
  );
}

function ComponentsSeparator() {
  return (
    <div className="content-stretch flex flex-col items-center overflow-clip px-[4px] py-0 relative shrink-0" data-name="components/separator">
      <NavRight />
    </div>
  );
}

function Item1() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="item">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#1d1e20] text-[12px] text-nowrap">
        <p className="leading-[16px]">Deals</p>
      </div>
    </div>
  );
}

function Breadcrumb() {
  return (
    <div className="absolute content-stretch flex items-center left-[248px] overflow-clip top-[66px]" data-name="breadcrumb">
      <Item />
      <ComponentsSeparator />
      <Item1 />
    </div>
  );
}

function Placeholder() {
  return (
    <div className="basis-0 content-stretch flex grow h-full items-center min-h-px min-w-px overflow-clip relative shrink-0" data-name="placeholder">
      <p className="font-['IBM_Plex_Sans:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#bbbfc4] text-[14px] text-nowrap">Keyword filter</p>
    </div>
  );
}

function Input() {
  return (
    <div className="absolute bg-white left-[248px] rounded-[3px] top-[134px] w-[276px]" data-name="Input">
      <div className="content-stretch flex items-center overflow-clip px-[8px] py-[6px] relative rounded-[inherit] w-full">
        <div className="basis-0 flex flex-row grow items-center self-stretch shrink-0">
          <Placeholder />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#d6d8db] border-solid inset-0 pointer-events-none rounded-[3px]" />
    </div>
  );
}

function Frame45() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[24px] not-italic relative shrink-0 text-[#1d1e20] text-[16px] text-nowrap">Deal pipeline</p>
    </div>
  );
}

function Frame28() {
  return (
    <div className="content-stretch flex font-['Inter:Regular',sans-serif] font-normal gap-[2px] items-start leading-[0] not-italic relative shrink-0 text-[#72777e] text-[12px] text-nowrap">
      <div className="flex flex-col justify-end relative shrink-0">
        <p className="leading-[16px] text-nowrap">22.1M</p>
      </div>
      <div className="flex flex-col justify-end relative shrink-0">
        <p className="leading-[16px] text-nowrap">sf</p>
      </div>
    </div>
  );
}

function Metric() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0" data-name="Metric">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[32px] not-italic relative shrink-0 text-[#1d1e20] text-[24px] text-nowrap">5.7K</p>
      <Frame28 />
    </div>
  );
}

function Frame39() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-center justify-end relative shrink-0 w-[68px]">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[16px] not-italic relative shrink-0 text-[#72777e] text-[12px] text-center w-[88px]">3.2K</p>
      <div className="h-[47px] relative shrink-0 w-[80px]">
        <div className="absolute inset-0" style={{ "--fill-0": "rgba(72, 55, 185, 1)" } as React.CSSProperties}>
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 80 47">
            <path d={svgPaths.p3bd71e80} fill="var(--fill-0, #4837B9)" id="Rectangle 1675" />
          </svg>
        </div>
      </div>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[16px] not-italic relative shrink-0 text-[#72777e] text-[12px] text-center w-[100px]">Inquiries</p>
    </div>
  );
}

function Bar() {
  return (
    <div className="content-stretch flex flex-col items-center justify-end px-[8px] py-0 relative shrink-0 w-[80px]" data-name="Bar">
      <Frame39 />
    </div>
  );
}

function Frame41() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-center justify-end relative shrink-0 w-[68px]">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[16px] not-italic relative shrink-0 text-[#72777e] text-[12px] text-center w-[88px]">1.2k</p>
      <div className="h-[29px] relative shrink-0 w-[80px]">
        <div className="absolute inset-0" style={{ "--fill-0": "rgba(72, 55, 185, 1)" } as React.CSSProperties}>
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 80 29">
            <path d={svgPaths.p3d53ce40} fill="var(--fill-0, #4837B9)" id="Rectangle 1675" />
          </svg>
        </div>
      </div>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[16px] not-italic relative shrink-0 text-[#72777e] text-[12px] text-center w-[100px]">Touring</p>
    </div>
  );
}

function Bar1() {
  return (
    <div className="content-stretch flex flex-col h-[77px] items-center justify-end px-[8px] py-0 relative shrink-0 w-[80px]" data-name="Bar">
      <Frame41 />
    </div>
  );
}

function Frame42() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-center justify-end relative shrink-0 w-[68px]">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[16px] not-italic relative shrink-0 text-[#72777e] text-[12px] text-center w-[88px]">1.2k</p>
      <div className="h-[29px] relative shrink-0 w-[80px]">
        <div className="absolute inset-0" style={{ "--fill-0": "rgba(72, 55, 185, 1)" } as React.CSSProperties}>
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 80 29">
            <path d={svgPaths.p3d53ce40} fill="var(--fill-0, #4837B9)" id="Rectangle 1675" />
          </svg>
        </div>
      </div>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[16px] not-italic relative shrink-0 text-[#72777e] text-[12px] text-center w-[100px]">Proposals</p>
    </div>
  );
}

function Bar2() {
  return (
    <div className="content-stretch flex flex-col h-[77px] items-center justify-end px-[8px] py-0 relative shrink-0 w-[80px]" data-name="Bar">
      <Frame42 />
    </div>
  );
}

function Frame43() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-center justify-end relative shrink-0 w-[68px]">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[16px] not-italic relative shrink-0 text-[#72777e] text-[12px] text-center w-[88px]">1.2k</p>
      <div className="h-[29px] relative shrink-0 w-[80px]">
        <div className="absolute inset-0" style={{ "--fill-0": "rgba(72, 55, 185, 1)" } as React.CSSProperties}>
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 80 29">
            <path d={svgPaths.p3d53ce40} fill="var(--fill-0, #4837B9)" id="Rectangle 1675" />
          </svg>
        </div>
      </div>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[16px] not-italic relative shrink-0 text-[#72777e] text-[12px] text-center w-[100px]">LOI</p>
    </div>
  );
}

function Bar3() {
  return (
    <div className="content-stretch flex flex-col h-[77px] items-center justify-end px-[8px] py-0 relative shrink-0 w-[80px]" data-name="Bar">
      <Frame43 />
    </div>
  );
}

function Frame44() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-center justify-end relative shrink-0 w-[68px]">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[16px] not-italic relative shrink-0 text-[#72777e] text-[12px] text-center w-[88px]">116</p>
      <div className="h-[16px] relative shrink-0 w-[80px]">
        <div className="absolute inset-0" style={{ "--fill-0": "rgba(72, 55, 185, 1)" } as React.CSSProperties}>
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 80 16">
            <path d={svgPaths.p350f180} fill="var(--fill-0, #4837B9)" id="Rectangle 1675" />
          </svg>
        </div>
      </div>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[16px] not-italic relative shrink-0 text-[#72777e] text-[12px] text-center w-[100px]">Legal</p>
    </div>
  );
}

function Bar4() {
  return (
    <div className="content-stretch flex flex-col items-center justify-end px-[8px] py-0 relative shrink-0 w-[80px]" data-name="Bar">
      <Frame44 />
    </div>
  );
}

function Frame49() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-center justify-end relative shrink-0 w-[68px]">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[16px] not-italic relative shrink-0 text-[#72777e] text-[12px] text-center w-[88px]">116</p>
      <div className="h-[16px] relative shrink-0 w-[80px]">
        <div className="absolute inset-0" style={{ "--fill-0": "rgba(72, 55, 185, 1)" } as React.CSSProperties}>
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 80 16">
            <path d={svgPaths.p350f180} fill="var(--fill-0, #4837B9)" id="Rectangle 1675" />
          </svg>
        </div>
      </div>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[16px] not-italic relative shrink-0 text-[#72777e] text-[12px] text-center w-[100px]">Leases out</p>
    </div>
  );
}

function Bar5() {
  return (
    <div className="content-stretch flex flex-col items-center justify-end px-[8px] py-0 relative shrink-0 w-[80px]" data-name="Bar">
      <Frame49 />
    </div>
  );
}

function Frame50() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-center justify-end relative shrink-0 w-[68px]">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[16px] not-italic relative shrink-0 text-[#72777e] text-[12px] text-center w-[88px]">3.2K</p>
      <div className="h-[47px] relative shrink-0 w-[80px]">
        <div className="absolute inset-0" style={{ "--fill-0": "rgba(72, 55, 185, 1)" } as React.CSSProperties}>
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 80 47">
            <path d={svgPaths.p3bd71e80} fill="var(--fill-0, #4837B9)" id="Rectangle 1675" />
          </svg>
        </div>
      </div>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[16px] not-italic relative shrink-0 text-[#72777e] text-[12px] text-center w-[100px]">Leases exec.</p>
    </div>
  );
}

function Bar6() {
  return (
    <div className="content-stretch flex flex-col items-center justify-end px-[8px] py-0 relative shrink-0 w-[80px]" data-name="Bar">
      <Frame50 />
    </div>
  );
}

function Frame51() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-center justify-end relative shrink-0 w-[68px]">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[16px] not-italic relative shrink-0 text-[#72777e] text-[12px] text-center w-[88px]">3.2K</p>
      <div className="h-[47px] relative shrink-0 w-[80px]">
        <div className="absolute inset-0" style={{ "--fill-0": "rgba(187, 191, 196, 1)" } as React.CSSProperties}>
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 80 47">
            <path d={svgPaths.p3bd71e80} fill="var(--fill-0, #BBBFC4)" id="Rectangle 1675" />
          </svg>
        </div>
      </div>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[16px] not-italic relative shrink-0 text-[#72777e] text-[12px] text-center w-[100px]">Dead deals</p>
    </div>
  );
}

function Bar7() {
  return (
    <div className="content-stretch flex flex-col items-center justify-end px-[8px] py-0 relative shrink-0 w-[80px]" data-name="Bar">
      <Frame51 />
    </div>
  );
}

function Frame40() {
  return (
    <div className="content-stretch flex gap-[12px] items-end relative shrink-0">
      <Bar />
      <Bar1 />
      <Bar2 />
      <Bar3 />
      <Bar4 />
      <Bar5 />
      <Bar6 />
      <Bar7 />
    </div>
  );
}

function Frame46() {
  return (
    <div className="content-stretch flex gap-[52px] items-end relative shrink-0 w-[764px]">
      <Metric />
      <Frame40 />
    </div>
  );
}

function Frame47() {
  return (
    <div className="content-stretch flex flex-col gap-[41px] items-start relative shrink-0 w-[764px]">
      <Frame45 />
      <Frame46 />
    </div>
  );
}

function DealPipelineCard() {
  return (
    <div className="bg-white content-stretch flex flex-col items-start p-[16px] relative rounded-[8px] shadow-[0px_0px_5px_0px_rgba(0,0,0,0.15)] shrink-0 w-[866px]" data-name="DealPipeline_Card">
      <Frame47 />
    </div>
  );
}

function Frame52() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[24px] not-italic relative shrink-0 text-[#1d1e20] text-[16px] text-nowrap">Last updated</p>
    </div>
  );
}

function Frame53() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-center justify-end relative shrink-0 w-[68px]">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[16px] not-italic relative shrink-0 text-[#72777e] text-[12px] text-center w-[88px]">3.2K</p>
      <div className="h-[47px] relative shrink-0 w-[80px]">
        <div className="absolute inset-0" style={{ "--fill-0": "rgba(163, 217, 130, 1)" } as React.CSSProperties}>
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 80 47">
            <path d={svgPaths.p3bd71e80} fill="var(--fill-0, #A3D982)" id="Rectangle 1675" />
          </svg>
        </div>
      </div>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[16px] not-italic relative shrink-0 text-[#72777e] text-[12px] text-center w-[100px]">{`< 30 days`}</p>
    </div>
  );
}

function Bar8() {
  return (
    <div className="content-stretch flex flex-col items-center justify-end relative shrink-0 w-[80px]" data-name="Bar">
      <Frame53 />
    </div>
  );
}

function Frame54() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-center justify-end relative shrink-0 w-[68px]">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[16px] not-italic relative shrink-0 text-[#72777e] text-[12px] text-center w-[88px]">1.2k</p>
      <div className="h-[29px] relative shrink-0 w-[80px]">
        <div className="absolute inset-0" style={{ "--fill-0": "rgba(108, 191, 239, 1)" } as React.CSSProperties}>
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 80 29">
            <path d={svgPaths.p3d53ce40} fill="var(--fill-0, #6CBFEF)" id="Rectangle 1675" />
          </svg>
        </div>
      </div>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[16px] not-italic relative shrink-0 text-[#72777e] text-[12px] text-center w-[100px]">30 - 59 days</p>
    </div>
  );
}

function Bar9() {
  return (
    <div className="content-stretch flex flex-col h-[77px] items-center justify-end relative shrink-0 w-[80px]" data-name="Bar">
      <Frame54 />
    </div>
  );
}

function Frame55() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-center justify-end relative shrink-0 w-[68px]">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[16px] not-italic relative shrink-0 text-[#72777e] text-[12px] text-center w-[88px]">1.2k</p>
      <div className="h-[29px] relative shrink-0 w-[80px]">
        <div className="absolute inset-0" style={{ "--fill-0": "rgba(255, 178, 0, 1)" } as React.CSSProperties}>
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 80 29">
            <path d={svgPaths.p3d53ce40} fill="var(--fill-0, #FFB200)" id="Rectangle 1675" />
          </svg>
        </div>
      </div>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[16px] not-italic relative shrink-0 text-[#72777e] text-[12px] text-center w-[100px]">60 - 90 days</p>
    </div>
  );
}

function Bar10() {
  return (
    <div className="content-stretch flex flex-col h-[77px] items-center justify-end relative shrink-0 w-[80px]" data-name="Bar">
      <Frame55 />
    </div>
  );
}

function Frame56() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-center justify-end relative shrink-0 w-[68px]">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[16px] not-italic relative shrink-0 text-[#72777e] text-[12px] text-center w-[88px]">1.2k</p>
      <div className="h-[29px] relative shrink-0 w-[80px]">
        <div className="absolute inset-0" style={{ "--fill-0": "rgba(199, 32, 10, 1)" } as React.CSSProperties}>
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 80 29">
            <path d={svgPaths.p3d53ce40} fill="var(--fill-0, #C7200A)" id="Rectangle 1675" />
          </svg>
        </div>
      </div>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[16px] not-italic relative shrink-0 text-[#72777e] text-[12px] text-center w-[100px]">{`> 90 days`}</p>
    </div>
  );
}

function Bar11() {
  return (
    <div className="content-stretch flex flex-col h-[77px] items-center justify-end relative shrink-0 w-[80px]" data-name="Bar">
      <Frame56 />
    </div>
  );
}

function Frame57() {
  return (
    <div className="content-stretch flex gap-[16px] items-end relative shrink-0 w-[380px]">
      <Bar8 />
      <Bar9 />
      <Bar10 />
      <Bar11 />
    </div>
  );
}

function Frame58() {
  return (
    <div className="content-stretch flex items-end relative shrink-0 w-[380px]">
      <Frame57 />
    </div>
  );
}

function Frame59() {
  return (
    <div className="content-stretch flex flex-col gap-[41px] h-[160px] items-start relative shrink-0 w-[380px]">
      <Frame52 />
      <Frame58 />
    </div>
  );
}

function DealPipelineCard1() {
  return (
    <div className="bg-white content-stretch flex flex-col items-start p-[16px] relative rounded-[8px] shadow-[0px_0px_5px_0px_rgba(0,0,0,0.15)] shrink-0 w-[400px]" data-name="DealPipeline_Card">
      <Frame59 />
    </div>
  );
}

function Frame48() {
  return (
    <div className="content-stretch flex gap-[16px] items-start relative shrink-0 w-[1282px]">
      <DealPipelineCard />
      <DealPipelineCard1 />
    </div>
  );
}

function ChartSimple() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="ChartSimple">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g clipPath="url(#clip0_1_11504)" id="ChartSimple">
          <path d={svgPaths.p85f9100} fill="var(--fill-0, #4837B9)" id="Shape" />
        </g>
        <defs>
          <clipPath id="clip0_1_11504">
            <rect fill="white" height="14" width="14" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Tags() {
  return (
    <div className="bg-[#ccf] content-stretch flex items-end justify-center pb-[2px] pt-0 px-[6px] relative rounded-[100px] shrink-0" data-name="Tags">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[14px] not-italic relative shrink-0 text-[#1d1e20] text-[10px] text-nowrap">Beta</p>
    </div>
  );
}

function Button() {
  return (
    <div className="content-stretch flex gap-[6px] h-[32px] items-center justify-center overflow-clip px-[12px] py-[6px] relative rounded-[4px] shrink-0" data-name="Button">
      <ChartSimple />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[#4837b9] text-[14px] text-center text-nowrap">View leasing report</p>
      <Tags />
    </div>
  );
}

function Download() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="Download">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g id="Download">
          <path d={svgPaths.p33b1de00} fill="var(--fill-0, #72777E)" id="Shape" />
        </g>
      </svg>
    </div>
  );
}

function Button1() {
  return (
    <div className="content-stretch flex gap-[6px] h-[32px] items-center justify-center overflow-clip px-[12px] py-[6px] relative rounded-[4px] shrink-0" data-name="Button">
      <Download />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[#72777e] text-[14px] text-center text-nowrap">Export</p>
    </div>
  );
}

function SetUp() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="SetUp">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g clipPath="url(#clip0_3_11542)" id="SetUp">
          <path d={svgPaths.pf42dda0} fill="var(--fill-0, #72777E)" id="Shape" />
        </g>
        <defs>
          <clipPath id="clip0_3_11542">
            <rect fill="white" height="14" width="14" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Button2() {
  return (
    <div className="content-stretch flex gap-[6px] h-[32px] items-center justify-center overflow-clip px-[12px] py-[6px] relative rounded-[4px] shrink-0" data-name="Button">
      <SetUp />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[#72777e] text-[14px] text-center text-nowrap">Edit columns</p>
    </div>
  );
}

function Overflow() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="Overflow">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g id="Overflow">
          <g id="Shape">
            <path d={svgPaths.p282e5280} fill="var(--fill-0, #72777E)" />
            <path d={svgPaths.p1e9bf000} fill="var(--fill-0, #72777E)" />
            <path d={svgPaths.p22979df0} fill="var(--fill-0, #72777E)" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Button3() {
  return (
    <div className="content-stretch flex items-center justify-center overflow-clip px-[16px] py-[4px] relative rounded-[4px] shrink-0 size-[32px]" data-name="Button">
      <Overflow />
    </div>
  );
}

function Plus() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="Plus">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g clipPath="url(#clip0_3_11556)" id="Plus">
          <path d={svgPaths.p1383ff00} fill="var(--fill-0, white)" id="Shape" />
        </g>
        <defs>
          <clipPath id="clip0_3_11556">
            <rect fill="white" height="14" width="14" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Button4() {
  return (
    <div className="bg-[#4837b9] content-stretch flex gap-[6px] h-[32px] items-center justify-center overflow-clip px-[12px] py-[6px] relative rounded-[4px] shrink-0" data-name="Button">
      <Plus />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[14px] text-center text-nowrap text-white">Deal</p>
    </div>
  );
}

function Frame37() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0">
      <Button />
      <Button1 />
      <Button2 />
      <Button3 />
      <Button4 />
    </div>
  );
}

function Toolbar() {
  return (
    <div className="bg-white content-stretch flex h-[56px] items-center justify-end px-[24px] py-0 relative rounded-tl-[8px] rounded-tr-[8px] shrink-0 w-[1281px]" data-name="Toolbar">
      <Frame37 />
    </div>
  );
}

function Component() {
  return (
    <div className="h-[44px] relative shrink-0 w-[1282px]" data-name="Component 2">
      <div className="absolute bg-[#f4f5f6] border-[#ecedef] border-[0px_0px_1px] border-solid inset-0" />
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal inset-[36.36%_75.27%_27.27%_22.23%] leading-[16px] not-italic text-[#72777e] text-[12px] text-nowrap">Asset</p>
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal inset-[36.36%_91.97%_27.27%_4.99%] leading-[16px] not-italic text-[#72777e] text-[12px] text-nowrap">Tenant</p>
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal inset-[36.36%_23.17%_27.27%_70.51%] leading-[16px] not-italic text-[#72777e] text-[12px] text-nowrap">Last comment</p>
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal inset-[36.36%_1.56%_27.27%_93.14%] leading-[16px] not-italic text-[#72777e] text-[12px] text-nowrap">Last update</p>
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal inset-[36.36%_37.05%_27.27%_59.36%] leading-[16px] not-italic text-[#72777e] text-[12px] text-nowrap">Contact</p>
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal inset-[36.36%_44.31%_27.27%_50.39%] leading-[16px] not-italic text-[#72777e] text-[12px] text-nowrap">NER/Size/yr</p>
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal inset-[36.36%_62.17%_27.27%_35.18%] leading-[16px] not-italic text-[#72777e] text-[12px] text-nowrap">Stage</p>
      <div className="absolute bg-white border border-[#ecedef] border-solid inset-[31.82%_98.13%_31.82%_0.62%] rounded-[1px]" />
    </div>
  );
}

function StarOutlined() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="star-outlined">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="star-outlined">
          <path d={svgPaths.pd58e9a0} fill="var(--fill-0, #72777E)" id="Union" />
        </g>
      </svg>
    </div>
  );
}

function Frame31() {
  return (
    <div className="content-stretch flex gap-[12px] items-start px-0 py-[2px] relative shrink-0">
      <div className="bg-white relative rounded-[1px] shrink-0 size-[16px]">
        <div aria-hidden="true" className="absolute border border-[#ecedef] border-solid inset-0 pointer-events-none rounded-[1px]" />
      </div>
      <StarOutlined />
    </div>
  );
}

function Info() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="info">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g id="info">
          <path d={svgPaths.p3e9e10f0} fill="var(--fill-0, #72777E)" id="Union" />
        </g>
      </svg>
    </div>
  );
}

function StandardizedNameIcon() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Standardized Name + Icon">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[16px] not-italic relative shrink-0 text-[#72777e] text-[12px] text-nowrap">Stripe, Inc.</p>
      <Info />
    </div>
  );
}

function StandardizedNameIcon1() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="Standardized Name + Icon">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[16px] not-italic relative shrink-0 text-[#72777e] text-[12px] text-nowrap">New deal</p>
    </div>
  );
}

function Connect() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="Connect">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g clipPath="url(#clip0_1_11584)" id="Connect">
          <g id="Shape">
            <path clipRule="evenodd" d={svgPaths.p133fac00} fill="var(--fill-0, #1D1E20)" fillRule="evenodd" />
          </g>
        </g>
        <defs>
          <clipPath id="clip0_1_11584">
            <rect fill="white" height="12" width="12" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Frame14() {
  return (
    <div className="content-stretch flex items-start pb-0 pt-[2px] px-0 relative shrink-0">
      <Connect />
    </div>
  );
}

function Tags1() {
  return (
    <div className="bg-[#ecedef] content-stretch flex gap-[4px] items-center justify-center pb-[5px] pt-[3px] px-[8px] relative rounded-[100px] shrink-0" data-name="Tags">
      <Frame14 />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[16px] not-italic relative shrink-0 text-[#1d1e20] text-[12px] text-nowrap">Tenant relationship</p>
    </div>
  );
}

function TenantGroup() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0" data-name="Tenant Group">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[20px] not-italic relative shrink-0 text-[#1d1e20] text-[14px] text-nowrap">Stripe</p>
      <StandardizedNameIcon />
      <StandardizedNameIcon1 />
      <Tags1 />
    </div>
  );
}

function Frame33() {
  return (
    <div className="content-stretch flex gap-[12px] items-start relative shrink-0 w-[233px]">
      <Frame31 />
      <div className="relative rounded-[2px] shrink-0 size-[32px]" data-name="Stripe - jpeg 0">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-contain pointer-events-none rounded-[2px] size-full" src={imgStripeJpeg0} />
      </div>
      <TenantGroup />
    </div>
  );
}

function Frame22() {
  return (
    <div className="content-stretch flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[43.2px] items-start not-italic relative shrink-0 text-nowrap">
      <p className="leading-[20px] relative shrink-0 text-[#1d1e20] text-[14px]">VTS Tower</p>
      <p className="leading-[16px] relative shrink-0 text-[#72777e] text-[12px]">Level 2, 13 | 2,000 sf</p>
    </div>
  );
}

function Placeholder1() {
  return (
    <div className="basis-0 content-stretch flex grow h-full items-center min-h-px min-w-px overflow-clip relative shrink-0" data-name="placeholder">
      <p className="font-['IBM_Plex_Sans:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#1d1e20] text-[14px] text-nowrap">Legal</p>
    </div>
  );
}

function Spacer8Px() {
  return (
    <div className="content-stretch flex h-full items-center justify-between relative shrink-0 w-[8px]" data-name="spacer/8px">
      <div className="shrink-0 size-[8px]" data-name="_spacer" />
    </div>
  );
}

function NavDown() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="nav-down">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="nav-down">
          <path d={svgPaths.p9bb2200} fill="var(--fill-0, #72777E)" id="Union" />
        </g>
      </svg>
    </div>
  );
}

function DefaultDropdown() {
  return (
    <div className="bg-white relative rounded-[3px] shrink-0 w-[144px]" data-name="Default Dropdown">
      <div className="content-stretch flex items-center overflow-clip px-[8px] py-[6px] relative rounded-[inherit] w-full">
        <div className="basis-0 flex flex-row grow items-center self-stretch shrink-0">
          <Placeholder1 />
        </div>
        <div className="flex flex-row items-center self-stretch">
          <Spacer8Px />
        </div>
        <NavDown />
      </div>
      <div aria-hidden="true" className="absolute border border-[#d6d8db] border-solid inset-0 pointer-events-none rounded-[3px]" />
    </div>
  );
}

function NavDown1() {
  return (
    <div className="[grid-area:1_/_1] h-[16px] ml-[52.22px] mt-[2px] relative w-[17.778px]" data-name="nav-down">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 16">
        <g id="nav-down">
          <path d={svgPaths.p1fe0c600} fill="var(--fill-0, #72777E)" id="Union" />
        </g>
      </svg>
    </div>
  );
}

function Group1() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0">
      <p className="[grid-area:1_/_1] font-['Inter:Regular',sans-serif] font-normal leading-[20px] ml-0 mt-0 not-italic relative text-[#1d1e20] text-[14px] w-[52.222px]">$54.00</p>
      <NavDown1 />
    </div>
  );
}

function Frame32() {
  return (
    <div className="content-stretch flex flex-col font-['Inter:Regular',sans-serif] font-normal gap-[4px] items-start not-italic relative shrink-0 text-nowrap">
      <p className="leading-[20px] relative shrink-0 text-[#1d1e20] text-[14px]">Arlene McCoy</p>
      <p className="leading-[16px] relative shrink-0 text-[#72777e] text-[12px]">Contact</p>
    </div>
  );
}

function Tenant() {
  return (
    <div className="bg-[#1d1e20] relative rounded-[100px] shrink-0 size-[32px]" data-name="tenant">
      <p className="absolute font-['Roboto:Regular',sans-serif] font-normal inset-[18.75%_15.63%] leading-[20px] text-[14px] text-center text-white" style={{ fontVariationSettings: "'wdth' 100" }}>
        ML
      </p>
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex flex-col font-['Inter:Regular',sans-serif] font-normal items-start not-italic relative shrink-0">
      <p className="leading-[20px] relative shrink-0 text-[#1d1e20] text-[14px] w-[210px]">Matt Lacri</p>
      <div className="leading-[16px] relative shrink-0 text-[#72777e] text-[0px] text-[12px] w-[210px]">
        <p className="mb-0">@Matt Macri tour went great. Following up soon with next steps.</p>
        <p className="font-['Inter:Regular',sans-serif] font-normal not-italic text-[#4837b9]">Leave a comment</p>
      </div>
    </div>
  );
}

function Tenant1() {
  return (
    <div className="content-stretch flex gap-[8px] h-[62px] items-start relative shrink-0 w-[251px]" data-name="tenant">
      <Tenant />
      <Frame />
    </div>
  );
}

function Frame30() {
  return (
    <div className="content-stretch flex gap-[48px] items-start relative shrink-0">
      <Frame33 />
      <Frame22 />
      <DefaultDropdown />
      <Group1 />
      <Frame32 />
      <Tenant1 />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[#1d1e20] text-[14px] text-nowrap">14 hours</p>
    </div>
  );
}

function Row() {
  return (
    <div className="content-stretch flex items-start pb-[20px] pl-[8px] pr-[24px] pt-[12px] relative shrink-0 w-[1282px]" data-name="Row">
      <div aria-hidden="true" className="absolute border-[#ecedef] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <Frame30 />
    </div>
  );
}

function StarOutlined1() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="star-outlined">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="star-outlined">
          <path d={svgPaths.pd58e9a0} fill="var(--fill-0, #72777E)" id="Union" />
        </g>
      </svg>
    </div>
  );
}

function Frame34() {
  return (
    <div className="content-stretch flex gap-[12px] items-start px-0 py-[2px] relative shrink-0">
      <div className="bg-white relative rounded-[1px] shrink-0 size-[16px]">
        <div aria-hidden="true" className="absolute border border-[#ecedef] border-solid inset-0 pointer-events-none rounded-[1px]" />
      </div>
      <StarOutlined1 />
    </div>
  );
}

function Connect1() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="Connect">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g clipPath="url(#clip0_1_11584)" id="Connect">
          <g id="Shape">
            <path clipRule="evenodd" d={svgPaths.p133fac00} fill="var(--fill-0, #1D1E20)" fillRule="evenodd" />
          </g>
        </g>
        <defs>
          <clipPath id="clip0_1_11584">
            <rect fill="white" height="12" width="12" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Frame15() {
  return (
    <div className="content-stretch flex items-start pb-0 pt-[2px] px-0 relative shrink-0">
      <Connect1 />
    </div>
  );
}

function Tags2() {
  return (
    <div className="bg-[#ecedef] content-stretch flex gap-[4px] items-center justify-center pb-[5px] pt-[3px] px-[8px] relative rounded-[100px] shrink-0" data-name="Tags">
      <Frame15 />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[16px] not-italic relative shrink-0 text-[#1d1e20] text-[12px] text-nowrap">Tenant relationship</p>
    </div>
  );
}

function TenantGroup1() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0" data-name="Tenant Group">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[20px] not-italic relative shrink-0 text-[#1d1e20] text-[14px] text-nowrap">Amazon</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[16px] not-italic relative shrink-0 text-[#72777e] text-[12px] text-nowrap">New deal</p>
      <Tags2 />
    </div>
  );
}

function Frame36() {
  return (
    <div className="content-stretch flex gap-[12px] items-start relative shrink-0 w-[233px]">
      <Frame34 />
      <div className="relative rounded-[2px] shrink-0 size-[32px]" data-name="amazon_symbol.png">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-contain pointer-events-none rounded-[2px] size-full" src={imgAmazonSymbolPng} />
      </div>
      <TenantGroup1 />
    </div>
  );
}

function Frame23() {
  return (
    <div className="content-stretch flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[43.2px] items-start not-italic relative shrink-0 text-nowrap">
      <p className="leading-[20px] relative shrink-0 text-[#1d1e20] text-[14px]">One East Broad...</p>
      <p className="leading-[16px] relative shrink-0 text-[#72777e] text-[12px]">Level 2, 13 | 2,000 sf</p>
    </div>
  );
}

function Placeholder2() {
  return (
    <div className="basis-0 content-stretch flex grow h-full items-center min-h-px min-w-px overflow-clip relative shrink-0" data-name="placeholder">
      <p className="font-['IBM_Plex_Sans:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#1d1e20] text-[14px] text-nowrap">Legal</p>
    </div>
  );
}

function Spacer8Px1() {
  return (
    <div className="content-stretch flex h-full items-center justify-between relative shrink-0 w-[8px]" data-name="spacer/8px">
      <div className="shrink-0 size-[8px]" data-name="_spacer" />
    </div>
  );
}

function NavDown2() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="nav-down">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="nav-down">
          <path d={svgPaths.p9bb2200} fill="var(--fill-0, #72777E)" id="Union" />
        </g>
      </svg>
    </div>
  );
}

function DefaultDropdown1() {
  return (
    <div className="bg-white relative rounded-[3px] shrink-0 w-[144px]" data-name="Default Dropdown">
      <div className="content-stretch flex items-center overflow-clip px-[8px] py-[6px] relative rounded-[inherit] w-full">
        <div className="basis-0 flex flex-row grow items-center self-stretch shrink-0">
          <Placeholder2 />
        </div>
        <div className="flex flex-row items-center self-stretch">
          <Spacer8Px1 />
        </div>
        <NavDown2 />
      </div>
      <div aria-hidden="true" className="absolute border border-[#d6d8db] border-solid inset-0 pointer-events-none rounded-[3px]" />
    </div>
  );
}

function NavDown3() {
  return (
    <div className="[grid-area:1_/_1] h-[16px] ml-[52.22px] mt-[2px] relative w-[17.778px]" data-name="nav-down">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 16">
        <g id="nav-down">
          <path d={svgPaths.p1fe0c600} fill="var(--fill-0, #72777E)" id="Union" />
        </g>
      </svg>
    </div>
  );
}

function Group2() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0">
      <p className="[grid-area:1_/_1] font-['Inter:Regular',sans-serif] font-normal leading-[20px] ml-0 mt-0 not-italic relative text-[#1d1e20] text-[14px] w-[52.222px]">$54.00</p>
      <NavDown3 />
    </div>
  );
}

function Frame38() {
  return (
    <div className="content-stretch flex flex-col font-['Inter:Regular',sans-serif] font-normal gap-[4px] items-start not-italic relative shrink-0 text-nowrap">
      <p className="leading-[20px] relative shrink-0 text-[#1d1e20] text-[14px]">Arlene McCoy</p>
      <p className="leading-[16px] relative shrink-0 text-[#72777e] text-[12px]">Contact</p>
    </div>
  );
}

function Tenant2() {
  return (
    <div className="bg-[#1d1e20] relative rounded-[100px] shrink-0 size-[32px]" data-name="tenant">
      <p className="absolute font-['Roboto:Regular',sans-serif] font-normal inset-[18.75%_15.63%] leading-[20px] text-[14px] text-center text-white" style={{ fontVariationSettings: "'wdth' 100" }}>
        ML
      </p>
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex flex-col font-['Inter:Regular',sans-serif] font-normal items-start not-italic relative shrink-0">
      <p className="leading-[20px] relative shrink-0 text-[#1d1e20] text-[14px] w-[210px]">Matt Lacri</p>
      <div className="leading-[16px] relative shrink-0 text-[#72777e] text-[0px] text-[12px] w-[210px]">
        <p className="mb-0">@Matt Macri tour went great. Following up soon with next steps.</p>
        <p className="font-['Inter:Regular',sans-serif] font-normal not-italic text-[#4837b9]">Leave a comment</p>
      </div>
    </div>
  );
}

function Tenant3() {
  return (
    <div className="content-stretch flex gap-[8px] h-[62px] items-start relative shrink-0 w-[251px]" data-name="tenant">
      <Tenant2 />
      <Frame1 />
    </div>
  );
}

function Frame60() {
  return (
    <div className="content-stretch flex gap-[48px] items-start relative shrink-0">
      <Frame36 />
      <Frame23 />
      <DefaultDropdown1 />
      <Group2 />
      <Frame38 />
      <Tenant3 />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[#1d1e20] text-[14px] text-nowrap">14 hours</p>
    </div>
  );
}

function Row1() {
  return (
    <div className="content-stretch flex items-start pb-[20px] pl-[8px] pr-[24px] pt-[12px] relative shrink-0 w-[1282px]" data-name="Row">
      <div aria-hidden="true" className="absolute border-[#ecedef] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <Frame60 />
    </div>
  );
}

function StarOutlined2() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="star-outlined">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="star-outlined">
          <path d={svgPaths.pd58e9a0} fill="var(--fill-0, #72777E)" id="Union" />
        </g>
      </svg>
    </div>
  );
}

function Frame61() {
  return (
    <div className="content-stretch flex gap-[12px] items-start px-0 py-[2px] relative shrink-0">
      <div className="bg-white relative rounded-[1px] shrink-0 size-[16px]">
        <div aria-hidden="true" className="absolute border border-[#ecedef] border-solid inset-0 pointer-events-none rounded-[1px]" />
      </div>
      <StarOutlined2 />
    </div>
  );
}

function Info1() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="info">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g id="info">
          <path d={svgPaths.p3e9e10f0} fill="var(--fill-0, #72777E)" id="Union" />
        </g>
      </svg>
    </div>
  );
}

function StandardizedNameIcon2() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Standardized Name + Icon">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[16px] not-italic relative shrink-0 text-[#72777e] text-[12px] text-nowrap">Care.com inc.</p>
      <Info1 />
    </div>
  );
}

function Preview() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="Preview">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g id="Preview">
          <path d={svgPaths.p2f915f80} fill="var(--fill-0, #1D1E20)" id="Shape" />
        </g>
      </svg>
    </div>
  );
}

function Frame16() {
  return (
    <div className="content-stretch flex items-start pb-0 pt-[2px] px-0 relative shrink-0">
      <Preview />
    </div>
  );
}

function Tags3() {
  return (
    <div className="bg-[#d1ecc0] content-stretch flex gap-[4px] items-center justify-center px-[8px] py-[4px] relative rounded-[100px] shrink-0" data-name="Tags">
      <Frame16 />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[16px] not-italic relative shrink-0 text-[#1d1e20] text-[12px] text-nowrap">2 recent views</p>
    </div>
  );
}

function Connect2() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="Connect">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g clipPath="url(#clip0_1_11584)" id="Connect">
          <g id="Shape">
            <path clipRule="evenodd" d={svgPaths.p133fac00} fill="var(--fill-0, #1D1E20)" fillRule="evenodd" />
          </g>
        </g>
        <defs>
          <clipPath id="clip0_1_11584">
            <rect fill="white" height="12" width="12" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Frame17() {
  return (
    <div className="content-stretch flex items-start pb-0 pt-[2px] px-0 relative shrink-0">
      <Connect2 />
    </div>
  );
}

function Tags4() {
  return (
    <div className="bg-[#ecedef] content-stretch flex gap-[4px] items-center justify-center pb-[5px] pt-[3px] px-[8px] relative rounded-[100px] shrink-0" data-name="Tags">
      <Frame17 />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[16px] not-italic relative shrink-0 text-[#1d1e20] text-[12px] text-nowrap">Tenant relationship</p>
    </div>
  );
}

function TenantGroup2() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0" data-name="Tenant Group">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[20px] not-italic relative shrink-0 text-[#1d1e20] text-[14px] text-nowrap">Care.com</p>
      <StandardizedNameIcon2 />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[16px] not-italic relative shrink-0 text-[#72777e] text-[12px] text-nowrap">Renewal</p>
      <Tags3 />
      <Tags4 />
    </div>
  );
}

function Frame62() {
  return (
    <div className="content-stretch flex gap-[12px] items-start relative shrink-0 w-[233px]">
      <Frame61 />
      <div className="relative rounded-[2px] shrink-0 size-[32px]" data-name="carecom_icon.jpeg">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-contain pointer-events-none rounded-[2px] size-full" src={imgCarecomIconJpeg} />
      </div>
      <TenantGroup2 />
    </div>
  );
}

function Frame24() {
  return (
    <div className="content-stretch flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[43.2px] items-start not-italic relative shrink-0 text-nowrap">
      <p className="leading-[20px] relative shrink-0 text-[#1d1e20] text-[14px]">VTS Tower</p>
      <p className="leading-[16px] relative shrink-0 text-[#72777e] text-[12px]">Level 2, 13 | 2,000 sf</p>
    </div>
  );
}

function Placeholder3() {
  return (
    <div className="basis-0 content-stretch flex grow h-full items-center min-h-px min-w-px overflow-clip relative shrink-0" data-name="placeholder">
      <p className="font-['IBM_Plex_Sans:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#1d1e20] text-[14px] text-nowrap">Legal</p>
    </div>
  );
}

function Spacer8Px2() {
  return (
    <div className="content-stretch flex h-full items-center justify-between relative shrink-0 w-[8px]" data-name="spacer/8px">
      <div className="shrink-0 size-[8px]" data-name="_spacer" />
    </div>
  );
}

function NavDown4() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="nav-down">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="nav-down">
          <path d={svgPaths.p9bb2200} fill="var(--fill-0, #72777E)" id="Union" />
        </g>
      </svg>
    </div>
  );
}

function DefaultDropdown2() {
  return (
    <div className="bg-white relative rounded-[3px] shrink-0 w-[144px]" data-name="Default Dropdown">
      <div className="content-stretch flex items-center overflow-clip px-[8px] py-[6px] relative rounded-[inherit] w-full">
        <div className="basis-0 flex flex-row grow items-center self-stretch shrink-0">
          <Placeholder3 />
        </div>
        <div className="flex flex-row items-center self-stretch">
          <Spacer8Px2 />
        </div>
        <NavDown4 />
      </div>
      <div aria-hidden="true" className="absolute border border-[#d6d8db] border-solid inset-0 pointer-events-none rounded-[3px]" />
    </div>
  );
}

function NavDown5() {
  return (
    <div className="[grid-area:1_/_1] h-[16px] ml-[52.22px] mt-[2px] relative w-[17.778px]" data-name="nav-down">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 16">
        <g id="nav-down">
          <path d={svgPaths.p1fe0c600} fill="var(--fill-0, #72777E)" id="Union" />
        </g>
      </svg>
    </div>
  );
}

function Group3() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0">
      <p className="[grid-area:1_/_1] font-['Inter:Regular',sans-serif] font-normal leading-[20px] ml-0 mt-0 not-italic relative text-[#1d1e20] text-[14px] w-[52.222px]">$54.00</p>
      <NavDown5 />
    </div>
  );
}

function Frame63() {
  return (
    <div className="content-stretch flex flex-col font-['Inter:Regular',sans-serif] font-normal gap-[4px] items-start not-italic relative shrink-0 text-nowrap">
      <p className="leading-[20px] relative shrink-0 text-[#1d1e20] text-[14px]">Arlene McCoy</p>
      <p className="leading-[16px] relative shrink-0 text-[#72777e] text-[12px]">Contact</p>
    </div>
  );
}

function Tenant4() {
  return (
    <div className="bg-[#1d1e20] relative rounded-[100px] shrink-0 size-[32px]" data-name="tenant">
      <p className="absolute font-['Roboto:Regular',sans-serif] font-normal inset-[18.75%_15.63%] leading-[20px] text-[14px] text-center text-white" style={{ fontVariationSettings: "'wdth' 100" }}>
        ML
      </p>
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex flex-col font-['Inter:Regular',sans-serif] font-normal items-start not-italic relative shrink-0">
      <p className="leading-[20px] relative shrink-0 text-[#1d1e20] text-[14px] w-[210px]">Matt Lacri</p>
      <div className="leading-[16px] relative shrink-0 text-[#72777e] text-[0px] text-[12px] w-[210px]">
        <p className="mb-0">@Matt Macri tour went great. Following up soon with next steps.</p>
        <p className="font-['Inter:Regular',sans-serif] font-normal not-italic text-[#4837b9]">Leave a comment</p>
      </div>
    </div>
  );
}

function Tenant5() {
  return (
    <div className="content-stretch flex gap-[8px] h-[62px] items-start relative shrink-0 w-[251px]" data-name="tenant">
      <Tenant4 />
      <Frame2 />
    </div>
  );
}

function Frame64() {
  return (
    <div className="content-stretch flex gap-[48px] items-start relative shrink-0">
      <Frame62 />
      <Frame24 />
      <DefaultDropdown2 />
      <Group3 />
      <Frame63 />
      <Tenant5 />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[#1d1e20] text-[14px] text-nowrap">14 hours</p>
    </div>
  );
}

function Row2() {
  return (
    <div className="content-stretch flex items-start pb-[20px] pl-[8px] pr-[24px] pt-[12px] relative shrink-0 w-[1282px]" data-name="Row">
      <div aria-hidden="true" className="absolute border-[#ecedef] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <Frame64 />
    </div>
  );
}

function StarOutlined3() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="star-outlined">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="star-outlined">
          <path d={svgPaths.pd58e9a0} fill="var(--fill-0, #72777E)" id="Union" />
        </g>
      </svg>
    </div>
  );
}

function Frame65() {
  return (
    <div className="content-stretch flex gap-[12px] items-start px-0 py-[2px] relative shrink-0">
      <div className="bg-white relative rounded-[1px] shrink-0 size-[16px]">
        <div aria-hidden="true" className="absolute border border-[#ecedef] border-solid inset-0 pointer-events-none rounded-[1px]" />
      </div>
      <StarOutlined3 />
    </div>
  );
}

function Tenant6() {
  return (
    <div className="bg-[#1d1e20] relative rounded-[2px] shrink-0 size-[32px]" data-name="tenant">
      <p className="absolute font-['IBM_Plex_Sans:Regular',sans-serif] inset-[18.75%_15.63%] leading-[20px] not-italic text-[14px] text-center text-white">T</p>
    </div>
  );
}

function StandardizedNameIcon3() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="Standardized Name + Icon">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[16px] not-italic relative shrink-0 text-[#72777e] text-[12px] text-nowrap">New deal</p>
    </div>
  );
}

function TenantGroup3() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0" data-name="Tenant Group">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[20px] not-italic relative shrink-0 text-[#1d1e20] text-[14px] text-nowrap">Tenco</p>
      <StandardizedNameIcon3 />
    </div>
  );
}

function Frame66() {
  return (
    <div className="content-stretch flex gap-[12px] items-start relative shrink-0 w-[233px]">
      <Frame65 />
      <Tenant6 />
      <TenantGroup3 />
    </div>
  );
}

function Frame25() {
  return (
    <div className="content-stretch flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[43.2px] items-start not-italic relative shrink-0 text-nowrap">
      <p className="leading-[20px] relative shrink-0 text-[#1d1e20] text-[14px]">VTS Tower</p>
      <p className="leading-[16px] relative shrink-0 text-[#72777e] text-[12px]">Level 2, 13 | 2,000 sf</p>
    </div>
  );
}

function Placeholder4() {
  return (
    <div className="basis-0 content-stretch flex grow h-full items-center min-h-px min-w-px overflow-clip relative shrink-0" data-name="placeholder">
      <p className="font-['IBM_Plex_Sans:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#1d1e20] text-[14px] text-nowrap">Legal</p>
    </div>
  );
}

function Spacer8Px3() {
  return (
    <div className="content-stretch flex h-full items-center justify-between relative shrink-0 w-[8px]" data-name="spacer/8px">
      <div className="shrink-0 size-[8px]" data-name="_spacer" />
    </div>
  );
}

function NavDown6() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="nav-down">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="nav-down">
          <path d={svgPaths.p9bb2200} fill="var(--fill-0, #72777E)" id="Union" />
        </g>
      </svg>
    </div>
  );
}

function DefaultDropdown3() {
  return (
    <div className="bg-white relative rounded-[3px] shrink-0 w-[144px]" data-name="Default Dropdown">
      <div className="content-stretch flex items-center overflow-clip px-[8px] py-[6px] relative rounded-[inherit] w-full">
        <div className="basis-0 flex flex-row grow items-center self-stretch shrink-0">
          <Placeholder4 />
        </div>
        <div className="flex flex-row items-center self-stretch">
          <Spacer8Px3 />
        </div>
        <NavDown6 />
      </div>
      <div aria-hidden="true" className="absolute border border-[#d6d8db] border-solid inset-0 pointer-events-none rounded-[3px]" />
    </div>
  );
}

function NavDown7() {
  return (
    <div className="[grid-area:1_/_1] h-[16px] ml-[52.22px] mt-[2px] relative w-[17.778px]" data-name="nav-down">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 16">
        <g id="nav-down">
          <path d={svgPaths.p1fe0c600} fill="var(--fill-0, #72777E)" id="Union" />
        </g>
      </svg>
    </div>
  );
}

function Group4() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0">
      <p className="[grid-area:1_/_1] font-['Inter:Regular',sans-serif] font-normal leading-[20px] ml-0 mt-0 not-italic relative text-[#1d1e20] text-[14px] w-[52.222px]">$54.00</p>
      <NavDown7 />
    </div>
  );
}

function Frame67() {
  return (
    <div className="content-stretch flex flex-col font-['Inter:Regular',sans-serif] font-normal gap-[4px] items-start not-italic relative shrink-0 text-nowrap">
      <p className="leading-[20px] relative shrink-0 text-[#1d1e20] text-[14px]">Arlene McCoy</p>
      <p className="leading-[16px] relative shrink-0 text-[#72777e] text-[12px]">Contact</p>
    </div>
  );
}

function Tenant7() {
  return (
    <div className="bg-[#1d1e20] relative rounded-[100px] shrink-0 size-[32px]" data-name="tenant">
      <p className="absolute font-['Roboto:Regular',sans-serif] font-normal inset-[18.75%_15.63%] leading-[20px] text-[14px] text-center text-white" style={{ fontVariationSettings: "'wdth' 100" }}>
        ML
      </p>
    </div>
  );
}

function Frame4() {
  return (
    <div className="content-stretch flex flex-col font-['Inter:Regular',sans-serif] font-normal items-start not-italic relative shrink-0">
      <p className="leading-[20px] relative shrink-0 text-[#1d1e20] text-[14px] w-[210px]">Matt Lacri</p>
      <div className="leading-[16px] relative shrink-0 text-[#72777e] text-[0px] text-[12px] w-[210px]">
        <p className="mb-0">@Matt Macri tour went great. Following up soon with next steps.</p>
        <p className="font-['Inter:Regular',sans-serif] font-normal not-italic text-[#4837b9]">Leave a comment</p>
      </div>
    </div>
  );
}

function Tenant8() {
  return (
    <div className="content-stretch flex gap-[8px] h-[62px] items-start relative shrink-0 w-[251px]" data-name="tenant">
      <Tenant7 />
      <Frame4 />
    </div>
  );
}

function Frame68() {
  return (
    <div className="content-stretch flex gap-[48px] items-start relative shrink-0">
      <Frame66 />
      <Frame25 />
      <DefaultDropdown3 />
      <Group4 />
      <Frame67 />
      <Tenant8 />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[#1d1e20] text-[14px] text-nowrap">14 hours</p>
    </div>
  );
}

function Row3() {
  return (
    <div className="content-stretch flex items-start pb-[20px] pl-[8px] pr-[24px] pt-[12px] relative shrink-0 w-[1282px]" data-name="Row">
      <div aria-hidden="true" className="absolute border-[#ecedef] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <Frame68 />
    </div>
  );
}

function StarOutlined4() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="star-outlined">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="star-outlined">
          <path d={svgPaths.pd58e9a0} fill="var(--fill-0, #72777E)" id="Union" />
        </g>
      </svg>
    </div>
  );
}

function Frame69() {
  return (
    <div className="content-stretch flex gap-[12px] items-start px-0 py-[2px] relative shrink-0">
      <div className="bg-white relative rounded-[1px] shrink-0 size-[16px]">
        <div aria-hidden="true" className="absolute border border-[#ecedef] border-solid inset-0 pointer-events-none rounded-[1px]" />
      </div>
      <StarOutlined4 />
    </div>
  );
}

function Tenant9() {
  return (
    <div className="bg-[#bbbfc4] relative rounded-[2px] shrink-0 size-[32px]" data-name="tenant">
      <p className="absolute font-['IBM_Plex_Sans:Regular',sans-serif] inset-[18.75%_15.63%] leading-[20px] not-italic text-[14px] text-center text-white">?</p>
    </div>
  );
}

function StandardizedNameIcon4() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="Standardized Name + Icon">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[16px] not-italic relative shrink-0 text-[#72777e] text-[12px] text-nowrap">New deal</p>
    </div>
  );
}

function TenantGroup4() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0" data-name="Tenant Group">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[20px] not-italic relative shrink-0 text-[#72777e] text-[14px] text-nowrap">Undisclosed</p>
      <StandardizedNameIcon4 />
    </div>
  );
}

function Frame70() {
  return (
    <div className="content-stretch flex gap-[12px] items-start relative shrink-0 w-[233px]">
      <Frame69 />
      <Tenant9 />
      <TenantGroup4 />
    </div>
  );
}

function Frame26() {
  return (
    <div className="content-stretch flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[43.2px] items-start not-italic relative shrink-0 text-nowrap">
      <p className="leading-[20px] relative shrink-0 text-[#1d1e20] text-[14px]">VTS Tower</p>
      <p className="leading-[16px] relative shrink-0 text-[#72777e] text-[12px]">Level 2, 13 | 2,000 sf</p>
    </div>
  );
}

function Placeholder5() {
  return (
    <div className="basis-0 content-stretch flex grow h-full items-center min-h-px min-w-px overflow-clip relative shrink-0" data-name="placeholder">
      <p className="font-['IBM_Plex_Sans:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#1d1e20] text-[14px] text-nowrap">Legal</p>
    </div>
  );
}

function Spacer8Px4() {
  return (
    <div className="content-stretch flex h-full items-center justify-between relative shrink-0 w-[8px]" data-name="spacer/8px">
      <div className="shrink-0 size-[8px]" data-name="_spacer" />
    </div>
  );
}

function NavDown8() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="nav-down">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="nav-down">
          <path d={svgPaths.p9bb2200} fill="var(--fill-0, #72777E)" id="Union" />
        </g>
      </svg>
    </div>
  );
}

function DefaultDropdown4() {
  return (
    <div className="bg-white relative rounded-[3px] shrink-0 w-[144px]" data-name="Default Dropdown">
      <div className="content-stretch flex items-center overflow-clip px-[8px] py-[6px] relative rounded-[inherit] w-full">
        <div className="basis-0 flex flex-row grow items-center self-stretch shrink-0">
          <Placeholder5 />
        </div>
        <div className="flex flex-row items-center self-stretch">
          <Spacer8Px4 />
        </div>
        <NavDown8 />
      </div>
      <div aria-hidden="true" className="absolute border border-[#d6d8db] border-solid inset-0 pointer-events-none rounded-[3px]" />
    </div>
  );
}

function NavDown9() {
  return (
    <div className="[grid-area:1_/_1] h-[16px] ml-[52.22px] mt-[2px] relative w-[17.778px]" data-name="nav-down">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 16">
        <g id="nav-down">
          <path d={svgPaths.p1fe0c600} fill="var(--fill-0, #72777E)" id="Union" />
        </g>
      </svg>
    </div>
  );
}

function Group5() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0">
      <p className="[grid-area:1_/_1] font-['Inter:Regular',sans-serif] font-normal leading-[20px] ml-0 mt-0 not-italic relative text-[#1d1e20] text-[14px] w-[52.222px]">$54.00</p>
      <NavDown9 />
    </div>
  );
}

function Frame71() {
  return (
    <div className="content-stretch flex flex-col font-['Inter:Regular',sans-serif] font-normal gap-[4px] items-start not-italic relative shrink-0 text-nowrap">
      <p className="leading-[20px] relative shrink-0 text-[#1d1e20] text-[14px]">Arlene McCoy</p>
      <p className="leading-[16px] relative shrink-0 text-[#72777e] text-[12px]">Contact</p>
    </div>
  );
}

function Tenant10() {
  return (
    <div className="bg-[#1d1e20] relative rounded-[100px] shrink-0 size-[32px]" data-name="tenant">
      <p className="absolute font-['Roboto:Regular',sans-serif] font-normal inset-[18.75%_15.63%] leading-[20px] text-[14px] text-center text-white" style={{ fontVariationSettings: "'wdth' 100" }}>
        ML
      </p>
    </div>
  );
}

function Frame5() {
  return (
    <div className="content-stretch flex flex-col font-['Inter:Regular',sans-serif] font-normal items-start not-italic relative shrink-0">
      <p className="leading-[20px] relative shrink-0 text-[#1d1e20] text-[14px] w-[210px]">Matt Lacri</p>
      <div className="leading-[16px] relative shrink-0 text-[#72777e] text-[0px] text-[12px] w-[210px]">
        <p className="mb-0">@Matt Macri tour went great. Following up soon with next steps.</p>
        <p className="font-['Inter:Regular',sans-serif] font-normal not-italic text-[#4837b9]">Leave a comment</p>
      </div>
    </div>
  );
}

function Tenant11() {
  return (
    <div className="content-stretch flex gap-[8px] h-[62px] items-start relative shrink-0 w-[251px]" data-name="tenant">
      <Tenant10 />
      <Frame5 />
    </div>
  );
}

function Frame72() {
  return (
    <div className="content-stretch flex gap-[48px] items-start relative shrink-0">
      <Frame70 />
      <Frame26 />
      <DefaultDropdown4 />
      <Group5 />
      <Frame71 />
      <Tenant11 />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[#1d1e20] text-[14px] text-nowrap">14 hours</p>
    </div>
  );
}

function Row4() {
  return (
    <div className="content-stretch flex items-start pb-[20px] pl-[8px] pr-[24px] pt-[12px] relative shrink-0 w-[1282px]" data-name="Row">
      <div aria-hidden="true" className="absolute border-[#ecedef] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <Frame72 />
    </div>
  );
}

function StarOutlined5() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="star-outlined">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="star-outlined">
          <path d={svgPaths.pd58e9a0} fill="var(--fill-0, #72777E)" id="Union" />
        </g>
      </svg>
    </div>
  );
}

function Frame73() {
  return (
    <div className="content-stretch flex gap-[12px] items-start px-0 py-[2px] relative shrink-0">
      <div className="bg-white relative rounded-[1px] shrink-0 size-[16px]">
        <div aria-hidden="true" className="absolute border border-[#ecedef] border-solid inset-0 pointer-events-none rounded-[1px]" />
      </div>
      <StarOutlined5 />
    </div>
  );
}

function Preview1() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="Preview">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g id="Preview">
          <path d={svgPaths.p2f915f80} fill="var(--fill-0, #1D1E20)" id="Shape" />
        </g>
      </svg>
    </div>
  );
}

function Frame18() {
  return (
    <div className="content-stretch flex items-start pb-0 pt-[2px] px-0 relative shrink-0">
      <Preview1 />
    </div>
  );
}

function Tags5() {
  return (
    <div className="bg-[#ecedef] content-stretch flex gap-[4px] items-center justify-center pb-[5px] pt-[3px] px-[8px] relative rounded-[100px] shrink-0" data-name="Tags">
      <Frame18 />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[16px] not-italic relative shrink-0 text-[#1d1e20] text-[12px] text-nowrap">12 total views</p>
    </div>
  );
}

function TenantGroup5() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0" data-name="Tenant Group">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[20px] not-italic relative shrink-0 text-[#1d1e20] text-[14px] text-nowrap">TGI Fridays</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[16px] not-italic relative shrink-0 text-[#72777e] text-[12px] text-nowrap">New deal</p>
      <Tags5 />
    </div>
  );
}

function Frame74() {
  return (
    <div className="content-stretch flex gap-[12px] items-start relative shrink-0 w-[233px]">
      <Frame73 />
      <div className="relative rounded-[2px] shrink-0 size-[32px]" data-name="tgi_fridays_icon.jpeg">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-contain pointer-events-none rounded-[2px] size-full" src={imgTgiFridaysIconJpeg} />
      </div>
      <TenantGroup5 />
    </div>
  );
}

function Frame27() {
  return (
    <div className="content-stretch flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[43.2px] items-start not-italic relative shrink-0 text-nowrap">
      <p className="leading-[20px] relative shrink-0 text-[#1d1e20] text-[14px]">VTS Tower</p>
      <p className="leading-[16px] relative shrink-0 text-[#72777e] text-[12px]">Level 2, 13 | 2,000 sf</p>
    </div>
  );
}

function Placeholder6() {
  return (
    <div className="basis-0 content-stretch flex grow h-full items-center min-h-px min-w-px overflow-clip relative shrink-0" data-name="placeholder">
      <p className="font-['IBM_Plex_Sans:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#1d1e20] text-[14px] text-nowrap">Legal</p>
    </div>
  );
}

function Spacer8Px5() {
  return (
    <div className="content-stretch flex h-full items-center justify-between relative shrink-0 w-[8px]" data-name="spacer/8px">
      <div className="shrink-0 size-[8px]" data-name="_spacer" />
    </div>
  );
}

function NavDown10() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="nav-down">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="nav-down">
          <path d={svgPaths.p9bb2200} fill="var(--fill-0, #72777E)" id="Union" />
        </g>
      </svg>
    </div>
  );
}

function DefaultDropdown5() {
  return (
    <div className="bg-white relative rounded-[3px] shrink-0 w-[144px]" data-name="Default Dropdown">
      <div className="content-stretch flex items-center overflow-clip px-[8px] py-[6px] relative rounded-[inherit] w-full">
        <div className="basis-0 flex flex-row grow items-center self-stretch shrink-0">
          <Placeholder6 />
        </div>
        <div className="flex flex-row items-center self-stretch">
          <Spacer8Px5 />
        </div>
        <NavDown10 />
      </div>
      <div aria-hidden="true" className="absolute border border-[#d6d8db] border-solid inset-0 pointer-events-none rounded-[3px]" />
    </div>
  );
}

function NavDown11() {
  return (
    <div className="[grid-area:1_/_1] h-[16px] ml-[52.22px] mt-[2px] relative w-[17.778px]" data-name="nav-down">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 16">
        <g id="nav-down">
          <path d={svgPaths.p1fe0c600} fill="var(--fill-0, #72777E)" id="Union" />
        </g>
      </svg>
    </div>
  );
}

function Group6() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0">
      <p className="[grid-area:1_/_1] font-['Inter:Regular',sans-serif] font-normal leading-[20px] ml-0 mt-0 not-italic relative text-[#1d1e20] text-[14px] w-[52.222px]">$54.00</p>
      <NavDown11 />
    </div>
  );
}

function Frame75() {
  return (
    <div className="content-stretch flex flex-col font-['Inter:Regular',sans-serif] font-normal gap-[4px] items-start not-italic relative shrink-0 text-nowrap">
      <p className="leading-[20px] relative shrink-0 text-[#1d1e20] text-[14px]">Arlene McCoy</p>
      <p className="leading-[16px] relative shrink-0 text-[#72777e] text-[12px]">Contact</p>
    </div>
  );
}

function Tenant12() {
  return (
    <div className="bg-[#1d1e20] relative rounded-[100px] shrink-0 size-[32px]" data-name="tenant">
      <p className="absolute font-['Roboto:Regular',sans-serif] font-normal inset-[18.75%_15.63%] leading-[20px] text-[14px] text-center text-white" style={{ fontVariationSettings: "'wdth' 100" }}>
        ML
      </p>
    </div>
  );
}

function Frame6() {
  return (
    <div className="content-stretch flex flex-col font-['Inter:Regular',sans-serif] font-normal items-start not-italic relative shrink-0">
      <p className="leading-[20px] relative shrink-0 text-[#1d1e20] text-[14px] w-[210px]">Matt Lacri</p>
      <div className="leading-[16px] relative shrink-0 text-[#72777e] text-[0px] text-[12px] w-[210px]">
        <p className="mb-0">@Matt Macri tour went great. Following up soon with next steps.</p>
        <p className="font-['Inter:Regular',sans-serif] font-normal not-italic text-[#4837b9]">Leave a comment</p>
      </div>
    </div>
  );
}

function Tenant13() {
  return (
    <div className="content-stretch flex gap-[8px] h-[62px] items-start relative shrink-0 w-[251px]" data-name="tenant">
      <Tenant12 />
      <Frame6 />
    </div>
  );
}

function Frame76() {
  return (
    <div className="content-stretch flex gap-[48px] items-start relative shrink-0">
      <Frame74 />
      <Frame27 />
      <DefaultDropdown5 />
      <Group6 />
      <Frame75 />
      <Tenant13 />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[#1d1e20] text-[14px] text-nowrap">14 hours</p>
    </div>
  );
}

function Row5() {
  return (
    <div className="content-stretch flex items-start pb-[20px] pl-[8px] pr-[24px] pt-[12px] relative shrink-0 w-[1282px]" data-name="Row">
      <div aria-hidden="true" className="absolute border-[#ecedef] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <Frame76 />
    </div>
  );
}

function TableDeals() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 top-0" data-name="table / deals">
      <Toolbar />
      <Component />
      <Row />
      <Row1 />
      <Row2 />
      <Row3 />
      <Row4 />
      <Row5 />
    </div>
  );
}

function TableDeals1() {
  return (
    <div className="bg-white h-[1654px] relative rounded-[8px] shadow-[0px_0px_5px_0px_rgba(0,0,0,0.15)] shrink-0 w-[1282px]" data-name="Table / Deals">
      <TableDeals />
    </div>
  );
}

function Frame35() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[17px] items-start left-[248px] top-[182px]">
      <Frame48 />
      <TableDeals1 />
    </div>
  );
}

function Frame19() {
  return (
    <div className="content-stretch flex gap-[4px] items-start relative shrink-0">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[16px] not-italic relative shrink-0 text-[#72777e] text-[12px] w-[223px]">Stage</p>
    </div>
  );
}

function ChevronDown() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="ChevronDown">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g id="ChevronDown">
          <path d={svgPaths.p2e414680} fill="var(--fill-0, #72777E)" id="Shape" />
        </g>
      </svg>
    </div>
  );
}

function Content() {
  return (
    <div className="basis-0 content-stretch flex gap-[6px] grow items-center min-h-px min-w-px relative shrink-0" data-name="content">
      <p className="basis-0 font-['Inter:Regular',sans-serif] font-normal grow leading-[20px] min-h-px min-w-px not-italic relative shrink-0 text-[#72777e] text-[14px]">Select</p>
      <ChevronDown />
    </div>
  );
}

function InputBoxMediumSmall() {
  return (
    <div className="relative rounded-[3px] shrink-0 w-full" data-name="Input box - medium&small">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-center px-[8px] py-[6px] relative w-full">
          <Content />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#d6d8db] border-solid inset-0 pointer-events-none rounded-[3px]" />
    </div>
  );
}

function TextInput() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[4px] items-start left-[532px] top-[114px] w-[173px]" data-name="Text input">
      <Frame19 />
      <InputBoxMediumSmall />
    </div>
  );
}

function Frame20() {
  return (
    <div className="content-stretch flex gap-[4px] items-start relative shrink-0">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[16px] not-italic relative shrink-0 text-[#72777e] text-[12px] w-[223px]">Approval status</p>
    </div>
  );
}

function ChevronDown1() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="ChevronDown">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g id="ChevronDown">
          <path d={svgPaths.p2e414680} fill="var(--fill-0, #72777E)" id="Shape" />
        </g>
      </svg>
    </div>
  );
}

function Content1() {
  return (
    <div className="basis-0 content-stretch flex gap-[6px] grow items-center min-h-px min-w-px relative shrink-0" data-name="content">
      <p className="basis-0 font-['Inter:Regular',sans-serif] font-normal grow leading-[20px] min-h-px min-w-px not-italic relative shrink-0 text-[#72777e] text-[14px]">Select</p>
      <ChevronDown1 />
    </div>
  );
}

function InputBoxMediumSmall1() {
  return (
    <div className="relative rounded-[3px] shrink-0 w-full" data-name="Input box - medium&small">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-center px-[8px] py-[6px] relative w-full">
          <Content1 />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#d6d8db] border-solid inset-0 pointer-events-none rounded-[3px]" />
    </div>
  );
}

function TextInput1() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[4px] items-start left-[713px] top-[114px] w-[173px]" data-name="Text input">
      <Frame20 />
      <InputBoxMediumSmall1 />
    </div>
  );
}

function Frame21() {
  return (
    <div className="content-stretch flex gap-[4px] items-start relative shrink-0">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[16px] not-italic relative shrink-0 text-[#72777e] text-[12px] w-[223px]">Asset Manager</p>
    </div>
  );
}

function ChevronDown2() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="ChevronDown">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g id="ChevronDown">
          <path d={svgPaths.p2e414680} fill="var(--fill-0, #72777E)" id="Shape" />
        </g>
      </svg>
    </div>
  );
}

function Content2() {
  return (
    <div className="basis-0 content-stretch flex gap-[6px] grow items-center min-h-px min-w-px relative shrink-0" data-name="content">
      <p className="basis-0 font-['Inter:Regular',sans-serif] font-normal grow leading-[20px] min-h-px min-w-px not-italic relative shrink-0 text-[#72777e] text-[14px]">Select</p>
      <ChevronDown2 />
    </div>
  );
}

function InputBoxMediumSmall2() {
  return (
    <div className="relative rounded-[3px] shrink-0 w-full" data-name="Input box - medium&small">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-center px-[8px] py-[6px] relative w-full">
          <Content2 />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#d6d8db] border-solid inset-0 pointer-events-none rounded-[3px]" />
    </div>
  );
}

function TextInput2() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[4px] items-start left-[894px] top-[114px] w-[173px]" data-name="Text input">
      <Frame21 />
      <InputBoxMediumSmall2 />
    </div>
  );
}

function Button5() {
  return (
    <div className="absolute left-[1075px] rounded-[4px] top-[134px]" data-name="Button">
      <div className="content-stretch flex flex-col items-center justify-center overflow-clip px-[12px] py-[6px] relative rounded-[inherit]">
        <p className="font-['Inter:Regular',sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[#280f96] text-[14px] text-center text-nowrap">All filters</p>
      </div>
      <div aria-hidden="true" className="absolute border border-[#280f96] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function Frame7() {
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
        <g clipPath="url(#clip0_3_11533)" id="Dots">
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
          <clipPath id="clip0_3_11533">
            <rect fill="white" height="14" width="14" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Frame13() {
  return (
    <div className="content-stretch flex gap-[24px] items-center justify-center relative shrink-0">
      <Frame7 />
      <Dots />
    </div>
  );
}

function Frame3() {
  return (
    <div className="bg-[#1d1e20] content-stretch flex items-center justify-center px-[16px] py-[8px] relative shrink-0">
      <Frame13 />
    </div>
  );
}

function Frame9() {
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

function Frame10() {
  return (
    <div className="bg-[#1d1e20] content-stretch flex gap-[4px] items-center justify-center p-[16px] relative shrink-0">
      <Mag />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[16px] not-italic relative shrink-0 text-[#ecedef] text-[12px] text-nowrap">SEARCH</p>
    </div>
  );
}

function Frame8() {
  return (
    <div className="absolute bg-[#1d1e20] content-stretch flex items-center left-0 top-0">
      <Frame3 />
      <Frame9 />
      <NavPrimaryTabs />
      <NavPrimaryTabs1 />
      <NavPrimaryTabs2 />
      <NavPrimaryTabs3 />
      <Frame10 />
    </div>
  );
}

function Group() {
  return (
    <div className="absolute contents inset-[21.42%_11.3%_21.43%_9.57%]">
      <div className="absolute inset-[21.42%_28.04%_56.98%_26.34%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15 7">
          <path d={svgPaths.p18566880} fill="var(--fill-0, white)" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[37.17%_11.3%_21.43%_9.57%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 26 14">
          <path d={svgPaths.p3bbdf700} fill="var(--fill-0, white)" id="Vector" />
        </svg>
      </div>
    </div>
  );
}

function Container() {
  return (
    <div className="absolute contents inset-[0_1.73%_0.01%_0]" data-name="Container">
      <div className="absolute inset-[0_1.73%_0.01%_0]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
          <path d={svgPaths.p2cfa62b0} fill="url(#paint0_radial_1_11580)" id="Vector" />
          <defs>
            <radialGradient cx="0" cy="0" gradientTransform="matrix(45.7544 46.818 -241.289 166.579 -8.13597 -9.42292)" gradientUnits="userSpaceOnUse" id="paint0_radial_1_11580" r="1">
              <stop stopColor="#7620CD" />
              <stop offset="0.514564" stopColor="#8822AA" />
              <stop offset="1" stopColor="#181818" />
            </radialGradient>
          </defs>
        </svg>
      </div>
      <Group />
    </div>
  );
}

function Icon() {
  return (
    <div className="h-[31.973px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <Container />
    </div>
  );
}

function VtsAi() {
  return (
    <div className="content-stretch flex flex-col h-[31.973px] items-start relative shrink-0 w-[32px]" data-name="VTS-AI">
      <Icon />
    </div>
  );
}

function Activity() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="activity">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="activity">
          <path d={svgPaths.p144de580} fill="var(--fill-0, #ECEDEF)" id="Union" />
        </g>
      </svg>
    </div>
  );
}

function Reminder() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="reminder">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="reminder">
          <path d={svgPaths.p3817d700} fill="var(--fill-0, #ECEDEF)" id="Union" />
        </g>
      </svg>
    </div>
  );
}

function User() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="user">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="user">
          <path d={svgPaths.p21a4d180} fill="var(--fill-0, #ECEDEF)" id="Union" />
        </g>
      </svg>
    </div>
  );
}

function Frame81() {
  return (
    <div className="absolute content-stretch flex gap-[16px] items-center left-[60px] top-[8px]">
      <VtsAi />
      <Activity />
      <Reminder />
      <User />
    </div>
  );
}

function Frame11() {
  return (
    <div className="absolute bg-[#191919] h-[48px] right-0 top-0 w-[232px]">
      <Frame81 />
    </div>
  );
}

function NavPrimary() {
  return (
    <div className="absolute bg-[#191919] h-[48px] left-0 top-[-2px] w-[1554px]" data-name="nav-primary">
      <Frame8 />
      <Frame11 />
    </div>
  );
}

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

function Frame12() {
  return (
    <div className="absolute bottom-[16px] h-[80px] left-[16px] not-italic text-nowrap w-[144px]">
      <p className="absolute font-['IBM_Plex_Sans:SemiBold',sans-serif] leading-[20px] left-0 right-[56.25%] text-[14px] text-white top-[calc(50%+7px)]">All assets</p>
      <p className="absolute font-['IBM_Plex_Sans:Regular',sans-serif] leading-[16px] left-0 right-[63.89%] text-[#ecedef] text-[12px] top-[calc(50%+24px)]">45 assets</p>
    </div>
  );
}

function NavRight1() {
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
      <Frame12 />
      <div className="absolute h-[21px] left-[16px] top-[19px] w-[72px]" data-name="Sage_Logo_RGB_White 1">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgSageLogoRgbWhite1} />
      </div>
      <NavRight1 />
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

function Frame29() {
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

function Frame77() {
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
      <Frame29 />
      <Frame77 />
    </div>
  );
}

function ColorBlack() {
  return <div className="h-px shrink-0 w-[192px]" data-name="color/ $black-020" />;
}

function Frame79() {
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
        <g clipPath="url(#clip0_3_11483)" id="BuildingsMultiple">
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
          <clipPath id="clip0_3_11483">
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
        <g clipPath="url(#clip0_3_11553)" id="Floorplan">
          <path d={svgPaths.p2bc85700} fill="var(--fill-0, #1D1E20)" id="Shape" />
        </g>
        <defs>
          <clipPath id="clip0_3_11553">
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
        <g clipPath="url(#clip0_3_11480)" id="SitePlan">
          <g id="Shape">
            <path clipRule="evenodd" d={svgPaths.p12907df0} fill="var(--fill-0, #1D1E20)" fillRule="evenodd" />
            <path clipRule="evenodd" d={svgPaths.p378d3700} fill="var(--fill-0, #1D1E20)" fillRule="evenodd" />
            <path clipRule="evenodd" d={svgPaths.p31a07880} fill="var(--fill-0, #1D1E20)" fillRule="evenodd" />
            <path clipRule="evenodd" d={svgPaths.p3b7e9e00} fill="var(--fill-0, #1D1E20)" fillRule="evenodd" />
          </g>
        </g>
        <defs>
          <clipPath id="clip0_3_11480">
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

function Frame78() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[224px]">
      <Frame79 />
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
      <Frame78 />
    </div>
  );
}

function Frame80() {
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

function Nav() {
  return (
    <div className="absolute bg-[#f9fafa] border-[#d0d9e1] border-[0px_1px_0px_0px] border-solid h-[1199px] left-0 overflow-clip top-[47px] w-[224px]" data-name="Nav">
      <NavSecondaryAssetTabs />
      <Frame80 />
      <ButtonV1 />
    </div>
  );
}

export default function DealPage() {
  return (
    <div className="bg-white relative shadow-[0px_0px_15px_0px_rgba(189,189,189,0.25)] size-full" data-name="Deal page">
      <Nav />
      <Breadcrumb />
      <div className="absolute flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] left-[248px] not-italic text-[#1d1e20] text-[24px] text-nowrap top-[110px] translate-y-[-50%]">
        <p className="leading-[32px]">Deals</p>
      </div>
      <div className="absolute bg-white h-[76px] left-[246px] opacity-0 top-[560px] w-[1465px]" />
      <div className="absolute bg-white h-[76px] left-[245px] opacity-0 top-[560px] w-[1466px]" />
      <div className="absolute bg-[#bbbfc4] h-[72px] left-[249px] opacity-0 top-[564px] w-[1461px]" />
      <Input />
      <Frame35 />
      <TextInput />
      <TextInput1 />
      <TextInput2 />
      <Button5 />
      <div className="absolute h-[32px] left-[1321px] top-[134px] w-[205px]" data-name="image 14">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[259.66%] left-[-18.54%] max-w-none top-[-72.02%] w-[121.95%]" src={imgImage14} />
        </div>
      </div>
      <NavPrimary />
    </div>
  );
}