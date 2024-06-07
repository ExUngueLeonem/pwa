import { useState } from 'react';
import reactLogo from './assets/react.svg';
import appLogo from '/favicon.svg';
import PWABadge from './PWABadge.tsx';
import './App.css';

function App() {
  const [count, setCount] = useState(0)

  const [log, setLog] = useState("");
  const logText = JSON.parse(JSON.stringify(log));

  const onNotificationHandler = async () => {
    // if (!("Notification" in window)) {
    //   // Check if the browser supports notifications
    //   alert("This browser does not support desktop notification");
    // } else if (Notification.permission === "granted") {
    //   // Check whether notification permissions have already been granted;
    //   // if so, create a notification
    //   const notification = new Notification("Hi there!");
    // } else if (Notification.permission !== "denied") {
    //   // We need to ask the user for permission
    //   Notification.requestPermission().then((permission) => {
    //     // If the user accepts, let's create a notification
    //     if (permission === "granted") {
    //       const notification = new Notification("Hi there!");
    //     }
    //   });
    // }
    //
    //


    const res = await Notification.requestPermission();
    setLog(res);
  }

  const onGetNotificationHandler = () => {
    const notifTitle = "хуй";
    const notifBody = `Пизда джигурда`;
    const options = {
      body: notifBody,
    };
    new Notification(notifTitle, options);
    // setTimeout(onGetNotificationHandler, 1000);
  }

  // PushManager
  // console.log(new PushSubscription())

  // ServiceWorkerRegistration

  //https://github.com/michaelbrusegard/WebGL-Fluid-Enhanced/tree/main

  // navigator.serviceWorker.register()
  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={appLogo} className="logo" alt="react-vite-pwa-sample logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>react-vite-pwa-sample</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>

        <button onClick={onNotificationHandler}>
          Получить разрешение
        </button>
        <p>
          {logText}
        </p>

        <button onClick={onGetNotificationHandler}>
          Получить уведомление
        </button>

      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <PWABadge />
    </>
  )
}

export default App
