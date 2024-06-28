import { getNewChord } from '@/helpers/getNewChord';
import { DifficultyLevel } from '@/types/DifficultyType';
import { NextResponse } from 'next/server';

export const GET = () => {
  return NextResponse.json(getNewChord('hard' as DifficultyLevel), {
    status: 200,
  });
};
