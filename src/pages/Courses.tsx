
import React, { useEffect, useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import AnimatedGradient from '@/components/AnimatedGradient';
import CourseCard from '@/components/CourseCard';
import { Search } from 'lucide-react';

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
  {
    id: "reinforcement-learning",
    title: "Reinforcement Learning",
    description: "Learn how to train agents to make decisions through rewards and penalties.",
    level: "Advanced",
    duration: "10 weeks",
    image: "https://images.unsplash.com/photo-1580894897591-ff1e18df5be4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80",
    category: "Reinforcement Learning"
  },
  {
    id: "ai-ethics",
    title: "AI Ethics & Responsible AI",
    description: "Understand the ethical implications of AI and how to build responsible systems.",
    level: "Intermediate",
    duration: "6 weeks",
    image: "https://images.unsplash.com/photo-1617791160505-6f00504e3519?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80",
    category: "Ethics"
  },
  {
    id: "generative-ai",
    title: "Generative AI Models",
    description: "Dive into the world of generative models like GANs, VAEs, and diffusion models.",
    level: "Advanced",
    duration: "8 weeks",
    image: "https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80",
    category: "Generative AI"
  },
  {
    id: "ai-product-development",
    title: "AI Product Development",
    description: "Learn the process of building and deploying AI products from concept to production.",
    level: "Intermediate",
    duration: "10 weeks",
    image: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80",
    category: "Product Development"
  }
];

const categories = ["All", "Machine Learning", "Deep Learning", "NLP", "Computer Vision", "Reinforcement Learning", "Ethics", "Generative AI", "Product Development"];
const levels = ["All Levels", "Beginner", "Intermediate", "Advanced"];

const Courses = () => {
  const [filteredCourses, setFilteredCourses] = useState(coursesData);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedLevel, setSelectedLevel] = useState('All Levels');

  useEffect(() => {
    // Scroll to top on page load
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    filterCourses();
  }, [searchQuery, selectedCategory, selectedLevel]);

  const filterCourses = () => {
    let filtered = coursesData;

    // Filter by search query
    if (searchQuery) {
      filtered = filtered.filter(course => 
        course.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
        course.description.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    // Filter by category
    if (selectedCategory !== 'All') {
      filtered = filtered.filter(course => course.category === selectedCategory);
    }

    // Filter by level
    if (selectedLevel !== 'All Levels') {
      filtered = filtered.filter(course => course.level === selectedLevel);
    }

    setFilteredCourses(filtered);
  };

  return (
    <div className="min-h-screen overflow-hidden">
      <AnimatedGradient className="opacity-50" />
      <Header />
      <main className="pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-medium tracking-tight text-ai-black mb-4">
              AI Courses Catalog
            </h1>
            <p className="text-xl text-ai-dark-gray max-w-2xl mx-auto">
              Discover our comprehensive collection of AI courses designed for university students at all levels.
            </p>
          </div>

          <div className="mb-12">
            <div className="relative w-full max-w-2xl mx-auto mb-8">
              <input 
                type="text" 
                placeholder="Search courses..." 
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full py-3 px-6 pl-12 bg-white rounded-full border border-gray-200 shadow-sm text-ai-black placeholder-ai-dark-gray focus:outline-none focus:ring-2 focus:ring-ai-blue/30"
              />
              <Search size={20} className="absolute left-4 top-1/2 transform -translate-y-1/2 text-ai-dark-gray" />
            </div>

            <div className="flex flex-wrap gap-4 justify-center mb-8">
              <div className="flex flex-wrap gap-2">
                {categories.map(category => (
                  <button 
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                      selectedCategory === category 
                        ? 'bg-ai-blue text-white' 
                        : 'bg-white border border-gray-200 text-ai-dark-gray hover:border-ai-blue/30'
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>

            <div className="flex flex-wrap gap-4 justify-center">
              <div className="flex flex-wrap gap-2">
                {levels.map(level => (
                  <button 
                    key={level}
                    onClick={() => setSelectedLevel(level)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                      selectedLevel === level 
                        ? 'bg-ai-blue text-white' 
                        : 'bg-white border border-gray-200 text-ai-dark-gray hover:border-ai-blue/30'
                    }`}
                  >
                    {level}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {filteredCourses.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
              {filteredCourses.map(course => (
                <CourseCard key={course.id} {...course} />
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <h3 className="text-2xl font-medium text-ai-black mb-2">No courses found</h3>
              <p className="text-ai-dark-gray mb-6">
                Try adjusting your search or filters to find what you're looking for.
              </p>
              <button 
                onClick={() => {
                  setSearchQuery('');
                  setSelectedCategory('All');
                  setSelectedLevel('All Levels');
                }}
                className="btn-primary"
              >
                Clear Filters
              </button>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Courses;
