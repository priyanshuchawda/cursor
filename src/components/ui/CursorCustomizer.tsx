
import { useState } from 'react';
import { Slider } from '@/components/ui/slider';
import { Button } from '@/components/ui/button';
import { Settings, Palette, Zap, Scale } from 'lucide-react';
import { useCursorStore } from '@/store/cursorStore';

interface CursorCustomizerProps {
  cursorId: string;
  isVisible: boolean;
  onClose: () => void;
}

const colorPresets = [
  { name: 'Cyan', value: '#00ffff' },
  { name: 'Purple', value: '#a855f7' },
  { name: 'Pink', value: '#ec4899' },
  { name: 'Green', value: '#10b981' },
  { name: 'Orange', value: '#f97316' },
  { name: 'Red', value: '#ef4444' }
];

const CursorCustomizer = ({ cursorId, isVisible, onClose }: CursorCustomizerProps) => {
  const { getCursorSettings, updateCursorSettings } = useCursorStore();
  const settings = getCursorSettings(cursorId);

  if (!isVisible) return null;

  return (
    <div className="absolute top-0 left-0 w-full h-full bg-gray-900/95 backdrop-blur-sm border border-cyan-400/50 rounded-lg z-10 p-4 font-mono">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-2">
          <Settings className="w-5 h-5 text-cyan-400" />
          <span className="text-cyan-400 font-bold">CUSTOMIZE.exe</span>
        </div>
        <Button 
          size="sm" 
          variant="outline" 
          onClick={onClose}
          className="border-gray-600 hover:border-cyan-400 text-cyan-400"
        >
          ✕
        </Button>
      </div>

      {/* Controls */}
      <div className="space-y-6">
        {/* Intensity */}
        <div className="space-y-2">
          <div className="flex items-center gap-2">
            <Zap className="w-4 h-4 text-orange-400" />
            <label className="text-orange-400 text-sm">INTENSITY: {settings.intensity}%</label>
          </div>
          <Slider
            value={[settings.intensity]}
            onValueChange={([value]) => updateCursorSettings(cursorId, { intensity: value })}
            max={100}
            step={1}
            className="w-full"
          />
        </div>

        {/* Speed */}
        <div className="space-y-2">
          <div className="flex items-center gap-2">
            <Zap className="w-4 h-4 text-purple-400" />
            <label className="text-purple-400 text-sm">SPEED: {settings.speed}%</label>
          </div>
          <Slider
            value={[settings.speed]}
            onValueChange={([value]) => updateCursorSettings(cursorId, { speed: value })}
            max={100}
            step={1}
            className="w-full"
          />
        </div>

        {/* Size */}
        <div className="space-y-2">
          <div className="flex items-center gap-2">
            <Scale className="w-4 h-4 text-green-400" />
            <label className="text-green-400 text-sm">SIZE: {settings.size}%</label>
          </div>
          <Slider
            value={[settings.size]}
            onValueChange={([value]) => updateCursorSettings(cursorId, { size: value })}
            max={200}
            min={25}
            step={5}
            className="w-full"
          />
        </div>

        {/* Color Scheme */}
        <div className="space-y-3">
          <div className="flex items-center gap-2">
            <Palette className="w-4 h-4 text-pink-400" />
            <label className="text-pink-400 text-sm">COLOR_SCHEME</label>
          </div>
          <div className="grid grid-cols-3 gap-2">
            {colorPresets.map((preset) => (
              <Button
                key={preset.name}
                size="sm"
                variant="outline"
                onClick={() => updateCursorSettings(cursorId, { color: preset.value })}
                className={`border-2 transition-all duration-200 ${
                  settings.color === preset.value 
                    ? 'border-cyan-400 bg-cyan-400/20' 
                    : 'border-gray-600 hover:border-gray-400'
                }`}
                style={{ 
                  backgroundColor: settings.color === preset.value ? `${preset.value}20` : undefined,
                  boxShadow: settings.color === preset.value ? `0 0 10px ${preset.value}50` : undefined
                }}
              >
                <div 
                  className="w-3 h-3 rounded-full mr-2" 
                  style={{ backgroundColor: preset.value }}
                />
                <span className="text-xs">{preset.name}</span>
              </Button>
            ))}
          </div>
        </div>

        {/* Live Preview Indicator */}
        <div className="text-center pt-4 border-t border-gray-700">
          <div className="text-xs text-gray-400 mb-2">LIVE_PREVIEW_MODE</div>
          <div className="w-4 h-4 bg-green-400 rounded-full animate-pulse mx-auto shadow-lg shadow-green-400/50"></div>
        </div>
      </div>
    </div>
  );
};

export default CursorCustomizer;
