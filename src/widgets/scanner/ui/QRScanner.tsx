import { IDetectedBarcode, IScannerStyles, Scanner } from "@yudiel/react-qr-scanner";
import { useState } from "react";

//styles
import styles from "./QRScanner.module.scss";

const ScannerStyles: IScannerStyles = {
  container: {
    height: "100vmin",
    width: "100vmin",
  },
}

export const QRScanner = () => {
  const [qr, setQr] = useState<IDetectedBarcode[] | null>(null);
  return (
    <>
      <div className={styles.scanner_container}>
        <Scanner
          styles={{
            ...ScannerStyles
          }}
          onScan={(result) => setQr(result)}
        />
      </div>
      <div>
        {qr?.map((item, i) => <div key={item.rawValue + i}>{item.rawValue}</div>)}
      </div>
    </>
  )
}
