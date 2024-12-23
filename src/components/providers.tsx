import { NextUIProvider } from '@nextui-org/react';
import { ThemeProvider as NextThemesProvider } from 'next-themes';

export default function Providers({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <NextUIProvider className="flex size-full flex-col">
      <NextThemesProvider attribute="class">{children}</NextThemesProvider>
    </NextUIProvider>
  );
}
