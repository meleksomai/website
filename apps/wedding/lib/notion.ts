import type { QueryDatabaseResponse } from "@notionhq/client/build/src/api-endpoints";

import fetcher from "./fetcher";

const NOTION_DATABASE_ID_WEDDING = "9bf0150b51134f33a2be708a808d0ea6";
const NOTION_TOKEN = process.env.NOTION_TOKEN;

export type Database = QueryDatabaseResponse;
export interface WeddingInvite {
  code: string;
  email: string | null;
  guests: number | null;
  id: string;
  name: string | undefined;
  status: string;
}

export const getDatabase = async (databaseId: string) => {
  return (await fetcher(
    `https://api.notion.com/v1/databases/${databaseId}/query`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${NOTION_TOKEN}`,
        "Notion-Version": "2022-02-22",
      },
    }
  )) as Database;
};

export const allInvites = async (): Promise<WeddingInvite[]> => {
  const pages = await getDatabase(NOTION_DATABASE_ID_WEDDING);
  return (
    pages?.results?.map((page) => {
      const { code, email, guests, Name, status } = (page as any).properties;
      return {
        code: code.formula.string,
        email: email.email,
        guests: guests.number,
        id: page.id,
        name: Name.title[0]?.plain_text,
        status: status.status,
      } as WeddingInvite;
    }) || []
  );
};

export const findInviteByCode = async (
  code: string
): Promise<WeddingInvite | undefined> => {
  const invites = await allInvites();
  return invites.find((page) => page.code === code);
};
