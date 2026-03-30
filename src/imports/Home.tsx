import clsx from "clsx";
import imgImageBox from "figma:asset/40726e97b840b602c2e53237df0a633d96ca15ae.png";
import svgPaths from "./svg-gn6i1ansoz";
import imgIcssc41 from "figma:asset/812f001f003ddb7acc93883157c7b7496281a9aa.png";
import imgShadow from "figma:asset/d3827deadd363cc85cf35bde676dd0ca6a903982.png";
import imgIcsSc1 from "figma:asset/33915aeaef238599afc783beafd6fdf7b4874a54.png";
import imgImageBox1 from "figma:asset/0911d4d07b69ce06d239bbd36ce5308dbab62416.png";
import imgImageBox2 from "figma:asset/3f562828173163535b2fc311cc0b0115af36f665.png";
import imgGrad1 from "figma:asset/6e0e7325b5dbdbe51d06631f18041cdf02acf6ff.png";
import imgIcsscLogo1 from "figma:asset/2ca87e02115748fc289ada9264a57fea56f6ba11.png";
import imgUst1 from "figma:asset/03c6ff6db5c53d51f5b15fe7bcc772a5b6f322ac.png";
import imgRectangle38 from "figma:asset/3b2c596396d48df0e2c84266b68380e0c1edc1f9.png";
import { imgImage, imgRectangle, imgImage1 } from "./svg-xvl39";
type HomeImageBoxProps = {
  additionalClassNames?: string;
};

function HomeImageBox({ children, additionalClassNames = "" }: React.PropsWithChildren<HomeImageBoxProps>) {
  return (
    <div className={clsx("absolute rounded-[30px]", additionalClassNames)}>
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none rounded-[30px]">
        {children}
      </div>
    </div>
  );
}
type WrapperProps = {
  additionalClassNames?: string;
};

function Wrapper({ children, additionalClassNames = "" }: React.PropsWithChildren<WrapperProps>) {
  return (
    <div className={clsx("absolute", additionalClassNames)}>
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.1118 12.9257">
        {children}
      </svg>
    </div>
  );
}

function ButtonIcon({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="overflow-clip relative shrink-0 size-[24px]">
      <div className="absolute inset-[12.5%]" data-name="Vector">
        <div className="absolute inset-[-5.56%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
            {children}
          </svg>
        </div>
      </div>
    </div>
  );
}
type HomeVectorProps = {
  additionalClassNames?: string;
};

function HomeVector({ additionalClassNames = "" }: HomeVectorProps) {
  return (
    <Wrapper additionalClassNames={additionalClassNames}>
      <path d={svgPaths.p2441dc00} fill="var(--fill-0, black)" id="Vector" />
    </Wrapper>
  );
}
type ButtonTextProps = {
  text: string;
  additionalClassNames?: string;
};

function ButtonText({ text, additionalClassNames = "" }: ButtonTextProps) {
  return (
    <div className={clsx("-translate-x-1/2 -translate-y-1/2 absolute bg-[#ce142e] content-stretch flex gap-[10px] items-center justify-center px-[16px] py-[12px] rounded-[20px] top-[calc(50%+1115px)]", additionalClassNames)}>
      <p className="font-['Arial:Bold',sans-serif] leading-[1.2] not-italic relative shrink-0 text-[#f9fbf0] text-[19px] whitespace-nowrap">{text}</p>
      <ButtonIcon>
        <path d={svgPaths.p1bf82380} id="Vector" stroke="var(--stroke-0, #F9FBF0)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
      </ButtonIcon>
    </div>
  );
}
type ImageProps = {
  additionalClassNames?: string;
};

function Image({ additionalClassNames = "" }: ImageProps) {
  return (
    <div className={clsx("absolute flex items-center justify-center", additionalClassNames)}>
      <div className="flex-none rotate-[89.7deg] size-[35.811px]">
        <div className="relative size-full">
          <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgRectangle38} />
        </div>
      </div>
    </div>
  );
}
type IcsscLogoImageProps = {
  additionalClassNames?: string;
};

function IcsscLogoImage({ additionalClassNames = "" }: IcsscLogoImageProps) {
  return (
    <div className={clsx("absolute aspect-[2000/2000]", additionalClassNames)}>
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgIcsscLogo1} />
    </div>
  );
}

export default function Home() {
  return (
    <div className="bg-[#f5f5f5] relative size-full" data-name="Home">
      <div className="absolute flex inset-[71.35%_92.79%_27.86%_5.75%] items-center justify-center">
        <div className="flex-none h-[34.292px] rotate-180 w-[22px]">
          <div className="relative size-full" data-name=">">
            <div className="absolute inset-[-5.83%_-13.58%_-6.64%_-13.63%]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 27.9867 38.5694">
                <path clipRule="evenodd" d={svgPaths.paec5500} fillRule="evenodd" id=">" stroke="var(--stroke-0, black)" strokeMiterlimit="10" strokeWidth="4" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute inset-[3.83%_-1.19%_80.21%_0]">
        <div className="absolute contents left-0 top-[-2px]">
          <div className="absolute h-[694px] left-0 top-[-2px] w-[1512px]" data-name="icssc4 1">
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <img alt="" className="absolute h-[145.05%] left-0 max-w-none top-[-22.28%] w-full" src={imgIcssc41} />
            </div>
          </div>
          <div className="absolute inset-[0_0.85%_0.57%_0]">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1516.96 692">
              <path d="M0 0H1516.96V692H0V0Z" fill="var(--fill-0, black)" fillOpacity="0.55" id="Rectangle 14" />
            </svg>
          </div>
          <div className="absolute font-['Arial_Black:Regular',sans-serif] inset-[27.44%_7.28%_29.31%_7.28%] leading-[87px] not-italic text-[68px] text-center text-white uppercase">
            <p className="mb-0">UST COLLEGE OF INFORMATION AND COMPUTING SCIENCES -</p>
            <p>STUDENT COUNCIL</p>
          </div>
          <div className="absolute inset-[91.14%_47.09%_7%_47.02%]" data-name="Carasole">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 90.0596 12.9257">
              <g id="Carasole">
                <path d={svgPaths.p4bc9930} fill="var(--fill-0, #CE142E)" id="Vector" />
                <path d={svgPaths.p21c9c880} fill="var(--fill-0, white)" id="Vector_2" />
                <path d={svgPaths.p16b12900} fill="var(--fill-0, white)" id="Vector_3" />
              </g>
            </svg>
          </div>
        </div>
      </div>
      <div className="absolute inset-[71.35%_6.81%_27.84%_91.73%]" data-name=">">
        <div className="absolute inset-[-5.71%_-13.43%_-6.54%_-13.48%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 27.92 39.2875">
            <path clipRule="evenodd" d={svgPaths.p273f6500} fillRule="evenodd" id=">" stroke="var(--stroke-0, black)" strokeMiterlimit="10" strokeWidth="4" />
          </svg>
        </div>
      </div>
      <HomeVector additionalClassNames="inset-[78.44%_52.24%_21.26%_46.89%]" />
      <Wrapper additionalClassNames="inset-[78.44%_49.71%_21.26%_49.43%]">
        <path d={svgPaths.p2441dc00} fill="var(--fill-0, #CE142E)" id="Vector" />
      </Wrapper>
      <HomeVector additionalClassNames="inset-[78.44%_47.17%_21.26%_51.96%]" />
      <div className="absolute inset-[1.19%_-1.19%_95.23%_-1.12%]" data-name="Shadow">
        <div className="absolute inset-0 opacity-25 overflow-hidden pointer-events-none">
          <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgShadow} />
        </div>
      </div>
      <div className="absolute contents inset-[-0.05%_0_99.01%_0]" data-name="Notification">
        <div className="absolute inset-[-0.05%_0_99.01%_0]" data-name="Vector">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1512 45">
            <path d="M1512 0H0V45H1512V0Z" fill="var(--fill-0, black)" id="Vector" />
          </svg>
        </div>
        <div className="absolute inset-[0.25%_3.24%_99.29%_95.44%]" data-name="Frame">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
            <g id="Frame">
              <path d={svgPaths.pf17ba00} fill="var(--fill-0, white)" id="Vector" />
            </g>
          </svg>
        </div>
        <p className="absolute capitalize font-['Arial:Regular',sans-serif] inset-[0.28%_28.51%_99.31%_28.51%] leading-[normal] not-italic text-[16px] text-center text-white">Mark your calendars! An upcoming CICS Student Council event you won’t want to miss!</p>
      </div>
      <div className="absolute aspect-[1595/609] left-[-3.31%] right-[-2.18%] top-[1470px]" data-name="ics-sc 1">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[147.31%] left-0 max-w-none top-[-13.47%] w-full" src={imgIcsSc1} />
        </div>
      </div>
      <div className="absolute contents inset-[31.74%_0_52.32%_0]">
        <div className="absolute contents inset-[31.74%_0_52.32%_0]" data-name="Video-Image-box">
          <div className="absolute contents inset-[31.74%_0_52.32%_0]" data-name="Image-box">
            <div className="absolute contents inset-[33.67%_-0.28%_50.35%_0]" data-name="Image-box">
              <div className="absolute bg-[#c4c4c4] inset-[33.67%_-0.28%_50.35%_0] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0px_-84px] mask-size-[1512px_695px] opacity-53" data-name="Image" style={{ maskImage: `url('${imgImage}')` }} />
            </div>
          </div>
        </div>
        <p className="absolute font-['Montserrat:Bold',sans-serif] font-bold inset-[34.7%_16.4%_64.17%_16.4%] leading-[normal] text-[40px] text-center text-white">Get to know the UST CICS Student Council</p>
        <div className="absolute inset-[38.83%_45.55%_57.81%_44.38%]" data-name="Icon">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 152.362 146.203">
            <g id="Icon">
              <path d={svgPaths.p1dbff400} fill="var(--fill-0, white)" id="Vector" />
              <path d={svgPaths.p301f5880} fill="var(--fill-0, #CE142E)" id="Vector_2" />
              <path d={svgPaths.p13ae5cc0} fill="var(--fill-0, white)" id="Vector_3" />
            </g>
          </svg>
        </div>
      </div>
      <div className="absolute bg-[#ce142e] inset-[53.53%_-5.62%_34.2%_-8.07%] rounded-[30px]" />
      <div className="-translate-x-1/2 -translate-y-1/2 absolute bg-white content-stretch flex gap-[10px] items-center justify-center left-[calc(50%+96.5px)] px-[16px] py-[12px] rounded-[20px] top-[calc(50%+592.5px)]" data-name="Button">
        <p className="font-['Arial:Bold',sans-serif] leading-[1.2] not-italic relative shrink-0 text-[#ce142e] text-[24px] whitespace-nowrap">Register</p>
        <ButtonIcon>
          <path d={svgPaths.p1bf82380} id="Vector" stroke="var(--stroke-0, #CE142E)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </ButtonIcon>
      </div>
      <div className="absolute bg-[rgba(255,255,255,0.7)] inset-[67.09%_11.38%_22.82%_10.32%] opacity-70 rounded-[30px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.5)]" />
      <div className="absolute contents inset-[23.07%_6.42%_48.46%_6.48%]" data-name="Section -1">
        <div className="absolute contents inset-[23.07%_6.42%_68.26%_6.48%]">
          <div className="absolute contents inset-[23.07%_6.42%_68.82%_6.48%]" data-name="Section -1">
            <div className="absolute contents inset-[23.07%_6.42%_68.82%_59.92%]" data-name="Image">
              <div className="absolute contents inset-[23.07%_6.45%_68.81%_59.92%]" data-name="Group">
                <div className="absolute bg-[#c4c4c4] inset-[23.07%_6.45%_68.81%_59.92%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0.012px_0.249px] mask-size-[509px_353.62px] rounded-[30px]" data-name="Rectangle" style={{ maskImage: `url('${imgRectangle}')` }} />
              </div>
              <div className="absolute aspect-[1600/1066] left-[54.61%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[80.321px_12.34px] mask-size-[509px_353.62px] right-[5.51%] rounded-[30px] top-[993.66px]" data-name="received_2381245385246437 1" style={{ maskImage: `url('${imgRectangle}')` }}>
                <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[30px] size-full" src={imgIcssc41} />
              </div>
            </div>
            <p className="absolute font-['Inter:Regular',sans-serif] font-normal inset-[26.15%_44.25%_69.59%_6.48%] leading-[31px] not-italic text-[20px] text-black text-justify">Established in 2014, the University of Santo Tomas College of Information and Computing Sciences stands as a center of innovation and excellence in technology education. Rooted in UST’s legacy of CICS unites Computer Science, Information Technology, and Information Systems under one forward-looking college. It continues to develop skilled and ethical Thomasian innovators committed to advancing technology and serving society.</p>
          </div>
          <p className="absolute font-['Lato:Regular',sans-serif] inset-[31.19%_83.99%_68.26%_6.48%] leading-[normal] not-italic text-[#ce142e] text-[20px]">Read More</p>
          <div className="absolute inset-[24.94%_88.8%_75.01%_6.49%]" data-name="Divider">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 71.1835 2.15002">
              <path d={svgPaths.p2800d680} fill="var(--fill-0, #CE142E)" id="Divider" />
            </svg>
          </div>
          <p className="absolute font-['Montserrat:ExtraBold',sans-serif] font-extrabold inset-[23.07%_54.06%_75.8%_6.48%] leading-[normal] text-[40px] text-black">Our Legacy of Excellence</p>
        </div>
        <div className="absolute contents inset-[49.86%_30.78%_48.46%_29.76%]">
          <div className="absolute inset-[51.54%_46.83%_48.46%_46.3%]" data-name="Line">
            <div className="absolute inset-[-1px_0]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 104 2">
                <path d="M104 1H0" id="Line" stroke="var(--stroke-0, #CE142E)" strokeMiterlimit="10" strokeWidth="2" />
              </svg>
            </div>
          </div>
          <p className="absolute font-['Montserrat:ExtraBold',sans-serif] font-extrabold inset-[49.86%_30.78%_49.01%_29.76%] leading-[normal] text-[40px] text-black text-center">UPCOMING EVENTS</p>
        </div>
      </div>
      <p className="absolute font-['Roboto:Regular',sans-serif] font-normal inset-[60.67%_13.03%_37.78%_50.99%] leading-[27px] text-[23px] text-white" style={{ fontVariationSettings: "'wdth' 100" }}>
        Join the CICS community as we take strides for mental wellness and stand together against suicide.
      </p>
      <p className="absolute font-['Roboto:Bold',sans-serif] font-bold inset-[54.61%_12.9%_43.83%_51.12%] leading-[40px] text-[#fd0] text-[23px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        HIGHLIGHT
      </p>
      <p className="absolute font-['Roboto:Bold',sans-serif] font-bold inset-[56.61%_11.38%_41.95%_50.99%] leading-[normal] text-[70px] text-white" style={{ fontVariationSettings: "'wdth' 100" }}>
        Race Against Suicide
      </p>
      <div className="absolute inset-[54.89%_52.65%_35.55%_11.84%]" data-name="Image-box">
        <div className="absolute inset-0 rounded-[30px]" data-name="Image-box">
          <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[30px]">
            <img alt="" className="absolute h-[178.45%] left-[-3.23%] max-w-none top-[-13.87%] w-[109.87%]" src={imgImageBox} />
          </div>
        </div>
      </div>
      <p className="absolute font-['Arial:Regular',sans-serif] inset-[68.78%_50.6%_25.6%_33.07%] leading-[35px] not-italic text-[23px] text-black">{`The Opening Mass & Oath-Taking Ceremony marks the official start of the academic year and the formal induction of newly elected officers. `}</p>
      <HomeImageBox additionalClassNames="inset-[68.51%_69.44%_26.01%_14.68%]">
        <div className="absolute bg-[#d9d9d9] inset-0 rounded-[30px]" />
        <div className="absolute inset-0 overflow-hidden rounded-[30px]">
          <img alt="" className="absolute h-[120.99%] left-[-41.69%] max-w-none top-0 w-[172.65%]" src={imgImageBox1} />
        </div>
      </HomeImageBox>
      <p className="absolute font-['Arial:Regular',sans-serif] inset-[68.78%_14.29%_30.32%_69.38%] leading-[35px] not-italic text-[23px] text-black">The Leadership Seminar aims to inspire and equip student leaders with the knowledge, skills, and values essential for effective leadership.</p>
      <HomeImageBox additionalClassNames="inset-[68.51%_33.13%_26.01%_50.99%]">
        <div className="absolute bg-[#d9d9d9] inset-0 rounded-[30px]" />
        <img alt="" className="absolute max-w-none object-cover rounded-[30px] size-full" src={imgImageBox2} />
      </HomeImageBox>
      <div className="absolute contents inset-[80.73%_-0.66%_10.5%_-0.4%]">
        <div className="absolute aspect-[1512/380] left-[-0.1%] right-[-0.1%] top-[3520px]" data-name="grad 1">
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <img alt="" className="absolute h-[265.38%] left-0 max-w-none top-[-112.45%] w-full" src={imgGrad1} />
          </div>
        </div>
        <div className="absolute bg-[#f9f9f9] inset-[80.73%_-0.66%_10.5%_-0.4%] opacity-68" data-name="Background" />
        <div className="absolute contents inset-[86.22%_40.87%_12.45%_40.54%]">
          <div className="absolute inset-[86.22%_40.87%_12.45%_40.54%]" data-name="Background">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 281 58">
              <path d={svgPaths.p23f93f80} fill="var(--fill-0, #CE142E)" id="Background" />
            </svg>
          </div>
          <p className="absolute font-['Roboto:Bold',sans-serif] font-bold inset-[86.56%_43.19%_12.94%_42.92%] leading-[normal] text-[26px] text-center text-white" style={{ fontVariationSettings: "'wdth' 100" }}>
            Discover More
          </p>
        </div>
        <div className="absolute font-['Montserrat:ExtraBold',sans-serif] font-extrabold inset-[83.19%_14.94%_14.82%_14.68%] leading-[normal] text-[36px] text-black text-center whitespace-pre-wrap">
          <p className="mb-0">{`Explore the Excellence and Vision of the `}</p>
          <p>UST CICS Student Council.</p>
        </div>
      </div>
      <div className="absolute contents inset-[89.45%_0_-0.04%_0]" data-name="Footer">
        <div className="absolute inset-[89.45%_0_-0.04%_0]" data-name="Background">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1511.97 461.895">
            <path d={svgPaths.pb1b3d80} fill="var(--fill-0, black)" id="Background" />
          </svg>
        </div>
        <div className="absolute capitalize contents font-['Arial:Regular',sans-serif] inset-[93.03%_24.47%_4.98%_58.33%] leading-[normal] not-italic text-[#f6fafb] text-[18px]" data-name="Text">
          <p className="absolute inset-[94.61%_28.51%_4.98%_58.33%]">{`Directory & documents`}</p>
          <p className="absolute inset-[93.83%_24.47%_5.75%_58.33%]">FOI Portal</p>
          <p className="absolute inset-[93.03%_26.59%_6.54%_58.33%]">sTRAW Desk</p>
        </div>
        <div className="absolute contents font-['Arial:Regular',sans-serif] inset-[93%_3.24%_5.71%_77.78%] leading-[normal] not-italic text-[#f6fafb] text-[18px]" data-name="Text">
          <p className="absolute capitalize inset-[93.88%_3.24%_5.71%_77.78%]">Rm. 2005 Blessed Pier Giorgio Frassati, O.P. Building, University of Santo Tomas, España Boulevard, Manila, Philippines</p>
          <p className="absolute inset-[93%_5.03%_6.57%_77.78%] lowercase">sc.ics@ust.edu.ph</p>
        </div>
        <p className="absolute font-['Roboto:Bold',sans-serif] font-bold inset-[91.61%_21.36%_7.43%_58.33%] leading-[normal] text-[32px] text-white" style={{ fontVariationSettings: "'wdth' 100" }}>
          RESOURCES
        </p>
        <p className="absolute font-['Arial:Regular',sans-serif] inset-[98.9%_32.01%_0.62%_32.28%] leading-[normal] not-italic text-[18px] text-center text-white whitespace-nowrap">© Copyright 2025. All Rights reserved. | Powered by CICS Students</p>
        <div className="absolute inset-[98.33%_0_1.67%_0]" data-name="Divider">
          <div className="absolute inset-[-0.5px_0]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1512 1">
              <path d="M0 0.5H1512" id="Divider" stroke="var(--stroke-0, #F5F5F5)" strokeMiterlimit="10" />
            </svg>
          </div>
        </div>
        <div className="absolute contents inset-[91.61%_0_5.69%_75.53%]" data-name="Colume-4">
          <div className="absolute inset-[93.2%_23.48%_6.56%_75.53%]" data-name="Email">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15 10.3125">
              <g id="Email">
                <g id="Icon">
                  <path clipRule="evenodd" d={svgPaths.p7aaff80} fill="var(--fill-0, #CE142E)" fillRule="evenodd" />
                  <path clipRule="evenodd" d={svgPaths.p1fe32600} fill="var(--fill-0, #CE142E)" fillRule="evenodd" />
                  <path clipRule="evenodd" d={svgPaths.pa36f380} fill="var(--fill-0, #CE142E)" fillRule="evenodd" />
                  <path clipRule="evenodd" d={svgPaths.p2d386568} fill="var(--fill-0, #CE142E)" fillRule="evenodd" />
                </g>
              </g>
            </svg>
          </div>
          <div className="absolute inset-[93.9%_23.48%_5.69%_75.53%]" data-name="Location">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15 18">
              <g id="Location">
                <path clipRule="evenodd" d={svgPaths.p2dd1f840} fill="var(--fill-0, #CE142E)" fillRule="evenodd" id="Icon" />
              </g>
            </svg>
          </div>
          <p className="absolute font-['Roboto:Bold',sans-serif] font-bold inset-[91.61%_0_7.43%_75.53%] leading-[normal] text-[32px] text-white" style={{ fontVariationSettings: "'wdth' 100" }}>
            CONTACT US
          </p>
        </div>
        <div className="absolute contents inset-[91.61%_41.53%_4.19%_38.16%] leading-[normal]" data-name="Colume-2">
          <div className="absolute capitalize contents font-['Arial:Regular',sans-serif] inset-[92.98%_44.64%_4.19%_38.16%] not-italic text-[#f6fafb] text-[18px]" data-name="Text">
            <p className="absolute inset-[95.39%_53.94%_4.19%_38.16%]">FAQs</p>
            <p className="absolute inset-[94.56%_48.68%_5.02%_38.16%]">{`News & Updates`}</p>
            <p className="absolute inset-[93.78%_44.64%_5.8%_38.16%]">{`Mission & Vision`}</p>
            <p className="absolute inset-[92.98%_46.76%_6.58%_38.16%]">Meet the Council members</p>
          </div>
          <p className="absolute font-['Roboto:Bold',sans-serif] font-bold inset-[91.61%_41.53%_7.43%_38.16%] text-[32px] text-white" style={{ fontVariationSettings: "'wdth' 100" }}>
            QUICK LINKS
          </p>
        </div>
        <div className="absolute contents inset-[91.01%_70.77%_8.03%_13.49%]" data-name="Colume-2">
          <p className="absolute font-['Righteous:Regular',sans-serif] inset-[91.01%_70.77%_8.03%_13.49%] leading-[normal] not-italic text-[40px] text-white">UST ICSSC</p>
        </div>
        <div className="absolute contents inset-[92.78%_66.93%_2.52%_8.27%]" data-name="Colume-1">
          <div className="absolute contents inset-[96.72%_83.45%_2.52%_8.27%]" data-name="Social-Media-Icons">
            <div className="absolute inset-[96.72%_86.69%_2.52%_11.21%]" data-name="Twitter">
              <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 31.7873 32.9998">
                <g id="Twitter">
                  <path d={svgPaths.p1dd81880} fill="var(--fill-0, #CE142E)" id="Background" />
                  <path d={svgPaths.pd21b600} fill="var(--fill-0, black)" id="Icon" />
                </g>
              </svg>
            </div>
            <div className="absolute inset-[96.72%_83.45%_2.52%_14.44%]" data-name="Instagram">
              <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 31.7869 32.9992">
                <g id="Instagram">
                  <path d={svgPaths.p124acf00} fill="var(--fill-0, #CE142E)" id="Background" />
                  <g id="Icon">
                    <path d={svgPaths.p2fcfc000} fill="var(--fill-0, black)" />
                    <path d={svgPaths.p16255000} fill="var(--fill-0, black)" />
                    <path d={svgPaths.p95fc780} fill="var(--fill-0, black)" />
                  </g>
                </g>
              </svg>
            </div>
            <div className="absolute inset-[96.72%_89.63%_2.52%_8.27%]" data-name="Facebook">
              <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 31.7869 33">
                <g id="Facebook">
                  <path d={svgPaths.pf9e5a00} fill="var(--fill-0, #CE142E)" id="Background" />
                  <path d={svgPaths.p31909580} fill="var(--fill-0, black)" id="Icon" />
                </g>
              </svg>
            </div>
          </div>
          <p className="absolute font-['Arial:Regular',sans-serif] inset-[92.78%_66.93%_4.7%_8.27%] leading-[36px] not-italic text-[#f6fafb] text-[21.98px]">Leading through innovation and growing together in purpose, we strive to empower Thomasians to create meaningful change in a digital world.</p>
        </div>
        <IcsscLogoImage additionalClassNames="left-[6.48%] right-[86.44%] top-[3929px]" />
      </div>
      <div className="absolute contents inset-[17.45%_10.71%_78.48%_10.65%]" data-name="Box">
        <div className="absolute contents inset-[17.45%_10.71%_78.48%_10.65%]" data-name="Button">
          <div className="absolute contents inset-[17.45%_10.71%_78.48%_10.65%]">
            <div className="absolute inset-[17.45%_10.71%_78.48%_10.65%]" data-name="Background">
              <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1189.02 177.44">
                <path d={svgPaths.p14afeb00} fill="var(--fill-0, #CE142E)" id="Background" />
              </svg>
            </div>
            <div className="absolute contents inset-[18.9%_14.16%_79.93%_76.32%]">
              <div className="absolute inset-[18.9%_14.16%_79.93%_76.32%]" data-name="Vector">
                <div className="absolute inset-[-0.81%_-0.28%]">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 144.72 51.69">
                    <path d={svgPaths.p182c9f00} id="Vector" stroke="var(--stroke-0, white)" strokeMiterlimit="10" strokeWidth="0.82" />
                  </svg>
                </div>
              </div>
              <p className="absolute font-['Roboto:Bold',sans-serif] font-bold inset-[19.19%_16.27%_80.17%_78.51%] leading-[normal] text-[24px] text-white whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
                ABOUT
              </p>
            </div>
          </div>
        </div>
        <p className="absolute font-['Lato:Regular',sans-serif] inset-[19.47%_27.82%_79.2%_36.67%] leading-[29px] not-italic text-[18px] text-white">The CICS Student Council stands at the forefront of innovation and service, shaping leaders who drive progress with purpose.</p>
        <p className="absolute font-['Nunito:Regular',sans-serif] font-normal inset-[18.12%_41.53%_80.76%_36.71%] leading-[normal] text-[36px] text-white whitespace-nowrap">Built. Innovate. Lead</p>
        <div className="absolute contents inset-[17.45%_66.58%_78.48%_10.65%]" data-name="Image-box">
          <div className="absolute contents inset-[13.21%_63.27%_76.4%_8.4%]" data-name="Image-box">
            <div className="absolute bg-[#c4c4c4] inset-[17.61%_65.58%_78.01%_9.83%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[12.385px_-6.679px] mask-size-[344.31px_177.44px] rounded-bl-[20px] rounded-tl-[20px]" data-name="Image" style={{ maskImage: `url('${imgImage1}')` }} />
            <div className="absolute aspect-[1920/1080] left-[9.86%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[11.953px_26.133px] mask-size-[344.31px_177.44px] right-[63.27%] rounded-bl-[20px] rounded-tl-[20px] top-[734.87px]" data-name="ust 1" style={{ maskImage: `url('${imgImage1}')` }}>
              <img alt="" className="absolute inset-0 max-w-none object-contain pointer-events-none rounded-bl-[20px] rounded-tl-[20px] size-full" src={imgUst1} />
            </div>
            <div className="absolute aspect-[428/453] left-[8.4%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[34px_185px] mask-size-[344.31px_177.44px] right-[63.29%] rounded-bl-[20px] rounded-tl-[20px] top-[576px]" data-name="image 18" style={{ maskImage: `url('${imgImage1}')` }} />
          </div>
        </div>
      </div>
      <p className="absolute font-['Roboto:Bold_Italic',sans-serif] font-bold inset-[55.46%_32.28%_44.15%_51.12%] italic leading-[normal] text-[#f0f0f0] text-[25.28px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        October 28, 2025
      </p>
      <div className="absolute bg-[#ce142e] inset-[0.94%_0_96.08%_0]" data-name="Navbar">
        <button className="absolute cursor-pointer flex flex-col font-['Poppins:Bold',sans-serif] inset-[15.38%_71.69%_19.23%_8.27%] justify-center leading-[0] not-italic text-[50px] text-center text-white">
          <p className="leading-[normal]">UST ICSSC</p>
        </button>
        <button className="absolute cursor-pointer flex flex-col font-['Poppins:Regular',sans-serif] inset-[41.54%_71.69%_-6.92%_8.27%] justify-center leading-[0] not-italic text-[14px] text-center text-white">
          <p className="leading-[normal]">{`Student Services & Engagement Hub`}</p>
        </button>
        <IcsscLogoImage additionalClassNames="left-[1.92%] right-[89.48%] top-0" />
        <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Poppins:Bold',sans-serif] justify-center leading-[0] left-[563px] not-italic text-[28px] text-center text-white top-[71px] whitespace-nowrap">
          <p className="leading-[normal]">HOME</p>
        </div>
        <div className="absolute contents left-[648px] top-[50px]">
          <div className="absolute contents left-[648px] top-[50px]">
            <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Poppins:ExtraBold',sans-serif] justify-center leading-[0] left-[699px] not-italic text-[28px] text-center text-white top-[71px] whitespace-nowrap">
              <p className="leading-[normal]">LATEST</p>
            </div>
            <button className="absolute contents cursor-pointer inset-[40.77%_47.35%_31.54%_50.26%]">
              <div className="absolute contents inset-[40.77%_47.35%_31.54%_50.26%]">
                <Image additionalClassNames="inset-[40.77%_47.35%_31.54%_50.26%]" />
              </div>
            </button>
          </div>
        </div>
        <div className="absolute contents left-[839px] top-[50px]">
          <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Poppins:ExtraBold',sans-serif] justify-center leading-[0] left-[906.5px] not-italic text-[28px] text-center text-white top-[71px] whitespace-nowrap">
            <p className="leading-[normal]">SERVICES</p>
          </div>
          <button className="absolute contents cursor-pointer inset-[40.77%_32.67%_31.54%_64.95%]">
            <div className="absolute contents inset-[40.77%_32.67%_31.54%_64.95%]">
              <Image additionalClassNames="inset-[40.77%_32.67%_31.54%_64.95%]" />
            </div>
          </button>
        </div>
        <div className="absolute contents left-[1060px] top-[49px]">
          <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Poppins:ExtraBold',sans-serif] justify-center leading-[0] left-[1109.5px] not-italic text-[28px] text-center text-white top-[70px] whitespace-nowrap">
            <p className="leading-[normal]">ABOUT</p>
          </div>
          <button className="absolute contents cursor-pointer inset-[40.77%_20.57%_31.54%_77.05%]">
            <div className="absolute contents inset-[40.77%_20.57%_31.54%_77.05%]">
              <Image additionalClassNames="inset-[40.77%_20.57%_31.54%_77.05%]" />
            </div>
          </button>
        </div>
        <div className="absolute bg-black h-[55px] left-[1235px] rounded-[10px] top-[43px] w-[228px]" />
        <p className="absolute font-['Poppins:Bold',sans-serif] leading-[normal] left-[1257px] not-italic text-[28px] text-white top-[50px] whitespace-nowrap">CONTACT US</p>
      </div>
      <ButtonText text="Register" additionalClassNames="left-[calc(50%+86.5px)]" />
      <ButtonText text="Register" additionalClassNames="left-[calc(50%-466.5px)]" />
    </div>
  );
}