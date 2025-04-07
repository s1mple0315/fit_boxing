// src/pages/MobileSchedulePage/MobileSchedulePage.jsx
import { Link } from "react-router-dom";
import Modal from "../../components/Modal/Modal";
import styles from "./MobileSchedulePage.module.css";
import { useState } from "react";

const MobileSchedulePage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleButtonClick = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className={styles.mobileSchedulePage}>
      <section className={styles.scheduleSection}>
        <div className={styles.scheduleContent}>
          <h1>Онлайн расписание занятий</h1>
          <p>Удобное расписание занятий в вашем телефоне.</p>
        </div>

        <Modal isOpen={isModalOpen} onClose={handleCloseModal} />

        <div className={styles.scheduleButton}>
          <img src="assets/pages/buttonIcon.png" alt="" />
          <Link onClick={handleButtonClick}>Записаться на пробное занятие</Link>
        </div>
      </section>
    </div>
  );
};

export default MobileSchedulePage;
