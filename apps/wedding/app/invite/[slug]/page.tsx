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

import { getDatabase, Database } from "../../../lib/notion";

const databaseId = "31eb05392edd47cf9b757da2af184187";

type Params = {
  slug: string;
};

type PageProps = {
  params: Params;
};

export const dynamicParams = false;

export async function generateStaticParams() {
  const invites = await getDatabase(databaseId);
  return invites?.results
    .filter((invite) => (invite as any)?.properties?.Name?.title[0]?.plain_text)
    .map((invite) => {
      return { slug: (invite as any).properties.ID.formula.string };
    });
}

async function getInvite(id: string) {
  const invites = await getDatabase(databaseId);
  return invites.results.find(
    (invite) => (invite as any).properties.ID.formula.string === id
  );
}
// export async function generateMetadata({
//   params,
// }: PageProps): Promise<Metadata> {
//   const { title } = await getMarkdownContent(params.slug);
//   return { title: title };
// }

export default async function WelcomePage({ params }: PageProps) {
  const invite = await getInvite(params.slug);
  return (
    <Box>
      <HeroSection />
      <Separator size="2" />
      <Section size="3">
        <Heading as="h1" size="3" serif>
          Dear {(invite as any)?.properties.Name.title[0].plain_text},
        </Heading>
        <Paragraph css={{ maxWidth: "400px" }} serif>
          We are so excited to celebrate our wedding with you!
        </Paragraph>
        <RSVPButton />
      </Section>
      <Separator size="2" />
      <DetailsSection />
    </Box>
  );
}
