import { initializeApp } from "firebase/app";
import { getMessaging, getToken, onMessage } from "firebase/messaging";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_apiKey,
  authDomain: import.meta.env.VITE_authDomain,
  projectId: import.meta.env.VITE_projectId,
  storageBucket: import.meta.env.VITE_storageBucket,
  messagingSenderId: import.meta.env.VITE_messagingSenderId,
  appId: import.meta.env.VITE_appId,
  measurementId: import.meta.env.VITE_measurementId,
};

initializeApp(firebaseConfig);

const messaging = getMessaging();

export const requestForToken = () => {
  return getToken(messaging, { vapidKey: import.meta.env.VITE_PUSH_VAPID })
    .then((currentToken) => {
      if (currentToken) {
        console.log("current token for client: ", currentToken)
      } else {
        console.log("No registration token available. Request permission to generate one.")
      }
    })
    .catch((e) => {
      console.log("an error occurred while retrieving token", e)
    })
}

export const onMessageListener = () =>
  new Promise((resolve) => {
    onMessage(messaging, (payload) => {
      console.log("payload", payload);
      resolve(payload);
    })
  })


// Retrieve firebase messaging
// const messaging = firebase.messaging();

// messaging.onBackgroundMessage(function(payload) {
//   console.log('Received background message ', payload);
//   // Customize notification here
//   const notificationTitle = payload.notification.title;
//   const notificationOptions = {
//     body: payload.notification.body,
//   };
//
//   self.registration.showNotification(notificationTitle,
//     notificationOptions);
// });