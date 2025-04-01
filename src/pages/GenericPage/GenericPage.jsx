import BorderedCard from "../../components/BorderedCard/BorderedCard";
import Stage from "../../components/Stages/Stages";
import PageTopDescription from "../../components/PageTopDescription/PageTopDescription"; // Импортируем PageTopDescription
import styles from "./GenericPage.module.css";
import { Link } from "react-router-dom";

const GenericPage = ({ pageData }) => {
  const page = pageData[0];

  if (!page) {
    return <div>Страница не найдена</div>;
  }

  const imageURL = `assets/pages/${page.image}.png`;
  const renderPageTopDescription = () => {
    if (page.cards || page.stages) {
      return (
        <section
          style={{
            backgroundImage: `url(${imageURL})`,
          }}
          className={`${styles.pageHeader} d-flex flex-column`}
        >
          <div className={styles.headerContent}>
            <h1 className={styles.headerTitle}>{page.topDescription.title}</h1>
            <p className={styles.headerDescription}>
              {page.topDescription.description}
            </p>
          </div>
          {page.button && (
            <div className={styles.headerButton}>
              <img src="assets/pages/buttonIcon.png" alt="" />
              <Link to={page.button.link}>{page.button.text}</Link>
            </div>
          )}
        </section>
      );
    }
  };

  return (
    <div className={styles.pageContent}>
      {renderPageTopDescription()}

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
