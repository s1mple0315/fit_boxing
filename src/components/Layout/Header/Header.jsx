import Button from "../../Button/Button";
import styles from "./Header.module.css";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div
      className={`${styles.headerWrapper} d-flex align-items-center justify-content-between`}
    >
      <div className={styles.headerLogo}>
        <img src="assets/header/appLogo.png" alt="" />
      </div>
      <div className={styles.headerNav}>
        <Link to={"/"}>Услуги</Link>
        <Link to={"/"}>Зоны</Link>
        <Link to={"/"}>Абонементы</Link>
        <Button variant="primary">Онлайн расписание</Button>
        <Button variant="secondary">Мобильное приложение</Button>
      </div>
    </div>
  );
};

export default Header;
