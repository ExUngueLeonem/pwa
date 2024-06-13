import { FaMapMarkedAlt } from "react-icons/fa";

//module
import { NavButton } from "./navButton";

//styles
import styles from "./navPanel.module.scss";
import { BackButton } from "./backButton";

export const NavPanel = () => {
  return (
    <>
      <div className={styles.navContainer}>
        <BackButton/>
        <NavButton path={"/map"} label={"Карта"} icon={<FaMapMarkedAlt />}/>
        <NavButton path={"/map"} label={"Карта"}/>
        <NavButton path={"/map"} label={"Карта"}/>
      </div>
    </>
  )
}