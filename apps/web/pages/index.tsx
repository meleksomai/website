import * as React from "react";

import { Layout, Paragraph, Heading, Avatar, Section } from "@thugga/ui";

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
        <Avatar src="/images/profile.jpeg" alt="" fallback="MS" size="3" />
        <Heading size="4" css={{ paddingTop: "$3" }}>
          Melek Somai
        </Heading>
        <Heading as="h2" variant="contrast" size="1" css={{ paddingTop: "$3" }}>
          Assistant Professor of Medicine at the Medical College of Wisconsin
        </Heading>
        <Heading as="h2" variant="contrast" css={{ paddingTop: "$1" }}>
          Chief Technology Officer at Inception Health
        </Heading>
        <Section size="2">
          <Paragraph>
            Helping Healthcare organizations build technology-driven engineering
            team at scale.
          </Paragraph>
        </Section>
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
