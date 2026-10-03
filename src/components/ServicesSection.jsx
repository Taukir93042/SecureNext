import React, { useRef } from 'react';
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';

export default function ServicesSection({ onSelectService }) {
  const scrollContainerRef = useRef(null);

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

  const scroll = (direction) => {
    if (scrollContainerRef.current) {
      const scrollAmount = 320;
      scrollContainerRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section id="services" className="py-20 lg:py-24 bg-[#07132c] relative overflow-hidden text-white">
      {/* Ambient Glows */}
      <div className="absolute top-1/3 left-0 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-10 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
          <div>
            <span className="text-xs font-extrabold uppercase tracking-wider text-sky-400 mb-2 inline-block">
              OUR SERVICES
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight font-heading">
              Complete Security Solutions
            </h2>
          </div>

          {/* Right Controls: View All + Slider Arrows */}
          <div className="flex items-center gap-4">
            <a
              href="#contact"
              className="text-sm font-semibold text-sky-400 hover:text-sky-300 transition-colors inline-flex items-center gap-1.5"
            >
              <span>View All Services</span>
              <ArrowRight className="w-4 h-4" />
            </a>

            <div className="flex items-center gap-2">
              <button
                onClick={() => scroll('left')}
                className="w-9 h-9 rounded-full bg-white/5 hover:bg-white/15 border border-white/20 text-sky-400 hover:text-white flex items-center justify-center transition-colors cursor-pointer"
                aria-label="Previous Services"
              >
                <ChevronLeft className="w-5 h-5 stroke-[2.5]" />
              </button>
              <button
                onClick={() => scroll('right')}
                className="w-9 h-9 rounded-full bg-white/5 hover:bg-white/15 border border-white/20 text-sky-400 hover:text-white flex items-center justify-center transition-colors cursor-pointer"
                aria-label="Next Services"
              >
                <ChevronRight className="w-5 h-5 stroke-[2.5]" />
              </button>
            </div>
          </div>
        </div>

        {/* Scrollable White Service Cards Track */}
        <div
          ref={scrollContainerRef}
          className="flex gap-5 sm:gap-6 overflow-x-auto scrollbar-none scroll-smooth pb-4 px-1 -mx-1 snap-x snap-mandatory"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {services.map((item) => (
            <div
              key={item.id}
              onClick={() => onSelectService && onSelectService(item.title)}
              className="group shrink-0 w-[265px] sm:w-[285px] lg:w-[290px] bg-white rounded-3xl p-4 sm:p-5 text-left shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer snap-start flex flex-col justify-between hover:-translate-y-1.5 border border-slate-100"
            >
              <div>
                {/* Top Image Container */}
                <div className="w-full aspect-[16/10] rounded-2xl overflow-hidden bg-slate-100 flex items-center justify-center mb-4.5 relative">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-500"
                    loading="lazy"
                  />
                </div>

                {/* Service Title */}
                <h3 className="text-base font-bold text-slate-900 group-hover:text-[#0066ff] transition-colors leading-snug mb-1 font-heading">
                  {item.title}
                </h3>

                {/* Subtitle Description */}
                <p className="text-xs text-slate-500 font-normal leading-normal mb-5">
                  {item.desc}
                </p>
              </div>

              {/* Bottom "Learn More →" Link */}
              <div className="pt-2">
                <span className="text-xs sm:text-sm font-bold text-[#0066ff] group-hover:text-[#0050d0] inline-flex items-center gap-1.5 transition-colors">
                  <span>Learn More</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
