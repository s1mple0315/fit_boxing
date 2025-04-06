import React from "react";
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
          <Arrow fill={fillColor} />
        </span>
      )}
    </button>
  );
};

export default Button;
