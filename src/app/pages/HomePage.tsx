import { Link } from 'react-router';
import { useState, useEffect } from 'react';
import { Play, ChevronLeft, ChevronRight, FileText, ArrowRight, Calendar, Clock, MapPin } from 'lucide-react';
import imgBuildingHero from "figma:asset/f0c8e9fe56942b5a2e8481f18cf3bc5cf434eae4.png";
import cics1 from "../../assets/cics-1.png";
import cics2 from "../../assets/cics-2.png";
import cics3 from "../../assets/cics-3.png";
import imgIcssc41 from "figma:asset/812f001f003ddb7acc93883157c7b7496281a9aa.png";
import imgIcsSc1 from "figma:asset/33915aeaef238599afc783beafd6fdf7b4874a54.png";
import FloatingCard from "../components/FloatingCard";
import { events } from '../data/events';

const F = "'Poppins', sans-serif";

const heroSlides = [
  { image: cics2 },
  { image: cics1 },
  { image: cics3 },
];

export default function HomePage() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const goToSlide = (index: number) => setCurrentSlide(index);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);
  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
  const featuredEvent = [...events].sort((a, b) => a.sortDate.localeCompare(b.sortDate))[0] || null;

  return (
    <div className="bg-white" style={{ fontFamily: F }}>
      <section className="relative w-full h-[500px] md:h-[600px] overflow-visible">
        {/* Background Image */}
        <div className="absolute inset-0 w-full h-full z-0" style={{ overflow: 'hidden' }}>
          <img
            src={heroSlides[currentSlide].image}
            alt="UST CICS Hero"
            className="w-full h-full object-cover object-center transition-opacity duration-700"
          />
          <div className="absolute inset-0" style={{ backgroundColor: 'rgba(0, 0, 0, 0.65)' }} />
        </div>

        {/* Hero Text - Centered above indicators */}
        <div
          className="relative z-10 w-full text-center px-4 md:px-0 absolute top-[25%] md:top-[42%] left-1/2 -translate-x-1/2 -translate-y-1/2"
        >
          <div
            style={{
              display: 'inline-flex',
              flexDirection: 'column',
              alignItems: 'stretch',
              width: 'max-content',
              maxWidth: '95vw',
            }}
          >
            <p
              className="text-white text-lg md:text-4xl font-black mb-4 md:mb-6 uppercase tracking-wider"
              style={{
                fontFamily: F,
                lineHeight: '1.15',
                width: '100%',
              }}
            >
              UST COLLEGE OF INFORMATION AND COMPUTING SCIENCES
            </p>
            <h1
              className="text-white text-5xl md:text-[110px] font-black leading-tight md:leading-[87px]"
              style={{
                fontFamily: F,
              }}
            >
              STUDENT COUNCIL
            </h1>
          </div>
        </div>

        {/* Carousel Arrows */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/25 backdrop-blur-sm flex items-center justify-center hover:bg-white/35 transition-all z-20"
          aria-label="Previous"
        >
          <ChevronLeft className="w-5 h-5 text-white" strokeWidth={2.5} />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/25 backdrop-blur-sm flex items-center justify-center hover:bg-white/35 transition-all z-20"
          aria-label="Next"
        >
          <ChevronRight className="w-5 h-5 text-white" strokeWidth={2.5} />
        </button>

        {/* Carousel Line Indicators — 24px above the banner top edge */}
        <div className="absolute left-1/2 -translate-x-1/2 flex gap-3 z-20 bottom-[210px] md:bottom-[131px]">
          {heroSlides.map((_, i) => (
            <button
              key={i}
              onClick={() => goToSlide(i)}
              style={{
                width: '60px',
                height: '4px',
                backgroundColor: currentSlide === i ? '#AA0924' : 'rgba(255, 255, 255, 0.6)',
                borderRadius: '2px',
                border: 'none',
                cursor: 'pointer',
                transition: 'background-color 0.3s ease',
              }}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>

        {/* Floating Banner (Group 470) — overlaps hero bottom */}
        <FloatingCard />
      </section>

      {/* OUR LEGACY OF EXCELLENCE */}
      <section className="bg-white pt-44 md:pt-[224px] pb-10 md:pb-[80px]">
        <div className="max-w-7xl mx-auto px-6 md:px-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <div className="w-16 h-1 bg-[#AA0924] mb-5"></div>
              <h2
                className="text-[#1A1A1A] mb-5"
                style={{ fontFamily: F, fontWeight: 700, fontSize: '32px', lineHeight: '1.2' }}
              >
                 Our Legacy of Excellence
              </h2>
              <p className="text-[#555555] mb-5 text-sm md:text-base leading-relaxed" style={{ fontFamily: F, fontWeight: 400 }}>
                Established in 2014, the University of Santo Tomas College of Information and Computing Sciences stands as a center of innovation and excellence in technology education. Rooted in UST's rich legacy, CICS unites Computer Science, Information Technology, and Information Systems under one forward-looking college.
              </p>
              <Link
                to="/blogs/legacy"
                className="text-[#AA0924] hover:text-[#880718] transition-colors inline-flex items-center gap-2 group"
                style={{ fontFamily: F, fontWeight: 700, fontSize: '16px' }}
              >
                Read More
                <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
            <div className="overflow-hidden shadow-xl" style={{ borderRadius: '16px' }}>
              <img src={cics1} alt="CICS Students" className="w-full h-[320px] object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* VIDEO SECTION */}
      <section className="py-10 md:py-[80px] bg-[#F5F5F5]">
        <div className="max-w-7xl mx-auto px-6 md:px-20">
          <h3
            className="text-center text-[#1A1A1A] mb-8 md:mb-10 text-xl md:text-3xl font-bold leading-snug"
            style={{ fontFamily: F }}
          >
            Get to know the UST CICS Student Council
          </h3>
          <div className="relative overflow-hidden shadow-2xl" style={{ borderRadius: '16px' }}>
            <div className="aspect-video relative">
              <img src={cics3} alt="CICS Student Council Video" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-black/35" />
              <div className="absolute inset-0 flex items-center justify-center">
                <button
                  className="w-16 h-16 md:w-[100px] md:h-[100px] bg-[#AA0924] rounded-full flex items-center justify-center hover:bg-[#880718] transition-all hover:scale-105 shadow-2xl"
                  aria-label="Play video"
                >
                  <Play className="w-6 h-6 md:w-10 md:h-10 text-white ml-1 md:ml-1.5" fill="white" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* UPCOMING EVENTS */}
      <section className="py-10 md:py-[80px] bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-20">
          {/* Header with Red Accent Line */}
          <div className="flex items-center justify-between" style={{ marginBottom: '40px' }}>
            <h2 className="text-[#1A1A1A]" style={{ fontWeight: 700, fontSize: '32px' }}>Upcoming events</h2>
            <div className="w-20 h-1 bg-[#AA0924]"></div>
          </div>

          {/* Featured Card */}
          {featuredEvent && (
            <div className="bg-white rounded-2xl overflow-hidden shadow-lg border border-[#E0E0E0]">
              <div className="grid grid-cols-1 md:grid-cols-[60%_40%]">
                {/* Image */}
                <div className="h-[300px] md:h-[500px]">
                  <img src={featuredEvent.image} alt={featuredEvent.title} className="w-full h-full object-cover" />
                </div>

                {/* Content - 40% */}
                <div className="p-10 flex flex-col justify-center">
                  {/* Tags */}
                  <div className="flex items-center gap-3 mb-4">
                    <span className="bg-[#AA0924] text-white px-3 py-1 rounded text-xs" style={{ fontWeight: 600 }}>{featuredEvent.category}</span>
                  </div>

                  {/* Title */}
                  <h2 className="text-[#1A1A1A] mb-4" style={{ fontWeight: 700, fontSize: '24px', lineHeight: '1.3' }}>
                    {featuredEvent.title}
                  </h2>

                  {/* Description */}
                  <p className="text-[#555555] mb-6" style={{ fontSize: '16px', lineHeight: '26px', fontWeight: 400 }}>
                    {featuredEvent.description}
                  </p>

                  {/* Event Details */}
                  <div className="space-y-3 mb-6">
                    <div className="flex items-center gap-3 text-[#777777]" style={{ fontSize: '14px', fontWeight: 500 }}>
                      <Calendar className="w-5 h-5 text-[#AA0924]" />
                      <span>{featuredEvent.date}</span>
                    </div>
                    <div className="flex items-center gap-3 text-[#777777]" style={{ fontSize: '14px', fontWeight: 500 }}>
                      <Clock className="w-5 h-5 text-[#AA0924]" />
                      <span>{featuredEvent.time}</span>
                    </div>
                    <div className="flex items-center gap-3 text-[#777777]" style={{ fontSize: '14px', fontWeight: 500 }}>
                      <MapPin className="w-5 h-5 text-[#AA0924]" />
                      <span>{featuredEvent.location}</span>
                    </div>
                  </div>

                  {/* Button */}
                  <button
                    className="inline-flex items-center justify-center gap-2 bg-[#AA0924] text-white px-7 py-3 rounded hover:bg-[#880718] transition-colors self-start"
                    style={{ fontWeight: 700, fontSize: '16px' }}
                  >
                    Register Now <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}