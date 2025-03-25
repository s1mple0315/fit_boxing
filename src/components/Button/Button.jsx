// Button.jsx
import React from 'react';
import styles from './Button.module.css'; // Import CSS Module

const Button = ({
  children,
  variant = 'primary', // 'primary' (yellow) or 'secondary' (black with white border)
  hasArrow = false, // Whether to show an arrow
  onClick,
  disabled = false,
  className = '',
  ...props
}) => {
  return (
    <button
      onClick={onClick}
      className={`${styles.btn} ${styles[`btn-${variant}`]} ${
        hasArrow ? styles['btn-with-arrow'] : ''
      } ${className}`}
      disabled={disabled}
      {...props}
    >
      {children}
      {hasArrow && <span className={styles.arrow}>→</span>}
    </button>
  );
};

export default Button;