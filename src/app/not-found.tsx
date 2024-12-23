import { Card, CardBody } from '@nextui-org/react';
import { IconFileUnknown } from '@tabler/icons-react';

export default function NotFound() {
  return (
    <Card className="mx-auto mt-8 max-w-md">
      <CardBody>
        <p className="flex items-center justify-center gap-2 text-xl">
          <IconFileUnknown /> This page cannot be found
        </p>
      </CardBody>
    </Card>
  );
}
