import { useState, useEffect } from 'react';
import { Link } from 'react-router';
import { MapPin, Mail, Clock, Send, Facebook, Instagram, MessageCircle } from 'lucide-react';
import InnerHeroBanner from '../components/InnerHeroBanner';

const F = "'Poppins', sans-serif";

const faqs = [
  { question: "How can I submit a concern or complaint?", answer: "You can submit concerns through our STRAW Desk portal. We ensure all submissions are handled confidentially." },
  { question: "How do I request official documents?", answer: "Official document requests can be submitted through our FOI Portal. Processing typically takes 5-7 business days." },
  { question: "When are council office hours?", answer: "Our office is open Monday to Friday, 9:00 AM - 5:00 PM. Student advocates are available during these hours." },
  { question: "How can I join the Student Council?", answer: "Council elections are held annually at the start of each academic year. Watch for announcements on our social media." },
  { question: "Can I propose an event or initiative?", answer: "Yes! Submit your event proposal through our contact form or email us directly at sc.cics@ust.edu.ph." },
  { question: "How can I verify council announcements?", answer: "Official announcements are posted on our website and official social media accounts." },
];

export default function ContactPage() {
  const [formData, setFormData] = useState({
    category: '',
    firstName: '',
    lastName: '',
    email: '',
    inquiryCategory: '',
    message: ''
  });

  const [isInquiryCategoryOpen, setIsInquiryCategoryOpen] = useState(false);
  const [isCategoryOpen, setIsCategoryOpen] = useState(false);
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  useEffect(() => {
    if (isPopupOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isPopupOpen]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate required fields
    if (!formData.inquiryCategory || !formData.message.trim()) {
      alert('Please fill in all required fields (marked with *).');
      return;
    }
    
    setIsPopupOpen(true);
    setFormData({
      category: '',
      firstName: '',
      lastName: '',
      email: '',
      inquiryCategory: '',
      message: ''
    });
  };

  const categoryOptions = [
    { value: 'student', label: 'Student' },
    { value: 'faculty', label: 'Faculty' },
    { value: 'parent', label: 'Parent' },
    { value: 'alumni', label: 'Alumni' },
    { value: 'other', label: 'Other' },
  ];

  const inquiryCategoryOptions = [
    { value: 'general', label: 'General Inquiry' },
    { value: 'partnership', label: 'Partnership' },
    { value: 'sponsorship', label: 'Sponsorship' },
    { value: 'suggestions', label: 'Suggestions' },
    { value: 'collaboration', label: 'Project Collaboration' },
    { value: 'other', label: 'Other' },
  ];

  const inputCls = "w-full px-4 border border-[#E0E0E0] rounded focus:outline-none focus:border-[#AA0924] transition-colors";

  return (
    <div className="min-h-screen bg-[#F5F5F5]" style={{ fontFamily: F }}>
      <InnerHeroBanner title="Contact Us" breadcrumb="Contact Us" />

      {/* Contact Form & Social */}
      <section style={{ paddingTop: '80px', paddingBottom: '80px' }}>
        <div className="max-w-[1280px] mx-auto px-[80px]">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            {/* Left Side - Office Info */}
            <div className="flex flex-col">
              {/* Section Header */}
              <div className="mb-12">
                <h2 className="text-[#1A1A1A] mb-3" style={{ fontWeight: 700, fontSize: '40px', letterSpacing: '0.5px' }}>
                  REACH US THROUGH
                </h2>
                <div className="w-[80px] h-1 bg-[#AA0924]"></div>
              </div>

              {/* Visit Us Section */}
              <div className="mb-10">
                <h3 className="text-[#1A1A1A] mb-3" style={{ fontWeight: 700, fontSize: '24px' }}>Visit Us At</h3>
                <p className="text-[#1A1A1A]" style={{ fontSize: '16px', lineHeight: '26px' }}>
                  {'Rm 2005 Saint Pier Giorgio Frassati,'}<br />
                  {'O.P. Building, University Of Santo Tomas,'}<br />
                  {'Espana Boulevard, Manila Philippines'}
                </p>
              </div>

              {/* Email Section */}
              <div className="mb-10">
                <h3 className="text-[#1A1A1A] mb-3" style={{ fontWeight: 700, fontSize: '24px' }}>Send An Email To</h3>
                <a href="mailto:sc.cics@ust.edu.ph" className="text-[#1A1A1A] hover:text-[#AA0924]" style={{ fontSize: '16px' }}>
                  sc.cics@ust.edu.ph
                </a>
              </div>

              {/* Office Hours Section */}
              <div className="mb-10">
                <h3 className="text-[#1A1A1A] mb-3" style={{ fontWeight: 700, fontSize: '24px' }}>When To Contact Us</h3>
                <p className="text-[#1A1A1A]" style={{ fontSize: '16px', lineHeight: '26px' }}>
                  Monday To Saturday - 7:00 AM To 7:00 PM<br />
                  Closed On Sundays
                </p>
              </div>

              {/* Social Media */}
              <div>
                <h3 className="text-[#1A1A1A] mb-4" style={{ fontWeight: 700, fontSize: '24px' }}>Follow Our Official Pages</h3>
                <div className="flex gap-3">
                  {/* Facebook */}
                  <a href="https://www.facebook.com/usticssc" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-[#1A1A1A] rounded-full flex items-center justify-center hover:bg-[#AA0924] transition-colors">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="white" style={{ overflow: 'visible' }}>
                      <path d="M14 13.5h2.5l1-4H14v-2c0-1.03 0-2 2-2h1.5V2.14c-.326-.043-1.557-.14-2.857-.14C11.928 2 10 3.657 10 6.7v2.8H7v4h3V22h4v-8.5z" />
                    </svg>
                  </a>
                  {/* X (Twitter) */}
                  <a href="https://x.com/usticssc?lang=en" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-[#1A1A1A] rounded-full flex items-center justify-center hover:bg-[#AA0924] transition-colors">
                    <svg width="18" height="18" viewBox="0 0 300 300" fill="white" style={{ overflow: 'visible' }}>
                      <path d="M178.57 127.15 290.27 0h-26.46l-96.97 110.38L89.34 0H0l117.13 166.93L0 300.25h26.46l102.4-116.59 81.8 116.59H300L178.57 127.15zm-36.24 41.29-11.87-16.62L37.09 19.54h40.65l76.18 106.66 11.87 16.62 99.03 138.68h-40.65l-80.84-113.06z" />
                    </svg>
                  </a>
                  {/* Instagram */}
                  <a href="https://www.instagram.com/usticssc/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-[#1A1A1A] rounded-full flex items-center justify-center hover:bg-[#AA0924] transition-colors">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="white" style={{ overflow: 'visible' }}>
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                    </svg>
                  </a>
                  {/* TikTok */}
                  <a href="https://www.tiktok.com/@usticssc" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-[#1A1A1A] rounded-full flex items-center justify-center hover:bg-[#AA0924] transition-colors">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="white" style={{ overflow: 'visible' }}>
                      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>

            {/* Right Side - Contact Form */}
            <div className="bg-white rounded-lg p-10 border border-[#E0E0E0] shadow-sm">
              <form onSubmit={handleSubmit} className="flex flex-col h-full">
                <div className="space-y-5">
                  <div>
                    <label className="block text-[#000000] mb-[6px]" style={{ fontWeight: 600, fontSize: '14px', fontFamily: F }}>I am a <span className="text-[#AA0924]">*</span></label>
                    <div className="relative">
                      <button
                        type="button"
                        onClick={() => setIsCategoryOpen(!isCategoryOpen)}
                        onBlur={() => setTimeout(() => setIsCategoryOpen(false), 200)}
                        className={`w-full px-4 border h-[48px] bg-white text-left flex items-center justify-between transition-colors ${isCategoryOpen
                          ? 'border-[#AA0924] rounded-t-lg rounded-b-none'
                          : 'border-[#E0E0E0] rounded-lg hover:border-[#AA0924]'
                          }`}
                        style={{ fontSize: '14px', color: formData.category ? '#1A1A1A' : '#B0B0B0' }}
                      >
                        <span>
                          {formData.category
                            ? categoryOptions.find(opt => opt.value === formData.category)?.label
                            : 'Select Category'
                          }
                        </span>
                        <svg
                          className={`w-5 h-5 text-[#666666] transition-transform ${isCategoryOpen ? 'rotate-180' : ''}`}
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </button>

                      {/* Custom Dropdown Overlay */}
                      {isCategoryOpen && (
                        <div
                          className="absolute left-0 right-0 bg-white border border-[#AA0924] border-t-0 rounded-b-lg z-10 overflow-hidden"
                          style={{
                            boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
                            top: '100%',
                            marginTop: '-1px'
                          }}
                        >
                          {categoryOptions.map((option, index) => (
                            <button
                              key={option.value}
                              type="button"
                              onClick={() => {
                                setFormData({ ...formData, category: option.value });
                                setIsCategoryOpen(false);
                              }}
                              className={`w-full text-left px-4 text-[#1A1A1A] hover:bg-[#F9FAFB] transition-colors ${index < categoryOptions.length - 1 ? 'border-b border-[#E5E7EB]' : ''
                                }`}
                              style={{ fontSize: '14px', paddingTop: '14px', paddingBottom: '14px' }}
                            >
                              {option.label}
                            </button>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[#000000] mb-[6px]" style={{ fontWeight: 600, fontSize: '14px', fontFamily: F }}>First Name <span className="text-[#AA0924]">*</span></label>
                      <input
                        type="text"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 border border-[#E0E0E0] rounded-lg focus:outline-none focus:border-[#AA0924] transition-colors h-[48px]"
                        placeholder="First Name"
                        style={{ fontSize: '14px', paddingTop: '16px', paddingBottom: '16px' }}
                      />
                    </div>
                    <div>
                      <label className="block text-[#000000] mb-[6px]" style={{ fontWeight: 600, fontSize: '14px', fontFamily: F }}>Last Name <span className="text-[#AA0924]">*</span></label>
                      <input
                        type="text"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 border border-[#E0E0E0] rounded-lg focus:outline-none focus:border-[#AA0924] transition-colors h-[48px]"
                        placeholder="Last Name"
                        style={{ fontSize: '14px', paddingTop: '16px', paddingBottom: '16px' }}
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-[#000000] mb-[6px]" style={{ fontWeight: 600, fontSize: '14px', fontFamily: F }}>Email Address <span className="text-[#AA0924]">*</span></label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 border border-[#E0E0E0] rounded-lg focus:outline-none focus:border-[#AA0924] transition-colors h-[48px]"
                      placeholder="Email Address"
                      style={{ fontSize: '14px', paddingTop: '16px', paddingBottom: '16px' }}
                    />
                  </div>

                  <div className="relative">
                    <label className="block text-[#000000] mb-[6px]" style={{ fontWeight: 600, fontSize: '14px', fontFamily: F }}>Inquiry Category <span className="text-[#AA0924]">*</span></label>
                    <div className="relative">
                      <button
                        type="button"
                        onClick={() => setIsInquiryCategoryOpen(!isInquiryCategoryOpen)}
                        onBlur={() => setTimeout(() => setIsInquiryCategoryOpen(false), 200)}
                        className={`w-full px-4 border h-[48px] bg-white text-left flex items-center justify-between transition-colors ${isInquiryCategoryOpen
                          ? 'border-[#AA0924] rounded-t-lg rounded-b-none'
                          : 'border-[#E0E0E0] rounded-lg hover:border-[#AA0924]'
                          }`}
                        style={{ fontSize: '14px', color: formData.inquiryCategory ? '#1A1A1A' : '#B0B0B0' }}
                      >
                        <span>
                          {formData.inquiryCategory
                            ? inquiryCategoryOptions.find(opt => opt.value === formData.inquiryCategory)?.label
                            : 'Select Category'
                          }
                        </span>
                        <svg
                          className={`w-5 h-5 text-[#666666] transition-transform ${isInquiryCategoryOpen ? 'rotate-180' : ''}`}
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </button>

                      {/* Custom Dropdown Overlay */}
                      {isInquiryCategoryOpen && (
                        <div
                          className="absolute left-0 right-0 bg-white border border-[#AA0924] border-t-0 rounded-b-lg z-10 overflow-hidden"
                          style={{
                            boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
                            top: '100%',
                            marginTop: '-1px'
                          }}
                        >
                          {inquiryCategoryOptions.map((option, index) => (
                            <button
                              key={option.value}
                              type="button"
                              onClick={() => {
                                setFormData({ ...formData, inquiryCategory: option.value });
                                setIsInquiryCategoryOpen(false);
                              }}
                              className={`w-full text-left px-4 text-[#1A1A1A] hover:bg-[#F9FAFB] transition-colors ${index < inquiryCategoryOptions.length - 1 ? 'border-b border-[#E5E7EB]' : ''
                                }`}
                              style={{ fontSize: '14px', paddingTop: '14px', paddingBottom: '14px' }}
                            >
                              {option.label}
                            </button>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                </div>

                {/* Message Field - Fills remaining space */}
                <div className="flex-1 flex flex-col min-h-0 mt-5">
                  <label className="block text-[#000000] mb-[6px]" style={{ fontWeight: 600, fontSize: '14px', fontFamily: F }}>Message <span className="text-[#AA0924]">*</span></label>
                  <div className="w-full border border-[#E0E0E0] rounded-lg focus-within:border-[#AA0924] transition-colors flex-1 flex"
                    style={{ padding: '4px' }}>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      className="w-full h-full focus:outline-none resize-y bg-transparent"
                      placeholder="Message"
                      style={{ fontSize: '14px', paddingTop: '12px', paddingBottom: '12px', paddingLeft: '12px', paddingRight: '12px', color: '#1A1A1A', border: 'none' }}
                    />
                  </div>
                </div>

                {/* Submit Button - Fixed at bottom with 24px gap */}
                <button
                  type="submit"
                  className="w-full bg-[#AA0924] text-white rounded-lg hover:bg-[#880718] transition-colors h-[48px] flex items-center justify-center mt-6"
                  style={{ fontWeight: 700, fontSize: '16px' }}
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="bg-white" style={{ paddingTop: '80px', paddingBottom: '80px' }}>
        <div className="max-w-[800px] mx-auto px-8">
          <div className="text-center mb-10">
            <h2 className="text-[#1A1A1A] mb-2" style={{ fontWeight: 700, fontSize: '32px' }}>FREQUENTLY ASKED QUESTIONS</h2>
            <div className="w-20 h-1 bg-[#AA0924] mx-auto"></div>
          </div>
          <div className="space-y-3">
            {faqs.map((faq, index) => (
              <details key={index} className="bg-[#F5F5F5] rounded-lg p-5 border border-[#E0E0E0] hover:border-[#AA0924] transition-colors group">
                <summary className="cursor-pointer list-none flex items-center justify-between text-[#1A1A1A]" style={{ fontWeight: 600, fontSize: '16px' }}>
                  <span>{faq.question}</span>
                  <span className="text-[#AA0924] group-open:rotate-45 transition-transform" style={{ fontSize: '20px' }}>+</span>
                </summary>
                <p className="mt-3 text-[#555555]" style={{ fontSize: '14px', lineHeight: '22px' }}>{faq.answer}</p>
              </details>
            ))}
          </div>
          <div className="mt-10 text-center">
            <p className="text-[#555555] mb-4" style={{ fontSize: '14px' }}>Didn't find what you're looking for?</p>
            <Link to="/services/foi-portal" className="inline-block bg-[#AA0924] text-white px-7 py-3 rounded hover:bg-[#880718] transition-colors" style={{ fontWeight: 700, fontSize: '16px' }}>
              Submit a Detailed Inquiry
            </Link>
          </div>
        </div>
      </section>

      {/* Quick Links */}
      <section className="bg-[#AA0924]" style={{ paddingTop: '80px', paddingBottom: '80px' }}>
        <div className="max-w-[1280px] mx-auto px-[80px]">
          <h2 className="text-white text-center mb-8" style={{ fontWeight: 700, fontSize: '32px' }}>Other Ways to Reach Us</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { label: "STRAW Desk", desc: "For student rights and welfare concerns", path: "/services/straw-desk" },
              { label: "FOI Portal", desc: "For freedom of information requests", path: "/services/foi-portal" },
              { label: "Directory", desc: "Access documents and resources", path: "/services/directory" },
            ].map((item, i) => (
              <Link key={i} to={item.path} className="bg-white/10 rounded-lg p-6 text-white hover:bg-white/20 transition-all text-center">
                <h3 className="mb-2" style={{ fontWeight: 700, fontSize: '24px' }}>{item.label}</h3>
                <p className="text-white/80" style={{ fontSize: '14px' }}>{item.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Success Popup */}
      {isPopupOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 transition-opacity">
          <div
            className="bg-white shadow-2xl px-10 py-10 w-full max-w-[500px] text-center flex flex-col items-center transform transition-all"
            style={{ borderRadius: '24px', animation: 'scaleIn 0.2s ease-out forwards' }}
          >
            {/* Red Notch */}
            <div className="w-12 h-1 bg-[#AA0924] mb-8"></div>

            {/* Checkmark Icon */}
            <div className="w-20 h-20 bg-[#FDF2F4] rounded-full flex items-center justify-center mb-6">
              <svg className="w-10 h-10 text-[#AA0924]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
              </svg>
            </div>

            {/* Title & Body */}
            <h3 className="text-[22px] font-bold text-[#000000] mb-3" style={{ fontFamily: F }}>
              Message Submitted Successfully!
            </h3>
            <p className="text-[#666666] mb-8 px-4" style={{ fontSize: '14px', lineHeight: '1.6' }}>
              Thank you for reaching out to the ICSSC. We have received your message and will respond within 24-48 hours. Please check your email for any updates.
            </p>

            {/* Close Button */}
            <button
              onClick={() => setIsPopupOpen(false)}
              className="bg-[#AA0924] text-white py-3 px-10 rounded-lg font-bold hover:bg-[#880718] transition-colors"
              style={{ fontFamily: F, fontSize: '14px', letterSpacing: '0.5px' }}
            >
              CLOSE
            </button>
            <style>{`
              @keyframes scaleIn {
                from { opacity: 0; transform: scale(0.95); }
                to { opacity: 1; transform: scale(1); }
              }
            `}</style>
          </div>
        </div>
      )}
    </div>
  );
}