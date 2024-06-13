import { useNavigate } from "react-router-dom";
import styles from "./navPanel.module.scss";
import { NavButton } from "./navButton";
import { FaMapMarkedAlt } from "react-icons/fa";

export const NavPanel = () => {
  const navigate = useNavigate();
  const goBack = () => navigate(-1)
  return (
    <>
      <div className={styles.navContainer}>

        <button onClick={goBack}>
          назад
        </button>

        <NavButton path={"/map"} label={"Карта"} icon={<FaMapMarkedAlt />}/>
        <NavButton path={"/map"} label={"Карта"}/>
        <NavButton path={"/map"} label={"Карта"}/>
      </div>
    </>
  )
}