import * as functions from 'firebase-functions';
import * as admin from 'firebase-admin';

admin.initializeApp();

const db = admin.firestore();

export const gitHook = functions.https.onRequest(async (request, response) => {
  const actions = await db.collection('actions')
    .where('ownerGitHubId', '==', request.body.sender.id)
    .get()

  const increement = admin.firestore.FieldValue.increment(10);
  actions.docs.forEach(doc => doc.ref.update({
    exp: increement
  }))
  response.send('success');
});
