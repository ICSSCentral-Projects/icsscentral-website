function HorizontalMiddleInset() {
  return (
    <div className="absolute content-stretch flex flex-col inset-[59.41%_-18.01%_39.01%_-10.41%] items-start justify-center px-[16px]" data-name="Horizontal/Middle-inset">
      <div className="h-0 relative shrink-0 w-[230px]" data-name="Divider">
        <div className="absolute inset-[-1px_0_0_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 230 1">
            <line id="Divider" stroke="var(--stroke-0, #606060)" x2="230" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
    </div>
  );
}

export default function ServicesDropdown() {
  return (
    <div className="bg-[rgba(58,58,58,0.82)] relative size-full" data-name="Services-dropdown">
      <p className="-translate-x-1/2 absolute font-['Roboto:ExtraBold',sans-serif] font-extrabold leading-[normal] left-[110.5px] text-[24px] text-center text-white top-[18px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        FOI Portal
      </p>
      <div className="absolute h-0 left-[-3px] top-[60px] w-[224px]" data-name="Divider">
        <div className="absolute inset-[-0.5px_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 224 1">
            <path d="M0 0.5H224" id="Divider" stroke="var(--stroke-0, #606060)" />
          </svg>
        </div>
      </div>
      <p className="-translate-x-1/2 absolute font-['Roboto:ExtraBold',sans-serif] font-extrabold leading-[normal] left-[111px] text-[24px] text-center text-white top-[79px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        STRAW Desk
      </p>
      <HorizontalMiddleInset />
      <div className="-translate-x-1/2 absolute font-['Roboto:ExtraBold',sans-serif] font-extrabold leading-[normal] left-[110.5px] text-[24px] text-center text-white top-[132px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="mb-0">{`Directory &`}</p>
        <p>Documents</p>
      </div>
    </div>
  );
}