"use client";

import { useEffect } from "react";

import { Text, Heading, Stack, Box } from "@thugga/ui";
import Head from "./head";

export default function Error({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <Box paddingY="2000">
      <Stack align="flex-start" space="1200">
        <Heading size="h1" mono>
          404 - Idea not found
        </Heading>
        {/* <Separator size="2" css={{ marginTop: "$5", marginBottom: "$5" }} /> */}
        <Stack>
          <Heading size="h2" mono>
            Every doctor who deserves to be replaced by a computer ought to be
            replaced by a computer.
          </Heading>
          <Heading size="h3" mono color="slate11">
            Dr. Warner Slack
          </Heading>
        </Stack>
      </Stack>
    </Box>
  );
}
