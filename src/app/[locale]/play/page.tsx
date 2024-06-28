import Button from '@/components/Button';
import { FaPlay } from 'react-icons/fa';
import { FaArrowTurnDown } from 'react-icons/fa6';
import { GiMusicalNotes } from 'react-icons/gi';
import { usePlayController } from './usePlayController';

interface PlayProps {}

const Play: React.FC<PlayProps> = ({}) => {
  const {} = usePlayController();

  return (
    <div className="h-screen flex justify-center items-center gap-3">
      <Button>
        <FaPlay className="size-16" />
      </Button>
      <Button>
        <GiMusicalNotes className="size-16" />
      </Button>
      <Button variant="secondary">
        teste
        <FaArrowTurnDown className="rotate-90" />
      </Button>
    </div>
  );
};

export default Play;
