
import React, { useEffect } from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import CourseGrid from '@/components/CourseGrid';
import FeatureSection from '@/components/FeatureSection';
import Footer from '@/components/Footer';
import AnimatedGradient from '@/components/AnimatedGradient';

const Index = () => {
  useEffect(() => {
    // Scroll to top on page load
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen overflow-hidden">
      <AnimatedGradient />
      <Header />
      <main>
        <Hero />
        <CourseGrid />
        <FeatureSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
