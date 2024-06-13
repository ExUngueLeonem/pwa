import { FaCamera, FaHome, FaMapMarkedAlt } from "react-icons/fa";

//module
import { NavButton } from "./navButton";

//styles
import styles from "./navPanel.module.scss";

export const NavPanel = () => {
  return (
    <>
      <div className={styles.navContainer}>
        {/*<BackButton/>*/}
        <NavButton path={"/"} label={"Главная"} icon={<FaHome />}/>
        <NavButton path={"/map"} label={"Карта"} icon={<FaMapMarkedAlt />}/>
        <NavButton path={"/camera"} label={"Камера"} icon={<FaCamera />}/>
        <NavButton path={"/map"} label={"Карта"}/>
      </div>
    </>
  )
}