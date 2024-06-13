import { FaCamera, FaHome, FaMapMarkedAlt, FaQrcode } from "react-icons/fa";

//module
import { NavButton } from "./navButton";

//styles
import styles from "./navPanel.module.scss";

export const NavPanel = () => {
  return (
    <>
      <div className={styles.navContainer}>
        {/*<BackButton/>*/}
        <NavButton path={"/"} label={""} icon={<FaHome />}/>
        <NavButton path={"/map"} label={""} icon={<FaMapMarkedAlt />}/>
        <NavButton path={"/camera"} label={""} icon={<FaCamera />}/>
        <NavButton path={"/qr_scanner"} label={""} icon={<FaQrcode />}/>
      </div>
    </>
  )
}