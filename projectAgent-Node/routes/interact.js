import axios from 'axios';


function interactionsHandler (request, response, next) {
  console.log(request.body);
  response.status(200).send('Interactions received');
}

export default interactionsHandler;
