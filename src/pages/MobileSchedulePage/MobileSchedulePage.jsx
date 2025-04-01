// src/pages/MobileSchedulePage/MobileSchedulePage.jsx
import styles from "./MobileSchedulePage.module.css";

const MobileSchedulePage = () => {
  return (
    <div className={styles.mobileSchedulePage}>
      <section className={styles.scheduleSection}>
        <h1>Мобильное расписание занятий</h1>
        <p>Удобное расписание занятий в вашем телефоне.</p>
      </section>
    </div>
  );
};

export default MobileSchedulePage;