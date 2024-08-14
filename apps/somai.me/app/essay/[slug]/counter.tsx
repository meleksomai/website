import { kv } from "@vercel/kv";
import React from "react";

import { Text } from "@thugga/ui";

async function recordView(slug: string) {
  // Get the formatter
  const formatter = Intl.NumberFormat("en", { notation: "compact" });

  // Create keys
  const viewKey = ["pageviews", "essays", slug].join(":");

  await kv.incr(viewKey);
  const viewCount = (await kv.get<number>(viewKey)) ?? 0;
  return {
    message: "View Added",
    status: 202,
    views: formatter.format(viewCount),
  };
}

export default async function ViewsCounter({ essay }: { essay: string }) {
  const views = await recordView(essay);
  return <Text variant="small">{views?.views || 0} views</Text>;
}
