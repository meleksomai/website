import type { Metadata } from "next";
import { EssaysSection } from "./_components/section-essays";
import { HeaderSection } from "./_components/section-header";

export default async function Page() {
  return (
    <div className="flex flex-col gap-20">
      <HeaderSection />
      <EssaysSection />
    </div>
  );
}

export const metadata: Metadata = {
  title: "Melek Somai | Essays",
  description:
    "A space to share thoughts and ideas that are often reflections on my current research.",
  twitter: {
    card: "summary_large_image",
    title: "Melek Somai | Essays",
    description:
      "A space to share thoughts and ideas that are often reflections on my current research.",
    creator: "@meleksomai",
    site: "https://somai.me",
  },
};
