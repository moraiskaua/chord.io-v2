import { notesPath } from '@/constants/notes';
import { useEffect, useState } from 'react';
import * as Tone from 'tone';

export const useAudioPlayerController = () => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [sampler, setSampler] = useState<Tone.Sampler | null>(null);

  useEffect(() => {
    const initializeSampler = () => {
      const ctx = Tone.getContext();
      if (ctx.state !== 'running') {
        Tone.start();
      }

      const notes = Object.fromEntries(
        Object.entries(notesPath).map(([name, { path }]) => [name, path]),
      );

      const sampler = new Tone.Sampler({
        urls: notes,
        baseUrl: '/assets/piano/',
        onload: () => setIsLoading(false),
      }).toDestination();

      setSampler(sampler);
    };

    initializeSampler();

    return () => {
      if (sampler) {
        sampler.dispose();
      }
    };
  }, []);

  const handlePlayChord = (notes: string[]): void => {
    if (sampler) {
      notes.forEach((note, index) => {
        setTimeout(() => {
          sampler.triggerAttackRelease(note, 1);
        }, index * 40);
      });
    }
  };

  const handlePlayChordArpeggiated = (notes: string[]): void => {
    if (sampler) {
      notes.forEach((note, index) => {
        setTimeout(() => {
          sampler.triggerAttackRelease(note, 1);
        }, index * 400);
      });
    }
  };

  return { isLoading, handlePlayChord, handlePlayChordArpeggiated };
};
