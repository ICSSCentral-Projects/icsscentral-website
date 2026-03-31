import imgUst2 from "figma:asset/1b335c77c952f8d8ee8ed56edb64b2cb1e453242.png";
import { imgUst1 } from "./svg-n694y";

function ImageBox1() {
  return (
    <div className="absolute contents left-[-13.02%] right-[-9.49%] top-[-104.94px]" data-name="Image-box">
      <div className="absolute aspect-[1920/1080] left-[-6.72%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[27.842px_-83.291px] mask-size-[414.312px_207px] right-[-9.49%] rounded-bl-[20px] rounded-tl-[20px] top-[83.29px]" data-name="ust 1" style={{ maskImage: `url('${imgUst1}')` }}>
        <img alt="" className="absolute inset-0 max-w-none object-contain pointer-events-none rounded-bl-[20px] rounded-tl-[20px] size-full" src={imgUst2} />
      </div>
      <div className="absolute aspect-[428/453] left-[-13.02%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[53.963px_104.938px] mask-size-[414.312px_207px] right-[-9.37%] rounded-bl-[20px] rounded-tl-[20px] top-[-104.94px]" data-name="image 18" style={{ maskImage: `url('${imgUst1}')` }}>
        <img alt="" className="absolute inset-0 max-w-none object-contain pointer-events-none rounded-bl-[20px] rounded-tl-[20px] size-full" src={imgUst2} />
      </div>
    </div>
  );
}

export default function ImageBox() {
  return (
    <div className="relative size-full" data-name="Image-box">
      <ImageBox1 />
    </div>
  );
}