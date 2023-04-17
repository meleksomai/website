import { Heading, Section, Box, Text } from "@thugga/ui";

import ShareCalendar from "./shareCalendar";

import { NextLink } from "../../../components";
import CountdownTimer from "../../countdown";

const ENGAGEMENT_DATE = "17 June 2023 17:00:00 GMT+1";

export default function DetailsSection() {
  return (
    <Box>
      <Section size="2">
        <Heading size="2" as="p" serif>
          Dar Zarrouk
        </Heading>
        <Heading size="1" as="p" css={{ color: "$slate10", pb: "$2" }} serif>
          Sidi Bou Said. Tunis. Tunisia.
        </Heading>
        <NextLink href="https://goo.gl/maps/ZtEuUeZo7RwNADeG7">
          <Text>Google Maps</Text>
        </NextLink>
      </Section>
      <Section size="2">
        <Heading size="2" as="p" serif>
          Saturday. 17th June 2023. 5pm.
        </Heading>
        <CountdownTimer targetDateTime={ENGAGEMENT_DATE} />
        {/* <Box css={{ mt: "$2" }}>
          <ShareCalendar />
        </Box> */}
      </Section>
    </Box>
  );
}
