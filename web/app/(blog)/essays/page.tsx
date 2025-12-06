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
