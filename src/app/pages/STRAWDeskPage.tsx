import { Info, ExternalLink, BookOpen, Heart, Scale } from 'lucide-react';
import InnerHeroBanner from '../components/InnerHeroBanner';
import imgQrCode from "../../assets/straw-qr-code.png";

const F = "'Poppins', sans-serif";

const pillars = [
  {
    icon: BookOpen,
    title: 'Academic Rights',
    desc: 'We champion fair treatment in academic matters, ensuring due process and protecting every student\'s right to a just and equitable learning environment.',
  },
  {
    icon: Heart,
    title: 'Student Welfare',
    desc: 'We prioritize mental health, safety, and overall well-being — advocating for resources, programs, and policies that support every Thomasian.',
  },
  {
    icon: Scale,
    title: 'Equal Treatment',
    desc: 'We stand firmly against all forms of discrimination and harassment, fostering an inclusive community where every voice is heard and respected.',
  },
];

export default function STRAWDeskPage() {
  return (
    <div className="min-h-screen bg-[#F5F5F5]" style={{ fontFamily: F }}>
      <InnerHeroBanner title="STRAW Desk" breadcrumb="Services / STRAW Desk" />

      {/* 2. MIDDLE SECTION — The Portal */}
      <section className="bg-white" style={{ paddingTop: '80px', paddingBottom: '80px' }}>
        <div className="max-w-[1280px] mx-auto px-[80px] flex flex-col items-center">
          {/* Heading */}
          <h2
            className="text-center"
            style={{
              fontWeight: 700,
              fontSize: '32px',
              color: '#000000',
              marginBottom: '40px',
              lineHeight: '1.3',
            }}
          >
            Access the STRAW Help Desk
          </h2>

          {/* QR Code Card */}
          <div
            style={{
              width: '320px',
              height: '320px',
              backgroundColor: '#FFFFFF',
              borderRadius: '12px',
              border: '1px solid #E5E7EB',
              boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.05)',
              padding: '24px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              marginBottom: '32px',
            }}
          >
            <img
              src={imgQrCode}
              alt="STRAW Help Desk QR Code"
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'contain',
              }}
            />
          </div>

          {/* Primary CTA Button */}
          <a
            href="https://forms.gle/N59Vq6oHHZpdoW4K6"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-3 hover:bg-[#880718] transition-colors"
            style={{
              width: '400px',
              maxWidth: '100%',
              height: '52px',
              backgroundColor: '#AA0924',
              borderRadius: '8px',
              color: '#FFFFFF',
              fontWeight: 600,
              fontSize: '16px',
              textDecoration: 'none',
              marginBottom: '12px',
            }}
          >
            SUBMIT A CONCERN VIA HELPDESK FORM
            <ExternalLink className="w-4 h-4" />
          </a>

          {/* Micro-caption */}
          <p
            className="text-center"
            style={{
              fontWeight: 400,
              fontSize: '12px',
              color: '#888888',
              lineHeight: '1.5',
            }}
          >
            Redirects to the official UST-CICS Students' Rights and Welfare Help Desk
          </p>
        </div>
      </section>

      {/* 3. BOTTOM SECTION — What We Advocate For */}
      <section className="bg-[#F5F5F5]" style={{ paddingTop: '80px', paddingBottom: '80px' }}>
        <div className="max-w-[1280px] mx-auto px-[80px]">
          {/* Section Header */}
          <div className="text-center" style={{ marginBottom: '48px' }}>
            <h2
              style={{
                fontWeight: 700,
                fontSize: '32px',
                color: '#000000',
                marginBottom: '12px',
                lineHeight: '1.3',
              }}
            >
              What We Advocate For
            </h2>
            <p
              style={{
                fontWeight: 400,
                fontSize: '16px',
                color: '#555555',
                maxWidth: '600px',
                margin: '0 auto',
                lineHeight: '1.7',
              }}
            >
              The STRAW Desk stands on three core pillars to protect and empower every CICS student.
            </p>
          </div>

          {/* Three Pillars Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {pillars.map((pillar, i) => (
              <div
                key={i}
                className="bg-white flex flex-col items-center text-center"
                style={{
                  padding: '40px 32px',
                  borderRadius: '12px',
                  boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.04)',
                }}
              >
                {/* Icon Circle */}
                <div
                  className="flex items-center justify-center"
                  style={{
                    width: '64px',
                    height: '64px',
                    borderRadius: '50%',
                    backgroundColor: '#AA0924',
                    marginBottom: '24px',
                  }}
                >
                  <pillar.icon className="w-7 h-7 text-white" strokeWidth={1.8} />
                </div>

                {/* Title */}
                <h3
                  style={{
                    fontWeight: 700,
                    fontSize: '24px',
                    color: '#1A1A1A',
                    marginBottom: '12px',
                    lineHeight: '1.3',
                  }}
                >
                  {pillar.title}
                </h3>

                {/* Description */}
                <p
                  style={{
                    fontWeight: 400,
                    fontSize: '16px',
                    color: '#555555',
                    lineHeight: '1.8',
                  }}
                >
                  {pillar.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}