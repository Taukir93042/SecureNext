import React from 'react';
import HeroBanner from '../components/HeroBanner';
import QuickCategories from '../components/QuickCategories';
import AboutSection from '../components/AboutSection';
import ServicesSection from '../components/ServicesSection';
import ProductsSection from '../components/ProductsSection';
import ProjectsSection from '../components/ProjectsSection';
import TestimonialsSection from '../components/TestimonialsSection';
import CtaBanner from '../components/CtaBanner';

export default function Home({ onOpenQuote, onOpenVideo }) {
  return (
    <main className="flex-grow">
      {/* 1. Hero / Banner Section */}
      <HeroBanner
        onOpenQuote={() => onOpenQuote()}
        onOpenVideo={onOpenVideo}
      />

      {/* 2. Quick Category Cards (6 Cards) */}
      <QuickCategories onSelectCategory={(cat) => onOpenQuote(cat)} />

      {/* 3. About SecureNest Section */}
      <AboutSection onLearnMore={() => onOpenQuote('Security Consultation')} />

      {/* 4. Comprehensive Security Solutions (Services) */}
      <ServicesSection onSelectService={(srv) => onOpenQuote(srv)} />

      {/* 5. Premium CCTV Cameras & Security Devices (Products) */}
      <ProductsSection onSelectProduct={(prod) => onOpenQuote(prod)} />

      {/* 6. Real Installations. Real Protection (Projects & Stats) */}
      <ProjectsSection onOpenQuote={() => onOpenQuote('Project Inquiry')} />

      {/* 7. What Our Customers Say (Testimonials) */}
      <TestimonialsSection />

      {/* 8. Call to Action Banner */}
      <CtaBanner onOpenQuote={() => onOpenQuote()} />
    </main>
  );
}
