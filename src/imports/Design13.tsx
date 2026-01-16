import svgPaths from "./svg-xi3v2vgrxu";
import { imgVector } from "./svg-s2hh7";

function Group() {
  return (
    <div className="absolute contents inset-[0_53.32%_0_0]" data-name="Group">
      <div className="absolute inset-[0_63.2%_62.2%_9.89%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-9.352px_0px] mask-size-[94.114px_32px]" data-name="Vector" style={{ maskImage: `url('${imgVector}')` }}>
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 25.4459 12.0958">
          <path d={svgPaths.p2a09ca00} fill="var(--fill-0, #1B1B1B)" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[27.56%_53.32%_0_0] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0px_-8.818px] mask-size-[94.114px_32px]" data-name="Vector" style={{ maskImage: `url('${imgVector}')` }}>
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 44.1375 23.1814">
          <path d={svgPaths.p5ba5f0} fill="var(--fill-0, #1B1B1B)" id="Vector" />
        </svg>
      </div>
    </div>
  );
}

function Group1() {
  return (
    <div className="absolute contents inset-[0_0.47%_0_0]" data-name="Group">
      <div className="absolute inset-[7.85%_16.93%_6.45%_55.59%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-52.564px_-2.511px] mask-size-[94.114px_32px]" data-name="Vector" style={{ maskImage: `url('${imgVector}')` }}>
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 25.9786 27.4239">
          <path d={svgPaths.p3a3b8900} fill="var(--fill-0, #1B1B1B)" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[7.85%_0.47%_6.45%_92.68%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-87.638px_-2.511px] mask-size-[94.114px_32px]" data-name="Vector" style={{ maskImage: `url('${imgVector}')` }}>
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6.4759 27.4239">
          <path d={svgPaths.p41ae200} fill="var(--fill-0, #1B1B1B)" id="Vector" />
        </svg>
      </div>
      <Group />
    </div>
  );
}

function ClipPathGroup() {
  return (
    <div className="absolute contents inset-[0_0.47%_0_0]" data-name="Clip path group">
      <Group1 />
    </div>
  );
}

function Icon() {
  return (
    <div className="h-[32px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <ClipPathGroup />
    </div>
  );
}

function Logo() {
  return (
    <div className="bg-white h-[112px] relative shrink-0 w-full" data-name="Logo13">
      <div className="size-full">
        <div className="content-stretch flex flex-col items-start pb-0 pl-[24px] pr-[279.445px] pt-[32px] relative size-full">
          <Icon />
        </div>
      </div>
    </div>
  );
}

function Heading() {
  return (
    <div className="h-[20px] relative shrink-0 w-[138.617px]" data-name="Heading 3">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[#101828] text-[14px] text-nowrap top-[0.5px] tracking-[-0.1504px]">Suggested Questions</p>
      </div>
    </div>
  );
}

function Button() {
  return (
    <div className="h-[16px] relative shrink-0 w-[115.328px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[16px] left-[58px] not-italic text-[#9810fa] text-[12px] text-center text-nowrap top-px translate-x-[-50%]">View all suggestions</p>
      </div>
    </div>
  );
}

function Container() {
  return (
    <div className="content-stretch flex h-[20px] items-center justify-between relative shrink-0 w-full" data-name="Container">
      <Heading />
      <Button />
    </div>
  );
}

function Container1() {
  return <div className="absolute bg-gradient-to-r from-[rgba(0,0,0,0)] h-[120.25px] left-px opacity-0 to-[rgba(0,0,0,0)] top-px via-50% via-[rgba(173,70,255,0.05)] w-[348px]" data-name="Container" />;
}

function Icon1() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.p1bb15080} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Container2() {
  return (
    <div className="absolute content-stretch flex items-center justify-center left-0 rounded-[10px] size-[32px] top-[2px]" data-name="Container" style={{ backgroundImage: "linear-gradient(135deg, rgb(173, 70, 255) 0%, rgb(21, 93, 252) 100%)" }}>
      <Icon1 />
    </div>
  );
}

function Container3() {
  return (
    <div className="h-[16px] relative shrink-0 w-full" data-name="Container">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[16px] left-0 not-italic text-[#9810fa] text-[12px] text-nowrap top-px">Pricing</p>
    </div>
  );
}

function Paragraph() {
  return (
    <div className="h-[68.25px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[22.75px] left-0 not-italic text-[#364153] text-[14px] top-px tracking-[-0.1504px] w-[243px]">What is the current Avg. starting rent, Avg. TI, Avg. free rent, Avg. lease duration, count of active proposals?</p>
    </div>
  );
}

function Container4() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[4px] h-[88.25px] items-start left-[44px] top-0 w-[272px]" data-name="Container">
      <Container3 />
      <Paragraph />
    </div>
  );
}

function Container5() {
  return (
    <div className="absolute h-[88.25px] left-[17px] top-[17px] w-[316px]" data-name="Container">
      <Container2 />
      <Container4 />
    </div>
  );
}

function Container6() {
  return (
    <div className="bg-[#f9fafb] h-[122.25px] relative rounded-[16px] shrink-0 w-full" data-name="Container">
      <div className="overflow-clip relative rounded-[inherit] size-full">
        <Container1 />
        <Container5 />
      </div>
      <div aria-hidden="true" className="absolute border border-[#f3f4f6] border-solid inset-0 pointer-events-none rounded-[16px]" />
    </div>
  );
}

function Container7() {
  return <div className="absolute bg-gradient-to-r from-[rgba(0,0,0,0)] h-[97.5px] left-px opacity-0 to-[rgba(0,0,0,0)] top-px via-50% via-[rgba(173,70,255,0.05)] w-[348px]" data-name="Container" />;
}

function Icon2() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.p1bb15080} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Container8() {
  return (
    <div className="absolute content-stretch flex items-center justify-center left-0 rounded-[10px] size-[32px] top-[2px]" data-name="Container" style={{ backgroundImage: "linear-gradient(135deg, rgb(173, 70, 255) 0%, rgb(21, 93, 252) 100%)" }}>
      <Icon2 />
    </div>
  );
}

function Container9() {
  return (
    <div className="h-[16px] relative shrink-0 w-full" data-name="Container">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[16px] left-0 not-italic text-[#9810fa] text-[12px] text-nowrap top-px">Tenants</p>
    </div>
  );
}

function Paragraph1() {
  return (
    <div className="h-[45.5px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[22.75px] left-0 not-italic text-[#364153] text-[14px] top-px tracking-[-0.1504px] w-[270px]">How many tenants are actively looking for space? Breakdown by industry.</p>
    </div>
  );
}

function Container10() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[4px] h-[65.5px] items-start left-[44px] top-0 w-[272px]" data-name="Container">
      <Container9 />
      <Paragraph1 />
    </div>
  );
}

function Container11() {
  return (
    <div className="absolute h-[65.5px] left-[17px] top-[17px] w-[316px]" data-name="Container">
      <Container8 />
      <Container10 />
    </div>
  );
}

function Container12() {
  return (
    <div className="bg-[#f9fafb] h-[99.5px] relative rounded-[16px] shrink-0 w-full" data-name="Container">
      <div className="overflow-clip relative rounded-[inherit] size-full">
        <Container7 />
        <Container11 />
      </div>
      <div aria-hidden="true" className="absolute border border-[#f3f4f6] border-solid inset-0 pointer-events-none rounded-[16px]" />
    </div>
  );
}

function Container13() {
  return <div className="absolute bg-gradient-to-r from-[rgba(0,0,0,0)] h-[97.5px] left-px opacity-0 to-[rgba(0,0,0,0)] top-px via-50% via-[rgba(173,70,255,0.05)] w-[348px]" data-name="Container" />;
}

function Icon3() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.p1bb15080} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Container14() {
  return (
    <div className="absolute content-stretch flex items-center justify-center left-0 rounded-[10px] size-[32px] top-[2px]" data-name="Container" style={{ backgroundImage: "linear-gradient(135deg, rgb(173, 70, 255) 0%, rgb(21, 93, 252) 100%)" }}>
      <Icon3 />
    </div>
  );
}

function Container15() {
  return (
    <div className="h-[16px] relative shrink-0 w-full" data-name="Container">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[16px] left-0 not-italic text-[#9810fa] text-[12px] text-nowrap top-px">Deals</p>
    </div>
  );
}

function Paragraph2() {
  return (
    <div className="h-[45.5px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[22.75px] left-0 not-italic text-[#364153] text-[14px] top-px tracking-[-0.1504px] w-[258px]">What is the total SF of new deals versus renewals in the past 12 months?</p>
    </div>
  );
}

function Container16() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[4px] h-[65.5px] items-start left-[44px] top-0 w-[272px]" data-name="Container">
      <Container15 />
      <Paragraph2 />
    </div>
  );
}

function Container17() {
  return (
    <div className="absolute h-[65.5px] left-[17px] top-[17px] w-[316px]" data-name="Container">
      <Container14 />
      <Container16 />
    </div>
  );
}

function Container18() {
  return (
    <div className="bg-[#f9fafb] h-[99.5px] relative rounded-[16px] shrink-0 w-full" data-name="Container">
      <div className="overflow-clip relative rounded-[inherit] size-full">
        <Container13 />
        <Container17 />
      </div>
      <div aria-hidden="true" className="absolute border border-[#f3f4f6] border-solid inset-0 pointer-events-none rounded-[16px]" />
    </div>
  );
}

function Container19() {
  return <div className="absolute bg-gradient-to-r from-[rgba(0,0,0,0)] h-[97.5px] left-px opacity-0 to-[rgba(0,0,0,0)] top-px via-50% via-[rgba(173,70,255,0.05)] w-[348px]" data-name="Container" />;
}

function Icon4() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.p1bb15080} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Container20() {
  return (
    <div className="absolute content-stretch flex items-center justify-center left-0 rounded-[10px] size-[32px] top-[2px]" data-name="Container" style={{ backgroundImage: "linear-gradient(135deg, rgb(173, 70, 255) 0%, rgb(21, 93, 252) 100%)" }}>
      <Icon4 />
    </div>
  );
}

function Container21() {
  return (
    <div className="h-[16px] relative shrink-0 w-full" data-name="Container">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[16px] left-0 not-italic text-[#9810fa] text-[12px] text-nowrap top-px">Activity</p>
    </div>
  );
}

function Paragraph3() {
  return (
    <div className="h-[45.5px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[22.75px] left-0 not-italic text-[#364153] text-[14px] top-px tracking-[-0.1504px] w-[246px]">How does total deal stage activity this quarter compare to the prior quarter?</p>
    </div>
  );
}

function Container22() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[4px] h-[65.5px] items-start left-[44px] top-0 w-[272px]" data-name="Container">
      <Container21 />
      <Paragraph3 />
    </div>
  );
}

function Container23() {
  return (
    <div className="absolute h-[65.5px] left-[17px] top-[17px] w-[316px]" data-name="Container">
      <Container20 />
      <Container22 />
    </div>
  );
}

function Container24() {
  return (
    <div className="bg-[#f9fafb] h-[99.5px] relative rounded-[16px] shrink-0 w-full" data-name="Container">
      <div className="overflow-clip relative rounded-[inherit] size-full">
        <Container19 />
        <Container23 />
      </div>
      <div aria-hidden="true" className="absolute border border-[#f3f4f6] border-solid inset-0 pointer-events-none rounded-[16px]" />
    </div>
  );
}

function Container25() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] h-[444.75px] items-start relative shrink-0 w-full" data-name="Container">
      <Container6 />
      <Container12 />
      <Container18 />
      <Container24 />
    </div>
  );
}

function Container26() {
  return (
    <div className="h-[504.75px] relative shrink-0 w-full" data-name="Container">
      <div className="size-full">
        <div className="content-stretch flex flex-col gap-[16px] items-start px-[24px] py-0 relative size-full">
          <Container />
          <Container25 />
        </div>
      </div>
    </div>
  );
}

function Icon5() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g clipPath="url(#clip0_4005_136)" id="Icon">
          <path d={svgPaths.p1902bdf0} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M16.6667 2.5V5.83333" id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M18.3333 4.16667H15" id="Vector_3" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M3.33333 14.1667V15.8333" id="Vector_4" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M4.16667 15H2.5" id="Vector_5" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
        <defs>
          <clipPath id="clip0_4005_136">
            <rect fill="white" height="20" width="20" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Heading1() {
  return (
    <div className="h-[24px] relative shrink-0 w-[78.672px]" data-name="Heading 3">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Bold',sans-serif] font-bold leading-[24px] left-0 not-italic text-[16px] text-nowrap text-white top-[-0.5px] tracking-[-0.3125px]">AI Analyst</p>
      </div>
    </div>
  );
}

function Container27() {
  return (
    <div className="content-stretch flex gap-[8px] h-[24px] items-center relative shrink-0 w-full" data-name="Container">
      <Icon5 />
      <Heading1 />
    </div>
  );
}

function Paragraph4() {
  return (
    <div className="h-[45.5px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[22.75px] left-0 not-italic text-[#f3e8ff] text-[14px] top-px tracking-[-0.1504px] w-[326px]">Use the prompts above to get quick insights about market or your portfolio data.</p>
    </div>
  );
}

function Container28() {
  return (
    <div className="h-[125.5px] relative shrink-0 w-full" data-name="Container" style={{ backgroundImage: "linear-gradient(162.499deg, rgb(152, 16, 250) 0%, rgb(67, 45, 215) 100%)" }}>
      <div className="size-full">
        <div className="content-stretch flex flex-col gap-[8px] items-start pb-0 pt-[24px] px-[24px] relative size-full">
          <Container27 />
          <Paragraph4 />
        </div>
      </div>
    </div>
  );
}

export default function Design() {
  return (
    <div className="bg-white relative rounded-[16px] size-full" data-name="Design13">
      <div className="size-full">
        <div className="content-stretch flex flex-col items-start overflow-clip p-px relative size-full">
          <Logo />
          <Container26 />
          <Container28 />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#f3f4f6] border-solid inset-0 pointer-events-none rounded-[16px] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)]" />
    </div>
  );
}