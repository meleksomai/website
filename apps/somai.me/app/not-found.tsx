import { useEffect } from "react";

import { Text, Heading, Stack } from "@thugga/ui";

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
    <Stack>
      <Heading as="h1" mono>
        404 - Idea is not found
      </Heading>
      {/* <Separator size="2" css={{ marginTop: "$5", marginBottom: "$5" }} /> */}
      <Text>
        Every doctor who deserves to be replace by a computer ought to be
        replaced by a computer.
      </Text>
    </Stack>
  );
}
