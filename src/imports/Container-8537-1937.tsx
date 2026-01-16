function Paragraph() {
  return (
    <div className="h-[16.5px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[16.5px] left-0 not-italic text-[#72777e] text-[11px] top-[0.5px] tracking-[0.5px] uppercase w-[108px] whitespace-pre-wrap">3 results found</p>
    </div>
  );
}

function Paragraph1() {
  return (
    <div className="absolute h-[16.5px] left-[12px] top-[8px] w-[604.5px]" data-name="Paragraph">
      <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[16.5px] left-0 not-italic text-[#4837b9] text-[11px] top-[0.5px] w-[35px] whitespace-pre-wrap">Page 1</p>
    </div>
  );
}

function Paragraph2() {
  return (
    <div className="absolute h-[18px] left-[12px] overflow-clip top-[24.5px] w-[604.5px]" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[18px] left-0 not-italic text-[#72777e] text-[12px] top-[0.5px] whitespace-pre">...the premises comprises base...</p>
    </div>
  );
}

function Button() {
  return (
    <div className="h-[50.5px] relative rounded-[4px] shrink-0 w-full" data-name="Button">
      <Paragraph1 />
      <Paragraph2 />
    </div>
  );
}

function Paragraph3() {
  return (
    <div className="absolute h-[16.5px] left-[12px] top-[8px] w-[604.5px]" data-name="Paragraph">
      <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[16.5px] left-0 not-italic text-[#4837b9] text-[11px] top-[0.5px] w-[37px] whitespace-pre-wrap">Page 3</p>
    </div>
  );
}

function Paragraph4() {
  return (
    <div className="absolute h-[18px] left-[12px] overflow-clip top-[24.5px] w-[604.5px]" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[18px] left-0 not-italic text-[#72777e] text-[12px] top-[0.5px] whitespace-pre">...annual rent of base per annum...</p>
    </div>
  );
}

function Button1() {
  return (
    <div className="h-[50.5px] relative rounded-[4px] shrink-0 w-full" data-name="Button">
      <Paragraph3 />
      <Paragraph4 />
    </div>
  );
}

function Paragraph5() {
  return (
    <div className="absolute h-[16.5px] left-[12px] top-[8px] w-[604.5px]" data-name="Paragraph">
      <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[16.5px] left-0 not-italic text-[#4837b9] text-[11px] top-[0.5px] w-[36px] whitespace-pre-wrap">Page 7</p>
    </div>
  );
}

function Paragraph6() {
  return (
    <div className="absolute h-[18px] left-[12px] overflow-clip top-[24.5px] w-[604.5px]" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[18px] left-0 not-italic text-[#72777e] text-[12px] top-[0.5px] whitespace-pre">...base as stated in Section 4.2...</p>
    </div>
  );
}

function Button2() {
  return (
    <div className="h-[50.5px] relative rounded-[4px] shrink-0 w-full" data-name="Button">
      <Paragraph5 />
      <Paragraph6 />
    </div>
  );
}

export default function Container() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative size-full" data-name="Container">
      <Paragraph />
      <Button />
      <Button1 />
      <Button2 />
    </div>
  );
}