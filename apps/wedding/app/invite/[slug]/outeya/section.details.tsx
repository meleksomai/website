import { Heading, Section, Box, Text } from "@thugga/ui";

import { NextLink } from "../../../../components";
import CountdownTimer from "../../../countdown";

const ENGAGEMENT_DATE = "17 June 2023 17:00:00 GMT+1";

export default function DetailsSection() {
  return (
    <Box>
      <Section size="2">
        <Heading size="2" as="p" serif>
          Imen Parents House
        </Heading>
        <Heading size="1" as="p" css={{ color: "$slate10", pb: "$2" }} serif>
          23 Rue Des Sciences. Ennasr 2. Ariana 2037, Tunisia.
        </Heading>
        <NextLink href="https://goo.gl/maps/bXXAQYffWgaojHui7">
          <Text>Google Maps</Text>
        </NextLink>
      </Section>
      <Section size="2">
        <Heading size="2" as="p" serif>
          Thursday. 15th June 2023. 20pm.
        </Heading>
        <CountdownTimer targetDateTime={ENGAGEMENT_DATE} />
      </Section>
    </Box>
  );
}
