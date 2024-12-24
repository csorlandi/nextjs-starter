import options from '@/config/auth';

import { Card, CardBody, User } from '@nextui-org/react';
import { getServerSession } from 'next-auth';

export default async function Profile() {
  const session = await getServerSession(options);

  return (
    <Card className="mx-auto mt-8 max-w-md">
      <CardBody>
        <User
          avatarProps={{
            showFallback: !session?.user?.image,
            src: session?.user?.image || '',
          }}
          description={session?.user?.email}
          name={session?.user?.name}
        />
      </CardBody>
    </Card>
  );
}
