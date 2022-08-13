import React from "react";

import { Flex, Section } from "@thugga/ui";

import { NextLink } from "./NextLink";
import { ThemeToggle } from "./ThemeToggle";

export const NavBar = () => {
  return (
    <Flex css={{ py: "$6" }} justify="between">
      <Flex align="center" gap="4">
        <NextLink variant="simple" href="/">
          Home
        </NextLink>
        <NextLink variant="simple" href="/posts">
          Posts
        </NextLink>
        <NextLink variant="simple" href="/papers">
          Publications
        </NextLink>
      </Flex>
      <Flex align="center">
        <ThemeToggle />
      </Flex>
    </Flex>
  );
};

NavBar.displayName = "NavBar";
