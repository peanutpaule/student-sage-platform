
import React, { useEffect, useRef } from 'react';
import { ArrowRight } from 'lucide-react';

const FeatureSection: React.FC = () => {
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    observerRef.current = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      });
    }, { threshold: 0.1 });

    const revealElements = document.querySelectorAll('.reveal');
    revealElements.forEach((el) => {
      observerRef.current?.observe(el);
    });

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, []);

  const features = [
    {
      title: "Personalized Learning Paths",
      description: "AI-driven curriculum that adapts to your learning style and progress, focusing on areas that need improvement.",
      image: "https://images.unsplash.com/photo-1569078449082-36b6356252c9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80",
    },
    {
      title: "Interactive AI Projects",
      description: "Apply theoretical concepts with hands-on projects designed to solidify your understanding of AI principles.",
      image: "https://images.unsplash.com/photo-1581091877018-dac6a371d50f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80",
    },
    {
      title: "Expert Community",
      description: "Connect with professors, industry professionals and fellow students to collaborate and grow together.",
      image: "https://images.unsplash.com/photo-1543269865-cbf427effbad?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80",
    },
  ];

  return (
    <section className="py-20 bg-ai-gray/30 relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="section-title reveal stagger-1">Why Choose AI Campus</h2>
          <p className="section-subtitle reveal stagger-2">
            Our platform is built with the specific needs of university students in mind,
            providing tools that enhance your academic journey.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className={`glass-card overflow-hidden reveal ${
                index === 0 ? 'stagger-2' : index === 1 ? 'stagger-3' : 'stagger-4'
              }`}
            >
              <div className="h-48 overflow-hidden">
                <img 
                  src={feature.image} 
                  alt={feature.title} 
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-medium text-ai-black mb-3">{feature.title}</h3>
                <p className="text-ai-dark-gray">{feature.description}</p>
                <button className="btn-text mt-4">
                  Learn more
                  <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-white rounded-2xl p-8 md:p-12 shadow-lg reveal stagger-5">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl md:text-3xl font-medium text-ai-black mb-4">Ready to transform your AI learning journey?</h3>
              <p className="text-ai-dark-gray mb-6">
                Join thousands of university students who are mastering artificial intelligence
                through our intuitive platform.
              </p>
              <button className="btn-primary">
                Get Started Today
                <ArrowRight size={16} className="ml-2" />
              </button>
            </div>
            <div className="relative h-64 md:h-auto">
              <div className="absolute inset-0 bg-gradient-to-r from-ai-blue/20 to-ai-light-blue/20 rounded-xl animate-pulse-slow"></div>
              <div className="absolute inset-4 bg-white rounded-lg flex items-center justify-center">
                <div className="text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-ai-blue/10 text-ai-blue mb-4">
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="currentColor" strokeWidth="2"/>
                      <path d="M15 12L10 16V8L15 12Z" fill="currentColor"/>
                    </svg>
                  </div>
                  <h4 className="text-lg font-medium text-ai-black mb-2">Watch Demo</h4>
                  <p className="text-sm text-ai-dark-gray">See the platform in action</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;
