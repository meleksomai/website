"use client";

import { ThemeProvider as NextThemeProvider } from "next-themes";
import { useServerInsertedHTML } from "next/navigation";

import { darkTheme, getCssText } from "../styles/globalStyles";

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  useServerInsertedHTML(() => {
    return (
      <style id="stitches" dangerouslySetInnerHTML={{ __html: getCssText() }} />
    );
  });

  return (
    <NextThemeProvider
      disableTransitionOnChange
      attribute="class"
      value={{ light: "light-theme", dark: darkTheme.className }}
      defaultTheme="system"
    >
      {children}
    </NextThemeProvider>
  );
}
