import { Link } from 'react-router-dom';
import styles from './Card.module.css';
import Button from "../Button/Button";

const Card = ({ title, description, url, slug }) => {
  const iconUrl = `/assets/icons/${slug}-icon.svg`; 

  return (
    <div className={styles.card}>
      <img src={iconUrl} alt={`${title} icon`} className={styles.icon} onError={() => console.warn(`Icon for slug "${slug}" not found at ${iconUrl}`)} />
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.description}>{description}</p>
      <Link to={url}>
        <Button variant='primary' >Подробнее</Button>
      </Link>
    </div>
  );
};

export default Card;