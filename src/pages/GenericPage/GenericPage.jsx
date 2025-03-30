// src/pages/GenericPage/GenericPage.jsx
import Stage from '../../components/Stages/Stages';
import styles from './GenericPage.module.css';

const GenericPage = ({ pageData }) => {
  const page = pageData[0];

  if (!page) {
    return <div>Страница не найдена</div>;
  }

  return (
    <div className={styles.pageContent}>
      {/* Page-Specific Header Content */}
      <section className={styles.pageHeader}>
        <h1 className={styles.headerTitle}>{page.topDescription.title}</h1>
        <p className={styles.headerDescription}>{page.topDescription.description}</p>
        {page.button && (
          <a href={page.button.url} className={styles.headerButton}>
            {page.button.text}
          </a>
        )}
      </section>

      {/* Content Section: Either Stages or Cards */}
      {page.cards && page.cards.length > 0 ? (
        <section className={styles.featuresSection}>
          <div className={styles.featuresGrid}>
            {page.cards.map((card, index) => (
              <div key={index} className={styles.featureCard}>
                <h3 className={styles.featureTitle}>{card.title}</h3>
                <p className={styles.featureDescription}>{card.description}</p>
              </div>
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