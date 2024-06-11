import { Outlet } from "react-router-dom";
import { ReactNode } from "react";
import styles from "./mainLayout.module.scss";
interface IProps {
  navigationPanel: ReactNode;
}

export const MainLayout = (
  {
    navigationPanel,
  }: IProps) => {
  return (
    <div className={styles.layoutContainer}>
      <Outlet />
      {navigationPanel}
    </div>
  )
}