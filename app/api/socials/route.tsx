import { socials } from '../data/socials';
import { NextResponse } from 'next/server';

export const GET = async () => {
   return NextResponse.json(socials, {status: 200});
}
