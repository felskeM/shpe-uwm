import { NextResponse } from 'next/server';
import { getSessionUser } from '@/lib/session';

export async function GET() {
  const user = await getSessionUser();
  if (!user) return new NextResponse(null, { status: 401 });
  const { id, name, email, role } = user;
  return NextResponse.json({ id, name, email, role });
}
