import { useEffect, useState } from "react";
import { reactLogo, viteLogo } from "shared/assets";

export const HomePage = () => {
  const [log, setLog] = useState("");
  const logText = JSON.parse(JSON.stringify(log));

  const onNotificationHandler = async () => {
    const res = await Notification.requestPermission();
    setLog(res);
  }



  useEffect(() => {
    onNotificationHandler()
  }, [])

  useEffect(() => {
    PushManager.name
  }, [])

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
          <img
            style={{width: "150px"}}
            src={viteLogo} className="logo" alt="react-vite-pwa-sample logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img
            style={{width: "150px"}}
            src={reactLogo} className="logo react" alt="React logo" />
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

      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>

      {/*<Fluid />*/}
    </>
  )
}