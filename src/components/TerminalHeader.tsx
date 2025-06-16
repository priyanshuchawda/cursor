
import { useState, useEffect } from 'react';
import { Monitor } from 'lucide-react';

interface TerminalHeaderProps {
  glitchActive: boolean;
}

const TerminalHeader = ({ glitchActive }: TerminalHeaderProps) => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const fullText = 'CURSOR_LAB.exe';
  
  useEffect(() => {
    if (currentIndex < fullText.length) {
      const timeout = setTimeout(() => {
        setDisplayText(prev => prev + fullText[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      }, 100);
      return () => clearTimeout(timeout);
    }
  }, [currentIndex, fullText]);

  const asciiArt = [
    "  ▄████▄   █    ██  ██▀███    ██████  ▒█████   ██▀███  ",
    " ▒██▀ ▀█   ██  ▓██▒▓██ ▒ ██▒▒██    ▒ ▒██▒  ██▒▓██ ▒ ██▒",
    " ▒▓█    ▄ ▓██  ▒██░▓██ ░▄█ ▒░ ▓██▄   ▒██░  ██▒▓██ ░▄█ ▒",
    " ▒▓▓▄ ▄██▒▓▓█  ░██░▒██▀▀█▄    ▒   ██▒▒██   ██░▒██▀▀█▄  ",
    " ▒ ▓███▀ ░▒▒█████▓ ░██▓ ▒██▒▒██████▒▒░ ████▓▒░░██▓ ▒██▒",
    " ░ ░▒ ▒  ░░▒▓▒ ▒ ▒ ░ ▒▓ ░▒▓░▒ ▒▓▒ ▒ ░░ ▒░▒░▒░ ░ ▒▓ ░▒▓░",
    "   ░  ▒   ░░▒░ ░ ░   ░▒ ░ ▒░░ ░▒  ░ ░  ░ ▒ ▒░   ░▒ ░ ▒░",
    " ░         ░░░ ░ ░   ░░   ░ ░  ░  ░  ░ ░ ░ ▒    ░░   ░ "
  ];

  return (
    <div className="mb-16 relative">
      {/* Terminal Window */}
      <div className="bg-black border-2 border-cyan-500 rounded-lg shadow-2xl shadow-cyan-500/20 overflow-hidden">
        {/* Terminal Header Bar */}
        <div className="bg-gray-900 px-4 py-2 flex items-center justify-between border-b border-cyan-500/30">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-red-500 rounded-full"></div>
            <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
            <div className="w-3 h-3 bg-green-500 rounded-full"></div>
          </div>
          <span className="text-cyan-400 font-mono text-sm">CURSOR_LAB_TERMINAL_v2.1.3</span>
          <Monitor className="w-4 h-4 text-cyan-400" />
        </div>
        
        {/* Terminal Content */}
        <div className="p-6 font-mono">
          {/* ASCII Art */}
          <div className={`text-cyan-400 text-xs leading-tight mb-4 transition-all duration-150 ${glitchActive ? 'animate-pulse blur-sm' : ''}`}>
            {asciiArt.map((line, index) => (
              <div 
                key={index} 
                className="hover:text-white transition-colors duration-300"
                style={{ 
                  animationDelay: `${index * 0.1}s`,
                  textShadow: glitchActive ? '2px 0 #ff00ff, -2px 0 #00ffff' : 'none'
                }}
              >
                {line}
              </div>
            ))}
          </div>
          
          {/* Typing Effect */}
          <div className="text-green-400 text-lg mb-2">
            {'>'} Initializing {displayText}
            <span className="animate-pulse">|</span>
          </div>
          
          {/* System Info */}
          <div className="text-gray-400 text-sm space-y-1">
            <div>{'>'} Loading cursor manipulation protocols...</div>
            <div>{'>'} Quantum mouse tracking: <span className="text-green-400">ENABLED</span></div>
            <div>{'>'} Reality distortion field: <span className="text-yellow-400">ACTIVE</span></div>
            <div>{'>'} Fun levels: <span className="text-purple-400">MAXIMUM</span></div>
          </div>
          
          {/* Tagline */}
          <div className="mt-6 text-center">
            <h2 className="text-2xl md:text-4xl font-bold bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent mb-2">
              THE PLAYGROUND OF POINTING GLORY
            </h2>
            <p className="text-gray-300 text-lg">
              Where cursors transcend reality and enter the realm of pure digital madness
            </p>
          </div>
        </div>
      </div>
      
      {/* Floating Particles */}
      <div className="absolute -top-4 -right-4 w-8 h-8 bg-cyan-400 rounded-full opacity-20 animate-ping"></div>
      <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-purple-500 rounded-full opacity-30 animate-pulse"></div>
    </div>
  );
};

export default TerminalHeader;
