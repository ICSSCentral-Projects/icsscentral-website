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
    image: "https://images.unsplash.com/photo-1603252112050-5ee77b4b4fde?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx5b3VuZyUyMGFzaWFuJTIwbWFsZSUyMHByb2Zlc3Npb25hbCUyMGhlYWRzaG90fGVufDF8fHx8MTc3MzU5NzE3NHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
  },
  { 
    name: "Aaron Jacob P. Yumul", 
    position: "INTERNAL VICE-PRESIDENT",
    image: "https://images.unsplash.com/photo-1681070909604-f555aa006564?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhc2lhbiUyMG1hbGUlMjBzdHVkZW50JTIwcHJvZmVzc2lvbmFsJTIwcG9ydHJhaXR8ZW58MXx8fHwxNzczNTk3MTc1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
  },
  { 
    name: "Micah Ellaine G. Estabillo", 
    position: "EXTERNAL VICE-PRESIDENT",
    image: "https://images.unsplash.com/photo-1758600587839-56ba05596c69?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBhc2lhbiUyMHdvbWFuJTIwYnVzaW5lc3MlMjBoZWFkc2hvdHxlbnwxfHx8fDE3NzM1OTcxNzZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
  },
  { 
    name: "Olimar Dominic R. Olila", 
    position: "SECRETARY",
    image: "https://images.unsplash.com/photo-1701463387028-3947648f1337?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBhc2lhbiUyMG1hbiUyMGJ1c2luZXNzJTIwaGVhZHNob3R8ZW58MXx8fHwxNzczNTcyNzgxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
  },
  { 
    name: "Franz Lester C. Medina", 
    position: "TREASURER",
    image: "https://images.unsplash.com/photo-1552358155-515e264cb8b8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmaWxpcGlubyUyMG1hbGUlMjBwcm9mZXNzaW9uYWwlMjBwb3J0cmFpdHxlbnwxfHx8fDE3NzM1OTcxNzZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
  },
  { 
    name: "Janelle Merini P. Dingding", 
    position: "AUDITOR",
    image: "https://images.unsplash.com/photo-1638187752881-d5c27012571d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmaWxpcGlobyUyMGZlbWFsZSUyMHByb2Zlc3Npb25hbCUyMHBvcnRyYWl0fGVufDF8fHx8MTc3MzU5NzE3N3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
  },
  { 
    name: "Earl Glenniel C. Belan", 
    position: "PUBLIC RELATIONS OFFICER",
    image: "https://images.unsplash.com/photo-1701463387028-3947648f1337?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhc2lhbiUyMGVudHJlcHJlbmV1ciUyMG1hbGUlMjBwb3J0cmFpdHxlbnwxfHx8fDE3NzM1OTcxNzd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
  },
  { 
    name: "Lance Edward V. Hernandez", 
    position: "CHIEF-OF-STAFF OFFICER",
    image: "https://images.unsplash.com/photo-1603252112050-5ee77b4b4fde?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx5b3VuZyUyMGFzaWFuJTIwbWFsZSUyMHByb2Zlc3Npb25hbCUyMGhlYWRzaG90fGVufDF8fHx8MTc3MzU5NzE3NHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
  },
];

export default function CouncilMembersPage() {
  return (
    <div className="min-h-screen bg-white" style={{ fontFamily: F }}>
      <InnerHeroBanner title="Meet the Council Members" breadcrumb="About / Meet the Council Members" />

      {/* Advisers */}
      <section style={{ paddingTop: '80px', paddingBottom: '0px' }}>
        <div className="max-w-[1280px] mx-auto px-[80px]">
          {/* Section Header with Centered Red Accent Line */}
          <div className="mb-10 text-center">
            <h2 className="text-[#1A1A1A] mb-3" style={{ fontFamily: F, fontWeight: 700, fontSize: '32px', letterSpacing: '1px' }}>
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
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10" style={{ maxWidth: '640px' }}>
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
      <section className="bg-white" style={{ paddingTop: '0px', paddingBottom: '80px' }}>
        <div className="max-w-[1280px] mx-auto px-[80px]">
          {/* Section Header with Centered Red Accent Line */}
          <div className="mb-10 text-center">
            <h2 className="text-[#1A1A1A] mb-3" style={{ fontFamily: F, fontWeight: 700, fontSize: '32px', letterSpacing: '1px' }}>
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
      <section className="bg-[#AA0924]" style={{ paddingTop: '80px', paddingBottom: '80px' }}>
        <div className="max-w-[800px] mx-auto px-8 text-center">
          <h2 className="text-white mb-5" style={{ fontFamily: F, fontWeight: 700, fontSize: '32px' }}>Want to Join the Council?</h2>
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