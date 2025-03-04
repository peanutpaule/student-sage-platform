
import React, { useEffect, useState } from 'react';
import { getFullCourseContent } from '@/lib/courseContent';
import { getUserProgress } from '@/lib/progressStorage';
import { Card } from '@/components/ui/card';
import { BookOpen, CheckCircle, ArrowRight } from 'lucide-react';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from 'recharts';

interface ConceptMapProps {
  courseId: string;
}

const ConceptMap: React.FC<ConceptMapProps> = ({ courseId }) => {
  const [course, setCourse] = useState<any>(null);
  const [progress, setProgress] = useState<any>(null);
  
  useEffect(() => {
    const courseData = getFullCourseContent(courseId);
    const userProgress = getUserProgress(courseId);
    
    setCourse(courseData);
    setProgress(userProgress);
  }, [courseId]);
  
  if (!course || !progress) {
    return <div>Loading concept map...</div>;
  }
  
  // Prepare data for the concept map
  const conceptData = [];
  let totalLessons = 0;
  let completedLessons = 0;
  
  if (course.modules) {
    course.modules.forEach((module: any) => {
      const moduleCompletedLessons = module.lessons.filter((lesson: any) => 
        progress.completedLessons.includes(lesson.id)
      ).length;
      
      totalLessons += module.lessons.length;
      completedLessons += moduleCompletedLessons;
      
      conceptData.push({
        name: module.title,
        total: module.lessons.length,
        completed: moduleCompletedLessons,
        lessons: module.lessons
      });
    });
  }
  
  // Prepare data for progress chart
  const chartData = [
    { name: 'Completed', value: completedLessons },
    { name: 'Remaining', value: totalLessons - completedLessons }
  ];
  
  const COLORS = ['#3B82F6', '#E5E7EB'];
  
  return (
    <div className="concept-map">
      <h1 className="text-2xl md:text-3xl font-medium mb-6">Learning Progress & Concept Map</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
        <Card className="p-6 col-span-2 bg-gradient-to-r from-blue-50 to-indigo-50">
          <h2 className="text-xl font-medium mb-4">Your Learning Journey</h2>
          <p className="text-gray-600 mb-6">
            Track your progress through the course concepts and modules.
          </p>
          
          <div className="flex items-center mb-4">
            <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center mr-3">
              <BookOpen size={18} className="text-blue-600" />
            </div>
            <div className="flex-grow">
              <div className="flex justify-between text-sm mb-1">
                <span>Overall Progress</span>
                <span className="font-medium">{completedLessons}/{totalLessons} concepts</span>
              </div>
              <div className="h-2 w-full bg-gray-200 rounded-full overflow-hidden">
                <div 
                  className="h-full bg-blue-500 rounded-full" 
                  style={{ width: `${(completedLessons / totalLessons) * 100}%` }}
                ></div>
              </div>
            </div>
          </div>
        </Card>
        
        <Card className="p-6 flex flex-col justify-center">
          <h3 className="text-center text-lg font-medium mb-2">Completion</h3>
          <div className="h-48">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={chartData}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={80}
                  paddingAngle={5}
                  dataKey="value"
                >
                  {chartData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip 
                  formatter={(value) => [`${value} lessons`, entry => entry.name]}
                />
              </PieChart>
            </ResponsiveContainer>
          </div>
          <div className="text-center text-sm text-gray-600">
            {Math.round((completedLessons / totalLessons) * 100)}% completed
          </div>
        </Card>
      </div>
      
      <div className="space-y-8 mb-10">
        {conceptData.map((module, index) => (
          <div key={index} className="module-concept animate-fade-in" style={{ animationDelay: `${index * 100}ms` }}>
            <h3 className="text-lg font-medium mb-3">{module.name}</h3>
            
            <div className="ml-5 relative concept-tree">
              {/* Vertical line connecting concepts */}
              <div className="absolute top-0 bottom-0 left-3 w-0.5 bg-gray-200"></div>
              
              {module.lessons.map((lesson: any, lessonIndex: number) => {
                const isCompleted = progress.completedLessons.includes(lesson.id);
                
                return (
                  <div key={lessonIndex} className="relative pl-10 py-2">
                    {/* Horizontal line to concept */}
                    <div className="absolute top-1/2 left-0 h-0.5 w-6 bg-gray-200"></div>
                    
                    {/* Concept node */}
                    <div className="absolute top-1/2 left-3 -translate-y-1/2 -translate-x-1/2 w-6 h-6 rounded-full border-2 border-gray-200 bg-white flex items-center justify-center">
                      {isCompleted ? (
                        <CheckCircle size={14} className="text-green-600" />
                      ) : (
                        <div className="w-2 h-2 rounded-full bg-gray-300"></div>
                      )}
                    </div>
                    
                    <div className={`p-3 rounded-lg border ${isCompleted ? 'bg-green-50 border-green-200' : 'bg-gray-50 border-gray-200'}`}>
                      <div className="text-sm font-medium">{lesson.title}</div>
                    </div>
                    
                    {/* Show connections between related concepts */}
                    {lessonIndex < module.lessons.length - 1 && (
                      <div className="flex justify-center my-1">
                        <ArrowRight size={14} className="text-gray-400" />
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ConceptMap;
