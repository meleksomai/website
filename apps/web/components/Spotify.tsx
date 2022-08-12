import { useEffect } from "react";
import useSWR from "swr";

import { Text } from "@thugga/ui";

import fetcher from "../lib/fetcher";

export default function Spotify() {
  const { data } = useSWR<any>("/api/spotify", fetcher);

  return <Text>{JSON.stringify(data)}</Text>;
}
