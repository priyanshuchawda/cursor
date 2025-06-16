
interface NeonCursorProps {
  mousePos: { x: number; y: number };
  isPreview?: boolean;
}

const NeonCursor = ({ mousePos, isPreview = false }: NeonCursorProps) => {
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
        <div className="w-8 h-8 border-2 border-purple-400 rounded-full animate-pulse shadow-lg shadow-purple-500/50"></div>
        <div className="absolute inset-1 w-6 h-6 border border-pink-400 rounded-full animate-ping"></div>
        <div className="absolute inset-3 w-2 h-2 bg-white rounded-full"></div>
      </div>
    </div>
  );
};

export default NeonCursor;
