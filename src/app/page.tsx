import {
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Divider,
  Link,
} from '@nextui-org/react';

export default function Home() {
  return (
    <Card className="mx-auto mt-8 max-w-md">
      <CardHeader className="flex flex-col items-start gap-1">
        <p className="text-base">Next.js Starter</p>
        <p className="text-small text-default-500">cssorlandi.com</p>
      </CardHeader>
      <Divider />
      <CardBody>
        <p>A simple Next.js starter for your next projects.</p>
      </CardBody>
      <Divider />
      <CardFooter>
        <Link
          isExternal
          showAnchorIcon
          href="https://github.com/csorlandi/nextjs-starter"
        >
          Visit source code on GitHub.
        </Link>
      </CardFooter>
    </Card>
  );
}
