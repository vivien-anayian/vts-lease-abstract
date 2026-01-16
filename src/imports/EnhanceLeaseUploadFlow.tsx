import svgPaths from "./svg-js13y9y85m";

function Heading() {
  return (
    <div className="h-[32px] relative shrink-0 w-full" data-name="Heading 1">
      <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[32px] left-0 not-italic text-[#101828] text-[24px] text-nowrap top-0 tracking-[0.0703px]">Document Central</p>
    </div>
  );
}

function Paragraph() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24px] left-0 not-italic text-[#4a5565] text-[16px] text-nowrap top-[-0.5px] tracking-[-0.3125px]">Manage and track your executed lease documents</p>
    </div>
  );
}

function Container() {
  return (
    <div className="h-[60px] relative shrink-0 w-[364.57px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[4px] items-start relative size-full">
        <Heading />
        <Paragraph />
      </div>
    </div>
  );
}

function Icon() {
  return (
    <div className="absolute left-[13px] size-[16px] top-[10px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.p19416e00} id="Vector" stroke="var(--stroke-0, #0A0A0A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p3e059a80} id="Vector_2" stroke="var(--stroke-0, #0A0A0A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M8 8V12" id="Vector_3" stroke="var(--stroke-0, #0A0A0A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M10 10L8 8L6 10" id="Vector_4" stroke="var(--stroke-0, #0A0A0A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Button() {
  return (
    <div className="basis-0 bg-white grow h-[36px] min-h-px min-w-px relative rounded-[8px] shrink-0" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Icon />
        <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[20px] left-[122.5px] not-italic text-[#0a0a0a] text-[14px] text-center text-nowrap top-[8.5px] tracking-[-0.1504px] translate-x-[-50%]">Upload Executed Lease</p>
      </div>
    </div>
  );
}

function Icon1() {
  return (
    <div className="absolute left-[12px] size-[16px] top-[10px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g clipPath="url(#clip0_7_763)" id="Icon">
          <path d={svgPaths.pda21400} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p1be36900} id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.pa8d100} id="Vector_3" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M6.66667 4H9.33333" id="Vector_4" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M6.66667 6.66667H9.33333" id="Vector_5" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M6.66667 9.33333H9.33333" id="Vector_6" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M6.66667 12H9.33333" id="Vector_7" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
        <defs>
          <clipPath id="clip0_7_763">
            <rect fill="white" height="16" width="16" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Button1() {
  return (
    <div className="bg-[#030213] h-[36px] relative rounded-[8px] shrink-0 w-[118.461px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Icon1 />
        <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[20px] left-[75.5px] not-italic text-[14px] text-center text-nowrap text-white top-[8.5px] tracking-[-0.1504px] translate-x-[-50%]">New Deal</p>
      </div>
    </div>
  );
}

function Container1() {
  return (
    <div className="h-[36px] relative shrink-0 w-[342.672px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[12px] items-start relative size-full">
        <Button />
        <Button1 />
      </div>
    </div>
  );
}

function Container2() {
  return (
    <div className="content-stretch flex h-[60px] items-center justify-between relative shrink-0 w-full" data-name="Container">
      <Container />
      <Container1 />
    </div>
  );
}

function Container3() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col h-[109px] items-start left-0 pb-px pt-[24px] px-[96px] top-0 w-[1424px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[0px_0px_1px] border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none" />
      <Container2 />
    </div>
  );
}

function Paragraph1() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[20px] left-0 not-italic text-[#4a5565] text-[14px] text-nowrap top-[0.5px] tracking-[-0.1504px]">Total Executed Leases</p>
    </div>
  );
}

function Paragraph2() {
  return (
    <div className="content-stretch flex h-[36px] items-start relative shrink-0 w-full" data-name="Paragraph">
      <p className="basis-0 font-['Inter:Semi_Bold',sans-serif] font-semibold grow leading-[36px] min-h-px min-w-px not-italic relative shrink-0 text-[#101828] text-[30px] tracking-[0.3955px]">12</p>
    </div>
  );
}

function Container4() {
  return (
    <div className="h-[64px] relative shrink-0 w-[146.789px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[8px] items-start relative size-full">
        <Paragraph1 />
        <Paragraph2 />
      </div>
    </div>
  );
}

function Icon2() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Icon">
          <path d={svgPaths.pb47f400} id="Vector" stroke="var(--stroke-0, #155DFC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d={svgPaths.p17a13100} id="Vector_2" stroke="var(--stroke-0, #155DFC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d="M10 9H8" id="Vector_3" stroke="var(--stroke-0, #155DFC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d="M16 13H8" id="Vector_4" stroke="var(--stroke-0, #155DFC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d="M16 17H8" id="Vector_5" stroke="var(--stroke-0, #155DFC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Container5() {
  return (
    <div className="bg-[#dbeafe] relative rounded-[1.67772e+07px] shrink-0 size-[48px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <Icon2 />
      </div>
    </div>
  );
}

function Container6() {
  return (
    <div className="content-stretch flex h-[64px] items-center justify-between relative shrink-0 w-full" data-name="Container">
      <Container4 />
      <Container5 />
    </div>
  );
}

function Button2() {
  return (
    <div className="[grid-area:1_/_1] bg-white place-self-stretch relative rounded-[10px] shrink-0" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#2b7fff] border-solid inset-0 pointer-events-none rounded-[10px] shadow-[0px_0px_0px_2px_#2b7fff,0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)]" />
      <div className="size-full">
        <div className="content-stretch flex flex-col items-start pb-px pt-[25px] px-[25px] relative size-full">
          <Container6 />
        </div>
      </div>
    </div>
  );
}

function Paragraph3() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[20px] left-0 not-italic text-[#4a5565] text-[14px] text-nowrap top-[0.5px] tracking-[-0.1504px]">Pending human review</p>
    </div>
  );
}

function Paragraph4() {
  return (
    <div className="content-stretch flex h-[36px] items-start relative shrink-0 w-full" data-name="Paragraph">
      <p className="basis-0 font-['Inter:Semi_Bold',sans-serif] font-semibold grow leading-[36px] min-h-px min-w-px not-italic relative shrink-0 text-[#d08700] text-[30px] tracking-[0.3955px]">3</p>
    </div>
  );
}

function Container7() {
  return (
    <div className="h-[64px] relative shrink-0 w-[149.141px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[8px] items-start relative size-full">
        <Paragraph3 />
        <Paragraph4 />
      </div>
    </div>
  );
}

function Icon3() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Icon">
          <path d={svgPaths.pace200} id="Vector" stroke="var(--stroke-0, #D08700)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d="M12 6V12L16 14" id="Vector_2" stroke="var(--stroke-0, #D08700)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Container8() {
  return (
    <div className="bg-[#fef9c2] relative rounded-[1.67772e+07px] shrink-0 size-[48px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <Icon3 />
      </div>
    </div>
  );
}

function Container9() {
  return (
    <div className="content-stretch flex h-[64px] items-center justify-between relative shrink-0 w-full" data-name="Container">
      <Container7 />
      <Container8 />
    </div>
  );
}

function Button3() {
  return (
    <div className="[grid-area:1_/_2] bg-white place-self-stretch relative rounded-[10px] shrink-0" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[10px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)]" />
      <div className="size-full">
        <div className="content-stretch flex flex-col items-start pb-px pt-[25px] px-[25px] relative size-full">
          <Container9 />
        </div>
      </div>
    </div>
  );
}

function Paragraph5() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[20px] left-0 not-italic text-[#4a5565] text-[14px] text-nowrap top-[0.5px] tracking-[-0.1504px]">Action is required</p>
    </div>
  );
}

function Paragraph6() {
  return (
    <div className="content-stretch flex h-[36px] items-start relative shrink-0 w-full" data-name="Paragraph">
      <p className="basis-0 font-['Inter:Semi_Bold',sans-serif] font-semibold grow leading-[36px] min-h-px min-w-px not-italic relative shrink-0 text-[#e7000b] text-[30px] tracking-[0.3955px]">2</p>
    </div>
  );
}

function Container10() {
  return (
    <div className="h-[64px] relative shrink-0 w-[115.789px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[8px] items-start relative size-full">
        <Paragraph5 />
        <Paragraph6 />
      </div>
    </div>
  );
}

function Icon4() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Icon">
          <path d={svgPaths.p1b851600} id="Vector" stroke="var(--stroke-0, #E7000B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d="M12 9V13" id="Vector_2" stroke="var(--stroke-0, #E7000B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d="M12 17H12.01" id="Vector_3" stroke="var(--stroke-0, #E7000B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Container11() {
  return (
    <div className="bg-[#ffe2e2] relative rounded-[1.67772e+07px] shrink-0 size-[48px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <Icon4 />
      </div>
    </div>
  );
}

function Container12() {
  return (
    <div className="content-stretch flex h-[64px] items-center justify-between relative shrink-0 w-full" data-name="Container">
      <Container10 />
      <Container11 />
    </div>
  );
}

function Button4() {
  return (
    <div className="[grid-area:1_/_3] bg-white place-self-stretch relative rounded-[10px] shrink-0" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[10px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)]" />
      <div className="size-full">
        <div className="content-stretch flex flex-col items-start pb-px pt-[25px] px-[25px] relative size-full">
          <Container12 />
        </div>
      </div>
    </div>
  );
}

function Paragraph7() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[20px] left-0 not-italic text-[#4a5565] text-[14px] text-nowrap top-[0.5px] tracking-[-0.1504px]">Completed</p>
    </div>
  );
}

function Paragraph8() {
  return (
    <div className="content-stretch flex h-[36px] items-start relative shrink-0 w-full" data-name="Paragraph">
      <p className="basis-0 font-['Inter:Semi_Bold',sans-serif] font-semibold grow leading-[36px] min-h-px min-w-px not-italic relative shrink-0 text-[#00a63e] text-[30px] tracking-[0.3955px]">4</p>
    </div>
  );
}

function Container13() {
  return (
    <div className="h-[64px] relative shrink-0 w-[72.391px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[8px] items-start relative size-full">
        <Paragraph7 />
        <Paragraph8 />
      </div>
    </div>
  );
}

function Icon5() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Icon">
          <path d={svgPaths.pace200} id="Vector" stroke="var(--stroke-0, #00A63E)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d="M9 12L11 14L15 10" id="Vector_2" stroke="var(--stroke-0, #00A63E)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Container14() {
  return (
    <div className="bg-[#dcfce7] relative rounded-[1.67772e+07px] shrink-0 size-[48px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <Icon5 />
      </div>
    </div>
  );
}

function Container15() {
  return (
    <div className="content-stretch flex h-[64px] items-center justify-between relative shrink-0 w-full" data-name="Container">
      <Container13 />
      <Container14 />
    </div>
  );
}

function Button5() {
  return (
    <div className="[grid-area:1_/_4] bg-white place-self-stretch relative rounded-[10px] shrink-0" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[10px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)]" />
      <div className="size-full">
        <div className="content-stretch flex flex-col items-start pb-px pt-[25px] px-[25px] relative size-full">
          <Container15 />
        </div>
      </div>
    </div>
  );
}

function Container16() {
  return (
    <div className="gap-[24px] grid grid-cols-[repeat(4,_minmax(0px,_1fr))] grid-rows-[repeat(1,_minmax(0px,_1fr))] h-[114px] relative shrink-0 w-full" data-name="Container">
      <Button2 />
      <Button3 />
      <Button4 />
      <Button5 />
    </div>
  );
}

function Input() {
  return (
    <div className="absolute bg-[#f3f3f5] h-[36px] left-0 rounded-[8px] top-0 w-[1198px]" data-name="Input">
      <div className="content-stretch flex items-center overflow-clip pl-[40px] pr-[12px] py-[4px] relative rounded-[inherit] size-full">
        <p className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#717182] text-[14px] text-nowrap tracking-[-0.1504px]">Search by tenant, property, suite, or size...</p>
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Icon6() {
  return (
    <div className="absolute left-[12px] size-[20px] top-[8px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon">
          <path d={svgPaths.pcddfd00} id="Vector" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M17.5 17.5L13.9167 13.9167" id="Vector_2" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function Container17() {
  return (
    <div className="h-[36px] relative shrink-0 w-full" data-name="Container">
      <Input />
      <Icon6 />
    </div>
  );
}

function Container18() {
  return (
    <div className="bg-white h-[70px] relative rounded-[10px] shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[10px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)]" />
      <div className="size-full">
        <div className="content-stretch flex flex-col items-start pb-px pt-[17px] px-[17px] relative size-full">
          <Container17 />
        </div>
      </div>
    </div>
  );
}

function HeaderCell() {
  return (
    <div className="absolute h-[40.5px] left-0 top-0 w-[288.172px]" data-name="Header Cell">
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[16px] left-[24px] not-italic text-[#6a7282] text-[12px] text-nowrap top-[13px] tracking-[0.6px] uppercase">Tenant</p>
    </div>
  );
}

function HeaderCell1() {
  return (
    <div className="absolute h-[40.5px] left-[288.17px] top-0 w-[277.578px]" data-name="Header Cell">
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[16px] left-[24px] not-italic text-[#6a7282] text-[12px] text-nowrap top-[13px] tracking-[0.6px] uppercase">Property</p>
    </div>
  );
}

function HeaderCell2() {
  return (
    <div className="absolute h-[40.5px] left-[565.75px] top-0 w-[167.727px]" data-name="Header Cell">
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[16px] left-[24px] not-italic text-[#6a7282] text-[12px] text-nowrap top-[13px] tracking-[0.6px] uppercase">Suite/Space</p>
    </div>
  );
}

function HeaderCell3() {
  return (
    <div className="absolute h-[40.5px] left-[733.48px] top-0 w-[122.852px]" data-name="Header Cell">
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[16px] left-[24px] not-italic text-[#6a7282] text-[12px] text-nowrap top-[13px] tracking-[0.6px] uppercase">Size</p>
    </div>
  );
}

function HeaderCell4() {
  return (
    <div className="absolute h-[40.5px] left-[856.33px] top-0 w-[132.797px]" data-name="Header Cell">
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[16px] left-[24px] not-italic text-[#6a7282] text-[12px] text-nowrap top-[13px] tracking-[0.6px] uppercase">Deal Value</p>
    </div>
  );
}

function HeaderCell5() {
  return (
    <div className="absolute h-[40.5px] left-[989.13px] top-0 w-[228px]" data-name="Header Cell">
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[16px] left-[24px] not-italic text-[#6a7282] text-[12px] text-nowrap top-[13px] tracking-[0.6px] uppercase">Stage</p>
    </div>
  );
}

function HeaderCell6() {
  return (
    <div className="absolute h-[40.5px] left-[1217.13px] top-0 w-[196.414px]" data-name="Header Cell">
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[16px] left-[24px] not-italic text-[#6a7282] text-[12px] text-nowrap top-[13px] tracking-[0.6px] uppercase">Status</p>
    </div>
  );
}

function HeaderCell7() {
  return (
    <div className="absolute h-[40.5px] left-[1413.54px] top-0 w-[181.125px]" data-name="Header Cell">
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[16px] left-[24px] not-italic text-[#6a7282] text-[12px] text-nowrap top-[13px] tracking-[0.6px] uppercase">Actions</p>
    </div>
  );
}

function TableRow() {
  return (
    <div className="absolute h-[40.5px] left-0 top-0 w-[1594.664px]" data-name="Table Row">
      <HeaderCell />
      <HeaderCell1 />
      <HeaderCell2 />
      <HeaderCell3 />
      <HeaderCell4 />
      <HeaderCell5 />
      <HeaderCell6 />
      <HeaderCell7 />
    </div>
  );
}

function TableHeader() {
  return (
    <div className="absolute bg-[#f9fafb] border-[0px_0px_1px] border-[rgba(0,0,0,0.1)] border-solid h-[40.5px] left-0 top-0 w-[1594.664px]" data-name="Table Header">
      <TableRow />
    </div>
  );
}

function Icon7() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.p32887f80} id="Vector" stroke="var(--stroke-0, #155DFC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p3694d280} id="Vector_2" stroke="var(--stroke-0, #155DFC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p188b8380} id="Vector_3" stroke="var(--stroke-0, #155DFC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p11a5dbc0} id="Vector_4" stroke="var(--stroke-0, #155DFC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Container19() {
  return (
    <div className="bg-[#dbeafe] relative rounded-[1.67772e+07px] shrink-0 size-[32px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <Icon7 />
      </div>
    </div>
  );
}

function Container20() {
  return (
    <div className="h-[24px] relative shrink-0 w-[134.711px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[24px] left-0 not-italic text-[#101828] text-[16px] text-nowrap top-[-0.5px] tracking-[-0.3125px]">Acme Corporation</p>
      </div>
    </div>
  );
}

function Container21() {
  return (
    <div className="absolute content-stretch flex gap-[12px] h-[32px] items-center left-[24px] top-[18.5px] w-[240.172px]" data-name="Container">
      <Container19 />
      <Container20 />
    </div>
  );
}

function TableCell() {
  return (
    <div className="absolute h-[69px] left-0 top-0 w-[288.172px]" data-name="Table Cell">
      <Container21 />
    </div>
  );
}

function Icon8() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g clipPath="url(#clip0_7_727)" id="Icon">
          <path d={svgPaths.pda21400} id="Vector" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p1be36900} id="Vector_2" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.pa8d100} id="Vector_3" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M6.66667 4H9.33333" id="Vector_4" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M6.66667 6.66667H9.33333" id="Vector_5" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M6.66667 9.33333H9.33333" id="Vector_6" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M6.66667 12H9.33333" id="Vector_7" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
        <defs>
          <clipPath id="clip0_7_727">
            <rect fill="white" height="16" width="16" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Text() {
  return (
    <div className="h-[24px] relative shrink-0 w-[175.289px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24px] left-0 not-italic text-[#101828] text-[16px] text-nowrap top-[-0.5px] tracking-[-0.3125px]">One World Trade Center</p>
      </div>
    </div>
  );
}

function Container22() {
  return (
    <div className="absolute content-stretch flex gap-[8px] h-[24px] items-center left-[24px] top-[22.5px] w-[229.578px]" data-name="Container">
      <Icon8 />
      <Text />
    </div>
  );
}

function TableCell1() {
  return (
    <div className="absolute h-[69px] left-[288.17px] top-0 w-[277.578px]" data-name="Table Cell">
      <Container22 />
    </div>
  );
}

function TableCell2() {
  return (
    <div className="absolute h-[69px] left-[565.75px] top-0 w-[167.727px]" data-name="Table Cell">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24px] left-[24px] not-italic text-[#101828] text-[16px] text-nowrap top-[22px] tracking-[-0.3125px]">Suite 4200</p>
    </div>
  );
}

function TableCell3() {
  return (
    <div className="absolute h-[69px] left-[733.48px] top-0 w-[122.852px]" data-name="Table Cell">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24px] left-[24px] not-italic text-[#101828] text-[16px] text-nowrap top-[22px] tracking-[-0.3125px]">12,500 SF</p>
    </div>
  );
}

function TableCell4() {
  return (
    <div className="absolute h-[69px] left-[856.33px] top-0 w-[132.797px]" data-name="Table Cell">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24px] left-[24px] not-italic text-[#101828] text-[16px] text-nowrap top-[22px] tracking-[-0.3125px]">$1,250,000</p>
    </div>
  );
}

function Badge() {
  return (
    <div className="basis-0 bg-[#ffedd4] grow h-[22px] min-h-px min-w-px relative rounded-[8px] shrink-0" data-name="Badge">
      <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center px-[9px] py-[3px] relative size-full">
          <p className="font-['Inter:Medium',sans-serif] font-medium leading-[16px] not-italic relative shrink-0 text-[#ca3500] text-[12px] text-center text-nowrap">Lease Negotiation</p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function PrimitiveSpan() {
  return (
    <div className="h-[22px] relative shrink-0 w-[122.25px]" data-name="Primitive.span">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center overflow-clip relative rounded-[inherit] size-full">
        <Badge />
      </div>
    </div>
  );
}

function Icon9() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon" opacity="0.5">
          <path d="M4 6L8 10L12 6" id="Vector" stroke="var(--stroke-0, #717182)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function PrimitiveButton() {
  return (
    <div className="absolute bg-[#f3f3f5] content-stretch flex h-[36px] items-center justify-between left-[24px] px-[13px] py-px rounded-[8px] top-[16.5px] w-[180px]" data-name="Primitive.button">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <PrimitiveSpan />
      <Icon9 />
    </div>
  );
}

function TableCell5() {
  return (
    <div className="absolute h-[69px] left-[989.13px] top-0 w-[228px]" data-name="Table Cell">
      <PrimitiveButton />
    </div>
  );
}

function Badge1() {
  return (
    <div className="absolute bg-[#dbeafe] border border-[rgba(0,0,0,0)] border-solid h-[22px] left-[24px] overflow-clip rounded-[8px] top-[24.75px] w-[81.953px]" data-name="Badge">
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[16px] left-[8px] not-italic text-[#1447e6] text-[12px] text-nowrap top-[3px]">Processing</p>
    </div>
  );
}

function TableCell6() {
  return (
    <div className="absolute h-[69px] left-[1217.13px] top-0 w-[196.414px]" data-name="Table Cell">
      <Badge1 />
    </div>
  );
}

function Icon10() {
  return (
    <div className="absolute left-[10px] size-[16px] top-[7px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.p26b72c80} id="Vector" stroke="var(--stroke-0, #0A0A0A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p28db2b80} id="Vector_2" stroke="var(--stroke-0, #0A0A0A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Button6() {
  return (
    <div className="absolute bg-white border border-[rgba(0,0,0,0.1)] border-solid h-[32px] left-[24px] rounded-[8px] top-[18.5px] w-[133.125px]" data-name="Button">
      <Icon10 />
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[20px] left-[81px] not-italic text-[#0a0a0a] text-[14px] text-center text-nowrap top-[5.5px] tracking-[-0.1504px] translate-x-[-50%]">View Details</p>
    </div>
  );
}

function TableCell7() {
  return (
    <div className="absolute h-[69px] left-[1413.54px] top-0 w-[181.125px]" data-name="Table Cell">
      <Button6 />
    </div>
  );
}

function TableRow1() {
  return (
    <div className="absolute border-[#e5e7eb] border-[0px_0px_1px] border-solid h-[69px] left-0 top-0 w-[1594.664px]" data-name="Table Row">
      <TableCell />
      <TableCell1 />
      <TableCell2 />
      <TableCell3 />
      <TableCell4 />
      <TableCell5 />
      <TableCell6 />
      <TableCell7 />
    </div>
  );
}

function Icon11() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.p32887f80} id="Vector" stroke="var(--stroke-0, #155DFC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p3694d280} id="Vector_2" stroke="var(--stroke-0, #155DFC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p188b8380} id="Vector_3" stroke="var(--stroke-0, #155DFC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p11a5dbc0} id="Vector_4" stroke="var(--stroke-0, #155DFC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Container23() {
  return (
    <div className="bg-[#dbeafe] relative rounded-[1.67772e+07px] shrink-0 size-[32px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <Icon11 />
      </div>
    </div>
  );
}

function Container24() {
  return (
    <div className="h-[24px] relative shrink-0 w-[187.086px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[24px] left-0 not-italic text-[#101828] text-[16px] text-nowrap top-[-0.5px] tracking-[-0.3125px]">GlobalTech Solutions Inc.</p>
      </div>
    </div>
  );
}

function Container25() {
  return (
    <div className="absolute content-stretch flex gap-[12px] h-[32px] items-center left-[24px] top-[18.5px] w-[240.172px]" data-name="Container">
      <Container23 />
      <Container24 />
    </div>
  );
}

function TableCell8() {
  return (
    <div className="absolute h-[69px] left-0 top-0 w-[288.172px]" data-name="Table Cell">
      <Container25 />
    </div>
  );
}

function Icon12() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g clipPath="url(#clip0_7_727)" id="Icon">
          <path d={svgPaths.pda21400} id="Vector" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p1be36900} id="Vector_2" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.pa8d100} id="Vector_3" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M6.66667 4H9.33333" id="Vector_4" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M6.66667 6.66667H9.33333" id="Vector_5" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M6.66667 9.33333H9.33333" id="Vector_6" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M6.66667 12H9.33333" id="Vector_7" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
        <defs>
          <clipPath id="clip0_7_727">
            <rect fill="white" height="16" width="16" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Text1() {
  return (
    <div className="h-[24px] relative shrink-0 w-[155px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24px] left-0 not-italic text-[#101828] text-[16px] text-nowrap top-[-0.5px] tracking-[-0.3125px]">Empire State Building</p>
      </div>
    </div>
  );
}

function Container26() {
  return (
    <div className="absolute content-stretch flex gap-[8px] h-[24px] items-center left-[24px] top-[22.5px] w-[229.578px]" data-name="Container">
      <Icon12 />
      <Text1 />
    </div>
  );
}

function TableCell9() {
  return (
    <div className="absolute h-[69px] left-[288.17px] top-0 w-[277.578px]" data-name="Table Cell">
      <Container26 />
    </div>
  );
}

function TableCell10() {
  return (
    <div className="absolute h-[69px] left-[565.75px] top-0 w-[167.727px]" data-name="Table Cell">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24px] left-[24px] not-italic text-[#101828] text-[16px] text-nowrap top-[22px] tracking-[-0.3125px]">Suite 3100</p>
    </div>
  );
}

function TableCell11() {
  return (
    <div className="absolute h-[69px] left-[733.48px] top-0 w-[122.852px]" data-name="Table Cell">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24px] left-[24px] not-italic text-[#101828] text-[16px] text-nowrap top-[22px] tracking-[-0.3125px]">8,200 SF</p>
    </div>
  );
}

function TableCell12() {
  return (
    <div className="absolute h-[69px] left-[856.33px] top-0 w-[132.797px]" data-name="Table Cell">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24px] left-[24px] not-italic text-[#101828] text-[16px] text-nowrap top-[22px] tracking-[-0.3125px]">$820,000</p>
    </div>
  );
}

function Badge2() {
  return (
    <div className="basis-0 bg-[#f3e8ff] grow h-[22px] min-h-px min-w-px relative rounded-[8px] shrink-0" data-name="Badge">
      <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center px-[9px] py-[3px] relative size-full">
          <p className="font-['Inter:Medium',sans-serif] font-medium leading-[16px] not-italic relative shrink-0 text-[#8200db] text-[12px] text-center text-nowrap">LOI Signed</p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function PrimitiveSpan1() {
  return (
    <div className="h-[22px] relative shrink-0 w-[80.672px]" data-name="Primitive.span">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center overflow-clip relative rounded-[inherit] size-full">
        <Badge2 />
      </div>
    </div>
  );
}

function Icon13() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon" opacity="0.5">
          <path d="M4 6L8 10L12 6" id="Vector" stroke="var(--stroke-0, #717182)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function PrimitiveButton1() {
  return (
    <div className="absolute bg-[#f3f3f5] content-stretch flex h-[36px] items-center justify-between left-[24px] px-[13px] py-px rounded-[8px] top-[16.5px] w-[180px]" data-name="Primitive.button">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <PrimitiveSpan1 />
      <Icon13 />
    </div>
  );
}

function TableCell13() {
  return (
    <div className="absolute h-[69px] left-[989.13px] top-0 w-[228px]" data-name="Table Cell">
      <PrimitiveButton1 />
    </div>
  );
}

function Badge3() {
  return (
    <div className="absolute bg-[#fef9c2] border border-[rgba(0,0,0,0)] border-solid h-[22px] left-[24px] overflow-clip rounded-[8px] top-[24.75px] w-[148.414px]" data-name="Badge">
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[16px] left-[8px] not-italic text-[#a65f00] text-[12px] text-nowrap top-[3px]">Pending human review</p>
    </div>
  );
}

function TableCell14() {
  return (
    <div className="absolute h-[69px] left-[1217.13px] top-0 w-[196.414px]" data-name="Table Cell">
      <Badge3 />
    </div>
  );
}

function Icon14() {
  return (
    <div className="absolute left-[10px] size-[16px] top-[7px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.p26b72c80} id="Vector" stroke="var(--stroke-0, #0A0A0A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p28db2b80} id="Vector_2" stroke="var(--stroke-0, #0A0A0A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Button7() {
  return (
    <div className="absolute bg-white border border-[rgba(0,0,0,0.1)] border-solid h-[32px] left-[24px] rounded-[8px] top-[18.5px] w-[133.125px]" data-name="Button">
      <Icon14 />
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[20px] left-[81px] not-italic text-[#0a0a0a] text-[14px] text-center text-nowrap top-[5.5px] tracking-[-0.1504px] translate-x-[-50%]">View Details</p>
    </div>
  );
}

function TableCell15() {
  return (
    <div className="absolute h-[69px] left-[1413.54px] top-0 w-[181.125px]" data-name="Table Cell">
      <Button7 />
    </div>
  );
}

function TableRow2() {
  return (
    <div className="absolute border-[#e5e7eb] border-[0px_0px_1px] border-solid h-[69px] left-0 top-[69px] w-[1594.664px]" data-name="Table Row">
      <TableCell8 />
      <TableCell9 />
      <TableCell10 />
      <TableCell11 />
      <TableCell12 />
      <TableCell13 />
      <TableCell14 />
      <TableCell15 />
    </div>
  );
}

function Icon15() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.p32887f80} id="Vector" stroke="var(--stroke-0, #155DFC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p3694d280} id="Vector_2" stroke="var(--stroke-0, #155DFC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p188b8380} id="Vector_3" stroke="var(--stroke-0, #155DFC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p11a5dbc0} id="Vector_4" stroke="var(--stroke-0, #155DFC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Container27() {
  return (
    <div className="bg-[#dbeafe] relative rounded-[1.67772e+07px] shrink-0 size-[32px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <Icon15 />
      </div>
    </div>
  );
}

function Container28() {
  return (
    <div className="h-[24px] relative shrink-0 w-[163.008px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[24px] left-0 not-italic text-[#101828] text-[16px] text-nowrap top-[-0.5px] tracking-[-0.3125px]">Metro Financial Group</p>
      </div>
    </div>
  );
}

function Container29() {
  return (
    <div className="absolute content-stretch flex gap-[12px] h-[32px] items-center left-[24px] top-[18.5px] w-[240.172px]" data-name="Container">
      <Container27 />
      <Container28 />
    </div>
  );
}

function TableCell16() {
  return (
    <div className="absolute h-[69px] left-0 top-0 w-[288.172px]" data-name="Table Cell">
      <Container29 />
    </div>
  );
}

function Icon16() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g clipPath="url(#clip0_7_727)" id="Icon">
          <path d={svgPaths.pda21400} id="Vector" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p1be36900} id="Vector_2" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.pa8d100} id="Vector_3" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M6.66667 4H9.33333" id="Vector_4" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M6.66667 6.66667H9.33333" id="Vector_5" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M6.66667 9.33333H9.33333" id="Vector_6" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M6.66667 12H9.33333" id="Vector_7" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
        <defs>
          <clipPath id="clip0_7_727">
            <rect fill="white" height="16" width="16" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Text2() {
  return (
    <div className="h-[24px] relative shrink-0 w-[123.961px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24px] left-0 not-italic text-[#101828] text-[16px] text-nowrap top-[-0.5px] tracking-[-0.3125px]">Salesforce Tower</p>
      </div>
    </div>
  );
}

function Container30() {
  return (
    <div className="absolute content-stretch flex gap-[8px] h-[24px] items-center left-[24px] top-[22.5px] w-[229.578px]" data-name="Container">
      <Icon16 />
      <Text2 />
    </div>
  );
}

function TableCell17() {
  return (
    <div className="absolute h-[69px] left-[288.17px] top-0 w-[277.578px]" data-name="Table Cell">
      <Container30 />
    </div>
  );
}

function TableCell18() {
  return (
    <div className="absolute h-[69px] left-[565.75px] top-0 w-[167.727px]" data-name="Table Cell">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24px] left-[24px] not-italic text-[#101828] text-[16px] text-nowrap top-[22px] tracking-[-0.3125px]">Floor 28</p>
    </div>
  );
}

function TableCell19() {
  return (
    <div className="absolute h-[69px] left-[733.48px] top-0 w-[122.852px]" data-name="Table Cell">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24px] left-[24px] not-italic text-[#101828] text-[16px] text-nowrap top-[22px] tracking-[-0.3125px]">25,000 SF</p>
    </div>
  );
}

function TableCell20() {
  return (
    <div className="absolute h-[69px] left-[856.33px] top-0 w-[132.797px]" data-name="Table Cell">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24px] left-[24px] not-italic text-[#101828] text-[16px] text-nowrap top-[22px] tracking-[-0.3125px]">$3,125,000</p>
    </div>
  );
}

function Badge4() {
  return (
    <div className="basis-0 bg-[#dbeafe] grow h-[22px] min-h-px min-w-px relative rounded-[8px] shrink-0" data-name="Badge">
      <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center px-[9px] py-[3px] relative size-full">
          <p className="font-['Inter:Medium',sans-serif] font-medium leading-[16px] not-italic relative shrink-0 text-[#1447e6] text-[12px] text-center text-nowrap">Proposal Sent</p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function PrimitiveSpan2() {
  return (
    <div className="h-[22px] relative shrink-0 w-[98.5px]" data-name="Primitive.span">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center overflow-clip relative rounded-[inherit] size-full">
        <Badge4 />
      </div>
    </div>
  );
}

function Icon17() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon" opacity="0.5">
          <path d="M4 6L8 10L12 6" id="Vector" stroke="var(--stroke-0, #717182)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function PrimitiveButton2() {
  return (
    <div className="absolute bg-[#f3f3f5] content-stretch flex h-[36px] items-center justify-between left-[24px] px-[13px] py-px rounded-[8px] top-[16.5px] w-[180px]" data-name="Primitive.button">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <PrimitiveSpan2 />
      <Icon17 />
    </div>
  );
}

function TableCell21() {
  return (
    <div className="absolute h-[69px] left-[989.13px] top-0 w-[228px]" data-name="Table Cell">
      <PrimitiveButton2 />
    </div>
  );
}

function Badge5() {
  return (
    <div className="absolute bg-[#dcfce7] border border-[rgba(0,0,0,0)] border-solid h-[22px] left-[24px] overflow-clip rounded-[8px] top-[24.75px] w-[81.211px]" data-name="Badge">
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[16px] left-[8px] not-italic text-[#008236] text-[12px] text-nowrap top-[3px]">Completed</p>
    </div>
  );
}

function TableCell22() {
  return (
    <div className="absolute h-[69px] left-[1217.13px] top-0 w-[196.414px]" data-name="Table Cell">
      <Badge5 />
    </div>
  );
}

function Icon18() {
  return (
    <div className="absolute left-[10px] size-[16px] top-[7px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.p26b72c80} id="Vector" stroke="var(--stroke-0, #0A0A0A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p28db2b80} id="Vector_2" stroke="var(--stroke-0, #0A0A0A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Button8() {
  return (
    <div className="absolute bg-white border border-[rgba(0,0,0,0.1)] border-solid h-[32px] left-[24px] rounded-[8px] top-[18.5px] w-[133.125px]" data-name="Button">
      <Icon18 />
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[20px] left-[81px] not-italic text-[#0a0a0a] text-[14px] text-center text-nowrap top-[5.5px] tracking-[-0.1504px] translate-x-[-50%]">View Details</p>
    </div>
  );
}

function TableCell23() {
  return (
    <div className="absolute h-[69px] left-[1413.54px] top-0 w-[181.125px]" data-name="Table Cell">
      <Button8 />
    </div>
  );
}

function TableRow3() {
  return (
    <div className="absolute border-[#e5e7eb] border-[0px_0px_1px] border-solid h-[69px] left-0 top-[138px] w-[1594.664px]" data-name="Table Row">
      <TableCell16 />
      <TableCell17 />
      <TableCell18 />
      <TableCell19 />
      <TableCell20 />
      <TableCell21 />
      <TableCell22 />
      <TableCell23 />
    </div>
  );
}

function Icon19() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.p32887f80} id="Vector" stroke="var(--stroke-0, #155DFC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p3694d280} id="Vector_2" stroke="var(--stroke-0, #155DFC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p188b8380} id="Vector_3" stroke="var(--stroke-0, #155DFC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p11a5dbc0} id="Vector_4" stroke="var(--stroke-0, #155DFC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Container31() {
  return (
    <div className="bg-[#dbeafe] relative rounded-[1.67772e+07px] shrink-0 size-[32px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <Icon19 />
      </div>
    </div>
  );
}

function Container32() {
  return (
    <div className="h-[24px] relative shrink-0 w-[191.32px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[24px] left-0 not-italic text-[#101828] text-[16px] text-nowrap top-[-0.5px] tracking-[-0.3125px]">{`Sterling & Associates Law`}</p>
      </div>
    </div>
  );
}

function Container33() {
  return (
    <div className="absolute content-stretch flex gap-[12px] h-[32px] items-center left-[24px] top-[18.5px] w-[240.172px]" data-name="Container">
      <Container31 />
      <Container32 />
    </div>
  );
}

function TableCell24() {
  return (
    <div className="absolute h-[69px] left-0 top-0 w-[288.172px]" data-name="Table Cell">
      <Container33 />
    </div>
  );
}

function Icon20() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g clipPath="url(#clip0_7_727)" id="Icon">
          <path d={svgPaths.pda21400} id="Vector" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p1be36900} id="Vector_2" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.pa8d100} id="Vector_3" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M6.66667 4H9.33333" id="Vector_4" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M6.66667 6.66667H9.33333" id="Vector_5" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M6.66667 9.33333H9.33333" id="Vector_6" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M6.66667 12H9.33333" id="Vector_7" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
        <defs>
          <clipPath id="clip0_7_727">
            <rect fill="white" height="16" width="16" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Text3() {
  return (
    <div className="h-[24px] relative shrink-0 w-[85.641px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24px] left-0 not-italic text-[#101828] text-[16px] text-nowrap top-[-0.5px] tracking-[-0.3125px]">Willis Tower</p>
      </div>
    </div>
  );
}

function Container34() {
  return (
    <div className="absolute content-stretch flex gap-[8px] h-[24px] items-center left-[24px] top-[22.5px] w-[229.578px]" data-name="Container">
      <Icon20 />
      <Text3 />
    </div>
  );
}

function TableCell25() {
  return (
    <div className="absolute h-[69px] left-[288.17px] top-0 w-[277.578px]" data-name="Table Cell">
      <Container34 />
    </div>
  );
}

function TableCell26() {
  return (
    <div className="absolute h-[69px] left-[565.75px] top-0 w-[167.727px]" data-name="Table Cell">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24px] left-[24px] not-italic text-[#101828] text-[16px] text-nowrap top-[22px] tracking-[-0.3125px]">Suite 1850</p>
    </div>
  );
}

function TableCell27() {
  return (
    <div className="absolute h-[69px] left-[733.48px] top-0 w-[122.852px]" data-name="Table Cell">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24px] left-[24px] not-italic text-[#101828] text-[16px] text-nowrap top-[22px] tracking-[-0.3125px]">6,800 SF</p>
    </div>
  );
}

function TableCell28() {
  return (
    <div className="absolute h-[69px] left-[856.33px] top-0 w-[132.797px]" data-name="Table Cell">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24px] left-[24px] not-italic text-[#101828] text-[16px] text-nowrap top-[22px] tracking-[-0.3125px]">$680,000</p>
    </div>
  );
}

function Badge6() {
  return (
    <div className="basis-0 bg-[#dcfce7] grow h-[22px] min-h-px min-w-px relative rounded-[8px] shrink-0" data-name="Badge">
      <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center px-[9px] py-[3px] relative size-full">
          <p className="font-['Inter:Medium',sans-serif] font-medium leading-[16px] not-italic relative shrink-0 text-[#008236] text-[12px] text-center text-nowrap">Lease Executed</p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function PrimitiveSpan3() {
  return (
    <div className="h-[22px] relative shrink-0 w-[108.492px]" data-name="Primitive.span">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center overflow-clip relative rounded-[inherit] size-full">
        <Badge6 />
      </div>
    </div>
  );
}

function Icon21() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon" opacity="0.5">
          <path d="M4 6L8 10L12 6" id="Vector" stroke="var(--stroke-0, #717182)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function PrimitiveButton3() {
  return (
    <div className="absolute bg-[#f3f3f5] content-stretch flex h-[36px] items-center justify-between left-[24px] px-[13px] py-px rounded-[8px] top-[16.5px] w-[180px]" data-name="Primitive.button">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <PrimitiveSpan3 />
      <Icon21 />
    </div>
  );
}

function TableCell29() {
  return (
    <div className="absolute h-[69px] left-[989.13px] top-0 w-[228px]" data-name="Table Cell">
      <PrimitiveButton3 />
    </div>
  );
}

function Badge7() {
  return (
    <div className="absolute bg-[#ffe2e2] border border-[rgba(0,0,0,0)] border-solid h-[22px] left-[24px] overflow-clip rounded-[8px] top-[24.75px] w-[119.57px]" data-name="Badge">
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[16px] left-[8px] not-italic text-[#c10007] text-[12px] text-nowrap top-[3px]">Action is required</p>
    </div>
  );
}

function TableCell30() {
  return (
    <div className="absolute h-[69px] left-[1217.13px] top-0 w-[196.414px]" data-name="Table Cell">
      <Badge7 />
    </div>
  );
}

function Icon22() {
  return (
    <div className="absolute left-[10px] size-[16px] top-[7px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.p26b72c80} id="Vector" stroke="var(--stroke-0, #0A0A0A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p28db2b80} id="Vector_2" stroke="var(--stroke-0, #0A0A0A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Button9() {
  return (
    <div className="absolute bg-white border border-[rgba(0,0,0,0.1)] border-solid h-[32px] left-[24px] rounded-[8px] top-[18.5px] w-[133.125px]" data-name="Button">
      <Icon22 />
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[20px] left-[81px] not-italic text-[#0a0a0a] text-[14px] text-center text-nowrap top-[5.5px] tracking-[-0.1504px] translate-x-[-50%]">View Details</p>
    </div>
  );
}

function TableCell31() {
  return (
    <div className="absolute h-[69px] left-[1413.54px] top-0 w-[181.125px]" data-name="Table Cell">
      <Button9 />
    </div>
  );
}

function TableRow4() {
  return (
    <div className="absolute border-[#e5e7eb] border-[0px_0px_1px] border-solid h-[69px] left-0 top-[207px] w-[1594.664px]" data-name="Table Row">
      <TableCell24 />
      <TableCell25 />
      <TableCell26 />
      <TableCell27 />
      <TableCell28 />
      <TableCell29 />
      <TableCell30 />
      <TableCell31 />
    </div>
  );
}

function Icon23() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.p32887f80} id="Vector" stroke="var(--stroke-0, #155DFC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p3694d280} id="Vector_2" stroke="var(--stroke-0, #155DFC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p188b8380} id="Vector_3" stroke="var(--stroke-0, #155DFC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p11a5dbc0} id="Vector_4" stroke="var(--stroke-0, #155DFC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Container35() {
  return (
    <div className="bg-[#dbeafe] relative rounded-[1.67772e+07px] shrink-0 size-[32px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <Icon23 />
      </div>
    </div>
  );
}

function Container36() {
  return (
    <div className="h-[24px] relative shrink-0 w-[141.586px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[24px] left-0 not-italic text-[#101828] text-[16px] text-nowrap top-[-0.5px] tracking-[-0.3125px]">Innovate Retail LLC</p>
      </div>
    </div>
  );
}

function Container37() {
  return (
    <div className="absolute content-stretch flex gap-[12px] h-[32px] items-center left-[24px] top-[18.5px] w-[240.172px]" data-name="Container">
      <Container35 />
      <Container36 />
    </div>
  );
}

function TableCell32() {
  return (
    <div className="absolute h-[69px] left-0 top-0 w-[288.172px]" data-name="Table Cell">
      <Container37 />
    </div>
  );
}

function Icon24() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g clipPath="url(#clip0_7_727)" id="Icon">
          <path d={svgPaths.pda21400} id="Vector" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p1be36900} id="Vector_2" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.pa8d100} id="Vector_3" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M6.66667 4H9.33333" id="Vector_4" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M6.66667 6.66667H9.33333" id="Vector_5" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M6.66667 9.33333H9.33333" id="Vector_6" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M6.66667 12H9.33333" id="Vector_7" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
        <defs>
          <clipPath id="clip0_7_727">
            <rect fill="white" height="16" width="16" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Text4() {
  return (
    <div className="h-[24px] relative shrink-0 w-[161.711px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24px] left-0 not-italic text-[#101828] text-[16px] text-nowrap top-[-0.5px] tracking-[-0.3125px]">Bank of America Plaza</p>
      </div>
    </div>
  );
}

function Container38() {
  return (
    <div className="absolute content-stretch flex gap-[8px] h-[24px] items-center left-[24px] top-[22.5px] w-[229.578px]" data-name="Container">
      <Icon24 />
      <Text4 />
    </div>
  );
}

function TableCell33() {
  return (
    <div className="absolute h-[69px] left-[288.17px] top-0 w-[277.578px]" data-name="Table Cell">
      <Container38 />
    </div>
  );
}

function TableCell34() {
  return (
    <div className="absolute h-[69px] left-[565.75px] top-0 w-[167.727px]" data-name="Table Cell">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24px] left-[24px] not-italic text-[#101828] text-[16px] text-nowrap top-[22px] tracking-[-0.3125px]">Suite 2100-2120</p>
    </div>
  );
}

function TableCell35() {
  return (
    <div className="absolute h-[69px] left-[733.48px] top-0 w-[122.852px]" data-name="Table Cell">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24px] left-[24px] not-italic text-[#101828] text-[16px] text-nowrap top-[22px] tracking-[-0.3125px]">15,400 SF</p>
    </div>
  );
}

function TableCell36() {
  return (
    <div className="absolute h-[69px] left-[856.33px] top-0 w-[132.797px]" data-name="Table Cell">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24px] left-[24px] not-italic text-[#101828] text-[16px] text-nowrap top-[22px] tracking-[-0.3125px]">$1,540,000</p>
    </div>
  );
}

function Badge8() {
  return (
    <div className="basis-0 bg-[#dcfce7] grow h-[22px] min-h-px min-w-px relative rounded-[8px] shrink-0" data-name="Badge">
      <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center px-[9px] py-[3px] relative size-full">
          <p className="font-['Inter:Medium',sans-serif] font-medium leading-[16px] not-italic relative shrink-0 text-[#008236] text-[12px] text-center text-nowrap">Lease Executed</p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function PrimitiveSpan4() {
  return (
    <div className="h-[22px] relative shrink-0 w-[108.492px]" data-name="Primitive.span">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center overflow-clip relative rounded-[inherit] size-full">
        <Badge8 />
      </div>
    </div>
  );
}

function Icon25() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon" opacity="0.5">
          <path d="M4 6L8 10L12 6" id="Vector" stroke="var(--stroke-0, #717182)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function PrimitiveButton4() {
  return (
    <div className="absolute bg-[#f3f3f5] content-stretch flex h-[36px] items-center justify-between left-[24px] px-[13px] py-px rounded-[8px] top-[16.5px] w-[180px]" data-name="Primitive.button">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <PrimitiveSpan4 />
      <Icon25 />
    </div>
  );
}

function TableCell37() {
  return (
    <div className="absolute h-[69px] left-[989.13px] top-0 w-[228px]" data-name="Table Cell">
      <PrimitiveButton4 />
    </div>
  );
}

function Badge9() {
  return (
    <div className="absolute bg-[#dcfce7] border border-[rgba(0,0,0,0)] border-solid h-[22px] left-[24px] overflow-clip rounded-[8px] top-[24.75px] w-[81.211px]" data-name="Badge">
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[16px] left-[8px] not-italic text-[#008236] text-[12px] text-nowrap top-[3px]">Completed</p>
    </div>
  );
}

function TableCell38() {
  return (
    <div className="absolute h-[69px] left-[1217.13px] top-0 w-[196.414px]" data-name="Table Cell">
      <Badge9 />
    </div>
  );
}

function Icon26() {
  return (
    <div className="absolute left-[10px] size-[16px] top-[7px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.p26b72c80} id="Vector" stroke="var(--stroke-0, #0A0A0A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p28db2b80} id="Vector_2" stroke="var(--stroke-0, #0A0A0A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Button10() {
  return (
    <div className="absolute bg-white border border-[rgba(0,0,0,0.1)] border-solid h-[32px] left-[24px] rounded-[8px] top-[18.5px] w-[133.125px]" data-name="Button">
      <Icon26 />
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[20px] left-[81px] not-italic text-[#0a0a0a] text-[14px] text-center text-nowrap top-[5.5px] tracking-[-0.1504px] translate-x-[-50%]">View Details</p>
    </div>
  );
}

function TableCell39() {
  return (
    <div className="absolute h-[69px] left-[1413.54px] top-0 w-[181.125px]" data-name="Table Cell">
      <Button10 />
    </div>
  );
}

function TableRow5() {
  return (
    <div className="absolute border-[#e5e7eb] border-[0px_0px_1px] border-solid h-[69px] left-0 top-[276px] w-[1594.664px]" data-name="Table Row">
      <TableCell32 />
      <TableCell33 />
      <TableCell34 />
      <TableCell35 />
      <TableCell36 />
      <TableCell37 />
      <TableCell38 />
      <TableCell39 />
    </div>
  );
}

function Icon27() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.p32887f80} id="Vector" stroke="var(--stroke-0, #155DFC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p3694d280} id="Vector_2" stroke="var(--stroke-0, #155DFC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p188b8380} id="Vector_3" stroke="var(--stroke-0, #155DFC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p11a5dbc0} id="Vector_4" stroke="var(--stroke-0, #155DFC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Container39() {
  return (
    <div className="bg-[#dbeafe] relative rounded-[1.67772e+07px] shrink-0 size-[32px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <Icon27 />
      </div>
    </div>
  );
}

function Container40() {
  return (
    <div className="basis-0 grow h-[24px] min-h-px min-w-px relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[24px] left-0 not-italic text-[#101828] text-[16px] text-nowrap top-[-0.5px] tracking-[-0.3125px]">BioMed Research Partners</p>
      </div>
    </div>
  );
}

function Container41() {
  return (
    <div className="absolute content-stretch flex gap-[12px] h-[32px] items-center left-[24px] top-[18.5px] w-[240.172px]" data-name="Container">
      <Container39 />
      <Container40 />
    </div>
  );
}

function TableCell40() {
  return (
    <div className="absolute h-[69px] left-0 top-0 w-[288.172px]" data-name="Table Cell">
      <Container41 />
    </div>
  );
}

function Icon28() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g clipPath="url(#clip0_7_727)" id="Icon">
          <path d={svgPaths.pda21400} id="Vector" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p1be36900} id="Vector_2" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.pa8d100} id="Vector_3" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M6.66667 4H9.33333" id="Vector_4" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M6.66667 6.66667H9.33333" id="Vector_5" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M6.66667 9.33333H9.33333" id="Vector_6" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M6.66667 12H9.33333" id="Vector_7" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
        <defs>
          <clipPath id="clip0_7_727">
            <rect fill="white" height="16" width="16" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Text5() {
  return (
    <div className="h-[24px] relative shrink-0 w-[123.055px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24px] left-0 not-italic text-[#101828] text-[16px] text-nowrap top-[-0.5px] tracking-[-0.3125px]">Chrysler Building</p>
      </div>
    </div>
  );
}

function Container42() {
  return (
    <div className="absolute content-stretch flex gap-[8px] h-[24px] items-center left-[24px] top-[22.5px] w-[229.578px]" data-name="Container">
      <Icon28 />
      <Text5 />
    </div>
  );
}

function TableCell41() {
  return (
    <div className="absolute h-[69px] left-[288.17px] top-0 w-[277.578px]" data-name="Table Cell">
      <Container42 />
    </div>
  );
}

function TableCell42() {
  return (
    <div className="absolute h-[69px] left-[565.75px] top-0 w-[167.727px]" data-name="Table Cell">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24px] left-[24px] not-italic text-[#101828] text-[16px] text-nowrap top-[22px] tracking-[-0.3125px]">Floor 45</p>
    </div>
  );
}

function TableCell43() {
  return (
    <div className="absolute h-[69px] left-[733.48px] top-0 w-[122.852px]" data-name="Table Cell">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24px] left-[24px] not-italic text-[#101828] text-[16px] text-nowrap top-[22px] tracking-[-0.3125px]">22,000 SF</p>
    </div>
  );
}

function TableCell44() {
  return (
    <div className="absolute h-[69px] left-[856.33px] top-0 w-[132.797px]" data-name="Table Cell">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24px] left-[24px] not-italic text-[#101828] text-[16px] text-nowrap top-[22px] tracking-[-0.3125px]">$2,860,000</p>
    </div>
  );
}

function Badge10() {
  return (
    <div className="basis-0 bg-[#dcfce7] grow h-[22px] min-h-px min-w-px relative rounded-[8px] shrink-0" data-name="Badge">
      <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center px-[9px] py-[3px] relative size-full">
          <p className="font-['Inter:Medium',sans-serif] font-medium leading-[16px] not-italic relative shrink-0 text-[#008236] text-[12px] text-center text-nowrap">Lease Executed</p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function PrimitiveSpan5() {
  return (
    <div className="h-[22px] relative shrink-0 w-[108.492px]" data-name="Primitive.span">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center overflow-clip relative rounded-[inherit] size-full">
        <Badge10 />
      </div>
    </div>
  );
}

function Icon29() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon" opacity="0.5">
          <path d="M4 6L8 10L12 6" id="Vector" stroke="var(--stroke-0, #717182)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function PrimitiveButton5() {
  return (
    <div className="absolute bg-[#f3f3f5] content-stretch flex h-[36px] items-center justify-between left-[24px] px-[13px] py-px rounded-[8px] top-[16.5px] w-[180px]" data-name="Primitive.button">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <PrimitiveSpan5 />
      <Icon29 />
    </div>
  );
}

function TableCell45() {
  return (
    <div className="absolute h-[69px] left-[989.13px] top-0 w-[228px]" data-name="Table Cell">
      <PrimitiveButton5 />
    </div>
  );
}

function Badge11() {
  return (
    <div className="absolute bg-[#fef9c2] border border-[rgba(0,0,0,0)] border-solid h-[22px] left-[24px] overflow-clip rounded-[8px] top-[24.75px] w-[148.414px]" data-name="Badge">
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[16px] left-[8px] not-italic text-[#a65f00] text-[12px] text-nowrap top-[3px]">Pending human review</p>
    </div>
  );
}

function TableCell46() {
  return (
    <div className="absolute h-[69px] left-[1217.13px] top-0 w-[196.414px]" data-name="Table Cell">
      <Badge11 />
    </div>
  );
}

function Icon30() {
  return (
    <div className="absolute left-[10px] size-[16px] top-[7px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.p26b72c80} id="Vector" stroke="var(--stroke-0, #0A0A0A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p28db2b80} id="Vector_2" stroke="var(--stroke-0, #0A0A0A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Button11() {
  return (
    <div className="absolute bg-white border border-[rgba(0,0,0,0.1)] border-solid h-[32px] left-[24px] rounded-[8px] top-[18.5px] w-[133.125px]" data-name="Button">
      <Icon30 />
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[20px] left-[81px] not-italic text-[#0a0a0a] text-[14px] text-center text-nowrap top-[5.5px] tracking-[-0.1504px] translate-x-[-50%]">View Details</p>
    </div>
  );
}

function TableCell47() {
  return (
    <div className="absolute h-[69px] left-[1413.54px] top-0 w-[181.125px]" data-name="Table Cell">
      <Button11 />
    </div>
  );
}

function TableRow6() {
  return (
    <div className="absolute border-[#e5e7eb] border-[0px_0px_1px] border-solid h-[69px] left-0 top-[345px] w-[1594.664px]" data-name="Table Row">
      <TableCell40 />
      <TableCell41 />
      <TableCell42 />
      <TableCell43 />
      <TableCell44 />
      <TableCell45 />
      <TableCell46 />
      <TableCell47 />
    </div>
  );
}

function Icon31() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.p32887f80} id="Vector" stroke="var(--stroke-0, #155DFC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p3694d280} id="Vector_2" stroke="var(--stroke-0, #155DFC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p188b8380} id="Vector_3" stroke="var(--stroke-0, #155DFC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p11a5dbc0} id="Vector_4" stroke="var(--stroke-0, #155DFC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Container43() {
  return (
    <div className="bg-[#dbeafe] relative rounded-[1.67772e+07px] shrink-0 size-[32px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <Icon31 />
      </div>
    </div>
  );
}

function Container44() {
  return (
    <div className="h-[24px] relative shrink-0 w-[150.547px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[24px] left-0 not-italic text-[#101828] text-[16px] text-nowrap top-[-0.5px] tracking-[-0.3125px]">Creative Agency Co.</p>
      </div>
    </div>
  );
}

function Container45() {
  return (
    <div className="absolute content-stretch flex gap-[12px] h-[32px] items-center left-[24px] top-[18.5px] w-[240.172px]" data-name="Container">
      <Container43 />
      <Container44 />
    </div>
  );
}

function TableCell48() {
  return (
    <div className="absolute h-[69px] left-0 top-0 w-[288.172px]" data-name="Table Cell">
      <Container45 />
    </div>
  );
}

function Icon32() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g clipPath="url(#clip0_7_727)" id="Icon">
          <path d={svgPaths.pda21400} id="Vector" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p1be36900} id="Vector_2" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.pa8d100} id="Vector_3" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M6.66667 4H9.33333" id="Vector_4" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M6.66667 6.66667H9.33333" id="Vector_5" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M6.66667 9.33333H9.33333" id="Vector_6" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M6.66667 12H9.33333" id="Vector_7" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
        <defs>
          <clipPath id="clip0_7_727">
            <rect fill="white" height="16" width="16" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Text6() {
  return (
    <div className="h-[24px] relative shrink-0 w-[72.953px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24px] left-0 not-italic text-[#101828] text-[16px] text-nowrap top-[-0.5px] tracking-[-0.3125px]">The Spiral</p>
      </div>
    </div>
  );
}

function Container46() {
  return (
    <div className="absolute content-stretch flex gap-[8px] h-[24px] items-center left-[24px] top-[22.5px] w-[229.578px]" data-name="Container">
      <Icon32 />
      <Text6 />
    </div>
  );
}

function TableCell49() {
  return (
    <div className="absolute h-[69px] left-[288.17px] top-0 w-[277.578px]" data-name="Table Cell">
      <Container46 />
    </div>
  );
}

function TableCell50() {
  return (
    <div className="absolute h-[69px] left-[565.75px] top-0 w-[167.727px]" data-name="Table Cell">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24px] left-[24px] not-italic text-[#101828] text-[16px] text-nowrap top-[22px] tracking-[-0.3125px]">Suite 3200</p>
    </div>
  );
}

function TableCell51() {
  return (
    <div className="absolute h-[69px] left-[733.48px] top-0 w-[122.852px]" data-name="Table Cell">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24px] left-[24px] not-italic text-[#101828] text-[16px] text-nowrap top-[22px] tracking-[-0.3125px]">4,500 SF</p>
    </div>
  );
}

function TableCell52() {
  return (
    <div className="absolute h-[69px] left-[856.33px] top-0 w-[132.797px]" data-name="Table Cell">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24px] left-[24px] not-italic text-[#101828] text-[16px] text-nowrap top-[22px] tracking-[-0.3125px]">$472,500</p>
    </div>
  );
}

function Badge12() {
  return (
    <div className="basis-0 bg-[#ffedd4] grow h-[22px] min-h-px min-w-px relative rounded-[8px] shrink-0" data-name="Badge">
      <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center px-[9px] py-[3px] relative size-full">
          <p className="font-['Inter:Medium',sans-serif] font-medium leading-[16px] not-italic relative shrink-0 text-[#ca3500] text-[12px] text-center text-nowrap">Lease Negotiation</p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function PrimitiveSpan6() {
  return (
    <div className="h-[22px] relative shrink-0 w-[122.25px]" data-name="Primitive.span">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center overflow-clip relative rounded-[inherit] size-full">
        <Badge12 />
      </div>
    </div>
  );
}

function Icon33() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon" opacity="0.5">
          <path d="M4 6L8 10L12 6" id="Vector" stroke="var(--stroke-0, #717182)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function PrimitiveButton6() {
  return (
    <div className="absolute bg-[#f3f3f5] content-stretch flex h-[36px] items-center justify-between left-[24px] px-[13px] py-px rounded-[8px] top-[16.5px] w-[180px]" data-name="Primitive.button">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <PrimitiveSpan6 />
      <Icon33 />
    </div>
  );
}

function TableCell53() {
  return (
    <div className="absolute h-[69px] left-[989.13px] top-0 w-[228px]" data-name="Table Cell">
      <PrimitiveButton6 />
    </div>
  );
}

function Badge13() {
  return (
    <div className="absolute bg-[#dbeafe] border border-[rgba(0,0,0,0)] border-solid h-[22px] left-[24px] overflow-clip rounded-[8px] top-[24.75px] w-[81.953px]" data-name="Badge">
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[16px] left-[8px] not-italic text-[#1447e6] text-[12px] text-nowrap top-[3px]">Processing</p>
    </div>
  );
}

function TableCell54() {
  return (
    <div className="absolute h-[69px] left-[1217.13px] top-0 w-[196.414px]" data-name="Table Cell">
      <Badge13 />
    </div>
  );
}

function Icon34() {
  return (
    <div className="absolute left-[10px] size-[16px] top-[7px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.p26b72c80} id="Vector" stroke="var(--stroke-0, #0A0A0A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p28db2b80} id="Vector_2" stroke="var(--stroke-0, #0A0A0A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Button12() {
  return (
    <div className="absolute bg-white border border-[rgba(0,0,0,0.1)] border-solid h-[32px] left-[24px] rounded-[8px] top-[18.5px] w-[133.125px]" data-name="Button">
      <Icon34 />
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[20px] left-[81px] not-italic text-[#0a0a0a] text-[14px] text-center text-nowrap top-[5.5px] tracking-[-0.1504px] translate-x-[-50%]">View Details</p>
    </div>
  );
}

function TableCell55() {
  return (
    <div className="absolute h-[69px] left-[1413.54px] top-0 w-[181.125px]" data-name="Table Cell">
      <Button12 />
    </div>
  );
}

function TableRow7() {
  return (
    <div className="absolute border-[#e5e7eb] border-[0px_0px_1px] border-solid h-[69px] left-0 top-[414px] w-[1594.664px]" data-name="Table Row">
      <TableCell48 />
      <TableCell49 />
      <TableCell50 />
      <TableCell51 />
      <TableCell52 />
      <TableCell53 />
      <TableCell54 />
      <TableCell55 />
    </div>
  );
}

function Icon35() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.p32887f80} id="Vector" stroke="var(--stroke-0, #155DFC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p3694d280} id="Vector_2" stroke="var(--stroke-0, #155DFC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p188b8380} id="Vector_3" stroke="var(--stroke-0, #155DFC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p11a5dbc0} id="Vector_4" stroke="var(--stroke-0, #155DFC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Container47() {
  return (
    <div className="bg-[#dbeafe] relative rounded-[1.67772e+07px] shrink-0 size-[32px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <Icon35 />
      </div>
    </div>
  );
}

function Container48() {
  return (
    <div className="h-[24px] relative shrink-0 w-[191.461px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[24px] left-0 not-italic text-[#101828] text-[16px] text-nowrap top-[-0.5px] tracking-[-0.3125px]">Premier Consulting Group</p>
      </div>
    </div>
  );
}

function Container49() {
  return (
    <div className="absolute content-stretch flex gap-[12px] h-[32px] items-center left-[24px] top-[18.5px] w-[240.172px]" data-name="Container">
      <Container47 />
      <Container48 />
    </div>
  );
}

function TableCell56() {
  return (
    <div className="absolute h-[69px] left-0 top-0 w-[288.172px]" data-name="Table Cell">
      <Container49 />
    </div>
  );
}

function Icon36() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g clipPath="url(#clip0_7_727)" id="Icon">
          <path d={svgPaths.pda21400} id="Vector" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p1be36900} id="Vector_2" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.pa8d100} id="Vector_3" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M6.66667 4H9.33333" id="Vector_4" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M6.66667 6.66667H9.33333" id="Vector_5" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M6.66667 9.33333H9.33333" id="Vector_6" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M6.66667 12H9.33333" id="Vector_7" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
        <defs>
          <clipPath id="clip0_7_727">
            <rect fill="white" height="16" width="16" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Text7() {
  return (
    <div className="basis-0 grow h-[24px] min-h-px min-w-px relative shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24px] left-0 not-italic text-[#101828] text-[16px] text-nowrap top-[-0.5px] tracking-[-0.3125px]">Comcast Technology Center</p>
      </div>
    </div>
  );
}

function Container50() {
  return (
    <div className="absolute content-stretch flex gap-[8px] h-[24px] items-center left-[24px] top-[22.5px] w-[229.578px]" data-name="Container">
      <Icon36 />
      <Text7 />
    </div>
  );
}

function TableCell57() {
  return (
    <div className="absolute h-[69px] left-[288.17px] top-0 w-[277.578px]" data-name="Table Cell">
      <Container50 />
    </div>
  );
}

function TableCell58() {
  return (
    <div className="absolute h-[69px] left-[565.75px] top-0 w-[167.727px]" data-name="Table Cell">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24px] left-[24px] not-italic text-[#101828] text-[16px] text-nowrap top-[22px] tracking-[-0.3125px]">Floor 52-53</p>
    </div>
  );
}

function TableCell59() {
  return (
    <div className="absolute h-[69px] left-[733.48px] top-0 w-[122.852px]" data-name="Table Cell">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24px] left-[24px] not-italic text-[#101828] text-[16px] text-nowrap top-[22px] tracking-[-0.3125px]">35,000 SF</p>
    </div>
  );
}

function TableCell60() {
  return (
    <div className="absolute h-[69px] left-[856.33px] top-0 w-[132.797px]" data-name="Table Cell">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24px] left-[24px] not-italic text-[#101828] text-[16px] text-nowrap top-[22px] tracking-[-0.3125px]">$3,850,000</p>
    </div>
  );
}

function Badge14() {
  return (
    <div className="basis-0 bg-[#dcfce7] grow h-[22px] min-h-px min-w-px relative rounded-[8px] shrink-0" data-name="Badge">
      <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center px-[9px] py-[3px] relative size-full">
          <p className="font-['Inter:Medium',sans-serif] font-medium leading-[16px] not-italic relative shrink-0 text-[#008236] text-[12px] text-center text-nowrap">Lease Executed</p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function PrimitiveSpan7() {
  return (
    <div className="h-[22px] relative shrink-0 w-[108.492px]" data-name="Primitive.span">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center overflow-clip relative rounded-[inherit] size-full">
        <Badge14 />
      </div>
    </div>
  );
}

function Icon37() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon" opacity="0.5">
          <path d="M4 6L8 10L12 6" id="Vector" stroke="var(--stroke-0, #717182)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function PrimitiveButton7() {
  return (
    <div className="absolute bg-[#f3f3f5] content-stretch flex h-[36px] items-center justify-between left-[24px] px-[13px] py-px rounded-[8px] top-[16.5px] w-[180px]" data-name="Primitive.button">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <PrimitiveSpan7 />
      <Icon37 />
    </div>
  );
}

function TableCell61() {
  return (
    <div className="absolute h-[69px] left-[989.13px] top-0 w-[228px]" data-name="Table Cell">
      <PrimitiveButton7 />
    </div>
  );
}

function Badge15() {
  return (
    <div className="absolute bg-[#dcfce7] border border-[rgba(0,0,0,0)] border-solid h-[22px] left-[24px] overflow-clip rounded-[8px] top-[24.75px] w-[81.211px]" data-name="Badge">
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[16px] left-[8px] not-italic text-[#008236] text-[12px] text-nowrap top-[3px]">Completed</p>
    </div>
  );
}

function TableCell62() {
  return (
    <div className="absolute h-[69px] left-[1217.13px] top-0 w-[196.414px]" data-name="Table Cell">
      <Badge15 />
    </div>
  );
}

function Icon38() {
  return (
    <div className="absolute left-[10px] size-[16px] top-[7px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.p26b72c80} id="Vector" stroke="var(--stroke-0, #0A0A0A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p28db2b80} id="Vector_2" stroke="var(--stroke-0, #0A0A0A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Button13() {
  return (
    <div className="absolute bg-white border border-[rgba(0,0,0,0.1)] border-solid h-[32px] left-[24px] rounded-[8px] top-[18.5px] w-[133.125px]" data-name="Button">
      <Icon38 />
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[20px] left-[81px] not-italic text-[#0a0a0a] text-[14px] text-center text-nowrap top-[5.5px] tracking-[-0.1504px] translate-x-[-50%]">View Details</p>
    </div>
  );
}

function TableCell63() {
  return (
    <div className="absolute h-[69px] left-[1413.54px] top-0 w-[181.125px]" data-name="Table Cell">
      <Button13 />
    </div>
  );
}

function TableRow8() {
  return (
    <div className="absolute border-[#e5e7eb] border-[0px_0px_1px] border-solid h-[69px] left-0 top-[483px] w-[1594.664px]" data-name="Table Row">
      <TableCell56 />
      <TableCell57 />
      <TableCell58 />
      <TableCell59 />
      <TableCell60 />
      <TableCell61 />
      <TableCell62 />
      <TableCell63 />
    </div>
  );
}

function Icon39() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.p32887f80} id="Vector" stroke="var(--stroke-0, #155DFC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p3694d280} id="Vector_2" stroke="var(--stroke-0, #155DFC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p188b8380} id="Vector_3" stroke="var(--stroke-0, #155DFC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p11a5dbc0} id="Vector_4" stroke="var(--stroke-0, #155DFC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Container51() {
  return (
    <div className="bg-[#dbeafe] relative rounded-[1.67772e+07px] shrink-0 size-[32px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <Icon39 />
      </div>
    </div>
  );
}

function Container52() {
  return (
    <div className="h-[24px] relative shrink-0 w-[160.547px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[24px] left-0 not-italic text-[#101828] text-[16px] text-nowrap top-[-0.5px] tracking-[-0.3125px]">Velocity Logistics Inc.</p>
      </div>
    </div>
  );
}

function Container53() {
  return (
    <div className="absolute content-stretch flex gap-[12px] h-[32px] items-center left-[24px] top-[18.5px] w-[240.172px]" data-name="Container">
      <Container51 />
      <Container52 />
    </div>
  );
}

function TableCell64() {
  return (
    <div className="absolute h-[69px] left-0 top-0 w-[288.172px]" data-name="Table Cell">
      <Container53 />
    </div>
  );
}

function Icon40() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g clipPath="url(#clip0_7_727)" id="Icon">
          <path d={svgPaths.pda21400} id="Vector" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p1be36900} id="Vector_2" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.pa8d100} id="Vector_3" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M6.66667 4H9.33333" id="Vector_4" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M6.66667 6.66667H9.33333" id="Vector_5" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M6.66667 9.33333H9.33333" id="Vector_6" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M6.66667 12H9.33333" id="Vector_7" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
        <defs>
          <clipPath id="clip0_7_727">
            <rect fill="white" height="16" width="16" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Text8() {
  return (
    <div className="h-[24px] relative shrink-0 w-[170.977px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24px] left-0 not-italic text-[#101828] text-[16px] text-nowrap top-[-0.5px] tracking-[-0.3125px]">JPMorgan Chase Tower</p>
      </div>
    </div>
  );
}

function Container54() {
  return (
    <div className="absolute content-stretch flex gap-[8px] h-[24px] items-center left-[24px] top-[22.5px] w-[229.578px]" data-name="Container">
      <Icon40 />
      <Text8 />
    </div>
  );
}

function TableCell65() {
  return (
    <div className="absolute h-[69px] left-[288.17px] top-0 w-[277.578px]" data-name="Table Cell">
      <Container54 />
    </div>
  );
}

function TableCell66() {
  return (
    <div className="absolute h-[69px] left-[565.75px] top-0 w-[167.727px]" data-name="Table Cell">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24px] left-[24px] not-italic text-[#101828] text-[16px] text-nowrap top-[22px] tracking-[-0.3125px]">Suite 6100</p>
    </div>
  );
}

function TableCell67() {
  return (
    <div className="absolute h-[69px] left-[733.48px] top-0 w-[122.852px]" data-name="Table Cell">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24px] left-[24px] not-italic text-[#101828] text-[16px] text-nowrap top-[22px] tracking-[-0.3125px]">18,500 SF</p>
    </div>
  );
}

function TableCell68() {
  return (
    <div className="absolute h-[69px] left-[856.33px] top-0 w-[132.797px]" data-name="Table Cell">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24px] left-[24px] not-italic text-[#101828] text-[16px] text-nowrap top-[22px] tracking-[-0.3125px]">$1,665,000</p>
    </div>
  );
}

function Badge16() {
  return (
    <div className="basis-0 bg-[#dcfce7] grow h-[22px] min-h-px min-w-px relative rounded-[8px] shrink-0" data-name="Badge">
      <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center px-[9px] py-[3px] relative size-full">
          <p className="font-['Inter:Medium',sans-serif] font-medium leading-[16px] not-italic relative shrink-0 text-[#008236] text-[12px] text-center text-nowrap">Lease Executed</p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function PrimitiveSpan8() {
  return (
    <div className="h-[22px] relative shrink-0 w-[108.492px]" data-name="Primitive.span">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center overflow-clip relative rounded-[inherit] size-full">
        <Badge16 />
      </div>
    </div>
  );
}

function Icon41() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon" opacity="0.5">
          <path d="M4 6L8 10L12 6" id="Vector" stroke="var(--stroke-0, #717182)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function PrimitiveButton8() {
  return (
    <div className="absolute bg-[#f3f3f5] content-stretch flex h-[36px] items-center justify-between left-[24px] px-[13px] py-px rounded-[8px] top-[16.5px] w-[180px]" data-name="Primitive.button">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <PrimitiveSpan8 />
      <Icon41 />
    </div>
  );
}

function TableCell69() {
  return (
    <div className="absolute h-[69px] left-[989.13px] top-0 w-[228px]" data-name="Table Cell">
      <PrimitiveButton8 />
    </div>
  );
}

function Badge17() {
  return (
    <div className="absolute bg-[#ffe2e2] border border-[rgba(0,0,0,0)] border-solid h-[22px] left-[24px] overflow-clip rounded-[8px] top-[24.75px] w-[119.57px]" data-name="Badge">
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[16px] left-[8px] not-italic text-[#c10007] text-[12px] text-nowrap top-[3px]">Action is required</p>
    </div>
  );
}

function TableCell70() {
  return (
    <div className="absolute h-[69px] left-[1217.13px] top-0 w-[196.414px]" data-name="Table Cell">
      <Badge17 />
    </div>
  );
}

function Icon42() {
  return (
    <div className="absolute left-[10px] size-[16px] top-[7px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.p26b72c80} id="Vector" stroke="var(--stroke-0, #0A0A0A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p28db2b80} id="Vector_2" stroke="var(--stroke-0, #0A0A0A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Button14() {
  return (
    <div className="absolute bg-white border border-[rgba(0,0,0,0.1)] border-solid h-[32px] left-[24px] rounded-[8px] top-[18.5px] w-[133.125px]" data-name="Button">
      <Icon42 />
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[20px] left-[81px] not-italic text-[#0a0a0a] text-[14px] text-center text-nowrap top-[5.5px] tracking-[-0.1504px] translate-x-[-50%]">View Details</p>
    </div>
  );
}

function TableCell71() {
  return (
    <div className="absolute h-[69px] left-[1413.54px] top-0 w-[181.125px]" data-name="Table Cell">
      <Button14 />
    </div>
  );
}

function TableRow9() {
  return (
    <div className="absolute border-[#e5e7eb] border-[0px_0px_1px] border-solid h-[69px] left-0 top-[552px] w-[1594.664px]" data-name="Table Row">
      <TableCell64 />
      <TableCell65 />
      <TableCell66 />
      <TableCell67 />
      <TableCell68 />
      <TableCell69 />
      <TableCell70 />
      <TableCell71 />
    </div>
  );
}

function Icon43() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.p32887f80} id="Vector" stroke="var(--stroke-0, #155DFC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p3694d280} id="Vector_2" stroke="var(--stroke-0, #155DFC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p188b8380} id="Vector_3" stroke="var(--stroke-0, #155DFC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p11a5dbc0} id="Vector_4" stroke="var(--stroke-0, #155DFC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Container55() {
  return (
    <div className="bg-[#dbeafe] relative rounded-[1.67772e+07px] shrink-0 size-[32px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <Icon43 />
      </div>
    </div>
  );
}

function Container56() {
  return (
    <div className="h-[24px] relative shrink-0 w-[159.641px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[24px] left-0 not-italic text-[#101828] text-[16px] text-nowrap top-[-0.5px] tracking-[-0.3125px]">Zenith Manufacturing</p>
      </div>
    </div>
  );
}

function Container57() {
  return (
    <div className="absolute content-stretch flex gap-[12px] h-[32px] items-center left-[24px] top-[18.5px] w-[240.172px]" data-name="Container">
      <Container55 />
      <Container56 />
    </div>
  );
}

function TableCell72() {
  return (
    <div className="absolute h-[69px] left-0 top-0 w-[288.172px]" data-name="Table Cell">
      <Container57 />
    </div>
  );
}

function Icon44() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g clipPath="url(#clip0_7_727)" id="Icon">
          <path d={svgPaths.pda21400} id="Vector" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p1be36900} id="Vector_2" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.pa8d100} id="Vector_3" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M6.66667 4H9.33333" id="Vector_4" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M6.66667 6.66667H9.33333" id="Vector_5" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M6.66667 9.33333H9.33333" id="Vector_6" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M6.66667 12H9.33333" id="Vector_7" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
        <defs>
          <clipPath id="clip0_7_727">
            <rect fill="white" height="16" width="16" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Text9() {
  return (
    <div className="h-[24px] relative shrink-0 w-[109.328px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24px] left-0 not-italic text-[#101828] text-[16px] text-nowrap top-[-0.5px] tracking-[-0.3125px]">US Bank Tower</p>
      </div>
    </div>
  );
}

function Container58() {
  return (
    <div className="absolute content-stretch flex gap-[8px] h-[24px] items-center left-[24px] top-[22.5px] w-[229.578px]" data-name="Container">
      <Icon44 />
      <Text9 />
    </div>
  );
}

function TableCell73() {
  return (
    <div className="absolute h-[69px] left-[288.17px] top-0 w-[277.578px]" data-name="Table Cell">
      <Container58 />
    </div>
  );
}

function TableCell74() {
  return (
    <div className="absolute h-[69px] left-[565.75px] top-0 w-[167.727px]" data-name="Table Cell">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24px] left-[24px] not-italic text-[#101828] text-[16px] text-nowrap top-[22px] tracking-[-0.3125px]">Floor 38</p>
    </div>
  );
}

function TableCell75() {
  return (
    <div className="absolute h-[69px] left-[733.48px] top-0 w-[122.852px]" data-name="Table Cell">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24px] left-[24px] not-italic text-[#101828] text-[16px] text-nowrap top-[22px] tracking-[-0.3125px]">28,000 SF</p>
    </div>
  );
}

function TableCell76() {
  return (
    <div className="absolute h-[69px] left-[856.33px] top-0 w-[132.797px]" data-name="Table Cell">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24px] left-[24px] not-italic text-[#101828] text-[16px] text-nowrap top-[22px] tracking-[-0.3125px]">$3,080,000</p>
    </div>
  );
}

function Badge18() {
  return (
    <div className="basis-0 bg-[#dcfce7] grow h-[22px] min-h-px min-w-px relative rounded-[8px] shrink-0" data-name="Badge">
      <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center px-[9px] py-[3px] relative size-full">
          <p className="font-['Inter:Medium',sans-serif] font-medium leading-[16px] not-italic relative shrink-0 text-[#008236] text-[12px] text-center text-nowrap">Lease Executed</p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function PrimitiveSpan9() {
  return (
    <div className="h-[22px] relative shrink-0 w-[108.492px]" data-name="Primitive.span">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center overflow-clip relative rounded-[inherit] size-full">
        <Badge18 />
      </div>
    </div>
  );
}

function Icon45() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon" opacity="0.5">
          <path d="M4 6L8 10L12 6" id="Vector" stroke="var(--stroke-0, #717182)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function PrimitiveButton9() {
  return (
    <div className="absolute bg-[#f3f3f5] content-stretch flex h-[36px] items-center justify-between left-[24px] px-[13px] py-px rounded-[8px] top-[16.5px] w-[180px]" data-name="Primitive.button">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <PrimitiveSpan9 />
      <Icon45 />
    </div>
  );
}

function TableCell77() {
  return (
    <div className="absolute h-[69px] left-[989.13px] top-0 w-[228px]" data-name="Table Cell">
      <PrimitiveButton9 />
    </div>
  );
}

function Badge19() {
  return (
    <div className="absolute bg-[#dcfce7] border border-[rgba(0,0,0,0)] border-solid h-[22px] left-[24px] overflow-clip rounded-[8px] top-[24.75px] w-[81.211px]" data-name="Badge">
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[16px] left-[8px] not-italic text-[#008236] text-[12px] text-nowrap top-[3px]">Completed</p>
    </div>
  );
}

function TableCell78() {
  return (
    <div className="absolute h-[69px] left-[1217.13px] top-0 w-[196.414px]" data-name="Table Cell">
      <Badge19 />
    </div>
  );
}

function Icon46() {
  return (
    <div className="absolute left-[10px] size-[16px] top-[7px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.p26b72c80} id="Vector" stroke="var(--stroke-0, #0A0A0A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p28db2b80} id="Vector_2" stroke="var(--stroke-0, #0A0A0A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Button15() {
  return (
    <div className="absolute bg-white border border-[rgba(0,0,0,0.1)] border-solid h-[32px] left-[24px] rounded-[8px] top-[18.5px] w-[133.125px]" data-name="Button">
      <Icon46 />
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[20px] left-[81px] not-italic text-[#0a0a0a] text-[14px] text-center text-nowrap top-[5.5px] tracking-[-0.1504px] translate-x-[-50%]">View Details</p>
    </div>
  );
}

function TableCell79() {
  return (
    <div className="absolute h-[69px] left-[1413.54px] top-0 w-[181.125px]" data-name="Table Cell">
      <Button15 />
    </div>
  );
}

function TableRow10() {
  return (
    <div className="absolute border-[#e5e7eb] border-[0px_0px_1px] border-solid h-[69px] left-0 top-[621px] w-[1594.664px]" data-name="Table Row">
      <TableCell72 />
      <TableCell73 />
      <TableCell74 />
      <TableCell75 />
      <TableCell76 />
      <TableCell77 />
      <TableCell78 />
      <TableCell79 />
    </div>
  );
}

function Icon47() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.p32887f80} id="Vector" stroke="var(--stroke-0, #155DFC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p3694d280} id="Vector_2" stroke="var(--stroke-0, #155DFC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p188b8380} id="Vector_3" stroke="var(--stroke-0, #155DFC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p11a5dbc0} id="Vector_4" stroke="var(--stroke-0, #155DFC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Container59() {
  return (
    <div className="bg-[#dbeafe] relative rounded-[1.67772e+07px] shrink-0 size-[32px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <Icon47 />
      </div>
    </div>
  );
}

function Container60() {
  return (
    <div className="h-[24px] relative shrink-0 w-[186.734px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[24px] left-0 not-italic text-[#101828] text-[16px] text-nowrap top-[-0.5px] tracking-[-0.3125px]">Horizon Energy Solutions</p>
      </div>
    </div>
  );
}

function Container61() {
  return (
    <div className="absolute content-stretch flex gap-[12px] h-[32px] items-center left-[24px] top-[18.5px] w-[240.172px]" data-name="Container">
      <Container59 />
      <Container60 />
    </div>
  );
}

function TableCell80() {
  return (
    <div className="absolute h-[69px] left-0 top-0 w-[288.172px]" data-name="Table Cell">
      <Container61 />
    </div>
  );
}

function Icon48() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g clipPath="url(#clip0_7_727)" id="Icon">
          <path d={svgPaths.pda21400} id="Vector" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p1be36900} id="Vector_2" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.pa8d100} id="Vector_3" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M6.66667 4H9.33333" id="Vector_4" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M6.66667 6.66667H9.33333" id="Vector_5" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M6.66667 9.33333H9.33333" id="Vector_6" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M6.66667 12H9.33333" id="Vector_7" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
        <defs>
          <clipPath id="clip0_7_727">
            <rect fill="white" height="16" width="16" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Text10() {
  return (
    <div className="h-[24px] relative shrink-0 w-[110.109px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24px] left-0 not-italic text-[#101828] text-[16px] text-nowrap top-[-0.5px] tracking-[-0.3125px]">Franklin Center</p>
      </div>
    </div>
  );
}

function Container62() {
  return (
    <div className="absolute content-stretch flex gap-[8px] h-[24px] items-center left-[24px] top-[22.5px] w-[229.578px]" data-name="Container">
      <Icon48 />
      <Text10 />
    </div>
  );
}

function TableCell81() {
  return (
    <div className="absolute h-[69px] left-[288.17px] top-0 w-[277.578px]" data-name="Table Cell">
      <Container62 />
    </div>
  );
}

function TableCell82() {
  return (
    <div className="absolute h-[69px] left-[565.75px] top-0 w-[167.727px]" data-name="Table Cell">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24px] left-[24px] not-italic text-[#101828] text-[16px] text-nowrap top-[22px] tracking-[-0.3125px]">Suite 4400</p>
    </div>
  );
}

function TableCell83() {
  return (
    <div className="absolute h-[69px] left-[733.48px] top-0 w-[122.852px]" data-name="Table Cell">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24px] left-[24px] not-italic text-[#101828] text-[16px] text-nowrap top-[22px] tracking-[-0.3125px]">9,200 SF</p>
    </div>
  );
}

function TableCell84() {
  return (
    <div className="absolute h-[69px] left-[856.33px] top-0 w-[132.797px]" data-name="Table Cell">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24px] left-[24px] not-italic text-[#101828] text-[16px] text-nowrap top-[22px] tracking-[-0.3125px]">$828,000</p>
    </div>
  );
}

function Badge20() {
  return (
    <div className="basis-0 bg-[#f3e8ff] grow h-[22px] min-h-px min-w-px relative rounded-[8px] shrink-0" data-name="Badge">
      <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center px-[9px] py-[3px] relative size-full">
          <p className="font-['Inter:Medium',sans-serif] font-medium leading-[16px] not-italic relative shrink-0 text-[#8200db] text-[12px] text-center text-nowrap">LOI Signed</p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function PrimitiveSpan10() {
  return (
    <div className="h-[22px] relative shrink-0 w-[80.672px]" data-name="Primitive.span">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center overflow-clip relative rounded-[inherit] size-full">
        <Badge20 />
      </div>
    </div>
  );
}

function Icon49() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon" opacity="0.5">
          <path d="M4 6L8 10L12 6" id="Vector" stroke="var(--stroke-0, #717182)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function PrimitiveButton10() {
  return (
    <div className="absolute bg-[#f3f3f5] content-stretch flex h-[36px] items-center justify-between left-[24px] px-[13px] py-px rounded-[8px] top-[16.5px] w-[180px]" data-name="Primitive.button">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <PrimitiveSpan10 />
      <Icon49 />
    </div>
  );
}

function TableCell85() {
  return (
    <div className="absolute h-[69px] left-[989.13px] top-0 w-[228px]" data-name="Table Cell">
      <PrimitiveButton10 />
    </div>
  );
}

function Badge21() {
  return (
    <div className="absolute bg-[#dbeafe] border border-[rgba(0,0,0,0)] border-solid h-[22px] left-[24px] overflow-clip rounded-[8px] top-[24.75px] w-[81.953px]" data-name="Badge">
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[16px] left-[8px] not-italic text-[#1447e6] text-[12px] text-nowrap top-[3px]">Processing</p>
    </div>
  );
}

function TableCell86() {
  return (
    <div className="absolute h-[69px] left-[1217.13px] top-0 w-[196.414px]" data-name="Table Cell">
      <Badge21 />
    </div>
  );
}

function Icon50() {
  return (
    <div className="absolute left-[10px] size-[16px] top-[7px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.p26b72c80} id="Vector" stroke="var(--stroke-0, #0A0A0A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p28db2b80} id="Vector_2" stroke="var(--stroke-0, #0A0A0A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Button16() {
  return (
    <div className="absolute bg-white border border-[rgba(0,0,0,0.1)] border-solid h-[32px] left-[24px] rounded-[8px] top-[18.5px] w-[133.125px]" data-name="Button">
      <Icon50 />
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[20px] left-[81px] not-italic text-[#0a0a0a] text-[14px] text-center text-nowrap top-[5.5px] tracking-[-0.1504px] translate-x-[-50%]">View Details</p>
    </div>
  );
}

function TableCell87() {
  return (
    <div className="absolute h-[69px] left-[1413.54px] top-0 w-[181.125px]" data-name="Table Cell">
      <Button16 />
    </div>
  );
}

function TableRow11() {
  return (
    <div className="absolute border-[#e5e7eb] border-[0px_0px_1px] border-solid h-[69px] left-0 top-[690px] w-[1594.664px]" data-name="Table Row">
      <TableCell80 />
      <TableCell81 />
      <TableCell82 />
      <TableCell83 />
      <TableCell84 />
      <TableCell85 />
      <TableCell86 />
      <TableCell87 />
    </div>
  );
}

function Icon51() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.p32887f80} id="Vector" stroke="var(--stroke-0, #155DFC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p3694d280} id="Vector_2" stroke="var(--stroke-0, #155DFC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p188b8380} id="Vector_3" stroke="var(--stroke-0, #155DFC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p11a5dbc0} id="Vector_4" stroke="var(--stroke-0, #155DFC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Container63() {
  return (
    <div className="bg-[#dbeafe] relative rounded-[1.67772e+07px] shrink-0 size-[32px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <Icon51 />
      </div>
    </div>
  );
}

function Container64() {
  return (
    <div className="h-[24px] relative shrink-0 w-[154.227px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[24px] left-0 not-italic text-[#101828] text-[16px] text-nowrap top-[-0.5px] tracking-[-0.3125px]">Catalyst Ventures LP</p>
      </div>
    </div>
  );
}

function Container65() {
  return (
    <div className="absolute content-stretch flex gap-[12px] h-[32px] items-center left-[24px] top-[18.5px] w-[240.172px]" data-name="Container">
      <Container63 />
      <Container64 />
    </div>
  );
}

function TableCell88() {
  return (
    <div className="absolute h-[68.5px] left-0 top-0 w-[288.172px]" data-name="Table Cell">
      <Container65 />
    </div>
  );
}

function Icon52() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g clipPath="url(#clip0_7_727)" id="Icon">
          <path d={svgPaths.pda21400} id="Vector" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p1be36900} id="Vector_2" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.pa8d100} id="Vector_3" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M6.66667 4H9.33333" id="Vector_4" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M6.66667 6.66667H9.33333" id="Vector_5" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M6.66667 9.33333H9.33333" id="Vector_6" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M6.66667 12H9.33333" id="Vector_7" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
        <defs>
          <clipPath id="clip0_7_727">
            <rect fill="white" height="16" width="16" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Text11() {
  return (
    <div className="h-[24px] relative shrink-0 w-[175.125px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24px] left-0 not-italic text-[#101828] text-[16px] text-nowrap top-[-0.5px] tracking-[-0.3125px]">Two World Trade Center</p>
      </div>
    </div>
  );
}

function Container66() {
  return (
    <div className="absolute content-stretch flex gap-[8px] h-[24px] items-center left-[24px] top-[22.5px] w-[229.578px]" data-name="Container">
      <Icon52 />
      <Text11 />
    </div>
  );
}

function TableCell89() {
  return (
    <div className="absolute h-[68.5px] left-[288.17px] top-0 w-[277.578px]" data-name="Table Cell">
      <Container66 />
    </div>
  );
}

function TableCell90() {
  return (
    <div className="absolute h-[68.5px] left-[565.75px] top-0 w-[167.727px]" data-name="Table Cell">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24px] left-[24px] not-italic text-[#101828] text-[16px] text-nowrap top-[22px] tracking-[-0.3125px]">Floor 65</p>
    </div>
  );
}

function TableCell91() {
  return (
    <div className="absolute h-[68.5px] left-[733.48px] top-0 w-[122.852px]" data-name="Table Cell">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24px] left-[24px] not-italic text-[#101828] text-[16px] text-nowrap top-[22px] tracking-[-0.3125px]">32,000 SF</p>
    </div>
  );
}

function TableCell92() {
  return (
    <div className="absolute h-[68.5px] left-[856.33px] top-0 w-[132.797px]" data-name="Table Cell">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24px] left-[24px] not-italic text-[#101828] text-[16px] text-nowrap top-[22px] tracking-[-0.3125px]">$4,160,000</p>
    </div>
  );
}

function Badge22() {
  return (
    <div className="basis-0 bg-[#dcfce7] grow h-[22px] min-h-px min-w-px relative rounded-[8px] shrink-0" data-name="Badge">
      <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center px-[9px] py-[3px] relative size-full">
          <p className="font-['Inter:Medium',sans-serif] font-medium leading-[16px] not-italic relative shrink-0 text-[#008236] text-[12px] text-center text-nowrap">Lease Executed</p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function PrimitiveSpan11() {
  return (
    <div className="h-[22px] relative shrink-0 w-[108.492px]" data-name="Primitive.span">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center overflow-clip relative rounded-[inherit] size-full">
        <Badge22 />
      </div>
    </div>
  );
}

function Icon53() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon" opacity="0.5">
          <path d="M4 6L8 10L12 6" id="Vector" stroke="var(--stroke-0, #717182)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function PrimitiveButton11() {
  return (
    <div className="absolute bg-[#f3f3f5] content-stretch flex h-[36px] items-center justify-between left-[24px] px-[13px] py-px rounded-[8px] top-[16.5px] w-[180px]" data-name="Primitive.button">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <PrimitiveSpan11 />
      <Icon53 />
    </div>
  );
}

function TableCell93() {
  return (
    <div className="absolute h-[68.5px] left-[989.13px] top-0 w-[228px]" data-name="Table Cell">
      <PrimitiveButton11 />
    </div>
  );
}

function Badge23() {
  return (
    <div className="absolute bg-[#fef9c2] border border-[rgba(0,0,0,0)] border-solid h-[22px] left-[24px] overflow-clip rounded-[8px] top-[24.75px] w-[148.414px]" data-name="Badge">
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[16px] left-[8px] not-italic text-[#a65f00] text-[12px] text-nowrap top-[3px]">Pending human review</p>
    </div>
  );
}

function TableCell94() {
  return (
    <div className="absolute h-[68.5px] left-[1217.13px] top-0 w-[196.414px]" data-name="Table Cell">
      <Badge23 />
    </div>
  );
}

function Icon54() {
  return (
    <div className="absolute left-[10px] size-[16px] top-[7px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.p26b72c80} id="Vector" stroke="var(--stroke-0, #0A0A0A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p28db2b80} id="Vector_2" stroke="var(--stroke-0, #0A0A0A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Button17() {
  return (
    <div className="absolute bg-white border border-[rgba(0,0,0,0.1)] border-solid h-[32px] left-[24px] rounded-[8px] top-[18.5px] w-[133.125px]" data-name="Button">
      <Icon54 />
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[20px] left-[81px] not-italic text-[#0a0a0a] text-[14px] text-center text-nowrap top-[5.5px] tracking-[-0.1504px] translate-x-[-50%]">View Details</p>
    </div>
  );
}

function TableCell95() {
  return (
    <div className="absolute h-[68.5px] left-[1413.54px] top-0 w-[181.125px]" data-name="Table Cell">
      <Button17 />
    </div>
  );
}

function TableRow12() {
  return (
    <div className="absolute h-[68.5px] left-0 top-[759px] w-[1594.664px]" data-name="Table Row">
      <TableCell88 />
      <TableCell89 />
      <TableCell90 />
      <TableCell91 />
      <TableCell92 />
      <TableCell93 />
      <TableCell94 />
      <TableCell95 />
    </div>
  );
}

function TableBody() {
  return (
    <div className="absolute bg-white h-[827.5px] left-0 top-[40.5px] w-[1594.664px]" data-name="Table Body">
      <TableRow1 />
      <TableRow2 />
      <TableRow3 />
      <TableRow4 />
      <TableRow5 />
      <TableRow6 />
      <TableRow7 />
      <TableRow8 />
      <TableRow9 />
      <TableRow10 />
      <TableRow11 />
      <TableRow12 />
    </div>
  );
}

function Table() {
  return (
    <div className="h-[868px] relative shrink-0 w-full" data-name="Table">
      <TableHeader />
      <TableBody />
    </div>
  );
}

function Container67() {
  return (
    <div className="content-stretch flex flex-col h-[883px] items-start overflow-clip pl-[-364.5px] pr-[-0.164px] py-0 relative shrink-0 w-full" data-name="Container">
      <Table />
    </div>
  );
}

function Container68() {
  return (
    <div className="bg-white h-[885px] relative rounded-[10px] shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[10px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)]" />
      <div className="size-full">
        <div className="content-stretch flex flex-col items-start p-px relative size-full">
          <Container67 />
        </div>
      </div>
    </div>
  );
}

function Container69() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[24px] h-[1181px] items-start left-[72px] pb-0 pt-[32px] px-[24px] top-[109px] w-[1280px]" data-name="Container">
      <Container16 />
      <Container18 />
      <Container68 />
    </div>
  );
}

function DealsPage() {
  return (
    <div className="bg-[#f9fafb] h-[1290px] relative shrink-0 w-full" data-name="DealsPage">
      <Container3 />
      <Container69 />
    </div>
  );
}

function App() {
  return (
    <div className="bg-[#f9fafb] content-stretch flex flex-col h-[1290px] items-start relative shrink-0 w-full" data-name="App">
      <DealsPage />
    </div>
  );
}

export default function EnhanceLeaseUploadFlow() {
  return (
    <div className="bg-white content-stretch flex flex-col items-start relative size-full" data-name="Enhance Lease Upload Flow">
      <App />
    </div>
  );
}