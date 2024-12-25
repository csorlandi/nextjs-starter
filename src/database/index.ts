import { env } from '@/lib/env/server';

import { drizzle } from 'drizzle-orm/node-postgres';

const db = drizzle(env.DATABASE_URL!);

export default db;
