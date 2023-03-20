import fetcher from "./fetcher";
import type { QueryDatabaseResponse } from "@notionhq/client/build/src/api-endpoints";

export type Database = QueryDatabaseResponse;

export const getDatabase = async (databaseId: string) => {
  return await fetcher(
    `https://api.notion.com/v1/databases/${databaseId}/query`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.NOTION_TOKEN}`,
        "Notion-Version": "2022-02-22",
      },
    }
  ) as Database;
};
