import React, { useState } from 'react';
import { ArrowRight, Star, ShieldCheck, Eye, Sparkles, Check } from 'lucide-react';
import { productsData } from '../data/productsData';

export default function ProductsSection({ onSelectProduct, onViewProductDetails }) {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', 'Cameras', 'Recorders', 'Accessories'];

  const filteredProducts =
    selectedCategory === 'All'
      ? productsData
      : productsData.filter((item) => item.category === selectedCategory);

  const handleCardClick = (product) => {
    if (onViewProductDetails) {
      onViewProductDetails(product);
    } else if (onSelectProduct) {
      onSelectProduct(product.name);
    }
  };

  return (
    <section id="products" className="py-20 lg:py-28 bg-[#f8fafc] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-10">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="text-xs font-extrabold uppercase tracking-wider text-[#0080ff] bg-blue-50 px-3 py-1 rounded-full border border-blue-100">
                OUR PRODUCTS &amp; HARDWARE
              </span>
              <span className="hidden sm:inline-flex items-center gap-1 text-xs font-semibold text-emerald-600 bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-100">
                <Check className="w-3 h-3" />
                Hikvision / CP PLUS / Dahua Compatible
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight leading-tight font-heading mb-2">
              Premium CCTV Cameras &amp; Security Devices
            </h2>
            <p className="text-slate-600 text-base sm:text-lg max-w-2xl">
              Top-tier brands. AI-powered smart surveillance. Detailed specifications &amp; certified onsite warranty.
            </p>
          </div>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center gap-2 bg-slate-200/70 p-1.5 rounded-2xl border border-slate-300/60 self-start lg:self-auto">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                  selectedCategory === cat
                    ? 'bg-[#0080ff] text-white shadow-md shadow-blue-500/25'
                    : 'text-slate-700 hover:text-slate-900 hover:bg-white/60'
                }`}
              >
                {cat === 'All' ? 'All Hardware' : cat}
              </button>
            ))}
          </div>
        </div>

        {/* 5 Product Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {filteredProducts.map((item) => (
            <div
              key={item.id}
              onClick={() => handleCardClick(item)}
              className="group cursor-pointer bg-white rounded-2xl p-4 sm:p-5 border border-slate-200/90 hover:border-blue-400 hover:shadow-2xl hover:shadow-blue-500/15 transition-all duration-300 flex flex-col justify-between hover:-translate-y-2 relative"
            >
              {/* Card Top Badges */}
              <div className="flex items-center justify-between gap-1 mb-3">
                {item.tag ? (
                  <span className="inline-flex items-center gap-1 text-[11px] font-extrabold px-2.5 py-0.5 rounded-full bg-blue-50 text-[#0066ff] border border-blue-100">
                    <Sparkles className="w-2.5 h-2.5" />
                    {item.tag}
                  </span>
                ) : (
                  <div></div>
                )}

                <div className="flex items-center gap-1 text-[11px] font-bold text-amber-500 bg-amber-50 px-2 py-0.5 rounded-full border border-amber-100">
                  <Star className="w-3 h-3 fill-amber-400 text-amber-400" />
                  <span>{item.rating}</span>
                </div>
              </div>

              {/* Product Image Box with Hover Quick View Prompt */}
              <div className="w-full aspect-square rounded-xl bg-slate-50 flex items-center justify-center p-3 mb-4 overflow-hidden relative border border-slate-100">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-contain transform group-hover:scale-110 transition-transform duration-500"
                  loading="lazy"
                />

                {/* Quick View Overlay on Hover */}
                <div className="absolute inset-0 bg-slate-900/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center backdrop-blur-[2px]">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white text-slate-900 text-xs font-bold shadow-lg transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                    <Eye className="w-3.5 h-3.5 text-[#0080ff]" />
                    <span>View Details &amp; Specs</span>
                  </span>
                </div>
              </div>

              {/* Product Info */}
              <div className="mb-4">
                <h3 className="text-base font-bold text-slate-900 group-hover:text-[#0080ff] transition-colors mb-1 leading-snug">
                  {item.name}
                </h3>
                <p className="text-xs text-slate-500 mb-3 leading-snug line-clamp-1">
                  {item.spec}
                </p>

                {/* Feature Highlights Pills */}
                {item.highlights && item.highlights.length > 0 && (
                  <div className="flex flex-wrap gap-1.5 mb-2">
                    {item.highlights.slice(0, 2).map((h, i) => (
                      <span
                        key={i}
                        className="inline-block text-[10px] font-semibold bg-slate-100 text-slate-700 px-2 py-0.5 rounded-md border border-slate-200/60"
                      >
                        {h}
                      </span>
                    ))}
                  </div>
                )}
              </div>

              {/* Price and Action Button */}
              <div className="pt-3 border-t border-slate-100 mt-auto">
                <div className="flex items-center justify-between mb-2.5">
                  <div>
                    <span className="text-[10px] text-slate-400 uppercase tracking-wider block font-semibold">
                      Starting From
                    </span>
                    <div className="flex items-baseline gap-1.5">
                      <span className="text-base font-extrabold text-slate-900 font-heading">
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
                    <span className="text-[10px] font-bold text-emerald-600 bg-emerald-50 px-1.5 py-0.5 rounded border border-emerald-200">
                      {item.discount}
                    </span>
                  )}
                </div>

                {/* Button Action */}
                <div className="w-full flex items-center justify-between pt-1">
                  <span className="text-xs font-bold text-[#0080ff] group-hover:underline flex items-center gap-1">
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

        {/* Bottom Assurance Banner */}
        <div className="mt-12 bg-white rounded-2xl p-5 sm:p-6 border border-slate-200 shadow-sm flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-2xl bg-blue-50 border border-blue-100 flex items-center justify-center text-[#0080ff] shrink-0">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-slate-900">
                Need a custom CCTV configuration or bulk quotation for your site?
              </h4>
              <p className="text-xs text-slate-500">
                We provide free site surveys, brand recommendations (Hikvision, CP PLUS, Dahua), and tailored camera blueprints.
              </p>
            </div>
          </div>

          <button
            onClick={() => onSelectProduct && onSelectProduct('Custom CCTV Package')}
            className="w-full md:w-auto inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-xl bg-[#0080ff] hover:bg-[#0070e0] text-white text-xs sm:text-sm font-bold shadow-md shadow-blue-500/20 hover:shadow-blue-500/40 transition-all cursor-pointer whitespace-nowrap"
          >
            <span>Request Custom Package</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
}
