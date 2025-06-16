
import { ReactNode, forwardRef } from 'react';
import { Card } from '@/components/ui/card';

interface DemoCardProps {
  children: ReactNode;
  isActive: boolean;
  isHovered: boolean;
  gradient: string;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
  className?: string;
}

const DemoCard = forwardRef<HTMLDivElement, DemoCardProps>(({ 
  children, 
  isActive, 
  isHovered, 
  gradient, 
  onMouseEnter, 
  onMouseLeave,
  className = "" 
}, ref) => {
  return (
    <Card 
      ref={ref}
      className={`relative overflow-hidden group transition-all duration-300 border-2 bg-gray-900/60 backdrop-blur-sm ${
        isActive 
          ? 'border-cyan-400 shadow-2xl shadow-cyan-400/30' 
          : isHovered 
            ? 'border-purple-500/50 shadow-lg shadow-purple-500/20' 
            : 'border-gray-700 hover:border-gray-600'
      } ${className}`}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      {/* Holographic overlay */}
      <div className={`absolute inset-0 bg-gradient-to-br ${gradient} opacity-5 group-hover:opacity-10 transition-opacity duration-300`}></div>
      
      {/* Matrix rain effect on hover */}
      {isHovered && (
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full opacity-20 text-green-400 text-xs font-mono leading-none whitespace-nowrap animate-pulse">
            {Array.from({ length: 20 }, (_, i) => (
              <div key={i} className="animate-bounce" style={{ animationDelay: `${i * 0.1}s` }}>
                {Math.random().toString(2).substr(2, 8)}
              </div>
            ))}
          </div>
        </div>
      )}

      {children}
    </Card>
  );
});

DemoCard.displayName = 'DemoCard';

export default DemoCard;
