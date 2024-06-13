import { NavLink } from "react-router-dom";
import styles from "./navButton.module.scss";
import { ReactNode } from "react";

interface IProps {
  path: string;
  label: string;
  icon?: ReactNode;
}

export const NavButton = (
  {
    path,
    label,
    icon,
  }: IProps
) => {
  return (
    <NavLink className={styles.navButton} to={path}>
      <div className={styles.icon_container}>
        {icon}
      </div>
      <div>
        {label}
      </div>
    </NavLink>
  )
}