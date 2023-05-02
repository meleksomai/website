"use client";

import React from "react";

import { Flex } from "@thugga/ui";

import { NextLink, ThemeToggle } from "../components";

export interface NavBarProps {
  inviteId: string;
}

const NavBar = ({ inviteId }: NavBarProps) => {
  return (
    <Flex css={{ pt: "$6" }} justify="between">
      <Flex align="center" gap="4">
        {inviteId && (
          <>
            <NextLink variant="simple" href={`/invite/${inviteId}`}>
              Home
            </NextLink>
            <NextLink variant="simple" href={`/invite/${inviteId}/wtya`}>
              Traditional
            </NextLink>
          </>
        )}
      </Flex>
      <Flex align="center">
        <ThemeToggle />
      </Flex>
    </Flex>
  );
};

NavBar.displayName = "NavBar";

export default NavBar;
