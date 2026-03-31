import { Link } from 'react-router';
import studentCouncil from '../../assets/student-council.png';

const F = "'Poppins', sans-serif";

export default function FloatingCard() {
  return (
    <div
      className="overflow-hidden absolute left-1/2 -translate-x-1/2 z-30 rounded-2xl shadow-2xl w-[90vw] max-w-5xl h-auto md:h-[200px] -bottom-[110px] md:-bottom-[100px]"
    >
      <div className="grid grid-cols-1 md:grid-cols-[40%_60%] h-full">
        <div className="h-[120px] md:h-full shrink-0">
          <img
            src={studentCouncil}
            alt="CICS Student Council Members"
            className="w-full h-full object-cover object-top rounded-t-2xl md:rounded-tr-none md:rounded-l-2xl"
          />
        </div>

        <div
          className="bg-[#AA0924] flex flex-col justify-start items-start p-6 md:pl-12 md:pr-6 md:py-8 rounded-b-2xl md:rounded-bl-none md:rounded-r-2xl"
        >

          <div className="flex flex-col items-start w-full gap-2 md:gap-4">
            <h3
              className="text-white text-left font-extrabold text-base md:text-xl leading-tight"
              style={{ fontFamily: F }}
            >
              BUILT. INNOVATE. LEAD.
            </h3>
            <p
              className="text-white text-left text-[11px] md:text-base leading-snug font-normal opacity-90"
              style={{ fontFamily: F }}
            >
              The UST CICS Student Council stands at the forefront of innovation and service.
            </p>

            <Link
              to="/contact"
              className="inline-flex items-center justify-center bg-white text-[#AA0924] hover:bg-gray-50 transition-all font-bold text-[11px] md:text-sm rounded h-9 md:h-12 w-32 md:w-40 mt-1 md:mt-2 shadow-sm active:scale-95"
              style={{ fontFamily: F }}
            >
              CONTACT US
            </Link>

          </div>
        </div>
      </div>
    </div>
  );
}
