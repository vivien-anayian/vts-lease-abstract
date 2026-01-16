import svgPaths from "./svg-kncw8nr1bn";
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
  return <div className="absolute h-[52.8px] left-[0.4px] top-[0.4px] w-[96px]" data-name="Container" style={{ backgroundImage: "linear-gradient(151.189deg, rgba(255, 255, 255, 0) 0%, rgba(214, 166, 255, 0.15) 25%, rgba(235, 211, 255, 0.22) 50%, rgba(214, 166, 255, 0.15) 75%, rgba(255, 255, 255, 0) 100%)" }} />;
}

function Icon4() {
  return (
    <div className="absolute left-[34px] size-[28.8px] top-[12.4px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 28.8 28.8">
        <g id="Icon">
          <path d={svgPaths.p5ed1380} id="Vector" stroke="var(--stroke-0, #B4B7BC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.4" />
        </g>
      </svg>
    </div>
  );
}

function Container8() {
  return (
    <div className="absolute border-2 border-[#c928ff] border-solid h-[57.6px] left-[225.5px] overflow-clip rounded-[10px] top-[28px] w-[100.8px]" data-name="Container">
      <Container7 />
      <Icon4 />
    </div>
  );
}

function Paragraph() {
  return (
    <div className="absolute h-[21px] left-[34px] top-[98px] w-[484px]" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[21px] left-[242.26px] not-italic text-[#72777e] text-[14px] text-center text-nowrap top-0 translate-x-[-50%]">Drag and drop lease document(s) or folder here, or</p>
    </div>
  );
}

function Button1() {
  return (
    <div className="bg-white h-[39px] relative rounded-[4px] shrink-0 w-[129.367px]" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#d6d8db] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[21px] left-[65.5px] not-italic text-[#4837b9] text-[14px] text-center text-nowrap top-[9px] translate-x-[-50%]">Upload folder</p>
      </div>
    </div>
  );
}

function Button2() {
  return (
    <div className="bg-white h-[39px] relative rounded-[4px] shrink-0 w-[118.344px]" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#8c82ff] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[21px] left-[59px] not-italic text-[#4837b9] text-[14px] text-center text-nowrap top-[9px] translate-x-[-50%]">Upload files</p>
      </div>
    </div>
  );
}

function Container9() {
  return (
    <div className="absolute content-stretch flex gap-[12px] h-[39px] items-center justify-center left-[34px] pl-0 pr-[0.008px] py-0 top-[131px] w-[484px]" data-name="Container">
      <Button1 />
      <Button2 />
    </div>
  );
}

function Paragraph1() {
  return (
    <div className="absolute h-[18px] left-[34px] top-[182px] w-[484px]" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[18px] left-[241.98px] not-italic text-[#bbbfc4] text-[12px] text-center text-nowrap top-[0.5px] translate-x-[-50%]">Upload single file, multiple files, or entire folder</p>
    </div>
  );
}

function Paragraph2() {
  return (
    <div className="absolute h-[18px] left-[34px] top-[204px] w-[484px]" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[18px] left-[242.25px] not-italic text-[#bbbfc4] text-[12px] text-center text-nowrap top-[0.5px] translate-x-[-50%]">Supported formats: PDF, DOC, DOCX, TXT, RTF (Max 50MB each)</p>
    </div>
  );
}

function Container10() {
  return (
    <div className="h-[256px] relative rounded-[16px] shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-2 border-[#d6a6ff] border-dashed inset-0 pointer-events-none rounded-[16px]" />
      <Container8 />
      <Paragraph />
      <Container9 />
      <Paragraph1 />
      <Paragraph2 />
    </div>
  );
}

function Container11() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] h-[285px] items-start relative shrink-0 w-full" data-name="Container">
      <Label3 />
      <Container10 />
    </div>
  );
}

function Container12() {
  return (
    <div className="h-[578px] relative shrink-0 w-full" data-name="Container">
      <div className="size-full">
        <div className="content-stretch flex flex-col gap-[16px] items-start pb-0 pt-[16px] px-[24px] relative size-full">
          <Container2 />
          <Container4 />
          <Container6 />
          <Container11 />
        </div>
      </div>
    </div>
  );
}

function Button3() {
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

function Paragraph3() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="Paragraph">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[24px] not-italic relative shrink-0 text-[16px] text-center text-nowrap text-white">Upload to start</p>
    </div>
  );
}

function Button4() {
  return (
    <div className="relative rounded-[4px] shrink-0 w-[183px]" data-name="Button" style={{ backgroundImage: "linear-gradient(167.67deg, rgb(118, 32, 205) 0%, rgb(136, 34, 170) 48%, rgb(80, 29, 97) 100%)" }}>
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[8px] items-start px-[16px] py-[8px] relative w-full">
        <ImageUpload />
        <Paragraph3 />
      </div>
    </div>
  );
}

function Container13() {
  return (
    <div className="h-[70px] relative shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#ecedef] border-[1px_0px_0px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center justify-end size-full">
        <div className="content-stretch flex gap-[12px] items-center justify-end pb-0 pl-0 pr-[24px] pt-px relative size-full">
          <Button3 />
          <Button4 />
        </div>
      </div>
    </div>
  );
}

export default function Container14() {
  return (
    <div className="bg-white content-stretch flex flex-col items-start overflow-clip relative rounded-[8px] shadow-[0px_4px_20px_0px_rgba(0,0,0,0.2)] size-full" data-name="Container">
      <Frame />
      <Container />
      <Container12 />
      <Container13 />
    </div>
  );
}