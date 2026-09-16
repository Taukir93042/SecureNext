import React from 'react';

export default function QuickCategories({ onSelectCategory }) {
  const categories = [
    {
      id: 'homes',
      title: 'Homes',
      desc: 'Keep your family safe',
      renderIcon: () => (
        <svg viewBox="0 0 24 24" className="w-6 h-6 text-[#0066ff]" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          {/* Modern House */}
          <path d="M3 10.5L12 3l9 7.5" />
          <path d="M5 9v11a1 1 0 001 1h12a1 1 0 001-1V9" />
          <path d="M9 21v-6a1 1 0 011-1h4a1 1 0 011 1v6" />
          <path d="M18 6.5V4h-2v1.5" />
        </svg>
      ),
    },
    {
      id: 'offices',
      title: 'Offices',
      desc: 'Secure your workplace',
      renderIcon: () => (
        <svg viewBox="0 0 24 24" className="w-6 h-6 text-[#0066ff]" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          {/* Corporate Office Buildings */}
          <rect x="3" y="4" width="10" height="17" rx="1" />
          <path d="M13 9h7a1 1 0 011 1v11h-8" />
          <path d="M6 8h4M6 12h4M6 16h4M16 13h2M16 17h2" />
        </svg>
      ),
    },
    {
      id: 'shops',
      title: 'Shops & Retail',
      desc: 'Prevent theft & loss',
      renderIcon: () => (
        <svg viewBox="0 0 24 24" className="w-6 h-6 text-[#0066ff]" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          {/* Storefront / Retail Canopy */}
          <path d="M3 9l2-5h14l2 5" />
          <path d="M21 9v11a1 1 0 01-1 1H4a1 1 0 01-1-1V9" />
          <path d="M3 9a3 3 0 006 0 3 3 0 006 0 3 3 0 006 0" />
          <path d="M10 21v-6h4v6" />
        </svg>
      ),
    },
    {
      id: 'warehouses',
      title: 'Warehouses',
      desc: 'Monitor your assets',
      renderIcon: () => (
        <svg viewBox="0 0 24 24" className="w-6 h-6 text-[#0066ff]" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          {/* Warehouse Facility */}
          <path d="M3 21V8l9-4 9 4v13" />
          <path d="M7 21v-8h10v8" />
          <path d="M7 17h10M7 13h10" />
        </svg>
      ),
    },
    {
      id: 'apartments',
      title: 'Apartments',
      desc: 'Security for every corner',
      renderIcon: () => (
        <svg viewBox="0 0 24 24" className="w-6 h-6 text-[#0066ff]" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          {/* Multi-story Apartment Tower */}
          <rect x="4" y="3" width="16" height="18" rx="1.5" />
          <path d="M8 7h2M14 7h2M8 11h2M14 11h2M8 15h2M14 15h2" />
          <path d="M10 21v-2a1 1 0 011-1h2a1 1 0 011 1v2" />
        </svg>
      ),
    },
    {
      id: 'industries',
      title: 'Industries',
      desc: 'Large-scale solutions',
      renderIcon: () => (
        <svg viewBox="0 0 24 24" className="w-6 h-6 text-[#0066ff]" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          {/* Industrial Factory & Smokestack */}
          <path d="M2 21h20" />
          <path d="M4 21V10l6 4V10l6 4V4h4v17" />
          <path d="M8 17h1M14 17h1" />
        </svg>
      ),
    },
  ];

  return (
    <section className="relative z-20 bg-white border-y border-slate-200/80 shadow-sm py-4 sm:py-5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-5 sm:gap-6 items-center">
          {categories.map((cat) => (
            <div
              key={cat.id}
              onClick={() => onSelectCategory && onSelectCategory(cat.title)}
              className="group cursor-pointer flex items-center gap-3 transition-all duration-200 hover:-translate-y-0.5"
            >
              {/* Professional Icon Box */}
              <div className="w-10 h-10 shrink-0 rounded-xl bg-blue-50/80 group-hover:bg-[#0066ff] border border-blue-100 flex items-center justify-center transition-all duration-300 shadow-sm group-hover:shadow-md group-hover:shadow-blue-500/25">
                <div className="group-hover:text-white transition-colors duration-200 [&>svg]:group-hover:text-white">
                  {cat.renderIcon()}
                </div>
              </div>

              {/* Text info */}
              <div className="flex flex-col text-left">
                <h3 className="text-sm font-bold text-slate-900 group-hover:text-[#0066ff] transition-colors leading-tight mb-0.5">
                  {cat.title}
                </h3>
                <p className="text-[11px] text-slate-500 leading-snug">
                  {cat.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
