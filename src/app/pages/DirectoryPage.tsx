import { FileText, Download, Mail, ExternalLink, MapPin } from 'lucide-react';
import InnerHeroBanner from '../components/InnerHeroBanner';

const F = "'Poppins', sans-serif";

const councilContacts = [
  { title: 'CICS Student Council', email: 'sc.cics@ust.edu.ph' },
  { title: 'Partnerships', email: 'partnerships.ustcics@gmail.com' },
  { title: 'Sponsorships', email: 'sponsorships.ustcics@gmail.com' },
];

const cicsContacts = [
  { title: 'CICS Email', email: 'cics@ust.edu.ph' },
  { title: 'SWDC', email: 'swdc.cics@ust.edu.ph' },
  { title: 'CICS Library Coordinator', email: 'library.cics@ust.edu.ph' },
  { title: 'E-Technology Support', email: 'edtech.cics@ust.edu.ph' },
  { title: 'Guidance and Counseling', email: 'cics.cco@ust.edu.ph' },
];

const documents = [
  {
    title: 'UST ICSSC Constitution of 2015',
    description: 'The governing document outlining the principles, rights, and responsibilities of the CICS student body.',
    link: 'https://drive.google.com/file/d/1GTtAhCXgfnYpYBCz-Sa6In1UYj5LsjKF/view',
  },
  {
    title: 'UST Student Handbook (Revised 2018)',
    description: 'The official university manual for academic regulations, student conduct, and Thomasian identity.',
    link: 'https://drive.google.com/file/d/1FVXtVykuX45rx3h2BoF-Nqhusmkq7TiP/view',
  },
  {
    title: 'ICSSC Partnership Primer',
    description: 'The official guide for organizations looking to collaborate with the CICS Student Council on long-term initiatives.',
    link: 'https://drive.google.com/file/d/1WHV1ymLBY6ArYlh4TvDExPz-nJf1-T96/view',
  },
  {
    title: 'ICSSC Sponsorship Primer',
    description: 'A comprehensive document detailing sponsorship packages and benefits for potential corporate partners.',
    link: 'https://drive.google.com/file/d/1hPab0y8SFTXxhzVA-P8wIYIw7VnB0lhG/view',
  },
];

export default function DirectoryPage() {
  return (
    <div className="min-h-screen bg-white" style={{ fontFamily: F }}>
      <InnerHeroBanner
        title="Directory & Documents"
        breadcrumb="Home / Directory & Documents"
        overlayOpacity={0.65}
      />

      {/* SECTION 1: CONTACT DIRECTORY */}
      <section style={{ paddingTop: '80px', paddingBottom: '80px' }}>
        <div className="max-w-[1200px] mx-auto px-[80px]">
          <div className="flex flex-col items-center mb-12">
            <h2 className="text-[#1A1A1A] text-center" style={{ fontWeight: 700, fontSize: '32px', textTransform: 'uppercase' as const }}>
              Contact Directory
            </h2>
            <div style={{ width: '104px', height: '4px', backgroundColor: '#AA0924', marginTop: '12px' }}></div>
          </div>

          {/* Council Related */}
          <div className="mb-12">
            <h3
              className="text-[#000000] mb-6"
              style={{ fontWeight: 700, fontSize: '24px', textTransform: 'uppercase' }}
            >
              Council Related
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {councilContacts.map((contact, i) => (
                <a
                  key={i}
                  href={`mailto:${contact.email}`}
                  className="bg-white rounded-lg p-6 border border-[#E0E0E0] hover:border-[#AA0924] transition-all shadow-sm hover:shadow-md cursor-pointer"
                >
                  <div className="flex items-start gap-3">
                    <Mail className="w-5 h-5 text-[#AA0924] flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="text-[#000000] mb-2" style={{ fontWeight: 600, fontSize: '16px' }}>
                        {contact.title}
                      </h4>
                      <p className="text-[#AA0924] hover:underline" style={{ fontSize: '14px', fontWeight: 400 }}>
                        {contact.email}
                      </p>
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* CICS Related */}
          <div>
            <h3
              className="text-[#000000]"
              style={{ fontWeight: 700, fontSize: '24px', textTransform: 'uppercase', marginBottom: '32px' }}
            >
              CICS Related
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {cicsContacts.map((contact, i) => (
                <a
                  key={i}
                  href={`mailto:${contact.email}`}
                  className="bg-white rounded-lg p-6 border border-[#E0E0E0] hover:border-[#AA0924] transition-all shadow-sm hover:shadow-md cursor-pointer"
                >
                  <div className="flex items-start gap-3">
                    <Mail className="w-5 h-5 text-[#AA0924] flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="text-[#000000] mb-2" style={{ fontWeight: 600, fontSize: '16px' }}>
                        {contact.title}
                      </h4>
                      <p className="text-[#AA0924] hover:underline" style={{ fontSize: '14px', fontWeight: 400 }}>
                        {contact.email}
                      </p>
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: VISIT US */}
      <section className="bg-[#F9FAFB]" style={{ paddingTop: '80px', paddingBottom: '80px' }}>
        <div className="max-w-[1200px] mx-auto px-[80px]">
          <div className="flex items-center justify-between">
            {/* Left side: icon + header + details */}
            <div className="flex items-start gap-3">
              <MapPin className="w-6 h-6 text-[#000000] flex-shrink-0 mt-1" />
              <div>
                <h2 className="text-[#000000]" style={{ fontWeight: 700, fontSize: '24px', marginBottom: '8px' }}>
                  Visit the CICS Office
                </h2>
                <div className="flex flex-col" style={{ gap: '2px' }}>
                  <p className="text-[#000000]" style={{ fontSize: '16px', fontWeight: 400 }}>
                    2nd Floor, Saint Pier Giorgio Frassati O.P., Building
                  </p>
                  <p className="text-[#000000]" style={{ fontSize: '16px', fontWeight: 400 }}>
                    Monday To Saturday - 8:00 AM To 12:00 NN & 1:00 PM To 5:00 PM
                  </p>
                  <p className="text-[#000000]" style={{ fontSize: '16px', fontWeight: 400 }}>
                    Closed On Sundays
                  </p>
                </div>
              </div>
            </div>

            {/* Right side: button */}
            <a
              href="https://maps.app.goo.gl/ijEyc26A63Hp3uAT7"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 border-2 border-[#AA0924] text-[#AA0924] bg-transparent px-6 py-3 hover:bg-black hover:border-black hover:text-white transition-colors flex-shrink-0"
              style={{ fontWeight: 600, fontSize: '15px', borderRadius: '8px', textTransform: 'uppercase' }}
            >
              VISIT LINK
            </a>
          </div>
        </div>
      </section>

      {/* SECTION 3: DOCUMENTS & FILES */}
      <section style={{ paddingTop: '80px', paddingBottom: '80px' }}>
        <div className="max-w-[1200px] mx-auto px-[80px]">
          <div className="flex flex-col items-center mb-10">
            <h2 className="text-[#1A1A1A] text-center" style={{ fontWeight: 700, fontSize: '32px', textTransform: 'uppercase' as const }}>
              Documents & Files
            </h2>
            <div style={{ width: '104px', height: '4px', backgroundColor: '#AA0924', marginTop: '12px' }}></div>
          </div>

          <div className="flex flex-col gap-6">
            {documents.map((doc, i) => (
              <div
                key={i}
                className="bg-white rounded-lg p-8 border border-[#E0E0E0] hover:border-[#AA0924] transition-all shadow-sm hover:shadow-md flex items-start justify-between gap-6"
              >
                <div className="flex items-start gap-4 flex-1">
                  <div className="w-12 h-12 bg-[#AA0924] rounded-lg flex items-center justify-center flex-shrink-0">
                    <FileText className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="text-[#000000]" style={{ fontWeight: 700, fontSize: '18px', lineHeight: '1.4', marginBottom: '4px' }}>
                      {doc.title}
                    </h4>
                    <p className="text-[#555555]" style={{ fontSize: '16px', lineHeight: '1.6', fontWeight: 400 }}>
                      {doc.description}
                    </p>
                  </div>
                </div>
                <a
                  href={doc.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-[#AA0924] text-white px-6 py-3 rounded hover:bg-[#880718] transition-colors flex-shrink-0"
                  style={{ fontWeight: 700, fontSize: '16px' }}
                >
                  <Download className="w-4 h-4" />
                  Download PDF
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}