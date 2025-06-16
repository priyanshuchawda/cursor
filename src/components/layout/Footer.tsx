
import SocialLinks from '@/components/ui/SocialLinks';

const Footer = () => {
  return (
    <div className="text-center mt-12 space-y-6">
      {/* Credits */}
      <div className="p-6 border border-gray-800 rounded-lg bg-gray-900/20">
        <p className="text-gray-500 font-mono text-sm mb-2">
          {'>'} Built with React.TypeScript + Pure.CSS.Magic + Quantum.Entanglement
        </p>
        <p className="text-gray-600 font-mono text-xs mb-4">
          Warning: May cause excessive cursor addiction and productivity loss
        </p>
      </div>

      {/* Social Links */}
      <div className="flex justify-center items-center gap-4 p-4 border border-cyan-500/20 rounded-lg bg-cyan-500/5">
        <span className="text-cyan-400 font-mono text-sm">CONNECT_WITH_CREATOR:</span>
        <SocialLinks />
      </div>

      {/* Copyright */}
      <div className="text-gray-600 font-mono text-xs">
        © 2024 Priyanshu Chawda • PriyanshuTech Labs • All experiments contained
      </div>
    </div>
  );
};

export default Footer;
