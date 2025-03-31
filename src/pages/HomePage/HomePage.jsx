// src/pages/HomePage/HomePage.jsx
import NavigationGrid from "../../components/NavigationGrid/NavigationGrid";
import TrainingCard from "../../components/TrainingCard/TrainingCard";
import groupPages from "../../data/groupPages";
import styles from "./HomePage.module.css";

const HomePage = () => {
  return (
    <div className={styles.homePage}>
      <NavigationGrid />

      <section>
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
      </section>
    </div>
  );
};

export default HomePage;