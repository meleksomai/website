import { Heading, Box, Section, Paragraph } from "@thugga/ui";

export default function UpcomingAnnouncement() {
  return (
    <Section>
      <Section>
        <Heading size="2">Schedule</Heading>
      </Section>
      <Section>
        <Box>
          <Heading inline size="1" as="p" bold>
            🎊 Engagement Ceremony.{" "}
          </Heading>
          <Heading inline size="1" as="p" css={{ color: "$slate10" }}>
            5:30pm
          </Heading>
          <Box>
            <Paragraph>Traditional Tunisian Sdek.</Paragraph>
          </Box>
        </Box>
        {/* <Box>
          The ceremony will take place at the secondary room next to the Diwan
          dinner room.
        </Box> */}
      </Section>
      <Section>
        <Box>
          <Heading inline size="1" as="p" bold>
            🥂 Break.{" "}
          </Heading>
          <Heading inline size="1" as="p" css={{ color: "$slate10" }}>
            6:15pm
          </Heading>
          <Box>
            <Paragraph>Refreshments and drinks will be served.</Paragraph>
          </Box>
        </Box>
        {/* <Box>A short break right after the engagement ceremony.</Box> */}
      </Section>
      <Section>
        <Box>
          <Heading inline size="1" as="p" bold>
            🍽️ Dinner.{" "}
          </Heading>
          <Heading inline size="1" as="p" css={{ color: "$slate10" }}>
            6:30pm
          </Heading>
        </Box>
        <Box>
          <Paragraph variant="light">
            Note: if you have any dietary restrictions, please contact Melek
            Somai asap.
          </Paragraph>
          <Paragraph>Appetizers - Traditional Hors d'Oeuvres</Paragraph>
          <Paragraph>Entrée - Fish</Paragraph>
          <Paragraph>Break - Sorbet</Paragraph>
          <Paragraph>Entrée - Veal</Paragraph>
          <Paragraph>Dessert</Paragraph>
        </Box>
      </Section>
    </Section>
  );
}
