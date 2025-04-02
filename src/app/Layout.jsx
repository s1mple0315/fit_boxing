import { useLocation } from "react-router-dom";
import Header from "../components/Layout/Header/Header";
import Footer from "../components/Layout/Footer/Footer";
import Breadcrumb from "../components/Breadcrumbs/Breadcrumb";
import styles from "./Layout.module.css";
import pageData from "../data/pages";
import groupPages from "../data/groupPages";
import Map from "../components/Map/Map";
import MobileApp from "../components/MobileApp/MobileApp";
import breadcrumbPages from "../data/breadcrumbPages";
import Accordion from "../components/Accordion/Accordion";

const accordionSections = [
  {
    title: "Что входит в мой абонемент фитнеса?",
    content: "Вы получите доступ ко всем тренажерам, групповым занятиям и персональным тренерам."
  },
  {
    title: "Какая скидка за друга есть на карте?",
    content: "Скидка составляет 10% за каждого приведенного друга, который оформит абонемент."
  },
  {
    title: "Как получить индивидуальную программу?",
    content: "Мы подготовим индивидуальную программу с комфортным графиком и эффективными тренировками."
  },
  {
    title: "Есть ли ночное посещение зала?",
    content: "Да, наш фитнес-центр работает круглосуточно для всех наших клиентов."
  }
];

const Layout = ({ children }) => {
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  return (
    <div className={styles.layout}>
      <Header />
      {!isHomePage && (
        <Breadcrumb pageData={pageData} groupPages={groupPages} breadcrumbPages={breadcrumbPages} />
      )}
      <main>{children}</main>
      <section className={`${styles.mapSection} container`}>
        <div className={`${styles.mapContainer} d-flex flex-column align-items-center`}>
          <h3>Где мы находимся</h3>
          <Map />
        </div>
      </section>

      <section>
        <MobileApp />
      </section>

      {!isHomePage || (
        <Accordion sections={accordionSections} />
      )}

      <Footer />
    </div>
  );
};

export default Layout;
