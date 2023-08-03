"use client";

import { ThemeProvider as NextThemeProvider } from "next-themes";

import { lightThemeClass, darkThemeClass, Tooltip } from "@thugga/ui";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <NextThemeProvider
      disableTransitionOnChange
      attribute="class"
      value={{ light: lightThemeClass, dark: darkThemeClass }}
      defaultTheme="dark"
    >
      <Tooltip.Provider>{children}</Tooltip.Provider>
    </NextThemeProvider>
  );
}
