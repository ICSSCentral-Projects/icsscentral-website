import { Link } from 'react-router';
import { Calendar, User, ArrowLeft, ArrowUp } from 'lucide-react';
import InnerHeroBanner from '../components/InnerHeroBanner';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';

import cics1 from "../../assets/cics-1.png";

const F = "'Poppins', sans-serif";

export default function BlogLegacyPage() {
  return (
    <div className="min-h-screen bg-white" style={{ fontFamily: F }}>
      <InnerHeroBanner title="News & Updates" breadcrumb="Latest / News & Updates / Our Legacy" />

      <div style={{ paddingTop: '60px', paddingBottom: '60px' }}>
        <div className="mx-auto" style={{ maxWidth: '800px', paddingLeft: '24px', paddingRight: '24px' }}>

          {/* Back Link */}
          <Link
            to="/blogs"
            className="inline-flex items-center gap-2 text-[#AA0924] hover:text-[#880718] transition-colors"
            style={{ fontWeight: 600, fontSize: '14px', marginBottom: '32px', display: 'inline-flex' }}
          >
            <ArrowLeft className="w-4 h-4" />
            Back to News & Updates
          </Link>

          {/* Title */}
          <h1
            className="text-[#1A1A1A]"
            style={{ fontWeight: 700, fontSize: '24px', lineHeight: '1.3', marginBottom: '24px', marginTop: '8px' }}
          >
            Our Legacy of Excellence
          </h1>

          {/* Hero Image */}
          <div style={{ borderRadius: '12px', overflow: 'hidden', marginBottom: '24px' }}>
            <ImageWithFallback
              src={cics1}
              alt="UST College of Information and Computing Sciences"
              className="w-full object-cover"
              style={{ height: '420px' }}
            />
          </div>

          {/* Meta */}
          <div className="flex items-center gap-2 text-[#777777]" style={{ fontSize: '14px', fontWeight: 500, marginBottom: '48px' }}>
            <Calendar className="w-4 h-4" />
            <span>March 14, 2018</span>
            <span style={{ margin: '0 4px' }}>|</span>
            <User className="w-4 h-4" />
            <span>By UST ICSSC</span>
          </div>

          {/* Body */}
          <article>
            <p className="text-[#333] text-justify" style={{ fontSize: '16px', lineHeight: '1.6', marginBottom: '32px' }}>
              Established in 2014, the University of Santo Tomas College of Information and Computing Sciences stands as a center of innovation and excellence in technology education. Rooted in UST's rich legacy — the oldest existing university in Asia, founded in 1611 — CICS unites Computer Science, Information Technology, and Information Systems under one forward-looking college dedicated to shaping the future of Filipino tech professionals.
            </p>

            <h2 className="text-[#1A1A1A]" style={{ fontWeight: 700, fontSize: '24px', lineHeight: '1.4', marginBottom: '16px' }}>
              The founding of CICS
            </h2>
            <p className="text-[#333] text-justify" style={{ fontSize: '16px', lineHeight: '1.6', marginBottom: '24px' }}>
              Before 2014, the computing programs at UST were housed under different faculties. Recognizing the growing demand for specialized technology education and the need for a dedicated academic unit, the university administration established the College of Information and Computing Sciences as an independent college. This move consolidated the Bachelor of Science in Computer Science, Bachelor of Science in Information Technology, and Bachelor of Science in Information Systems programs under a single, cohesive academic body.
            </p>
            <p className="text-[#333] text-justify" style={{ fontSize: '16px', lineHeight: '1.6', marginBottom: '32px' }}>
              The founding of CICS marked a pivotal moment in UST's history — a clear signal that the university was committed to producing world-class graduates who could compete in the rapidly evolving global technology landscape.
            </p>

            <h2 className="text-[#1A1A1A]" style={{ fontWeight: 700, fontSize: '24px', lineHeight: '1.4', marginBottom: '16px' }}>
              Three programs, one vision
            </h2>
            <p className="text-[#333] text-justify" style={{ fontSize: '16px', lineHeight: '1.6', marginBottom: '24px' }}>
              What makes CICS unique is the synergy between its three core programs, each addressing a critical dimension of the technology industry:
            </p>
            <ul className="text-[#333] text-justify list-disc pl-6" style={{ fontSize: '16px', lineHeight: '1.8', marginBottom: '24px' }}>
              <li><strong>Computer Science</strong> — Focuses on the theoretical foundations of computing, algorithm design, artificial intelligence, software engineering, and systems programming. CS graduates are equipped to push the boundaries of what technology can achieve.</li>
              <li><strong>Information Technology</strong> — Centers on the practical application of technology in organizations, covering network administration, cybersecurity, cloud infrastructure, web and mobile development, and IT service management. IT graduates are the builders and administrators who keep digital systems running.</li>
              <li><strong>Information Systems</strong> — Bridges the gap between technology and business, encompassing enterprise resource planning, data governance, business analytics, digital transformation, and IT project management. IS graduates are the strategic thinkers who align technology with organizational goals.</li>
            </ul>
            <p className="text-[#333] text-justify" style={{ fontSize: '16px', lineHeight: '1.6', marginBottom: '32px' }}>
              Together, these three programs produce well-rounded graduates who understand not just how to build technology, but how to apply it meaningfully and manage it strategically.
            </p>

            <h2 className="text-[#1A1A1A]" style={{ fontWeight: 700, fontSize: '24px', lineHeight: '1.4', marginBottom: '16px' }}>
              A tradition of academic excellence
            </h2>
            <p className="text-[#333] text-justify" style={{ fontSize: '16px', lineHeight: '1.6', marginBottom: '24px' }}>
              Since its founding, CICS has consistently produced top-performing graduates in national licensure examinations and industry certifications. The college's faculty comprises a mix of seasoned academics and industry practitioners, ensuring that students receive both rigorous theoretical grounding and practical, real-world insights.
            </p>
            <p className="text-[#333] text-justify" style={{ fontSize: '16px', lineHeight: '1.6', marginBottom: '32px' }}>
              CICS students have represented UST in numerous national and international competitions, bringing home awards in hackathons, programming contests, research conferences, and innovation challenges. This competitive spirit is nurtured through a curriculum that emphasizes both individual excellence and collaborative problem-solving.
            </p>

            <h2 className="text-[#1A1A1A]" style={{ fontWeight: 700, fontSize: '24px', lineHeight: '1.4', marginBottom: '16px' }}>
              The role of the CICS Student Council
            </h2>
            <p className="text-[#333] text-justify" style={{ fontSize: '16px', lineHeight: '1.6', marginBottom: '24px' }}>
              At the heart of the CICS student community is the ICSSC — the official student governing body that represents the voice of every CICS student. The student council plays a vital role in organizing academic events, advocacy campaigns, community outreach programs, and co-curricular activities that enrich the student experience beyond the classroom.
            </p>
            <p className="text-[#333] text-justify" style={{ fontSize: '16px', lineHeight: '1.6', marginBottom: '32px' }}>
              From the annual CICS Week celebration to mental health awareness campaigns, leadership training programs, and technology summits, the ICSSC has been instrumental in building a vibrant, inclusive, and forward-thinking student community. The council's commitment to service, innovation, and student welfare reflects the core values that define CICS as a college.
            </p>

            <h2 className="text-[#1A1A1A]" style={{ fontWeight: 700, fontSize: '24px', lineHeight: '1.4', marginBottom: '16px' }}>
              Innovation and industry partnerships
            </h2>
            <p className="text-[#333] text-justify" style={{ fontSize: '16px', lineHeight: '1.6', marginBottom: '24px' }}>
              CICS has established partnerships with leading technology companies and organizations, providing students with access to industry-grade tools, internship opportunities, and mentorship from practicing professionals. These partnerships ensure that the college's curriculum remains aligned with industry demands and that students graduate with skills that are immediately applicable in the workplace.
            </p>
            <p className="text-[#333] text-justify" style={{ fontSize: '16px', lineHeight: '1.6', marginBottom: '32px' }}>
              The college also encourages faculty and student research in emerging areas such as artificial intelligence, data science, cybersecurity, and cloud computing, contributing to the broader body of knowledge in information and computing sciences.
            </p>

            <h2 className="text-[#1A1A1A]" style={{ fontWeight: 700, fontSize: '24px', lineHeight: '1.4', marginBottom: '16px' }}>
              Looking to the future
            </h2>
            <p className="text-[#333] text-justify" style={{ fontSize: '16px', lineHeight: '1.6', marginBottom: '24px' }}>
              As CICS approaches its second decade, the college continues to evolve and adapt to the changing landscape of technology education. Plans for the coming years include expanded laboratory facilities, new specialization tracks in AI and cybersecurity, deeper industry partnerships, and a growing emphasis on research and innovation.
            </p>
            <p className="text-[#333] text-justify" style={{ fontSize: '16px', lineHeight: '1.6', marginBottom: '0' }}>
              The legacy of excellence that CICS has built over the past decade is not just a testament to the past — it is a foundation for the future. With a community of dedicated faculty, passionate students, and an ever-growing network of alumni and industry partners, the UST College of Information and Computing Sciences is poised to remain at the forefront of technology education in the Philippines and beyond.
            </p>
          </article>

          {/* Scroll to Top */}
          <div className="flex justify-center" style={{ marginTop: '60px', marginBottom: '0' }}>
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="inline-flex items-center gap-2 text-[#AA0924] hover:text-[#880718] transition-colors cursor-pointer bg-transparent border-none"
              style={{ fontWeight: 700, fontSize: '14px', textTransform: 'uppercase' }}
            >
              SCROLL BACK TO TOP
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}