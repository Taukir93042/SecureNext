import React, { useRef, useState, useEffect, useCallback } from 'react';
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';

export default function ProjectsSection({ onOpenQuote }) {
  const scrollRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);
  const [isUserInteracting, setIsUserInteracting] = useState(false);
  const userInteractionTimeout = useRef(null);

  const projects = [
    {
      id: 'residential-villa',
      title: 'Residential Villa',
      subtitle: 'CCTV Installation',
      image: '/images/project-residential.jpg',
    },
    {
      id: 'corporate-office',
      title: 'Corporate Office',
      subtitle: 'Complete Security Setup',
      image: '/images/project-office.jpg',
    },
    {
      id: 'retail-store',
      title: 'Retail Store',
      subtitle: 'Multi-Camera System',
      image: '/images/project-retail.jpg',
    },
    {
      id: 'warehouse',
      title: 'Logistics Warehouse',
      subtitle: 'Industrial Security',
      image: '/images/project-warehouse.jpg',
    },
    {
      id: 'shopping-mall',
      title: 'Shopping Mall',
      subtitle: 'Central Surveillance Hub',
      image: '/images/project-mall.jpg',
    },
    {
      id: 'apartment-complex',
      title: 'Apartment Complex',
      subtitle: 'Perimeter & Gate Security',
      image: '/images/project-apartment.jpg',
    },
    {
      id: 'healthcare-hospital',
      title: 'Healthcare Center',
      subtitle: '24/7 Patient & Entry Monitoring',
      image: '/images/project-hospital.jpg',
    },
    {
      id: 'banking-finance',
      title: 'Banking Branch',
      subtitle: 'High-Security Vault Coverage',
      image: '/images/project-bank.jpg',
    },
    {
      id: 'luxury-hotel',
      title: 'Luxury Hotel & Resort',
      subtitle: 'Guest & Perimeter Defense',
      image: '/images/project-hotel.jpg',
    },
    {
      id: 'smart-estate',
      title: 'Smart Villa Estate',
      subtitle: 'AI Night-Vision System',
      image: '/images/hero-banner.jpg',
    },
  ];

  // Duplicate projects array to allow continuous infinite loop
  const displayProjects = [...projects, ...projects];

  // Continuous Buttery Smooth Auto-Scrolling Loop
  useEffect(() => {
    let animationFrameId;

    const autoScroll = () => {
      if (scrollRef.current && !isHovered && !isUserInteracting) {
        const container = scrollRef.current;
        const halfWidth = container.scrollWidth / 2;

        // Smooth continuous 0.75px increment per frame
        container.scrollLeft += 0.75;

        // Seamless infinite wrap-around
        if (container.scrollLeft >= halfWidth) {
          container.scrollLeft -= halfWidth;
        }
      }
      animationFrameId = requestAnimationFrame(autoScroll);
    };

    animationFrameId = requestAnimationFrame(autoScroll);

    return () => cancelAnimationFrame(animationFrameId);
  }, [isHovered, isUserInteracting]);

  // Handle manual navigation buttons
  const scrollManual = useCallback((direction) => {
    if (scrollRef.current) {
      setIsUserInteracting(true);
      clearTimeout(userInteractionTimeout.current);

      const cardWidth = 320;
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -cardWidth : cardWidth,
        behavior: 'smooth',
      });

      // Resume auto-scroll 2.5 seconds after manual click
      userInteractionTimeout.current = setTimeout(() => {
        setIsUserInteracting(false);
      }, 2500);
    }
  }, []);

  return (
    <section id="projects" className="py-[60px] bg-white overflow-hidden relative">
      {/* Section Header (Centered) */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-10 text-center">
        <span className="text-xs font-extrabold uppercase tracking-wider text-[#0080ff] mb-2 inline-block">
          OUR PROJECTS
        </span>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 tracking-tight leading-tight font-heading">
          Real Installations &amp; Real Protection
        </h2>
      </div>

      {/* Full Width Carousel Container */}
      <div
        className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 group/slider"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Left Arrow Button */}
        <button
          onClick={() => scrollManual('left')}
          className="absolute left-1 sm:left-3 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full bg-white shadow-xl shadow-slate-900/15 border border-slate-100 flex items-center justify-center text-[#0080ff] hover:bg-[#0080ff] hover:text-white transition-all duration-300 cursor-pointer active:scale-95"
          aria-label="Scroll left"
        >
          <ChevronLeft className="w-6 h-6 stroke-[2.5]" />
        </button>

        {/* Right Arrow Button */}
        <button
          onClick={() => scrollManual('right')}
          className="absolute right-1 sm:right-3 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full bg-white shadow-xl shadow-slate-900/15 border border-slate-100 flex items-center justify-center text-[#0080ff] hover:bg-[#0080ff] hover:text-white transition-all duration-300 cursor-pointer active:scale-95"
          aria-label="Scroll right"
        >
          <ChevronRight className="w-6 h-6 stroke-[2.5]" />
        </button>

        {/* Continuous Smooth Infinite Scroll Track */}
        <div
          ref={scrollRef}
          className="flex gap-5 sm:gap-6 overflow-x-auto scrollbar-none pt-4 pb-6 px-2 -mx-2"
          style={{
            scrollbarWidth: 'none',
            msOverflowStyle: 'none',
          }}
        >
          {displayProjects.map((proj, idx) => (
            <div
              key={`${proj.id}-${idx}`}
              onClick={() => onOpenQuote && onOpenQuote(proj.title)}
              className="group shrink-0 w-[270px] sm:w-[300px] lg:w-[320px] bg-white rounded-xl p-1 sm:p-1 border border-slate-200/90 hover:border-blue-300 shadow-sm hover:shadow-xl hover:shadow-blue-500/10 transition-all duration-300 cursor-pointer flex flex-col justify-between hover:-translate-y-1.5"
            >
              {/* Image Box */}
              <div className="w-full aspect-[16/10] rounded-xl overflow-hidden bg-slate-900 mb-3.5 relative">
                <img
                  src={proj.image}
                  alt={proj.title}
                  className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </div>

              {/* Title & Subtitle */}
              <div className="px-1 pb-1 text-left">
                <h3 className="text-base font-bold text-slate-900 group-hover:text-[#0080ff] transition-colors leading-snug mb-0.5">
                  {proj.title}
                </h3>
                <p className="text-xs text-slate-500 font-normal leading-normal">
                  {proj.subtitle}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Centered Bottom CTA Button */}
        <div className="mt-8 sm:mt-10 flex justify-center">
          <a
            href="#contact"
            className="inline-flex items-center gap-2.5 px-8 py-3.5 rounded-full bg-gradient-to-r from-[#0066ff] to-[#00a6ff] hover:from-[#0052cc] hover:to-[#0088ff] text-white font-bold text-sm sm:text-base shadow-lg shadow-blue-600/30 hover:shadow-blue-600/50 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 cursor-pointer"
          >
            <span>View All Projects</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
