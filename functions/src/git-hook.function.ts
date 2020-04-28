import * as functions from 'firebase-functions';

export const gitHook = functions.https.onRequest((request, response) => {
  console.log(request.body);
  response.send('success');
});
