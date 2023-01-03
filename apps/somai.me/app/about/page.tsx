import { Paragraph } from "@thugga/ui";

import RoleSection from "./section.roles";

import HeroSection from "../../components/Hero";
import { getAllRoles } from "../../lib/roles";


export default async function EssayPage() {
  const roles = await getAllRoles();
  return (
    <>
      {/* @ts-expect-error Server Component */}
      <HeroSection>
        Born in Tunis. Studied in Boston. Worked in London and Wisconsin.
      </HeroSection>
      {/* @ts-expect-error Server Component */}
      <RoleSection roles={roles} />
    </>
  );
}
