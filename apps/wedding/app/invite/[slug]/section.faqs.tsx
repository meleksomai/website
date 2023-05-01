import React from "react";

import { Heading, Section, Box, Paragraph, Text } from "@thugga/ui";

import { NextLink } from "../../../components";

export default function FAQsSection() {
  return (
    <Box css={{ mb: "$2" }}>
      <Section size="2">
        <Heading as="h3" size="3" serif>
          FAQs
        </Heading>
        <Box>
          <Heading as="h4" size="2" serif>
            Hotel Reservation
          </Heading>
          <Paragraph>
            As you plan your trip to Tunis, we wanted to provide you with some
            information regarding hotel reservations. We have arranged special
            room rates for our guests at two beautiful hotels in the area: Dar
            Said and Maison Blue.
          </Paragraph>
          <Heading as="p" size="1" serif>
            How to make a reservation?
          </Heading>
          <Paragraph>
            To make a reservation at either hotel, we kindly ask that you
            contact them directly and specify that you are attending the wedding
            of Melek Somai and Imen Ben Abid. When making your reservation,
            please reference the pricing that we have arranged for our guests.
            We also suggest that you cc me on your reservation request so that I
            can assist you if needed and make sure that everything is in order.
            We encourage you to make your reservation as soon as possible to
            ensure availability and to take advantage of the special rates we
            have secured for our guests.
          </Paragraph>
          <Heading as="p" size="1" serif>
            Dar Said, Sidi Bou Saïd
          </Heading>
          <Paragraph css={{ py: "$1" }}>
            Rue Toumi 2026, Carthage - 2 minutes walk from the venue.
            <NextLink href="https://goo.gl/maps/wjtZkX2hsuxF2DNF7">
              <Text>Learn more</Text>
            </NextLink>
          </Paragraph>
          <Paragraph css={{ py: "$2" }}>
            <Text variant="light">Option A</Text>
            Double Room with patio view - 380TND (approx. $125) per night.
          </Paragraph>
          <Paragraph css={{ py: "$2" }}>
            <Text variant="light">Option B</Text>
            Double Room with sea view - 460TND (approx. $150) per night.
          </Paragraph>
          <Paragraph css={{ py: "$2" }}>
            <Text variant="light">Option C</Text>
            Luxury Suite - 600TND (approx. $200) per night.
          </Paragraph>
          <Paragraph css={{ py: "$1" }}>
            <NextLink href="mailto:hotel@darsaid.tn">
              Booking emai lby :
              <Text>Makram Abdel Moumen - hotel@darsaid.tn</Text>
            </NextLink>
          </Paragraph>
          <Heading as="p" size="1" serif css={{ pt: "$4" }}>
            La Villa Bleue
          </Heading>
          <Paragraph css={{ py: "$1" }}>
            68 rue Kennedy - Sidi Bou Said 2026 - 5 minutes walk to the venue.
            <NextLink href="https://www.lavillableuesidibousaid.com/">
              <Text>Learn more</Text>
            </NextLink>
          </Paragraph>
          <Paragraph css={{ py: "$2" }}>
            <Text variant="light">Option A</Text>
            Double Room with sea view (with swimming pool depending on
            availability)- 800TND (approx. $260) per night.
          </Paragraph>
          <Paragraph css={{ py: "$1" }}>
            <NextLink href="mailto:sales@lavillableuesidibousaid.com">
              Booking emai lby :
              <Text>Hajer Bouassida - sales@lavillableuesidibousaid.com</Text>
            </NextLink>
          </Paragraph>
        </Box>
      </Section>
    </Box>
  );
}
