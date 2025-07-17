import axios from 'axios';


const postHandler = function(request, response, next) {
    try {
      console.log(`I Handle most events. Any tasks for me?
	 Request Body: ${JSON.stringify(request.body)}`);
      const eventResURL = 'https://slack.com/api/chat.postMessage';
      (async () => {
        try {
          if (request.body['api_app_id'] !== 'A08T4SJP659') {
            const res = await axios.post(eventResURL, {
              channel: '#task-management',
              text: request.body['event']['text'],
            }, {
             headers: {
               "Authorization": `Bearer ${process.env['SLACK_BOT_TOKEN']}`,
               "Content-Type": "application/x-www-form-urlencoded",
	     }
	    });
            console.log(res.data);
	  }
	} catch (err) {
          console.error(err);
        }
      })();

    } catch (err){
        console.log(err);
        response.status(500).send(`Error and Body${request.body}`);
    }
  next();
}

export default postHandler;
