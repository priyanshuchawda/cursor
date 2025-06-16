
import { useState, useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Play, Square, Eye, Settings } from 'lucide-react';
import DemoCard from '@/components/ui/DemoCard';
import StatusIndicator from '@/components/ui/StatusIndicator';
import CursorCustomizer from '@/components/ui/CursorCustomizer';
import { useCursorStore } from '@/store/cursorStore';
import MeteorCursor from '@/components/cursors/MeteorCursor';
import BlobCursor from '@/components/cursors/BlobCursor';
import MagnetCursor from '@/components/cursors/MagnetCursor';
import PixelCursor from '@/components/cursors/PixelCursor';
import NeonCursor from '@/components/cursors/NeonCursor';

interface CursorExperiment {
  id: string;
  name: string;
  description: string;
  icon: React.ComponentType<any>;
  gradient: string;
  demo: boolean;
  intensity?: string;
}

interface CursorDemoProps {
  experiment: CursorExperiment;
  isDark: boolean;
  isActive: boolean;
  onActivate: () => void;
  onDeactivate: () => void;
  index: number;
}

const CursorDemo = ({ experiment, isDark, isActive, onActivate, onDeactivate, index }: CursorDemoProps) => {
  const [isPreview, setIsPreview] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const [showCustomizer, setShowCustomizer] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);
  const { getCursorSettings } = useCursorStore();

  const Icon = experiment.icon;
  const settings = getCursorSettings(experiment.id);

  // Apply cursor styles globally when active
  useEffect(() => {
    if (isActive) {
      document.body.style.cursor = 'none';
      document.body.classList.add(`cursor-${experiment.id}`);
    } else {
      document.body.style.cursor = '';
      document.body.classList.remove(`cursor-${experiment.id}`);
    }

    return () => {
      document.body.style.cursor = '';
      document.body.classList.remove(`cursor-${experiment.id}`);
    };
  }, [isActive, experiment.id]);

  // Mouse tracking for preview
  useEffect(() => {
    if (!isPreview && !isActive) return;

    const handleMouseMove = (e: MouseEvent) => {
      if (isPreview && cardRef.current) {
        const rect = cardRef.current.getBoundingClientRect();
        setMousePos({
          x: e.clientX - rect.left,
          y: e.clientY - rect.top
        });
      } else if (isActive) {
        setMousePos({ x: e.clientX, y: e.clientY });
      }
    };

    const target = isPreview ? cardRef.current : document;
    target?.addEventListener('mousemove', handleMouseMove);

    return () => {
      target?.removeEventListener('mousemove', handleMouseMove);
    };
  }, [isPreview, isActive, experiment.id]);

  const getCursorComponent = () => {
    const cursorProps = { mousePos, isPreview, settings };
    
    switch (experiment.id) {
      case 'meteor':
        return <MeteorCursor {...cursorProps} />;
      case 'blob':
        return <BlobCursor {...cursorProps} />;
      case 'magnet':
        return <MagnetCursor {...cursorProps} />;
      case 'pixel':
        return <PixelCursor {...cursorProps} />;
      case 'neon':
        return <NeonCursor {...cursorProps} />;
      default:
        return null;
    }
  };

  return (
    <div 
      className={`transform transition-all duration-500 hover:scale-105 ${isActive ? 'scale-105' : ''}`}
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      <DemoCard
        ref={cardRef}
        isActive={isActive}
        isHovered={isHovered}
        gradient={experiment.gradient}
        onMouseEnter={() => {
          if (!showCustomizer) {
            setIsPreview(true);
            setIsHovered(true);
          }
        }}
        onMouseLeave={() => {
          if (!showCustomizer) {
            setIsPreview(false);
            setIsHovered(false);
          }
        }}
        className="h-80"
      >
        <div className="relative p-6 h-full flex flex-col justify-between">
          {/* Customizer Panel */}
          <CursorCustomizer 
            cursorId={experiment.id}
            isVisible={showCustomizer}
            onClose={() => {
              setShowCustomizer(false);
              setIsPreview(false);
              setIsHovered(false);
            }}
          />

          {/* Header */}
          <div className="space-y-4">
            {/* Status Indicator */}
            <div className="flex items-center justify-between">
              <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${experiment.gradient} p-3 shadow-lg group-hover:shadow-xl transition-all duration-300`}>
                <Icon className="w-6 h-6 text-white" />
              </div>
              <StatusIndicator 
                intensity={experiment.intensity}
                isActive={isActive}
                isPreview={isPreview}
              />
            </div>

            {/* Title & Description */}
            <div>
              <h3 className="text-lg font-bold text-white font-mono mb-2 group-hover:text-cyan-400 transition-colors">
                {experiment.name}
              </h3>
              <p className="text-sm text-gray-400 leading-relaxed">
                {experiment.description}
              </p>
            </div>
          </div>

          {/* Controls */}
          <div className="space-y-3">
            {/* Status Display */}
            <div className="flex items-center justify-between text-xs font-mono">
              <span className="text-gray-500">STATUS:</span>
              <span className={isActive ? 'text-green-400' : 'text-gray-400'}>
                {isActive ? 'ACTIVE' : 'STANDBY'}
              </span>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-2">
              <Button
                size="sm"
                onClick={isActive ? onDeactivate : onActivate}
                className={`flex-1 font-mono font-bold transition-all duration-300 ${
                  isActive 
                    ? 'bg-red-600 hover:bg-red-700 text-white shadow-lg shadow-red-600/30' 
                    : 'bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-400 hover:to-blue-400 text-black shadow-lg shadow-cyan-500/30'
                }`}
              >
                {isActive ? (
                  <>
                    <Square className="w-4 h-4 mr-2" />
                    STOP
                  </>
                ) : (
                  <>
                    <Play className="w-4 h-4 mr-2" />
                    DEPLOY
                  </>
                )}
              </Button>
              
              <Button 
                size="sm" 
                variant="outline" 
                onClick={() => setShowCustomizer(!showCustomizer)}
                className={`aspect-square p-0 transition-all duration-300 ${
                  showCustomizer 
                    ? 'border-cyan-400 bg-cyan-400/20 text-cyan-400' 
                    : 'border-gray-600 hover:border-cyan-400 hover:bg-cyan-400/10'
                }`}
              >
                <Settings className="w-4 h-4 text-cyan-400" />
              </Button>

              <Button 
                size="sm" 
                variant="outline" 
                className="aspect-square p-0 border-gray-600 hover:border-cyan-400 hover:bg-cyan-400/10 transition-all duration-300"
              >
                <Eye className="w-4 h-4 text-cyan-400" />
              </Button>
            </div>
          </div>
        </div>

        {/* Preview cursor */}
        {(isPreview || isActive) && getCursorComponent()}
      </DemoCard>
    </div>
  );
};

export default CursorDemo;
