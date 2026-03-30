import { Link } from 'react-router';
import { Users, Mail, ExternalLink, Award } from 'lucide-react';
import InnerHeroBanner from '../components/InnerHeroBanner';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';

const F = "'Poppins', sans-serif";

const boardOfPresidents = [
  {
    name: "Genna B. Cervantes",
    position: "Computer Science Society",
    image: "https://images.unsplash.com/photo-1740153204804-200310378f2f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBhc2lhbiUyMGdvbWFuJTIwc3R1ZGVudCUyMHBvcnRyYWl0fGVufDF8fHx8MTc3MzU5ODA2NXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
  },
  {
    name: "Cielo DG. Villaroman",
    position: "Society of Information Technology Enthusiasts",
    image: "https://images.unsplash.com/photo-1681070909604-f555aa006564?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmaWxpcGlubyUyMG1hbGUlMjBzdHVkZW50JTIwbGVhZGVyJTIwcG9ydHJhaXR8ZW58MXx8fHwxNzczNTk4MDY1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
  },
  {
    name: "Stacy Vhonzel U. Mesina",
    position: "Information Systems Society",
    image: "https://images.unsplash.com/photo-1758600587839-56ba05596c69?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBhc2lhbiUyMGJ1c2luZXNzd29tYW4lMjBwb3J0cmFpdHxlbnwxfHx8fDE3NzM1OTgwNjd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
  },
  {
    name: "Franky V. Parcon",
    position: "Chief Information and Automation Group - CICS",
    image: "https://images.unsplash.com/photo-1770392988936-dc3d8581e0c9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx5b3VuZyUyMGFzaWFuJTIwbWFuJTIwcHJvZmVzc2lvbmFsJTIwcG9ydHJhaXR8ZW58MXx8fHwxNzczNTk4MDY2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
  },
  {
    name: "Carl Jacob F. Mateo",
    position: "ICS Commission on Election",
    image: "https://images.unsplash.com/photo-1647763769002-189a8d2e40a3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmaWxpcGlubyUyMHdvbWFuJTIwcHJvZmVzc2lvbmFsJTIwaGVhZHNob3R8ZW58MXx8fHwxNzczNTk4MDY3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
  },
  {
    name: "Mattheus Cuan",
    position: "Pax Romana - ICS Unit",
    image: "https://images.unsplash.com/photo-1681070909604-f555aa006564?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhc2lhbiUyMG1hbGUlMjBzdHVkZW50JTIwcHJvZmVzc2lvbmFsJTIwcGhvdG98ZW58MXx8fHwxNzczNTk4MDY3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
  },
  {
    name: "Josh Kenn I. Viray",
    position: "AWS Learning Club",
    image: "https://images.unsplash.com/photo-1740153204804-200310378f2f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhc2lhbiUyMGZlbWFsZSUyMHByb2Zlc3Npb25hbCUyMHN0dWRlbnQlMjBoZWFkc2hvdHxlbnwxfHx8fDE3NzM1OTgwNjZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
  },
];

const organizationsData = [
  {
    name: "Computer Science Society",
    description: "The official organization for Computer Science students that promotes innovation, collaboration, and excellence in computing and software development.",
    image: "https://images.unsplash.com/photo-1772971919700-d75c91ca7efd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb21wdXRlciUyMHNjaWVuY2UlMjB0ZWNobm9sb2d5JTIwY29kaW5nJTIwc3R1ZGVudHN8ZW58MXx8fHwxNzczNTk4NTYxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    link: "https://www.facebook.com/USTCSS"
  },
  {
    name: "Society of Information Technology Enthusiasts",
    description: "A community of IT students passionate about technology, coding, and digital innovation, empowering members through workshops and projects.",
    image: "https://images.unsplash.com/photo-1702478475268-aa8ef54c084e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmZvcm1hdGlvbiUyMHRlY2hub2xvZ3klMjBuZXR3b3JrJTIwc2VydmVycyUyMGRhdGF8ZW58MXx8fHwxNzczNTk4NTYyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    link: "https://www.facebook.com/ustsite"
  },
  {
    name: "Information Systems Society",
    description: "An organization dedicated to developing future IT professionals skilled in both business and technology through seminars and collaborative events.",
    image: "https://images.unsplash.com/photo-1640696085101-12085802bcf3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYXRhJTIwc2NpZW5jZSUyMGFuYWx5dGljcyUyMGdyYXBocyUyMHZpc3VhbGl6YXRpb258ZW58MXx8fHwxNzczNTk4NTYyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    link: "https://www.facebook.com/UST.ISSociety"
  },
  {
    name: "CNAG - CICS",
    description: "The CICS Network Administrators’ Quarter unites aspiring network engineers, offering members hands-on experience in systems and network management.",
    image: "https://images.unsplash.com/photo-1768839721176-2fa91fdce725?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjeWJlcnNlY3VyaXR5JTIwaGFja2luZyUyMGNvZGUlMjBzZWN1cml0eXxlbnwxfHx8fDE3NzM1OTg1NjJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    link: "https://www.facebook.com/cnagics"
  },
  {
    name: "ICS Commission on Election",
    description: "The independent body that ensures fair and transparent student elections within the CICS community, upholding democratic values and integrity.",
    image: "https://images.unsplash.com/photo-1758598738339-6b1602317e52?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnYW1lJTIwZGV2ZWxvcG1lbnQlMjBnYW1pbmclMjBjb250cm9sbGVyJTIwZGlnaXRhbHxlbnwxfHx8fDE3NzM1OTg1NjN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    link: "https://www.facebook.com/USTICSComelec"
  },
  {
    name: "PAX Romana - ICS Unit",
    description: "A faith-based student organization that fosters spiritual growth, community service, and moral leadership among Thomasians in the CICS.",
    image: "https://images.unsplash.com/photo-1573164574511-73c773193279?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b21lbiUyMHRlY2hub2xvZ3klMjBjb25mZXJlbmNlJTIwZGl2ZXJzaXR5fGVufDF8fHx8MTc3MzU5ODU2M3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    link: "https://www.facebook.com/paxromanaiics"
  },
  {
    name: "AWS Learning Club",
    description: "A student-led group that explores cloud computing and AWS technologies through collaborative learning, certifications, and tech-driven initiatives.",
    image: "https://images.unsplash.com/photo-1771189956777-575006b6b145?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjB0ZWNobm9sb2d5JTIwZGlnaXRhbCUyMGlubm92YXRpb24lMjBhYnN0cmFjdHxlbnwxfHx8fDE3NzM1OTg1Njd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    link: "https://www.facebook.com/awsust"
  },
];

const organizations = [
  { name: "Association of Computing Machinery - UST Chapter", acronym: "ACM-UST", description: "The premier computing society fostering technical excellence and professional development.", focus: "Programming, Algorithms, Software Development", members: "150+ Active Members", founded: "2015", email: "acm.ust@gmail.com", achievements: ["International Collegiate Programming Contest Participant", "Annual Hackathon Organizer"] },
  { name: "UST Information Technology Society", acronym: "USTITS", description: "Dedicated to advancing IT knowledge and skills through workshops, seminars, and hands-on projects.", focus: "Web Development, Networking, IT Infrastructure", members: "120+ Active Members", founded: "2016", email: "ustits@ust.edu.ph", achievements: ["Best IT Organization 2024", "Community Tech Training Programs"] },
  { name: "Data Science and Analytics Association", acronym: "DSAA", description: "Empowering students with data-driven insights through workshops on analytics, machine learning, and AI.", focus: "Data Analytics, Machine Learning, AI", members: "80+ Active Members", founded: "2019", email: "dsaa.ust@gmail.com", achievements: ["Kaggle Competition Winners", "Research Publication in Data Science"] },
  { name: "Cybersecurity Club UST", acronym: "CyberSec", description: "Promoting awareness and expertise in cybersecurity, ethical hacking, and information security.", focus: "Cybersecurity, Ethical Hacking, Network Security", members: "65+ Active Members", founded: "2020", email: "cybersec.ust@gmail.com", achievements: ["Capture The Flag Competition Organizers", "Security Awareness Campaigns"] },
  { name: "Game Development Guild", acronym: "GDG", description: "A creative community for aspiring game developers to learn, collaborate, and build innovative games.", focus: "Game Design, Unity, Unreal Engine", members: "90+ Active Members", founded: "2017", email: "gdg.ust@gmail.com", achievements: ["Annual Game Jam Winners", "Published Mobile Games"] },
  { name: "Women in Computing UST", acronym: "WiC UST", description: "Empowering women in technology through mentorship, networking, and professional development.", focus: "Women Empowerment, Tech Career Development", members: "75+ Active Members", founded: "2018", email: "wic.ust@gmail.com", achievements: ["International Women's Day Tech Summit", "Mentorship Program"] },
];

export default function OrganizationsPage() {
  return (
    <div className="min-h-screen bg-[#F5F5F5]" style={{ fontFamily: F }}>
      <InnerHeroBanner title="CICS Organizations" breadcrumb="About / CICS Organizations" />

      {/* Board of the Presidents */}
      <section className="bg-white" style={{ paddingTop: '80px', paddingBottom: '80px' }}>
        <div className="max-w-[1280px] mx-auto px-[80px]">
          {/* Section Header - Centered with Red Accent Line Below */}
          <div className="mb-10 text-center">
            <h2 className="text-[#1A1A1A] mb-3" style={{ fontFamily: F, fontWeight: 700, fontSize: '32px', letterSpacing: '1px' }}>
              BOARD OF THE PRESIDENTS
            </h2>
            <div className="w-[104px] h-1 bg-[#AA0924] mx-auto mb-6"></div>
          </div>

          {/* Description Paragraph */}
          <div className="max-w-[900px] mx-auto text-center mb-12">
            <p className="text-[#333333]" style={{ fontFamily: F, fontSize: '15px', lineHeight: '28px' }}>
              Meet the outstanding student leaders at the helm of each CICS organization. These presidents embody excellence, leading their organizations with vision, dedication, and service to the Thomasian community.
            </p>
          </div>

          {/* Presidents Grid - 3-4 Layout (centered) */}
          <div className="flex flex-col items-center gap-8">
            {/* First Row - 3 members */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {boardOfPresidents.slice(0, 3).map((member, index) => (
                <div 
                  key={index} 
                  className="flex flex-col items-center justify-start h-full"
                  style={{ width: '280px' }}
                >
                  {/* Portrait Image - Rounded */}
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
                  <div className="text-center flex flex-col items-center justify-center">
                    <h3 className="text-[#1A1A1A] mb-1" style={{ fontFamily: F, fontWeight: 700, fontSize: '16px', lineHeight: '24px' }}>
                      {member.name}
                    </h3>
                    <p className="text-[#AA0924]" style={{ fontFamily: F, fontWeight: 400, fontSize: '13px', lineHeight: '20px', letterSpacing: '0.3px', textTransform: 'uppercase' }}>
                      {member.position}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Second Row - 4 members */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {boardOfPresidents.slice(3, 7).map((member, index) => (
                <div 
                  key={index + 3} 
                  className="flex flex-col items-center justify-start h-full"
                  style={{ width: '280px' }}
                >
                  {/* Portrait Image - Rounded */}
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
                  <div className="text-center flex flex-col items-center justify-center">
                    <h3 className="text-[#1A1A1A] mb-1" style={{ fontFamily: F, fontWeight: 700, fontSize: '16px', lineHeight: '24px' }}>
                      {member.name}
                    </h3>
                    <p className="text-[#AA0924]" style={{ fontFamily: F, fontWeight: 400, fontSize: '13px', lineHeight: '20px', letterSpacing: '0.3px', textTransform: 'uppercase' }}>
                      {member.position}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Organizations */}
      <section className="bg-[#F5F5F5]" style={{ paddingTop: '80px', paddingBottom: '80px' }}>
        <div className="max-w-[1080px] mx-auto px-[80px]">
          {/* Section Header with Centered Red Accent Line */}
          <div className="mb-16 text-center">
            <h2 className="text-[#1A1A1A] mb-3" style={{ fontFamily: F, fontWeight: 700, fontSize: '32px' }}>
              Organizations
            </h2>
            <div className="w-[104px] h-1 bg-[#AA0924] mx-auto"></div>
          </div>

          {/* Alternating Zig-Zag Layout - 7 Cards */}
          <div className="flex flex-col gap-[60px]">
            {organizationsData.map((org, index) => {
              const isEven = index % 2 === 0;
              
              return (
                <div 
                  key={index} 
                  className="grid grid-cols-1 lg:grid-cols-2 gap-0 bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
                  style={{ minHeight: '340px' }}
                >
                  {/* Image Side */}
                  <div 
                    className={`relative ${isEven ? 'lg:order-1' : 'lg:order-2'}`}
                    style={{ minHeight: '340px' }}
                  >
                    <ImageWithFallback 
                      src={org.image}
                      alt={org.name}
                      style={{ 
                        width: '100%', 
                        height: '100%', 
                        objectFit: 'cover',
                        position: 'absolute',
                        top: 0,
                        left: 0
                      }}
                    />
                    {/* Diagonal Pattern Overlay */}
                    <div 
                      className="absolute inset-0 opacity-20"
                      style={{
                        background: 'repeating-linear-gradient(45deg, #AA0924 0px, #AA0924 2px, transparent 2px, transparent 10px)'
                      }}
                    ></div>
                  </div>

                  {/* Text Side */}
                  <div 
                    className={`flex flex-col justify-center p-8 lg:p-10 ${isEven ? 'lg:order-2' : 'lg:order-1'}`}
                  >
                    <h3 className="text-[#1A1A1A] mb-4" style={{ fontFamily: F, fontWeight: 700, fontSize: '24px', lineHeight: '38px' }}>
                      {org.name}
                    </h3>
                    <p className="text-[#555555] mb-8" style={{ fontFamily: F, fontWeight: 400, fontSize: '16px', lineHeight: '28px' }}>
                      {org.description}
                    </p>
                    <div className="mt-auto">
                      <a 
                        href={org.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-[#AA0924] text-white px-8 py-3 rounded-lg hover:bg-[#880718] transition-colors flex items-center gap-2 w-fit" 
                        style={{ fontFamily: F, fontWeight: 700, fontSize: '16px' }}
                      >
                        Visit Page 
                        <span>→</span>
                      </a>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* How to Join */}
      <section className="bg-white" style={{ paddingTop: '80px', paddingBottom: '80px' }}>
        <div className="max-w-[1280px] mx-auto px-[80px]">
          {/* Section Header with Centered Red Accent Line */}
          <div className="mb-12 text-center">
            <h2 className="text-[#1A1A1A] mb-3" style={{ fontFamily: F, fontWeight: 700, fontSize: '32px' }}>
              How to join an organization
            </h2>
            <div className="w-[104px] h-1 bg-[#AA0924] mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { num: "1", title: "Choose your interest", desc: "Explore the organizations and find one that aligns with your interests." },
              { num: "2", title: "Attend orientation", desc: "Join the organization's orientation or recruitment event." },
              { num: "3", title: "Get involved", desc: "Complete membership requirements and start participating." },
            ].map((step, i) => (
              <div key={i} className="text-center">
                <div className="w-20 h-20 bg-[#AA0924] rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-white" style={{ fontFamily: F, fontWeight: 700, fontSize: '28px' }}>{step.num}</span>
                </div>
                <h3 className="text-[#1A1A1A] mb-3" style={{ fontFamily: F, fontWeight: 700, fontSize: '24px' }}>{step.title}</h3>
                <p className="text-[#555555]" style={{ fontFamily: F, fontSize: '16px', lineHeight: '26px' }}>{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}