import svgPaths from "./svg-9m7yj5e61c";
import imgUst2 from "figma:asset/1b335c77c952f8d8ee8ed56edb64b2cb1e453242.png";
import { imgUst1 } from "./svg-ahpcu";

function Button() {
  return (
    <div className="absolute contents inset-0" data-name="Button">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1018 207">
        <g id="Group 385">
          <path d={svgPaths.p3e4dee80} fill="var(--fill-0, #AA0924)" id="Background" />
        </g>
      </svg>
    </div>
  );
}

function ImageBox1() {
  return (
    <div className="absolute contents left-[-5.3%] right-[55.44%] top-[-104.94px]" data-name="Image-box">
      <div className="absolute aspect-[1920/1080] left-[-2.73%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[27.842px_-83.291px] mask-size-[414.312px_207px] right-[55.44%] rounded-bl-[20px] rounded-tl-[20px] top-[83.29px]" data-name="ust 1" style={{ maskImage: `url('${imgUst1}')` }}>
        <img alt="" className="absolute inset-0 max-w-none object-contain pointer-events-none rounded-bl-[20px] rounded-tl-[20px] size-full" src={imgUst2} />
      </div>
      <div className="absolute aspect-[428/453] left-[-5.3%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[53.963px_104.938px] mask-size-[414.312px_207px] right-[55.49%] rounded-bl-[20px] rounded-tl-[20px] top-[-104.94px]" data-name="image 18" style={{ maskImage: `url('${imgUst1}')` }}>
        <img alt="" className="absolute inset-0 max-w-none object-contain pointer-events-none rounded-bl-[20px] rounded-tl-[20px] size-full" src={imgUst2} />
      </div>
    </div>
  );
}

function ImageBox() {
  return (
    <div className="absolute contents inset-[0_59.3%_0_0]" data-name="Image-box">
      <ImageBox1 />
    </div>
  );
}

function Button1() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute bg-white content-stretch flex items-center justify-center left-[calc(50%+17.8px)] px-[16px] py-[10px] rounded-[20px] top-[calc(50%+59.5px)] w-[183.574px]" data-name="Button">
      <p className="font-['Inter:Extra_Bold',sans-serif] font-extrabold leading-[1.2] not-italic relative shrink-0 text-[#aa0924] text-[20px] whitespace-nowrap">CONTACT US</p>
    </div>
  );
}

export default function Group() {
  return (
    <div className="relative size-full">
      <Button />
      <p className="absolute font-['Poppins:ExtraBold',sans-serif] inset-[12.08%_19.23%_66.51%_42.73%] leading-[normal] not-italic text-[25px] text-white">BUILT. INNOVATE. LEAD</p>
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal inset-[32.85%_3.37%_34.46%_42.73%] leading-[29px] not-italic text-[20px] text-white">The UST CICS Student Council stands at the forefront of innovation and service.</p>
      <ImageBox />
      <Button1 />
    </div>
  );
}