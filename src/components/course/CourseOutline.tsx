
import React from 'react';
import { type Course } from '@/lib/types';
import { Link } from 'react-router-dom';
import { getUserProgress } from '@/lib/progressStorage';
import { CheckCircle, Circle, ChevronRight } from 'lucide-react';

interface CourseOutlineProps {
  course: Course;
  activeLessonId?: string;
}

const CourseOutline: React.FC<CourseOutlineProps> = ({ course, activeLessonId }) => {
  if (!course.modules) return null;
  
  const progress = getUserProgress(course.id);
  
  return (
    <div className="course-outline bg-white rounded-lg shadow-sm p-4">
      <h2 className="text-lg font-medium mb-4">Course Outline</h2>
      
      <div className="space-y-4">
        {course.modules.map((module, index) => (
          <div key={module.id} className="module">
            <h3 className="text-md font-medium bg-gray-50 p-2 rounded">
              Module {index + 1}: {module.title}
            </h3>
            
            <ul className="mt-2 space-y-1">
              {module.lessons.map((lesson) => {
                const isCompleted = progress.completedLessons.includes(lesson.id);
                const isActive = lesson.id === activeLessonId;
                
                return (
                  <li key={lesson.id}>
                    <Link 
                      to={`/courses/${course.id}/learn/${lesson.id}`}
                      className={`
                        flex items-center py-2 px-2 rounded-md text-sm
                        ${isActive ? 'bg-blue-50 text-ai-blue' : ''}
                        ${isCompleted && !isActive ? 'text-green-600' : ''}
                        hover:bg-gray-50 transition-colors
                      `}
                    >
                      <span className="mr-2">
                        {isCompleted ? (
                          <CheckCircle size={16} className="text-green-600" />
                        ) : (
                          <Circle size={16} className="text-gray-400" />
                        )}
                      </span>
                      
                      <span className="flex-grow">{lesson.title}</span>
                      
                      <ChevronRight size={16} className="opacity-50" />
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CourseOutline;
