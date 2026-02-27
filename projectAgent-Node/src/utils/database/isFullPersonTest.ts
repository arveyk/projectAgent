import { isFullUser, PartialUserObjectResponse, UserObjectResponse } from "@notionhq/client";

// Manual Test for empty users array
console.log(
    isFullUser(
        {
            "object": "user",
            "id": "152d872b-594c-8145-9c2c-000204787b69",
            "name": "Ramona Madison",
            "avatar_url": "public.notion-static.com.jpg",
            "type": "person",
            "person": {
                "email": "crmadison@gmail.com"
            }
        }
    ));

console.log(isFullUser([] as UserObjectResponse | PartialUserObjectResponse));
