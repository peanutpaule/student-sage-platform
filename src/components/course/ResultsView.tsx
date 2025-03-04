
import React, { useState, useEffect } from 'react';
import { getUserProgress } from '@/lib/progressStorage';
import { getFullCourseContent } from '@/lib/courseContent';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { Card } from '@/components/ui/card';
import { Trophy, Award, Star, BookOpen, Share2, Download } from 'lucide-react';
import confetti from 'canvas-confetti';

interface ResultsViewProps {
  courseId: string;
  onContinue: () => void;
}

const ResultsView: React.FC<ResultsViewProps> = ({ courseId, onContinue }) => {
  const [progress, setProgress] = useState<any>(null);
  const [course, setCourse] = useState<any>(null);
  const [achievementUnlocked, setAchievementUnlocked] = useState(false);
  
  useEffect(() => {
    const userProgress = getUserProgress(courseId);
    const courseData = getFullCourseContent(courseId);
    
    setProgress(userProgress);
    setCourse(courseData);
    
    // Trigger confetti animation
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 }
    });
    
    // Set achievement unlocked after a delay for animation
    const timer = setTimeout(() => {
      setAchievementUnlocked(true);
      
      // Fire more confetti for achievement
      confetti({
        particleCount: 200,
        spread: 90,
        origin: { y: 0.6 }
      });
    }, 1000);
    
    return () => clearTimeout(timer);
  }, [courseId]);
  
  if (!progress || !course) {
    return <div>Loading results...</div>;
  }

  // Calculate quiz score average
  const quizScores = progress.quizResults.map((result: any) => result.score);
  const averageScore = quizScores.length > 0
    ? quizScores.reduce((sum: number, score: number) => sum + score, 0) / quizScores.length
    : 0;
  
  // Calculate completion percentage
  let totalLessons = 0;
  if (course.modules) {
    course.modules.forEach((module: any) => {
      totalLessons += module.lessons.length;
    });
  }
  
  const completionPercentage = totalLessons > 0
    ? (progress.completedLessons.length / totalLessons) * 100
    : 0;
  
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <div className="text-center mb-10 animate-fade-in">
        <div className="flex justify-center mb-4">
          <Trophy size={60} className="text-yellow-500" />
        </div>
        <h1 className="text-3xl font-bold mb-2">Congratulations!</h1>
        <p className="text-xl text-gray-600">
          You've completed the <span className="font-medium">{course.title}</span> course
        </p>
      </div>
      
      <Card className="p-8 mb-10 bg-gradient-to-br from-blue-50 to-purple-50 border-2 border-blue-200 shadow-lg animate-scale-in">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="mb-6 md:mb-0 text-center md:text-left">
            <h2 className="text-2xl font-bold mb-1">Course Certificate</h2>
            <p className="text-gray-600 mb-4">Your achievement is now unlocked!</p>
            <div className="flex gap-3 mt-6">
              <Button>
                <Download size={16} className="mr-2" />
                Download Certificate
              </Button>
              <Button variant="outline">
                <Share2 size={16} className="mr-2" />
                Share
              </Button>
            </div>
          </div>
          
          <div className="w-40 h-40 relative">
            <div className={`absolute inset-0 transition-all duration-1000 ${achievementUnlocked ? 'opacity-100 scale-100' : 'opacity-0 scale-90'}`}>
              <div className="w-full h-full flex items-center justify-center bg-gradient-to-r from-blue-500 to-purple-600 rounded-full shadow-lg">
                <Award size={60} className="text-white" />
              </div>
            </div>
          </div>
        </div>
      </Card>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
        <Card className="p-6 hover-scale">
          <div className="flex items-start">
            <div className="bg-green-100 p-3 rounded-lg mr-4">
              <Star className="h-6 w-6 text-green-600" />
            </div>
            <div>
              <h3 className="font-medium text-lg mb-2">Course Completion</h3>
              <Progress value={completionPercentage} className="h-2 mb-2" />
              <p className="text-sm text-gray-500">{Math.round(completionPercentage)}% of lessons completed</p>
            </div>
          </div>
        </Card>
        
        <Card className="p-6 hover-scale">
          <div className="flex items-start">
            <div className="bg-blue-100 p-3 rounded-lg mr-4">
              <BookOpen className="h-6 w-6 text-blue-600" />
            </div>
            <div>
              <h3 className="font-medium text-lg mb-2">Quiz Performance</h3>
              <Progress value={averageScore} className="h-2 mb-2" />
              <p className="text-sm text-gray-500">{Math.round(averageScore)}% average quiz score</p>
            </div>
          </div>
        </Card>
      </div>
      
      <div className="text-center">
        <h3 className="text-xl font-medium mb-4">What's Next?</h3>
        <p className="text-gray-600 mb-6">Continue your learning journey with related courses</p>
        
        <div className="flex justify-center">
          <Button onClick={onContinue} size="lg" className="hover-scale">
            Explore More Courses
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ResultsView;
