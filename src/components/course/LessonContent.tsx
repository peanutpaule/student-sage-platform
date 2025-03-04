
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

  return (
    <div className="lesson-content">
      <h1 className="text-2xl md:text-3xl font-medium mb-6">{lesson.title}</h1>
      <div className="space-y-4">
        {lesson.content.sections.map((section, index) => (
          <ContentSection
            key={index}
            section={section}
            courseId={courseId}
            lessonId={lesson.id}
            sectionIndex={index}
          />
        ))}
      </div>
    </div>
  );
};

export default LessonContent;
