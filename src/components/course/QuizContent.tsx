
import React, { useState } from 'react';
import { type Lesson, type QuizQuestion } from '@/lib/types';
import { saveQuizResult, completeLesson } from '@/lib/progressStorage';
import { Button } from '@/components/ui/button';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Card } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { CheckCircle, XCircle } from 'lucide-react';
import { toast } from '@/components/ui/use-toast';

interface QuizContentProps {
  lesson: Lesson;
  courseId: string;
  onComplete: () => void;
}

const QuizContent: React.FC<QuizContentProps> = ({ lesson, courseId, onComplete }) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOptions, setSelectedOptions] = useState<Record<string, string>>({});
  const [showResults, setShowResults] = useState(false);
  const [quizSubmitted, setQuizSubmitted] = useState(false);
  
  if (lesson.type !== 'quiz' || !lesson.quiz) {
    return null;
  }
  
  const { quiz } = lesson;
  const questions = quiz.questions;
  const currentQuestion = questions[currentQuestionIndex];
  
  const handleOptionSelect = (optionId: string) => {
    setSelectedOptions(prev => ({
      ...prev,
      [currentQuestion.id]: optionId
    }));
  };
  
  const isLastQuestion = currentQuestionIndex === questions.length - 1;
  
  const handleNext = () => {
    if (isLastQuestion) {
      setShowResults(true);
      calculateResults();
    } else {
      setCurrentQuestionIndex(prev => prev + 1);
    }
  };
  
  const calculateResults = () => {
    let correctAnswers = 0;
    
    questions.forEach(question => {
      const selectedOption = selectedOptions[question.id];
      if (selectedOption === question.correctOptionId) {
        correctAnswers++;
      }
    });
    
    const score = (correctAnswers / questions.length) * 100;
    
    // Save the quiz result
    saveQuizResult(courseId, lesson.id, score);
    completeLesson(courseId, lesson.id);
    setQuizSubmitted(true);
    
    toast({
      title: "Quiz completed!",
      description: `You scored ${score.toFixed(0)}% (${correctAnswers}/${questions.length} correct)`,
    });
  };
  
  if (showResults) {
    return <QuizResults 
      questions={questions}
      selectedOptions={selectedOptions}
      onComplete={onComplete}
    />;
  }
  
  return (
    <div className="quiz-content">
      <h1 className="text-2xl md:text-3xl font-medium mb-2">{quiz.title}</h1>
      <p className="text-ai-dark-gray mb-8">{quiz.description}</p>
      
      <div className="mb-4 text-sm text-ai-dark-gray">
        Question {currentQuestionIndex + 1} of {questions.length}
      </div>
      
      <Card className="p-6 mb-8">
        <h2 className="text-xl font-medium mb-4">{currentQuestion.question}</h2>
        
        <RadioGroup 
          onValueChange={handleOptionSelect} 
          value={selectedOptions[currentQuestion.id]}
          className="space-y-3"
        >
          {currentQuestion.options.map(option => (
            <div key={option.id} className="flex items-center space-x-2">
              <RadioGroupItem value={option.id} id={option.id} />
              <Label htmlFor={option.id} className="cursor-pointer flex-grow">
                {option.text}
              </Label>
            </div>
          ))}
        </RadioGroup>
      </Card>
      
      <div className="flex justify-between">
        <Button 
          variant="outline" 
          onClick={() => setCurrentQuestionIndex(prev => Math.max(0, prev - 1))}
          disabled={currentQuestionIndex === 0}
        >
          Previous
        </Button>
        
        <Button 
          onClick={handleNext}
          disabled={!selectedOptions[currentQuestion.id]}
        >
          {isLastQuestion ? 'Finish Quiz' : 'Next Question'}
        </Button>
      </div>
    </div>
  );
};

const QuizResults: React.FC<{
  questions: QuizQuestion[];
  selectedOptions: Record<string, string>;
  onComplete: () => void;
}> = ({ questions, selectedOptions, onComplete }) => {
  return (
    <div className="quiz-results">
      <h1 className="text-2xl md:text-3xl font-medium mb-6">Quiz Results</h1>
      
      <div className="space-y-6 mb-8">
        {questions.map((question, index) => {
          const selectedOption = selectedOptions[question.id];
          const isCorrect = selectedOption === question.correctOptionId;
          
          return (
            <Card key={question.id} className={`p-6 ${isCorrect ? 'border-green-200' : 'border-red-200'}`}>
              <div className="flex items-start gap-3">
                <div className="mt-1">
                  {isCorrect ? (
                    <CheckCircle className="text-green-500 h-5 w-5" />
                  ) : (
                    <XCircle className="text-red-500 h-5 w-5" />
                  )}
                </div>
                <div>
                  <h3 className="text-lg font-medium mb-2">
                    {index + 1}. {question.question}
                  </h3>
                  
                  <div className="mb-3">
                    {question.options.map(option => {
                      const isSelected = selectedOption === option.id;
                      const isCorrectOption = option.id === question.correctOptionId;
                      
                      let optionClass = 'py-2 px-3 rounded-md border mb-2 block';
                      
                      if (isSelected && isCorrectOption) {
                        optionClass += ' bg-green-50 border-green-300';
                      } else if (isSelected && !isCorrectOption) {
                        optionClass += ' bg-red-50 border-red-300';
                      } else if (isCorrectOption) {
                        optionClass += ' bg-green-50 border-green-300';
                      } else {
                        optionClass += ' border-gray-200';
                      }
                      
                      return (
                        <div key={option.id} className={optionClass}>
                          {option.text}
                          {isCorrectOption && !isSelected && (
                            <span className="text-green-600 text-sm ml-2">(Correct answer)</span>
                          )}
                        </div>
                      );
                    })}
                  </div>
                  
                  <div className="text-sm bg-gray-50 p-3 rounded-md">
                    <strong>Explanation:</strong> {question.explanation}
                  </div>
                </div>
              </div>
            </Card>
          );
        })}
      </div>
      
      <Button onClick={onComplete} className="w-full">
        Continue to Next Lesson
      </Button>
    </div>
  );
};

export default QuizContent;
