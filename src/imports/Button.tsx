import svgPaths from "./svg-a996jq60fe";

function Frame1() {
  return (
    <div className="h-[12.993px] relative shrink-0 w-[14.999px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14.9995 12.9931">
        <g id="Frame 34588">
          <path d={svgPaths.p5367100} fill="url(#paint0_linear_4005_22)" id="Union" />
        </g>
        <defs>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_4005_22" x1="4.22342e-05" x2="15.1644" y1="2.24053" y2="3.52435">
            <stop stopColor="#8C82FF" />
            <stop offset="1" stopColor="#673FFF" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0">
      <p className="bg-clip-text font-['Proxima_Nova:Bold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[13px] uppercase w-[73px]" style={{ WebkitTextFillColor: "transparent", backgroundImage: "linear-gradient(247.618deg, rgb(140, 130, 255) 1.178%, rgb(103, 63, 255) 96.045%)" }}>
        VTS AI
      </p>
    </div>
  );
}

function Frame2() {
  return (
    <div className="relative shrink-0 w-[88px]">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[4px] items-center relative w-full">
        <Frame1 />
        <Frame />
      </div>
    </div>
  );
}

export default function Button() {
  return (
    <div className="bg-[#1d1e20] content-stretch flex items-center justify-center relative size-full" data-name="Button">
      <Frame2 />
    </div>
  );
}