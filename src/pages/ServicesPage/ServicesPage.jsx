import { Link } from "react-router-dom";

import styles from "./ServicesPage.module.css";
import Modal from "../../components/Modal/Modal";
import pageData from "../../data/pages";
import Card from "../../components/Card/Card";
import { useState } from "react";

const ServicesPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleButtonClick = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className={styles.servicesPage}>
      <section className={styles.servicesSection}>
        <div className={styles.serviceContent}>
          <h1>Услуги нашего фитнеса</h1>
          <p>
            Фитнес для детей и взрослых в оборудованных залах. Форматы
            тренировок: индивидуальные, сплит (2 человека), малая группа (до 8
            человек)..
          </p>
        </div>

        <div className={styles.serviceButton}>
          <img src="assets/pages/buttonIcon.png" alt="" />
          <Link onClick={handleButtonClick}>Записаться на пробное занятие</Link>
        </div>
      </section>

      <Modal isOpen={isModalOpen} onClose={handleCloseModal} />

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
