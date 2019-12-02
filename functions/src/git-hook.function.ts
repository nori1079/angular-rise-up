import * as functions from 'firebase-functions';
import * as admin from 'firebase-admin';

admin.initializeApp();

const db = admin.firestore();

const expTable = [
  20,
  40,
  100,
  250,
  500,
  1000,
  1500,
  4000,
  10000
];

const EARN_EXPERIENCE = 10;

export const gitHook = functions.https.onRequest(async (request, response) => {
  const actions = await db.collection('actions')
    .where('ownerGitHubId', '==', request.body.sender.id)
    .get();

  const action = actions.docs[0].data();

  let level = 1;
  expTable.some(nextExp => {
    if (action.exp + EARN_EXPERIENCE > nextExp) {
      level++;
      return false;
    } else {
      return true;
    }
  });

  const increement = admin.firestore.FieldValue.increment(EARN_EXPERIENCE);
  actions.docs.forEach(doc => doc.ref.update({
    exp: increement,
    level
  }));
  response.send('success');
});
