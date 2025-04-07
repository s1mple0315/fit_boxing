import { Link } from "react-router-dom";
import LocationPin from "../../../shared/icons/LocationPin";
import Telegram from "../../../shared/icons/Telegram";
import VK from "../../../shared/icons/VK";
import pageData from "../../../data/pages";
import groupPages from "../../../data/groupPages";
import breadcrumbPages from "../../../data/breadcrumbPages";

import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className={`${styles.footerTop} d-flex justify-content-between`}>
        <div className={`${styles.companyInfo} d-flex flex-column`}>
          <Link to={'/'}>
            <img src="assets/header/appLogo.png" alt="" />
          </Link>
          <div className={`${styles.slogan} d-flex flex-column`}>
            <p>Фитнес - как смысл жизни, </p>
            <p>конструируем красивые стройные тела</p>
          </div>
          <div className={`${styles.address} d-flex align-items-center`}>
            <LocationPin /> <p>г. Сочи, пер. Трунова, 6, корп. 2</p>
          </div>
          <h3 className={styles.phone}>8 (928) 431-37-97</h3>
          <div className={`${styles.socialIcons} d-flex`}>
            <Telegram />
            <VK />
          </div>
        </div>
        <div className={styles.services}>
          <h3>Наши услуги</h3>
          <ul
            className="d-flex flex-column"
            style={{ gap: "30px", padding: 0, listStyle: "none" }}
          >
            {pageData.map((page) => (
              <li key={page.slug}>
                <Link
                  to={`/${page.slug}`}
                  style={{
                    color: "#fff",
                    textDecoration: "none",
                    fontSize: "18px",
                  }}
                >
                  {page.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className={styles.price}>
          <h3>Стоимость</h3>
          <ul
            className="d-flex flex-column"
            style={{ gap: "30px", padding: 0, listStyle: "none" }}
          >
            {groupPages.map((page) => (
              <li key={page.slug}>
                <Link
                  to={`/${page.slug}`}
                  style={{
                    color: "#fff",
                    textDecoration: "none",
                    fontSize: "18px",
                  }}
                >
                  {page.title}
                </Link>
              </li>
            ))}
            <li>
              <Link
                to={"/"}
                style={{
                  color: "#fff",
                  textDecoration: "none",
                  fontSize: "18px",
                }}
              >
                Абонементы
              </Link>
            </li>
          </ul>
        </div>
        <div className={styles.forClients}>
          <h3>Для клиентов</h3>
          <ul
            className="d-flex flex-column"
            style={{ gap: "30px", padding: 0, listStyle: "none" }}
          >
            {breadcrumbPages.map((page) => (
              <li key={page.slug}>
                <Link
                  to={`/${page.slug}`}
                  style={{
                    color: "#fff",
                    textDecoration: "none",
                    fontSize: "18px",
                  }}
                >
                  {page.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className={`${styles.footerBottom} d-flex justify-content-between`}>
        <p>2025 FITBOXING</p>
        <p>Политика конфиденциальности</p>
        <p>Договор оферты</p>
        <p>Положение о защите персональных данных</p>
      </div>
    </div>
  );
};

export default Footer;
