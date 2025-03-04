
import { UserProgress } from './types';

// Get user progress from local storage
export const getUserProgress = (courseId: string): UserProgress => {
  const storedData = localStorage.getItem(`course_progress_${courseId}`);
  
  if (storedData) {
    return JSON.parse(storedData) as UserProgress;
  }
  
  // Initialize new progress
  return {
    courseId,
    completedLessons: [],
    quizResults: [],
    userInputs: []
  };
};

// Mark a lesson as completed
export const completeLesson = (courseId: string, lessonId: string): void => {
  const progress = getUserProgress(courseId);
  
  if (!progress.completedLessons.includes(lessonId)) {
    progress.completedLessons.push(lessonId);
    saveProgress(progress);
  }
};

// Save quiz results
export const saveQuizResult = (courseId: string, quizId: string, score: number): void => {
  const progress = getUserProgress(courseId);
  
  const existingResultIndex = progress.quizResults.findIndex(r => r.quizId === quizId);
  
  if (existingResultIndex >= 0) {
    progress.quizResults[existingResultIndex] = {
      quizId,
      score,
      completed: true
    };
  } else {
    progress.quizResults.push({
      quizId,
      score,
      completed: true
    });
  }
  
  saveProgress(progress);
};

// Save user input for a lesson
export const saveUserInput = (courseId: string, lessonId: string, sectionIndex: number, answer: string): void => {
  const progress = getUserProgress(courseId);
  
  const existingInputIndex = progress.userInputs.findIndex(
    i => i.lessonId === lessonId && i.sectionIndex === sectionIndex
  );
  
  if (existingInputIndex >= 0) {
    progress.userInputs[existingInputIndex].answer = answer;
  } else {
    progress.userInputs.push({
      lessonId,
      sectionIndex,
      answer
    });
  }
  
  saveProgress(progress);
};

// Get a specific user input
export const getUserInput = (courseId: string, lessonId: string, sectionIndex: number): string => {
  const progress = getUserProgress(courseId);
  
  const input = progress.userInputs.find(
    i => i.lessonId === lessonId && i.sectionIndex === sectionIndex
  );
  
  return input?.answer || '';
};

// Helper to save progress
const saveProgress = (progress: UserProgress): void => {
  localStorage.setItem(`course_progress_${progress.courseId}`, JSON.stringify(progress));
};

// Get course completion percentage
export const getCourseCompletionPercentage = (courseId: string): number => {
  const progress = getUserProgress(courseId);
  
  // For now, we'll just use a simple metric based on completed lessons
  // In a real app, you would calculate this based on the total number of lessons
  return progress.completedLessons.length * 10;
};
