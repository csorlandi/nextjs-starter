import { CircularProgress } from '@nextui-org/react';

export default function ProfileLoading() {
  return (
    <CircularProgress
      aria-label="Loading profile"
      className="mx-auto mt-8"
      size="lg"
    />
  );
}
