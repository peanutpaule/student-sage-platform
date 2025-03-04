
import React from 'react';

interface AnimatedGradientProps {
  className?: string;
}

const AnimatedGradient: React.FC<AnimatedGradientProps> = ({ className }) => {
  return (
    <div 
      className={`absolute inset-0 -z-10 overflow-hidden ${className}`}
      aria-hidden="true"
    >
      <div 
        className="absolute w-[200%] h-[200%] -top-[50%] -left-[50%] bg-[length:24px_24px] opacity-20"
        style={{
          backgroundImage: `radial-gradient(circle, #0071e3 1px, transparent 1px)`,
        }}
      />
      <div 
        className="absolute top-0 left-0 right-0 h-96 rounded-full bg-gradient-to-b from-ai-blue/20 via-ai-light-blue/10 to-transparent blur-3xl transform -translate-y-1/2 animate-pulse-slow"
      />
      <div 
        className="absolute bottom-0 left-0 right-0 h-96 rounded-full bg-gradient-to-t from-ai-blue/10 to-transparent blur-3xl transform translate-y-1/2"
      />
    </div>
  );
};

export default AnimatedGradient;
