export enum ChordType {
  MAJOR = '',
  MINOR = 'm',
  MAJOR_SEVENTH = 'maj7',
  MINOR_SEVENTH = 'm7',
  DOMINANT_SEVENTH = '7',
  MAJOR_NINTH = 'maj9',
  MINOR_NINTH = 'm9',
  DOMINANT_NINTH = '9',
  DIMINISHED = 'dim',
  HALF_DIMINISHED = 'm7b5',
}

export const chordIntervals = {
  [ChordType.MAJOR]: [0, 4, 7],
  [ChordType.MINOR]: [0, 3, 7],
  [ChordType.MAJOR_SEVENTH]: [0, 4, 7, 11],
  [ChordType.MINOR_SEVENTH]: [0, 3, 7, 10],
  [ChordType.DOMINANT_SEVENTH]: [0, 4, 7, 10],
  [ChordType.MAJOR_NINTH]: [0, 4, 7, 11, 14],
  [ChordType.MINOR_NINTH]: [0, 3, 7, 10, 14],
  [ChordType.DOMINANT_NINTH]: [0, 4, 7, 10, 14],
  [ChordType.DIMINISHED]: [0, 3, 6],
  [ChordType.HALF_DIMINISHED]: [0, 3, 6, 10],
};
