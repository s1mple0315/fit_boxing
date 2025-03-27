import Radio from "../../shared/icons/Radio";
import Button from "../Button/Button";
import styles from "./TrainingCard.module.css";

const TrainingCard = () => {
  return (
    <div className={`${styles.trainingCardWrapper} d-flex flex-column`}>
      <div className={`${styles.trainingCardTop} position-relative`}>
        <img src="assets/pages/child-training.png" alt="" />
        <div>
          <h3>Детские тренировки</h3>
        </div>
      </div>
      <div className={styles.trainingCardBottom}>
        <div className={styles.trainingCardBottomPrice}>
          <p>
            от <span>4000р.</span>/месяц
          </p>
        </div>
        <div className={styles.trainingCardBottomDescription}>
          <p>Занятия в игровой форме на выносливость и координацию</p>
        </div>
        <div className={styles.trainingCardBottomStages}>
          <div>
            <Radio /> <p>Детский тренер</p>
          </div>
          <div>
            <Radio /> <p>Изотоническая вода</p>
          </div>
          <div>
            <Radio /> <p>Полотенце, халат</p>
          </div>
          <div>
            <Radio /> <p>Душевые кабинки</p>
          </div>
          <div>
            <Radio /> <p>Раздевалки</p>
          </div>
          <div>
            <Radio /> <p>Быстрые бинты, перчатки</p>
          </div>
        </div>
        <div className={styles.trainingCardBottomButton}>
          <Button variant="secondary" hasArrow={true}>
            Записаться
          </Button>
        </div>
      </div>
    </div>
  );
};

export default TrainingCard;
