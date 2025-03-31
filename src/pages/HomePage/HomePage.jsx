// src/pages/HomePage/HomePage.jsx
import NavigationGrid from "../../components/NavigationGrid/NavigationGrid";
import TrainingCard from "../../components/TrainingCard/TrainingCard";
import TrainingHall from "../../components/TrainingHall/TrainingHall";
import trainingHalls from "../../data/trainingHalls";
import groupPages from "../../data/groupPages";
import styles from "./HomePage.module.css";
import Button from "../../components/Button/Button";
import NewsSlider from "../../components/Slider/NewsSlider";

const HomePage = () => {
  const imageRows = [
    ["1.png", "2.png", "3.png"],
    ["1.png", "2.png", "3.png"],
    ["1.png", "2.png", "3.png"],
    ["1.png", "2.png", "3.png"],
  ];

  return (
    <div className={styles.homePage}>
      <section className={`${styles.homeTitle} d-flex flex-column`}>
        <div className={styles.homeTitleContent}>
          <div className={styles.homeTitleText}>
            <h1>Фитбоксинг — твой путь к идеальной форме!</h1>
            <p>
              Эффективные тренировки до 800 калорий за час, снятие стресса и
              заряд энергии.
            </p>
            <p>
              Запишись на бесплатное пробное занятие и начни свой путь к
              совершенству уже сегодня!
            </p>
          </div>
          <div className={`${styles.homeTitleButtons} d-flex`}>
            <Button variant="primary" hasArrow={true}>
              Пробное занятие
            </Button>
            <Button variant="secondary">Пробное занятие</Button>
          </div>
        </div>
      </section>

      <NavigationGrid />

      <section className={styles.progressSection}>
        <div
          className={`${styles.progress} d-flex flex-column align-items-center`}
        >
          <h3>Прогресс не заставит тебя ждать</h3>
          <p>
            Тренируйся с удовольствием и достигай видимых результатов уже через
            несколько недель
          </p>
          <p>
            Каждая тренировке - шаг к сильному телу и уверренному настроению
          </p>
        </div>
      </section>

      <section className={styles.trainingCardsSection}>
        <h3>Выбери свой путь к совершенству</h3>
        <div className={styles.trainingCards}>
          {groupPages.map((page) => (
            <TrainingCard
              key={page.slug}
              title={page.title}
              description={page.description}
              price={page.price}
              image={page.image}
              cards={page.cards}
            />
          ))}
        </div>
      </section>

      <section className={styles.trainingHalls}>
        <h3>Просторные залы для спорта</h3>
        {trainingHalls.map((hall) => (
          <TrainingHall
            key={hall.title}
            title={hall.title}
            description={hall.description}
            area={hall.area}
            trainingDirections={hall.trainingDirections}
            image={hall.image}
            layout={hall.layout}
          />
        ))}
      </section>

      <section className={`${styles.weekdaysSection} d-flex flex-column`}>
        <h3>Наши будни</h3>
        {imageRows.map((row, rowIndex) => (
          <div
            key={rowIndex}
            className={`${styles.weekdays} d-flex align-items-center justify-content-center`}
          >
            {row.map((img, imgIndex) => (
              <img key={imgIndex} src={`assets/pages/weekdays/${img}`} alt="" />
            ))}
          </div>
        ))}
      </section>

      <section>
        <NewsSlider />
      </section>
    </div>
  );
};

export default HomePage;
