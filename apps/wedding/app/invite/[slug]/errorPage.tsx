import { Box, Heading, Separator, Paragraph, Section } from "@thugga/ui";

export default function ErrorPage() {
  return (
    <Box>
      <Section size="3">
        <Heading as="h1" size="3" serif>
          The invitation code is invalid.
        </Heading>
        <Separator size="2" />
        <Paragraph css={{ maxWidth: "400px" }} serif>
          If you think this is a mistake, please contact us.
        </Paragraph>
      </Section>
    </Box>
  );
}
