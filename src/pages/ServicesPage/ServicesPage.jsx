import TrainingHall from "../../components/TrainingHall/TrainingHall";
import trainingHalls from "../../data/trainingHalls";
import styles from "./ServicesPage.module.css";

const ServicesPage = () => {
  return (
    <div className={styles.servicesPage}>
      <section className={styles.servicesSection}>
        {trainingHalls.map((hall) => (
          <TrainingHall
            key={hall.title}
            title={hall.title}
            description={hall.description}
            area={hall.area}
            trainingDirections={hall.trainingDirections}
            benefits={hall.benefits}
            image={hall.image}
            layout={hall.layout}
            contentType={hall.contentType}
          />
        ))}
      </section>
    </div>
  );
};

export default ServicesPage;