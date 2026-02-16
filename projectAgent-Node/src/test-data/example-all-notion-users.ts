import { GetUserResponse } from "@notionhq/client"

export const EXAMPLE_ALL_NOTION_USERS = [
    {
        "userId": "13ed872b-594c-81a7-84f8-0002e9e2cf87",
        "name": "Drew Dunn",
        "email": "drew.dunn@solutional.com"
    }
    ,
    {
        "userId": "152d872b-594c-8145-9c2c-000204787b69",
        "name": "Ceci Kurdelak",
        "email": "ceci.kurdelak@solutional.com"
    }
    ,
    {
        "userId": "155d872b-594c-810e-9174-00024470271f",
        "name": "Katherine",
        "email": "katherine@dirksen.com"
    }
    ,
    {
        "userId": "158d872b-594c-81b0-a53d-0002632ed5fc",
        "name": "Nick McKibbon",
        "email": "nick.mckibbon@gmail.com"
    }
    ,
    {
        "userId": "1bbd872b-594c-8153-b8b4-0002a90b5da6",
        "name": "Brooklyn",
        "email": "brooklyn@solutional.com"
    }
    ,
    {
        "userId": "1d1d872b-594c-819f-bce3-00027369acef",
        "name": "Phil Gervasi",
        "email": "phil.gervasi@solutional.com"
    }
    ,
    {
        "userId": "1e0d872b-594c-81e5-be86-000260493812",
        "name": "Harvey Kisiangani",
        "email": "harveykisiangani@gmail.com"
    }
    ,
    {
        "userId": "22dd872b-594c-81f8-8099-0002f6600181",
        "name": "Emily Hilbert",
        "email": "emily.hilbert@solutional.com"
    }
    ,
    {
        "userId": "25cd872b-594c-8111-84e3-00020e1da9ea",
        "name": "Harvey Kisiangani",
        "email": "harvey.kisiangani@solutional.com"
    }
    ,
    {
        "userId": "262d872b-594c-816d-9e5e-00029d62603f",
        "name": "Suzanne Ryerson",
        "email": "suzanne@solutional.com"
    }
    ,
    {
        "userId": "264d872b-594c-811e-afe6-0002754d4767",
        "name": "Julia Gervasi",
        "email": "julia.gervasi@solutional.com"
    }
    ,
    {
        "userId": "264d872b-594c-814c-add6-00025b9a6dbe",
        "name": "diana@solutional.com",
        "email": "diana@solutional.com"
    }
    ,
    {
        "userId": "264d872b-594c-814f-be30-0002491914a1",
        "name": "hayden.hoy@solutional.com",
        "email": "hayden.hoy@solutional.com"
    }
    ,
    {
        "userId": "264d872b-594c-8165-a127-000223d1869e",
        "name": "John Medina",
        "email": "john.medina@solutional.com"
    }
    ,
    {
        "userId": "264d872b-594c-817a-a2b1-00022e7966cb",
        "name": "utility@solutional.com",
        "email": "utility@solutional.com"
    }
    ,
    {
        "userId": "264d872b-594c-8181-9dcc-0002a1130067",
        "name": "nikki@solutional.com",
        "email": "nikki@solutional.com"
    }
    ,
    {
        "userId": "264d872b-594c-819c-bb03-0002725087c7",
        "name": "Diana",
        "email": "diana.razonable@solutional.com"
    }
    ,
    {
        "userId": "264d872b-594c-81bd-9ea8-0002b5ca7b01",
        "name": "ian.biana@solutional.com",
        "email": "ian.biana@solutional.com"
    }
    ,
    {
        "userId": "264d872b-594c-81f4-9623-0002780160a1",
        "name": "jo.deguzman@solutional.com",
        "email": "jo.deguzman@solutional.com"
    }
    ,
    {
        "userId": "264d872b-594c-81f6-92be-000247426fce",
        "name": "zak.garland@solutional.com",
        "email": "zak.garland@solutional.com"
    }
    ,
    {
        "userId": "a0aeb683-ecc4-4e9c-8dd2-136239554894",
        "name": "Keegan Dunn",
        "email": "kmdcmd2005@gmail.com"
    }
    ,
    {
        "userId": "ad835b36-8b72-47ab-8db0-b67f8b77c6d1",
        "name": "Stephen Jones",
        "email": "stephenchristopherjones@gmail.com"
    }
    ,
    {
        "userId": "bd1eb041-d113-442c-abd2-0562680fc656",
        "name": "Phil",
        "email": "phillipgervasi@gmail.com"
    }
    ,
    {
        "userId": "136d872b-594c-817b-adaa-00026796be69",
        "name": "James Dirksen",
        "email": "james.dirksen@solutional.com"
    }
    ,
    {
        "userId": "13dd872b-594c-810f-8bb4-000282e27820",
        "name": "Daniel Dirksen",
        "email": "daniel.dirksen@solutional.com"
    }
    ,
    {
        "userId": "145d872b-594c-81bb-960d-0002af602358",
        "name": "Scott Robohn",
        "email": "scott.robohn@solutional.com"
    }
]


export const EXAMPLE_NOTION_USERS_RESPONSE: Record<string, GetUserResponse> = {
    "152d872b-594c-8145-9c2c-000204787b69": {
        object: "user",
        id: "152d872b-594c-8145-9c2c-000204787b69",
        name: "Ceci Kurdelak",
        avatar_url:
            "https://s3-us-west-2.amazonaws.com/public.notion-static.com/78f66135-d1a4-4c17-8217-4e025621539c/20240104_175839_-_Copy_(2).jpg",
        type: "person",
        person: {
            email: "ceci.kurdelak@solutional.com",
        },
    },
    "1e0d872b-594c-81e5-be86-000260493812": {
        object: "user",
        id: "1e0d872b-594c-81e5-be86-000260493812",
        name: "Harvey Kisiangani",
        avatar_url:
            "https://lh3.googleusercontent.com/a/ACg8ocJPEZrdkCpP57gr8TnO-ONwkZl3ZU4gd3KISv81Esya6wGna9Q=s100",
        type: "person",
        person: {
            email: "harveykisiangani@gmail.com",
        },
    },
    "25cd872b-594c-8111-84e3-00020e1da9ea": {
        object: "user",
        id: "25cd872b-594c-8111-84e3-00020e1da9ea",
        name: "Harvey Kisiangani",
        avatar_url:
            "https://lh3.googleusercontent.com/a/ACg8ocLQ3i_IljHwZpP04xXsuwKPcCGmTcP6VujYmPbscA87CUw1Ew=s100",
        type: "person",
        person: {
            email: "harvey.kisiangani@solutional.com",
        },
    },
    "13dd872b-594c-810f-8bb4-000282e27820": {
        object: "user",
        id: "13dd872b-594c-810f-8bb4-000282e27820",
        name: "Daniel Dirksen",
        avatar_url:
            "https://s3-us-west-2.amazonaws.com/public.notion-static.com/bc9f5c02-88ed-4668-971b-c8480fb70fca/DSC_3230.jpg",
        type: "person",
        person: {
            email: "daniel.dirksen@solutional.com",
        },
    },
    "136d872b-594c-817b-adaa-00026796be69": {
        object: "user",
        id: "136d872b-594c-817b-adaa-00026796be69",
        name: "James Dirksen",
        avatar_url: null,
        type: "person",
        person: {
            email: "james.dirksen@solutional.com",
        },
    }
}