import { Heading, Section, Box } from "@thugga/ui";

const ENGAGEMENT_DATE = "17 June 2023 17:00:00 GMT+1";

export default function HeroSection() {
  return (
    <Box css={{ mb: "$2" }}>
      <Section size="2">
        <Heading as="h1" size="3" serif>
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
