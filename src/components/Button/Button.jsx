import React from "react";
import styles from "./Button.module.css"; // Import CSS Module
import Arrow from "../../shared/icons/Arrow";

const Button = ({
  children,
  variant = "primary",
  hasArrow = false,
  onClick,
  disabled = false,
  className = "",
  ...props
}) => {
  return (
    <button
      onClick={onClick}
      className={`${styles.btn} ${styles[`btn-${variant}`]} ${
        hasArrow ? styles["btn-with-arrow"] : ""
      } ${className}`}
      disabled={disabled}
      {...props}
    >
      {children}
      {hasArrow && (
        <span className={styles.arrow}>
          <Arrow />
        </span>
      )}
    </button>
  );
};

export default Button;
