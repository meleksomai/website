import type { Metadata } from "next";
import React from "react";

import { Box, Heading, Separator, Paragraph, Section } from "@thugga/ui";

// eslint-disable-next-line import/order, import/no-unresolved
import { allInvites, findInviteByCode } from "@/lib/notion";

import ErrorPage from "./errorPage";
import RSVPButton from "./rsvp";
import DetailsSection from "./section.details";
import FAQs from "./section.faqs";
import HeroSection from "./section.hero";

type Params = {
  slug: string;
};

type PageProps = {
  params: Params;
};

async function getData(code: string) {
  return await findInviteByCode(code);
}

export async function generateStaticParams() {
  const invites = await allInvites();
  return invites.map((invite) => {
    return { slug: invite.code };
  });
}

export async function generateMetadata({
  params,
}: {
  params: Params;
}): Promise<Metadata> {
  const invite = await getData(params.slug);
  return {
    title: `Melek & Imen - Wedding invitation to ${invite?.name}`,
    description: `We are excited to invite you to join us as we celebrate our special day in the beautiful city of Sidi Bou Said, Tunisia. It is an honor for us to share this joyous occasion with our loved ones, and we hope that you can join us in celebrating our love and commitment.`,
    openGraph: {
      type: "website",
      url: `https://wedding.thugga.org/invite/${invite?.code}`,
      title: `Melek & Imen - Wedding invitation to ${invite?.name}`,
      description: `We are excited to invite you to join us as we celebrate our special day in the beautiful city of Sidi Bou Said, Tunisia. It is an honor for us to share this joyous occasion with our loved ones, and we hope that you can join us in celebrating our love and commitment.`,
      siteName: "Melek & Imen - Wedding",
      images: ["/images/opengraph-image.png"],
    },
  };
}

export default async function WelcomePage({ params }: PageProps) {
  const invite = await getData(params.slug);

  return invite ? (
    <Box>
      <HeroSection />
      <Separator size="2" />
      <Section size="2">
        <Heading as="h1" size="3" serif>
          Dear {invite.name},
        </Heading>
        <Paragraph>
          We are excited to invite you to join us as we celebrate our special
          day in the beautiful city of Sidi Bou Said, Tunisia. It is an honor
          for us to share this joyous occasion with our loved ones, and we hope
          that you can join us in celebrating our love and commitment.
        </Paragraph>
        <Paragraph>
          Our wedding will be a unique and unforgettable experience, set against
          the backdrop of rich history, beautiful landscapes, and warm Tunisian
          hospitality. From the ancient ruins of Carthage to the bustling
          markets of the medina, there is so much to explore and discover in
          Tunis. We have also planned special events and activities to make this
          wedding celebration truly memorable.
        </Paragraph>
        <Paragraph>
          We sincerely hope that you can join us in celebrating our love and
          making precious memories together. Your presence is the greatest gift,
          and we look forward to sharing this special day with you.
        </Paragraph>
      </Section>
      <Section size="2">
        <RSVPButton code={invite.code} initialStatus={invite.status} />
      </Section>
      <Separator size="2" />
      <DetailsSection />
      <Separator size="2" />
      <FAQs />
    </Box>
  ) : (
    <ErrorPage />
  );
}
