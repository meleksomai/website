"use client";

import React from "react";

import { Flex } from "@thugga/ui";

import { NextLink, ThemeToggle } from "../components";

const NavBar = () => {
  return (
    <Flex css={{ py: "$6" }} justify="between">
      <Flex align="center" gap="4">
        <NextLink variant="simple" href="/">
          Home
        </NextLink>
        <NextLink variant="simple" href="/essays">
          Essays
        </NextLink>
        <NextLink variant="simple" href="/papers">
          Papers
        </NextLink>
      </Flex>
      <Flex align="center">
        <ThemeToggle />
      </Flex>
    </Flex>
  );
};

NavBar.displayName = "NavBar";

export default NavBar;
