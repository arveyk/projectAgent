import { GetUserResponse } from "@notionhq/client"

export const EXAMPLE_ALL_NOTION_USERS = [
    {
        "userId": "drews-id-0002e9e2cf87",
        "name": "Drew Davidson",
        "email": "drew.dave@shared-domain.com"
    }
    ,
    {
        "userId": "ramonas-id-000204787b69",
        "name": "Ramona Madison",
        "email": "ramadison@my-domain.com"
    }
    ,
    {
        "userId": "kate-wilsons-id-00024470271f",
        "name": "Kate Wilson",
        "email": "katewilson@bond.com"
    }
    ,
    {
        "userId": "nickfurrys-id-0002632ed5fc",
        "name": "Nick Furry",
        "email": "nick.furry@shared-mail.com"
    }
    ,
    {
        "userId": "nairobis-id-0002a90b5da6",
        "name": "Nairobi",
        "email": "nairobi@shared-domain.com"
    }
    ,
    {
        "userId": "philemons-id-00027369acef",
        "name": "Philemon Bocherini",
        "email": "philemon.bocherini@shared-domain.com"
    }
    ,
    {
        "userId": "bills-id-000260493812",
        "name": "Bill Withers",
        "email": "billywithers@my-domain.com"
    }
    ,
    {
        "userId": "amandas-id-0002f6600181",
        "name": "Emily Amanda",
        "email": "emily.amanda@shared-domain.com"
    }
    ,
    {
        "userId": "harveys-id-00020e1da9ea",
        "name": "Harvey Spectre",
        "email": "harvey.spectre@shared-domain.com"
    }
    ,
    {
        "userId": "suzannas-id-00029d62603f",
        "name": "Suzanne Rhoda",
        "email": "suzanne@shared-domain.com"
    }
    ,
    {
        "userId": "joannas-id-0002754d4767",
        "name": "Joanna Bocherini",
        "email": "joanna.bocherini@shared-domain.com"
    }
    ,
    {
        "userId": "dianas-id-00025b9a6dbe",
        "name": "diana@shared-domain.com",
        "email": "diana@shared-domain.com"
    }
    ,
    {
        "userId": "haydens-id-0002491914a1",
        "name": "hayden.seek@shared-domain.com",
        "email": "hayden.seek@shared-domain.com"
    }
    ,
    {
        "userId": "johns-id-000223d1869e",
        "name": "John Mendelsohn",
        "email": "john.mendelsohn@shared-domain.com"
    }
    ,
    {
        "userId": "utilitys-id-00022e7966cb",
        "name": "utility@shared-domain.com",
        "email": "utility@shared-domain.com"
    }
    ,
    {
        "userId": "nikkitas-id-0002a1130067",
        "name": "nikkita@shared-domain.com",
        "email": "nikkita@shared-domain.com"
    }
    ,
    {
        "userId": "dianas-id-0002725087c7",
        "name": "Diana",
        "email": "diana.amazon@shared-domain.com"
    }
    ,
    {
        "userId": "ians-id-0002b5ca7b01",
        "name": "ian.duncan@shared-domain.com",
        "email": "ian.duncan@shared-domain.com"
    }
    ,
    {
        "userId": "joes-id-0002780160a1",
        "name": "joe.de_man@shared-domain.com",
        "email": "joe.de_man@shared-domain.com"
    }
    ,
    {
        "userId": "zaks-id-000247426fce",
        "name": "zak.green@shared-domain.com",
        "email": "zak.green@shared-domain.com"
    }
    ,
    {
        "userId": "kevins-id-136239554894",
        "name": "Kevin Debussy",
        "email": "kdkamado2005@my-domain.com"
    }
    ,
    {
        "userId": "jeremys-id-b67f8b77c6d1",
        "name": "Jeremy Jones",
        "email": "jeremyjones@my-domain.com"
    }
    ,
    {
        "userId": "philemons-id-0562680fc656",
        "name": "Philemon",
        "email": "philemonbocherini@my-domain.com"
    }
    ,
    {
        "userId": "james-id-00026796be69",
        "name": "James Bond",
        "email": "james.bond@shared-domain.com"
    }
    ,
    {
        "userId": "mavericks-id-000282e27820",
        "name": "Maverick Bond",
        "email": "maverick.bond@shared-domain.com"
    }
    ,
    {
        "userId": "scotts-id-0002af602358",
        "name": "Scott Rhymes",
        "email": "scotty.rhymes@shared-domain.com"
    }
]


export const EXAMPLE_NOTION_USERS_RESPONSE: Record<string, GetUserResponse> = {
    "ramonas-id-000204787b69": {
        object: "user",
        id: "ramonas-id-000204787b69",
        name: "Ramona Madison",
        avatar_url: "placeholder-avatar-url",
            
        type: "person",
        person: {
            email: "ramona.madison@shared-domain.com",
        },
    },
    "harveys-id-000260493812": {
        object: "user",
        id: "harveys-id-000260493812",
        name: "Harvey Spectre",
        avatar_url: "placeholder-avatar-url",
            
        type: "person",
        person: {
            email: "harveyspectre@my-domain.com",
        },
    },
    "harveys-id-00020e1da9ea": {
        object: "user",
        id: "harveys-id-00020e1da9ea",
        name: "Harvey Spectre",
        avatar_url:
            "placeholder-avatar-url",
        type: "person",
        person: {
            email: "harvey.spectre@shared-domain.com",
        },
    },
    "mavericks-id-000282e27820": {
        object: "user",
        id: "mavericks-id-000282e27820",
        name: "Maverick Bond",
        avatar_url: "placeholder-avatar-url",
        type: "person",
        person: {
            email: "maverick.bond@shared-domain.com",
        },
    },
    "james-id-00026796be69": {
        object: "user",
        id: "james-id-00026796be69",
        name: "James Bond",
        avatar_url: null,
        type: "person",
        person: {
            email: "james.bond@shared-domain.com",
        },
    }
}