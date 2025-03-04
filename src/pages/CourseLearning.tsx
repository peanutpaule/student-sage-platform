
import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import LearningInterface from '@/components/course/LearningInterface';
import { getFirstLessonId } from '@/lib/courseContent';

const CourseLearning: React.FC = () => {
  const { courseId, lessonId } = useParams<{ courseId: string, lessonId: string }>();
  const navigate = useNavigate();
  
  useEffect(() => {
    // If no lesson ID is provided, redirect to the first lesson
    if (courseId && !lessonId) {
      const firstLessonId = getFirstLessonId(courseId);
      if (firstLessonId) {
        navigate(`/courses/${courseId}/learn/${firstLessonId}`);
      }
    }
  }, [courseId, lessonId, navigate]);
  
  return <LearningInterface />;
};

export default CourseLearning;
