"use client";

import { ThemeSwitcher } from "@workspace/ui/blocks/theme-switcher";
import { useTheme } from "next-themes";

export default function ThemeToggle() {
  const { setTheme, theme } = useTheme();

  return (
    <ThemeSwitcher
      defaultValue={theme as "light" | "dark" | "system" | undefined}
      onChange={(t) => setTheme(t)}
    />
  );
}
