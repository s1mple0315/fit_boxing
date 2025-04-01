import BorderedCard from "../../components/BorderedCard/BorderedCard";
import Stage from "../../components/Stages/Stages";
import PageTopDescription from "../../components/PageTopDescription/PageTopDescription"; // Импортируем PageTopDescription
import styles from "./GenericPage.module.css";

const GenericPage = ({ pageData }) => {
  const page = pageData[0];

  if (!page) {
    return <div>Страница не найдена</div>;
  }

  const imageURL = `assets/pages/${page.image}.png`;
  // Для страниц из groupPages добавляем фоновое изображение и кнопку "Записаться на пробное занятие"
  const renderPageTopDescription = () => {
    if (page.cards || page.stages) {
      return (
        <section
          style={{
            backgroundImage: `url(${imageURL})`,
          }}
          className={styles.pageHeader}
        >
          <h1 className={styles.headerTitle}>{page.topDescription.title}</h1>
          <p className={styles.headerDescription}>
            {page.topDescription.description}
          </p>
          {page.button && (
            <a href={page.button.url} className={styles.headerButton}>
              {page.button.text}
            </a>
          )}
        </section>
      );
    }

    // Для страниц из pageData без фона, только серый цвет
    return (
      <PageTopDescription
        backgroundImage={"assets/pages/pageTop.png"}
        backgroundClass="bg-light" // Для pageData фон серый
        layout="default"
      >
        <h1 style={{ backgroundColor: "white" }}>
          {page.topDescription.title}
        </h1>
        <p>{page.topDescription.description}</p>
        {page.button && (
          <a href={page.button.url} className={styles.headerButton}>
            {page.button.text}
          </a>
        )}
      </PageTopDescription>
    );
  };

  return (
    <div className={styles.pageContent}>
      {/* Стартовый блок с описанием страницы */}
      {renderPageTopDescription()}

      {/* Content Section: Either Stages or Cards */}
      {page.cards && page.cards.length > 0 ? (
        <section className={styles.featuresSection}>
          <div className={styles.featuresGrid}>
            {page.cards.map((card, index) => (
              <BorderedCard
                key={index}
                title={card.title}
                description={card.description}
                icon={card.icon}
              />
            ))}
          </div>
        </section>
      ) : page.stages && page.stages.length > 0 ? (
        <section className={styles.stagesSection}>
          <div className={styles.stages}>
            <Stage stages={page.stages} />
          </div>
        </section>
      ) : null}
    </div>
  );
};

export default GenericPage;
