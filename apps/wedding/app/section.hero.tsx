import { Heading, Section, Box } from "@thugga/ui";

import CountdownTimer from "./countdown";

const ENGAGEMENT_DATE = "17 June 2023 17:00:00 GMT+1";

export default function HeroSection() {
  return (
    <Box css={{ mb: "$8" }}>
      <Section size="2">
        <Heading as="h1" size="3" serif>
          Melek Somai. <br /> Imen Ben Abid.
        </Heading>
        <Box>
          <Heading as="h2" size="3" mono>
            Wedding.
          </Heading>
        </Box>
      </Section>
      {/* <Section size="2">
        <Heading size="2" as="p">
          Dar Zarrouk
        </Heading>
        <Heading inline size="1" as="p" css={{ color: "$slate10" }}>
          Sidi Bou Said. Tunis. Tunisia.
        </Heading>
      </Section> */}
      <Section size="2">
        <Heading size="2" as="p" serif>
          Saturday. 17th June 2023. 5pm.
        </Heading>
        <CountdownTimer targetDateTime={ENGAGEMENT_DATE} />
      </Section>
    </Box>
  );
}
