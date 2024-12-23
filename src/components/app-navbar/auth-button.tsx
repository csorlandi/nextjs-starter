'use client';

import {
  Avatar,
  Button,
  CircularProgress,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
} from '@nextui-org/react';
import { IconBrandGoogleFilled, IconLogout } from '@tabler/icons-react';
import { signIn, signOut, useSession } from 'next-auth/react';

export default function AuthButton({ minimal = true }: { minimal?: boolean }) {
  const { data, status } = useSession();

  if (status === 'loading') {
    return <CircularProgress />;
  }

  if (status === 'authenticated') {
    if (minimal) {
      return (
        <Button color="warning" variant="ghost" onPress={() => signOut()}>
          <IconLogout />
          Sign Out
        </Button>
      );
    }

    return (
      <Dropdown placement="bottom-end">
        <DropdownTrigger>
          <Avatar
            isBordered
            as="button"
            className="transition-transform"
            showFallback={!data.user?.image}
            size="sm"
            src={data.user?.image || ''}
          />
        </DropdownTrigger>
        <DropdownMenu aria-label="Profile Actions" variant="flat">
          <DropdownItem
            key="profile"
            isReadOnly
            showDivider
            className="h-14 gap-2"
          >
            <p className="font-semibold">Signed in as</p>
            <p className="font-semibold">{data.user?.email}</p>
          </DropdownItem>
          <DropdownItem
            key="sign-out"
            color="danger"
            startContent={<IconLogout />}
            onPress={() => signOut()}
          >
            Sign Out
          </DropdownItem>
        </DropdownMenu>
      </Dropdown>
    );
  }

  return (
    <Button color="primary" variant="ghost" onPress={() => signIn('google')}>
      <IconBrandGoogleFilled size={18} />
      Sign In
    </Button>
  );
}
