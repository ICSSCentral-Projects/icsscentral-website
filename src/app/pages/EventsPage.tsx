import { useState, useEffect } from 'react';
import { Calendar, MapPin, Clock, ArrowRight, Search } from 'lucide-react';
import InnerHeroBanner from '../components/InnerHeroBanner';
import SectionDivider from '../components/SectionDivider';
import { getEvents, type StrapiEvent } from '../../lib/strapiApi';

const F = "'Poppins', sans-serif";

const categories = ["All", "Academic", "Sports", "Career", "Community", "Celebration"];

export default function EventsPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const eventsPerPage = 6;

  const [events, setEvents] = useState<StrapiEvent[]>([]);
  const [eventsLoading, setEventsLoading] = useState(true);
  const [eventsError, setEventsError] = useState('');

  useEffect(() => {
    (async () => {
      try {
        const data = await getEvents();
        setEvents(data);
      } catch (err) {
        console.error('Failed to load events:', err);
        setEventsError('Unable to load events. Please try again later.');
      } finally {
        setEventsLoading(false);
      }
    })();
  }, []);

  const filteredEvents = events.filter(event => {
    const matchesCategory = selectedCategory === "All" || event.category === selectedCategory;
    const matchesSearch = event.title.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  // Sort by date ascending (closest upcoming first)
  const sortedEvents = [...filteredEvents].sort((a, b) =>
    new Date(a.date).getTime() - new Date(b.date).getTime()
  );
  const limitedEvents = sortedEvents.slice(0, 9);
  const totalPages = Math.max(1, Math.ceil(limitedEvents.length / eventsPerPage));
  const safeCurrentPage = Math.min(currentPage, totalPages);
  const paginatedEvents = limitedEvents.slice((safeCurrentPage - 1) * eventsPerPage, safeCurrentPage * eventsPerPage);

  // Featured = closest upcoming event
  const featuredEvent = limitedEvents[0] || null;

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
    setCurrentPage(1);
  };

  const handleSearchChange = (query: string) => {
    setSearchQuery(query);
    setCurrentPage(1);
  };

  return (
    <div className="min-h-screen bg-white" style={{ fontFamily: F }}>
      <InnerHeroBanner title="Events" breadcrumb="Latest / Events" />

      {/* Search & Filters */}
      <section className="bg-white shadow-sm border-b border-[#E0E0E0]">
        <div className="max-w-[1280px] mx-auto px-6 md:px-20 py-6">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            {/* Search Bar - Left */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-[#555]" />
              <input
                type="text"
                placeholder="Search events..."
                value={searchQuery}
                onChange={(e) => handleSearchChange(e.target.value)}
                className="w-full pl-11 pr-4 py-2.5 border border-[#E0E0E0] rounded focus:outline-none focus:border-[#AA0924] transition-colors"
                style={{ fontFamily: F, fontSize: '14px' }}
              />
            </div>

            {/* Category Tabs - Right */}
            <div className="flex flex-wrap gap-3">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => handleCategoryChange(category)}
                  className={`px-4 py-2 rounded transition-all ${
                    selectedCategory === category 
                      ? 'bg-[#AA0924] text-white' 
                      : 'bg-[#F5F5F5] text-[#555555] hover:bg-[#E0E0E0]'
                  }`}
                  style={{ fontWeight: 600, fontSize: '13px' }}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-[1280px] mx-auto px-6 md:px-20" style={{ paddingTop: '60px', paddingBottom: '0px' }}>
        {/* FEATURED SECTION */}
        {featuredEvent && (
          <section>
            {/* Header with Red Accent Line */}
            <div className="flex items-center justify-between" style={{ marginBottom: '32px' }}>
              <h2 className="text-[#1A1A1A] text-2xl md:text-[32px] font-bold">Upcoming events</h2>
              <div className="w-20 h-1 bg-[#AA0924]"></div>
            </div>

            {/* Featured Card */}
            <div className="bg-white rounded-2xl overflow-hidden shadow-lg border border-[#E0E0E0]">
              <div className="grid grid-cols-1 md:grid-cols-[60%_40%]">
                {/* Image - 100% on mobile, 60% on desktop */}
                <div className="h-[300px] md:h-[500px]">
                  <img src={featuredEvent.image} alt={featuredEvent.title} className="w-full h-full object-cover" />
                </div>

                {/* Content - 40% */}
                <div className="p-6 md:p-10 flex flex-col justify-center">
                  {/* Tags */}
                  <div className="flex items-center gap-3 mb-4">
                    <span className="bg-[#AA0924] text-white px-3 py-1 rounded text-xs" style={{ fontWeight: 600 }}>{featuredEvent.category}</span>
                  </div>

                  {/* Title */}
                  <h2 className="text-[#1A1A1A] text-xl md:text-2xl mb-4 font-bold leading-tight">
                    {featuredEvent.title}
                  </h2>

                  {/* Description */}
                  <p className="text-[#555555] text-sm md:text-base mb-6 font-normal leading-relaxed">
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
          </section>
        )}

        {eventsLoading && (
                <div className="text-center py-16 text-[#555555]">Loading events…</div>
              )}
              {eventsError && (
                <div className="text-center py-16 text-[#AA0924]">{eventsError}</div>
              )}

        {/* EMPTY STATE — no events for this category */}
        {!featuredEvent && (
          <div className="text-center py-20">
            <p className="text-[#555555]" style={{ fontSize: '16px' }}>No upcoming events for this category. Stay tuned!</p>
          </div>
        )}
      </div>

      {/* Divider between Upcoming Events and Events list */}
      {limitedEvents.length > 0 && <SectionDivider />}

      <div className="max-w-[1280px] mx-auto px-6 md:px-20" style={{ paddingTop: '0px', paddingBottom: '100px' }}>
        {/* ALL EVENTS SECTION — only show if there are cards */}
        {limitedEvents.length > 0 && (
        <section>
          {/* Dynamic Header with Red Accent Line */}
          <div className="flex items-center justify-between" style={{ marginBottom: '40px' }}>
            <h2 className="text-[#1A1A1A] text-2xl md:text-[32px] font-bold">
              {selectedCategory === "All" ? "All events" : `${selectedCategory} events`}
            </h2>
            <div className="w-20 h-1 bg-[#AA0924]"></div>
          </div>

          {/* Events Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {paginatedEvents.map((event) => (
                <article 
                  key={event.id} 
                  className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all hover:-translate-y-1 border border-[#E0E0E0] flex flex-col" 
                  style={{ borderRadius: '16px' }}
                >
                  {/* Image on Top */}
                  <div className="h-52 overflow-hidden flex-shrink-0">
                    <img src={event.image} alt={event.title} className="w-full h-full object-cover hover:scale-105 transition-transform duration-300" />
                  </div>

                  <div className="p-6 flex flex-col flex-1">
                    {/* Category Tag */}
                    <div className="mb-3">
                      <span className="bg-[#AA0924] text-white px-3 py-1 rounded text-xs" style={{ fontWeight: 600 }}>
                        {event.category}
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="text-[#1A1A1A] text-xl md:text-2xl mb-3 font-bold leading-tight line-clamp-2">
                      {event.title}
                    </h3>

                    {/* Description */}
                    <p className="text-[#555555] mb-4 line-clamp-2" style={{ fontSize: '16px', lineHeight: '24px', fontWeight: 400 }}>
                      {event.description}
                    </p>

                    {/* Event Details */}
                    <div className="space-y-2 mb-6 flex-1">
                      <div className="flex items-center gap-2 text-[#777777]" style={{ fontSize: '14px', fontWeight: 500 }}>
                        <Calendar className="w-4 h-4 text-[#AA0924]" />
                        <span>{event.date}</span>
                      </div>
                      <div className="flex items-center gap-2 text-[#777777]" style={{ fontSize: '14px', fontWeight: 500 }}>
                        <Clock className="w-4 h-4 text-[#AA0924]" />
                        <span>{event.time}</span>
                      </div>
                      <div className="flex items-center gap-2 text-[#777777]" style={{ fontSize: '14px', fontWeight: 500 }}>
                        <MapPin className="w-4 h-4 text-[#AA0924]" />
                        <span>{event.location}</span>
                      </div>
                    </div>

                    {/* Register Button */}
                    <button 
                      className="w-full inline-flex items-center justify-center gap-2 bg-[#AA0924] text-white py-2.5 rounded hover:bg-[#880718] transition-colors mt-auto" 
                      style={{ fontWeight: 700, fontSize: '16px' }}
                    >
                      Register now <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </article>
              ))}
            </div>

            {limitedEvents.length > eventsPerPage && (
              <div className="flex items-center justify-center gap-2" style={{ marginTop: '32px' }}>
                <button
                  onClick={() => setCurrentPage((prev) => Math.max(1, prev - 1))}
                  disabled={safeCurrentPage === 1}
                  className="transition-colors"
                  style={{
                    minWidth: '88px',
                    height: '38px',
                    borderRadius: '8px',
                    border: '1px solid #E5E7EB',
                    backgroundColor: '#F5F5F5',
                    color: safeCurrentPage === 1 ? '#A8A8A8' : '#555555',
                    fontFamily: F,
                    fontWeight: 600,
                    fontSize: '13px',
                    cursor: safeCurrentPage === 1 ? 'not-allowed' : 'pointer',
                  }}
                >
                  Previous
                </button>

                {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => {
                  const isActive = safeCurrentPage === page;
                  return (
                    <button
                      key={page}
                      onClick={() => setCurrentPage(page)}
                      className="transition-colors"
                      style={{
                        width: '38px',
                        height: '38px',
                        borderRadius: '8px',
                        border: `1px solid ${isActive ? '#D6D6D6' : '#E5E7EB'}`,
                        backgroundColor: isActive ? '#E0E0E0' : '#F5F5F5',
                        color: isActive ? '#555555' : '#6B7280',
                        fontFamily: F,
                        fontWeight: 700,
                        fontSize: '13px',
                        cursor: 'pointer',
                      }}
                    >
                      {page}
                    </button>
                  );
                })}

                <button
                  onClick={() => setCurrentPage((prev) => Math.min(totalPages, prev + 1))}
                  disabled={safeCurrentPage === totalPages}
                  className="transition-colors"
                  style={{
                    minWidth: '88px',
                    height: '38px',
                    borderRadius: '8px',
                    border: '1px solid #E5E7EB',
                    backgroundColor: '#F5F5F5',
                    color: safeCurrentPage === totalPages ? '#A8A8A8' : '#555555',
                    fontFamily: F,
                    fontWeight: 600,
                    fontSize: '13px',
                    cursor: safeCurrentPage === totalPages ? 'not-allowed' : 'pointer',
                  }}
                >
                  Next
                </button>
              </div>
            )}
        </section>
        )}
      </div>
    </div>
  );
}
