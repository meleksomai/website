import Image from "next/image";
import { useEffect } from "react";
import useSWR from "swr";

import { Text, Flex } from "@thugga/ui";

import { NextLink } from "./NextLink";

import fetcher from "../lib/fetcher";
import spotifyLogo from "../public/images/spotify.svg";

const CurrentSong = (props: any) => {
  const { data } = props;

  return (
    <Flex wrap="wrap">
      <Text inline bold>
        <NextLink href={data.songUrl ?? ""} variant="simple">
          {`${data.title} - ${data.artist}`}
        </NextLink>
        <Text inline variant="light">
          {" "}
          - Spotify{" "}
        </Text>
      </Text>
    </Flex>
  );
};

const NotPlaying = () => {
  return (
    <Flex wrap="wrap">
      <Text bold>
        Not Playing
        <Text inline> - Spotify </Text>
      </Text>
    </Flex>
  );
};

export default function Spotify() {
  const { data } = useSWR<any>("/api/spotify", fetcher);

  return (
    <Flex>
      <Flex css={{ width: "$5", mr: "$1", minWidth: "$5" }}>
        <Image src={spotifyLogo} alt="spotify logo" />
      </Flex>
      {data?.isPlaying ? <CurrentSong data={data} /> : <NotPlaying />}
    </Flex>
  );
}
