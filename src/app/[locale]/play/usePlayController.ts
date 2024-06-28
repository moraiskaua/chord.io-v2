import { chordService } from '@/services/chordService';

export const usePlayController = async (difficulty = 'easy') => {
  const chord = await chordService.get(difficulty);

  return { chord };
};
