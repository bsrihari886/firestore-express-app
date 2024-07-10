const admin = require('firebase-admin');
const serviceAccount = require('D:\firestore-express-app\account.json');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

const db = admin.firestore();

module.exports = db;