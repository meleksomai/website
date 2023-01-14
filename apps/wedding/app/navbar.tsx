"use client";

import React from "react";

import { Flex } from "@thugga/ui";

import { NextLink, ThemeToggle } from "../components";

const NavBar = () => {
  return (
    <Flex css={{ pt: "$6" }} justify="between">
      <Flex align="center" gap="4">
        {/* <NextLink variant="simple" href="/">
          Home
        </NextLink> */}
      </Flex>
      <Flex align="center">
        <ThemeToggle />
      </Flex>
    </Flex>
  );
};

NavBar.displayName = "NavBar";

export default NavBar;