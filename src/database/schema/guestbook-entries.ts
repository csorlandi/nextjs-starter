import users from './users';

import { pgTable, text, timestamp, uuid } from 'drizzle-orm/pg-core';
import { createInsertSchema } from 'drizzle-zod';

const guestbookEntries = pgTable('guestbook_entries', {
  userId: uuid('userId')
    .notNull()
    .references(() => users.id, { onDelete: 'cascade' }),
  message: text('message').notNull(),
  createdAt: timestamp('created_at', { mode: 'date' }).notNull().defaultNow(),
});

export const InsertGuestbookEntrySchema = createInsertSchema(
  guestbookEntries
).omit({
  userId: true,
  createdAt: true,
});

export default guestbookEntries;
