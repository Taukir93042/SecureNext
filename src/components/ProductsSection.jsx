import React from 'react';
import { ArrowRight } from 'lucide-react';

export default function ProductsSection({ onSelectProduct }) {
  const products = [
    {
      id: 'bullet-cameras',
      name: 'Bullet Cameras',
      spec: 'Outdoor & indoor - HD / 4K',
      price: '₹2,499',
      image: '/images/product-bullet.jpg',
    },
    {
      id: 'dome-cameras',
      name: 'Dome Cameras',
      spec: 'Discreet & secure',
      price: '₹2,699',
      image: '/images/product-dome.jpg',
    },
    {
      id: 'ptz-cameras',
      name: 'PTZ Cameras',
      spec: '360° coverage - Zoom',
      price: '₹8,999',
      image: '/images/product-ptz.jpg',
    },
    {
      id: 'nvr-dvr',
      name: 'NVR / DVR',
      spec: 'Secure storage solutions',
      price: '₹5,495',
      image: '/images/product-nvr.jpg',
    },
    {
      id: 'accessories',
      name: 'Accessories',
      spec: 'Mounts, cables, power supply',
      price: '₹499',
      image: '/images/product-accessories.jpg',
    },
  ];

  return (
    <section id="products" className="py-20 lg:py-28 bg-[#f8fafc] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <div>
            <span className="text-xs font-extrabold uppercase tracking-wider text-[#0080ff] mb-2 inline-block">
              OUR PRODUCTS
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight leading-tight font-heading mb-2">
              Premium CCTV Cameras & Security Devices
            </h2>
            <p className="text-slate-600 text-base sm:text-lg">
              Top brands. Latest technology. Complete security for your space.
            </p>
          </div>

          <div>
            <a
              href="#contact"
              className="inline-flex items-center gap-1.5 text-sm font-bold text-[#0080ff] hover:text-[#0060df] transition-colors group shrink-0"
            >
              <span>View All Products</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>

        {/* 5 Product Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {products.map((item) => (
            <div
              key={item.id}
              onClick={() => onSelectProduct && onSelectProduct(item.name)}
              className="group cursor-pointer bg-white rounded-2xl p-5 border border-slate-200/80 hover:border-blue-300 hover:shadow-xl hover:shadow-blue-500/10 transition-all duration-300 flex flex-col justify-between hover:-translate-y-1.5"
            >
              {/* Product Image Box */}
              <div className="w-full aspect-square rounded-xl bg-slate-50 flex items-center justify-center p-3 mb-5 overflow-hidden relative">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-contain transform group-hover:scale-110 transition-transform duration-500"
                  loading="lazy"
                />
              </div>

              {/* Product Info */}
              <div>
                <h3 className="text-base font-bold text-slate-900 group-hover:text-[#0080ff] transition-colors mb-1 leading-snug">
                  {item.name}
                </h3>
                <p className="text-xs text-slate-500 mb-5 leading-snug">
                  {item.spec}
                </p>
              </div>

              {/* Price and Action Button */}
              <div className="flex items-center justify-between pt-3 border-t border-slate-100 mt-auto">
                <div className="text-xs text-slate-500">
                  From <span className="text-sm font-extrabold text-slate-900">{item.price}</span>
                </div>

                <div className="w-7 h-7 rounded-full bg-[#0080ff] group-hover:bg-[#0066d6] text-white flex items-center justify-center shadow-sm transition-colors">
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
