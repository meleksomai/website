import HeroSection from "@/components/Hero";
import { getAllRoles } from "@/lib/roles";

import RoleSection from "./section.roles";


export default async function EssayPage() {
  const roles = await getAllRoles();
  return (
    <>
      <HeroSection>
        Born in Tunis. Studied in Boston. Worked in London. Living in Wisconsin.
      </HeroSection>
      <RoleSection roles={roles} />
    </>
  );
}
