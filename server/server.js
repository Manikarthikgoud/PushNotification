const admin = require('firebase-admin');
const serviceAccount = require('./pushnotif-10b4f-firebase-adminsdk-kcbpk-3f279ffe42.json');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: '************************************************',
});

const database = admin.database();
const deviceTokensRef = database.ref('deviceTokens');

// Function to store a device token
const sendPushNotification = (notification) => {
  return deviceTokensRef.once('value')
    .then((snapshot) => {
      const deviceTokens = Object.keys(snapshot.val() || {});
      const messages = deviceTokens.map((token) => ({
        notification: {
          title: notification.title,
          body: notification.body,
        },
        token,
      }));

      return admin.messaging().sendAll(messages);
    })
    .catch((error) => {
      console.error('Error sending push notifications:', error);
    });
};

// Trigger push notification when a new message is posted
const handleNewMessage = (message) => {
  const notification = {
    title: 'New Message',
    body: message.text
  };
  sendPushNotification(notification);
};

// Example usage in your server-side code
const newMessage = {
  text: 'Hello Mani karthik Goud '
};

// Handle new message and send push notification
handleNewMessage(newMessage);