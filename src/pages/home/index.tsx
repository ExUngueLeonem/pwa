import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { Geolocation } from "feature/geolocation";
import { reactLogo, viteLogo } from "shared/assets";
import { Fluid, PWABadge } from "shared/ui";

export const HomePage = () => {
  const navigate = useNavigate();
  const [log, setLog] = useState("");
  const logText = JSON.parse(JSON.stringify(log));

  const onNotificationHandler = async () => {
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

  // navigator.serviceWorker.register()
  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="react-vite-pwa-sample logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>react-vite-pwa-sample</h1>
      <div className="card">

        <button onClick={onNotificationHandler}>
          Получить разрешение
        </button>
        <p>
          {logText}
        </p>

        <button onClick={onGetNotificationHandler}>
          Получить уведомление
        </button>

        <button onClick={() => navigate("/map")}>
          карта
        </button>

      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <PWABadge />
      <Fluid />
      <Geolocation /></>
  )
}