import { Link } from 'react-router';
import studentCouncil from '../../assets/student-council.png';

const F = "'Poppins', sans-serif";

export default function FloatingCard() {
  return (
    <div
      className="overflow-hidden"
      style={{
        position: 'absolute',
        bottom: '-110px',
        left: '50%',
        transform: 'translateX(-50%)',
        zIndex: 30,
        borderRadius: '16px',
        boxShadow: '0 8px 32px rgba(0,0,0,0.15)',
        width: '1018px',
        height: '220px',
      }}
    >
      <div className="grid grid-cols-[40%_60%] h-full">
        <div className="h-full">
          <img
            src={studentCouncil}
            alt="CICS Student Council Members"
            className="w-full h-full object-cover"
            style={{ borderRadius: '16px 0 0 16px' }}
          />
        </div>
        <div
          className="bg-[#AA0924] flex flex-col justify-start items-start h-full"
          style={{ borderRadius: '0 16px 16px 0', paddingLeft: '48px', paddingRight: '24px', paddingTop: '34px', paddingBottom: '34px' }}
        >
          <div className="flex flex-col items-start w-full" style={{ gap: '14px' }}>
            <h3
              className="text-white text-left"
              style={{ fontFamily: F, fontWeight: 800, fontSize: '20px', lineHeight: '1.2' }}
            >
              BUILT. INNOVATE. LEAD.
            </h3>
            <p
              className="text-white text-left"
              style={{ fontFamily: F, fontSize: '16px', lineHeight: '28px', fontWeight: 400 }}
            >
              The UST CICS Student Council stands at the forefront of innovation and service.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center bg-white text-[#AA0924] hover:bg-gray-50 transition-colors"
              style={{
                fontFamily: F,
                fontWeight: 800,
                fontSize: '14px',
                borderRadius: '4px',
                padding: '12px 8px',
                width: '160px',
                height: '38px',
                marginTop: '6px',
              }}
            >
              CONTACT US
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
