import type { QueryDatabaseResponse } from "@notionhq/client/build/src/api-endpoints";

import fetcher from "./fetcher";

const NOTION_DATABASE_ID_WEDDING = process.env.NOTION_DATABASE_ID_WEDDING;
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

export const getDatabase = async (
  databaseId: string,
  filter?: any,
  cache?: RequestCache
) => {
  return (await fetcher(
    `https://api.notion.com/v1/databases/${databaseId}/query`,
    {
      next: { revalidate: 0 },
      cache: "no-cache",
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${NOTION_TOKEN}`,
        "Notion-Version": "2022-02-22",
      },
      body:
        filter &&
        JSON.stringify({
          filter: filter,
        }),
    }
  )) as Database;
};

/**
 * Returns all invites from the Notion database. It excludes "Not Invited"
 * guests.
 *
 * @returns All invites from the Notion database
 */
export const allInvites = async (filter?: any): Promise<WeddingInvite[]> => {
  if (!NOTION_DATABASE_ID_WEDDING) return [];
  const pages = await getDatabase(NOTION_DATABASE_ID_WEDDING, {
    and: [
      {
        property: "status",
        // Do not include "Not Invited" guests
        status: { does_not_equal: "NOT INVITED" },
      },
      {
        property: "Name",
        rich_text: { is_not_empty: true },
      },
      filter,
    ].filter((e) => e),
  });
  return (
    pages?.results?.map((page) => {
      const { code, email, guests, Name, status } = (page as any).properties;
      return {
        code: code.formula.string,
        email: email.email,
        guests: guests.number,
        id: page.id,
        name: Name.title[0]?.plain_text,
        status: status.status.name,
      } as WeddingInvite;
    }) || []
  );
};

export const findInviteByCode = async (
  code: string
): Promise<WeddingInvite | undefined> => {
  const invites = await allInvites({
    // Using Notion to filter by code.
    property: "code",
    formula: {
      string: {
        equals: code,
      },
    },
  });
  return invites.find((page) => page.code === code);
};

export const updateInvite = async (
  code: string,
  status: string
): Promise<WeddingInvite | undefined> => {
  const invite = await findInviteByCode(code);
  if (!invite) {
    return;
  }
  const response = await fetcher(
    `https://api.notion.com/v1/pages/${invite.id}`,
    {
      next: { revalidate: 10 },
      cache: "no-store",
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${NOTION_TOKEN}`,
        "Notion-Version": "2022-02-22",
      },
      body: JSON.stringify({
        properties: {
          status: {
            status: {
              name: status,
            },
          },
        },
      }),
    }
  );
  return findInviteByCode(code);
};
