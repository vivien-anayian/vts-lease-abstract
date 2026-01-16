import svgPaths from "./svg-y12prcje4n";
import imgImageUpload from "../assets/62d004828f18c84cb040a5e8733eb7a4fc50c442.png";

function Group() {
  return (
    <div className="h-[32px] relative shrink-0 w-[94.556px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 94.5564 32">
        <g id="Group 1">
          <path d={svgPaths.p2c51a200} fill="var(--fill-0, #1D1E20)" id="Vector" />
          <path d={svgPaths.p2b546240} fill="var(--fill-0, #1D1E20)" id="Vector_2" />
          <path d={svgPaths.p385d0880} fill="var(--fill-0, #1D1E20)" id="Vector_3" />
          <path d={svgPaths.pcebe080} fill="var(--fill-0, #1D1E20)" id="Vector_4" />
        </g>
      </svg>
    </div>
  );
}

function Icon() {
  return (
    <div className="h-[20px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute inset-1/4" data-name="Vector">
        <div className="absolute inset-[-8.33%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.6667 11.6667">
            <path d={svgPaths.p354ab980} id="Vector" stroke="var(--stroke-0, #72777E)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-1/4" data-name="Vector">
        <div className="absolute inset-[-8.33%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.6667 11.6667">
            <path d={svgPaths.p2a4db200} id="Vector" stroke="var(--stroke-0, #72777E)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Button() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[548.5px] pb-0 pt-[4px] px-[4px] rounded-[4px] size-[28px] top-[16px]" data-name="Button">
      <Icon />
    </div>
  );
}

function Frame() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="size-full">
        <div className="content-stretch flex flex-col gap-[16px] items-start px-[24px] py-[16px] relative w-full">
          <Group />
          <Button />
        </div>
      </div>
    </div>
  );
}

function Heading() {
  return (
    <div className="h-[30px] relative shrink-0 w-[226.57px]" data-name="Heading 2">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[30px] left-0 not-italic text-[#1d1e20] text-[20px] text-nowrap top-[-0.5px]">Upload documents</p>
      </div>
    </div>
  );
}

function Container() {
  return (
    <div className="h-[45px] relative shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#ecedef] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between pb-px pt-0 px-[24px] relative size-full">
          <Heading />
        </div>
      </div>
    </div>
  );
}

function Text() {
  return (
    <div className="absolute content-stretch flex h-[17px] items-start left-[112.76px] top-[2px] w-[7.305px]" data-name="Text">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[21px] not-italic relative shrink-0 text-[#fb2c36] text-[14px] text-nowrap">*</p>
    </div>
  );
}

function Label() {
  return (
    <div className="h-[21px] relative shrink-0 w-full" data-name="Label">
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[21px] left-0 not-italic text-[#1d1e20] text-[14px] text-nowrap top-0">Asset / Property</p>
      <Text />
    </div>
  );
}

function Text1() {
  return (
    <div className="h-[21px] relative shrink-0 w-[101.203px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[21px] left-0 not-italic text-[#bbbfc4] text-[14px] text-nowrap top-0">Select an asset</p>
      </div>
    </div>
  );
}

function Icon1() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d="M4 6L8 10L12 6" id="Vector" stroke="var(--stroke-0, #72777E)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Container1() {
  return (
    <div className="bg-white h-[40px] relative rounded-[4px] shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#d6d8db] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[8px] items-center pl-[13px] pr-px py-px relative size-full">
          <Text1 />
          <Icon1 />
        </div>
      </div>
    </div>
  );
}

function Container2() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] h-[69px] items-start relative shrink-0 w-full" data-name="Container">
      <Label />
      <Container1 />
    </div>
  );
}

function Text2() {
  return (
    <div className="absolute content-stretch flex h-[17px] items-start left-[49.84px] top-[2px] w-[7.305px]" data-name="Text">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[21px] not-italic relative shrink-0 text-[#fb2c36] text-[14px] text-nowrap">*</p>
    </div>
  );
}

function Label1() {
  return (
    <div className="h-[21px] relative shrink-0 w-full" data-name="Label">
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[21px] left-0 not-italic text-[#1d1e20] text-[14px] text-nowrap top-0">Tenant</p>
      <Text2 />
    </div>
  );
}

function Text3() {
  return (
    <div className="h-[21px] relative shrink-0 w-[99.773px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[21px] left-0 not-italic text-[#bbbfc4] text-[14px] text-nowrap top-0">Select a tenant</p>
      </div>
    </div>
  );
}

function Icon2() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d="M4 6L8 10L12 6" id="Vector" stroke="var(--stroke-0, #72777E)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Container3() {
  return (
    <div className="bg-white h-[40px] relative rounded-[4px] shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#d6d8db] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[8px] items-center pl-[13px] pr-px py-px relative size-full">
          <Text3 />
          <Icon2 />
        </div>
      </div>
    </div>
  );
}

function Container4() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] h-[69px] items-start relative shrink-0 w-full" data-name="Container">
      <Label1 />
      <Container3 />
    </div>
  );
}

function Text4() {
  return (
    <div className="absolute content-stretch flex h-[17px] items-start left-[109.42px] top-[2px] w-[64.469px]" data-name="Text">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[21px] not-italic relative shrink-0 text-[#72777e] text-[14px] text-nowrap">(optional)</p>
    </div>
  );
}

function Label2() {
  return (
    <div className="h-[21px] relative shrink-0 w-full" data-name="Label">
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[21px] left-0 not-italic text-[#1d1e20] text-[14px] text-nowrap top-0">Document Type</p>
      <Text4 />
    </div>
  );
}

function Text5() {
  return (
    <div className="h-[21px] relative shrink-0 w-[89.375px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[21px] left-0 not-italic text-[#1d1e20] text-[14px] text-nowrap top-0">Master Lease</p>
      </div>
    </div>
  );
}

function Icon3() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d="M4 6L8 10L12 6" id="Vector" stroke="var(--stroke-0, #72777E)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Container5() {
  return (
    <div className="bg-white h-[40px] relative rounded-[4px] shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#d6d8db] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[8px] items-center pl-[13px] pr-px py-px relative size-full">
          <Text5 />
          <Icon3 />
        </div>
      </div>
    </div>
  );
}

function Container6() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] h-[69px] items-start relative shrink-0 w-full" data-name="Container">
      <Label2 />
      <Container5 />
    </div>
  );
}

function Label3() {
  return (
    <div className="h-[21px] relative shrink-0 w-full" data-name="Label">
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[21px] left-0 not-italic text-[#1d1e20] text-[14px] text-nowrap top-0">Lease Document(s)</p>
    </div>
  );
}

function Container7() {
  return <div className="absolute bg-[rgba(201,40,255,0.2)] h-[4px] left-0 rounded-[4px] top-0 w-[36px]" data-name="Container" />;
}

function Container8() {
  return <div className="absolute bg-[rgba(201,40,255,0.2)] h-[4px] left-0 rounded-[4px] top-[10px] w-[28.797px]" data-name="Container" />;
}

function Container9() {
  return <div className="absolute bg-[rgba(201,40,255,0.2)] h-[4px] left-0 rounded-[4px] top-[20px] w-[36px]" data-name="Container" />;
}

function Container10() {
  return <div className="absolute bg-[rgba(201,40,255,0.2)] h-[4px] left-0 rounded-[4px] top-[30px] w-[21.594px]" data-name="Container" />;
}

function Container11() {
  return (
    <div className="absolute h-[34px] left-[12px] top-[12px] w-[36px]" data-name="Container">
      <Container7 />
      <Container8 />
      <Container9 />
      <Container10 />
    </div>
  );
}

function Container12() {
  return <div className="absolute bg-gradient-to-b from-[rgba(0,0,0,0)] h-[2px] left-0 to-[rgba(0,0,0,0)] top-[30.57px] via-50% via-[#c928ff] w-[60px]" data-name="Container" />;
}

function SparklesIcon() {
  return (
    <div className="h-[23.948px] overflow-clip relative shrink-0 w-full" data-name="SparklesIcon">
      <div className="absolute bottom-[51.65%] left-1/2 right-0 top-0" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.5747 11.5796">
          <path d={svgPaths.p17aaf140} fill="url(#paint0_radial_6047_663)" id="Vector" />
          <defs>
            <radialGradient cx="0" cy="0" gradientTransform="matrix(4.01049 17.0587 71.9463 -31.833 4.18321 2.10725)" gradientUnits="userSpaceOnUse" id="paint0_radial_6047_663" r="1">
              <stop stopColor="#8822AA" />
              <stop offset="1" stopColor="#181818" />
            </radialGradient>
          </defs>
        </svg>
      </div>
      <div className="absolute inset-[27.2%_28.13%_3.29%_0]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.6387 16.6456">
          <path d={svgPaths.p30d6fc80} fill="url(#paint0_radial_6047_657)" id="Vector" />
          <defs>
            <radialGradient cx="0" cy="0" gradientTransform="matrix(24.5116 5.76749 -45.7409 103.466 3.0279 6.0159)" gradientUnits="userSpaceOnUse" id="paint0_radial_6047_657" r="1">
              <stop stopColor="#8822AA" />
              <stop offset="1" stopColor="#181818" />
            </radialGradient>
          </defs>
        </svg>
      </div>
    </div>
  );
}

function Container13() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[45.01px] opacity-20 pl-0 pr-[-15.167px] py-0 size-[7.983px] top-[11.11px]" data-name="Container">
      <SparklesIcon />
    </div>
  );
}

function SparklesIcon1() {
  return (
    <div className="h-[0.028px] overflow-clip relative shrink-0 w-full" data-name="SparklesIcon">
      <div className="absolute bottom-[51.65%] left-1/2 right-0 top-0" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 0.499996 0.0136469">
          <path d={svgPaths.p3c468fb0} fill="url(#paint0_radial_6047_661)" id="Vector" />
          <defs>
            <radialGradient cx="0" cy="0" gradientTransform="matrix(0.173242 0.0201043 3.10788 -0.0375164 0.180703 0.00248347)" gradientUnits="userSpaceOnUse" id="paint0_radial_6047_661" r="1">
              <stop stopColor="#8822AA" />
              <stop offset="1" stopColor="#181818" />
            </radialGradient>
          </defs>
        </svg>
      </div>
      <div className="absolute inset-[27.2%_28.13%_3.29%_0]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 0.718744 0.0196175">
          <path d={svgPaths.p36d8c80} fill="url(#paint0_radial_6047_659)" id="Vector" />
          <defs>
            <radialGradient cx="0" cy="0" gradientTransform="matrix(1.05883 0.0067972 -1.97588 0.121939 0.130797 0.00708995)" gradientUnits="userSpaceOnUse" id="paint0_radial_6047_659" r="1">
              <stop stopColor="#8822AA" />
              <stop offset="1" stopColor="#181818" />
            </radialGradient>
          </defs>
        </svg>
      </div>
    </div>
  );
}

function Container14() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[46px] opacity-0 pl-0 pr-[-0.018px] py-0 size-[0.009px] top-[43px]" data-name="Container">
      <SparklesIcon1 />
    </div>
  );
}

function SparklesIcon2() {
  return (
    <div className="h-[30px] overflow-clip relative shrink-0 w-full" data-name="SparklesIcon">
      <div className="absolute bottom-[51.65%] left-1/2 right-0 top-0" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14.4999 14.5059">
          <path d={svgPaths.p261af800} fill="url(#paint0_radial_6047_653)" id="Vector" />
          <defs>
            <radialGradient cx="0" cy="0" gradientTransform="matrix(5.02401 21.3697 90.1284 -39.8778 5.24038 2.63979)" gradientUnits="userSpaceOnUse" id="paint0_radial_6047_653" r="1">
              <stop stopColor="#8822AA" />
              <stop offset="1" stopColor="#181818" />
            </radialGradient>
          </defs>
        </svg>
      </div>
      <div className="absolute inset-[27.2%_28.13%_3.29%_0]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20.8436 20.8523">
          <path d={svgPaths.pe4b2a80} fill="url(#paint0_radial_6047_655)" id="Vector" />
          <defs>
            <radialGradient cx="0" cy="0" gradientTransform="matrix(30.7061 7.22504 -57.3004 129.614 3.79311 7.53622)" gradientUnits="userSpaceOnUse" id="paint0_radial_6047_655" r="1">
              <stop stopColor="#8822AA" />
              <stop offset="1" stopColor="#181818" />
            </radialGradient>
          </defs>
        </svg>
      </div>
    </div>
  );
}

function Container15() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[45.2px] opacity-0 pl-0 pr-[-19px] py-0 size-[10px] top-[53.2px]" data-name="Container">
      <SparklesIcon2 />
    </div>
  );
}

function Container16() {
  return (
    <div className="absolute border-2 border-[rgba(201,40,255,0.3)] border-solid h-[80px] left-0 rounded-[10px] top-0 w-[64px]" data-name="Container" style={{ backgroundImage: "linear-gradient(128.66deg, rgba(201, 40, 255, 0.1) 0%, rgba(139, 40, 255, 0.1) 100%)" }}>
      <Container11 />
      <Container12 />
      <Container13 />
      <Container14 />
      <Container15 />
    </div>
  );
}

function Text6() {
  return (
    <div className="h-[15px] relative shrink-0 w-[14.93px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[15px] left-0 not-italic text-[10px] text-white top-[0.5px] w-[15px]">9%</p>
      </div>
    </div>
  );
}

function Container17() {
  return (
    <div className="absolute bg-gradient-to-b content-stretch flex from-[#c928ff] items-center justify-center left-[40px] pl-0 pr-[0.008px] py-0 rounded-[1.67772e+07px] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)] size-[32px] to-[#8b28ff] top-[-8px]" data-name="Container">
      <Text6 />
    </div>
  );
}

function Container18() {
  return (
    <div className="absolute h-[80px] left-[234px] top-[16px] w-[64px]" data-name="Container">
      <Container16 />
      <Container17 />
    </div>
  );
}

function Text7() {
  return <div className="absolute bg-[#1d1e20] left-0 opacity-[0.404] rounded-[2px] size-[4px] top-0" data-name="Text" />;
}

function Text8() {
  return <div className="absolute bg-[#1d1e20] left-[6px] opacity-30 rounded-[2px] size-[4px] top-0" data-name="Text" />;
}

function Text9() {
  return <div className="absolute bg-[#1d1e20] left-[12px] opacity-30 rounded-[2px] size-[4px] top-0" data-name="Text" />;
}

function Text10() {
  return (
    <div className="absolute h-[4px] left-[327.88px] top-[11px] w-[16px]" data-name="Text">
      <Text7 />
      <Text8 />
      <Text9 />
    </div>
  );
}

function Paragraph() {
  return (
    <div className="absolute h-[20px] left-0 top-[112px] w-[532px]" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-[257.12px] not-italic text-[#1d1e20] text-[14px] text-center text-nowrap top-[0.5px] translate-x-[-50%]">Uploading document</p>
      <Text10 />
    </div>
  );
}

function Container19() {
  return (
    <div className="h-[148px] relative shrink-0 w-[493px]" data-name="Container">
      <Container18 />
      <Paragraph />
    </div>
  );
}

function ProposalUploadBox() {
  return (
    <div className="h-[160px] relative rounded-[16px] shrink-0 w-full" data-name="ProposalUploadBox">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start p-[2px] relative size-full">
          <Container19 />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-2 border-[#d6a6ff] border-dashed inset-0 pointer-events-none rounded-[16px]" />
    </div>
  );
}

function Container20() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] h-[285px] items-start relative shrink-0 w-full" data-name="Container">
      <Label3 />
      <ProposalUploadBox />
    </div>
  );
}

function Container21() {
  return (
    <div className="h-[578px] relative shrink-0 w-full" data-name="Container">
      <div className="size-full">
        <div className="content-stretch flex flex-col gap-[16px] items-start pb-0 pt-[16px] px-[24px] relative size-full">
          <Container2 />
          <Container4 />
          <Container6 />
          <Container20 />
        </div>
      </div>
    </div>
  );
}

function Button1() {
  return (
    <div className="h-[37px] relative rounded-[4px] shrink-0 w-[78.297px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[21px] left-[39.5px] not-italic text-[#72777e] text-[14px] text-center text-nowrap top-[8px] translate-x-[-50%]">Cancel</p>
      </div>
    </div>
  );
}

function ImageUpload() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Image (Upload)">
      <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImageUpload} />
    </div>
  );
}

function Paragraph1() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="Paragraph">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[24px] not-italic relative shrink-0 text-[16px] text-center text-nowrap text-white">Upload to start</p>
    </div>
  );
}

function Button2() {
  return (
    <div className="relative rounded-[4px] shrink-0 w-[183px]" data-name="Button" style={{ backgroundImage: "linear-gradient(167.67deg, rgb(118, 32, 205) 0%, rgb(136, 34, 170) 48%, rgb(80, 29, 97) 100%)" }}>
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[8px] items-start px-[16px] py-[8px] relative w-full">
        <ImageUpload />
        <Paragraph1 />
      </div>
    </div>
  );
}

function Container22() {
  return (
    <div className="h-[70px] relative shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#ecedef] border-[1px_0px_0px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center justify-end size-full">
        <div className="content-stretch flex gap-[12px] items-center justify-end pb-0 pl-0 pr-[24px] pt-px relative size-full">
          <Button1 />
          <Button2 />
        </div>
      </div>
    </div>
  );
}

export default function Container23() {
  return (
    <div className="bg-white content-stretch flex flex-col items-start overflow-clip relative rounded-[8px] shadow-[0px_4px_20px_0px_rgba(0,0,0,0.2)] size-full" data-name="Container">
      <Frame />
      <Container />
      <Container21 />
      <Container22 />
    </div>
  );
}