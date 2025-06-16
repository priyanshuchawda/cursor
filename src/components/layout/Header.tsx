
import TerminalHeader from '@/components/TerminalHeader';
import HomeButton from '@/components/ui/HomeButton';

interface HeaderProps {
  glitchActive: boolean;
}

const Header = ({ glitchActive }: HeaderProps) => {
  return (
    <div className="flex justify-between items-start mb-8">
      <div className="flex-1">
        <TerminalHeader glitchActive={glitchActive} />
      </div>
      <div className="ml-6">
        <HomeButton />
      </div>
    </div>
  );
};

export default Header;
