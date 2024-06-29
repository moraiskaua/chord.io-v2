import { notesPath } from '@/constants/notes';
import { Chord } from '@/entities/Chord';
import { useInstrumentStore } from '@/stores/instrumentStore';
import { useEffect, useState } from 'react';
import * as Tone from 'tone';

export const useAudioPlayerController = (chord: Chord) => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [sampler, setSampler] = useState<Tone.Sampler | null>(null);
  const instrument = useInstrumentStore(state => state.instrument);

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
        baseUrl: `/assets/${instrument}/`,
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
  }, [sampler, instrument]);

  const handlePlayChord = (): void => {
    if (sampler) {
      chord.notes.forEach((note, index) => {
        setTimeout(() => {
          sampler.triggerAttackRelease(note, 1);
        }, index * 40);
      });
    }
  };

  const handlePlayChordArpeggiated = (): void => {
    if (sampler) {
      chord.notes.forEach((note, index) => {
        setTimeout(() => {
          sampler.triggerAttackRelease(note, 1);
        }, index * 400);
      });
    }
  };

  return { isLoading, handlePlayChord, handlePlayChordArpeggiated };
};
