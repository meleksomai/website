import { useEffect } from "react";
import useSWR from "swr";

import { Text, Section } from "@thugga/ui";

import { NextLink } from "./NextLink";

import fetcher from "../lib/fetcher";

export default function Spotify() {
  const { data } = useSWR<any>("/api/spotify", fetcher);

  if (data?.isPlaying) {
    return (
      <Section>
        <NextLink href={data.songUrl} variant="simple">
          <Text inline bold>
            {data.title}
          </Text>
          <Text inline> - </Text>
          <Text inline variant="light" bold>
            {data.artist}
          </Text>
        </NextLink>
        <Text inline variant="light">
          {" "}
          - Spotify{" "}
        </Text>
      </Section>
    );
  } else {
    return (
      <Section>
        <Text bold inline>
          Not Playing
        </Text>
        <Text inline> - Spotify </Text>
      </Section>
    );
  }
}
