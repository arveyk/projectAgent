import axios from "axios";

export function sendQuickOKResponseToSlack(
  response_url: string,
  SLACK_BOT_TOKEN: string,
) {
  axios({
    method: "post",
    url: response_url,
    data: {
      status: 200,
    },
    headers: {
      Authorization: `Bearer ${SLACK_BOT_TOKEN}`,
      "Content-Type": "application/json; charset=UTF-8",
    },
    family: 4,
  })
    .then((Response) => {
      console.log("Update msg", Response);
    })
    .catch((err) => {
      console.log("AXIOS ERROR sending quick response", err);
    });
}
