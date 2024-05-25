// Give the service worker access to Firebase Messaging.
// Note that you can only use Firebase Messaging here. Other Firebase libraries
// are not available in the service worker.
importScripts('https://www.gstatic.com/firebasejs/8.10.1/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/8.10.1/firebase-messaging.js');

// Initialize the Firebase app in the service worker by passing in
// your app's Firebase config object.
// https://firebase.google.com/docs/web/setup#config-object
firebase.initializeApp({
    
        apiKey: "AIzaSyA_pOMSQXIGL8ts4RqRHmiCEd04N6McTPc",
        authDomain: "pushnotif-10b4f.firebaseapp.com",
        projectId: "pushnotif-10b4f",
        storageBucket: "pushnotif-10b4f.appspot.com",
        messagingSenderId: "134962564792",
        appId: "1:134962564792:web:6c8ae527b551a9e8ccae4d",
        measurementId: "G-W0S1PSGXQQ"
      
      });

// Retrieve an instance of Firebase Messaging so that it can handle background
// messages.
const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
    console.log(
      '[firebase-messaging-sw.js] Received background message ',
      payload
    );
    // Customize notification here
    const notificationTitle = payload.notification.title;
    const notificationOptions = {
      body: payload.notification.body,
      icon: payload.notification.image,
    };
  
    self.registration.showNotification(notificationTitle, notificationOptions);
  });