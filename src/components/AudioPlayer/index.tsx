'use client';

import { Chord } from '@/entities/Chord';
import Button from '@/components/Button';
import { FaPlay } from 'react-icons/fa';
import { FaArrowTurnDown } from 'react-icons/fa6';
import { GiMusicalNotes } from 'react-icons/gi';
import { useAudioPlayerController } from './useAudioPlayerController';

interface AudioPlayerProps {
  chord: Chord;
}

const AudioPlayer: React.FC<AudioPlayerProps> = ({ chord }) => {
  const { isLoading, handlePlayChord, handlePlayChordArpeggiated } =
    useAudioPlayerController();

  return (
    <div className="h-screen flex justify-center items-center gap-3">
      <span className="text-3xl text-white">{chord.name}</span>
      <Button disabled={isLoading} onClick={() => handlePlayChord(chord.notes)}>
        <FaPlay className="size-16" />
      </Button>
      <Button
        disabled={isLoading}
        onClick={() => handlePlayChordArpeggiated(chord.notes)}
      >
        <GiMusicalNotes className="size-16" />
      </Button>
      <Button disabled={isLoading} variant="secondary">
        teste
        <FaArrowTurnDown className="rotate-90" />
      </Button>
    </div>
  );
};

export default AudioPlayer;
