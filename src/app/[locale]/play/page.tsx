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
      <div className="flex flex-col gap-3 text-white bg-tertiary p-3">
        <span>Nome do acorde: {chord.name}</span>

        <span>Notas:</span>
        <ul>
          {chord.notes.map((note: string) => (
            <li key={note}>[{note}]</li>
          ))}
        </ul>
      </div>

      <AudioPlayer chord={chord} />
    </div>
  );
};

export default Play;
