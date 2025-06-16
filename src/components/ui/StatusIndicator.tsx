
interface StatusIndicatorProps {
  intensity?: string;
  isActive: boolean;
  isPreview: boolean;
}

const StatusIndicator = ({ intensity, isActive, isPreview }: StatusIndicatorProps) => {
  const getIntensityColor = (intensity?: string) => {
    switch (intensity) {
      case 'LOW': return 'text-green-400';
      case 'MEDIUM': return 'text-yellow-400';
      case 'HIGH': return 'text-orange-400';
      case 'CRITICAL': return 'text-red-400';
      case 'EXTREME': return 'text-purple-400';
      default: return 'text-gray-400';
    }
  };

  return (
    <>
      {/* Intensity indicator */}
      <div className="text-right">
        <div className={`text-xs font-mono font-bold ${getIntensityColor(intensity)}`}>
          {intensity}
        </div>
        <div className="text-xs text-gray-500 font-mono">INTENSITY</div>
      </div>

      {/* Status indicators */}
      {isPreview && !isActive && (
        <div className="absolute top-4 right-4 flex items-center gap-1 text-xs bg-purple-600 text-white px-2 py-1 rounded-full animate-pulse font-mono">
          <div className="w-3 h-3">⚡</div>
          PREVIEW
        </div>
      )}

      {isActive && (
        <div className="absolute top-4 right-4 flex items-center gap-1 text-xs bg-green-600 text-white px-2 py-1 rounded-full animate-pulse font-mono">
          <div className="w-3 h-3">⚡</div>
          LIVE
        </div>
      )}
    </>
  );
};

export default StatusIndicator;
