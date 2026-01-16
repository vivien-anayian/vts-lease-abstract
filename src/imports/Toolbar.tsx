import svgPaths from "./svg-lc9ryvp98u";

function ChartSimple() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="ChartSimple">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g clipPath="url(#clip0_5_9080)" id="ChartSimple">
          <path d={svgPaths.p85f9100} fill="var(--fill-0, #4837B9)" id="Shape" />
        </g>
        <defs>
          <clipPath id="clip0_5_9080">
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
        <g clipPath="url(#clip0_5_9086)" id="SetUp">
          <path d={svgPaths.pf42dda0} fill="var(--fill-0, #72777E)" id="Shape" />
        </g>
        <defs>
          <clipPath id="clip0_5_9086">
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
        <g clipPath="url(#clip0_5_9089)" id="Plus">
          <path d={svgPaths.p1383ff00} fill="var(--fill-0, white)" id="Shape" />
        </g>
        <defs>
          <clipPath id="clip0_5_9089">
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

function Frame() {
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

export default function Toolbar() {
  return (
    <div className="bg-white relative rounded-tl-[8px] rounded-tr-[8px] size-full" data-name="Toolbar">
      <div className="flex flex-row items-center justify-end size-full">
        <div className="content-stretch flex items-center justify-end px-[24px] py-0 relative size-full">
          <Frame />
        </div>
      </div>
    </div>
  );
}