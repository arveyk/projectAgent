/*
 * function to convert payload to json
 *
 */

const payloadStr = {
  payload:
    '{"type":"block_actions","user":{"id":"U03T772MESH","username":"harveykisiangani","name":"harveykisiangani","team_id":"T03TNQFN62V"},"api_app_id":"A08T4SJP659","token":"cdpGCjWC3RGCqp0yCWWJa3cD","container":{"type":"message","message_ts":"1753425527.891899","channel_id":"C08R4M9P5SM","is_ephemeral":false},"trigger_id":"9252017876229.3940831754097.03c923d7e72a3cf340faef2632f37d39","team":{"id":"T03TNQFN62V","domain":"alxseco"},"enterprise":null,"is_enterprise_install":false,"channel":{"id":"C08R4M9P5SM","name":"task-management"},"message":{"subtype":"bot_message","text":"New Paid Time Off request from Fred Enriquez","type":"message","ts":"1753425527.891899","bot_id":"B0976DMLYUU","blocks":[{"type":"header","block_id":"QZRVZ","text":{"type":"plain_text","text":"New request","emoji":true}},{"type":"section","block_id":"VDnNe","fields":[{"type":"mrkdwn","text":"*Type:*\\nPaid Time Off","verbatim":false},{"type":"mrkdwn","text":"*Created by:*\\n<example.com|Fred Enriquez>","verbatim":false}]},{"type":"section","block_id":"zcsYJ","fields":[{"type":"mrkdwn","text":"*When:*\\nAug 10 - Aug 13","verbatim":false}]},{"type":"actions","block_id":"bBxhy","elements":[{"type":"button","action_id":"uSoeH","text":{"type":"plain_text","text":"Approve","emoji":true},"style":"primary","value":"click_me_123"},{"type":"button","action_id":"Yg6CW","text":{"type":"plain_text","text":"Reject","emoji":true},"style":"danger","value":"click_me_123"}]}]},"state":{"values":{}},"response_url":"https:\\/\\/hooks.slack.com\\/actions\\/T03TNQFN62V\\/9252017836517\\/TkjfCrlsaDm022tPp3xwElcS","actions":[{"action_id":"uSoeH","block_id":"bBxhy","text":{"type":"plain_text","text":"Approve","emoji":true},"value":"click_me_123","style":"primary","type":"button","action_ts":"1753425537.092844"}]}',
};

const payloadStr2 = {
  payload:
    '{"type":"block_actions","user":{"id":"U03T772MESH","username":"harveykisiangani","name":"harveykisiangani","team_id":"T03TNQFN62V"},"api_app_id":"A08T4SJP659","token":"cdpGCjWC3RGCqp0yCWWJa3cD","container":{"type":"message","message_ts":"1753425527.891899","channel_id":"C08R4M9P5SM","is_ephemeral":false},"trigger_id":"9252017876229.3940831754097.03c923d7e72a3cf340faef2632f37d39","team":{"id":"T03TNQFN62V","domain":"alxseco"},"enterprise":null,"is_enterprise_install":false,"channel":{"id":"C08R4M9P5SM","name":"task-management"},"message":{"subtype":"bot_message","text":"New Paid Time Off request from Fred Enriquez","type":"message","ts":"1753425527.891899","bot_id":"B0976DMLYUU","blocks":[{"type":"header","block_id":"QZRVZ","text":{"type":"plain_text","text":"New request","emoji":true}},{"type":"section","block_id":"VDnNe","fields":[{"type":"mrkdwn","text":"*Type:*\\nPaid Time Off","verbatim":false},{"type":"mrkdwn","text":"*Created by:*\\n<example.com|Fred Enriquez>","verbatim":false}]},{"type":"section","block_id":"zcsYJ","fields":[{"type":"mrkdwn","text":"*When:*\\nAug 10 - Aug 13","verbatim":false}]},{"type":"actions","block_id":"bBxhy","elements":[{"type":"button","action_id":"uSoeH","text":{"type":"plain_text","text":"Approve","emoji":true},"style":"primary","value":"click_me_123"},{"type":"button","action_id":"Yg6CW","text":{"type":"plain_text","text":"Reject","emoji":true},"style":"danger","value":"click_me_123"}]}]},"state":{"values":{}},"response_url":"https:\\/\\/hooks.slack.com\\/actions\\/T03TNQFN62V\\/9252017836517\\/TkjfCrlsaDm022tPp3xwElcS","actions":[{"action_id":"uSoeH","block_id":"bBxhy","text":{"type":"plain_text","text":"Approve","emoji":true},"value":"click_me_123","style":"primary","type":"button","action_ts":"1753425537.092844"}]}',
};

const p3 = {
  payload:
    '{"type":"block_actions","user":{"id":"U03T772MESH","username":"harveykisiangani","name":"harveykisiangani","team_id":"T03TNQFN62V"},"api_app_id":"A08T4SJP659","token":"cdpGCjWC3RGCqp0yCWWJa3cD","container":{"type":"message","message_ts":"1753786766.169689","channel_id":"C08R4M9P5SM","is_ephemeral":false},"trigger_id":"9271710811876.3940831754097.f8998550544381a5dee3f9ef801e46b5","team":{"id":"T03TNQFN62V","domain":"alxseco"},"enterprise":null,"is_enterprise_install":false,"channel":{"id":"C08R4M9P5SM","name":"task-management"},"message":{"subtype":"bot_message","text":"New Paid Time Off request from Fred Enriquez","type":"message","ts":"1753786766.169689","bot_id":"B0976DMLYUU","blocks":[{"type":"header","block_id":"QZRVZ","text":{"type":"plain_text","text":"New request","emoji":true}},{"type":"section","block_id":"VDnNe","fields":[{"type":"mrkdwn","text":"*Type:*\\nPaid Time Off","verbatim":false},{"type":"mrkdwn","text":"*Created by:*\\n<example.com|Fred Enriquez>","verbatim":false}]},{"type":"section","block_id":"zcsYJ","fields":[{"type":"mrkdwn","text":"*When:*\\nAug 10 - Aug 13","verbatim":false}]},{"type":"actions","block_id":"bBxhy","elements":[{"type":"button","action_id":"uSoeH","text":{"type":"plain_text","text":"Approve","emoji":true},"style":"primary","value":"click_me_123"},{"type":"button","action_id":"Yg6CW","text":{"type":"plain_text","text":"Reject","emoji":true},"style":"danger","value":"click_me_123"}]}]},"state":{"values":{}},"response_url":"https:\\/\\/hooks.slack.com\\/actions\\/T03TNQFN62V\\/9271710805540\\/0H1SQRGpmvYA50yIyDz3vV7M","actions":[{"action_id":"uSoeH","block_id":"bBxhy","text":{"type":"plain_text","text":"Approve","emoji":true},"value":"click_me_123","style":"primary","type":"button","action_ts":"1753786776.414752"}]}',
};

const payloadStr3 = {
  payload:
    '{"type":"block_actions","user":{"id":"U03T772MESH","username":"harveykisiangani","name":"harveykisiangani","team_id":"T03TNQFN62V"},"api_app_id":"A08T4SJP659","token":"cdpGCjWC3RGCqp0yCWWJa3cD","container":{"type":"message","message_ts":"1754047485.000900","channel_id":"C08R4M9P5SM","is_ephemeral":true},"trigger_id":"9286704801555.3940831754097.10321a067ed24875ac715ca99ce45c78","team":{"id":"T03TNQFN62V","domain":"alxseco"},"enterprise":null,"is_enterprise_install":false,"channel":{"id":"C08R4M9P5SM","name":"task-management"},"state":{"values":{}},"response_url":"https:\\/\\/hooks.slack.com\\/actions\\/T03TNQFN62V\\/9286704801363\\/Zgoypg4OLZD6Z5i70c94nVap","actions":[{"action_id":"actionId-0","block_id":"UG3CF","text":{"type":"plain_text","text":"Approve","emoji":true},"value":"{\\"Task Title\\":\\"Replenish Credit\\",\\"Assignee\\":\\"Albert Hines\\",\\"Due Date\\":\\"2-08-2025\\",\\"Start Date\\":\\"1-08-2025\\",\\"Email\\":\\"albert@example.com\\",\\"Phone Number\\":\\"+211-515-8920\\",\\"Preferred Channel\\":\\"Slack\\",\\"Task Details\\":\\"Hi Albert, our Anthropic credits are out again, could you please look into refilling so that we can get to the Project Agent app?\\"}","style":"primary","type":"button","action_ts":"1754047491.143676"}]}',
};

const payloadStr4 = {
  payload:
    '{"type":"block_actions","user":{"id":"U08UDKY38QK","username":"harveykisiangani","name":"harveykisiangani","team_id":"T08VADHH17S"},"api_app_id":"A0935EDQRHB","token":"JWNJnukcVaHbRoRl6CwWYan6","container":{"type":"message","message_ts":"1754332155.000300","channel_id":"C08VADJ7SEL","is_ephemeral":true},"trigger_id":"9302258314498.8996459579264.06205e9e082b4a6ed987da5d76382df9","team":{"id":"T08VADHH17S","domain":"solutionalpro-1c61413"},"enterprise":null,"is_enterprise_install":false,"channel":{"id":"C08VADJ7SEL","name":"all-solutional-project-agent"},"state":{"values":{}},"response_url":"https:\\/\\/hooks.slack.com\\/actions\\/T08VADHH17S\\/9302258309234\\/C7LbyUbWYeY5JDI0tJfdZxPb","actions":[{"action_id":"actionId-0","block_id":"JiHFo","text":{"type":"plain_text","text":"Approve","emoji":true},"value":"{\\"tasktitle\\":\\"Feed the cats daily\\",\\"assignee\\":\\"Josh\\",\\"duedate\\":\\"2023-08-07\\",\\"startdate\\":\\"2023-08-01\\",\\"phonenumber\\":\\"123-456-7890\\",\\"email\\":\\"josh@example.com\\",\\"preferredChannel\\":\\"Slack\\",\\"taskdetail\\":\\"Feed the cats every day. Give them their pills and ensure they have enough clean water.\\"}","style":"primary","type":"button","action_ts":"1754332162.717920"}]}',
};

const payloadStr5 = {
  payload:
    '{"type":"block_actions","user":{"id":"U08UDKY38QK","username":"harveykisiangani","name":"harveykisiangani","team_id":"T08VADHH17S"},"api_app_id":"A0935EDQRHB","token":"JWNJnukcVaHbRoRl6CwWYan6","container":{"type":"message","message_ts":"1754419668.004500","channel_id":"C08VADJ7SEL","is_ephemeral":true},"trigger_id":"9306879423365.8996459579264.392a2f57f8c9a5c9299ef5df069a8b1d","team":{"id":"T08VADHH17S","domain":"solutionalpro-1c61413"},"enterprise":null,"is_enterprise_install":false,"channel":{"id":"C08VADJ7SEL","name":"all-solutional-project-agent"},"state":{"values":{"CCRO7":{"plain_text_input-action0":{"type":"plain_text_input","value":"franklin@example.com"}},"JIcMD":{"plain_text_input-action":{"type":"plain_text_input","value":"097-389-839-1038"}}}},"response_url":"https:\\/\\/hooks.slack.com\\/actions\\/T08VADHH17S\\/9306879416597\\/mfilvTsilTxhw75fsMG54CeQ","actions":[{"action_id":"actionId-0","block_id":"dC8lj","text":{"type":"plain_text","text":"Approve","emoji":true},"value":"{\\"tasktitle\\":\\"Add Franklin bug books about American History\\",\\"assignee\\":\\"Franklin\\",\\"duedate\\":\\"2025-06-08\\",\\"startdate\\":\\"2025-06-07\\",\\"preferredChannel\\":\\"phone\\",\\"taskdetail\\":\\"Add bug books about American History to the collection. Call if any additional information or clarification is needed.\\"}","style":"primary","type":"button","action_ts":"1754419737.198841"}]}',
};
const payloadStr6 ={"payload":"{\"type\":\"block_actions\",\"user\":{\"id\":\"U08UDKY38QK\",\"username\":\"harveykisiangani\",\"name\":\"harveykisiangani\",\"team_id\":\"T08VADHH17S\"},\"api_app_id\":\"A0935EDQRHB\",\"token\":\"JWNJnukcVaHbRoRl6CwWYan6\",\"container\":{\"type\":\"message\",\"message_ts\":\"1754945000.002500\",\"channel_id\":\"C08VADJ7SEL\",\"is_ephemeral\":true},\"trigger_id\":\"9336493157509.8996459579264.58cbe006a40a8851ccc9484672221150\",\"team\":{\"id\":\"T08VADHH17S\",\"domain\":\"solutionalpro-1c61413\"},\"enterprise\":null,\"is_enterprise_install\":false,\"channel\":{\"id\":\"C08VADJ7SEL\",\"name\":\"all-solutional-project-agent\"},\"state\":{\"values\":{\"rxXbd\":{\"email_id\":{\"type\":\"plain_text_input\",\"value\":\"frankwithme@solutions.com\"}}}},\"response_url\":\"https:\\/\\/hooks.slack.com\\/actions\\/T08VADHH17S\\/9336493084261\\/aon6oyNMk0jG3uqO1zVHHelN\",\"actions\":[{\"action_id\":\"actionId-0\",\"block_id\":\"OqIi0\",\"text\":{\"type\":\"plain_text\",\"text\":\"Submit\",\"emoji\":true},\"value\":\"{\\\"tasktitle\\\":\\\"Call doctor and book appointment\\\",\\\"assignee\\\":\\\"Frank\\\",\\\"duedate\\\":\\\"2025-08-15T00:00:00.000+00:00\\\",\\\"startdate\\\":\\\"2025-08-11T20:41:00.000+00:00\\\",\\\"phonenumber\\\":\\\" \\\",\\\"email\\\":\\\" \\\",\\\"preferredchannel\\\":\\\"Email\\\",\\\"taskdetail\\\":\\\"Call the doctor and book an appointment for Friday\\\",\\\"project\\\":\\\"\\\",\\\"url\\\":\\\"https:\\/\\/www.notion.so\\/Call-doctor-and-book-appointment-24c7b3ca5344817ab0c9c5096470051f\\\",\\\"pageID\\\":\\\"24c7b3ca-5344-817a-b0c9-c5096470051f\\\"}\",\"style\":\"primary\",\"type\":\"button\",\"action_ts\":\"1754945052.833033\"}]}"}
 
const jsonPayload = JSON.parse(payloadStr6.payload);
console.log("Payload ", jsonPayload);
console.log("Payload Message", jsonPayload.message);

const taskDetails = JSON.parse(jsonPayload.actions[0].value);
console.log(taskDetails.Email);

const taskDetailsObj = JSON.parse(jsonPayload["actions"][0].value);

const actionKeysArr = Object.keys(jsonPayload.state.values);
const userInputs = jsonPayload.state.values;
console.log("UserInputs", userInputs);

actionKeysArr.map((key) => {
  const actionIdKey = Object.keys(userInputs[key]);
  console.log("actionIdKey", actionIdKey[0]);
  switch (actionIdKey[0]) {
    case "task_title_id":
      console.log(jsonPayload.state.values[key][actionIdKey]["value"]);
      break;
    case "assignee_id":
      console.log(jsonPayload.state.values[key][actionIdKey]["value"]);
      break;
    case "due_date_id":
      console.log(jsonPayload.state.values[key][actionIdKey]["value"]);
      break;
    case "start_date_id":
      console.log(jsonPayload.state.values[key][actionIdKey]["value"]);
      break;
    case "email_id":
      console.log(jsonPayload.state.values[key][actionIdKey]["value"]);
      break;
    case "phone_number_id":
      console.log(jsonPayload.state.values[key][actionIdKey]["value"]);
      break;
    case "preferred_channel_id":
      console.log(jsonPayload.state.values[key][actionIdKey]["value"]);
      break;
    case "plain_text_input-action0":
      console.log("pxt0", jsonPayload.state.values[key][actionIdKey]["value"]);
      break;
    case "plain_text_input-action":
      console.log("pxt", userInputs[key][actionIdKey]["value"]);
      break;
  }
});
