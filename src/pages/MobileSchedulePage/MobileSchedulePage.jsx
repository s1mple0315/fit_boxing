// src/pages/MobileSchedulePage/MobileSchedulePage.jsx
import { Link } from "react-router-dom";
import styles from "./MobileSchedulePage.module.css";

const MobileSchedulePage = () => {
  return (
    <div className={styles.mobileSchedulePage}>
      <section className={styles.scheduleSection}>
        <div className={styles.scheduleContent}>
          <h1>Мобильное расписание занятий</h1>
          <p>Удобное расписание занятий в вашем телефоне.</p>
        </div>

        <div className={styles.scheduleButton}>
          <img src="assets/pages/buttonIcon.png" alt="" />
          <Link>Записаться на пробное занятие</Link>
        </div>
      </section>
    </div>
  );
};

export default MobileSchedulePage;
