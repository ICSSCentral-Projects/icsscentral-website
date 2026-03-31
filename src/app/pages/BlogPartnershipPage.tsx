import { Link } from 'react-router';
import { Calendar, User, ArrowLeft, ArrowUp } from 'lucide-react';
import InnerHeroBanner from '../components/InnerHeroBanner';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';

const F = "'Poppins', sans-serif";

const heroImage = "https://images.unsplash.com/photo-1759193530966-e64c2cfcb5db?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWNobm9sb2d5JTIwcGFydG5lcnNoaXAlMjBjb2xsYWJvcmF0aW9uJTIwdW5pdmVyc2l0eXxlbnwxfHx8fDE3NzM5NDk4ODF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral";

export default function BlogPartnershipPage() {
  return (
    <div className="min-h-screen bg-white" style={{ fontFamily: F }}>
      <InnerHeroBanner title="News & Updates" breadcrumb="Latest / News & Updates / Partnership" />

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
            Partner with the CICS Student Council
          </h1>

          {/* Hero Image */}
          <div style={{ borderRadius: '12px', overflow: 'hidden', marginBottom: '24px' }}>
            <ImageWithFallback
              src={heroImage}
              alt="CICS Technology Partnership"
              className="w-full object-cover"
              style={{ height: '420px' }}
            />
          </div>

          {/* Meta */}
          <div className="flex items-center gap-2 text-[#777777]" style={{ fontSize: '14px', fontWeight: 500, marginBottom: '48px' }}>
            <Calendar className="w-4 h-4" />
            <span>March 20, 2026</span>
            <span style={{ margin: '0 4px' }}>|</span>
            <User className="w-4 h-4" />
            <span>By UST ICSSC</span>
          </div>

          {/* Body */}
          <article>
            <p className="text-[#333] text-justify" style={{ fontSize: '16px', lineHeight: '1.6', marginBottom: '32px' }}>
              The UST College of Information and Computing Sciences Student Council (ICSSC) is officially opening its doors for external partnerships for Academic Year 2026-2027. As we continue to advance our mission of empowering the next generation of tech leaders, we invite industry partners, technology companies, and academic institutions to collaborate with us in delivering world-class programs across our three core disciplines: <strong>Computer Science</strong>, <strong>Information Technology</strong>, and <strong>Information Systems</strong>.
            </p>

            <h2 className="text-[#1A1A1A]" style={{ fontWeight: 700, fontSize: '24px', lineHeight: '1.4', marginBottom: '16px' }}>
              Why partner with ICSSC?
            </h2>
            <p className="text-[#333] text-justify" style={{ fontSize: '16px', lineHeight: '1.6', marginBottom: '24px' }}>
              The CICS community is home to over 3,000 students passionate about technology and innovation. By partnering with us, organizations gain direct access to a vibrant talent pipeline while making a meaningful impact on the academic and professional development of future tech professionals. Our partnerships are designed to be mutually beneficial — providing students with real-world exposure and partners with visibility, recruitment access, and community engagement.
            </p>

            <h2 className="text-[#1A1A1A]" style={{ fontWeight: 700, fontSize: '24px', lineHeight: '1.4', marginBottom: '16px' }}>
              Technical workshops and skills bootcamps
            </h2>
            <p className="text-[#333] text-justify" style={{ fontSize: '16px', lineHeight: '1.6', marginBottom: '24px' }}>
              We are seeking partners to co-develop and deliver hands-on technical workshops that go beyond the classroom. These workshops will cover emerging technologies and practical skills that are in high demand across the industry, including:
            </p>
            <ul className="text-[#333] text-justify list-disc pl-6" style={{ fontSize: '16px', lineHeight: '1.8', marginBottom: '32px' }}>
              <li>Full-stack web development using modern frameworks (React, Next.js, Node.js)</li>
              <li>Cloud computing and DevOps fundamentals (AWS, Azure, GCP)</li>
              <li>Mobile application development for iOS and Android</li>
              <li>Cybersecurity essentials and ethical hacking</li>
              <li>Data engineering and database management systems</li>
              <li>UI/UX design thinking and prototyping</li>
            </ul>

            <h2 className="text-[#1A1A1A]" style={{ fontWeight: 700, fontSize: '24px', lineHeight: '1.4', marginBottom: '16px' }}>
              Industry-grade tech stacks
            </h2>
            <p className="text-[#333] text-justify" style={{ fontSize: '16px', lineHeight: '1.6', marginBottom: '24px' }}>
              A key focus for AY 2026-2027 is bridging the gap between academic curricula and the tools used in professional environments. We are looking for partners who can provide students with access to industry-grade technology stacks, including:
            </p>
            <ul className="text-[#333] text-justify list-disc pl-6" style={{ fontSize: '16px', lineHeight: '1.8', marginBottom: '24px' }}>
              <li><strong>Enterprise software licenses</strong> — enabling students to train on the same platforms used by leading companies</li>
              <li><strong>Cloud credits and sandbox environments</strong> — allowing hands-on experimentation without cost barriers</li>
              <li><strong>API access and developer tools</strong> — for building real-world applications and capstone projects</li>
              <li><strong>Hardware and IoT kits</strong> — supporting embedded systems and Internet of Things coursework</li>
            </ul>
            <p className="text-[#333] text-justify" style={{ fontSize: '16px', lineHeight: '1.6', marginBottom: '32px' }}>
              Partners providing tech stack access will receive prominent branding across all ICSSC events and digital channels, as well as priority access to our annual career fair and recruitment events.
            </p>

            <h2 className="text-[#1A1A1A]" style={{ fontWeight: 700, fontSize: '24px', lineHeight: '1.4', marginBottom: '16px' }}>
              AI-driven hackathons
            </h2>
            <p className="text-[#333] text-justify" style={{ fontSize: '16px', lineHeight: '1.6', marginBottom: '24px' }}>
              Artificial intelligence continues to reshape every sector, and our students are eager to be at the forefront. For AY 2026-2027, the ICSSC is launching a series of <strong>AI-driven hackathons</strong> that challenge participants to build innovative solutions using machine learning, natural language processing, computer vision, and generative AI technologies.
            </p>
            <p className="text-[#333] text-justify" style={{ fontSize: '16px', lineHeight: '1.6', marginBottom: '24px' }}>
              We are seeking partners who can:
            </p>
            <ul className="text-[#333] text-justify list-disc pl-6" style={{ fontSize: '16px', lineHeight: '1.8', marginBottom: '24px' }}>
              <li>Sponsor hackathon prizes and provide mentorship during events</li>
              <li>Propose real-world problem statements for teams to tackle</li>
              <li>Provide compute resources and AI/ML platform access (e.g., GPU clusters, model APIs)</li>
              <li>Send industry judges and speakers to inspire participants</li>
            </ul>
            <p className="text-[#333] text-justify" style={{ fontSize: '16px', lineHeight: '1.6', marginBottom: '32px' }}>
              These hackathons will be open to students across all three CICS programs, fostering cross-disciplinary collaboration between Computer Science, IT, and Information Systems students.
            </p>

            <h2 className="text-[#1A1A1A]" style={{ fontWeight: 700, fontSize: '24px', lineHeight: '1.4', marginBottom: '16px' }}>
              Collaboration across CICS programs
            </h2>
            <p className="text-[#333] text-justify" style={{ fontSize: '16px', lineHeight: '1.6', marginBottom: '24px' }}>
              Our partnership opportunities are designed to span the full breadth of the CICS academic landscape:
            </p>
            <ul className="text-[#333] text-justify list-disc pl-6" style={{ fontSize: '16px', lineHeight: '1.8', marginBottom: '24px' }}>
              <li><strong>Computer Science</strong> — Algorithm design, AI/ML research, software engineering, and systems programming</li>
              <li><strong>Information Technology</strong> — Network administration, cybersecurity, cloud infrastructure, and IT service management</li>
              <li><strong>Information Systems</strong> — Business analytics, enterprise resource planning, data governance, and digital transformation</li>
            </ul>
            <p className="text-[#333] text-justify" style={{ fontSize: '16px', lineHeight: '1.6', marginBottom: '32px' }}>
              Whether your organization specializes in one of these areas or spans multiple disciplines, we can tailor a partnership package that aligns with your goals and our students' needs.
            </p>

            <h2 className="text-[#1A1A1A]" style={{ fontWeight: 700, fontSize: '24px', lineHeight: '1.4', marginBottom: '16px' }}>
              Get involved
            </h2>
            <p className="text-[#333] text-justify" style={{ fontSize: '16px', lineHeight: '1.6', marginBottom: '24px' }}>
              We welcome partnerships of all sizes — from one-time workshop sponsorships to year-long strategic collaborations. If your organization is interested in shaping the future of technology education and investing in the next generation of Filipino tech talent, we'd love to hear from you.
            </p>
            <p className="text-[#333] text-justify" style={{ fontSize: '16px', lineHeight: '1.6', marginBottom: '0' }}>
              Reach out to the UST ICSSC through our <Link to="/contact" className="text-[#AA0924] hover:text-[#880718] transition-colors" style={{ fontWeight: 600 }}>Contact page</Link> or email us directly at <a href="mailto:sc.cics@ust.edu.ph" className="text-[#AA0924] hover:text-[#880718] transition-colors" style={{ fontWeight: 600 }}>sc.cics@ust.edu.ph</a>. Together, let's advance CICS technology programs and empower the innovators of tomorrow.
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