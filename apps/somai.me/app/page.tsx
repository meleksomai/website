import { Box } from "@thugga/ui";

import EssaysSection from "./section.essays";
import PapersSection from "./section.papers";

import HeroSection from "../components/Hero";
import { getAllPosts } from "../lib/essays";
import { getAllPapers } from "../lib/papers";

export default async function MainPage() {
  const publications = await (await getAllPapers()).slice(0, 3);
  const posts = await getAllPosts();
  return (
    <>
      <Box>
        <HeroSection>
          Physician. Clinical Informatician. Data Scientist. Innovator. Works at
          the intersection of Healthcare Informatics, Clinical Computing, and
          Data Science.
        </HeroSection>
        <EssaysSection posts={posts || []} />
        <PapersSection publications={publications || []} />
      </Box>
    </>
  );
}
