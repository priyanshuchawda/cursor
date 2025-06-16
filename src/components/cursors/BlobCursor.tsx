
import type { CursorSettings } from '@/store/cursorStore';

interface BlobCursorProps {
  mousePos: { x: number; y: number };
  isPreview?: boolean;
  settings?: CursorSettings;
}

const BlobCursor = ({ mousePos, isPreview = false, settings }: BlobCursorProps) => {
  const intensity = settings?.intensity || 50;
  const speed = settings?.speed || 50;
  const color = settings?.color || '#a855f7';
  const size = settings?.size || 50;

  const pulseIntensity = (intensity / 100) * 1.5 + 0.5;
  const animationSpeed = (speed / 100) * 2 + 0.5;
  const blobSize = (size / 100) * 32 + 16;

  const baseClasses = "pointer-events-none z-50 transition-opacity duration-200";
  const position = isPreview ? "absolute" : "fixed";

  return (
    <div
      className={`${baseClasses} ${position}`}
      style={{
        left: mousePos.x,
        top: mousePos.y,
        transform: 'translate(-50%, -50%)'
      }}
    >
      <div 
        className="rounded-full animate-pulse transition-transform duration-200 hover:scale-125"
        style={{
          width: `${blobSize}px`,
          height: `${blobSize}px`,
          background: `linear-gradient(135deg, ${color}, ${color}80)`,
          boxShadow: `0 0 ${20 * pulseIntensity}px ${color}50`,
          animationDuration: `${2 / animationSpeed}s`
        }}
      ></div>
    </div>
  );
};

export default BlobCursor;
