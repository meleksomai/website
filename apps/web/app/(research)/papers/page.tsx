import type { Metadata } from "next";
import { HeaderSection } from "./_components/section-header";
import { PapersSection } from "./_components/section-papers";

export default function PapersPage() {
  return (
    <div className="flex flex-col gap-20">
      <HeaderSection />
      <PapersSection />
    </div>
  );
}

export const metadata: Metadata = {
  title: "Melek Somai | Research Papers",
  description:
    "Research in areas ranging from Clinical Computing, Patient Remote Monitoring, Neuro-Epidemiology, to AI and Machine Learning",
  twitter: {
    card: "summary_large_image",
    title: "Melek Somai | Research Papers",
    description:
      "Research in areas ranging from Clinical Computing, Patient Remote Monitoring, Neuro-Epidemiology, to AI and Machine Learning",
    creator: "@meleksomai",
    site: "https://somai.me",
  },
};
