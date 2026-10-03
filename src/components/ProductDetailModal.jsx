import React, { useState } from 'react';
import {
  X,
  Star,
  ShieldCheck,
  CheckCircle2,
  MessageSquare,
  ArrowRight,
  Cpu,
  Eye,
  Layers,
  Box,
  Wrench,
  Sparkles,
  Zap,
} from 'lucide-react';

export default function ProductDetailModal({ product, isOpen, onClose, onOpenQuote }) {
  const [activeTab, setActiveTab] = useState('overview');
  const [selectedVariantIndex, setSelectedVariantIndex] = useState(0);

  if (!isOpen || !product) return null;

  const currentVariant =
    product.variants && product.variants[selectedVariantIndex]
      ? product.variants[selectedVariantIndex]
      : { name: product.name, price: product.price, originalPrice: product.originalPrice };

  const handleRequestQuote = () => {
    onClose();
    if (onOpenQuote) {
      onOpenQuote(`${product.name} (${currentVariant.name})`);
    }
  };

  const whatsappMessage = encodeURIComponent(
    `Hello SecureNest! I am interested in *${product.name}* (${currentVariant.name}) priced at ${currentVariant.price}. Please provide more details and quotation.`
  );

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 md:p-6 bg-black/85 backdrop-blur-md overflow-y-auto animate-in fade-in duration-200">
      <div className="relative w-full max-w-4xl bg-[#081226] border border-white/15 rounded-3xl shadow-2xl text-white my-auto overflow-hidden flex flex-col max-h-[92vh]">
        
        {/* Glow Background Elements */}
        <div className="absolute top-0 right-0 w-80 h-80 bg-blue-600/15 rounded-full blur-3xl pointer-events-none -translate-y-1/2 translate-x-1/2"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-cyan-600/10 rounded-full blur-3xl pointer-events-none translate-y-1/2 -translate-x-1/2"></div>

        {/* Modal Top Bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-white/10 bg-white/[0.02] relative z-10 shrink-0">
          <div className="flex items-center gap-3">
            <span className="px-2.5 py-1 rounded-full text-[11px] font-bold tracking-wider uppercase bg-blue-500/20 text-[#00c6ff] border border-blue-500/30">
              {product.category || 'Security Device'}
            </span>
            {product.tag && (
              <span className="hidden sm:inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[11px] font-bold bg-amber-500/15 text-amber-300 border border-amber-500/30">
                <Sparkles className="w-3 h-3 text-amber-400" />
                {product.tag}
              </span>
            )}
          </div>

          <button
            onClick={onClose}
            className="p-2 text-slate-400 hover:text-white rounded-xl hover:bg-white/10 transition-colors cursor-pointer"
            aria-label="Close product details"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Scrollable Body */}
        <div className="overflow-y-auto p-5 sm:p-7 space-y-6 relative z-10 custom-scrollbar">
          {/* Top Section: Image & Main Info Grid */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
            
            {/* Left: Product Image Box */}
            <div className="md:col-span-5 bg-gradient-to-b from-white/10 to-white/5 border border-white/10 rounded-2xl p-5 flex flex-col items-center justify-center relative group">
              <div className="w-full aspect-square max-w-[280px] flex items-center justify-center relative overflow-hidden rounded-xl">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-contain filter drop-shadow-2xl group-hover:scale-105 transition-transform duration-300"
                />
              </div>

              {/* Badges Under Image */}
              <div className="w-full mt-4 pt-4 border-t border-white/10 grid grid-cols-2 gap-2 text-center">
                <div className="bg-white/5 rounded-xl py-2 px-2.5 border border-white/5 flex items-center justify-center gap-1.5 text-xs text-slate-300">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                  <span className="truncate">{product.warranty || '2 Yrs Warranty'}</span>
                </div>
                <div className="bg-white/5 rounded-xl py-2 px-2.5 border border-white/5 flex items-center justify-center gap-1.5 text-xs text-slate-300">
                  <CheckCircle2 className="w-3.5 h-3.5 text-sky-400 shrink-0" />
                  <span className="truncate">Genuine Certified</span>
                </div>
              </div>
            </div>

            {/* Right: Key Details & Variant Selector */}
            <div className="md:col-span-7 flex flex-col justify-between h-full">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <div className="flex items-center text-amber-400 text-xs font-semibold gap-1 bg-amber-400/10 px-2.5 py-0.5 rounded-full border border-amber-400/20">
                    <Star className="w-3.5 h-3.5 fill-amber-400" />
                    <span>{product.rating || '4.9'}</span>
                  </div>
                  <span className="text-xs text-slate-400">
                    ({product.reviewsCount || '120+'} verified customer reviews)
                  </span>
                </div>

                <h2 className="text-2xl sm:text-3xl font-black text-white font-heading tracking-tight leading-snug mb-1">
                  {product.name}
                </h2>
                <p className="text-sm text-sky-400 font-medium mb-3">
                  {product.modelName || product.spec}
                </p>

                <p className="text-slate-300 text-xs sm:text-sm leading-relaxed mb-4">
                  {product.description}
                </p>

                {/* Highlights Pills */}
                {product.highlights && product.highlights.length > 0 && (
                  <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-5">
                    {product.highlights.map((hl, idx) => (
                      <span
                        key={idx}
                        className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg text-xs font-medium bg-blue-500/15 border border-blue-500/25 text-blue-200"
                      >
                        <Zap className="w-3 h-3 text-[#00c6ff]" />
                        {hl}
                      </span>
                    ))}
                  </div>
                )}
              </div>

              {/* Variant Selector */}
              {product.variants && product.variants.length > 0 && (
                <div className="bg-white/5 border border-white/10 rounded-2xl p-4">
                  <div className="flex items-center justify-between mb-2">
                    <label className="text-xs font-bold text-slate-300 uppercase tracking-wider">
                      Select Model / Resolution:
                    </label>
                    <span className="text-xs text-sky-400 font-semibold">
                      {currentVariant.name}
                    </span>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                    {product.variants.map((variant, vIdx) => {
                      const isSelected = selectedVariantIndex === vIdx;
                      return (
                        <button
                          key={vIdx}
                          type="button"
                          onClick={() => setSelectedVariantIndex(vIdx)}
                          className={`px-3 py-2 rounded-xl text-left transition-all border text-xs cursor-pointer flex flex-col justify-between ${
                            isSelected
                              ? 'bg-blue-600/30 border-sky-400 text-white shadow-md shadow-blue-500/20'
                              : 'bg-white/5 border-white/10 text-slate-300 hover:bg-white/10'
                          }`}
                        >
                          <span className="font-semibold line-clamp-1">{variant.name}</span>
                          <span className="font-extrabold text-sky-300 mt-1">{variant.price}</span>
                        </button>
                      );
                    })}
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Tab Navigation */}
          <div className="border-b border-white/10 flex items-center gap-2 sm:gap-4 overflow-x-auto pb-1 pt-2 scrollbar-none">
            <button
              onClick={() => setActiveTab('overview')}
              className={`pb-2.5 px-3 text-xs sm:text-sm font-bold transition-all relative whitespace-nowrap cursor-pointer flex items-center gap-1.5 ${
                activeTab === 'overview'
                  ? 'text-[#00c6ff] border-b-2 border-[#00c6ff]'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              <Eye className="w-4 h-4" />
              <span>Key Features</span>
            </button>

            <button
              onClick={() => setActiveTab('specs')}
              className={`pb-2.5 px-3 text-xs sm:text-sm font-bold transition-all relative whitespace-nowrap cursor-pointer flex items-center gap-1.5 ${
                activeTab === 'specs'
                  ? 'text-[#00c6ff] border-b-2 border-[#00c6ff]'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              <Cpu className="w-4 h-4" />
              <span>Technical Specifications</span>
            </button>

            <button
              onClick={() => setActiveTab('box')}
              className={`pb-2.5 px-3 text-xs sm:text-sm font-bold transition-all relative whitespace-nowrap cursor-pointer flex items-center gap-1.5 ${
                activeTab === 'box'
                  ? 'text-[#00c6ff] border-b-2 border-[#00c6ff]'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              <Box className="w-4 h-4" />
              <span>In The Box</span>
            </button>

            <button
              onClick={() => setActiveTab('usecases')}
              className={`pb-2.5 px-3 text-xs sm:text-sm font-bold transition-all relative whitespace-nowrap cursor-pointer flex items-center gap-1.5 ${
                activeTab === 'usecases'
                  ? 'text-[#00c6ff] border-b-2 border-[#00c6ff]'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              <Layers className="w-4 h-4" />
              <span>Recommended For</span>
            </button>
          </div>

          {/* Tab Content Panels */}
          <div className="min-h-[160px]">
            {/* 1. KEY FEATURES */}
            {activeTab === 'overview' && (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                {product.keyFeatures &&
                  product.keyFeatures.map((feat, idx) => (
                    <div
                      key={idx}
                      className="bg-white/5 border border-white/10 rounded-2xl p-4 hover:border-blue-400/40 hover:bg-white/[0.07] transition-all"
                    >
                      <div className="flex items-start gap-3">
                        <div className="w-8 h-8 rounded-xl bg-blue-500/20 text-[#00c6ff] flex items-center justify-center shrink-0 border border-blue-500/30">
                          <CheckCircle2 className="w-4 h-4" />
                        </div>
                        <div>
                          <h4 className="text-sm font-bold text-white mb-1">{feat.title}</h4>
                          <p className="text-xs text-slate-300 leading-relaxed">{feat.desc}</p>
                        </div>
                      </div>
                    </div>
                  ))}
              </div>
            )}

            {/* 2. TECHNICAL SPECIFICATIONS TABLE */}
            {activeTab === 'specs' && product.specs && (
              <div className="bg-white/5 border border-white/10 rounded-2xl overflow-hidden">
                <div className="divide-y divide-white/5">
                  {Object.entries(product.specs).map(([label, value], idx) => (
                    <div
                      key={idx}
                      className="grid grid-cols-1 sm:grid-cols-3 px-4 sm:px-5 py-3 text-xs hover:bg-white/[0.03] transition-colors"
                    >
                      <span className="font-semibold text-sky-300 sm:col-span-1">{label}</span>
                      <span className="text-slate-200 sm:col-span-2 mt-0.5 sm:mt-0 font-medium">
                        {value}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* 3. IN THE BOX */}
            {activeTab === 'box' && (
              <div className="bg-white/5 border border-white/10 rounded-2xl p-5">
                <h4 className="text-xs font-bold uppercase tracking-wider text-sky-400 mb-3">
                  Package Contents:
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {product.inTheBox &&
                    product.inTheBox.map((item, idx) => (
                      <div
                        key={idx}
                        className="flex items-center gap-2.5 p-2.5 rounded-xl bg-white/[0.03] border border-white/5 text-xs text-slate-200"
                      >
                        <Box className="w-4 h-4 text-emerald-400 shrink-0" />
                        <span>{item}</span>
                      </div>
                    ))}
                </div>
              </div>
            )}

            {/* 4. RECOMMENDED APPLICATIONS */}
            {activeTab === 'usecases' && (
              <div className="bg-white/5 border border-white/10 rounded-2xl p-5">
                <h4 className="text-xs font-bold uppercase tracking-wider text-sky-400 mb-3">
                  Ideal Installation Locations:
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {product.bestFor &&
                    product.bestFor.map((item, idx) => (
                      <div
                        key={idx}
                        className="flex items-center gap-2.5 p-3 rounded-xl bg-white/[0.03] border border-white/5 text-xs text-slate-200"
                      >
                        <Wrench className="w-4 h-4 text-[#00c6ff] shrink-0" />
                        <span className="font-medium">{item}</span>
                      </div>
                    ))}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Modal Bottom Sticky Action Bar */}
        <div className="px-5 sm:px-7 py-4 border-t border-white/10 bg-[#060e20] flex flex-col sm:flex-row items-center justify-between gap-4 shrink-0 relative z-20">
          {/* Price display */}
          <div className="flex items-baseline gap-2.5">
            <div>
              <span className="text-[11px] text-slate-400 block uppercase tracking-wider font-medium">
                Starting Price
              </span>
              <div className="flex items-baseline gap-2">
                <span className="text-2xl font-black text-white font-heading">
                  {currentVariant.price}
                </span>
                {currentVariant.originalPrice && (
                  <span className="text-xs text-slate-400 line-through">
                    {currentVariant.originalPrice}
                  </span>
                )}
                {product.discount && (
                  <span className="px-1.5 py-0.5 rounded text-[10px] font-bold bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
                    {product.discount}
                  </span>
                )}
              </div>
            </div>
            <span className="text-[11px] text-slate-400 hidden sm:inline">
              • Incl. all taxes &amp; warranty
            </span>
          </div>

          {/* Actions */}
          <div className="flex items-center gap-2.5 w-full sm:w-auto">
            {/* WhatsApp Link */}
            <a
              href={`https://wa.me/919279185479?text=${whatsappMessage}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold transition-all shadow-md shadow-emerald-600/20 cursor-pointer"
            >
              <MessageSquare className="w-4 h-4" />
              <span className="hidden xs:inline">WhatsApp</span>
            </a>

            {/* Request Quote Button */}
            <button
              onClick={handleRequestQuote}
              className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-[#0080ff] hover:bg-[#0070e0] text-white text-xs sm:text-sm font-bold transition-all shadow-lg shadow-blue-500/30 hover:shadow-blue-500/50 cursor-pointer"
            >
              <span>Get Free Quote / Installation</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
