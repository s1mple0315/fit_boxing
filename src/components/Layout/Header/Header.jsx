import { useState } from "react";
import Button from "../../Button/Button";
import styles from "./Header.module.css";
import { Link } from "react-router-dom";
import BurgerMenu from "../../../shared/icons/BurgerMenu";

const Header = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <div
        className={`${styles.headerWrapper} d-flex align-items-center justify-content-between`}
      >
        <div className={styles.headerLogo}>
          <Link to="/">
            <img src="assets/header/appLogo.png" alt="App Logo" />
          </Link>
        </div>

        <div className={styles.headerNav}>
          <Link to="/services">Услуги</Link>
          <Link to="/">Зоны</Link>
          <Link to="/">Абонементы</Link>
          <Button variant="primary">Онлайн расписание</Button>
          <Button variant="secondary">Мобильное приложение</Button>
        </div>

        <div className={styles.burgerMenu} onClick={toggleMenu}>
          <BurgerMenu />
        </div>
      </div>

      <div
        className={`${styles.offcanvasMenu} ${
          isMenuOpen ? styles.offcanvasOpen : ""
        }`}
        onClick={toggleMenu}
      >
        <div
          className={styles.offcanvasContent}
          onClick={(e) => e.stopPropagation()}
        >
          <button className={styles.closeButton} onClick={toggleMenu}>
            ✕
          </button>
          <Link to="/services" onClick={toggleMenu}>
            Услуги
          </Link>
          <Link to="/" onClick={toggleMenu}>
            Зоны
          </Link>
          <Link to="/" onClick={toggleMenu}>
            Абонементы
          </Link>
          <Button variant="primary" onClick={toggleMenu}>
            Онлайн расписание
          </Button>
          <Button variant="secondary" onClick={toggleMenu}>
            Мобильное приложение
          </Button>
        </div>
      </div>
    </>
  );
};

export default Header;
