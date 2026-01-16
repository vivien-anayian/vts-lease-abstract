function Heading() {
  return (
    <div className="h-[21px] relative shrink-0 w-full" data-name="Heading 2">
      <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[21px] left-0 not-italic text-[#72777e] text-[14px] text-nowrap top-0 tracking-[0.5px] uppercase">Quick Stats</p>
    </div>
  );
}

function Paragraph() {
  return (
    <div className="h-[18px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[18px] left-0 not-italic text-[#72777e] text-[12px] text-nowrap top-[0.5px]">Lease Term</p>
    </div>
  );
}

function Paragraph1() {
  return (
    <div className="h-[27px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[27px] left-0 not-italic text-[#1d1e20] text-[18px] text-nowrap top-[0.5px]">10 years</p>
    </div>
  );
}

function Container() {
  return (
    <div className="[grid-area:1_/_1] content-stretch flex flex-col gap-[4px] items-start place-self-stretch relative shrink-0" data-name="Container">
      <Paragraph />
      <Paragraph1 />
    </div>
  );
}

function Paragraph2() {
  return (
    <div className="h-[18px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[18px] left-0 not-italic text-[#72777e] text-[12px] text-nowrap top-[0.5px]">Annual Base Rent</p>
    </div>
  );
}

function Paragraph3() {
  return (
    <div className="h-[27px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[27px] left-0 not-italic text-[#00a63e] text-[18px] text-nowrap top-[0.5px]">$1,187,500</p>
    </div>
  );
}

function Container1() {
  return (
    <div className="[grid-area:1_/_2] content-stretch flex flex-col gap-[4px] items-start place-self-stretch relative shrink-0" data-name="Container">
      <Paragraph2 />
      <Paragraph3 />
    </div>
  );
}

function Paragraph4() {
  return (
    <div className="h-[18px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[18px] left-0 not-italic text-[#72777e] text-[12px] text-nowrap top-[0.5px]">Total Deal Value</p>
    </div>
  );
}

function Paragraph5() {
  return (
    <div className="h-[27px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[27px] left-0 not-italic text-[#4837b9] text-[18px] text-nowrap top-[0.5px]">$13,462,500</p>
    </div>
  );
}

function Container2() {
  return (
    <div className="[grid-area:1_/_3] content-stretch flex flex-col gap-[4px] items-start place-self-stretch relative shrink-0" data-name="Container">
      <Paragraph4 />
      <Paragraph5 />
    </div>
  );
}

function Paragraph6() {
  return (
    <div className="absolute h-[18px] left-0 top-0 w-[277.5px]" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[18px] left-0 not-italic text-[#72777e] text-[12px] text-nowrap top-[0.5px]">Deal Status</p>
    </div>
  );
}

function Container3() {
  return (
    <div className="absolute bg-[#dcfce7] h-[26px] left-0 rounded-[100px] top-[23px] w-[113.922px]" data-name="Container">
      <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[18px] left-[12px] not-italic text-[#016630] text-[12px] text-nowrap top-[4.5px]">Lease Executed</p>
    </div>
  );
}

function Container4() {
  return (
    <div className="[grid-area:1_/_4] place-self-stretch relative shrink-0" data-name="Container">
      <Paragraph6 />
      <Container3 />
    </div>
  );
}

function Container5() {
  return (
    <div className="gap-[24px] grid grid-cols-[repeat(4,_minmax(0px,_1fr))] grid-rows-[repeat(1,_minmax(0px,_1fr))] h-[49px] relative shrink-0 w-full" data-name="Container">
      <Container />
      <Container1 />
      <Container2 />
      <Container4 />
    </div>
  );
}

export default function Container6() {
  return (
    <div className="bg-white relative rounded-[8px] size-full" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#ecedef] border-solid inset-0 pointer-events-none rounded-[8px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)]" />
      <div className="size-full">
        <div className="content-stretch flex flex-col gap-[16px] items-start pb-px pt-[25px] px-[25px] relative size-full">
          <Heading />
          <Container5 />
        </div>
      </div>
    </div>
  );
}