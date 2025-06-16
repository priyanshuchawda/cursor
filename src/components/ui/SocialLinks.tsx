
import { Github, Linkedin, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';

const SocialLinks = () => {
  return (
    <div className="flex gap-3">
      <Button
        size="sm"
        variant="outline"
        onClick={() => window.open('https://github.com/priyanshuchawda', '_blank')}
        className="border-gray-600 hover:border-cyan-400 hover:bg-cyan-400/10 transition-all duration-300"
      >
        <Github className="w-4 h-4 mr-2" />
        GitHub
        <ExternalLink className="w-3 h-3 ml-1" />
      </Button>
      
      <Button
        size="sm"
        variant="outline"
        onClick={() => window.open('https://linkedin.com/in/priyanshuchawda', '_blank')}
        className="border-gray-600 hover:border-blue-400 hover:bg-blue-400/10 transition-all duration-300"
      >
        <Linkedin className="w-4 h-4 mr-2" />
        LinkedIn
        <ExternalLink className="w-3 h-3 ml-1" />
      </Button>
    </div>
  );
};

export default SocialLinks;
