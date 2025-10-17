import { NOTION_API_KEY } from "../env";
import { Client } from "@notionhq/client";

const notion = new Client({
  auth: NOTION_API_KEY,
  notionVersion: "2025-09-03",
});

export async function deletePage(pageUrl: string) {
  const archivedPage = await notion.pages.update({
    page_id: pageUrl,
    archived: true,
  });
  return archivedPage;
}
