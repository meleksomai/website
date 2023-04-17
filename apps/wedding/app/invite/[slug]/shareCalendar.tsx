"use client";
// import { ExternalLinkIcon } from "@radix-ui/react-icons";

import { Text, Box } from "@thugga/ui";

import { NextLink } from "../../../components";

export default function ShareCalendar() {
  return (
    <NextLink href="https://goo.gl/maps/ZtEuUeZo7RwNADeG7">
      <Text inline>Add to Calendar {"  "}</Text>
      {/* <ExternalLinkIcon
        style={{ verticalAlign: "middle", display: "inline-block" }}
      /> */}
    </NextLink>
  );
}
