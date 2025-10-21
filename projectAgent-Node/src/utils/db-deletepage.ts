import { NOTION_API_KEY } from "../env";
import { Client } from "@notionhq/client";

const notion = new Client({
  auth: NOTION_API_KEY,
  notionVersion: "2025-09-03",
});

export async function deletePage(pageUrl: string) {
  const pageToArchive = pageUrl.split("-").slice(-1).join();
  const id = pageToArchive.match(/[0-9a-fA-F]{32}/);

  if (id) {
    const archivedPage = await notion.pages.update({
      page_id: id[0],
      archived: true,
    });
    return archivedPage;
  }
  return "Page not added";
}
