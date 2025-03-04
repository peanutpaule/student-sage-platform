
import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import AnimatedGradient from '@/components/AnimatedGradient';
import { Clock, Calendar, Award, ChevronLeft, PlayCircle, CheckCircle } from 'lucide-react';
import { toast } from '@/components/ui/use-toast';
import { Progress } from '@/components/ui/progress';
import { getFirstLessonId } from '@/lib/courseContent';
import { getUserProgress } from '@/lib/progressStorage';

// Import the course data for now - in a real app this would come from an API
import { coursesData } from '@/lib/data';

const CourseDetail = () => {
  const { courseId } = useParams<{ courseId: string }>();
  const navigate = useNavigate();
  const [course, setCourse] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Scroll to top on page load
    window.scrollTo(0, 0);
    
    // Find the course with the matching ID
    const foundCourse = coursesData.find(c => c.id === courseId);
    
    if (foundCourse) {
      setCourse(foundCourse);
      setLoading(false);
      
      // Get user progress
      const userProgress = getUserProgress(courseId || '');
      setProgress(userProgress.completedLessons.length * 10); // Simple progress calculation
    } else {
      // If no course is found, show an error toast and redirect back to courses
      toast({
        title: "Course not found",
        description: "The course you're looking for doesn't exist or has been removed.",
        variant: "destructive",
      });
      
      // Redirect to courses page after a short delay
      setTimeout(() => {
        navigate('/courses');
      }, 2000);
    }
  }, [courseId, navigate]);

  const handleStartLearning = () => {
    if (courseId) {
      const firstLessonId = getFirstLessonId(courseId);
      
      if (firstLessonId) {
        navigate(`/courses/${courseId}/learn/${firstLessonId}`);
      } else {
        toast({
          title: "Course content not available",
          description: "The course content is not available at the moment. Please try again later.",
          variant: "destructive",
        });
      }
    }
  };

  if (loading && !course) {
    return (
      <div className="min-h-screen overflow-hidden">
        <AnimatedGradient className="opacity-50" />
        <Header />
        <main className="pt-32 pb-20">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="flex items-center justify-center h-[60vh]">
              <div className="text-center">
                <div className="w-16 h-16 border-4 border-ai-blue border-t-transparent rounded-full animate-spin mx-auto mb-6"></div>
                <p className="text-ai-dark-gray">Loading course information...</p>
              </div>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  if (!course) return null;

  return (
    <div className="min-h-screen overflow-hidden">
      <AnimatedGradient className="opacity-50" />
      <Header />
      <main className="pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <button 
            onClick={() => navigate('/courses')}
            className="flex items-center text-ai-dark-gray hover:text-ai-blue transition-colors mb-8"
          >
            <ChevronLeft size={20} className="mr-1" />
            Back to courses
          </button>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Course Image and Info Column */}
            <div className="lg:col-span-2">
              <div className="relative rounded-xl overflow-hidden mb-8 h-80 md:h-96">
                <img 
                  src={course.image} 
                  alt={course.title} 
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 left-4">
                  <span className="tag bg-white/80 backdrop-blur-sm">{course.category}</span>
                </div>
              </div>
              
              <h1 className="text-3xl md:text-4xl font-medium text-ai-black mb-4">{course.title}</h1>
              
              <div className="flex flex-wrap gap-4 mb-8">
                <div className="flex items-center text-ai-dark-gray">
                  <Award size={18} className="mr-2" />
                  <span>{course.level}</span>
                </div>
                <div className="flex items-center text-ai-dark-gray">
                  <Clock size={18} className="mr-2" />
                  <span>{course.duration}</span>
                </div>
                <div className="flex items-center text-ai-dark-gray">
                  <Calendar size={18} className="mr-2" />
                  <span>Start anytime</span>
                </div>
              </div>
              
              <div className="prose max-w-none">
                <h2 className="text-xl font-medium text-ai-black mb-3">About this course</h2>
                <p className="text-ai-dark-gray mb-6">
                  {course.description}
                </p>
                <p className="text-ai-dark-gray mb-6">
                  This comprehensive course is designed to give you a solid foundation in {course.category}. 
                  You'll learn core concepts, practical applications, and gain hands-on experience 
                  through carefully designed projects and assignments.
                </p>
                
                <h2 className="text-xl font-medium text-ai-black mb-3 mt-8">What you'll learn</h2>
                <ul className="space-y-2 text-ai-dark-gray mb-6">
                  <li>• Understand the theoretical foundations of {course.category}</li>
                  <li>• Build practical skills through hands-on coding exercises</li>
                  <li>• Learn industry best practices and methodologies</li>
                  <li>• Complete real-world projects to build your portfolio</li>
                  <li>• Gain insights from experts in the field</li>
                </ul>
                
                <h2 className="text-xl font-medium text-ai-black mb-3 mt-8">Course curriculum</h2>
                <div className="mb-6">
                  <div className="bg-white rounded-lg shadow-sm p-4 mb-3">
                    <h3 className="font-medium text-ai-black">Module 1: Introduction to {course.category}</h3>
                    <p className="text-sm text-ai-dark-gray">4 lessons • 1 assignment</p>
                  </div>
                  <div className="bg-white rounded-lg shadow-sm p-4 mb-3">
                    <h3 className="font-medium text-ai-black">Module 2: Core Concepts and Techniques</h3>
                    <p className="text-sm text-ai-dark-gray">6 lessons • 2 assignments</p>
                  </div>
                  <div className="bg-white rounded-lg shadow-sm p-4 mb-3">
                    <h3 className="font-medium text-ai-black">Module 3: Advanced Applications</h3>
                    <p className="text-sm text-ai-dark-gray">5 lessons • 1 project</p>
                  </div>
                  <div className="bg-white rounded-lg shadow-sm p-4">
                    <h3 className="font-medium text-ai-black">Module 4: Final Project</h3>
                    <p className="text-sm text-ai-dark-gray">3 lessons • 1 final project</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Enrollment and Details Column */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-xl shadow-lg p-6 lg:sticky lg:top-32">
                <h3 className="text-xl font-medium text-ai-black mb-4">Course Details</h3>
                
                <div className="mb-6">
                  <div className="flex justify-between mb-2">
                    <span className="text-ai-dark-gray">Enrollment</span>
                    <span className="text-ai-black font-medium">Open</span>
                  </div>
                  <div className="flex justify-between mb-2">
                    <span className="text-ai-dark-gray">Prerequisites</span>
                    <span className="text-ai-black font-medium">None</span>
                  </div>
                  <div className="flex justify-between mb-2">
                    <span className="text-ai-dark-gray">Language</span>
                    <span className="text-ai-black font-medium">English</span>
                  </div>
                  <div className="flex justify-between mb-2">
                    <span className="text-ai-dark-gray">Certificate</span>
                    <span className="text-ai-black font-medium">Yes</span>
                  </div>
                </div>
                
                {progress > 0 ? (
                  <div className="mb-6">
                    <div className="flex justify-between text-sm mb-2">
                      <span className="text-ai-dark-gray">Your progress</span>
                      <span className="font-medium">{progress}% complete</span>
                    </div>
                    <Progress value={progress} className="h-2 mb-4" />
                    <button 
                      onClick={handleStartLearning}
                      className="w-full btn-primary flex justify-center items-center"
                    >
                      <PlayCircle size={18} className="mr-2" />
                      Continue Learning
                    </button>
                  </div>
                ) : (
                  <button 
                    onClick={handleStartLearning}
                    className="w-full btn-primary flex justify-center items-center mb-4"
                  >
                    <PlayCircle size={18} className="mr-2" />
                    Start Learning
                  </button>
                )}
                
                <button className="w-full btn-outline">Save for Later</button>
                
                <div className="mt-8 pt-6 border-t border-gray-100">
                  <h4 className="font-medium text-ai-black mb-3">Instructors</h4>
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 rounded-full bg-gray-200 mr-3"></div>
                    <div>
                      <p className="font-medium text-ai-black">Dr. Sarah Chen</p>
                      <p className="text-sm text-ai-dark-gray">AI Research Scientist</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <div className="w-12 h-12 rounded-full bg-gray-200 mr-3"></div>
                    <div>
                      <p className="font-medium text-ai-black">Prof. Michael Ramirez</p>
                      <p className="text-sm text-ai-dark-gray">University Professor</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default CourseDetail;
