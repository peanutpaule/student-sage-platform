
import React, { useEffect, useRef } from 'react';
import CourseCard from './CourseCard';

// Sample course data
const coursesData = [
  {
    id: "machine-learning-fundamentals",
    title: "Machine Learning Fundamentals",
    description: "Learn the core concepts of machine learning and build your first models.",
    level: "Beginner",
    duration: "8 weeks",
    image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80",
    category: "Machine Learning"
  },
  {
    id: "deep-learning-neural-networks",
    title: "Deep Learning & Neural Networks",
    description: "Dive into neural networks architecture and implementation techniques.",
    level: "Intermediate",
    duration: "10 weeks",
    image: "https://images.unsplash.com/photo-1647166545674-ce28ce93bdca?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80",
    category: "Deep Learning"
  },
  {
    id: "nlp-fundamentals",
    title: "Natural Language Processing",
    description: "Master text analysis, sentiment analysis, and language generation.",
    level: "Intermediate",
    duration: "8 weeks",
    image: "https://images.unsplash.com/photo-1591696331111-ef9586a5b17a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80",
    category: "NLP"
  },
  {
    id: "computer-vision",
    title: "Computer Vision Applications",
    description: "Build applications that can see and interpret visual data.",
    level: "Advanced",
    duration: "12 weeks",
    image: "https://images.unsplash.com/photo-1561557944-6e58eae9f7eb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80",
    category: "Computer Vision"
  },
];

const CourseGrid: React.FC = () => {
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
    <section className="py-20 relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="section-title reveal stagger-1">Explore Top AI Courses</h2>
          <p className="section-subtitle reveal stagger-2">
            Curated content designed by AI experts for university students at all levels.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {coursesData.map((course, index) => (
            <div 
              key={course.id} 
              className={`reveal ${index === 0 ? 'stagger-2' : index === 1 ? 'stagger-3' : index === 2 ? 'stagger-4' : 'stagger-5'}`}
            >
              <CourseCard {...course} />
            </div>
          ))}
        </div>

        <div className="text-center mt-12 reveal stagger-5">
          <button className="btn-primary">
            View All Courses
            <ArrowRight size={16} className="ml-2" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default CourseGrid;
