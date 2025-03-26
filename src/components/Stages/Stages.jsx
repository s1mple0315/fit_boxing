import styles from './Stages.module.css';

const Stages = ({ stages }) => (
  <section className={styles.stages}>
    <h2 className={styles.sectionTitle}>Этапы тренировки</h2>
    <div className={styles.stagesContainer}>
      {stages.map((stage, index) => (
        <div key={index} className={styles.stage}>
          <h3 className={styles.stageTitle}>{stage.title}</h3>
          <p className={styles.stageDescription}>{stage.description}</p>
        </div>
      ))}
    </div>
  </section>
);

export default Stages;