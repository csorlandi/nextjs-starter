'use client';

import { useEffect, useState } from 'react';

import useSystemTheme from '@/hooks/use-system-theme';

import { Switch } from '@nextui-org/switch';
import { IconMoon, IconSun } from '@tabler/icons-react';

export function ThemeSwitcher({ showLabel = false }: { showLabel?: boolean }) {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useSystemTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <Switch
      defaultSelected
      color="primary"
      endContent={<IconMoon />}
      isSelected={theme === 'light'}
      size="md"
      startContent={<IconSun />}
      onValueChange={() =>
        theme === 'light' ? setTheme('dark') : setTheme('light')
      }
    >
      {showLabel && 'Theme'}
    </Switch>
  );
}
