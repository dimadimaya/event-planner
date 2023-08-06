import { Outlet } from "react-router-dom";
// import styles from "./Layout.module.css";
import { Header } from "../Header/Header";

export const Layout = () => {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
};
