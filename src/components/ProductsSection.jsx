import React, { useState, useRef, useEffect } from 'react';
import { ArrowRight, Eye } from 'lucide-react';
import { productsData } from '../data/productsData';

export default function ProductsSection({ onSelectProduct, onViewProductDetails }) {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const scrollContainerRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);
  const touchTimeout = useRef(null);

  const categories = ['All', 'Cameras', 'Recorders', 'Accessories'];

  const filteredProducts =
    selectedCategory === 'All'
      ? productsData
      : productsData.filter((item) => item.category === selectedCategory);

  // Auto slide 1-by-1 on mobile smoothly
  useEffect(() => {
    if (isHovered) return;

    const interval = setInterval(() => {
      const container = scrollContainerRef.current;
      if (!container) return;

      const maxScrollLeft = container.scrollWidth - container.clientWidth;
      if (maxScrollLeft > 10) {
        const firstCard = container.children[0];
        const cardWidth = firstCard ? firstCard.clientWidth + 16 : 300;

        if (container.scrollLeft >= maxScrollLeft - 15) {
          container.scrollTo({ left: 0, behavior: 'smooth' });
        } else {
          container.scrollBy({ left: cardWidth, behavior: 'smooth' });
        }
      }
    }, 3200);

    return () => {
      clearInterval(interval);
      if (touchTimeout.current) clearTimeout(touchTimeout.current);
    };
  }, [isHovered, selectedCategory]);

  const handleTouchStart = () => {
    setIsHovered(true);
    if (touchTimeout.current) clearTimeout(touchTimeout.current);
  };

  const handleTouchEnd = () => {
    touchTimeout.current = setTimeout(() => {
      setIsHovered(false);
    }, 2500);
  };

  const handleCardClick = (product) => {
    if (onViewProductDetails) {
      onViewProductDetails(product);
    } else if (onSelectProduct) {
      onSelectProduct(product.name);
    }
  };

  return (
    <section id="products" className="py-[60px] bg-[#f8fafc] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header (Centered) */}
        <div className="text-center max-w-5xl mx-auto mb-7">
          <span className="text-xs font-extrabold uppercase tracking-wider text-[#0080ff] bg-blue-50 px-3.5 py-1.5 rounded-full border border-blue-100 inline-block mb-3">
            OUR PRODUCTS &amp; HARDWARE
          </span>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-[40px] font-bold text-slate-900 tracking-tight leading-tight font-heading whitespace-normal md:whitespace-nowrap">
            Premium CCTV Cameras &amp; Security Devices
          </h2>
        </div>

        {/* Category Filter Pills (Premium Segmented Bar) */}
        <div className="flex justify-center mb-8 sm:mb-10">
          <div className="inline-flex overflow-x-auto max-w-full scrollbar-none items-center justify-start sm:justify-center gap-1 sm:gap-1.5 p-1.5 rounded-full bg-white border border-slate-200/90 shadow-sm">
            {categories.map((cat) => {
              const isActive = selectedCategory === cat;
              return (
                <button
                  key={cat}
                  type="button"
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-5 sm:px-6 py-2 sm:py-2.5 rounded-full text-xs sm:text-sm font-bold transition-all duration-300 cursor-pointer whitespace-nowrap ${
                    isActive
                      ? 'bg-gradient-to-r from-[#0066ff] to-[#0088ff] text-white shadow-md shadow-blue-500/30 scale-[1.02]'
                      : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
                  }`}
                >
                  {cat === 'All' ? 'All Hardware' : cat}
                </button>
              );
            })}
          </div>
        </div>

        {/* Product Cards: 1-by-1 Auto Slider on Mobile, 4-col Grid on Desktop */}
        <div
          ref={scrollContainerRef}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
          className="flex overflow-x-auto scrollbar-none scroll-smooth gap-4 sm:gap-6 sm:grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 snap-x snap-mandatory pt-2 pb-6 px-4 -mx-4 sm:px-0 sm:mx-0 sm:pt-0 sm:pb-0"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {filteredProducts.map((item) => (
            <div
              key={item.id}
              onClick={() => handleCardClick(item)}
              className="group cursor-pointer bg-white rounded-2xl overflow-hidden border border-slate-200/90 hover:border-blue-400 hover:shadow-xl hover:shadow-blue-500/10 transition-all duration-300 flex flex-col justify-between hover:-translate-y-1.5 relative shrink-0 w-[85vw] max-w-[320px] sm:w-auto snap-center sm:snap-align-none"
            >
              <div>
                {/* Full Width Product Image Box */}
                <div className="w-full h-44 sm:h-48 overflow-hidden bg-slate-100 relative">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />

                  {/* Quick View Overlay on Hover */}
                  <div className="absolute inset-0 bg-slate-900/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center backdrop-blur-[2px]">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white text-slate-900 text-xs font-bold shadow-lg transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                      <Eye className="w-3.5 h-3.5 text-[#0080ff]" />
                      <span>View Specs</span>
                    </span>
                  </div>
                </div>

                {/* Product Info */}
                <div className="p-4 sm:p-5 pb-2">
                  <h3 className="text-base sm:text-lg font-bold text-slate-900 group-hover:text-[#0080ff] transition-colors mb-1.5 leading-snug font-heading">
                    {item.name}
                  </h3>
                  <p className="text-xs text-slate-500 leading-relaxed line-clamp-2 mb-2">
                    {item.description}
                  </p>
                </div>
              </div>

              {/* Price and Action Button */}
              <div className="px-4 sm:px-5 pb-4 sm:pb-5 pt-3 border-t border-slate-100 mt-auto">
                <div className="flex items-center justify-between mb-2">
                  <div>
                    <span className="text-[10px] text-slate-400 uppercase tracking-wider block font-semibold">
                      Starting From
                    </span>
                    <div className="flex items-baseline gap-1.5">
                      <span className="text-base sm:text-lg font-extrabold text-slate-900 font-heading">
                        {item.price}
                      </span>
                      {item.originalPrice && (
                        <span className="text-[11px] text-slate-400 line-through">
                          {item.originalPrice}
                        </span>
                      )}
                    </div>
                  </div>

                  {item.discount && (
                    <span className="text-[11px] font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-md border border-emerald-200">
                      {item.discount}
                    </span>
                  )}
                </div>

                {/* Button Action */}
                <div className="w-full flex items-center justify-between pt-1">
                  <span className="text-xs sm:text-sm font-bold text-[#0066ff] group-hover:underline flex items-center gap-1">
                    <span>Explore Specs</span>
                  </span>

                  <div className="w-7 h-7 rounded-full bg-[#0080ff] group-hover:bg-[#0066d6] text-white flex items-center justify-center shadow-md shadow-blue-500/20 transition-all group-hover:scale-110">
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Centered Bottom CTA Button */}
        <div className="mt-10 sm:mt-12 flex justify-center">
          <a
            href="#contact"
            className="inline-flex items-center gap-2.5 px-8 py-3.5 rounded-full bg-gradient-to-r from-[#0066ff] to-[#00a6ff] hover:from-[#0052cc] hover:to-[#0088ff] text-white font-bold text-sm sm:text-base shadow-lg shadow-blue-600/30 hover:shadow-blue-600/50 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 cursor-pointer"
          >
            <span>View All Products</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
