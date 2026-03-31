export default function AboutDropdown() {
  return (
    <div className="bg-[rgba(58,58,58,0.82)] relative size-full" data-name="About-dropdown">
      <p className="-translate-x-1/2 absolute font-['Roboto:ExtraBold',sans-serif] font-extrabold leading-[normal] left-[111px] text-[24px] text-center text-white top-[14px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        The Council
      </p>
      <div className="-translate-x-1/2 absolute font-['Roboto:ExtraBold',sans-serif] font-extrabold leading-[normal] left-[589px] text-[24px] text-center text-white top-[91px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="mb-0">Meet the Council</p>
        <p>Members</p>
      </div>
      <p className="-translate-x-1/2 absolute font-['Roboto:ExtraBold',sans-serif] font-extrabold leading-[normal] left-[111.5px] text-[24px] text-center text-white top-[153px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        CICS Organizations
      </p>
      <div className="absolute flex h-px items-center justify-center left-[-3px] top-[57px] w-[224px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "21" } as React.CSSProperties}>
        <div className="flex-none rotate-[-0.26deg]">
          <div className="h-0 relative w-[224.002px]" data-name="Divider">
            <div className="absolute inset-[-0.5px_0]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 224.002 1">
                <path d="M0 0.5H224.002" id="Divider" stroke="var(--stroke-0, #606060)" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute flex h-px items-center justify-center left-[-2px] top-[136px] w-[224px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "21" } as React.CSSProperties}>
        <div className="flex-none rotate-[-0.26deg]">
          <div className="h-0 relative w-[224.002px]" data-name="Divider">
            <div className="absolute inset-[-0.5px_0]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 224.002 1">
                <path d="M0 0.5H224.002" id="Divider" stroke="var(--stroke-0, #606060)" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="-translate-x-1/2 absolute font-['Roboto:ExtraBold',sans-serif] font-extrabold leading-[normal] left-[110.5px] text-[24px] text-center text-white top-[70px] whitespace-nowrap whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="mb-0">{`Meet the `}</p>
        <p>Council Members</p>
      </div>
    </div>
  );
}