"use client";

import { useEffect } from "react";

import { Paragraph, Heading, Section, Separator } from "@thugga/ui";

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
    <Section size="3">
      <Heading as="h1" size="3" mono>
        404 - Idea is not found
      </Heading>
      <Separator size="2" css={{ marginTop: "$5", marginBottom: "$5" }} />
      <Paragraph>
        Every doctor who deserves to be replace by a computer ought to be
        replaced by a computer.
      </Paragraph>
    </Section>
  );
}
