import * as React from "react";

import { Layout, Text, Heading, Separator } from "@thugga/ui";

export default function Web() {
  return (
    <Layout
      css={{
        // TODO: perhaps move this to a variants
        backgroundColor: "$mauve3",
        padding: "$4",
      }}
    >
      <Heading size="3">Melek Somai</Heading>
      <Text as="h2" size="1">
        Assistant Professor of Medicine at the Medical College of Wisconsin
      </Text>
      <Text as="h2" size="1">
        Chief Technology Officer at Inception Health
      </Text>
      <Separator
        size="2"
        css={{
          marginTop: "$4",
          marginBottom: "$4",
        }}
      />
      <Text as="h2" size="1">
        Helping Healthcare organizations build technology-driven engineering
        team at scale.
      </Text>
    </Layout>
  );
}
