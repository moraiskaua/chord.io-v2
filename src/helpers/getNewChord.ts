import { otherNotes, tonicNotes } from '@/constants/notes';

export const getNewChord = () => {
  const chordNotes = [];
  const chordType = Math.random() < 0.5 ? '' : 'm';
  const tonicIndex = Math.floor(Math.random() * tonicNotes.length);

  const tonicNote = otherNotes[tonicIndex].replace('4', ''); // Tônica
  const thirdNoteIndex = (tonicIndex + (chordType === 'm' ? 3 : 4)) % 12; // Terça maior/menor
  const fifthNoteIndex = (tonicIndex + 7) % 12; // Quinta justa/menor

  chordNotes.push(otherNotes[tonicIndex]);
  chordNotes.push(otherNotes[thirdNoteIndex]);
  chordNotes.push(otherNotes[fifthNoteIndex]);

  return { name: tonicNote, notes: chordNotes };
};
