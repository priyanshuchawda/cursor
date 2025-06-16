
import { useEffect, useState, useRef } from 'react';
import type { CursorSettings } from '@/store/cursorStore';

interface MeteorCursorProps {
  mousePos: { x: number; y: number };
  isPreview?: boolean;
  settings?: CursorSettings;
}

const MeteorCursor = ({ mousePos, isPreview = false, settings }: MeteorCursorProps) => {
  const [trail, setTrail] = useState<Array<{ x: number; y: number; id: number }>>([]);
  const trailId = useRef(0);

  const intensity = settings?.intensity || 50;
  const speed = settings?.speed || 50;
  const color = settings?.color || '#ff6b35';
  const size = settings?.size || 50;

  const trailLength = Math.floor((intensity / 100) * 15) + 5;
  const animationSpeed = (speed / 100) * 2 + 0.5;
  const cursorSize = (size / 100) * 16 + 8;

  useEffect(() => {
    setTrail(prev => {
      const newTrail = [...prev, { 
        x: mousePos.x, 
        y: mousePos.y, 
        id: trailId.current++ 
      }];
      return newTrail.slice(-trailLength);
    });
  }, [mousePos, trailLength]);

  const baseClasses = "pointer-events-none z-50 transition-opacity duration-200";
  const position = isPreview ? "absolute" : "fixed";

  return (
    <>
      <div
        className={`${baseClasses} ${position}`}
        style={{
          left: mousePos.x - cursorSize/2,
          top: mousePos.y - cursorSize/2,
          transform: 'translate(-50%, -50%)'
        }}
      >
        <div 
          className="rounded-full shadow-lg animate-pulse"
          style={{
            width: `${cursorSize}px`,
            height: `${cursorSize}px`,
            background: `linear-gradient(135deg, ${color}, ${color}80)`,
            boxShadow: `0 0 20px ${color}80`,
            animationDuration: `${2 / animationSpeed}s`
          }}
        ></div>
      </div>
      {trail.map((point, index) => (
        <div
          key={point.id}
          className={`${baseClasses} ${position}`}
          style={{
            left: point.x - 4,
            top: point.y - 4,
            opacity: (index + 1) / trail.length * 0.8,
            transform: 'translate(-50%, -50%)'
          }}
        >
          <div 
            className="rounded-full animate-pulse"
            style={{
              width: `${4 + (index / trail.length) * (cursorSize * 0.5)}px`,
              height: `${4 + (index / trail.length) * (cursorSize * 0.5)}px`,
              background: `linear-gradient(135deg, ${color}, ${color}60)`,
              animationDuration: `${2 / animationSpeed}s`
            }}
          ></div>
        </div>
      ))}
    </>
  );
};

export default MeteorCursor;
