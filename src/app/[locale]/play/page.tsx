import { usePlayController } from './usePlayController';
import AudioPlayer from '@/components/AudioPlayer';

interface PlayProps {
  searchParams: {
    difficulty: string;
  };
}

const Play: React.FC<PlayProps> = async ({ searchParams }) => {
  const { chord } = await usePlayController(searchParams.difficulty);

  return (
    <div className="h-screen flex justify-center items-center gap-3">
      <AudioPlayer chord={chord} />
    </div>
  );
};

export default Play;
