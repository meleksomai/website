"use client";

import Image from "next/image";
import useSWR from "swr";

import { Text, Stack, Link, Box } from "@thugga/ui";

import fetcher from "../lib/fetcher";
import spotifyLogo from "../public/images/spotify.svg";

const CurrentSong = (props: any) => {
  const { data } = props;

  return (
    <Box flexWrap="wrap">
      <Link
        size="small"
        bold
        href={data.songUrl ?? ""}
      >{`${data.title} - ${data.artist}`}</Link>
      <Text variant="small" as="span">
        - on Spotify
      </Text>
    </Box>
  );
};

const NotPlaying = () => {
  return (
    <Text variant="small" bold>
      Not Playing
      <Text variant="small" as="span">
        {" "}
        - Spotify{" "}
      </Text>
    </Text>
  );
};

export function Spotify() {
  const { data } = useSWR<any>("/api/spotify", fetcher);
  return (
    <Stack space="200" direction="row" align="center" justify="flex-start">
      <Image width="20" height="20" src={spotifyLogo} alt="spotify logo" />
      {data?.isPlaying ? <CurrentSong data={data} /> : <NotPlaying />}
    </Stack>
  );
}
