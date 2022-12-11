import { Heading, Section, Box, Grid, Paragraph } from "@thugga/ui";

export default function ServicesSection() {
  return (
    <Section size="2">
      <Heading as="h3" size="1" bold>
        Services
      </Heading>
      <Grid gap="5" columns={{ "@initial": "1", "@bp2": "2" }}>
        <Heading as="p" size="1">
          Leveraging clinical engineering, product design, and data science, we
          help healthcare organizations improve patient care, reduce costs, and
          increase efficiency. With our expertise and innovative approach, we
          are transforming the way healthcare is delivered.
        </Heading>
      </Grid>
      <Grid gap="5" columns={{ "@initial": "1", "@bp2": "2" }}>
        <Box css={{ py: "$3" }}>
          <Heading as="p" size="3" mono>
            Engineering
          </Heading>
          <Paragraph>
            We deliver state-of-the-art engineering capabilities ranging from
            cloud, micro-services architecture, to CI/CD. We help build the
            entire lifecycle of the sofware development from team topology,
            development best practices, to observability and deployment in the
            cloud.
          </Paragraph>
        </Box>
      </Grid>
      <Grid gap="5" columns={{ "@initial": "1", "@bp2": "2" }}>
        <Box css={{ py: "$3" }}>
          <Heading as="p" size="3" mono>
            Product Design
          </Heading>
          <Paragraph>
            We help define the product strategy and the product philosophy of
            your organization. We follow the Product methodology of the Silicon
            Valley Product Group (SVPG) and adhere to the principles of
            consumer-driven discovery and experimentation.
          </Paragraph>
        </Box>
      </Grid>
      <Grid gap="5" columns={{ "@initial": "1", "@bp2": "2" }}>
        <Box css={{ py: "$3" }}>
          <Heading as="p" size="3" mono>
            Data Science
          </Heading>
          <Paragraph>
            Our expertise in clinical informatics and evaluation of digital
            health intervention can help you evaluate the clinical effectiveness
            of the digital health interventions.
          </Paragraph>
        </Box>
      </Grid>
    </Section>
  );
}
