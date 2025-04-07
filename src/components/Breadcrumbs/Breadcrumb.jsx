// src/components/Breadcrumb/Breadcrumb.jsx
import { Link, useLocation } from "react-router-dom";
import Home from "../../shared/icons/Home";

import styles from "./Breadcrumb.module.css";

const Breadcrumb = ({ pageData, groupPages, breadcrumbPages }) => {
  const location = useLocation();
  const slug = location.pathname.split("/")[1] || "";

  const currentPage =
    pageData.find((page) => page.slug.toLowerCase() === slug.toLowerCase()) ||
    groupPages.find((page) => page.slug.toLowerCase() === slug.toLowerCase()) ||
    breadcrumbPages.find(
      (page) => page.slug.toLowerCase() === slug.toLowerCase()
    );

  return (
    <nav className={styles.breadcrumb}>
      <ul className="d-flex align-items-center">
        <li>
          <Home />
          <Link to="/">Главная </Link>
        </li>
        <li>/</li>
        <li>
          {currentPage ? (
            <span>{currentPage.title}</span>
          ) : (
            <span>Page Not Found</span>
          )}
        </li>
      </ul>
    </nav>
  );
};

export default Breadcrumb;
