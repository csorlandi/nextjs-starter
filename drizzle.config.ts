import { env } from '@/lib/env/server';

import { defineConfig } from 'drizzle-kit';

export default defineConfig({
  out: './src/database/migrations',
  schema: './src/database/schema/index.ts',
  dialect: 'postgresql',
  dbCredentials: {
    url: env.DATABASE_URL,
  },
});
