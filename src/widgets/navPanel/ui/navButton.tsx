import { NavLink } from "react-router-dom";
import styles from "./navButton.module.scss";
interface IProps {
  path: string;
  label: string;
}

export const NavButton = (
  {
    path,
    label,
  }: IProps
) => {
  return (
    <NavLink className={styles.navButton} to={path}>
      {label}
    </NavLink>
  )

}