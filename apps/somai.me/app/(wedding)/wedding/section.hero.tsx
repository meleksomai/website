import { PropsWithChildren } from "react";

import { Heading, Section, Box } from "@thugga/ui";
import CountdownTimer from "./countdown";

const ENGAGEMENT_DATE = "07 Jan 2023 17:00:00 GMT+1";

export default async function HeroSection({
  children,
}: PropsWithChildren<undefined>) {
  return (
    <>
      <Section size="2">
        <Heading as="h1" size="3">
          Melek Somai. Imen Ben Abid.{" "}
        </Heading>
        <Box>
          <Heading as="h2" size="3" css={{ color: "$slate10" }} mono>
            Engagement Dinner.
          </Heading>
        </Box>
      </Section>
      <Section size="2">
        <Heading inline size="2" as="p">
          Dar El Jeld.{"  "}
        </Heading>
        <Heading inline size="1" as="p" css={{ color: "$slate10" }}>
          5-10 Rue Dar El Jeld Street 1005. Tunis. Tunisia.
        </Heading>
      </Section>
      <Section size="2">
        <Heading size="2" as="p">
          Saturday. 7th January 2023. 5pm.
        </Heading>
        <CountdownTimer targetDateTime={ENGAGEMENT_DATE} />
      </Section>
    </>
  );
}
