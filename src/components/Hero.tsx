
import React, { useEffect, useRef } from 'react';
import { ArrowRight, Book, LightBulb, Monitor } from 'lucide-react';

const Hero: React.FC = () => {
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

  return (
    <section className="relative pt-32 pb-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="tag reveal stagger-1 mb-4">The Future of Learning</p>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-medium tracking-tight text-ai-black reveal stagger-2 mb-6">
            Master Artificial Intelligence
          </h1>
          <p className="text-xl text-ai-dark-gray reveal stagger-3 mb-8 max-w-2xl mx-auto">
            Elevate your university experience with an intuitive platform that simplifies complex AI concepts and provides hands-on learning.
          </p>
          <div className="flex flex-wrap justify-center gap-4 reveal stagger-4">
            <button className="btn-primary">
              Explore Courses
              <ArrowRight size={16} className="ml-2" />
            </button>
            <button className="btn-secondary">
              Learn More
            </button>
          </div>
        </div>

        {/* Floating cards effect */}
        <div className="relative h-[500px] md:h-[600px] mx-auto max-w-5xl reveal stagger-5">
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full">
            {/* Main platform card */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[80%] h-[60%] glass-card p-6 shadow-2xl">
              <div className="h-full bg-ai-blue/5 rounded-lg overflow-hidden">
                <div className="h-12 bg-ai-gray flex items-center space-x-2 px-4">
                  <div className="w-3 h-3 rounded-full bg-red-400"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                  <div className="w-3 h-3 rounded-full bg-green-400"></div>
                  <div className="ml-4 text-ai-dark-gray text-sm">AI Learning Interface</div>
                </div>
                <div className="grid grid-cols-12 h-[calc(100%-3rem)]">
                  <div className="col-span-3 border-r border-ai-gray/30 p-4">
                    <div className="w-full h-6 bg-ai-gray/50 rounded-full mb-4"></div>
                    <div className="w-3/4 h-6 bg-ai-gray/50 rounded-full mb-4"></div>
                    <div className="w-5/6 h-6 bg-ai-gray/50 rounded-full mb-4"></div>
                    <div className="w-4/5 h-6 bg-ai-blue/20 rounded-full mb-4"></div>
                    <div className="w-3/4 h-6 bg-ai-gray/50 rounded-full mb-4"></div>
                  </div>
                  <div className="col-span-9 p-4">
                    <div className="mb-6">
                      <div className="w-1/2 h-8 bg-ai-gray/50 rounded-full mb-3"></div>
                      <div className="w-full h-4 bg-ai-gray/30 rounded-full mb-2"></div>
                      <div className="w-full h-4 bg-ai-gray/30 rounded-full mb-2"></div>
                      <div className="w-3/4 h-4 bg-ai-gray/30 rounded-full"></div>
                    </div>
                    <div className="grid grid-cols-2 gap-4 mb-6">
                      <div className="h-24 bg-ai-blue/10 rounded-lg"></div>
                      <div className="h-24 bg-ai-gray/40 rounded-lg"></div>
                    </div>
                    <div className="w-1/3 h-10 bg-ai-blue rounded-full ml-auto"></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating feature cards */}
            <div className="absolute top-[15%] left-[10%] glass-card p-4 shadow-lg w-64 animate-float" style={{ animationDelay: '0.2s' }}>
              <div className="flex items-center">
                <div className="w-10 h-10 rounded-full bg-ai-blue/20 flex items-center justify-center text-ai-blue mr-3">
                  <Book size={20} />
                </div>
                <div>
                  <h3 className="font-medium text-ai-black">Interactive Learning</h3>
                  <p className="text-sm text-ai-dark-gray">Hands-on AI experiments</p>
                </div>
              </div>
            </div>

            <div className="absolute top-[30%] right-[5%] glass-card p-4 shadow-lg w-64 animate-float" style={{ animationDelay: '0.5s' }}>
              <div className="flex items-center">
                <div className="w-10 h-10 rounded-full bg-ai-blue/20 flex items-center justify-center text-ai-blue mr-3">
                  <LightBulb size={20} />
                </div>
                <div>
                  <h3 className="font-medium text-ai-black">AI Concepts</h3>
                  <p className="text-sm text-ai-dark-gray">Simplified explanations</p>
                </div>
              </div>
            </div>

            <div className="absolute bottom-[20%] left-[15%] glass-card p-4 shadow-lg w-64 animate-float" style={{ animationDelay: '0.8s' }}>
              <div className="flex items-center">
                <div className="w-10 h-10 rounded-full bg-ai-blue/20 flex items-center justify-center text-ai-blue mr-3">
                  <Monitor size={20} />
                </div>
                <div>
                  <h3 className="font-medium text-ai-black">Practical Projects</h3>
                  <p className="text-sm text-ai-dark-gray">Apply AI knowledge</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
