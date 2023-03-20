import Image from "next/image";

import { Section } from "@thugga/ui";

import profileImage from "./image.png";

export default function ImageBlock() {
  return (
    <Section css={{ position: "relative" }}>
      <Image
        width="0"
        height="0"
        sizes="100vw"
        style={{ width: "100%", height: "auto" }}
        alt="imenmelek"
        src={profileImage}
        placeholder="blur"
      />
    </Section>
  );
}
