
import { Switch } from '@/components/ui/switch';

interface StatusBarProps {
  activeCursor: string;
  isDark: boolean;
  setIsDark: (value: boolean) => void;
}

const StatusBar = ({ activeCursor, isDark, setIsDark }: StatusBarProps) => {
  return (
    <div className="flex justify-between items-center mb-12 p-4 bg-gray-900/40 border border-cyan-500/30 rounded-lg backdrop-blur-sm">
      <div className="flex items-center gap-6">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse shadow-lg shadow-green-400/50"></div>
          <span className="text-green-400 font-mono text-sm">SYSTEM_ACTIVE</span>
        </div>
        <div className="text-cyan-400 font-mono text-sm">
          CURSOR: <span className="text-white">{activeCursor.toUpperCase()}</span>
        </div>
        <div className="text-purple-400 font-mono text-sm">
          FPS: <span className="text-white">60</span>
        </div>
        <div className="text-yellow-400 font-mono text-sm">
          MEMORY: <span className="text-white">2.1MB</span>
        </div>
      </div>
      
      <div className="flex items-center gap-4">
        <span className="text-gray-400 font-mono text-sm">THEME_MODE</span>
        <Switch 
          checked={isDark} 
          onCheckedChange={setIsDark}
          className="data-[state=checked]:bg-cyan-600 data-[state=unchecked]:bg-gray-600"
        />
      </div>
    </div>
  );
};

export default StatusBar;
