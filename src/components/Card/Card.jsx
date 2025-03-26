// src/components/Card.jsx
import { Link } from 'react-router-dom';
import styles from './Card.module.css';

const Card = ({ title, description, url, slug }) => {
  const iconUrl = `/assets/icons/${slug}-icon.svg`; // Construct the URL based on the slug

  return (
    <div className={styles.card}>
      <img src={iconUrl} alt={`${title} icon`} className={styles.icon} onError={() => console.warn(`Icon for slug "${slug}" not found at ${iconUrl}`)} />
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.description}>{description}</p>
      <Link to={url}>
        <button className={styles.button}>Подробнее</button>
      </Link>
    </div>
  );
};

export default Card;