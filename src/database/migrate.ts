import config from '@/../drizzle.config';
import db from '@/database';

import { migrate } from 'drizzle-orm/node-postgres/migrator';

await migrate(db, { migrationsFolder: config.out! });
