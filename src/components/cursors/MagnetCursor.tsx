
interface MagnetCursorProps {
  mousePos: { x: number; y: number };
  isPreview?: boolean;
}

const MagnetCursor = ({ mousePos, isPreview = false }: MagnetCursorProps) => {
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
      <div className="relative">
        <div className="w-6 h-6 border-2 border-blue-400 rounded-full animate-ping"></div>
        <div className="absolute inset-0 w-6 h-6 bg-blue-500/20 rounded-full"></div>
      </div>
    </div>
  );
};

export default MagnetCursor;
