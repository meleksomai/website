"use client";

import Image from "next/image";
import useSWR from "swr";

import { Text, Stack, Box, Link } from "@thugga/ui";

import fetcher from "../lib/fetcher";
import spotifyLogo from "../public/images/spotify.svg";

const CurrentSong = (props: any) => {
  const { data } = props;

  return (
    <>
      <Text variant="small" as="span">
        Listening to
      </Text>
      <Link
        size="small"
        bold
        href={data.songUrl ?? ""}
      >{`${data.title} - ${data.artist}`}</Link>
    </>
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
  console.log(data);
  return (
    <Stack space="200" direction="row" align="center" justify="flex-start">
      <Image width="20" height="20" src={spotifyLogo} alt="spotify logo" />
      {data?.isPlaying ? <CurrentSong data={data} /> : <NotPlaying />}
    </Stack>
  );
}
