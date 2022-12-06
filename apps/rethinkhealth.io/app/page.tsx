import { Heading, Section, Box, Button, Paragraph, Grid } from "@thugga/ui";

export default function MainPage() {
  return (
    <>
      <Box css={{ minHeight: "400px" }}>
        <Section size="2">
          <Grid gap="5" columns={{ "@initial": "2", "@bp3": "3" }}>
            <Box css={{ gridColumn: "span 2" }}>
              <Heading as="p" size="4" css={{ pb: "$5" }}>
                Assisting healthcare systems achieve their{" "}
                <Heading inline as="span" size="4" css={{ color: "$blue11" }}>
                  Digital Transformation{" "}
                </Heading>
                at scale by leveraging{" "}
                <Heading inline as="span" size="4" css={{ color: "$blue11" }}>
                  Clinical Engineering
                </Heading>
                ,{" "}
                <Heading inline as="span" size="4" css={{ color: "$blue11" }}>
                  Product Design
                </Heading>
                , and{" "}
                <Heading inline as="span" size="4" css={{ color: "$blue11" }}>
                  Data Science
                </Heading>
                .
              </Heading>
              {/* <Button
                variant="blue"
                css={{ fontSize: 23, fontWeight: 500, height: 50 }}
                onClick={(e) => {
                  window.location.href = "mailto:contact@rethinkhealth.io";
                  e.preventDefault();
                }}
              >
                Contact us
              </Button> */}
            </Box>
            {/* <Flex
              css={{
                // width: "$3",
                mr: "$1",
                minWidth: "$5",
                zIndex: "-999999",
              }}
            >
              <Image
                src={HeroLandingSvg}
                alt="hero image for the landing page"
                // layout="fill"
                // objectFit="contain"
              />
            </Flex> */}
          </Grid>
        </Section>
        <Section size="2">
          <Heading as="h3" size="1" bold>
            Services
          </Heading>
          <Grid gap="5" columns={{ "@initial": "1", "@bp2": "2" }}>
            <Box css={{ py: "$3" }}>
              <Heading as="p" size="3" mono>
                Engineering
              </Heading>
              <Paragraph>
                We deliver state-of-the-art engineering capabilities ranging
                from cloud, micro-services architecture, to CI/CD. We help build
                the entire lifecycle of the sofware development from team
                topology, development best practices, to observability and
                deployment in the cloud.
              </Paragraph>
            </Box>
          </Grid>
          <Grid gap="5" columns={{ "@initial": "1", "@bp2": "2" }}>
            <Box css={{ py: "$3" }}>
              <Heading as="p" size="3" mono>
                Product Design
              </Heading>
              <Paragraph>
                We help define the product strategy and the product philosophy
                of your organization. We follow the Product methodology of the
                Silicon Valley Product Group (SVPG) and adhere to the principles
                of consumer-driven discovery and experimentation.
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
                health intervention can help you evaluate the clinical
                effectiveness of the digital health interventions.
              </Paragraph>
            </Box>
          </Grid>
        </Section>
      </Box>
    </>
  );
}
