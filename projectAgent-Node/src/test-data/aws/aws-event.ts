import { APIGatewayProxyEventV2 } from "aws-lambda";

export const event: APIGatewayProxyEventV2 = {
    "version": "2.0",
    "routeKey": "$default",
    "rawPath": "/slashcmd",
    "rawQueryString": "",
    "headers": {
        "content-length": "469",
        "x-amzn-tls-version": "TLSv1.3",
        "x-forwarded-proto": "https",
        "x-forwarded-port": "443",
        "x-forwarded-for": "3.236.252.159",
        "accept": "application/json,*/*",
        "x-amzn-tls-cipher-suite": "TLS_AES_128_GCM_SHA256",
        "x-amzn-trace-id": "Root=1-691d0f02-289dfd2e084e29f83c41ed22",
        "host": "ffibu7pr5dl76qgxqwf6p4yk7y0hvnoy.lambda-url.us-west-2.on.aws",
        "content-type": "application/x-www-form-urlencoded",
        "x-slack-request-timestamp": "1763512065",
        "x-slack-signature": "v0=5afcce2cdd17bd9a978de858b6f6257176364b996274d1866fdcd53d791c4243",
        "accept-encoding": "gzip,deflate",
        "user-agent": "Slackbot 1.0 (+https://api.slack.com/robots)"
    },
    "requestContext": {
        "accountId": "anonymous",
        "apiId": "ffibu7pr5dl76qgxqwf6p4yk7y0hvnoy",
        "domainName": "ffibu7pr5dl76qgxqwf6p4yk7y0hvnoy.lambda-url.us-west-2.on.aws",
        "domainPrefix": "ffibu7pr5dl76qgxqwf6p4yk7y0hvnoy",
        "http": {
            "method": "POST",
            "path": "/slashcmd",
            "protocol": "HTTP/1.1",
            "sourceIp": "3.236.252.159",
            "userAgent": "Slackbot 1.0 (+https://api.slack.com/robots)"
        },
        "requestId": "2bc58c13-5971-41ee-a51b-725aeec244e7",
        "routeKey": "$default",
        "stage": "$default",
        "time": "19/Nov/2025:00:27:46 +0000",
        "timeEpoch": 1763512066035
    },
    "body": "dG9rZW49Y2hOcFF3NEZrbnpPRlZZZ3BkVnF0d3BlJnRlYW1faWQ9VDA4VkFESEgxN1MmdGVhbV9kb21haW49c29sdXRpb25hbHByby0xYzYxNDEzJmNoYW5uZWxfaWQ9QzA4VkFESjdTRUwmY2hhbm5lbF9uYW1lPWFsbC1zb2x1dGlvbmFsLXByb2plY3QtYWdlbnQmdXNlcl9pZD1VMDhWQURITkcwRyZ1c2VyX25hbWU9Y3JrdXJkZWxhayZjb21tYW5kPSUyRnRpbWVseS1sYW1iZGEmdGV4dD1hZGQrSGVsbG8rJTNBMyZhcGlfYXBwX2lkPUEwOVJXSEVHVENQJmlzX2VudGVycHJpc2VfaW5zdGFsbD1mYWxzZSZyZXNwb25zZV91cmw9aHR0cHMlM0ElMkYlMkZob29rcy5zbGFjay5jb20lMkZjb21tYW5kcyUyRlQwOFZBREhIMTdTJTJGOTk1OTM5MzE4NDQwMSUyRlAxOHhacFUyZDJQV3BFS2ppQ1BuUlNGViZ0cmlnZ2VyX2lkPTk5NTAwNTgzOTE3NDguODk5NjQ1OTU3OTI2NC4xN2NkNzgzZTAzYTJjODE4ZDEwNGUzNWFiNzU2Mzk5NQ==",
    "isBase64Encoded": true
}
