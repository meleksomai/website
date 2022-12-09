"use client";

import { SunIcon, MoonIcon } from "@radix-ui/react-icons";
import { useTheme } from "next-themes";
import React from "react";

import { IconButton } from "@thugga/ui";

export const ThemeToggle = () => {
  const { theme, setTheme } = useTheme();

  return (
    <IconButton
      variant="highlighted"
      onClick={() => (theme === "dark" ? setTheme("light") : setTheme("dark"))}
      aria-label="toggle a light and dark color scheme"
    >
      {theme === "dark" ? <SunIcon /> : <MoonIcon />}
    </IconButton>
  );
};
