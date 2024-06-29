'use client';

import { Chord } from '@/entities/Chord';
import Button from '@/components/Button';
import { FaPlay } from 'react-icons/fa';
import { FaArrowTurnDown } from 'react-icons/fa6';
import { GiMusicalNotes } from 'react-icons/gi';
import { useAudioPlayerController } from './useAudioPlayerController';
import Loading from '@/components/loading';

interface AudioPlayerProps {
  chord: Chord;
}

const AudioPlayer: React.FC<AudioPlayerProps> = ({ chord }) => {
  const { isLoading, handlePlayChord, handlePlayChordArpeggiated } =
    useAudioPlayerController(chord);

  return (
    <>
      {isLoading && <Loading />}

      <div className="flex justify-center items-center gap-3">
        <Button disabled={isLoading} onClick={handlePlayChord}>
          <FaPlay className="size-16" />
        </Button>
        <Button disabled={isLoading} onClick={handlePlayChordArpeggiated}>
          <GiMusicalNotes className="size-16" />
        </Button>
        <Button disabled={isLoading} variant="secondary">
          Enter
          <FaArrowTurnDown className="rotate-90" />
        </Button>
      </div>
    </>
  );
};

export default AudioPlayer;
