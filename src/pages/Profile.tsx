
import React, { useEffect } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import AnimatedGradient from '@/components/AnimatedGradient';
import { ArrowRight, BookOpen, GraduationCap, Settings, User } from 'lucide-react';
import { Link } from 'react-router-dom';

// Mock user data
const user = {
  name: "Alex Johnson",
  email: "alex.johnson@university.edu",
  avatar: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80",
  level: "Intermediate",
  university: "Tech University",
  field: "Computer Science",
  joinedDate: "January 2023",
};

// Mock enrolled courses
const enrolledCourses = [
  {
    id: "machine-learning-fundamentals",
    title: "Machine Learning Fundamentals",
    progress: 75,
    image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80",
  },
  {
    id: "nlp-fundamentals",
    title: "Natural Language Processing",
    progress: 30,
    image: "https://images.unsplash.com/photo-1591696331111-ef9586a5b17a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80",
  },
];

// Mock achievements
const achievements = [
  {
    id: "python-master",
    title: "Python Master",
    description: "Completed all Python for AI exercises with a perfect score",
    icon: <GraduationCap className="h-6 w-6" />,
    date: "March 15, 2023",
  },
  {
    id: "project-guru",
    title: "Project Guru",
    description: "Submitted 5 high-quality AI projects",
    icon: <BookOpen className="h-6 w-6" />,
    date: "April 20, 2023",
  },
];

// Mock saved resources
const savedResources = [
  {
    id: "ml-cheatsheet",
    title: "Machine Learning Algorithms Cheatsheet",
    type: "PDF",
    savedDate: "May 5, 2023",
  },
  {
    id: "neural-networks",
    title: "Neural Networks Explained",
    type: "Video",
    savedDate: "May 10, 2023",
  },
];

const Profile = () => {
  useEffect(() => {
    // Scroll to top on page load
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen overflow-hidden">
      <AnimatedGradient className="opacity-30" />
      <Header />
      <main className="pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="mb-12">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8">
              <div className="flex items-center mb-6 md:mb-0">
                <div className="w-20 h-20 md:w-24 md:h-24 rounded-full overflow-hidden mr-6 border-4 border-white shadow-md">
                  <img 
                    src={user.avatar} 
                    alt={user.name} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h1 className="text-3xl md:text-4xl font-medium text-ai-black mb-2">{user.name}</h1>
                  <p className="text-ai-dark-gray">{user.email}</p>
                </div>
              </div>
              <button className="btn-secondary inline-flex items-center">
                <Settings size={18} className="mr-2" />
                Edit Profile
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="glass-card p-6">
                <div className="flex items-center mb-2">
                  <User size={18} className="text-ai-blue mr-2" />
                  <h3 className="text-lg font-medium text-ai-black">Level</h3>
                </div>
                <p className="text-ai-dark-gray">{user.level}</p>
              </div>

              <div className="glass-card p-6">
                <div className="flex items-center mb-2">
                  <GraduationCap size={18} className="text-ai-blue mr-2" />
                  <h3 className="text-lg font-medium text-ai-black">University</h3>
                </div>
                <p className="text-ai-dark-gray">{user.university}</p>
              </div>

              <div className="glass-card p-6">
                <div className="flex items-center mb-2">
                  <BookOpen size={18} className="text-ai-blue mr-2" />
                  <h3 className="text-lg font-medium text-ai-black">Field of Study</h3>
                </div>
                <p className="text-ai-dark-gray">{user.field}</p>
              </div>
            </div>
          </div>

          {/* Enrolled Courses */}
          <section className="mb-16">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-medium text-ai-black">Enrolled Courses</h2>
              <Link to="/courses" className="btn-text">
                Browse more courses
                <ArrowRight size={16} className="ml-1" />
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {enrolledCourses.map((course) => (
                <div key={course.id} className="glass-card overflow-hidden">
                  <div className="flex flex-col md:flex-row">
                    <div className="w-full md:w-40 h-48 md:h-auto overflow-hidden">
                      <img 
                        src={course.image} 
                        alt={course.title} 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="p-6 flex flex-col flex-grow">
                      <h3 className="text-xl font-medium text-ai-black mb-3">{course.title}</h3>
                      <div className="mb-4 flex-grow">
                        <div className="flex justify-between mb-2">
                          <span className="text-sm text-ai-dark-gray">Progress</span>
                          <span className="text-sm font-medium text-ai-black">{course.progress}%</span>
                        </div>
                        <div className="w-full h-2 bg-ai-gray/50 rounded-full overflow-hidden">
                          <div 
                            className="h-full bg-ai-blue rounded-full transition-all duration-500"
                            style={{ width: `${course.progress}%` }}
                          ></div>
                        </div>
                      </div>
                      <Link to={`/courses/${course.id}`} className="btn-primary text-center">
                        Continue Learning
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Achievements and Saved Resources */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Achievements */}
            <section>
              <h2 className="text-2xl font-medium text-ai-black mb-6">Achievements</h2>
              <div className="glass-card">
                {achievements.map((achievement, index) => (
                  <div 
                    key={achievement.id} 
                    className={`p-6 flex items-start ${
                      index !== achievements.length - 1 ? 'border-b border-gray-100' : ''
                    }`}
                  >
                    <div className="w-12 h-12 rounded-full bg-ai-blue/10 text-ai-blue flex items-center justify-center mr-4 shrink-0">
                      {achievement.icon}
                    </div>
                    <div>
                      <h3 className="text-lg font-medium text-ai-black mb-1">{achievement.title}</h3>
                      <p className="text-ai-dark-gray mb-2">{achievement.description}</p>
                      <span className="text-sm text-ai-dark-gray">{achievement.date}</span>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Saved Resources */}
            <section>
              <h2 className="text-2xl font-medium text-ai-black mb-6">Saved Resources</h2>
              <div className="glass-card">
                {savedResources.map((resource, index) => (
                  <div 
                    key={resource.id} 
                    className={`p-6 ${
                      index !== savedResources.length - 1 ? 'border-b border-gray-100' : ''
                    }`}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-lg font-medium text-ai-black">{resource.title}</h3>
                      <span className="tag">{resource.type}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-ai-dark-gray">Saved on {resource.savedDate}</span>
                      <button className="btn-text">
                        Access
                        <ArrowRight size={16} className="ml-1" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Profile;
