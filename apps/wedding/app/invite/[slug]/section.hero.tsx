import { Heading, Section, Box } from "@thugga/ui";

export default function HeroSection() {
  return (
    <Box css={{ mb: "$2" }}>
      <Section size="2">
        <Heading as="h1" size="4" serif>
          Melek Somai. <br /> Imen Ben Abid.
        </Heading>
        <Box>
          <Heading as="h2" size="4" mono>
            Wedding.
          </Heading>
        </Box>
      </Section>
    </Box>
  );
}
