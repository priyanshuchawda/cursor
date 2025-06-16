
import { useEffect, useState, useRef } from 'react';

interface PixelCursorProps {
  mousePos: { x: number; y: number };
  isPreview?: boolean;
}

const PixelCursor = ({ mousePos, isPreview = false }: PixelCursorProps) => {
  const [trail, setTrail] = useState<Array<{ x: number; y: number; id: number }>>([]);
  const trailId = useRef(0);

  useEffect(() => {
    setTrail(prev => {
      const newTrail = [...prev, { 
        x: mousePos.x, 
        y: mousePos.y, 
        id: trailId.current++ 
      }];
      return newTrail.slice(-10);
    });
  }, [mousePos]);

  const baseClasses = "pointer-events-none z-50 transition-opacity duration-200";
  const position = isPreview ? "absolute" : "fixed";

  return (
    <>
      <div
        className={`${baseClasses} ${position}`}
        style={{
          left: mousePos.x - 8,
          top: mousePos.y - 8,
          transform: 'translate(-50%, -50%)'
        }}
      >
        <div className="w-4 h-4 bg-green-500 shadow-lg shadow-green-500/50" style={{ clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)' }}></div>
      </div>
      {trail.map((point, index) => (
        <div
          key={point.id}
          className={`${baseClasses} ${position}`}
          style={{
            left: point.x,
            top: point.y,
            opacity: (index + 1) / trail.length * 0.6,
            transform: 'translate(-50%, -50%)'
          }}
        >
          <div className="w-1 h-1 bg-green-400 animate-pulse"></div>
        </div>
      ))}
    </>
  );
};

export default PixelCursor;
