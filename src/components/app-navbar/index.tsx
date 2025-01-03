'use client';

import NextLink from 'next/link';
import React from 'react';

import AuthButton from './auth-button';
import { ThemeSwitcher } from './theme-switcher';

import {
  Link,
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenu,
  NavbarMenuItem,
  NavbarMenuToggle,
} from '@nextui-org/react';
import { IconPackage } from '@tabler/icons-react';
import { useSession } from 'next-auth/react';

export default function AppNavbar() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const { status } = useSession();

  const menuItems = [
    {
      label: 'Home',
      href: '/',
    },
  ];

  if (status === 'authenticated') {
    menuItems.push(
      {
        label: 'Profile',
        href: '/profile',
      },
      {
        label: 'Guestbook',
        href: '/guestbook',
      }
    );
  }

  return (
    <Navbar onMenuOpenChange={setIsMenuOpen}>
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
          className="sm:hidden"
        />
        <NextLink href="/">
          <NavbarBrand className="flex items-center gap-2">
            <IconPackage />
            <p className="font-bold text-inherit">Next.js Starter</p>
          </NavbarBrand>
        </NextLink>
      </NavbarContent>

      <NavbarContent className="hidden gap-4 sm:flex" justify="center">
        {menuItems.map((item) => (
          <NavbarItem key={item.href}>
            <Link as={NextLink} color="foreground" href={item.href}>
              {item.label}
            </Link>
          </NavbarItem>
        ))}
        <NavbarItem>
          <ThemeSwitcher />
        </NavbarItem>
        <NavbarItem>
          <AuthButton minimal={false} />
        </NavbarItem>
      </NavbarContent>
      <NavbarMenu>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item.label}-${index}`}>
            <Link as={NextLink} className="w-full" href={item.href} size="lg">
              {item.label}
            </Link>
          </NavbarMenuItem>
        ))}
        <NavbarMenuItem>
          <ThemeSwitcher showLabel />
        </NavbarMenuItem>
        <NavbarMenuItem>
          <AuthButton />
        </NavbarMenuItem>
      </NavbarMenu>
    </Navbar>
  );
}
