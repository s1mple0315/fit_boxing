import { useLocation } from "react-router-dom";

import Header from "../components/Layout/Header/Header";
import Footer from "../components/Layout/Footer/Footer";
import Breadcrumb from "../components/Breadcrumbs/Breadcrumb";
import styles from "./Layout.module.css";
import pageData from "../data/pages";
import groupPages from "../data/groupPages";
import Map from "../components/Map/Map";

const Layout = ({ children }) => {
  const location = useLocation();
  const isHomePage = location.pathname === "/";
  return (
    <div className={styles.layout}>
      <Header />
      {!isHomePage && (
        <Breadcrumb pageData={pageData} groupPages={groupPages} />
      )}
      <main>{children}</main>
      <section className={`${styles.mapSection} container`}>
        <div className={`${styles.mapContainer} d-flex flex-column align-items-center`}> 
          <h3>Где мы находимся</h3>
          <Map />
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Layout;
