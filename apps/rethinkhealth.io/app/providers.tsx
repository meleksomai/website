"use client";

import { UserProvider } from "@auth0/nextjs-auth0/client";
import { ThemeProvider } from "next-themes";
import { useServerInsertedHTML } from "next/navigation";

import { darkTheme, getCssText } from "../styles/globalStyles";

export function Providers({ children }: { children: React.ReactNode }) {
  useServerInsertedHTML(() => {
    return (
      <style id="stitches" dangerouslySetInnerHTML={{ __html: getCssText() }} />
    );
  });

  return (
    <UserProvider>
      <ThemeProvider
        // disableTransitionOnChange
        attribute="class"
        value={{ light: "light-theme", dark: darkTheme.className }}
        defaultTheme="system"
      >
        {children}
      </ThemeProvider>
    </UserProvider>
  );
}
