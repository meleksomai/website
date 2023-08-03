"use client";

import React from "react";

import { Stack, Link } from "@thugga/ui";

const NavBar = () => {
  return (
    <Stack align="center" justify="flex-start" direction="row">
      <Link href="/">Home</Link>
      <Link href="/essays">Essays</Link>
      <Link href="/papers">Papers</Link>
      <Link href="/about">About</Link>
    </Stack>
  );
};

NavBar.displayName = "NavBar";

export default NavBar;
