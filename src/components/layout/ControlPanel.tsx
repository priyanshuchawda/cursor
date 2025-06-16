
import { Button } from '@/components/ui/button';
import { Sparkles, Zap } from 'lucide-react';

interface ControlPanelProps {
  onRandomize: () => void;
}

const ControlPanel = ({ onRandomize }: ControlPanelProps) => {
  return (
    <div className="bg-gray-900/60 border border-purple-500/30 rounded-lg p-6 backdrop-blur-sm">
      <div className="flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
            <Zap className="w-6 h-6 text-white" />
          </div>
          <div>
            <h3 className="text-white font-mono text-lg">CONTROL_PANEL.exe</h3>
            <p className="text-gray-400 text-sm">Performance: 60fps • Memory: 2.1MB • Particles: 847</p>
          </div>
        </div>
        
        <Button 
          onClick={onRandomize}
          className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-400 hover:to-blue-400 text-black font-mono font-bold px-6 py-3 rounded-lg shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 transition-all duration-300 hover:scale-105"
        >
          <Sparkles className="w-4 h-4 mr-2" />
          RANDOMIZE.exe
        </Button>
      </div>
    </div>
  );
};

export default ControlPanel;
