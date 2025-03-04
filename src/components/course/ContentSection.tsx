
import React, { useState } from 'react';
import { type ContentSection as ContentSectionType } from '@/lib/types';
import { saveUserInput, getUserInput } from '@/lib/progressStorage';
import ReactMarkdown from 'react-markdown';
import { cn } from '@/lib/utils';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { toast } from '@/components/ui/use-toast';

interface ContentSectionProps {
  section: ContentSectionType;
  courseId: string;
  lessonId: string;
  sectionIndex: number;
}

const ContentSection: React.FC<ContentSectionProps> = ({
  section,
  courseId,
  lessonId,
  sectionIndex
}) => {
  const renderSection = () => {
    switch (section.type) {
      case 'text':
        return (
          <div className="prose max-w-none dark:prose-invert">
            <ReactMarkdown>{section.content}</ReactMarkdown>
          </div>
        );
        
      case 'code':
        return (
          <div className="bg-gray-800 text-gray-100 p-4 rounded-md overflow-x-auto my-4">
            <pre>
              <code>{section.content}</code>
            </pre>
          </div>
        );
        
      case 'image':
        return (
          <figure className="my-6">
            <img 
              src={section.src} 
              alt={section.alt} 
              className="rounded-lg w-full object-cover"
            />
            <figcaption className="text-sm text-ai-dark-gray mt-2 text-center">
              {section.alt}
            </figcaption>
          </figure>
        );
        
      case 'video':
        return (
          <div className="my-6 aspect-video">
            <iframe
              src={section.src}
              className="w-full h-full rounded-md"
              title="Video content"
              allowFullScreen
            ></iframe>
          </div>
        );
        
      case 'input':
        return <UserInputSection 
          question={section.question} 
          placeholder={section.placeholder}
          courseId={courseId}
          lessonId={lessonId}
          sectionIndex={sectionIndex}
        />;
        
      default:
        return null;
    }
  };

  return (
    <div className="mb-8">
      {renderSection()}
    </div>
  );
};

// Component for handling user input sections
const UserInputSection: React.FC<{
  question: string;
  placeholder?: string;
  courseId: string;
  lessonId: string;
  sectionIndex: number;
}> = ({ question, placeholder, courseId, lessonId, sectionIndex }) => {
  const savedInput = getUserInput(courseId, lessonId, sectionIndex);
  const [input, setInput] = useState(savedInput);
  const [isSaved, setIsSaved] = useState(Boolean(savedInput));
  
  const handleSave = () => {
    if (input.trim()) {
      saveUserInput(courseId, lessonId, sectionIndex, input);
      setIsSaved(true);
      toast({
        title: "Response saved",
        description: "Your answer has been saved successfully.",
      });
    }
  };
  
  return (
    <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 my-6">
      <h3 className="font-medium text-lg mb-3">{question}</h3>
      <Textarea
        value={input}
        onChange={(e) => {
          setInput(e.target.value);
          setIsSaved(false);
        }}
        placeholder={placeholder || "Type your answer here..."}
        className="min-h-[120px] mb-4"
      />
      <div className="flex items-center justify-between">
        <Button onClick={handleSave} disabled={!input.trim() || isSaved}>
          {isSaved ? "Saved" : "Save Answer"}
        </Button>
        {isSaved && (
          <span className="text-green-600 text-sm">
            Answer saved
          </span>
        )}
      </div>
    </div>
  );
};

export default ContentSection;
