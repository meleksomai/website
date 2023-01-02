import React from "react";

import { Box, Grid, Heading, Paragraph, Section, Text } from "@thugga/ui";

import { NextLink } from "../../components";

const CURRENT_ROLE = [
  {
    id: 1,
    tile: "Chief Technology Officer",
    organization: "Inception Health",
  },
  {
    id: 2,
    tile: "Assistant Professor of Medicine",
    organization: "Medical College of Wisconsin",
  },
];

export default async function RoleSection() {
  const roles = CURRENT_ROLE;
  return (
    <Section size="2">
      <Heading as="h3" size="2" css={{ pb: "$5" }}>
        Current Positions
      </Heading>
      <Grid gap="5" columns="1">
        {roles.map((role) => (
          <Box key={role.id}>
            <Heading as="p" size={"1"}>
              {role.tile}.{" "}
              <Heading inline as="span" size={"1"} css={{ color: "$slate10" }}>
                {role.organization}
              </Heading>
            </Heading>
            <Paragraph>
              Melek Somai is the Chief Technology Officer at Inception Health.
              He holds also the position of Assistant Professor of Medicine at
              Medical College of Wisconsin. Dr Somai’s expertise is in health
              informatics and data engineering. Melek is trained in medicine,
              data scientist, and public health. He was formerly a research
              fellow at the Neuro-Epidemiology and Ageing Research at Imperial
              College and the Associate Director of the Centre for
              Cryptocurrency Research and Engineering exploring the deployment
              of Blockchain Technology in Health Care and Life Sciences. He is a
              former Fulbright scholar. Dr Somai has a special interest in the
              impact of information technology and data in shaping the provision
              of care. He is also interested in the development of new
              approaches to public and global health using data science. As part
              of his global health activities, Dr Somai is the founder and the
              current president of the Tunisian Center for Public Health.
            </Paragraph>
            
          </Box>
        ))}
      </Grid>
    </Section>
  );
}
