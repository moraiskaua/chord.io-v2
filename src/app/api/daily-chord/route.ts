import { getNewChord } from '@/helpers/getNewChord';
import { DifficultyLevel } from '@/types/DifficultyType';
import { NextRequest, NextResponse } from 'next/server';

export const GET = (req: NextRequest) => {
  const difficultyParam = req.nextUrl.searchParams.get('difficulty');
  const difficulty =
    difficultyParam === 'hard' ? DifficultyLevel.HARD : DifficultyLevel.EASY;
  const chord = getNewChord(difficulty);

  return NextResponse.json(chord, { status: 200 });
};
