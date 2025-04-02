// src/components/TrainingHall/TrainingHall.jsx
import Option from "../../shared/icons/Option";
import Button from "../Button/Button";
import styles from "./TrainingHall.module.css";

const TrainingHall = ({
  title,
  description,
  area,
  trainingDirections,
  benefits,
  image,
  layout = "left",
  contentType = "area-and-directions", 
}) => {
  return (
    <div
      className={`${styles.trainingHall} d-flex justify-content-between`}
      style={{ flexDirection: layout === "left" ? "row" : "row-reverse" }}
    >
      <div className={styles.imageContainer}>
        <img src={image} alt={title} />
      </div>
      <div className={`${styles.trainingHallContent} d-flex flex-column`}>
        <h3>{title}</h3>
        {description && <p>{description}</p>}
        {contentType === "area-and-directions" && (
          <div className={`${styles.options} d-flex`}>
            <div className={`${styles.option} d-flex flex-column`}>
              <div className="d-flex align-items-center justify-content-between">
                <h3>{area}</h3>
                <Option />
              </div>
              <p>премиум комфорта</p>
            </div>
            <div className={`${styles.option} d-flex flex-column`}>
              <div className="d-flex align-items-center justify-content-between">
                <h3>
                  {trainingDirections} <span>+</span>
                </h3>
                <Option />
              </div>
              <p>направлений занятий</p>
            </div>
          </div>
        )}
        {contentType === "benefits" && benefits && (
          <ul className={styles.benefits}>
            {benefits.map((benefit, index) => (
              <li key={index} className="d-flex align-items-center">
                <img src="assets/icons/check.png" alt="check icon" className={styles.checkIcon} />
                <p>{benefit}</p>
              </li>
            ))}
          </ul>
        )}
        <Button variant="primary">Записаться на пробное занятие</Button>
      </div>
    </div>
  );
};

export default TrainingHall;