
import { Home, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';

const HomeButton = () => {
  return (
    <Button
      onClick={() => window.open('https://priyanshutech.xyz', '_blank')}
      className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-400 hover:to-blue-400 text-black font-mono font-bold shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 transition-all duration-300 hover:scale-105"
    >
      <Home className="w-4 h-4 mr-2" />
      HOME
      <ExternalLink className="w-3 h-3 ml-1" />
    </Button>
  );
};

export default HomeButton;
