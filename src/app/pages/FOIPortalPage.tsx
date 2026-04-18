import { useState, useEffect } from 'react';
import { submitFOIRequest, getFOIRequests, type FOIRequestItem } from '../../lib/strapiApi';
import { Search, Plus, Info, Check, Clock, FileText, Eye, ArrowLeft, X, ChevronDown, Send, Zap, CheckCircle } from 'lucide-react';
import InnerHeroBanner from '../components/InnerHeroBanner';

/* FOI Portal Page — ICSSC */
const F = "'Poppins', sans-serif";

type TabKey = 'all' | 'successful' | 'pending' | 'denied';
type ViewMode = 'list' | 'detail';

interface FOIRequest {
  id: string;
  refId: string;
  title: string;
  publishedDate: string;
  requestedBy: string;
  affiliation: string;
  purpose: string;
  trackingNo: string;
  status: 'successful' | 'pending' | 'denied';
  denialReason?: string;
}

const tabs: { key: TabKey; label: string }[] = [
  { key: 'all', label: 'ALL REQUESTS' },
  { key: 'successful', label: 'SUCCESSFUL REQUESTS' },
  { key: 'pending', label: 'PROCESSING REQUESTS' },
  { key: 'denied', label: 'UNSUCCESSFUL REQUESTS' },
];

const statusColors: Record<string, { bg: string; text: string; label: string }> = {
  successful: { bg: '#ECFDF5', text: '#065F46', label: 'Successful' },
  pending: { bg: '#FFF8E1', text: '#92400E', label: 'Pending' },
  denied: { bg: '#FEF2F2', text: '#991B1B', label: 'Denied' },
};

const getTrackerSteps = (status: string) => {
  switch (status) {
    case 'successful':
      return [
        { label: 'Submitted', completed: true },
        { label: 'Under Review', completed: true },
        { label: 'Processing', completed: true },
        { label: 'Approved', completed: true },
        { label: 'Released', completed: true },
      ];
    case 'denied':
      return [
        { label: 'Submitted', completed: true },
        { label: 'Under Review', completed: true },
        { label: 'Denied', completed: true },
        { label: 'Approved', completed: false },
        { label: 'Released', completed: false },
      ];
    default:
      return [
        { label: 'Submitted', completed: true },
        { label: 'Under Review', completed: true },
        { label: 'Processing', completed: true },
        { label: 'Approved', completed: false },
        { label: 'Released', completed: false },
      ];
  }
};

const getStatusLog = (req: FOIRequest) => {
  const logs = [
    { date: 'March 05, 2026 — 9:14 AM', text: `Request submitted. Reference number ${req.refId} assigned.` },
    { date: 'March 06, 2026 — 10:30 AM', text: 'Request received and forwarded to the CICS Finance Committee for review.' },
    { date: 'March 08, 2026 — 2:45 PM', text: 'Documentation verified. Request is now being processed by the Student Council Treasurer.' },
  ];
  if (req.status === 'successful') {
    logs.push(
      { date: 'March 10, 2026 — 10:00 AM', text: 'Request approved by the CICS Student Council.' },
      { date: req.publishedDate + ' — 12:00 PM', text: 'Requested document has been released and is now available.' },
    );
  }
  if (req.status === 'denied') {
    logs.push({ date: 'March 10, 2026 — 10:00 AM', text: `Request denied. ${req.denialReason || 'Please contact the STRAW Desk for more information.'}` });
  }
  return logs.reverse();
};

const affiliationOptions = [
  'Select Affiliation',
  'UST Student',
  'UST Faculty/Staff',
  'Alumni',
  'Organization',
  'External (Non-Thomasian)',
];

const categoryOptions = [
  'Select Category',
  'Academic',
  'Financial',
  'Facilities',
  'Events',
  'Others',
];

/* ─── FOI Request Form Modal ─── */
function FOIRequestModal({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    affiliation: '',
    email: '',
    mobile: '',
    category: '',
    document: '',
    reason: '',
    file: null as File | null,
  });
  const [affiliationOpen, setAffiliationOpen] = useState(false);
  const [categoryOpen, setCategoryOpen] = useState(false);
  const [mobileError, setMobileError] = useState('');
  const [mobileTouched, setMobileTouched] = useState(false);
  const [emailError, setEmailError] = useState('');
  const [emailTouched, setEmailTouched] = useState(false);
  const [fileError, setFileError] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const resetForm = () => {
    setForm({ firstName: '', lastName: '', affiliation: '', email: '', mobile: '', category: '', document: '', reason: '', file: null });
    setAffiliationOpen(false);
    setCategoryOpen(false);
    setMobileError('');
    setMobileTouched(false);
    setEmailError('');
    setEmailTouched(false);
    setFileError('');
    setSubmitted(false);
  };

  const handleClose = () => {
    resetForm();
    onClose();
  };

  // Lock body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  if (!isOpen) return null;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
    if (name === 'email' && emailTouched) {
      validateEmail(value);
    }
  };

  const handleMobileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const raw = e.target.value.replace(/\D/g, '');
    if (raw.length <= 10) {
      setForm({ ...form, mobile: raw });
      if (mobileTouched) validateMobile(raw);
    }
  };

  const validateMobile = (number: string) => {
    if (!number) {
      setMobileError('');
      return true;
    }
    if (!number.startsWith('9')) {
      setMobileError('Number must start with 9');
      return false;
    }
    setMobileError('');
    return true;
  };

  const validateEmail = (email: string) => {
    if (!email) {
      setEmailError('');
      return true;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setEmailError('Please enter a valid email address');
      return false;
    }
    setEmailError('');
    return true;
  };

  const handleMobileBlur = () => {
    setMobileTouched(true);
    validateMobile(form.mobile);
  };

  const handleEmailBlur = () => {
    setEmailTouched(true);
    validateEmail(form.email);
  };

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setMobileTouched(true);
    setEmailTouched(true);
    const mobileValid = validateMobile(form.mobile);
    const emailValid = validateEmail(form.email);
    if (!mobileValid || !emailValid) return;

    setIsSubmitting(true);
    setSubmitError('');
    try {
      await submitFOIRequest(form);
      setSubmitted(true);
    } catch (err) {
      console.error('FOI submission failed:', err);
      setSubmitError('Submission failed. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const validateFile = (file: File): boolean => {
    if (file.type !== 'application/pdf') {
      setFileError('Only PDF files under 5MB are accepted.');
      return false;
    }
    if (file.size > 5 * 1024 * 1024) {
      setFileError('Only PDF files under 5MB are accepted.');
      return false;
    }
    setFileError('');
    return true;
  };

  const handleFileDrop = (e: React.DragEvent) => {
    e.preventDefault();
    const file = e.dataTransfer.files?.[0];
    if (file) {
      if (validateFile(file)) {
        setForm({ ...form, file });
      }
    }
  };

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      if (validateFile(file)) {
        setForm({ ...form, file });
      }
    }
    e.target.value = '';
  };

  const inputStyle: React.CSSProperties = {
    width: '100%',
    height: '48px',
    padding: '0 16px',
    border: '1px solid #E5E7EB',
    borderRadius: '8px',
    fontSize: '14px',
    fontFamily: F,
    color: '#000000',
    outline: 'none',
    backgroundColor: '#FFFFFF',
  };

  const labelStyle: React.CSSProperties = {
    display: 'block',
    fontWeight: 600,
    fontSize: '14px',
    color: '#000000',
    marginBottom: '6px',
    fontFamily: F,
  };

  const hasMobileError = mobileTouched && mobileError;
  const hasEmailError = emailTouched && emailError;

  /* Dropdown renderer */
  const renderDropdown = (
    label: string,
    value: string,
    isOpenState: boolean,
    setOpen: (v: boolean) => void,
    options: string[],
    fieldName: string,
    required = true,
  ) => (
    <div style={{ marginBottom: '16px' }}>
      <label style={labelStyle}>{label} {required && <span style={{ color: '#AA0924' }}>*</span>}</label>
      <div
        style={{
          border: isOpenState ? '1.5px solid #AA0924' : '1px solid #E5E7EB',
          borderRadius: '8px',
          backgroundColor: '#FFFFFF',
          overflow: 'hidden',
          transition: 'border-color 0.15s ease',
        }}
      >
        {/* Trigger */}
        <button
          type="button"
          onClick={() => { setOpen(!isOpenState); }}
          className="flex items-center justify-between w-full text-left"
          style={{
            width: '100%',
            height: '48px',
            padding: '0 16px',
            fontSize: '14px',
            fontFamily: F,
            cursor: 'pointer',
            color: value ? '#000000' : '#9CA3AF',
            border: 'none',
            background: 'transparent',
          }}
        >
          <span>{value || options[0]}</span>
          <ChevronDown
            className="w-4 h-4 transition-transform"
            style={{
              color: '#9CA3AF',
              transform: isOpenState ? 'rotate(180deg)' : 'rotate(0deg)',
            }}
          />
        </button>

        {/* Expanded options — inside the same container */}
        {isOpenState && (
          <div>
            {options.slice(1).map((opt) => (
              <button
                key={opt}
                type="button"
                className="w-full text-left hover:bg-[#FFF0F2] transition-colors"
                style={{
                  padding: '14px 16px',
                  fontSize: '14px',
                  fontFamily: F,
                  color: value === opt ? '#AA0924' : '#1A1A1A',
                  fontWeight: value === opt ? 600 : 500,
                  border: 'none',
                  borderTop: '1px solid #E5E7EB',
                  background: 'transparent',
                  cursor: 'pointer',
                  display: 'block',
                  width: '100%',
                }}
                onClick={() => { setForm({ ...form, [fieldName]: opt }); setOpen(false); }}
              >
                {opt}
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center"
      style={{ backgroundColor: 'rgba(0, 0, 0, 0.50)' }}
      onClick={(e) => { if (e.target === e.currentTarget) handleClose(); }}
    >
      <div
        className="relative flex flex-col w-full md:w-[600px] h-full md:h-auto md:max-h-[85vh] bg-white rounded-none md:rounded-2xl shadow-2xl overflow-hidden"
        style={{ fontFamily: F }}
      >
        {/* ── Fixed Header ── */}
        {!submitted && (
        <div className="shrink-0 p-6 md:p-8 border-b border-[#E0E0E0]">
          <div className="flex items-start justify-between">
            <div>
              <h2
                style={{
                  fontWeight: 700,
                  fontSize: '24px',
                  color: '#000000',
                  fontFamily: F,
                  lineHeight: '1.2',
                  marginBottom: '10px',
                }}
              >
                FOI Request Form
              </h2>
              {/* Red accent bar — partial width */}
              <div style={{ width: '60px', height: '4px', backgroundColor: '#AA0924' }} />
            </div>
            <button
              onClick={handleClose}
              className="flex items-center justify-center hover:bg-[#F3F4F6] transition-colors"
              style={{
                width: '36px',
                height: '36px',
                borderRadius: '50%',
                border: 'none',
                background: 'transparent',
                cursor: 'pointer',
                marginTop: '-4px',
              }}
            >
              <X className="w-5 h-5" style={{ color: '#9CA3AF' }} />
            </button>
          </div>
        </div>
        )}

        {submitted ? (
          /* ── Success State ── */
          <div
            className="flex-1 flex flex-col items-center justify-center"
            style={{ padding: '48px 32px', textAlign: 'center' }}
          >
            {/* Centered red accent bar */}
            <div style={{ width: '60px', height: '4px', backgroundColor: '#AA0924', marginBottom: '32px' }} />
            <div
              className="flex items-center justify-center"
              style={{
                width: '80px',
                height: '80px',
                borderRadius: '50%',
                backgroundColor: '#ECFDF5',
                marginBottom: '24px',
              }}
            >
              <Check className="w-10 h-10" style={{ color: '#28A745' }} strokeWidth={3} />
            </div>
            <h3
              style={{
                fontWeight: 700,
                fontSize: '22px',
                color: '#000000',
                fontFamily: F,
                marginBottom: '12px',
                lineHeight: '1.3',
              }}
            >
              Request Submitted Successfully!
            </h3>
            <p
              style={{
                fontSize: '14px',
                fontFamily: F,
                fontWeight: 400,
                color: '#6B7280',
                lineHeight: '1.7',
                maxWidth: '400px',
                marginBottom: '40px',
                textAlign: 'center',
              }}
            >
              Your request has been sent to the ICSSC. Please check your email for the reference number and further updates.
            </p>
            <button
              onClick={handleClose}
              className="hover:opacity-90 transition-opacity"
              style={{
                height: '48px',
                padding: '0 40px',
                backgroundColor: '#AA0924',
                borderRadius: '8px',
                border: 'none',
                color: '#FFFFFF',
                fontWeight: 700,
                fontSize: '16px',
                fontFamily: F,
                cursor: 'pointer',
              }}
            >
              CLOSE
            </button>
          </div>
        ) : (
          <>
        {/* ── Scrollable Body ── */}
        <div className="flex-1 overflow-y-auto p-6 md:p-8">
          <form id="foi-form" onSubmit={handleSubmit}>
            {/* First Name / Last Name */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <div>
                <label style={labelStyle}>First Name <span style={{ color: '#AA0924' }}>*</span></label>
                <input
                  type="text"
                  name="firstName"
                  value={form.firstName}
                  onChange={handleChange}
                  placeholder="First Name"
                  required
                  style={inputStyle}
                  onFocus={(e) => (e.target.style.borderColor = '#AA0924')}
                  onBlur={(e) => (e.target.style.borderColor = '#E5E7EB')}
                />
              </div>
              <div>
                <label style={labelStyle}>Last Name <span style={{ color: '#AA0924' }}>*</span></label>
                <input
                  type="text"
                  name="lastName"
                  value={form.lastName}
                  onChange={handleChange}
                  placeholder="Last Name"
                  required
                  style={inputStyle}
                  onFocus={(e) => (e.target.style.borderColor = '#AA0924')}
                  onBlur={(e) => (e.target.style.borderColor = '#E5E7EB')}
                />
              </div>
            </div>

            {/* Affiliation Dropdown */}
            {renderDropdown('Affiliation', form.affiliation, affiliationOpen, setAffiliationOpen, affiliationOptions, 'affiliation')}

            {/* Email */}
            <div style={{ marginBottom: '16px' }}>
              <label style={labelStyle}>Email Address <span style={{ color: '#AA0924' }}>*</span></label>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="Email Address"
                required
                style={{
                  ...inputStyle,
                  borderColor: hasEmailError ? '#AA0924' : '#E5E7EB',
                }}
                onFocus={(e) => (e.target.style.borderColor = '#AA0924')}
                onBlur={(e) => { e.target.style.borderColor = '#E5E7EB'; handleEmailBlur(); }}
              />
              {hasEmailError && (
                <p style={{ color: '#AA0924', fontSize: '12px', fontFamily: F, fontWeight: 400, marginTop: '6px' }}>
                  {emailError}
                </p>
              )}
            </div>

            {/* Mobile Number */}
            <div style={{ marginBottom: '16px' }}>
              <label style={labelStyle}>Mobile Number <span style={{ color: '#AA0924' }}>*</span></label>
              <div
                className="flex items-center"
                style={{
                  width: '100%',
                  height: '48px',
                  border: `1px solid ${hasMobileError ? '#AA0924' : '#E5E7EB'}`,
                  borderRadius: '8px',
                  backgroundColor: '#FFFFFF',
                  transition: 'border-color 0.15s ease',
                }}
              >
                <span
                  style={{
                    padding: '0 14px 0 16px',
                    fontFamily: F,
                    fontWeight: 400,
                    fontSize: '14px',
                    color: '#6B7280',
                    userSelect: 'none',
                    flexShrink: 0,
                    lineHeight: '48px',
                  }}
                >
                  +63
                </span>
                <div style={{ width: '1px', height: '26px', backgroundColor: '#D1D5DB', flexShrink: 0 }} />
                <input
                  type="tel"
                  name="mobile"
                  value={form.mobile}
                  onChange={handleMobileChange}
                  placeholder="9XX XXX XXXX"
                  required
                  style={{
                    flex: 1,
                    height: '100%',
                    padding: '0 16px 0 14px',
                    border: 'none',
                    outline: 'none',
                    fontSize: '14px',
                    fontFamily: F,
                    color: '#000000',
                    backgroundColor: 'transparent',
                    borderRadius: '0 8px 8px 0',
                  }}
                  onBlur={handleMobileBlur}
                />
              </div>
              {/* Always-visible helper / error */}
              {hasMobileError && (
                <p style={{ color: '#AA0924', fontSize: '12px', fontFamily: F, fontWeight: 400, marginTop: '6px' }}>
                  {mobileError}
                </p>
              )}
            </div>

            {/* Category Dropdown */}
            {renderDropdown('Category', form.category, categoryOpen, setCategoryOpen, categoryOptions, 'category')}

            {/* Document Needed */}
            <div style={{ marginBottom: '16px' }}>
              <label style={labelStyle}>Document Needed <span style={{ color: '#AA0924' }}>*</span></label>
              <div
                className="w-full transition-colors flex"
                style={{
                  border: '1px solid #E5E7EB',
                  borderRadius: '8px',
                  backgroundColor: '#FFFFFF',
                  padding: '4px',
                }}
                onFocus={(e) => (e.currentTarget.style.borderColor = '#AA0924')}
                onBlur={(e) => (e.currentTarget.style.borderColor = '#E5E7EB')}
              >
                <textarea
                  name="document"
                  value={form.document}
                  onChange={handleChange}
                  placeholder="Describe the specific document or information you are requesting..."
                  required
                  rows={3}
                  className="w-full flex-1 outline-none focus:outline-none"
                  style={{
                    fontSize: '14px',
                    fontFamily: F,
                    color: '#000000',
                    backgroundColor: 'transparent',
                    border: 'none',
                    height: 'auto',
                    padding: '10px 12px',
                    resize: 'vertical',
                    minHeight: '80px',
                  }}
                />
              </div>
            </div>

            {/* Reason for Requesting */}
            <div style={{ marginBottom: '20px' }}>
              <label style={labelStyle}>Reason for Requesting <span style={{ color: '#AA0924' }}>*</span></label>
              <div
                className="w-full transition-colors flex"
                style={{
                  border: '1px solid #E5E7EB',
                  borderRadius: '8px',
                  backgroundColor: '#FFFFFF',
                  padding: '4px',
                }}
                onFocus={(e) => (e.currentTarget.style.borderColor = '#AA0924')}
                onBlur={(e) => (e.currentTarget.style.borderColor = '#E5E7EB')}
              >
                <textarea
                  name="reason"
                  value={form.reason}
                  onChange={handleChange}
                  placeholder="Please describe the purpose and reason for your request..."
                  required
                  rows={4}
                  className="w-full flex-1 outline-none focus:outline-none"
                  style={{
                    fontSize: '14px',
                    fontFamily: F,
                    color: '#000000',
                    backgroundColor: 'transparent',
                    border: 'none',
                    height: 'auto',
                    padding: '10px 12px',
                    resize: 'vertical',
                    minHeight: '102px',
                  }}
                />
              </div>
            </div>

            {/* Supporting Document Upload */}
            <div>
              <label style={{ ...labelStyle, fontWeight: 600 }}>
                Supporting Document / Request Letter <span style={{ color: '#9CA3AF', fontWeight: 400 }}>(Optional)</span>
              </label>
              <div
                onDragOver={(e) => e.preventDefault()}
                onDrop={handleFileDrop}
                style={{
                  border: '2px dashed #D1D5DB',
                  borderRadius: '8px',
                  padding: '24px',
                  textAlign: 'center',
                  cursor: 'pointer',
                  backgroundColor: '#FAFAFA',
                  transition: 'border-color 0.15s ease',
                }}
                onClick={() => document.getElementById('foi-file-input')?.click()}
                onMouseEnter={(e) => (e.currentTarget.style.borderColor = '#AA0924')}
                onMouseLeave={(e) => (e.currentTarget.style.borderColor = '#D1D5DB')}
              >
                <input
                  id="foi-file-input"
                  type="file"
                  accept=".pdf"
                  onChange={handleFileSelect}
                  style={{ display: 'none' }}
                />
                {form.file ? (
                  <div className="flex items-center justify-center gap-2">
                    <FileText className="w-5 h-5" style={{ color: '#AA0924' }} />
                    <span style={{ fontSize: '14px', fontFamily: F, fontWeight: 500, color: '#000' }}>{form.file.name}</span>
                    <button
                      type="button"
                      onClick={(e) => { e.stopPropagation(); setForm({ ...form, file: null }); }}
                      className="hover:bg-[#F3F4F6] transition-colors"
                      style={{ background: 'none', border: 'none', cursor: 'pointer', marginLeft: '4px', borderRadius: '50%', width: '24px', height: '24px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
                    >
                      <X className="w-4 h-4" style={{ color: '#9CA3AF' }} />
                    </button>
                  </div>
                ) : (
                  <>
                    <Plus className="w-6 h-6 mx-auto" style={{ color: '#9CA3AF', marginBottom: '8px' }} />
                    <p style={{ fontSize: '14px', fontFamily: F, color: '#6B7280', marginBottom: '4px' }}>
                      Drag & drop a file here, or <span style={{ color: '#AA0924', fontWeight: 600 }}>browse</span>
                    </p>
                    <p style={{ fontSize: '12px', fontFamily: F, color: '#9CA3AF' }}>
                      PDF only (Max 5MB)
                    </p>
                  </>
                )}
              </div>
              {fileError && (
                <p style={{ color: '#AA0924', fontSize: '12px', fontFamily: F, fontWeight: 400, marginTop: '6px' }}>
                  {fileError}
                </p>
              )}
            </div>
          </form>
        </div>

        {/* ── Fixed Footer (80px) ── */}
        <div className="shrink-0 h-20 px-6 md:px-8 border-t border-[#E0E0E0] flex items-center">
         {submitError && (
                  <p style={{ color: '#AA0924', fontSize: '13px', marginBottom: '8px' }}>
                    {submitError}
                  </p>
                )}
                <button
                  type="submit"
                  form="foi-form"
                  disabled={isSubmitting}
                  className="hover:bg-[#880718] transition-colors"
                  style={{
                    height: '48px',
                    padding: '0 36px',
                    backgroundColor: '#AA0924',
                    borderRadius: '8px',
                    border: 'none',
                    color: '#FFFFFF',
                    fontWeight: 700,
                    fontSize: '16px',
                    fontFamily: F,
                    cursor: isSubmitting ? 'not-allowed' : 'pointer',
                    opacity: isSubmitting ? 0.6 : 1,
                  }}
                >
                  {isSubmitting ? 'Submitting...' : 'SUBMIT REQUEST'}
                </button>
        )}
      </div>
    </div>
  );
}

/* ─── Main Page ─── */


function useFOIRequests() {
  const [requests, setRequests] = useState<FOIRequest[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  const load = async () => {
    setLoading(true);
    setError('');
    try {
      const data = await getFOIRequests();
      setRequests(
        data.map((item: FOIRequestItem) => ({
          id: String(item.id),
          refId: item.refId,
          title: item.foi_title,
          publishedDate: item.publishedDate
            ? new Date(item.publishedDate).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
              })
            : '',
          requestedBy: item.requestedBy,
          affiliation: item.foi_affiliation,
          purpose: item.foi_purpose,
          trackingNo: item.trackingNo,
          status: item.foi_status,
          denialReason: item.denialReason,
        }))
      );
    } catch (err) {
      console.error('Failed to load FOI requests:', err);
      setError('Unable to load requests. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => { load(); }, []);

  return { requests, loading, error, reload: load };
}



export default function FOIPortalPage() {
  const [activeTab, setActiveTab] = useState<TabKey>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [viewMode, setViewMode] = useState<ViewMode>('list');
  const [selectedRequest, setSelectedRequest] = useState<FOIRequest | null>(null);
  const { requests, loading, error } = useFOIRequests();
  const [modalOpen, setModalOpen] = useState(false);

  const filteredRequests = requests.filter((req) => {
    const matchesTab = activeTab === 'all' || req.status === activeTab;
    const matchesSearch =
      req.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      req.trackingNo.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesTab && matchesSearch;
  });

  const handleViewStatus = (req: FOIRequest) => {
    setSelectedRequest(req);
    setViewMode('detail');
  };

  const handleBackToList = () => {
    setViewMode('list');
    setSelectedRequest(null);
  };

  return (
    <div className="min-h-screen bg-[#F5F5F5]" style={{ fontFamily: F }}>
      <InnerHeroBanner title="FOI Portal" breadcrumb="Services / FOI Portal" />

      {/* ── Modal ── */}
      <FOIRequestModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />

      {viewMode === 'list' ? (
        <>
          {/* ═══ 1. SEARCH & NAVIGATION AREA ═══ */}
          <section className="bg-white pt-10 md:pt-20 pb-0">
            <div className="max-w-[1280px] mx-auto px-6 md:px-20">
              {/* Search Row */}
              <div className="flex justify-center mb-8">
                <div className="relative w-full max-w-lg">
                  <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#555]" />
                  <input
                    type="text"
                    placeholder="Enter Search Keyword"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-12 pr-5 py-3.5 border border-[#E0E0E0] rounded-xl focus:outline-none focus:border-[#AA0924] transition-colors shadow-sm"
                    style={{ fontFamily: F, fontSize: '15px' }}
                  />
                </div>
              </div>

              {/* Tab Row: Tabs left, Button right */}
              <div className="border-b-2 border-[#E5E7EB] overflow-x-auto no-scrollbar -mx-6 px-6 md:mx-0 md:px-0">
                <div className="flex min-w-max md:w-full">
                  {tabs.map((tab) => {
                    const isActive = activeTab === tab.key;
                    return (
                      <button
                        key={tab.key}
                        onClick={() => setActiveTab(tab.key)}
                        className={`shrink-0 transition-all border-b-4 ${isActive ? 'border-[#AA0924] text-[#AA0924] font-bold' : 'border-transparent text-[#666]'} py-4 px-6 md:flex-1 text-center whitespace-nowrap text-[13px] tracking-wide uppercase`}
                        style={{ fontFamily: F }}
                      >
                        {tab.label}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Make a Request Button — new row, far right */}
              <div className="flex justify-center md:justify-end py-8">
                <button
                  onClick={() => setModalOpen(true)}
                  className="w-full md:w-auto flex items-center justify-center gap-2 shrink-0 bg-[#AA0924] hover:bg-[#880718] text-white px-8 h-12 rounded-full transition-all font-bold text-sm shadow-md active:scale-95"
                >
                  <Plus className="w-5 h-5" />
                  MAKE A REQUEST
                </button>
              </div>
            </div>
          </section>

          {/* ═══ 2. REQUEST LISTING SECTION ═══ */}
          <section className="bg-white pt-0 pb-20 md:pb-32">
            <div className="max-w-[1280px] mx-auto px-6 md:px-20">
              {filteredRequests.length === 0 ? (
                <div className="text-center py-16">
                  <FileText className="w-12 h-12 mx-auto mb-4" style={{ color: '#D1D5DB' }} />
                  <p style={{ fontWeight: 600, fontSize: '16px', color: '#6B7280' }}>No requests found.</p>
                  <p style={{ fontSize: '14px', color: '#9CA3AF', marginTop: '4px' }}>
                    Try adjusting your search or filter criteria.
                  </p>
                </div>
              ) : (
                <div className="flex flex-col" style={{ gap: '20px' }}>
                  {filteredRequests.map((req) => {
                    const s = statusColors[req.status];
                    const dateLabel = req.status === 'pending' ? 'Submitted on' : 'Published on';
                    return (
                      <div
                        key={req.id}
                        className="relative bg-white overflow-hidden border border-[#E0E0E0] hover:border-[#AA0924] transition-all shadow-sm hover:shadow-md"
                        style={{
                          borderRadius: '8px',
                        }}
                      >
                        {/* Red Left Accent */}
                        <div
                          className="absolute top-0 left-0 bottom-0"
                          style={{
                            width: '4px',
                            backgroundColor: '#AA0924',
                            borderTopLeftRadius: '8px',
                            borderBottomLeftRadius: '8px',
                          }}
                        />

                        {/* Card Content */}
                        <div className="p-6 md:p-8">
                          {/* Status Tag — top right of card (mobile: relative, desktop: absolute) */}
                          <div className="flex justify-start md:block mb-4 md:mb-0">
                            <span
                              className="md:absolute md:top-6 md:right-6 text-[10px] md:text-[11px] font-bold px-3 py-1 md:px-4 md:py-1.5 rounded-full uppercase tracking-wider"
                              style={{
                                color: s.text,
                                backgroundColor: s.bg,
                                fontFamily: F,
                              }}
                            >
                              {s.label}
                            </span>
                          </div>

                          {/* Line 1: Title */}
                          <h3 className="text-lg md:text-xl font-bold text-black leading-snug mb-4 md:pr-40" style={{ fontFamily: F }}>
                            {req.title}
                          </h3>
                          {/* Line 2: Reference No. */}
                          <p style={{ fontSize: '14px', fontFamily: F, fontWeight: 400, color: '#666666', margin: 0, lineHeight: '1.5', marginBottom: '4px' }}>
                            Reference No.: <span style={{ color: '#AA0924' }}>{req.refId}</span>
                          </p>
                          {/* Line 3: Published on / Submitted on */}
                          <p style={{ fontSize: '14px', fontFamily: F, fontWeight: 400, color: '#666666', margin: 0, lineHeight: '1.5', marginBottom: '4px' }}>
                            {dateLabel}: <span style={{ color: '#AA0924' }}>{req.publishedDate}</span>
                          </p>
                          {/* Line 4: Requested by */}
                          <p style={{ fontSize: '14px', fontFamily: F, fontWeight: 400, color: '#666666', margin: 0, lineHeight: '1.5', marginBottom: '4px' }}>
                            Requested by: <span style={{ color: '#AA0924' }}>{req.requestedBy}</span>
                          </p>
                          {/* Line 5: Affiliation */}
                          <p style={{ fontSize: '14px', fontFamily: F, fontWeight: 400, color: '#666666', margin: 0, lineHeight: '1.5', marginBottom: '4px' }}>
                            Affiliation: <span style={{ color: '#AA0924' }}>{req.affiliation}</span>
                          </p>
                          {/* Line 6: Category */}
                          <p style={{ fontSize: '14px', fontFamily: F, fontWeight: 400, color: '#666666', margin: 0, lineHeight: '1.5' }}>
                            Category: <span style={{ color: '#AA0924' }}>{req.purpose}</span>
                          </p>
                          {/* Line 7 (Denied only): Reason */}
                          {req.status === 'denied' && req.denialReason && (
                            <p style={{ fontSize: '14px', fontFamily: F, fontWeight: 400, color: '#666666', margin: 0, lineHeight: '1.5', marginTop: '4px' }}>
                              Reason: <span style={{ color: '#AA0924' }}>{req.denialReason}</span>
                            </p>
                          )}

                          {/* View Status Button — bottom right */}
                          <div className="flex justify-end mt-6">
                            <button
                              onClick={() => handleViewStatus(req)}
                              className="w-full md:w-auto h-11 px-6 border-2 border-[#AA0924] text-[#AA0924] bg-white hover:bg-[#AA0924] hover:text-white transition-all font-bold text-sm tracking-wide rounded-lg uppercase"
                              style={{ fontFamily: F }}
                            >
                              VIEW STATUS
                            </button>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              )}
            </div>
          </section>
        </>
      ) : selectedRequest ? (
        <>
          {/* ═══ 3. STATUS TRACKER — Detail View ═══ */}
          <section className="bg-white pt-20 md:pt-32 pb-20 md:pb-32">
            <div className="max-w-[1280px] mx-auto px-6 md:px-20">
              {/* Back */}
              <button
                onClick={handleBackToList}
                className="flex items-center gap-2 hover:text-[#AA0924] transition-colors"
                style={{ background: 'none', border: 'none', cursor: 'pointer', fontWeight: 400, fontSize: '14px', color: '#666666', fontFamily: F, marginBottom: '32px' }}
              >
                <ArrowLeft className="w-4 h-4" />
                Back to All Requests
              </button>

              {/* Title + Status Pill row */}
              <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-6">
                <h2 className="text-2xl md:text-3xl font-extrabold text-black leading-tight" style={{ fontFamily: F, margin: 0 }}>
                  {selectedRequest.title}
                </h2>
                <span
                  className="inline-block self-start text-[11px] md:text-[12px] font-bold px-4 py-1.5 md:px-6 md:py-2 rounded-full uppercase tracking-wider"
                  style={{
                    color: statusColors[selectedRequest.status].text,
                    backgroundColor: statusColors[selectedRequest.status].bg,
                    fontFamily: F,
                  }}
                >
                  {statusColors[selectedRequest.status].label}
                </span>
              </div>

              {/* Metadata — synced from card */}
              <div style={{ marginBottom: '24px' }}>
                <p style={{ fontSize: '14px', fontFamily: F, fontWeight: 400, color: '#666666', margin: 0, lineHeight: '1.7' }}>
                  Reference No.: <span style={{ color: '#AA0924' }}>{selectedRequest.refId}</span>
                </p>
                <p style={{ fontSize: '14px', fontFamily: F, fontWeight: 400, color: '#666666', margin: 0, lineHeight: '1.7' }}>
                  {selectedRequest.status === 'pending' ? 'Submitted on' : 'Published on'}: <span style={{ color: '#AA0924' }}>{selectedRequest.publishedDate}</span>
                </p>
                <p style={{ fontSize: '14px', fontFamily: F, fontWeight: 400, color: '#666666', margin: 0, lineHeight: '1.7' }}>
                  Requested by: <span style={{ color: '#AA0924' }}>{selectedRequest.requestedBy}</span>
                </p>
                <p style={{ fontSize: '14px', fontFamily: F, fontWeight: 400, color: '#666666', margin: 0, lineHeight: '1.7' }}>
                  Affiliation: <span style={{ color: '#AA0924' }}>{selectedRequest.affiliation}</span>
                </p>
                <p style={{ fontSize: '14px', fontFamily: F, fontWeight: 400, color: '#666666', margin: 0, lineHeight: '1.7' }}>
                  Category: <span style={{ color: '#AA0924' }}>{selectedRequest.purpose}</span>
                </p>
                {selectedRequest.status === 'denied' && selectedRequest.denialReason && (
                  <p style={{ fontSize: '14px', fontFamily: F, fontWeight: 400, color: '#666666', margin: 0, lineHeight: '1.7' }}>
                    Reason: <span style={{ color: '#AA0924' }}>{selectedRequest.denialReason}</span>
                  </p>
                )}
              </div>

              {/* Status Banner */}
              {(() => {
                const sc = statusColors[selectedRequest.status];
                const borderColor = selectedRequest.status === 'successful' ? '#A7F3D0' : selectedRequest.status === 'denied' ? '#FECACA' : '#FDE68A';
                const messages: Record<string, string> = {
                  successful: 'Your request has been approved and the requested information has been released.',
                  pending: 'Your request is currently being processed. The CICS Finance Committee is reviewing the required documentation.',
                  denied: selectedRequest.denialReason || 'Your request could not be processed. Please contact the STRAW Desk for more information.',
                };
                return (
                  <div
                    className="flex items-center gap-3"
                    style={{
                      backgroundColor: sc.bg,
                      border: `1px solid ${borderColor}`,
                      borderRadius: '8px',
                      padding: '16px 20px',
                      marginBottom: '40px',
                    }}
                  >
                    <Info className="w-5 h-5 flex-shrink-0" style={{ color: sc.text }} />
                    <p style={{ fontWeight: 400, fontSize: '14px', color: sc.text, fontFamily: F, margin: 0 }}>
                      {messages[selectedRequest.status]}
                    </p>
                  </div>
                );
              })()}

              {/* Progress Tracker */}
              <div className="bg-white border border-[#E0E0E0] rounded-2xl p-6 md:p-12 mb-10 shadow-sm">
                <h3 className="text-lg md:text-xl font-bold text-black mb-8" style={{ fontFamily: F }}>Request Progress</h3>
                
                {/* Horizontal on Desktop, Vertical on Mobile */}
                <div className="flex flex-col md:flex-row items-stretch md:items-start justify-between relative gap-6 md:gap-0">
                  {/* Desktop Background track line */}
                  <div className="absolute hidden md:block" style={{ top: '20px', left: '10%', right: '10%', height: '2px', backgroundColor: '#E5E7EB', zIndex: 0 }} />
                  
                  {/* Mobile Vertical Track Line */}
                  <div className="absolute left-[20px] top-[20px] bottom-[20px] w-0.5 bg-[#E5E7EB] md:hidden" />

                  {/* Desktop Completed track line */}
                  {(() => {
                    const steps = getTrackerSteps(selectedRequest.status);
                    const total = steps.length;
                    const lastCompletedIndex = steps.map((s, i) => s.completed ? i : -1).filter(i => i >= 0).pop() ?? 0;
                    if (lastCompletedIndex === 0) return null;
                    const startPct = (1 / (2 * total)) * 100;
                    const endPct = ((2 * lastCompletedIndex + 1) / (2 * total)) * 100;
                    return (
                      <>
                        <div
                          className="absolute hidden md:block"
                          style={{
                            top: '20px',
                            left: `${startPct}%`,
                            width: `${endPct - startPct}%`,
                            height: '2px',
                            backgroundColor: '#28A745',
                            zIndex: 1,
                          }}
                        />
                        {/* Mobile Vertical Completed track line */}
                        <div 
                          className="absolute left-[20px] top-[20px] w-0.5 bg-[#28A745] md:hidden"
                          style={{ height: `${(lastCompletedIndex / (total - 1)) * 100}%` }}
                        />
                      </>
                    );
                  })()}
                  
                  {getTrackerSteps(selectedRequest.status).map((step, i) => (
                    <div key={i} className="flex flex-row md:flex-col items-center md:items-center relative z-10 gap-4 md:gap-0" style={{ flex: '1 1 0%' }}>
                      <div
                        className="flex items-center justify-center shrink-0"
                        style={{
                          width: '40px',
                          height: '40px',
                          borderRadius: '50%',
                          backgroundColor: step.completed ? '#28A745' : '#E5E7EB',
                          marginBottom: '0',
                        }}
                      >
                        {step.completed ? <Check className="w-5 h-5 text-white" strokeWidth={3} /> : <Clock className="w-4 h-4" style={{ color: '#9CA3AF' }} />}
                      </div>
                      <span className="text-left md:text-center md:mt-3" style={{ fontWeight: 400, fontSize: '13px', color: step.completed ? '#000000' : '#9CA3AF', maxWidth: '120px', fontFamily: F }}>
                        {step.label}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Status Log */}
              <div
                className="bg-white border border-[#E0E0E0] hover:border-[#AA0924] transition-all shadow-sm hover:shadow-md"
                style={{
                  borderRadius: '8px',
                  padding: '32px',
                }}
              >
                <h3 style={{ fontWeight: 700, fontSize: '18px', color: '#000000', marginBottom: '24px', fontFamily: F, margin: '0 0 24px 0' }}>FOI Request Status</h3>
                <div className="flex flex-col">
                  {getStatusLog(selectedRequest).map((entry, i) => {
                    const logEntries = getStatusLog(selectedRequest);
                    return (
                      <div key={i} className="flex" style={{ gap: '20px' }}>
                        <div className="flex flex-col items-center shrink-0" style={{ width: '20px' }}>
                          <div style={{ width: '10px', height: '10px', borderRadius: '50%', backgroundColor: i === 0 ? '#AA0924' : '#D1D5DB', marginTop: '6px', flexShrink: 0 }} />
                          {i < logEntries.length - 1 && <div style={{ width: '2px', flex: '1', backgroundColor: '#E5E7EB', minHeight: '40px' }} />}
                        </div>
                        <div style={{ paddingBottom: i < logEntries.length - 1 ? '24px' : '0' }}>
                          <p style={{ fontWeight: 400, fontSize: '13px', color: '#666666', marginBottom: '4px', fontFamily: F }}>{entry.date}</p>
                          <p style={{ fontWeight: 400, fontSize: '14px', color: '#000000', lineHeight: '1.6', fontFamily: F }}>{entry.text}</p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </section>
        </>
      ) : null}

    </div>
  );
}
