import { GetUserResponse } from "@notionhq/client"

export const EXAMPLE_ALL_NOTION_USERS = [
    {
        "userId": "13ed872b-594c-81a7-84f8-0002e9e2cf87",
        "name": "Drew Dunn",
        "email": "drew.dunn@shared-domain.com"
    }
    ,
    {
        "userId": "152d872b-594c-8145-9c2c-000204787b69",
        "name": "Ramona Madison",
        "email": "ramadison@my-domain.com"
    }
    ,
    {
        "userId": "155d872b-594c-810e-9174-00024470271f",
        "name": "Kate Wilson",
        "email": "katewilson@bond.com"
    }
    ,
    {
        "userId": "158d872b-594c-81b0-a53d-0002632ed5fc",
        "name": "Nick Furry",
        "email": "nick.Furry@my-domain.com"
    }
    ,
    {
        "userId": "1bbd872b-594c-8153-b8b4-0002a90b5da6",
        "name": "Melinda",
        "email": "melinda@shared-domain.com"
    }
    ,
    {
        "userId": "1d1d872b-594c-819f-bce3-00027369acef",
        "name": "Phil Bocherini",
        "email": "phil.bocherini@shared-domain.com"
    }
    ,
    {
        "userId": "1e0d872b-594c-81e5-be86-000260493812",
        "name": "Bill Withers",
        "email": "billywithers@my-domain.com"
    }
    ,
    {
        "userId": "22dd872b-594c-81f8-8099-0002f6600181",
        "name": "Emily Amanda",
        "email": "emily.amanda@shared-domain.com"
    }
    ,
    {
        "userId": "25cd872b-594c-8111-84e3-00020e1da9ea",
        "name": "Harvey Spectre",
        "email": "harvey.spectre@shared-domain.com"
    }
    ,
    {
        "userId": "262d872b-594c-816d-9e5e-00029d62603f",
        "name": "Suzanne Ray",
        "email": "suzanne@shared-domain.com"
    }
    ,
    {
        "userId": "264d872b-594c-811e-afe6-0002754d4767",
        "name": "Julia bocherini",
        "email": "julia.bocherini@shared-domain.com"
    }
    ,
    {
        "userId": "264d872b-594c-814c-add6-00025b9a6dbe",
        "name": "diana@shared-domain.com",
        "email": "diana@shared-domain.com"
    }
    ,
    {
        "userId": "264d872b-594c-814f-be30-0002491914a1",
        "name": "hayden.seek@shared-domain.com",
        "email": "hayden.seek@shared-domain.com"
    }
    ,
    {
        "userId": "264d872b-594c-8165-a127-000223d1869e",
        "name": "John Mendelsohn",
        "email": "john.mendelsohn@shared-domain.com"
    }
    ,
    {
        "userId": "264d872b-594c-817a-a2b1-00022e7966cb",
        "name": "utility@shared-domain.com",
        "email": "utility@shared-domain.com"
    }
    ,
    {
        "userId": "264d872b-594c-8181-9dcc-0002a1130067",
        "name": "nikkita@shared-domain.com",
        "email": "nikkita@shared-domain.com"
    }
    ,
    {
        "userId": "264d872b-594c-819c-bb03-0002725087c7",
        "name": "Diana",
        "email": "diana.amazon@shared-domain.com"
    }
    ,
    {
        "userId": "264d872b-594c-81bd-9ea8-0002b5ca7b01",
        "name": "ian.duncan@shared-domain.com",
        "email": "ian.duncan@shared-domain.com"
    }
    ,
    {
        "userId": "264d872b-594c-81f4-9623-0002780160a1",
        "name": "joe.de_man@shared-domain.com",
        "email": "joe.de_man@shared-domain.com"
    }
    ,
    {
        "userId": "264d872b-594c-81f6-92be-000247426fce",
        "name": "zak.garfield@shared-domain.com",
        "email": "zak.garfield@shared-domain.com"
    }
    ,
    {
        "userId": "a0aeb683-ecc4-4e9c-8dd2-136239554894",
        "name": "Kevin Debussy",
        "email": "kdkamado2005@my-domain.com"
    }
    ,
    {
        "userId": "ad835b36-8b72-47ab-8db0-b67f8b77c6d1",
        "name": "Jeremy Jones",
        "email": "jeremyjones@my-domain.com"
    }
    ,
    {
        "userId": "bd1eb041-d113-442c-abd2-0562680fc656",
        "name": "Philemon",
        "email": "philemonbocherini@my-domain.com"
    }
    ,
    {
        "userId": "136d872b-594c-817b-adaa-00026796be69",
        "name": "James Bond",
        "email": "james.bond@shared-domain.com"
    }
    ,
    {
        "userId": "13dd872b-594c-810f-8bb4-000282e27820",
        "name": "Belteshazar Bond",
        "email": "belteshazar.bond@shared-domain.com"
    }
    ,
    {
        "userId": "145d872b-594c-81bb-960d-0002af602358",
        "name": "Scott Rhymes",
        "email": "scotty.rhymes@shared-domain.com"
    }
]


export const EXAMPLE_NOTION_USERS_RESPONSE: Record<string, GetUserResponse> = {
    "152d872b-594c-8145-9c2c-000204787b69": {
        object: "user",
        id: "152d872b-594c-8145-9c2c-000204787b69",
        name: "Ramona Madison",
        avatar_url: "placeholder-avatar-url",
            
        type: "person",
        person: {
            email: "ramona.madison@shared-domain.com",
        },
    },
    "1e0d872b-594c-81e5-be86-000260493812": {
        object: "user",
        id: "1e0d872b-594c-81e5-be86-000260493812",
        name: "Harvey Spectre",
        avatar_url: "placeholder-avatar-url",
            
        type: "person",
        person: {
            email: "harveyspectre@my-domain.com",
        },
    },
    "25cd872b-594c-8111-84e3-00020e1da9ea": {
        object: "user",
        id: "25cd872b-594c-8111-84e3-00020e1da9ea",
        name: "Harvey Spectre",
        avatar_url:
            "placeholder-avatar-url",
        type: "person",
        person: {
            email: "harvey.spectre@shared-domain.com",
        },
    },
    "13dd872b-594c-810f-8bb4-000282e27820": {
        object: "user",
        id: "13dd872b-594c-810f-8bb4-000282e27820",
        name: "Belteshazar Bond",
        avatar_url: "placeholder-avatar-url",
        type: "person",
        person: {
            email: "belteshazar.bond@shared-domain.com",
        },
    },
    "136d872b-594c-817b-adaa-00026796be69": {
        object: "user",
        id: "136d872b-594c-817b-adaa-00026796be69",
        name: "James Bond",
        avatar_url: null,
        type: "person",
        person: {
            email: "james.bond@shared-domain.com",
        },
    }
}