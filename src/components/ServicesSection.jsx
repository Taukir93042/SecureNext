import React, { useRef, useState, useEffect } from 'react';
import { ArrowRight } from 'lucide-react';

export default function ServicesSection({ onSelectService }) {
  const scrollContainerRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);
  const touchTimeout = useRef(null);

  const services = [
    {
      id: 'cctv-installation',
      title: 'CCTV Installation',
      desc: 'Professional setup at your location',
      image: '/images/product-dome.jpg',
    },
    {
      id: 'repair-maintenance',
      title: 'Repair & Maintenance',
      desc: 'Quick and reliable service support',
      image: '/images/about-installer.jpg',
    },
    {
      id: 'access-control',
      title: 'Access Control',
      desc: 'Biometric & smart access solutions',
      image: '/images/service-access.jpg',
    },
    {
      id: 'video-door-phones',
      title: 'Video Door Phones',
      desc: 'See and talk before you open',
      image: '/images/service-intercom.jpg',
    },
    {
      id: 'networking-cabling',
      title: 'Networking & Cabling',
      desc: 'Structured cabling for seamless connectivity',
      image: '/images/project-warehouse.jpg',
    },
    {
      id: 'amc-services',
      title: 'AMC Services',
      desc: 'Annual maintenance for hassle-free security',
      image: '/images/hero-banner.jpg',
    },
  ];

  // Auto slide 1-by-1 smoothly
  useEffect(() => {
    if (isHovered) return;

    const interval = setInterval(() => {
      const container = scrollContainerRef.current;
      if (!container) return;

      const firstCard = container.children[0];
      const cardWidth = firstCard ? firstCard.clientWidth + 16 : 300;

      const maxScrollLeft = container.scrollWidth - container.clientWidth;
      if (maxScrollLeft <= 0) return;

      if (container.scrollLeft >= maxScrollLeft - 15) {
        container.scrollTo({ left: 0, behavior: 'smooth' });
      } else {
        container.scrollBy({ left: cardWidth, behavior: 'smooth' });
      }
    }, 3200);

    return () => {
      clearInterval(interval);
      if (touchTimeout.current) clearTimeout(touchTimeout.current);
    };
  }, [isHovered]);

  const handleTouchStart = () => {
    setIsHovered(true);
    if (touchTimeout.current) clearTimeout(touchTimeout.current);
  };

  const handleTouchEnd = () => {
    touchTimeout.current = setTimeout(() => {
      setIsHovered(false);
    }, 2500);
  };

  return (
    <section id="services" className="py-[60px] bg-[#07132c] relative overflow-hidden text-white">
      {/* Ambient Glows */}
      <div className="absolute top-1/3 left-0 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-10 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header (Centered) */}
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-8">
          <span className="text-xs font-extrabold uppercase tracking-wider text-sky-400 mb-2 inline-block">
            OUR SERVICES
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight leading-tight font-heading">
            Complete Security Solutions
          </h2>
        </div>

        {/* Scrollable Service Cards Track (1-by-1 auto-slide) */}
        <div
          ref={scrollContainerRef}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
          className="flex gap-4 sm:gap-6 overflow-x-auto scrollbar-none scroll-smooth pt-4 pb-6 px-4 -mx-4 sm:px-2 sm:-mx-2 snap-x snap-mandatory"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {services.map((item) => (
            <div
              key={item.id}
              onClick={() => onSelectService && onSelectService(item.title)}
              className="group shrink-0 w-[85vw] max-w-[320px] sm:w-[285px] lg:w-[290px] bg-white rounded-2xl sm:rounded-3xl overflow-hidden text-left shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer snap-center sm:snap-start flex flex-col justify-between hover:-translate-y-1.5 border border-slate-100"
            >
              <div>
                {/* Full Width Top Image */}
                <div className="w-full h-48 sm:h-48 overflow-hidden bg-slate-900 relative">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                </div>

                {/* Content Container */}
                <div className="p-5 pb-2">
                  {/* Service Title */}
                  <h3 className="text-base sm:text-lg font-bold text-slate-900 group-hover:text-[#0066ff] transition-colors leading-snug mb-1 font-heading">
                    {item.title}
                  </h3>

                  {/* Subtitle Description */}
                  <p className="text-xs sm:text-sm text-slate-500 font-normal leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>

              {/* Bottom "Learn More →" Link */}
              <div className="px-5 pb-5 pt-2">
                <span className="text-xs sm:text-sm font-bold text-[#0066ff] group-hover:text-[#0050d0] inline-flex items-center gap-1.5 transition-colors">
                  <span>Learn More</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Centered Bottom CTA Button */}
        <div className="mt-10 sm:mt-6 flex justify-center">
          <a
            href="#contact"
            className="inline-flex items-center gap-2.5 px-8 py-3.5 rounded-full bg-gradient-to-r from-[#0066ff] to-[#00a6ff] hover:from-[#0052cc] hover:to-[#0088ff] text-white font-bold text-sm sm:text-base shadow-lg shadow-blue-600/30 hover:shadow-blue-600/50 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 cursor-pointer"
          >
            <span>View All Services</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
