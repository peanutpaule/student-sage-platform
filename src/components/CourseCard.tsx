
import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

interface CourseCardProps {
  id: string;
  title: string;
  description: string;
  level: string;
  duration: string;
  image: string;
  category: string;
}

const CourseCard: React.FC<CourseCardProps> = ({
  id,
  title,
  description,
  level,
  duration,
  image,
  category,
}) => {
  return (
    <div className="glass-card overflow-hidden transition-all duration-300 hover:shadow-xl group h-full flex flex-col">
      <div className="relative h-48 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute top-4 left-4">
          <span className="tag bg-white/80 backdrop-blur-sm">{category}</span>
        </div>
      </div>
      <div className="p-6 flex flex-col flex-grow">
        <div className="flex justify-between items-center mb-3">
          <span className="text-sm text-ai-dark-gray">{level}</span>
          <span className="text-sm text-ai-dark-gray">{duration}</span>
        </div>
        <h3 className="text-xl font-medium text-ai-black mb-2">{title}</h3>
        <p className="text-ai-dark-gray text-sm mb-6 flex-grow">{description}</p>
        <Link 
          to={`/courses/${id}`} 
          className="btn-text group-hover:text-ai-blue transition-all"
        >
          Learn more
          <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
        </Link>
      </div>
    </div>
  );
};

export default CourseCard;
