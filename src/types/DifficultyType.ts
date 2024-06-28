import { ChordType } from './ChordType';

export enum DifficultyLevel {
  EASY = 'easy',
  HARD = 'hard',
}

export const easyChordTypes = [ChordType.MAJOR, ChordType.MINOR];

export const hardChordTypes = [
  ChordType.MAJOR_SEVENTH,
  ChordType.MINOR_SEVENTH,
  ChordType.DOMINANT_SEVENTH,
  ChordType.MAJOR_NINTH,
  ChordType.MINOR_NINTH,
  ChordType.DOMINANT_NINTH,
  ChordType.DIMINISHED,
  ChordType.HALF_DIMINISHED,
];
