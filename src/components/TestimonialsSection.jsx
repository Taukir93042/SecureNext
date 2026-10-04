import React, { useState, useEffect } from 'react';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';

const testimonialsList = [
  {
    id: 1,
    name: 'Rahul Kumar',
    role: 'Home Owner',
    quote:
      'SecureNest installed CCTV at my home. The service was excellent and the team was very professional. Highly recommended!',
    image: '/images/avatar-rahul.jpg',
    rating: 5,
  },
  {
    id: 2,
    name: 'Priya Sharma',
    role: 'Office Manager',
    quote:
      'Great service for our office. Clean installation and good support. Now we feel much safer.',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&auto=format&fit=crop&q=80',
    rating: 5,
  },
  {
    id: 3,
    name: 'Amit Verma',
    role: 'Business Owner',
    quote:
      'Reliable, affordable and professional. SecureNest is the best CCTV service provider in our area.',
    image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=150&auto=format&fit=crop&q=80',
    rating: 5,
  },
  {
    id: 4,
    name: 'Sunita Rao',
    role: 'School Principal',
    quote:
      'SecureNest provided an extensive surveillance setup for our school campus. Safety of our students is top priority, and their system works flawlessly!',
    image: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=150&auto=format&fit=crop&q=80',
    rating: 5,
  },
  {
    id: 5,
    name: 'Rajesh Malhotra',
    role: 'Warehouse Operations Head',
    quote:
      'Installed 32 IP cameras across our logistics warehouse. The night vision clarity and mobile monitoring support are outstanding.',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80',
    rating: 5,
  },
  {
    id: 6,
    name: 'Vikram Singhania',
    role: 'Jewelry Showroom Owner',
    quote:
      'High precision 4K cameras with AI motion alerts have given our showroom complete peace of mind. Exceptional after-sales service.',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&auto=format&fit=crop&q=80',
    rating: 5,
  },
];

export default function TestimonialsSection() {
  const [isMobile, setIsMobile] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  // Responsive screen size detection
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Compute slides: 1 card per slide on mobile, 2 cards per slide on desktop
  const itemsPerSlide = isMobile ? 1 : 2;
  const slides = [];
  for (let i = 0; i < testimonialsList.length; i += itemsPerSlide) {
    slides.push(testimonialsList.slice(i, i + itemsPerSlide));
  }

  // Ensure currentSlide is within bounds when switching between mobile and desktop
  useEffect(() => {
    if (currentSlide >= slides.length) {
      setCurrentSlide(0);
    }
  }, [isMobile, slides.length]);

  // Auto slide smoothly
  useEffect(() => {
    if (isHovered || slides.length === 0) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev >= slides.length - 1 ? 0 : prev + 1));
    }, 4000);

    return () => clearInterval(interval);
  }, [isHovered, slides.length]);

  const handlePrev = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentSlide((prev) => (prev >= slides.length - 1 ? 0 : prev + 1));
  };

  return (
    <section
      className="py-[60px] bg-[#f8fafc] border-t border-slate-200/70 overflow-hidden"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onTouchStart={() => setIsHovered(true)}
      onTouchEnd={() => setTimeout(() => setIsHovered(false), 2000)}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header (Centered) */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12">
          <span className="text-xs font-extrabold uppercase tracking-wider text-[#0080ff] mb-2 inline-block">
            TESTIMONIALS
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 tracking-tight font-heading">
            What Our Customers Say
          </h2>
        </div>

        {/* Carousel Slider (2 cards on desktop, 1 card on mobile) */}
        <div className="overflow-hidden">
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
          >
            {slides.map((slideItems, slideIndex) => (
              <div
                key={slideIndex}
                className={`w-full shrink-0 grid ${
                  isMobile ? 'grid-cols-1 max-w-xl mx-auto' : 'grid-cols-2 gap-6'
                } px-1`}
              >
                {slideItems.map((item) => (
                  <div
                    key={item.id}
                    className="bg-white rounded-2xl sm:rounded-3xl p-7 sm:p-8 border border-slate-200/80 hover:border-blue-200 hover:shadow-xl hover:shadow-blue-500/5 transition-all duration-300 flex flex-col justify-between min-h-[220px]"
                  >
                    <div>
                      {/* 5 Golden Stars */}
                      <div className="flex items-center gap-1 text-amber-400 mb-4">
                        {[...Array(item.rating)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 sm:w-4.5 sm:h-4.5 fill-amber-400 text-amber-400" />
                        ))}
                      </div>

                      {/* Quote Text */}
                      <p className="text-slate-700 text-sm sm:text-base leading-relaxed mb-6 font-normal">
                        &ldquo;{item.quote}&rdquo;
                      </p>
                    </div>

                    {/* User Avatar + Name + Role */}
                    <div className="flex items-center gap-3.5 pt-4 border-t border-slate-100 mt-auto">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-12 h-12 rounded-full object-cover ring-2 ring-blue-100 shadow-sm"
                        loading="lazy"
                      />
                      <div>
                        <h4 className="text-sm sm:text-base font-bold text-slate-900 leading-tight">
                          {item.name}
                        </h4>
                        <p className="text-xs text-slate-500 leading-tight mt-0.5">
                          {item.role}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>

        {/* Navigation Controls (Bottom Centered) */}
        <div className="mt-8 sm:mt-10 flex items-center justify-center gap-4">
          <button
            onClick={handlePrev}
            className="w-11 h-11 rounded-full border border-slate-200 bg-white hover:bg-[#0080ff] hover:text-white hover:border-[#0080ff] flex items-center justify-center text-slate-700 transition-all duration-300 shadow-md shadow-slate-900/5 cursor-pointer active:scale-95"
            aria-label="Previous Testimonials"
          >
            <ChevronLeft className="w-5 h-5 stroke-[2.5]" />
          </button>

          {/* Dots Indicator */}
          <div className="flex items-center gap-2">
            {slides.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentSlide(idx)}
                className={`h-2.5 rounded-full transition-all duration-300 cursor-pointer ${
                  currentSlide === idx
                    ? 'w-7 bg-[#0080ff]'
                    : 'w-2.5 bg-slate-300 hover:bg-slate-400'
                }`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>

          <button
            onClick={handleNext}
            className="w-11 h-11 rounded-full border border-slate-200 bg-white hover:bg-[#0080ff] hover:text-white hover:border-[#0080ff] flex items-center justify-center text-slate-700 transition-all duration-300 shadow-md shadow-slate-900/5 cursor-pointer active:scale-95"
            aria-label="Next Testimonials"
          >
            <ChevronRight className="w-5 h-5 stroke-[2.5]" />
          </button>
        </div>
      </div>
    </section>
  );
}
