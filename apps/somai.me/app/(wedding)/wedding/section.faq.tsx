import { Heading, Box, Section, Paragraph } from "@thugga/ui";

export default function FAQs() {
  return (
    <Section>
      <Section>
        <Heading size="2">FAQs</Heading>
      </Section>
      <Section>
        <Box>
          <Heading inline size="1" as="p" bold>
            Parking
          </Heading>
          <Box>
            <Paragraph>
              It is recommended to park on the Place de la République. There is
              an underground garage which we do not recommend unless you are
              used to park there.
            </Paragraph>
          </Box>
        </Box>
      </Section>
      <Section>
        <Box>
          <Heading inline size="1" as="p" bold>
            Dress Code
          </Heading>
          <Box>
            <Paragraph>
              Dress code is formal attire. You are also welcome to wear traditional dress.
            </Paragraph>
          </Box>
        </Box>
      </Section>
      <Section>
        <Box>
          <Heading inline size="1" as="p" bold>
            Help Desk
          </Heading>
          <Box>
            <Paragraph>
              There is no help desk; but you should definitely call Melek or Imen.
            </Paragraph>
          </Box>
        </Box>
      </Section>
    </Section>
  );
}
