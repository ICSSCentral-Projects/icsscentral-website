import { Link } from 'react-router';
import InnerHeroBanner from '../components/InnerHeroBanner';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import SectionDivider from '../components/SectionDivider';
import advEdang from '../../assets/adv-edang.jpg';
import advAlarcon from '../../assets/adv-alarcon.jpg';

const F = "'Poppins', sans-serif";

const advisers = [
  { 
    name: "Asst. Prof. Maria Lourdes L. Edang, MSENG", 
    position: "ORG ADVISER",
    image: advEdang
  },
  { 
    name: "Asst. Prof. Francis Noel I. Alarcon, MSECE", 
    position: "ORG ADVISER",
    image: advAlarcon
  },
];

const executiveBoard = [
  { 
    name: "Jyro Alexis E. Nidea", 
    position: "PRESIDENT",
    image: "/board/president.jpg"
  },
  { 
    name: "Aaron Jacob P. Yumul", 
    position: "INTERNAL VICE-PRESIDENT",
    image: "/board/internal-vp.jpg"
  },
  { 
    name: "Micah Ellaine G. Estabillo", 
    position: "EXTERNAL VICE-PRESIDENT",
    image: "/board/external-vp.jpg"
  },
  { 
    name: "Olimar Dominic R. Olila", 
    position: "SECRETARY",
    image: "/board/secretary.jpg"
  },
  { 
    name: "Franz Lester C. Medina", 
    position: "TREASURER",
    image: "/board/treasurer.jpg"
  },
  { 
    name: "Janelle Merini P. Dingding", 
    position: "AUDITOR",
    image: "/board/auditor.jpg"
  },
  { 
    name: "Earl Glenniel C. Belan", 
    position: "PUBLIC RELATIONS OFFICER",
    image: "/board/pro.jpg"
  },
  { 
    name: "Lance Edward V. Hernandez", 
    position: "CHIEF-OF-STAFF OFFICER",
    image: "/board/chief-of-staff.jpg"
  },
];

export default function CouncilMembersPage() {
  return (
    <div className="min-h-screen bg-white" style={{ fontFamily: F }}>
      <InnerHeroBanner title="Meet the Council Members" breadcrumb="About / Meet the Council Members" />

      {/* Advisers */}
      <section className="pt-20 md:pt-40 pb-0">
        <div className="max-w-[1280px] mx-auto px-6 md:px-20">
          {/* Section Header with Centered Red Accent Line */}
          <div className="mb-10 text-center">
            <h2 className="text-[#1A1A1A] text-2xl md:text-[32px] font-bold mb-3 uppercase tracking-wider" style={{ fontFamily: F }}>
              ADVISERS
            </h2>
            <div className="w-[104px] h-1 bg-[#AA0924] mx-auto mb-6"></div>
          </div>

          {/* Description Paragraph */}
          <div className="max-w-[900px] mx-auto text-center mb-12">
            <p className="text-[#333333]" style={{ fontFamily: F, fontSize: '15px', lineHeight: '28px' }}>
              The Chiefs of Staff serve as the main support system of the UST CICS Student Council Executive Board, ensuring smooth coordination and communication among all departments. They oversee the council's internal operations, manage schedules, and assist in executing strategic initiatives, ensuring that all projects and activities run efficiently in service of the CICS community.
            </p>
          </div>

          {/* 2-Column Grid for Advisers - Centered */}
          <div className="flex justify-center">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-2xl">
              {advisers.map((member, index) => (
                <div 
                  key={index} 
                  className="flex flex-col items-center"
                  style={{ width: '280px' }}
                >
                  {/* Portrait Image - Rounded Square */}
                  <div className="mb-4" style={{ width: '200px', height: '200px', overflow: 'hidden', borderRadius: '24px' }}>
                    <ImageWithFallback 
                      src={member.image}
                      alt={member.name}
                      style={{ 
                        width: '100%', 
                        height: '100%', 
                        objectFit: 'cover',
                        objectPosition: 'center top'
                      }}
                    />
                  </div>

                  {/* Text Area - Centered */}
                  <div className="text-center">
                    <h3 className="text-[#1A1A1A] mb-1" style={{ fontFamily: F, fontWeight: 700, fontSize: '16px', lineHeight: '24px' }}>
                      {member.name}
                    </h3>
                    <p className="text-[#AA0924]" style={{ fontFamily: F, fontWeight: 400, fontSize: '13px', lineHeight: '20px', letterSpacing: '0.3px' }}>
                      {member.position}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* Executive Board */}
      <section className="bg-white pt-0 pb-20 md:pb-40">
        <div className="max-w-[1280px] mx-auto px-6 md:px-20">
          {/* Section Header with Centered Red Accent Line */}
          <div className="mb-10 text-center">
            <h2 className="text-[#1A1A1A] text-2xl md:text-[32px] font-bold mb-3 uppercase tracking-wider" style={{ fontFamily: F }}>
              EXECUTIVE BOARD
            </h2>
            <div className="w-[104px] h-1 bg-[#AA0924] mx-auto mb-6"></div>
          </div>

          {/* Description Paragraph */}
          <div className="max-w-[900px] mx-auto text-center mb-12">
            <p className="text-[#333333]" style={{ fontFamily: F, fontSize: '15px', lineHeight: '28px' }}>
              Meet the Executive Board, the central leadership team of the UST CICS Student Council. Composed of passionate and dedicated student leaders, they are responsible for driving the council's vision, initiatives, and operations. Through their commitment to service and innovation, they lead the CICS community toward growth, excellence, and meaningful impact.
            </p>
          </div>

          {/* Executive Board Grid - 3-3-2 Layout */}
          <div className="flex flex-col items-center gap-8">
            {/* First Row - 3 members */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
              {executiveBoard.slice(0, 3).map((member, index) => (
                <div 
                  key={index} 
                  className="flex flex-col items-center"
                  style={{ width: '280px' }}
                >
                  {/* Portrait Image - Rounded Square */}
                  <div className="mb-4" style={{ width: '200px', height: '200px', overflow: 'hidden', borderRadius: '24px' }}>
                    <ImageWithFallback 
                      src={member.image}
                      alt={member.name}
                      style={{ 
                        width: '100%', 
                        height: '100%', 
                        objectFit: 'cover',
                        objectPosition: 'center top'
                      }}
                    />
                  </div>

                  {/* Text Area - Centered */}
                  <div className="text-center">
                    <h3 className="text-[#1A1A1A] mb-1" style={{ fontFamily: F, fontWeight: 700, fontSize: '16px', lineHeight: '24px' }}>
                      {member.name}
                    </h3>
                    <p className="text-[#AA0924]" style={{ fontFamily: F, fontWeight: 400, fontSize: '13px', lineHeight: '20px', letterSpacing: '0.3px' }}>
                      {member.position}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Second Row - 3 members */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
              {executiveBoard.slice(3, 6).map((member, index) => (
                <div 
                  key={index + 3} 
                  className="flex flex-col items-center"
                  style={{ width: '280px' }}
                >
                  {/* Portrait Image - Rounded Square */}
                  <div className="mb-4" style={{ width: '200px', height: '200px', overflow: 'hidden', borderRadius: '24px' }}>
                    <ImageWithFallback 
                      src={member.image}
                      alt={member.name}
                      style={{ 
                        width: '100%', 
                        height: '100%', 
                        objectFit: 'cover',
                        objectPosition: 'center top'
                      }}
                    />
                  </div>

                  {/* Text Area - Centered */}
                  <div className="text-center">
                    <h3 className="text-[#1A1A1A] mb-1" style={{ fontFamily: F, fontWeight: 700, fontSize: '16px', lineHeight: '24px' }}>
                      {member.name}
                    </h3>
                    <p className="text-[#AA0924]" style={{ fontFamily: F, fontWeight: 400, fontSize: '13px', lineHeight: '20px', letterSpacing: '0.3px' }}>
                      {member.position}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Third Row - 2 members (centered) */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              {executiveBoard.slice(6, 8).map((member, index) => (
                <div 
                  key={index + 6} 
                  className="flex flex-col items-center"
                  style={{ width: '280px' }}
                >
                  {/* Portrait Image - Rounded Square */}
                  <div className="mb-4" style={{ width: '200px', height: '200px', overflow: 'hidden', borderRadius: '24px' }}>
                    <ImageWithFallback 
                      src={member.image}
                      alt={member.name}
                      style={{ 
                        width: '100%', 
                        height: '100%', 
                        objectFit: 'cover',
                        objectPosition: 'center top'
                      }}
                    />
                  </div>

                  {/* Text Area - Centered */}
                  <div className="text-center">
                    <h3 className="text-[#1A1A1A] mb-1" style={{ fontFamily: F, fontWeight: 700, fontSize: '16px', lineHeight: '24px' }}>
                      {member.name}
                    </h3>
                    <p className="text-[#AA0924]" style={{ fontFamily: F, fontWeight: 400, fontSize: '13px', lineHeight: '20px', letterSpacing: '0.3px' }}>
                      {member.position}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#AA0924] py-20 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-white text-2xl md:text-[32px] font-bold mb-5" style={{ fontFamily: F }}>Want to Join the Council?</h2>
          <p className="text-white/90 mb-8" style={{ fontFamily: F, fontSize: '16px', lineHeight: '26px' }}>
            Become part of a team dedicated to making a difference. Council elections are held annually at the start of each academic year.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact" className="bg-white text-[#AA0924] px-7 py-3 rounded hover:bg-gray-100 transition-colors" style={{ fontFamily: F, fontWeight: 700, fontSize: '16px' }}>
              Get Involved
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}