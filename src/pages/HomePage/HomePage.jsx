// src/pages/HomePage/HomePage.jsx
import NavigationGrid from "../../components/NavigationGrid/NavigationGrid";
import TrainingCard from "../../components/TrainingCard/TrainingCard";
import TrainingHall from "../../components/TrainingHall/TrainingHall";
import trainingHalls from "../../data/trainingHalls";
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

      <section>
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
    </div>
  );
};

export default HomePage;