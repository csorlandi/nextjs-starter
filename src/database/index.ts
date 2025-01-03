import { env } from '@/lib/env/server';

import * as schema from './schema';

import { drizzle } from 'drizzle-orm/node-postgres';

const db = drizzle(env.DATABASE_URL!, {
  schema,
});

export default db;
