import { NOTION_API_KEY } from "../env";
import { Client } from "@notionhq/client";

const notion = new Client({
  auth: NOTION_API_KEY,
  notionVersion: "2025-09-03",
});

export async function deletePage(pageUrl: string) {
  let pageToArchive = pageUrl.split("-").slice(-1).join();
  
  let intermediate: string[] = [];
  let step2Id = "";
  if (pageToArchive.includes("&p")) {
    intermediate = pageToArchive.split("&p");
    console.log("Intermediate step", intermediate);
    // pageToArchive = pageToArchive.at(-2);
    step2Id = intermediate.slice(-2)[0];
  }
  const id = intermediate.length > 0 
	  ? step2Id.match(/[0-9a-fA-F]{32}/)
	  : pageToArchive.match(/[0-9a-fA-F]{32}/);
  console.log(id);
  if (id) {
    const archivedPage = await notion.pages.update({
      page_id: id[0],
      archived: true,
    });
    return archivedPage;
  }
  return "Page not added";
}
