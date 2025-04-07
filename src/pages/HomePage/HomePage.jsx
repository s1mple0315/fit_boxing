import { useState, useEffect } from "react";
import NavigationGrid from "../../components/NavigationGrid/NavigationGrid";
import TrainingCard from "../../components/TrainingCard/TrainingCard";
import TrainingHall from "../../components/TrainingHall/TrainingHall";
import trainingHalls from "../../data/trainingHalls";
import groupPages from "../../data/groupPages";
import Button from "../../components/Button/Button";
import Slider from "../../components/CustomSlider/Slider";
import Option from "../../shared/icons/Option";
import Check from "../../shared/icons/Check";

import styles from "./HomePage.module.css";
import Modal from "../../components/Modal/Modal";

const HomePage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleButtonClick = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const imageRows = [
    ["1.png", "2.png", "3.png"],
    ["1.png", "2.png", "3.png"],
    ["1.png", "2.png", "3.png"],
    ["1.png", "2.png", "3.png"],
  ];

  const news = [
    [
      {
        icon: "fit-word.svg",
        title: "1е место в FIT-WORD",
        text: "Мы участвовали в самом знаменитом конкурсе в мире и заняли 1е место.",
      },
      {
        icon: "trophy.svg",
        title: "Нас уже более 50000+",
        text: "Количество наших дорогих спортсменов растет с каждым днём.",
      },
      {
        icon: "schedule.svg",
        title: "Улучшили расписание",
        text: "Теперь мы работаем и ночью для комфортного распределения графика.",
      },
    ],
    [
      {
        icon: "fit-word.svg",
        title: "Новый тренер в команде",
        text: "Приветствуем нового тренера по боксу с международным опытом.",
      },
      {
        icon: "trophy.svg",
        title: "Награды за февраль",
        text: "Наши спортсмены снова показали выдающиеся результаты!",
      },
      {
        icon: "schedule.svg",
        title: "Открытая тренировка",
        text: "Бесплатная тренировка на свежем воздухе в это воскресенье.",
      },
    ],
    [
      {
        icon: "fit-word.svg",
        title: "Новый тренер в команде",
        text: "Приветствуем нового тренера по боксу с международным опытом.",
      },
      {
        icon: "trophy.svg",
        title: "Награды за февраль",
        text: "Наши спортсмены снова показали выдающиеся результаты!",
      },
      {
        icon: "schedule.svg",
        title: "Открытая тренировка",
        text: "Бесплатная тренировка на свежем воздухе в это воскресенье.",
      },
    ],
    [
      {
        icon: "fit-word.svg",
        title: "Новый тренер в команде",
        text: "Приветствуем нового тренера по боксу с международным опытом.",
      },
      {
        icon: "trophy.svg",
        title: "Награды за февраль",
        text: "Наши спортсмены снова показали выдающиеся результаты!",
      },
      {
        icon: "schedule.svg",
        title: "Открытая тренировка",
        text: "Бесплатная тренировка на свежем воздухе в это воскресенье.",
      },
    ],
  ];

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1300);
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const flexDirection = isMobile ? "column" : "row";

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
            <Button
              onClick={handleButtonClick}
              variant="primary"
              fillColor={"#000"}
              hasArrow={true}
            >
              Пробное занятие
            </Button>
            <Button to={"#tariffs"} variant="secondary">Посмотреть тарифы</Button>
          </div>
        </div>
      </section>

      <Modal isOpen={isModalOpen} onClose={handleCloseModal} />

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

      <section className={styles.trainingCardsSection} id="tariffs">
        <h3>Выбери свой путь к совершенству</h3>
        <div className={styles.trainingCards}>
          {groupPages.map((page) => (
            <TrainingCard
              slug={page.slug}
              key={page.slug}
              title={page.title}
              description={page.description}
              price={page.price}
              image={page.image}
              cards={page.cards}
              onClick={handleButtonClick}
            />
          ))}
        </div>
      </section>

      <section className={styles.trainingHalls} id="training-zones">
        <h3>Просторные залы для спорта</h3>
        {trainingHalls.map((hall) => (
          <TrainingHall
          
            key={hall.title}
            title={hall.title}
            description={hall.description}
            area={hall.area}
            trainingDirections={hall.trainingDirections}
            image={`assets/pages/halls/${hall.image}.png`}
            layout={hall.layout}
            onClick={handleButtonClick}
          />
        ))}
      </section>

      <section className={`${styles.weekdaysSection} d-flex flex-column`}>
        <h3>Наши будни</h3>
        <div
          className={`${styles.weekdays} d-flex align-items-center justify-content-center`}
        >
          {imageRows.flat().map((img, imgIndex) => (
            <img
              key={imgIndex}
              src={`assets/pages/weekdays/${img}`}
              alt={`Image ${imgIndex + 1}`}
            />
          ))}
        </div>
      </section>

      <section className={styles.customTrainingHalls}>
        <h3>Просторные залы для спорта</h3>

        <div
          className={`${styles.customTrainingHall} d-flex justify-content-between`}
          style={{ flexDirection }}
        >
          <div className={styles.imageContainer}>
            <img src="assets/pages/halls/kickboxing.png" alt="Training Hall" />
          </div>
          <div
            className={`${styles.customTrainingHallContent} d-flex flex-column`}
          >
            <h3>Запишитесь на пробное занятие</h3>
            <p>Прочувствуйте атмосферу роста в нашем премиум фитнес клубе.</p>

            <div className={`${styles.options} d-flex`}>
              <div className={`${styles.option} d-flex flex-column`}>
                <div className="d-flex align-items-center justify-content-between">
                  <Option />
                  <h3>218 кв.м</h3>
                </div>
                <p>Площадь зала</p>
              </div>

              <div className={`${styles.option} d-flex flex-column`}>
                <div className="d-flex align-items-center">
                  <Option />
                  <h3>
                    5<span>+</span>
                  </h3>
                </div>
                <p>Направлений занятий</p>
              </div>
            </div>

            <Button onClick={handleButtonClick} variant="primary">
              Записаться на пробное занятие
            </Button>
          </div>
        </div>

        <div
          className={`${styles.customTrainingHall} d-flex justify-content-between`}
          style={{ flexDirection }}
        >
          <div className={styles.imageContainer}>
            <img src="assets/pages/halls/benefit.png" alt="Training Hall" />
          </div>
          <div className={`${styles.benefitsContainer} d-flex flex-column`}>
            <h3>Почему мы?</h3>
            <div className={styles.benefits}>
              <div className={styles.checkIconContainer}>
                <Check />
              </div>
              <div className={styles.benefitsContent}>
                <h3>Семейный фитнес</h3>
                <p>
                  Помимо тренировки для взрослых у нас есть особые направления
                  занятий для детей и подростков
                </p>
              </div>
            </div>
            <div className={styles.benefits}>
              <div className={styles.checkIconContainer}>
                <Check />
              </div>
              <div className={styles.benefitsContent}>
                <h3>Без лишних глаз</h3>
                <p>
                  Специально оборудованные мини -залы позволят заниматься
                  сконцентрированно не отвлекаясь
                </p>
              </div>
            </div>
            <div className={styles.benefits}>
              <div className={styles.checkIconContainer}>
                <Check />
              </div>
              <div className={styles.benefitsContent}>
                <h3>Индивидуальный подход</h3>
                <p>
                  Разработаем для вас специальную программу тренировок,
                  поставленную на достижение конкретных целей
                </p>
              </div>
            </div>

            <Button onClick={handleButtonClick} variant="primary">
              Записаться на пробное занятие
            </Button>
          </div>
        </div>

        <div
          className={`${styles.customTrainingHall} d-flex justify-content-between`}
          style={{ flexDirection }}
        >
          <div className={styles.imageContainer}>
            <img src="assets/pages/halls/custom3.png" alt="Training Hall" />
          </div>
          <div
            className={`${styles.customTrainingHallContent} d-flex flex-column`}
          >
            <h3>После нас, другие фитнесы покажутся некомфортными</h3>
            <p>
              Полное погружение в процесс тренировки и профессиональные тренера
              заставят вас влюбиться в это место
            </p>

            <div className={`${styles.customOptions} d-flex`}>
              <div className={`${styles.customOption} d-flex flex-column`}>
                <div className="d-flex align-items-center">
                  <Option />
                  <h3>
                    50<span>+</span>
                  </h3>
                </div>
                <p>Профессиональных тренеров разной направленности</p>
              </div>

              <div className={`${styles.customOption} d-flex flex-column`}>
                <div className="d-flex align-items-center">
                  <Option />
                  <h3>
                    5000<span>+</span>
                  </h3>
                </div>
                <p>Часов работы с тренером в месяц</p>
              </div>
            </div>

            <Button onClick={handleButtonClick} variant="primary">
              Записаться на пробное занятие
            </Button>
          </div>
        </div>
      </section>

      <section>
        <Slider news={news} />
      </section>

      <section className={styles.subscribeSection}>
        <h3>Хватит откладывать на завтра то, чем хотел заняться еще вчера</h3>
        <p>
          Более 50 опытных тренеров ждут вас ежедневно для конструирования
          вашего идеального тела, начните действовать прямо сейчас
        </p>
        <Button onClick={handleButtonClick} variant="primary">
          Записаться
        </Button>
      </section>
    </div>
  );
};

export default HomePage;
