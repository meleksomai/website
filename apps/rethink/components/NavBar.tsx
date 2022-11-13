import React from "react";

import { Flex, Heading } from "@thugga/ui";

import { NextLink } from "./NextLink";
import { ThemeToggle } from "./ThemeToggle";

export const NavBar = () => {
  return (
    <Flex css={{ py: "$6" }} justify="between">
      <Flex align="center" gap="4">
        <Heading bold>Rethink Health</Heading>
      </Flex>
      <Flex align="center" gap="4">
        <NextLink variant="simple" href="/">
          Home
        </NextLink>
        <ThemeToggle />
      </Flex>
    </Flex>
  );
};

NavBar.displayName = "NavBar";
