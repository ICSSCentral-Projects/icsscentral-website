import { ArrowRight } from 'lucide-react';
import InnerHeroBanner from '../components/InnerHeroBanner';
import SectionDivider from '../components/SectionDivider';
import logo933 from "../../assets/933-logo.png";
import logoDatacamp from "../../assets/datacamp-logo.png";
import logoCICS from "../../assets/cics-logo.png";

const F = "'Poppins', sans-serif";

const programs = [
  {
    id: 1,
    title: "BS Computer Science",
    specializations: [
      "Core Computer Science",
      "Data Science",
      "Game Development"
    ],
    link: "https://www.ust.edu.ph/academics/programs/bachelor-of-science-in-computer-science/"
  },
  {
    id: 2,
    title: "BS Information Technology",
    specializations: [
      "Network and Security",
      "IT Automation",
      "Web and Mobile App Development"
    ],
    link: "https://www.ust.edu.ph/academics/programs/bachelor-of-science-in-information-technology/"
  },
  {
    id: 3,
    title: "BS Information Systems",
    specializations: [
      "Business Analytics",
      "Service Management"
    ],
    link: "https://www.ust.edu.ph/academics/programs/bachelor-of-science-in-information-systems/"
  }
];

export default function CouncilHistoryPage() {
  return (
    <div className="min-h-screen bg-white" style={{ fontFamily: F }}>
      <InnerHeroBanner title="The Council" breadcrumb="About / The Council" />

      {/* Mission Section */}
      <section className="bg-white pt-16 md:pt-20 pb-0">
        <div className="max-w-[1200px] mx-auto px-6 md:px-20">
          <div className="flex flex-col items-center text-center">
            <h2 className="text-[#1A1A1A]" style={{ fontFamily: F, fontWeight: 700, fontSize: '32px' }}>
              MISSION
            </h2>
            <div style={{ width: '104px', height: '4px', backgroundColor: '#AA0924', marginTop: '12px' }}></div>
            <p className="text-[#1A1A1A]" style={{ fontFamily: F, fontWeight: 400, fontSize: '16px', lineHeight: '1.8', marginTop: '24px' }}>
              Inspired by its model, Saint Thomas Aquinas, and its patron, Saint Vincent Ferrer, the University of Santo Tomas College of Information and Computing Sciences upholds the primacy of truth and the formation of technically competent IT professionals. It strives to nurture individuals who embody lifelong learning, social responsibility, and leadership rooted in the spirit of service, empowering them to contribute meaningfully to their fields and to society.
            </p>
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* Vision Section */}
      <section className="bg-white pt-0 pb-16 md:pb-20">
        <div className="max-w-[1200px] mx-auto px-6 md:px-20">
          <div className="flex flex-col items-center text-center">
            <h2 className="text-[#1A1A1A]" style={{ fontFamily: F, fontWeight: 700, fontSize: '32px' }}>
              VISION
            </h2>
            <div style={{ width: '104px', height: '4px', backgroundColor: '#AA0924', marginTop: '12px' }}></div>
            <p className="text-[#1A1A1A]" style={{ fontFamily: F, fontWeight: 400, fontSize: '16px', lineHeight: '1.8', marginTop: '24px' }}>
              The University of Santo Tomas College of Information and Computing Sciences envisions itself as the premier Catholic institution of higher learning for information technology education within the Asia-Pacific region. Guided by the University's rich heritage of excellence, it aims to be a leader in advancing knowledge, fostering innovation, and shaping globally competent Thomasian professionals who are equipped to meet the demands of an ever-evolving digital world.
            </p>
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="bg-[#F5F5F5] py-12">
        <div className="max-w-[1200px] mx-auto px-6 md:px-20">
          <div className="flex flex-col items-center">
            <h2 className="text-center text-[#1A1A1A]" style={{ fontFamily: F, fontWeight: 700, fontSize: '32px', letterSpacing: '0.5px' }}>
              OUR PARTNERS
            </h2>
            <div style={{ width: '104px', height: '4px', backgroundColor: '#AA0924', marginTop: '12px' }}></div>
          </div>
          <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-20 mt-10">
            <img src={logo933} alt="933 Creatives" className="h-40 md:h-56 w-auto" />
            <img src={logoDatacamp} alt="DataCamp Donates" className="h-40 md:h-56 w-auto" />
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section className="bg-white py-16 md:py-20">
        <div className="max-w-[1200px] mx-auto px-6 md:px-20">

          <div className="flex flex-col items-center text-center mb-12">
            <h2 className="text-[#1A1A1A]" style={{ fontFamily: F, fontWeight: 700, fontSize: '32px' }}>
              PROGRAMS
            </h2>
            <div style={{ width: '104px', height: '4px', backgroundColor: '#AA0924', marginTop: '12px' }}></div>
          </div>
          
          <div className="flex flex-col gap-8 md:gap-6">
            {programs.map((program) => (
              <div 
                key={program.id} 
                className="bg-white rounded-2xl overflow-hidden shadow-lg border border-[#E0E0E0] hover:shadow-2xl transition-all flex flex-col md:flex-row h-auto md:h-[280px]"
              >

                {/* Left Side - Geometric Pattern with CICS Logo (40%) */}
                <div 
                  className="relative flex-shrink-0 flex items-center justify-center w-full md:w-[40%] h-48 md:h-full" 
                  style={{ 
                    background: 'linear-gradient(135deg, #AA0924 0%, #AA0924 35%, #F4C430 35%, #F4C430 50%, #808080 50%, #808080 70%, #E0E0E0 70%)',
                    position: 'relative',
                    overflow: 'hidden',
                    padding: '12px'
                  }}
                >
                  {/* Diagonal Stripes Pattern */}
                  <div 
                    style={{
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      right: 0,
                      bottom: 0,
                      background: `
                        repeating-linear-gradient(
                          45deg,
                          transparent,
                          transparent 10px,
                          rgba(0,0,0,0.05) 10px,
                          rgba(0,0,0,0.05) 20px
                        )
                      `
                    }}
                  />
                  {/* CICS Logo - Maximized directly on geometric pattern */}
                  <img 
                    src={logoCICS} 
                    alt="UST CICS Seal" 
                    className="relative h-40 md:h-[268px] w-auto max-w-full z-10 scale-110 md:scale-100"
                  />

                </div>

                {/* Right Side - Content Area (60%) */}
                <div className="flex-1 p-6 md:p-8 flex flex-col bg-white">
                  <h3 className="text-xl md:text-2xl font-bold text-[#1A1A1A] mb-4 tracking-tight" style={{ fontFamily: F }}>

                    {program.title}
                  </h3>
                  <ul className="flex-1 space-y-2 mb-4">
                    {program.specializations.map((spec, index) => (
                      <li key={index} className="text-[#555555] flex items-start" style={{ fontFamily: F, fontSize: '16px' }}>
                        <span className="mr-2">•</span>
                        <span>{spec}</span>
                      </li>
                    ))}
                  </ul>
                  
                  {/* Button at Bottom Right */}
                  <div className="flex justify-end">
                    <a 
                      href={program.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-[#AA0924] text-white px-6 py-3 rounded-lg hover:bg-[#880718] transition-colors flex items-center gap-2"
                      style={{ fontFamily: F, fontWeight: 700, fontSize: '16px' }}
                    >
                      Visit Page
                      <ArrowRight className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}