'use client';

import { CgPiano } from 'react-icons/cg';
import { useHeaderController } from './useHeaderController';
import { FaGuitar } from 'react-icons/fa';

interface HeaderProps {}

const Header: React.FC<HeaderProps> = ({}) => {
  const { instrument, toggleInstrument } = useHeaderController();

  return (
    <nav className="w-full uppercase text-primary font-bold text-3xl md:text-7xl flex justify-around items-center h-32 md:h-40">
      <div className="flex gap-1.5 md:gap-4 items-center">
        {instrument === 'piano' ? (
          <CgPiano
            className="text-2xl md:text-4xl cursor-pointer hover:scale-110 transition-all duration-300"
            onClick={toggleInstrument}
          />
        ) : (
          <FaGuitar
            className="text-2xl md:text-4xl cursor-pointer hover:scale-110 transition-all duration-300"
            onClick={toggleInstrument}
          />
        )}
      </div>
      <h1>CHORD.IO</h1>
      <div className="flex gap-1.5 md:gap-4 items-center"></div>
    </nav>
  );
};

export default Header;
