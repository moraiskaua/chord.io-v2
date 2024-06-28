import { getNewChord } from '@/helpers/getNewChord';
import { NextResponse } from 'next/server';

export const GET = () => {
  return NextResponse.json(getNewChord(), { status: 200 });
};
