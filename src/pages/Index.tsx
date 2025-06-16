
import { useState, useEffect } from 'react';
import { Flame, Circle, Magnet, Sparkles, Zap } from 'lucide-react';
import CursorDemo from '@/components/CursorDemo';
import MobileMessage from '@/components/MobileMessage';
import ParticleField from '@/components/ParticleField';
import SEOHead from '@/components/ui/SEOHead';
import Header from '@/components/layout/Header';
import StatusBar from '@/components/layout/StatusBar';
import ControlPanel from '@/components/layout/ControlPanel';
import Footer from '@/components/layout/Footer';
import { useIsMobile } from '@/hooks/use-mobile';

const Index = () => {
  const [isDark, setIsDark] = useState(true);
  const [activeCursor, setActiveCursor] = useState<string>('default');
  const [glitchActive, setGlitchActive] = useState(false);
  const isMobile = useIsMobile();

  useEffect(() => {
    document.documentElement.classList.toggle('dark', isDark);
  }, [isDark]);

  // Random glitch effect
  useEffect(() => {
    const interval = setInterval(() => {
      setGlitchActive(true);
      setTimeout(() => setGlitchActive(false), 150);
    }, Math.random() * 10000 + 5000);
    
    return () => clearInterval(interval);
  }, []);

  const cursorExperiments = [
    {
      id: 'meteor',
      name: 'METEOR_TAIL.exe',
      description: 'Plasma comet with quantum easing protocols',
      icon: Flame,
      gradient: 'from-orange-400 via-red-500 to-pink-600',
      demo: true,
      intensity: 'HIGH'
    },
    {
      id: 'blob',
      name: 'MORPHIC_BLOB.dll',
      description: 'Liquid consciousness that adapts to motion',
      icon: Circle,
      gradient: 'from-purple-400 via-violet-500 to-indigo-600',
      demo: true,
      intensity: 'MEDIUM'
    },
    {
      id: 'magnet',
      name: 'GRAVITON.sys',
      description: 'Electromagnetic field manipulation engine',
      icon: Magnet,
      gradient: 'from-blue-400 via-cyan-500 to-teal-600',
      demo: true,
      intensity: 'CRITICAL'
    },
    {
      id: 'pixel',
      name: 'RETRO_SPARK.bin',
      description: '8-bit sprite with particle synthesis',
      icon: Sparkles,
      gradient: 'from-green-400 via-emerald-500 to-lime-600',
      demo: true,
      intensity: 'LOW'
    },
    {
      id: 'neon',
      name: 'PULSE_CORE.neo',
      description: 'Quantum ring oscillator with beat detection',
      icon: Zap,
      gradient: 'from-indigo-400 via-purple-500 to-pink-600',
      demo: true,
      intensity: 'EXTREME'
    }
  ];

  const handleRandomize = () => {
    const randomCursor = cursorExperiments[Math.floor(Math.random() * cursorExperiments.length)];
    setActiveCursor(randomCursor.id);
  };

  if (isMobile) {
    return <MobileMessage />;
  }

  return (
    <div className="min-h-screen bg-black overflow-hidden relative">
      <SEOHead />
      
      {/* Particle Field Background */}
      <ParticleField />
      
      {/* Scanlines Effect */}
      <div className="fixed inset-0 pointer-events-none z-10 opacity-[0.02]">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-500 to-transparent animate-pulse"
             style={{
               backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,255,255,0.1) 2px, rgba(0,255,255,0.1) 4px)',
               animation: 'scanlines 0.1s linear infinite'
             }}>
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-20 container mx-auto px-6 py-8">
        {/* Header with Home Button */}
        <Header glitchActive={glitchActive} />

        {/* Status Bar */}
        <StatusBar 
          activeCursor={activeCursor}
          isDark={isDark}
          setIsDark={setIsDark}
        />

        {/* Experiments Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {cursorExperiments.map((experiment, index) => (
            <CursorDemo
              key={experiment.id}
              experiment={experiment}
              isDark={isDark}
              isActive={activeCursor === experiment.id}
              onActivate={() => setActiveCursor(experiment.id)}
              onDeactivate={() => setActiveCursor('default')}
              index={index}
            />
          ))}
        </div>

        {/* Control Panel */}
        <ControlPanel onRandomize={handleRandomize} />

        {/* Footer */}
        <Footer />
      </div>
    </div>
  );
};

export default Index;
