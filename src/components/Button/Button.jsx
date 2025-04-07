import React from "react";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import styles from "./Button.module.css";
import Arrow from "../../shared/icons/Arrow";

const Button = ({
  children,
  variant = "primary",
  hasArrow = false,
  onClick,
  disabled = false,
  className = "",
  fillColor,
  to, 
  ...props
}) => {
  const buttonContent = (
    <>
      {children}
      {hasArrow && (
        <span className={styles.arrow}>
          <Arrow fill={fillColor} />
        </span>
      )}
    </>
  );

  if (to) {
    if (to.startsWith('#')) {
      return (
        <HashLink to={to} className={`${styles.btn} ${styles[`btn-${variant}`]} ${className}`} disabled={disabled} {...props}>
          {buttonContent}
        </HashLink>
      );
    } else {
      return (
        <Link to={to} className={`${styles.btn} ${styles[`btn-${variant}`]} ${className}`} disabled={disabled} {...props}>
          {buttonContent}
        </Link>
      );
    }
  }

  return (
    <button
      onClick={onClick}
      className={`${styles.btn} ${styles[`btn-${variant}`]} ${hasArrow ? styles["btn-with-arrow"] : ""} ${className}`}
      disabled={disabled}
      {...props}
    >
      {buttonContent}
    </button>
  );
};

export default Button;
