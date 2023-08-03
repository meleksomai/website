import { getAllRoles } from "@/lib/roles";

import RoleSection from "./section.roles";

import HeroSection from "../hero";

export default async function EssayPage() {
  const roles = await getAllRoles();
  return (
    <>
      <HeroSection>
        Born in Tunis. Studied in Boston. Worked in London and Wisconsin.
      </HeroSection>
      <RoleSection roles={roles} />
    </>
  );
}
