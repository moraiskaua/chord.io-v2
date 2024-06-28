import { tonicNotes, otherNotes } from '@/constants/notes';
import { chordIntervals } from '@/types/ChordType';
import {
  DifficultyLevel,
  easyChordTypes,
  hardChordTypes,
} from '@/types/DifficultyType';

export const getNewChord = (difficulty: DifficultyLevel) => {
  const chordTypes =
    difficulty === DifficultyLevel.EASY ? easyChordTypes : hardChordTypes;
  const chordType = chordTypes[Math.floor(Math.random() * chordTypes.length)];
  const tonicIndex = Math.floor(Math.random() * tonicNotes.length);
  const tonicNote = tonicNotes[tonicIndex].replace('4', '');

  const intervals = chordIntervals[chordType];

  if (!intervals) {
    throw new Error(`Intervals for chord type ${chordType} are undefined`);
  }

  const chordNotes = intervals.map(
    interval => otherNotes[(tonicIndex + interval) % otherNotes.length],
  );

  return {
    name: `${tonicNote}${chordType}`,
    notes: chordNotes,
  };
};
