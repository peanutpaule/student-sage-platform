
import React from 'react';
import { type Lesson } from '@/lib/types';
import ContentSection from './ContentSection';

interface LessonContentProps {
  lesson: Lesson;
  courseId: string;
}

const LessonContent: React.FC<LessonContentProps> = ({ lesson, courseId }) => {
  if (lesson.type !== 'content' || !lesson.content) {
    return null;
  }

  // Group sections into microlearning units for better organization
  const microlearningUnits = [];
  let currentUnit = [];
  
  for (const section of lesson.content.sections) {
    currentUnit.push(section);
    
    // Create a new unit after certain section types (e.g., after input or video)
    if (section.type === 'input' || section.type === 'video') {
      microlearningUnits.push([...currentUnit]);
      currentUnit = [];
    }
  }
  
  // Add any remaining sections
  if (currentUnit.length > 0) {
    microlearningUnits.push(currentUnit);
  }

  return (
    <div className="lesson-content">
      <h1 className="text-2xl md:text-3xl font-medium mb-6">{lesson.title}</h1>
      
      <div className="space-y-8">
        {microlearningUnits.map((unit, unitIndex) => (
          <div 
            key={unitIndex} 
            className="microlearning-unit bg-white border border-gray-100 rounded-lg shadow-sm p-6 transition-all hover:shadow-md animate-fade-in"
            style={{ animationDelay: `${unitIndex * 100}ms` }}
          >
            {unit.map((section, sectionIndex) => (
              <ContentSection
                key={sectionIndex}
                section={section}
                courseId={courseId}
                lessonId={lesson.id}
                sectionIndex={unitIndex * 10 + sectionIndex} // Ensure unique section indexes
              />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default LessonContent;
