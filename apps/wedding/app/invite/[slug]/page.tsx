import {
  Box,
  Heading,
  Separator,
  Paragraph,
  Section,
  Button,
} from "@thugga/ui";

import RSVPButton from "./rsvp";
import DetailsSection from "./section.details";
import HeroSection from "./section.hero";

import { allInvites, findInviteByCode } from "@/lib/notion";

type Params = {
  slug: string;
};

type PageProps = {
  params: Params;
};

export const dynamicParams = false;

export async function generateStaticParams() {
  const invites = await allInvites();
  return invites.map((invite) => {
    return { slug: invite.code };
  });
}

// export async function generateMetadata({
//   params,
// }: PageProps): Promise<Metadata> {
//   const { title } = await getMarkdownContent(params.slug);
//   return { title: title };
// }

export default async function WelcomePage({ params }: PageProps) {
  const invite = await findInviteByCode(params.slug);

  if (!invite) return <></>;

  return (
    <Box>
      <HeroSection />
      <Separator size="2" />
      <Section size="3">
        <Heading as="h1" size="3" serif>
          Dear {invite.name},
        </Heading>
        <Paragraph css={{ maxWidth: "400px" }} serif>
          We are so excited to celebrate our wedding with you!
        </Paragraph>
        {/* @ts-expect-error Server Component */}
        <RSVPButton code={invite.code} />
      </Section>
      <Separator size="2" />
      <DetailsSection />
    </Box>
  );
}
