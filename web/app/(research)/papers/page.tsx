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
