import { NotionUser } from "../controllers/userTypes";

type TaskPageWithIdAssignees = {
    "pageId": string;
    "taskTitle": string;
    "description"?: string;
    "assignee": NotionUser[];
    "project": {"id": string}[];
}

const exampleDbResponse: TaskPageWithIdAssignees[] = [
    {
        "pageId": "2efeef29-a653-8183-b9f9-e1cc5f055afa",
        "taskTitle": "Paint art of the cats",
        "description": "This document outlines a project to create cat-themed artwork, scheduled to start on January 21, 2026, and due by January 27, 2026. The project is currently marked as \"Not Started.\"\n\n",
        "assignee": [],
        "project": [
            {
                "id": "2e7eef29-a653-8028-8fc8-c7e23ac62be0"
            }
        ]
    }
    ,
    {
        "pageId": "2efeef29-a653-8194-9191-e5e4e24904e4",
        "taskTitle": "Redesign the jet propulsion system",
        "description": "This document outlines a request to redesign the jet propulsion system, emphasizing the need for innovation in aerospace technology. The project is set to start on January 21, 2026, and is currently not yet begun.\n\n",
        "assignee": [],
        "project": [
            {
                "id": "2e8eef29-a653-80b9-a50d-df4982f43b21"
            }
        ]
    }
    ,
    {
        "pageId": "2e7eef29-a653-812b-8052-c384e4924549",
        "taskTitle": "Add finishing touches to the portrait",
        "description": "Harvey is tasked with adding the finishing touches to the portrait, a project assigned by Daniel Dirksen that has not yet started.\n\n",
        "assignee": [
            {
                "name": "Harvey Spectre",
                "email": "harvey.spectre@shared-domain.com",
                "userId": "25cd872b-594c-8111-84e3-00020e1da9ea"
            }
        ],
        "project": [
            {
                "id": "2e7eef29-a653-80c4-9ea0-d7df8f1a654b"
            }
        ]
    }
    ,
    {
        "pageId": "2efeef29-a653-81a8-be02-fd5ff0ee7e27",
        "taskTitle": "Create a new type of carbon vanadium composite",
        "description": "The project aims to create a new type of carbon vanadium composite, focusing on innovative material development. This initiative is currently not started and is scheduled to begin on January 21, 2026.\n\n",
        "assignee": [],
        "project": [
            {
                "id": "2e8eef29-a653-80fe-a110-f9e182ce0f20"
            }
        ]
    }
    ,
    {
        "pageId": "31aeef29-a653-8111-b049-c1f0efe6521f",
        "taskTitle": "Knit sweaters for all the foster cats",
        "assignee": [
            {
                "name": "Ramona Madison",
                "email": "ramona.madison@shared-domain.com",
                "userId": "152d872b-594c-8145-9c2c-000204787b69"

            }
        ],
        "project": [
            {
                "id": "2e7eef29-a653-8028-8fc8-c7e23ac62be0"
            }
        ]
    }
    ,
    {
        "pageId": "2efeef29-a653-81aa-8a8a-dae839be2e72",
        "taskTitle": "Create portraits of every cat in the world",
        "description": "This project aims to create portraits of every cat in the world, starting on January 21, 2026. The goal is to celebrate the diversity and beauty of cats through art.\n\n",
        "assignee": [],
        "project": [
            {
                "id": "2e7eef29-a653-8028-8fc8-c7e23ac62be0"
            },
            {
                "id": "2e7eef29-a653-80c4-9ea0-d7df8f1a654b"
            }
        ]
    }
    ,
    {
        "pageId": "304eef29-a653-81f7-b2ca-ed43f9371ef6",
        "taskTitle": "Pick optimal plants for garden and create spreadsheet",
        "assignee": [],
        "project": [
            {
                "id": "304eef29-a653-80db-8aaf-fa41bd28adbf"
            }
        ]
    }
    ,
    {
        "pageId": "2efeef29-a653-817f-a353-f8a16baa8f66",
        "taskTitle": "Create portraits of Minty and Parsley",
        "description": "This project aims to create portraits of two cats named Minty and Parsley. The work is scheduled to start on January 21, 2026, but has not yet begun.\n\nKeywords: Minty, Parsley, cat portraits, animal art, pet illustration, digital art, traditional art, feline art, creative project, artistic expression.",
        "assignee": [],
        "project": [
            {
                "id": "2e7eef29-a653-8028-8fc8-c7e23ac62be0"
            },
            {
                "id": "2e7eef29-a653-80c4-9ea0-d7df8f1a654b"
            }
        ]
    }
    ,
    {
        "pageId": "304eef29-a653-8171-949e-ee7df2123691",
        "taskTitle": "Create 50 garden sculptures of cats in various poses",
        "assignee": [],
        "project": [
            {
                "id": "2e7eef29-a653-8028-8fc8-c7e23ac62be0"
            },
            {
                "id": "304eef29-a653-80db-8aaf-fa41d28adbf"
            }
        ]
    }
    ,
    {
        "pageId": "2ffeef29-a653-810b-863b-eea3ad0346f1",
        "taskTitle": "Create the ultimate cat sculpture",
        "assignee": [],
        "project": [
            {
                "id": "2ffeef29-a653-8062-90c7-eab4996b7ed5"
            }
        ]
    }
    ,
    {
        "pageId": "304eef29-a653-81e2-888d-da133a71bb2d",
        "taskTitle": "Plant the pentagonal plants",
        "assignee": [],
        "project": [
            {
                "id": "304eef29-a653-80db-8aaf-fa41bd28adbf"
            }
        ]
    }
    ,
    {
        "pageId": "31beef29-a653-81ec-9846-eb8e00e750b3",
        "taskTitle": "Create oil painting of a cat",
        "assignee": [
            {
                "name": "Ramona Madison",
                "email": "ramona.madison@shared-domain.com",
                "userId": "152d872b-594c-8145-9c2c-000204787b69"
            }
        ],
        "project": [
            {
                "id": "2e7eef29-a653-8028-8fc8-c7e23ac62be0"
            },
            {
                "id": "2e7eef29-a653-80c4-9ea0-d7df8f1a654b"
            }
        ]
    }
    ,
    {
        "pageId": "304eef29-a653-810e-8463-fafa7ee3a780",
        "taskTitle": "Pet every cat and take cat photos",
        "assignee": [],
        "project": [
            {
                "id": "2e7eef29-a653-8028-8fc8-c7e23ac62be0"
            },
            {
                "id": "2ffeef29-a653-8062-90c7-eab4996b7ed5"
            }
        ]
    }
    ,
    {
        "pageId": "2f7eef29-a653-8102-9e53-d0b4d82047d7",
        "taskTitle": "the cats :3",
        "assignee": [
            {
                "name": "Ramona Madison",
                "email": "ramona.madison@shared-domain.com",
                "userId": "152d872b-594c-8145-9c2c-000204787b69"
            }
        ],
        "project": [
            {
                "id": "2e7eef29-a653-8028-8fc8-c7e23ac62be0"
            }
        ]
    }
    ,
    {
        "pageId": "304eef29-a653-814a-80c8-dce80a7d5158",
        "taskTitle": "Give me a high five",
        "assignee": [],
        "project": [
            {
                "id": "2e8eef29-a653-80fe-a110-f9e182ce0f20"
            }
        ]
    }];


export function minimizePrompt(taskPageArray: TaskPageWithIdAssignees[]) {
    return taskPageArray.map((task) => {
        return {
            taskTitle: task.taskTitle,
            pageId: task.pageId,
            description: task.description || "No Description"
        }
    });
}

(() => {
    const simplified = minimizePrompt(exampleDbResponse);
    console.log("Simplified", simplified[2], "\n", "Before: ", exampleDbResponse[2]);
})();