import svgPaths from "./svg-4v061fzftm";

function Frame() {
  return (
    <div className="content-stretch flex items-center justify-center px-0 py-[4px] relative shrink-0">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[16px] not-italic relative shrink-0 text-[#6b7280] text-[12px] tracking-[0.3px] uppercase whitespace-pre">Chatting with Lease Analyst</p>
    </div>
  );
}

function TextInput() {
  return (
    <div className="flex-[1_0_0] h-[20px] min-h-px min-w-px relative" data-name="Text Input">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center overflow-clip relative rounded-[inherit] size-full">
        <p className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#9ca3af] text-[14px] tracking-[-0.1504px] whitespace-pre">Ask VTS AI anything...</p>
      </div>
    </div>
  );
}

function Icon() {
  return (
    <div className="h-[16px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute bottom-[8.33%] left-1/2 right-1/2 top-[79.17%]" data-name="Vector">
        <div className="absolute inset-[-33.33%_-0.67px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1.33333 3.33333">
            <path d="M0.666667 0.666667V2.66667" id="Vector" stroke="var(--stroke-0, #6B7280)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[41.67%_20.83%_20.83%_20.83%]" data-name="Vector">
        <div className="absolute inset-[-11.11%_-7.14%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.6667 7.33333">
            <path d={svgPaths.p1bc0fd80} id="Vector" stroke="var(--stroke-0, #6B7280)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[8.33%_37.5%_37.5%_37.5%]" data-name="Vector">
        <div className="absolute inset-[-7.69%_-16.67%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5.33333 10">
            <path d={svgPaths.p13086a00} id="Vector" stroke="var(--stroke-0, #6B7280)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Button() {
  return (
    <div className="relative rounded-[16777200px] shrink-0 size-[32px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-0 pt-[8px] px-[8px] relative size-full">
        <Icon />
      </div>
    </div>
  );
}

function Icon1() {
  return (
    <div className="h-[16px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute inset-[8.32%_8.32%_8.33%_8.33%]" data-name="Vector">
        <div className="absolute inset-[-5%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14.6682 14.6682">
            <path d={svgPaths.p185227c0} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[8.95%_8.94%_45.48%_45.47%]" data-name="Vector">
        <div className="absolute inset-[-9.14%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8.62667 8.626">
            <path d={svgPaths.p2db0e900} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Button1() {
  return (
    <div className="bg-gradient-to-b from-[#8c82ff] relative rounded-[16777200px] shrink-0 size-[32px] to-[#673fff]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-0 pt-[8px] px-[8px] relative size-full">
        <Icon1 />
      </div>
    </div>
  );
}

function Container() {
  return (
    <div className="bg-white h-[58px] relative rounded-[10px] shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#72777e] border-solid inset-0 pointer-events-none rounded-[10px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[8px] items-center px-[17px] py-px relative size-full">
          <TextInput />
          <Button />
          <Button1 />
        </div>
      </div>
    </div>
  );
}

function Paragraph() {
  return (
    <div className="h-[16px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[16px] left-[384.3px] not-italic text-[#9ca3af] text-[12px] text-center top-px tracking-[0.3px] translate-x-[-50%] uppercase whitespace-pre">Verified by VTS AI Audit Engine • Real-time lease data sync: active</p>
    </div>
  );
}

function Container1() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] h-[86px] items-start relative shrink-0 w-full" data-name="Container">
      <Container />
      <Paragraph />
    </div>
  );
}

export default function Container2() {
  return (
    <div className="bg-white content-stretch flex flex-col items-start pb-0 pt-[25px] px-[87px] relative size-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#e5e7eb] border-[1px_0px_0px] border-solid inset-0 pointer-events-none" />
      <Frame />
      <Container1 />
    </div>
  );
}