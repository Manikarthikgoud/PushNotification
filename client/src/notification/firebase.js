// Import the functions you need from the SDKs you need
import firebase from 'firebase/compat/app';
import 'firebase/compat/messaging';
import 'firebase/compat/database';

const firebaseConfig = {
    apiKey: "************************************************",
    authDomain: "************************************************",
    projectId: "************************************************",
    storageBucket: "************************************************",
    messagingSenderId: "************************************************",
    appId: "************************************************",
    measurementId: "************************************************"
  };

// const app = initializeApp(firebaseConfig);
// export const messaging = getMessaging(app);

// export const generteToken=async ()=>{
//     const permission=await Notification.requestPermission();
//     console.log(permission)
//     if(permission==="granted"){
//         const token = await getToken(messaging,{
//             vapidKey:"BGIstfEfKFnMcYTDyOWf2ynxB8azBjWArQXVyPQXrYt8Gv5hDNnSj_NTwDDf1dopbXR8bpqpdqBbd0bsz25B9O8",
//         } );
//         console.log(token);
//     }
// };
const app = firebase.initializeApp(firebaseConfig);
const messaging = firebase.messaging();
const database = firebase.database();

export { app, messaging, database };
