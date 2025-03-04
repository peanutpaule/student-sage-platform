
import React, { useEffect, useRef } from 'react';
import CourseCard from './CourseCard';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { coursesData } from '@/lib/data';

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

  // Show only the first 4 courses on the homepage
  const displayedCourses = coursesData.slice(0, 4);

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
          {displayedCourses.map((course, index) => (
            <div 
              key={course.id} 
              className={`reveal ${index === 0 ? 'stagger-2' : index === 1 ? 'stagger-3' : index === 2 ? 'stagger-4' : 'stagger-5'}`}
            >
              <CourseCard {...course} />
            </div>
          ))}
        </div>

        <div className="text-center mt-12 reveal stagger-5">
          <Link to="/courses" className="btn-primary inline-flex items-center">
            View All Courses
            <ArrowRight size={16} className="ml-2" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CourseGrid;
