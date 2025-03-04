
import { Course, CourseModule, Lesson, Quiz, ContentSection } from './types';
import { coursesData } from './data';

export const getFullCourseContent = (courseId: string): Course | undefined => {
  const course = coursesData.find(course => course.id === courseId);
  
  if (!course) return undefined;
  
  // For this example, we'll only add full content to the Machine Learning course
  if (courseId === 'machine-learning-fundamentals') {
    return {
      ...course,
      modules: [
        {
          id: 'module1',
          title: 'Introduction to Machine Learning',
          lessons: [
            {
              id: 'lesson1',
              title: 'What is Machine Learning?',
              type: 'content',
              content: {
                sections: [
                  {
                    type: 'text',
                    content: `# What is Machine Learning?
                    
Machine Learning is a subset of artificial intelligence that focuses on developing systems that can learn from and make decisions based on data. Instead of being explicitly programmed to perform a task, these systems learn from experience.

There are three main types of machine learning:
- Supervised Learning
- Unsupervised Learning
- Reinforcement Learning

Let's explore each of these in more detail.`
                  },
                  {
                    type: 'image',
                    src: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80',
                    alt: 'Machine Learning Concept'
                  },
                  {
                    type: 'text',
                    content: '## Supervised Learning\n\nSupervised learning involves training a model on labeled data. The model learns to map inputs to the correct outputs based on example input-output pairs.'
                  },
                  {
                    type: 'input',
                    question: 'Can you think of a real-world application of supervised learning?',
                    placeholder: 'Type your answer here...'
                  },
                  {
                    type: 'code',
                    language: 'python',
                    content: `# Simple example of a supervised ML model in Python
from sklearn.linear_model import LinearRegression
import numpy as np

# Create sample data
X = np.array([[1], [2], [3], [4], [5]])
y = np.array([2, 4, 6, 8, 10])

# Create and train the model
model = LinearRegression()
model.fit(X, y)

# Make predictions
new_data = np.array([[6], [7]])
predictions = model.predict(new_data)
print(predictions)  # Output should be [12, 14]`
                  }
                ]
              }
            },
            {
              id: 'lesson2',
              title: 'Basic ML Concepts Quiz',
              type: 'quiz',
              quiz: {
                title: 'Machine Learning Fundamentals Quiz',
                description: 'Test your understanding of basic machine learning concepts.',
                questions: [
                  {
                    id: 'q1',
                    question: 'Which of the following is NOT a type of machine learning?',
                    options: [
                      { id: 'a', text: 'Supervised Learning' },
                      { id: 'b', text: 'Unsupervised Learning' },
                      { id: 'c', text: 'Reinforcement Learning' },
                      { id: 'd', text: 'Directive Learning' }
                    ],
                    correctOptionId: 'd',
                    explanation: 'The three main types of machine learning are Supervised Learning, Unsupervised Learning, and Reinforcement Learning. "Directive Learning" is not a standard type of machine learning.'
                  },
                  {
                    id: 'q2',
                    question: 'In supervised learning, the training data is:',
                    options: [
                      { id: 'a', text: 'Unlabeled' },
                      { id: 'b', text: 'Labeled with correct outputs' },
                      { id: 'c', text: 'Organized in clusters' },
                      { id: 'd', text: 'Generated through trial and error' }
                    ],
                    correctOptionId: 'b',
                    explanation: 'Supervised learning uses labeled training data, where each example is paired with an expected output value. The model learns to predict the correct output based on these examples.'
                  },
                  {
                    id: 'q3',
                    question: 'Linear regression is primarily used for:',
                    options: [
                      { id: 'a', text: 'Classification problems' },
                      { id: 'b', text: 'Regression problems' },
                      { id: 'c', text: 'Clustering problems' },
                      { id: 'd', text: 'Reinforcement learning problems' }
                    ],
                    correctOptionId: 'b',
                    explanation: 'Linear regression is a statistical method used for regression problems, where the goal is to predict continuous values based on input features.'
                  }
                ]
              }
            }
          ]
        },
        {
          id: 'module2',
          title: 'Core Concepts and Techniques',
          lessons: [
            {
              id: 'lesson3',
              title: 'Data Preprocessing',
              type: 'content',
              content: {
                sections: [
                  {
                    type: 'text',
                    content: `# Data Preprocessing
                    
Before training a machine learning model, it's essential to prepare and clean your data. This process, known as data preprocessing, involves several steps:

1. Data Cleaning
2. Feature Selection
3. Data Transformation
4. Feature Scaling

Let's review each of these steps.`
                  },
                  {
                    type: 'input',
                    question: 'Why do you think data preprocessing is important in machine learning?',
                    placeholder: 'Share your thoughts...'
                  },
                  {
                    type: 'text',
                    content: '## Handling Missing Data\n\nMissing data is a common issue in real-world datasets. There are several strategies to handle missing values:\n\n- Remove rows with missing values\n- Impute missing values (mean, median, mode)\n- Use algorithms that can handle missing values'
                  }
                ]
              }
            }
          ]
        }
      ]
    };
  }
  
  // Return basic course info for other courses
  return course;
};

// Helper function to get a single lesson
export const getLesson = (courseId: string, lessonId: string): Lesson | undefined => {
  const course = getFullCourseContent(courseId);
  if (!course || !course.modules) return undefined;
  
  for (const module of course.modules) {
    const lesson = module.lessons.find(lesson => lesson.id === lessonId);
    if (lesson) return lesson;
  }
  
  return undefined;
};

// Get first lesson ID for a course
export const getFirstLessonId = (courseId: string): string | undefined => {
  const course = getFullCourseContent(courseId);
  if (!course || !course.modules || course.modules.length === 0) return undefined;
  
  const firstModule = course.modules[0];
  if (!firstModule.lessons || firstModule.lessons.length === 0) return undefined;
  
  return firstModule.lessons[0].id;
};

// Get next lesson ID
export const getNextLessonId = (courseId: string, currentLessonId: string): string | undefined => {
  const course = getFullCourseContent(courseId);
  if (!course || !course.modules) return undefined;
  
  let foundCurrent = false;
  
  for (const module of course.modules) {
    for (let i = 0; i < module.lessons.length; i++) {
      if (foundCurrent) {
        return module.lessons[i].id;
      }
      
      if (module.lessons[i].id === currentLessonId) {
        foundCurrent = true;
        if (i < module.lessons.length - 1) {
          return module.lessons[i + 1].id;
        }
      }
    }
  }
  
  // If we're at the last lesson, return undefined
  return undefined;
};
