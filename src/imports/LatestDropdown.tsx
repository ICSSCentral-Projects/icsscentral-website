function HorizontalMiddleInset() {
  return (
    <div className="absolute bottom-1/2 content-stretch flex flex-col items-start justify-center left-[-11%] px-[16px] right-[-11%] top-[47.73%]" data-name="Horizontal/Middle-inset">
      <div className="h-0 relative shrink-0 w-full" data-name="Divider">
        <div className="absolute inset-[-1px_0_0_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 237.62 1">
            <line id="Divider" stroke="var(--stroke-0, #606060)" x2="237.62" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
    </div>
  );
}

export default function LatestDropdown() {
  return (
    <div className="bg-[rgba(58,58,58,0.82)] relative size-full" data-name="Latest-dropdown">
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Roboto:ExtraBold',sans-serif] font-extrabold justify-center leading-[0] left-[110.5px] text-[24px] text-center text-white top-[36px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[normal]">Events</p>
      </div>
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Roboto:ExtraBold',sans-serif] font-extrabold justify-center leading-[0] left-[110.5px] text-[24px] text-center text-white top-[100px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[normal]">{`News & Updates`}</p>
      </div>
      <HorizontalMiddleInset />
    </div>
  );
}