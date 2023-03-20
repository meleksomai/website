import React from "react";

import { Flex } from "@thugga/ui";

import { Logo } from "../components/Logo";
import { ThemeToggle } from "../components/ThemeToggle";

export default async function NavBar() {
  // const session = await unstable_getServerSession();

  return (
    <Flex justify="between">
      <Flex css={{ my: "$4" }}>
        <Logo width="200px" height="100%" />
      </Flex>
      <Flex align="center" gap="4">
        {/* <NextLink variant="simple" href="/">
          Home
        </NextLink> */}

        {/* {session?.user && <GoToDashboard />}
        {!session?.user && <SignIn />} */}

        <ThemeToggle />
      </Flex>
    </Flex>
  );
}

NavBar.displayName = "NavBar";