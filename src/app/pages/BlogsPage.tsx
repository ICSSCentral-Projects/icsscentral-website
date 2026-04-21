import { useState, useEffect } from 'react';
import { Link } from 'react-router';
import { Calendar, User, Tag, ArrowRight, Search, Play, Pin } from 'lucide-react';
import InnerHeroBanner from '../components/InnerHeroBanner';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import SectionDivider from '../components/SectionDivider';
import leadershipSeminar from "../../assets/leadership-seminar.png";
import openingMass from "../../assets/opening-mass.png";
import raceAgainstSuicide from "../../assets/race-against-suicide.png";
import cics1 from "../../assets/cics-1.png";
import cics2 from "../../assets/cics-2.png";
import cics3 from "../../assets/cics-3.png";
import { getArticles, type StrapiArticle } from '../../lib/strapiApi';

const F = "'Poppins', sans-serif";

// TikTok Video Data
const tiktokVideos = [
  { id: 1, thumbnail: "https://images.unsplash.com/photo-1663162550938-60f70fab5d31?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdHVkZW50cyUyMGNhbXB1cyUyMGdyb3VwfGVufDF8fHx8MTc3MzU4OTk2Mnww&ixlib=rb-4.1.0&q=80&w=1080", title: "CICS Student Council Day 1" },
  { id: 2, thumbnail: "https://images.unsplash.com/photo-1591218214141-45545921d2d9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2xsZWdlJTIwZXZlbnQlMjBjZWxlYnJhdGlvbnxlbnwxfHx8fDE3NzM1ODk5NjN8MA&ixlib=rb-4.1.0&q=80&w=1080", title: "Leadership Week Highlights" },
  { id: 3, thumbnail: "https://images.unsplash.com/photo-1764920265158-500a6e60c487?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx1bml2ZXJzaXR5JTIwc3R1ZGVudCUyMGFjdGl2aXRpZXN8ZW58MXx8fHwxNzczNTg5OTYzfDA&ixlib=rb-4.1.0&q=80&w=1080", title: "Campus Life" },
  { id: 4, thumbnail: "https://images.unsplash.com/photo-1769905226788-1bf5ba8f50d6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx1bml2ZXJzaXR5JTIwY2FtcHVzJTIwc3R1ZGVudHMlMjB3YWxraW5nfGVufDF8fHx8MTc3MzkzNjM2MHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral", title: "Thomasian Tech Talk" },
  { id: 5, thumbnail: "https://images.unsplash.com/photo-1718327453695-4d32b94c90a4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2xsZWdlJTIwc3R1ZGVudHMlMjBzdHVkeWluZyUyMGxpYnJhcnl8ZW58MXx8fHwxNzczOTE4MTgxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral", title: "Study Group Sessions" },
  { id: 6, thumbnail: "https://images.unsplash.com/photo-1768796370407-6d36619e7d6d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdHVkZW50JTIwb3JnYW5pemF0aW9uJTIwbWVldGluZyUyMHRlYW13b3JrfGVufDF8fHx8MTc3Mzk1MTE2OHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral", title: "ICSSC Team Building" },
  { id: 7, thumbnail: "https://images.unsplash.com/photo-1746122072064-3273a25094c2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2xsZWdlJTIwZ3JhZHVhdGlvbiUyMGNlcmVtb255JTIwY2VsZWJyYXRpb258ZW58MXx8fHwxNzczOTUxMzE2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral", title: "CICS Graduation Day" },
  { id: 8, thumbnail: "https://images.unsplash.com/photo-1759884248009-92c5e957708e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdHVkZW50cyUyMGNvZGluZyUyMGhhY2thdGhvbiUyMGxhcHRvcHxlbnwxfHx8fDE3NzM5NTEzMTd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral", title: "Hackathon 2026" },
  { id: 9, thumbnail: "https://images.unsplash.com/photo-1772653519333-c1927e38f791?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYW1wdXMlMjBzcG9ydHMlMjBldmVudCUyMGF0aGxldGljc3xlbnwxfHx8fDE3NzM5NTEzMTd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral", title: "CICS Sports Fest" },
];

const categories = ["All", "Student Spotlight", "Community Development", "Opportunities"];

export default function BlogsPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [visibleVideos, setVisibleVideos] = useState(3);
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 6;

  const [articles, setArticles] = useState<StrapiArticle[]>([]);
  const [blogsLoading, setBlogsLoading] = useState(true);
  const [blogsError, setBlogsError] = useState('');

  useEffect(() => {
    (async () => {
      try {
        const data = await getArticles();
        setArticles(data);
      } catch (err) {
        console.error('Failed to load articles:', err);
        setBlogsError('Unable to load blog posts. Please try again later.');
      } finally {
        setBlogsLoading(false);
      }
    })();
  }, []);

 const filteredPosts = articles.filter(post => {
    const matchesCategory = selectedCategory === "All" || post.post_category === selectedCategory;
    const matchesSearch = post.post_title.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const totalPages = Math.max(1, Math.ceil(filteredPosts.length / postsPerPage));
  const safeCurrentPage = Math.min(currentPage, totalPages);
  const paginatedPosts = filteredPosts.slice((safeCurrentPage - 1) * postsPerPage, safeCurrentPage * postsPerPage);

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
      <InnerHeroBanner title="News & Updates" breadcrumb="Latest / News & Updates" />

      <div className="max-w-[1280px] mx-auto px-6 md:px-20" style={{ paddingTop: '60px', paddingBottom: '0px' }}>
        {/* TIKTOK FEED SECTION */}
        <section>
          {/* Header with Red Accent Line */}
          <div className="flex items-center justify-between" style={{ marginBottom: '32px' }}>
            <h2 className="text-[#1A1A1A] text-2xl md:text-[32px] font-bold" style={{ fontFamily: F }}>
              Tiktok
            </h2>
            <div className="w-20 h-1 bg-[#AA0924]"></div>
          </div>

          {/* 3-Column Video Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
            {tiktokVideos.slice(0, visibleVideos).map((video) => (
              <div 
                key={video.id} 
                className="relative overflow-hidden group cursor-pointer" 
                style={{ borderRadius: '16px', aspectRatio: '9/16', backgroundColor: '#000' }}
              >
                <ImageWithFallback 
                  src={video.thumbnail} 
                  alt={video.title} 
                  className="w-full h-full object-cover"
                />
                {/* Dark Overlay */}
                <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-colors"></div>
                
                {/* Play Icon Overlay */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-16 h-16 rounded-full bg-white/90 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Play className="w-8 h-8 text-[#AA0924] ml-1" fill="#AA0924" />
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Load More Button */}
          {visibleVideos < tiktokVideos.length && (
            <div className="flex justify-center">
              <button 
                onClick={() => setVisibleVideos(prev => Math.min(prev + 3, tiktokVideos.length))}
                className="border-2 border-[#D0D0D0] text-[#1A1A1A] rounded hover:border-[#AA0924] hover:text-[#AA0924] transition-colors cursor-pointer" 
                style={{ fontFamily: F, fontWeight: 500, fontSize: '14px', padding: '10px 24px' }}
              >
                LOAD MORE
              </button>
            </div>
          )}
        </section>
      </div>

      <SectionDivider />

      <div className="max-w-[1280px] mx-auto px-6 md:px-20" style={{ paddingBottom: '80px' }}>
        {/* LATEST ARTICLES SECTION */}
        <section>
          {/* Title Row with Search Bar */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-6" style={{ marginBottom: '24px' }}>
            <h2 className="text-[#1A1A1A] text-2xl md:text-[32px] font-bold" style={{ fontFamily: F }}>
              Latest articles
            </h2>
            <div className="relative w-full md:w-[340px] flex-shrink-0">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-[#555]" />
              <input
                type="text"
                placeholder="Search articles..."
                value={searchQuery}
                onChange={(e) => handleSearchChange(e.target.value)}
                className="w-full pl-11 pr-4 py-2.5 border border-[#E0E0E0] rounded focus:outline-none focus:border-[#AA0924] transition-colors"
                style={{ fontFamily: F, fontSize: '14px' }}
              />
            </div>
          </div>

          {/* Full-Width Filter Tabs */}
          <div className="border-b-2 border-[#E5E7EB] mb-10 overflow-x-auto scrollbar-hide">
            <div className="flex w-max md:w-full min-w-full">
              {categories.map((category) => {
                const isActive = selectedCategory === category;
                return (
                  <button
                    key={category}
                    onClick={() => handleCategoryChange(category)}
                    className="shrink-0 transition-colors"
                    style={{
                      flex: '1 1 0%',
                      padding: '14px 24px',
                      fontFamily: F,
                      fontWeight: isActive ? 700 : 400,
                      fontSize: '13px',
                      letterSpacing: '0.5px',
                      color: isActive ? '#AA0924' : '#666666',
                      marginBottom: '-2px',
                      background: 'none',
                      border: 'none',
                      borderBottom: isActive ? '3px solid #AA0924' : '3px solid transparent',
                      cursor: 'pointer',
                      textAlign: 'center',
                    }}
                  >
                    {category}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Article Grid */}
          {filteredPosts.length > 0 ? (
            <>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {paginatedPosts.map((post) => (
                  <article 
                    key={post.id} 
                    className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all hover:-translate-y-1 border border-[#E0E0E0] flex flex-col h-full" 
                  >
                  {/* Image with Pinned Badge */}
                  <div className="h-52 overflow-hidden relative flex-shrink-0">
                    <img src={post.coverImage?.url ?? ''} alt={post.post_title} className="w-full h-full object-cover hover:scale-105 transition-transform duration-300" />
                  </div>

                  {/* Card Content */}
                  <div className="p-6 flex flex-col flex-1">
                    {/* Category Tag */}
                    <div className="flex items-center gap-2 mb-3">
                      <Tag className="w-3.5 h-3.5 text-[#AA0924]" />
                      <span className="text-[#AA0924]" style={{ fontFamily: F, fontWeight: 600, fontSize: '13px' }}>{post.post_category}</span>
                    </div>

                    {/* Title */}
                    <h3 className="text-[#1A1A1A] mb-3 line-clamp-2" style={{ fontFamily: F, fontWeight: 700, fontSize: '24px', lineHeight: '1.4' }}>
                      {post.post_title}
                    </h3>

                    {/* Author and Date */}
                    <div className="flex items-center gap-4 mb-3 text-[#777777]" style={{ fontFamily: F, fontSize: '14px', fontWeight: 500 }}>
                      <div className="flex items-center gap-1.5">
                        <User className="w-3 h-3" />
                        <span>{post.post_author}</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <Calendar className="w-3 h-3" />
                        <span>{new Date(post.postDate).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
                      </div>
                    </div>

                    {/* Summary Snippet */}
                    <p className="text-[#555555] mb-4 line-clamp-3 flex-1" style={{ fontFamily: F, fontSize: '16px', lineHeight: '24px', fontWeight: 400 }}>
                      {post.post_content?.slice(0, 160)}...
                    </p>

                    {/* Read More Button - Aligned at Bottom */}
                    <Link 
                      to={`/blogs/${post.id}`}
                      className="w-full bg-[#AA0924] text-white py-2.5 rounded hover:bg-[#880718] transition-colors flex items-center justify-center gap-2 mt-auto" 
                      style={{ fontFamily: F, fontWeight: 700, fontSize: '16px', textDecoration: 'none' }}
                    >
                      Read more <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                  </article>
                ))}
              </div>

              {filteredPosts.length > postsPerPage && (
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
            </>
          ) : (
            <div className="text-center py-16">
              <p className="text-[#555555]" style={{ fontFamily: F, fontSize: '16px' }}>No articles found matching your criteria.</p>
            </div>
          )}
        </section>
      </div>
    </div>
  );
}
