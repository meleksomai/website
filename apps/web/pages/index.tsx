import * as React from "react";

import { Layout, Text, Heading, Separator, Section } from "@thugga/ui";

export default function Web() {
  return (
    <Layout
      css={{
        // TODO: perhaps move this to a variants
        backgroundColor: "$mauve3",
        padding: "$4",
      }}
    >
      <Section size="3">
        <Heading size="4">Melek Somai</Heading>
        <Heading as="h2" variant="contrast">
          Assistant Professor of Medicine at the Medical College of Wisconsin
        </Heading>
        <Heading as="h2" variant="contrast">
          Chief Technology Officer at Inception Health
        </Heading>
        <Text variant="contrast">
          Helping Healthcare organizations build technology-driven engineering
          team at scale.
        </Text>
      </Section>
      <Section size="1">
        <Heading as="h3" size="3">
          Recent Publications
        </Heading>
      </Section>
      <Section size="1">
        <Heading as="h3" size="3">
          Recent Publications
        </Heading>
      </Section>
    </Layout>
  );
}
