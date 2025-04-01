import { Link } from "react-router-dom";

import styles from "./ServicesPage.module.css";
import pageData from "../../data/pages";
import Card from "../../components/Card/Card";

const ServicesPage = () => {
  return (
    <div className={styles.servicesPage}>
      <section className={styles.servicesSection}>
        <div className={styles.serviceContent}>
          <h1>Мобильное расписание занятий</h1>
          <p>Удобное расписание занятий в вашем телефоне.</p>
        </div>

        <div className={styles.serviceButton}>
          <img src="assets/pages/buttonIcon.png" alt="" />
          <Link>Записаться на пробное занятие</Link>
        </div>
      </section>

      <section className={styles.cardsSection}>
        {pageData.map((page) => {
          return (
            <Card
              key={page.slug}
              title={page.title}
              description={page.description}
              url={`/${page.slug}`}
              slug={page.slug}
            />
          );
        })}
      </section>
    </div>
  );
};

export default ServicesPage;
