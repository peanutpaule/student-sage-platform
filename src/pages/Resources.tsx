
import React, { useEffect } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import AnimatedGradient from '@/components/AnimatedGradient';
import { ArrowRight, Book, BookOpen, FileText, GraduationCap, LightBulb, Monitor } from 'lucide-react';
import { Link } from 'react-router-dom';

const resources = [
  {
    title: "Getting Started with AI",
    description: "An introductory guide to artificial intelligence for beginners.",
    icon: <LightBulb className="h-6 w-6 text-ai-blue" />,
    link: "#",
    category: "Guide"
  },
  {
    title: "Machine Learning Algorithms Cheatsheet",
    description: "A comprehensive reference for common ML algorithms and their applications.",
    icon: <FileText className="h-6 w-6 text-ai-blue" />,
    link: "#",
    category: "Cheatsheet"
  },
  {
    title: "Neural Networks Explained",
    description: "Visual explanations of how neural networks function and learn patterns.",
    icon: <Monitor className="h-6 w-6 text-ai-blue" />,
    link: "#",
    category: "Tutorial"
  },
  {
    title: "AI Ethics Framework",
    description: "Guidelines for implementing ethical considerations in AI development.",
    icon: <Book className="h-6 w-6 text-ai-blue" />,
    link: "#",
    category: "Framework"
  },
  {
    title: "Data Preprocessing Techniques",
    description: "Learn essential techniques for preparing data for AI models.",
    icon: <BookOpen className="h-6 w-6 text-ai-blue" />,
    link: "#",
    category: "Guide"
  },
  {
    title: "AI Research Paper Summaries",
    description: "Simplified explanations of groundbreaking AI research papers.",
    icon: <GraduationCap className="h-6 w-6 text-ai-blue" />,
    link: "#",
    category: "Research"
  }
];

const libraries = [
  {
    name: "TensorFlow",
    description: "Open-source library for machine learning and artificial intelligence.",
    link: "https://www.tensorflow.org/",
    image: "https://www.tensorflow.org/images/tf_logo_social.png"
  },
  {
    name: "PyTorch",
    description: "Open source machine learning framework that accelerates the path from research to production.",
    link: "https://pytorch.org/",
    image: "https://pytorch.org/assets/images/pytorch-logo.png"
  },
  {
    name: "scikit-learn",
    description: "Simple and efficient tools for predictive data analysis and modeling.",
    link: "https://scikit-learn.org/",
    image: "https://scikit-learn.org/stable/_static/scikit-learn-logo-small.png"
  },
  {
    name: "Hugging Face",
    description: "Build, train and deploy state of the art models powered by the reference open source in machine learning.",
    link: "https://huggingface.co/",
    image: "https://huggingface.co/front/assets/huggingface_logo.svg"
  }
];

const events = [
  {
    title: "AI Ethics Workshop",
    date: "June 15, 2023",
    description: "Join experts to discuss ethical considerations in AI development.",
    location: "Virtual",
    link: "#"
  },
  {
    title: "Machine Learning Hackathon",
    date: "July 8-10, 2023",
    description: "Build innovative ML solutions to real-world problems.",
    location: "University AI Lab",
    link: "#"
  },
  {
    title: "Deep Learning Conference",
    date: "August 22-24, 2023",
    description: "Explore the latest advancements in deep learning research.",
    location: "Virtual",
    link: "#"
  }
];

const Resources = () => {
  useEffect(() => {
    // Scroll to top on page load
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen overflow-hidden">
      <AnimatedGradient className="opacity-50" />
      <Header />
      <main className="pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-medium tracking-tight text-ai-black mb-4">
              AI Learning Resources
            </h1>
            <p className="text-xl text-ai-dark-gray max-w-2xl mx-auto">
              Expand your knowledge with our curated collection of tools, tutorials, and references for AI students.
            </p>
          </div>

          {/* Resources Section */}
          <section className="mb-20">
            <h2 className="text-3xl font-medium text-ai-black mb-8">Learning Materials</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {resources.map((resource, index) => (
                <div key={index} className="glass-card hover:shadow-lg transition-all p-6">
                  <div className="flex items-start">
                    <div className="w-12 h-12 rounded-full bg-ai-blue/10 flex items-center justify-center mr-4 shrink-0">
                      {resource.icon}
                    </div>
                    <div>
                      <span className="tag mb-2">{resource.category}</span>
                      <h3 className="text-xl font-medium text-ai-black mb-2">{resource.title}</h3>
                      <p className="text-ai-dark-gray mb-4">{resource.description}</p>
                      <a href={resource.link} className="btn-text">
                        Access resource
                        <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Libraries Section */}
          <section className="mb-20">
            <h2 className="text-3xl font-medium text-ai-black mb-8">AI Libraries & Tools</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {libraries.map((lib, index) => (
                <a 
                  key={index} 
                  href={lib.link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="glass-card hover:shadow-lg transition-all overflow-hidden group"
                >
                  <div className="h-40 bg-white flex items-center justify-center p-6">
                    <img 
                      src={lib.image} 
                      alt={lib.name} 
                      className="max-h-full max-w-full object-contain transition-transform duration-300 group-hover:scale-110" 
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="text-lg font-medium text-ai-black mb-1">{lib.name}</h3>
                    <p className="text-sm text-ai-dark-gray">{lib.description}</p>
                  </div>
                </a>
              ))}
            </div>
          </section>

          {/* Events Section */}
          <section className="mb-16">
            <h2 className="text-3xl font-medium text-ai-black mb-8">Upcoming Events</h2>
            <div className="space-y-6">
              {events.map((event, index) => (
                <div 
                  key={index} 
                  className="glass-card hover:shadow-lg transition-all p-6 flex flex-col md:flex-row md:items-center md:justify-between gap-4"
                >
                  <div>
                    <h3 className="text-xl font-medium text-ai-black mb-1">{event.title}</h3>
                    <div className="flex items-center text-ai-dark-gray mb-2">
                      <span className="mr-4">{event.date}</span>
                      <span>{event.location}</span>
                    </div>
                    <p className="text-ai-dark-gray">{event.description}</p>
                  </div>
                  <a href={event.link} className="btn-primary whitespace-nowrap self-start md:self-center">
                    Register
                    <ArrowRight size={16} className="ml-2" />
                  </a>
                </div>
              ))}
            </div>
          </section>

          {/* CTA Section */}
          <section>
            <div className="glass-card p-8 md:p-12 text-center">
              <h2 className="text-3xl font-medium text-ai-black mb-4">
                Can't find what you're looking for?
              </h2>
              <p className="text-ai-dark-gray mb-8 max-w-2xl mx-auto">
                Our team is constantly adding new resources to help university students master AI concepts.
                Let us know what you'd like to see next.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <button className="btn-primary">
                  Suggest a Resource
                  <ArrowRight size={16} className="ml-2" />
                </button>
                <Link to="/contact" className="btn-secondary">
                  Contact Us
                </Link>
              </div>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Resources;
