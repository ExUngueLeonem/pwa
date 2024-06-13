import Webcam from "react-webcam";

import styles from "./camera.module.scss";
import { useCallback, useEffect, useRef, useState } from "react";

const videoConstraintsDefault = {
  width: 1280,
  height: 720,
  facingMode: "front"
};

export const Camera = () => {
  const ref = useRef<HTMLDivElement | null>(null)
  const [size, setSize] = useState<{ width: number, height: number } | null>(null);
  const [deviceId, setDeviceId] = useState<string>("");
  const [devices, setDevices] = useState<MediaDeviceInfo[] | null>(null);

  useEffect(() => {
    if (!ref?.current) return
    const height = ref?.current.offsetHeight
    const width = ref?.current.offsetWidth
    setSize({ width, height })
  }, [])

  const handleDevices = useCallback(
    (mediaDevices: MediaDeviceInfo[]) =>
      setDevices(mediaDevices.filter(({ kind }) => kind === "videoinput")),
    [setDevices]
  );

  useEffect(() => {
    navigator.mediaDevices.enumerateDevices().then((devs) => handleDevices(devs))
  }, [handleDevices])

  return (
    <>
      <div
        className={styles.camera_container}
        ref={ref}
      >
        {size &&
          <Webcam
            height={size?.height}
            width={size?.width}
            videoConstraints={{
              ...videoConstraintsDefault,
              deviceId,
            }}
          />
        }
      </div>
      <div style={{ display: "flex", justifyContent: "space-between", padding: "5px" }}>
        {devices &&
          devices.map(item => {
            return (
              <button
                style={{
                  padding: "10px",
                  backgroundColor: item.deviceId === deviceId ? "teal" : "inherit"
                }}
                key={item.deviceId}
                onClick={() => setDeviceId(item.deviceId)}
              >
                {item.label}
              </button>
            )
          })
        }
      </div>
    </>
  )
}