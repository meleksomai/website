import type { Metadata } from "next";
import React from "react";

import { Box, Text, Separator, Paragraph, Section } from "@thugga/ui";

import ErrorPage from "./errorPage";
import RSVPButton from "./rsvp";
import DetailsSection from "./section.details";
import FAQsSection from "./section.faqs";
import HeroSection from "./section.hero";

// eslint-disable-next-line import/order, import/no-unresolved
import { allInvites, findInviteByCode } from "@/lib/notion";

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
  return invite && invite?.outeya !== "NOT INVITED" ? (
    <Box>
      <HeroSection />
      <Separator size="2" />
      <Section size="2">
        <Paragraph>
          We are delighted to extend a cordial invitation to you to attend our
          traditional wedding ceremony known as{" "}
          <Text as="span" variant="orange" inline italic>
            Outeya
          </Text>{" "}
          which promises to be a truly captivating experience.
        </Paragraph>
        <Paragraph>
          At the ceremony, we would be honored to share with you the rich
          cultural heritage of our community as we encourage you to wear our
          traditional attires and immerse yourselves in the mystical and
          captivating rhythms of the{" "}
          <Text as="span" variant="orange" inline italic>
            Tijaniyya
          </Text>{" "}
          and{" "}
          <Text as="span" variant="orange" inline italic>
            Hadra
          </Text>
          .
        </Paragraph>
        <Paragraph>
          We have arranged for a variety of dance performances to further
          enchant you, including the mahdaouis{" "}
          <Text as="span" variant="orange" inline italic>
            Nûba
          </Text>{" "}
          and punic païen{" "}
          <Text as="span" variant="orange" inline italic>
            Jelwa
          </Text>
          .
        </Paragraph>
        <Paragraph>
          We hope that you will find time to join us and enjoy this
          unforgettable experience together with our family and friends.
        </Paragraph>
      </Section>
      <Section size="2">
        <RSVPButton code={invite.code} initialStatus={invite.outeya} />
      </Section>
      <Separator size="2" />
      <DetailsSection />
      <Separator size="2" />
      <FAQsSection />
    </Box>
  ) : (
    <ErrorPage />
  );
}
