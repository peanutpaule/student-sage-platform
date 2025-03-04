
import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getFullCourseContent, getLesson, getNextLessonId } from '@/lib/courseContent';
import { completeLesson, getUserProgress } from '@/lib/progressStorage';
import LessonContent from './LessonContent';
import QuizContent from './QuizContent';
import CourseOutline from './CourseOutline';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { ChevronLeft, ChevronRight, Menu } from 'lucide-react';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { toast } from '@/components/ui/use-toast';

const LearningInterface: React.FC = () => {
  const { courseId = '', lessonId = '' } = useParams<{ courseId: string, lessonId: string }>();
  const navigate = useNavigate();
  const [course, setCourse] = useState<any>(null);
  const [lesson, setLesson] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);
  
  useEffect(() => {
    if (courseId) {
      const courseData = getFullCourseContent(courseId);
      
      if (courseData) {
        setCourse(courseData);
        
        if (lessonId) {
          const lessonData = getLesson(courseId, lessonId);
          setLesson(lessonData);
        }
        
        // Calculate progress
        const userProgress = getUserProgress(courseId);
        if (courseData.modules) {
          let totalLessons = 0;
          courseData.modules.forEach(module => {
            totalLessons += module.lessons.length;
          });
          
          const completedPercentage = 
            totalLessons > 0 
              ? (userProgress.completedLessons.length / totalLessons) * 100 
              : 0;
          
          setProgress(completedPercentage);
        }
      } else {
        // Course not found
        toast({
          title: "Course not found",
          description: "The course you're looking for doesn't exist.",
          variant: "destructive",
        });
        navigate('/courses');
      }
      setLoading(false);
    }
  }, [courseId, lessonId, navigate]);
  
  const handleComplete = () => {
    if (lesson && lesson.type === 'content') {
      completeLesson(courseId, lessonId);
      
      const nextLessonId = getNextLessonId(courseId, lessonId);
      
      if (nextLessonId) {
        navigate(`/courses/${courseId}/learn/${nextLessonId}`);
      } else {
        // Course completed
        toast({
          title: "Congratulations!",
          description: "You've completed this course.",
        });
        navigate(`/courses/${courseId}`);
      }
    }
  };
  
  const handleQuizComplete = () => {
    const nextLessonId = getNextLessonId(courseId, lessonId);
    
    if (nextLessonId) {
      navigate(`/courses/${courseId}/learn/${nextLessonId}`);
    } else {
      // Course completed
      toast({
        title: "Congratulations!",
        description: "You've completed this course.",
      });
      navigate(`/courses/${courseId}`);
    }
  };
  
  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-ai-blue border-t-transparent rounded-full animate-spin mx-auto mb-6"></div>
          <p className="text-ai-dark-gray">Loading lesson...</p>
        </div>
      </div>
    );
  }
  
  if (!course || !lesson) {
    return (
      <div className="flex items-center justify-center h-screen">
        <div className="text-center">
          <p className="text-ai-dark-gray">Lesson not found.</p>
          <Button 
            onClick={() => navigate(`/courses/${courseId}`)}
            className="mt-4"
          >
            Return to Course
          </Button>
        </div>
      </div>
    );
  }
  
  return (
    <div className="learning-interface min-h-screen">
      {/* Top navigation bar */}
      <div className="bg-white shadow-sm border-b sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <Button 
                variant="ghost" 
                size="sm"
                onClick={() => navigate(`/courses/${courseId}`)}
                className="mr-2"
              >
                <ChevronLeft size={18} />
              </Button>
              <h1 className="text-lg font-medium truncate">{course.title}</h1>
            </div>
            
            <div className="lg:hidden">
              <Sheet>
                <SheetTrigger asChild>
                  <Button variant="outline" size="sm">
                    <Menu size={18} />
                    <span className="ml-2">Outline</span>
                  </Button>
                </SheetTrigger>
                <SheetContent side="right" className="w-[90%] sm:w-[440px]">
                  <div className="py-6">
                    <CourseOutline course={course} activeLessonId={lessonId} />
                  </div>
                </SheetContent>
              </Sheet>
            </div>
          </div>
          
          {/* Progress bar */}
          <div className="pb-4">
            <div className="flex justify-between text-xs text-ai-dark-gray mb-1">
              <span>Course Progress</span>
              <span>{Math.round(progress)}% complete</span>
            </div>
            <Progress value={progress} className="h-2" />
          </div>
        </div>
      </div>
      
      {/* Main content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Course content */}
          <div className="w-full lg:w-2/3">
            {lesson.type === 'content' ? (
              <>
                <LessonContent lesson={lesson} courseId={courseId} />
                <div className="mt-12 flex justify-end">
                  <Button onClick={handleComplete}>
                    Mark as Completed
                    <ChevronRight size={16} className="ml-2" />
                  </Button>
                </div>
              </>
            ) : lesson.type === 'quiz' ? (
              <QuizContent 
                lesson={lesson} 
                courseId={courseId}
                onComplete={handleQuizComplete}
              />
            ) : null}
          </div>
          
          {/* Sidebar with course outline - hidden on mobile */}
          <div className="hidden lg:block lg:w-1/3">
            <div className="sticky top-32">
              <CourseOutline course={course} activeLessonId={lessonId} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LearningInterface;
