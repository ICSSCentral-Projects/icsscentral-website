import { Outlet, Link, useLocation } from 'react-router';
import { useState, useEffect, useRef, useCallback } from 'react';
import { ChevronDown, Menu, X } from 'lucide-react';
import icsscLogoWhite from "../../assets/icssc-logo-white.png";

type DropdownKey = 'latest' | 'services' | 'about' | null;

const F = "'Poppins', sans-serif";

export default function Layout() {
  const location = useLocation();
  const [openDropdown, setOpenDropdown] = useState<DropdownKey>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showBanner, setShowBanner] = useState(true);

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  const dropdownTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const navRef = useRef<HTMLDivElement>(null);

  const isActive = (path: string) => location.pathname === path;
  const isParentActive = (paths: string[]) => paths.some(path => location.pathname.startsWith(path));

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(e.target as Node)) {
        setOpenDropdown(null);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
    setOpenDropdown(null);
  }, [location.pathname]);

  const handleMouseEnter = useCallback((key: DropdownKey) => {
    if (dropdownTimeoutRef.current) {
      clearTimeout(dropdownTimeoutRef.current);
      dropdownTimeoutRef.current = null;
    }
    setOpenDropdown(key);
  }, []);

  const handleMouseLeave = useCallback(() => {
    dropdownTimeoutRef.current = setTimeout(() => {
      setOpenDropdown(null);
    }, 150);
  }, []);

  const dropdownItems = {
    latest: [
      { label: 'News & Updates', path: '/blogs' },
      { label: 'Events', path: '/events' },
    ],
    services: [
      { label: 'STRAW Desk', path: '/services/straw-desk' },
      { label: 'FOI Portal', path: '/services/foi-portal' },
      { label: 'Directory & Documents', path: '/services/directory' },
    ],
    about: [
      { label: 'The Council', path: '/about/council' },
      { label: 'Meet the Council Members', path: '/about/members' },
      { label: 'CICS Organizations', path: '/about/organizations' },
    ],
  };

  const renderDropdown = (key: 'latest' | 'services' | 'about') => {
    if (openDropdown !== key) return null;
    return (
      <div
        className="absolute left-1/2 -translate-x-1/2 w-[240px] bg-white overflow-hidden z-50"
        style={{ 
          top: '100%',
          borderTopLeftRadius: '0px', 
          borderTopRightRadius: '0px', 
          borderBottomLeftRadius: '8px', 
          borderBottomRightRadius: '8px',
          boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 2px 0 4px -1px rgba(0, 0, 0, 0.06), -2px 0 4px -1px rgba(0, 0, 0, 0.06)'
        }}
        onMouseEnter={() => handleMouseEnter(key)}
        onMouseLeave={handleMouseLeave}
      >
        {dropdownItems[key].map((item, index) => (
          <div key={item.path}>
            <Link
              to={item.path}
              className="block text-[#1A1A1A] hover:bg-[#F5F5F5] transition-colors border-l-[3px] border-transparent hover:border-[#AA0924]"
              style={{ fontFamily: F, fontWeight: 400, fontSize: '14px', padding: '16px', textAlign: 'left' }}
            >
              {item.label}
            </Link>
            {index < dropdownItems[key].length - 1 && (
              <div style={{ height: '1px', backgroundColor: '#EBEBEB' }} />
            )}
          </div>
        ))}
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-[#F5F5F5] flex flex-col" style={{ fontFamily: F }}>
      <div className="sticky top-0 z-50 flex flex-col">
        {/* Announcement Banner */}
        {showBanner && (
          <div className="bg-black text-white text-center relative flex items-center justify-center" style={{ height: '36px' }}>
            <p style={{ fontFamily: F, fontWeight: 400, fontSize: '13px' }}>
              Mark Your Calendars! An Upcoming CICS Student Council Event You Won't Want To Miss!
            </p>
            <button
              onClick={() => setShowBanner(false)}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-white/70 hover:text-white transition-colors"
              aria-label="Close announcement"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        )}

        {/* Navigation Bar */}
        <nav className="bg-[#AA0924]" style={{ height: '85px' }} ref={navRef}>
        <div className="h-full flex items-center justify-between" style={{ paddingLeft: '80px', paddingRight: '80px' }}>
          {/* Logo */}
          <Link to="/" className="flex items-center shrink-0" style={{ gap: '16px' }}>
            <img src={icsscLogoWhite} alt="UST ICSSC Logo" style={{ width: 'auto', height: '50px' }} />
            <span className="text-white" style={{ fontFamily: F, fontWeight: 700, fontSize: '32px', lineHeight: '1' }}>
              UST ICSSC
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center self-stretch" style={{ gap: '42px' }}>
            {/* HOME */}
            <Link
              to="/"
              className={`text-white hover:text-white/80 transition-colors py-1 ${isActive('/') ? 'border-b-2 border-white' : ''}`}
              style={{ fontFamily: F, fontWeight: 600, fontSize: '18px', textTransform: 'uppercase' as const }}
            >
              HOME
            </Link>

            {/* LATEST */}
            <div
              className="relative h-full flex items-center"
              onMouseEnter={() => handleMouseEnter('latest')}
              onMouseLeave={handleMouseLeave}
            >
              <button
                className={`text-white hover:text-white/80 flex items-center gap-1.5 transition-colors py-1 ${isParentActive(['/events', '/blogs']) ? 'border-b-2 border-white' : ''}`}
                style={{ fontFamily: F, fontWeight: 600, fontSize: '18px', textTransform: 'uppercase' as const }}
              >
                LATEST
                <ChevronDown className="w-4 h-4 text-white" />
              </button>
              {renderDropdown('latest')}
            </div>

            {/* SERVICES */}
            <div
              className="relative h-full flex items-center"
              onMouseEnter={() => handleMouseEnter('services')}
              onMouseLeave={handleMouseLeave}
            >
              <button
                className={`text-white hover:text-white/80 flex items-center gap-1.5 transition-colors py-1 ${isParentActive(['/services']) ? 'border-b-2 border-white' : ''}`}
                style={{ fontFamily: F, fontWeight: 600, fontSize: '18px', textTransform: 'uppercase' as const }}
              >
                SERVICES
                <ChevronDown className="w-4 h-4 text-white" />
              </button>
              {renderDropdown('services')}
            </div>

            {/* ABOUT */}
            <div
              className="relative h-full flex items-center"
              onMouseEnter={() => handleMouseEnter('about')}
              onMouseLeave={handleMouseLeave}
            >
              <button
                className={`text-white hover:text-white/80 flex items-center gap-1.5 transition-colors py-1 ${isParentActive(['/about']) ? 'border-b-2 border-white' : ''}`}
                style={{ fontFamily: F, fontWeight: 600, fontSize: '18px', textTransform: 'uppercase' as const }}
              >
                ABOUT
                <ChevronDown className="w-4 h-4 text-white" />
              </button>
              {renderDropdown('about')}
            </div>

            {/* CONTACT US - Black filled button */}
            <Link
              to="/contact"
              className="text-white flex items-center justify-center hover:opacity-90 transition-opacity"
              style={{
                fontFamily: F,
                fontWeight: 700,
                fontSize: '16px',
                textTransform: 'uppercase' as const,
                width: '180px',
                height: '48px',
                backgroundColor: '#000000',
                borderRadius: '10px',
              }}
            >
              CONTACT US
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-white p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-[#AA0924] border-t border-white/20 pb-4">
            <div className="px-6 py-2 space-y-1" style={{ fontFamily: F }}>
              <Link to="/" className="block py-3 text-white" style={{ fontWeight: 600, fontSize: '14px' }}>HOME</Link>

              <div className="border-t border-white/20">
                <button
                  className="flex items-center justify-between w-full py-3 text-white"
                  style={{ fontWeight: 600, fontSize: '14px' }}
                  onClick={() => setOpenDropdown(openDropdown === 'latest' ? null : 'latest')}
                >
                  LATEST <ChevronDown className={`w-4 h-4 transition-transform ${openDropdown === 'latest' ? 'rotate-180' : ''}`} />
                </button>
                {openDropdown === 'latest' && (
                  <div className="pl-4 pb-2 space-y-2">
                    {dropdownItems.latest.map(item => (
                      <Link key={item.path} to={item.path} className="block py-2 text-white/80 text-sm">{item.label}</Link>
                    ))}
                  </div>
                )}
              </div>

              <div className="border-t border-white/20">
                <button
                  className="flex items-center justify-between w-full py-3 text-white"
                  style={{ fontWeight: 600, fontSize: '14px' }}
                  onClick={() => setOpenDropdown(openDropdown === 'services' ? null : 'services')}
                >
                  SERVICES <ChevronDown className={`w-4 h-4 transition-transform ${openDropdown === 'services' ? 'rotate-180' : ''}`} />
                </button>
                {openDropdown === 'services' && (
                  <div className="pl-4 pb-2 space-y-2">
                    {dropdownItems.services.map(item => (
                      <Link key={item.path} to={item.path} className="block py-2 text-white/80 text-sm">{item.label}</Link>
                    ))}
                  </div>
                )}
              </div>

              <div className="border-t border-white/20">
                <button
                  className="flex items-center justify-between w-full py-3 text-white"
                  style={{ fontWeight: 600, fontSize: '14px' }}
                  onClick={() => setOpenDropdown(openDropdown === 'about' ? null : 'about')}
                >
                  ABOUT <ChevronDown className={`w-4 h-4 transition-transform ${openDropdown === 'about' ? 'rotate-180' : ''}`} />
                </button>
                {openDropdown === 'about' && (
                  <div className="pl-4 pb-2 space-y-2">
                    {dropdownItems.about.map(item => (
                      <Link key={item.path} to={item.path} className="block py-2 text-white/80 text-sm">{item.label}</Link>
                    ))}
                  </div>
                )}
              </div>

              <div className="border-t border-white/20 pt-3">
                <Link
                  to="/contact"
                  className="inline-block text-white border border-white rounded px-5 py-2"
                  style={{ fontWeight: 600, fontSize: '14px' }}
                >
                  CONTACT US
                </Link>
              </div>
            </div>
          </div>
        )}
      </nav>
      </div>

      {/* Main Content */}
      <main className="flex-1">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="bg-black text-white w-full" style={{ fontFamily: F, paddingTop: '60px', paddingBottom: '24px', paddingLeft: '80px', paddingRight: '80px' }}>
        <div className="flex items-start justify-between pb-12" style={{ width: '100%' }}>
          {/* Column 1 - Logo + Tagline + Social - LEFT ALIGNED */}
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: '20px', maxWidth: '320px' }}>
            {/* Logo and Title - Horizontal Stack with Center Alignment */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '18px', marginTop: '-14px' }}>
              <img src={icsscLogoWhite} alt="CICS Student Council Logo" style={{ width: 'auto', height: '68px' }} />
              <span style={{ fontWeight: 700, fontSize: '28px', lineHeight: '1' }}>UST ICSSC</span>
            </div>
            <p className="text-white" style={{ fontSize: '16px', fontWeight: 400, lineHeight: '1.6' }}>
              Leading through innovation and growing together in purpose, we strive to empower Thomasians to create meaningful change in a digital world.
            </p>
            {/* Social Icons - Left Aligned */}
            <div className="flex" style={{ gap: '12px' }}>
              {/* Facebook */}
              <a 
                href="https://www.facebook.com/usticssc" 
                target="_blank" rel="noopener noreferrer"
                aria-label="Facebook" 
                style={{ 
                  width: '40px', 
                  height: '40px', 
                  borderRadius: '50%', 
                  backgroundColor: '#AA0924', 
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'center',
                  overflow: 'visible'
                }} 
                className="hover:bg-[#880718] transition-colors"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="white" style={{ overflow: 'visible' }}>
                  <path d="M14 13.5h2.5l1-4H14v-2c0-1.03 0-2 2-2h1.5V2.14c-.326-.043-1.557-.14-2.857-.14C11.928 2 10 3.657 10 6.7v2.8H7v4h3V22h4v-8.5z"/>
                </svg>
              </a>
              {/* X (Twitter) */}
              <a 
                href="https://x.com/usticssc?lang=en" 
                target="_blank" rel="noopener noreferrer"
                aria-label="X (Twitter)" 
                style={{ 
                  width: '40px', 
                  height: '40px', 
                  borderRadius: '50%', 
                  backgroundColor: '#AA0924', 
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'center',
                  overflow: 'visible'
                }} 
                className="hover:bg-[#880718] transition-colors"
              >
                <svg width="18" height="18" viewBox="0 0 300 300" fill="white" style={{ overflow: 'visible' }}>
                  <path d="M178.57 127.15 290.27 0h-26.46l-96.97 110.38L89.34 0H0l117.13 166.93L0 300.25h26.46l102.4-116.59 81.8 116.59H300L178.57 127.15zm-36.24 41.29-11.87-16.62L37.09 19.54h40.65l76.18 106.66 11.87 16.62 99.03 138.68h-40.65l-80.84-113.06z"/>
                </svg>
              </a>
              {/* Instagram */}
              <a 
                href="https://www.instagram.com/usticssc/" 
                target="_blank" rel="noopener noreferrer"
                aria-label="Instagram" 
                style={{ 
                  width: '40px', 
                  height: '40px', 
                  borderRadius: '50%', 
                  backgroundColor: '#AA0924', 
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'center',
                  overflow: 'visible'
                }} 
                className="hover:bg-[#880718] transition-colors"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="white" style={{ overflow: 'visible' }}>
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
              {/* TikTok */}
              <a 
                href="https://www.tiktok.com/@usticssc" 
                target="_blank" rel="noopener noreferrer"
                aria-label="TikTok" 
                style={{ 
                  width: '40px', 
                  height: '40px', 
                  borderRadius: '50%', 
                  backgroundColor: '#AA0924', 
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'center',
                  overflow: 'visible'
                }} 
                className="hover:bg-[#880718] transition-colors"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="white" style={{ overflow: 'visible' }}>
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Column 2 - Quick Links */}
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <h4 className="text-white" style={{ fontWeight: 700, fontSize: '24px', marginBottom: '24px' }}>QUICK LINKS</h4>
            <ul style={{ display: 'flex', flexDirection: 'column', gap: '12px' }} className="text-white">
              <li><Link to="/about/council" className="hover:text-[#AA0924] transition-colors" style={{ fontSize: '16px', fontWeight: 400, whiteSpace: 'nowrap' }}>The Council</Link></li>
              <li><Link to="/about/members" className="hover:text-[#AA0924] transition-colors" style={{ fontSize: '16px', fontWeight: 400, whiteSpace: 'nowrap' }}>Meet the Council Members</Link></li>
              <li><Link to="/about/organizations" className="hover:text-[#AA0924] transition-colors" style={{ fontSize: '16px', fontWeight: 400, whiteSpace: 'nowrap' }}>CICS Organizations</Link></li>
              <li><Link to="/blogs" className="hover:text-[#AA0924] transition-colors" style={{ fontSize: '16px', fontWeight: 400, whiteSpace: 'nowrap' }}>News & Updates</Link></li>
              <li><Link to="/events" className="hover:text-[#AA0924] transition-colors" style={{ fontSize: '16px', fontWeight: 400, whiteSpace: 'nowrap' }}>Events</Link></li>
            </ul>
          </div>

          {/* Column 3 - Services */}
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <h4 className="text-white" style={{ fontWeight: 700, fontSize: '24px', marginBottom: '24px' }}>SERVICES</h4>
            <ul style={{ display: 'flex', flexDirection: 'column', gap: '12px' }} className="text-white">
              <li><Link to="/services/straw-desk" className="hover:text-[#AA0924] transition-colors" style={{ fontSize: '16px', fontWeight: 400, whiteSpace: 'nowrap' }}>STRAW Desk</Link></li>
              <li><Link to="/services/foi-portal" className="hover:text-[#AA0924] transition-colors" style={{ fontSize: '16px', fontWeight: 400, whiteSpace: 'nowrap' }}>FOI Portal</Link></li>
              <li><Link to="/services/directory" className="hover:text-[#AA0924] transition-colors" style={{ fontSize: '16px', fontWeight: 400, whiteSpace: 'nowrap' }}>Directory & Documents</Link></li>
            </ul>
          </div>

          {/* Column 4 - Contact Us */}
          <div style={{ display: 'flex', flexDirection: 'column', maxWidth: '300px' }}>
            <h4 className="text-white" style={{ fontWeight: 700, fontSize: '24px', marginBottom: '24px' }}>CONTACT US</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }} className="text-white">
              <div className="flex items-start" style={{ gap: '12px' }}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="#AA0924" style={{ marginTop: '2px', flexShrink: 0 }}>
                  <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                </svg>
                <a href="mailto:sc.cics@ust.edu.ph" className="hover:text-[#AA0924] transition-colors" style={{ fontSize: '16px', fontWeight: 400 }}>sc.cics@ust.edu.ph</a>
              </div>
              <div className="flex items-start" style={{ gap: '12px' }}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="#AA0924" style={{ marginTop: '2px', flexShrink: 0 }}>
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                </svg>
                <p className="leading-relaxed" style={{ fontSize: '16px', fontWeight: 400 }}>
                  {'Rm 2005 Saint Pier Giorgio'}<br />
                  {'Frassati, O.P. Building,'}<br />
                  {'University Of Santo Tomas,'}<br />
                  {'Espana Boulevard, Manila'}<br />
                  {'Philippines'}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/20 pt-5 text-center text-white" style={{ fontSize: '13px', fontWeight: 400 }}>
          <p>© Copyright 2026. All Rights reserved. | Powered by CICS Student Council</p>
        </div>
      </footer>
    </div>
  );
}