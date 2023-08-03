"use client";

import { useTheme } from "next-themes";
import React from "react";
import { RxMoon, RxSun } from "react-icons/rx";

import { Stack, Link, Button, Box } from "@thugga/ui";

const NavBar = () => {
  const { theme, setTheme } = useTheme();

  const onToggle = () => {
    // Implement dark mode
    if (theme === "dark") {
      setTheme("light");
    } else {
      setTheme("dark");
    }
  };

  return (
    <Stack direction="row" justify="space-between">
      <Stack align="center" justify="flex-start" direction="row">
        <Link href="/">Home</Link>
        <Link href="/essays">Essays</Link>
        <Link href="/papers">Papers</Link>
        <Link href="/about">About</Link>
      </Stack>
      <Button
        onClick={onToggle}
        size="small"
        prefix={theme === "dark" ? <RxSun /> : <RxMoon />}
      />
    </Stack>
  );
};

NavBar.displayName = "NavBar";

export default NavBar;
