import Button from '@/components/Button';
import { FaPlay } from 'react-icons/fa';
import { FaArrowTurnDown } from 'react-icons/fa6';
import { GiMusicalNotes } from 'react-icons/gi';
import { usePlayController } from './usePlayController';
import { chordService } from '@/services/chordService';
import { useParams } from 'next/navigation';

interface PlayProps {
  searchParams: {
    difficulty: string;
  };
}

const Play: React.FC<PlayProps> = async ({ searchParams }) => {
  const { chord } = await usePlayController(searchParams.difficulty);

  console.log(chord);

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
