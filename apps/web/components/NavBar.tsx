import React from "react";

import { Flex, Section } from "@thugga/ui";

import { NextLink } from "./NextLink";
import { ThemeToggle } from "./ThemeToggle";

export const NavBar = () => {
  return (
    <Flex css={{ py: "$6" }} justify="between">
      <Flex>
        <NextLink css={{ mr: "$5" }} variant="simple" href="/">
          Home
        </NextLink>
        <NextLink css={{ mr: "$5" }} variant="simple" href="/posts">
          Posts
        </NextLink>
        <NextLink css={{ mr: "$5" }} variant="simple" href="/papers">
          Publications
        </NextLink>
      </Flex>
      <Flex align="end">
        <ThemeToggle />
      </Flex>
    </Flex>
  );
};

NavBar.displayName = "NavBar";
