
export interface Course {
  id: string;
  title: string;
  description: string;
  level: string;
  duration: string;
  image: string;
  category: string;
  modules?: CourseModule[];
}

export interface CourseModule {
  id: string;
  title: string;
  lessons: Lesson[];
}

export interface Lesson {
  id: string;
  title: string;
  type: 'content' | 'quiz';
  content?: LessonContent;
  quiz?: Quiz;
}

export interface LessonContent {
  sections: ContentSection[];
}

export type ContentSection = 
  | { type: 'text'; content: string }
  | { type: 'code'; content: string; language: string }
  | { type: 'image'; src: string; alt: string }
  | { type: 'video'; src: string }
  | { type: 'input'; question: string; placeholder?: string };

export interface Quiz {
  title: string;
  description: string;
  questions: QuizQuestion[];
}

export interface QuizQuestion {
  id: string;
  question: string;
  options: QuizOption[];
  correctOptionId: string;
  explanation: string;
}

export interface QuizOption {
  id: string;
  text: string;
}

export interface UserProgress {
  courseId: string;
  completedLessons: string[];
  quizResults: {
    quizId: string;
    score: number;
    completed: boolean;
  }[];
  userInputs: {
    lessonId: string;
    sectionIndex: number;
    answer: string;
  }[];
}
