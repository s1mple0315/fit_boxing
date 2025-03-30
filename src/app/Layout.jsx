import { useLocation } from "react-router-dom";

import Header from "../components/Layout/Header/Header";
import Footer from "../components/Layout/Footer/Footer";
import Breadcrumb from "../components/Breadcrumbs/Breadcrumb";
import styles from "./Layout.module.css";
import pageData from "../data/pages";
import groupPages from "../data/groupPages";

const Layout = ({ children }) => {
  const location = useLocation();
  const isHomePage = location.pathname === "/";
  return (
    <div className={styles.layout}>
      <Header />
      {!isHomePage && <Breadcrumb pageData={pageData} groupPages={groupPages} />}
      <main >{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
