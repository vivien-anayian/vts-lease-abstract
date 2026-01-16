import svgPaths from "./svg-hw8qweeppj";

function Icon() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g clipPath="url(#clip0_14_2112)" id="Icon">
          <path d={svgPaths.pda21400} id="Vector" stroke="var(--stroke-0, #6A7282)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p1be36900} id="Vector_2" stroke="var(--stroke-0, #6A7282)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.pa8d100} id="Vector_3" stroke="var(--stroke-0, #6A7282)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M6.66667 4H9.33333" id="Vector_4" stroke="var(--stroke-0, #6A7282)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M6.66667 6.66667H9.33333" id="Vector_5" stroke="var(--stroke-0, #6A7282)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M6.66667 9.33333H9.33333" id="Vector_6" stroke="var(--stroke-0, #6A7282)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M6.66667 12H9.33333" id="Vector_7" stroke="var(--stroke-0, #6A7282)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
        <defs>
          <clipPath id="clip0_14_2112">
            <rect fill="white" height="16" width="16" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Heading() {
  return (
    <div className="h-[27px] relative shrink-0 w-[169.492px]" data-name="Heading 3">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[27px] left-0 not-italic text-[#101828] text-[18px] text-nowrap top-[0.5px] tracking-[-0.4395px]">Property Information</p>
      </div>
    </div>
  );
}

function Container() {
  return (
    <div className="content-stretch flex gap-[8px] h-[27px] items-center relative shrink-0 w-full" data-name="Container">
      <Icon />
      <Heading />
    </div>
  );
}

function Paragraph() {
  return (
    <div className="h-[20px] relative shrink-0 w-[93.367px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[#4a5565] text-[14px] text-nowrap top-[0.5px] tracking-[-0.1504px]">Building Name</p>
      </div>
    </div>
  );
}

function Container1() {
  return (
    <div className="bg-[#00c950] relative rounded-[1.67772e+07px] shrink-0 size-[8px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid size-full" />
    </div>
  );
}

function Text() {
  return (
    <div className="basis-0 grow h-[15px] min-h-px min-w-px relative shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[15px] left-0 not-italic text-[#99a1af] text-[10px] top-[0.5px] w-[21px]">98%</p>
      </div>
    </div>
  );
}

function Container2() {
  return (
    <div className="h-[15px] relative shrink-0 w-[32.531px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[4px] items-center relative size-full">
        <Container1 />
        <Text />
      </div>
    </div>
  );
}

function Container3() {
  return (
    <div className="content-stretch flex gap-[16px] h-[20px] items-center relative shrink-0 w-full" data-name="Container">
      <Paragraph />
      <Container2 />
    </div>
  );
}

function Paragraph1() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[24px] left-0 not-italic text-[#0a0a0a] text-[16px] text-nowrap top-[-1px] tracking-[-0.3125px]">One World Trade Center</p>
    </div>
  );
}

function FieldDisplay() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[4px] h-[48px] items-start left-0 top-0 w-[385.664px]" data-name="FieldDisplay">
      <Container3 />
      <Paragraph1 />
    </div>
  );
}

function Paragraph2() {
  return (
    <div className="h-[20px] relative shrink-0 w-[85.789px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[#4a5565] text-[14px] text-nowrap top-[0.5px] tracking-[-0.1504px]">Suite / Space</p>
      </div>
    </div>
  );
}

function Container4() {
  return (
    <div className="bg-[#00c950] relative rounded-[1.67772e+07px] shrink-0 size-[8px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid size-full" />
    </div>
  );
}

function Text1() {
  return (
    <div className="basis-0 grow h-[15px] min-h-px min-w-px relative shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[15px] left-0 not-italic text-[#99a1af] text-[10px] top-[0.5px] w-[21px]">96%</p>
      </div>
    </div>
  );
}

function Container5() {
  return (
    <div className="h-[15px] relative shrink-0 w-[32.602px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[4px] items-center relative size-full">
        <Container4 />
        <Text1 />
      </div>
    </div>
  );
}

function Container6() {
  return (
    <div className="content-stretch flex gap-[16px] h-[20px] items-center relative shrink-0 w-full" data-name="Container">
      <Paragraph2 />
      <Container5 />
    </div>
  );
}

function Paragraph3() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[24px] left-0 not-italic text-[#0a0a0a] text-[16px] text-nowrap top-[-1px] tracking-[-0.3125px]">Suite 4200</p>
    </div>
  );
}

function FieldDisplay1() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[4px] h-[48px] items-start left-[409.66px] top-0 w-[385.664px]" data-name="FieldDisplay">
      <Container6 />
      <Paragraph3 />
    </div>
  );
}

function Paragraph4() {
  return (
    <div className="h-[20px] relative shrink-0 w-[102.484px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[#4a5565] text-[14px] text-nowrap top-[0.5px] tracking-[-0.1504px]">Square Footage</p>
      </div>
    </div>
  );
}

function Container7() {
  return (
    <div className="bg-[#00c950] relative rounded-[1.67772e+07px] shrink-0 size-[8px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid size-full" />
    </div>
  );
}

function Text2() {
  return (
    <div className="basis-0 grow h-[15px] min-h-px min-w-px relative shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[15px] left-0 not-italic text-[#99a1af] text-[10px] top-[0.5px] w-[20px]">97%</p>
      </div>
    </div>
  );
}

function Container8() {
  return (
    <div className="h-[15px] relative shrink-0 w-[31.875px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[4px] items-center relative size-full">
        <Container7 />
        <Text2 />
      </div>
    </div>
  );
}

function Container9() {
  return (
    <div className="content-stretch flex gap-[16px] h-[20px] items-center relative shrink-0 w-full" data-name="Container">
      <Paragraph4 />
      <Container8 />
    </div>
  );
}

function Paragraph5() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[24px] left-0 not-italic text-[#0a0a0a] text-[16px] text-nowrap top-[-1px] tracking-[-0.3125px]">12500</p>
    </div>
  );
}

function FieldDisplay2() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[4px] h-[48px] items-start left-0 top-[72px] w-[385.664px]" data-name="FieldDisplay">
      <Container9 />
      <Paragraph5 />
    </div>
  );
}

function Paragraph6() {
  return (
    <div className="absolute h-[20px] left-0 top-0 w-[32.703px]" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[#4a5565] text-[14px] text-nowrap top-[0.5px] tracking-[-0.1504px]">Floor</p>
    </div>
  );
}

function Paragraph7() {
  return (
    <div className="absolute h-[24px] left-0 top-[24px] w-[385.664px]" data-name="Paragraph">
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[24px] left-0 not-italic text-[#bbbfc4] text-[16px] text-nowrap top-[-1px] tracking-[-0.3125px]">Not extracted</p>
    </div>
  );
}

function FieldDisplay3() {
  return (
    <div className="absolute h-[48px] left-[409.66px] top-[72px] w-[385.664px]" data-name="FieldDisplay">
      <Paragraph6 />
      <Paragraph7 />
    </div>
  );
}

function Container10() {
  return (
    <div className="h-[120px] relative shrink-0 w-full" data-name="Container">
      <FieldDisplay />
      <FieldDisplay1 />
      <FieldDisplay2 />
      <FieldDisplay3 />
    </div>
  );
}

export default function Container11() {
  return (
    <div className="relative size-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#ecedef] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <div className="size-full">
        <div className="content-stretch flex flex-col gap-[24px] items-start pb-px pt-[20px] px-[24px] relative size-full">
          <Container />
          <Container10 />
        </div>
      </div>
    </div>
  );
}