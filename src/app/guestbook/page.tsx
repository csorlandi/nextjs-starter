import db from '@/database';

import GuestbookClient from './page.client';

import { Card, CardBody } from '@nextui-org/react';

export default async function GuestBook() {
  const entries = await db.query.guestbookEntries.findMany();

  return (
    <Card className="mx-auto mt-4 max-w-lg">
      <CardBody>
        <h1 className="text-center text-5xl">Welcome to my guestbook!</h1>
        <GuestbookClient />
      </CardBody>
      <pre>{JSON.stringify(entries, null, 2)}</pre>
    </Card>
  );
}
