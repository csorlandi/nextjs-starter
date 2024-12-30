import { redirect } from 'next/navigation';

import options from '@/config/auth';

import { getServerSession } from 'next-auth';

export default async function requireAuth() {
  const session = await getServerSession(options);

  if (!session?.user) {
    redirect('/');
  }
}
