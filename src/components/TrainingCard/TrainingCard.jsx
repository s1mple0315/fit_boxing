import Radio from "../../shared/icons/Radio";
import Button from "../Button/Button";
import styles from "./TrainingCard.module.css";

const TrainingCard = ({ title, description, price, image, cards, onClick }) => {
  return (
    <div className={`${styles.trainingCardWrapper} d-flex flex-column`}>
      <div className={`${styles.trainingCardTop} position-relative`}>
        <img src={`assets/pages/training/${image}.png`} alt={title} />
        <div>
          <h3>{title}</h3>
        </div>
      </div>
      <div className={styles.trainingCardBottom}>
        <div className={styles.trainingCardBottomPrice}>
          <p>
            от <span className={styles.price}>{price}</span>
            <span className={styles.month}>/месяц</span>
          </p>
        </div>
        <div className={styles.trainingCardBottomDescription}>
          <p>{description}</p>
        </div>
        <div className={styles.trainingCardBottomStages}>
          {cards.map((card, index) => (
            <div key={index}>
              <Radio /> <p>{card.title}</p>
            </div>
          ))}
        </div>
        <div className={styles.trainingCardBottomButton}>
          <Button onClick={onClick} variant="secondary" hasArrow={true} fillColor={"#fff"}>
            Записаться
          </Button>
        </div>
      </div>
    </div>
  );
};

export default TrainingCard;
