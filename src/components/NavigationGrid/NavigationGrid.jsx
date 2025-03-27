import Card from '../Card/Card';
import pageData from '../../data/pages';
import styles from './NavigationGrid.module.css';

const NavigationGrid = () => {
  return (
    <div className={`${styles.grid}`}>
      <h1 className={styles.heading}>Услуги нашего фитнеса</h1>
      <div className={`${styles.cardContainer} container`}>
        {pageData
          .map((page) => (
            <Card
              key={page.slug}
              title={page.title}
              description={page.description}
              url={`/${page.slug}`}
              slug={page.slug}
            />
          ))}
      </div>
    </div>
  );
};

export default NavigationGrid;