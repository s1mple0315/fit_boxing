import styles from "./BorderedCard.module.css";

const BorderedCard = ({ title, description, icon }) => {
  const iconUrl = `assets/icons/cardIcons/${icon}-icon.svg`;
  return (
    <div className={styles.borderedCard}>
      <div className="d-flex align-items-center">
        <img
          src={iconUrl}
          alt={`${icon} icon`}
          className={styles.icon}
          onError={() =>
            console.warn(`Icon for "${icon}" not found at ${iconUrl}`)
          }
        />
        <h1 className={styles.title}>{title}</h1>
      </div>
      <p className={styles.description}>{description}</p>
    </div>
  );
};

export default BorderedCard;
