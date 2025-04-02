import React, { useState } from "react";
import styles from "./Accordion.module.css";
import ArrowUp from "../../shared/icons/ArrowUp";
import ArrowDown from "../../shared/icons/ArrowDown";

const Accordion = ({ sections }) => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleToggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className={styles.accordion}>
      {sections.map((section, index) => (
        <div className={styles.accordionItem} key={index}>
          <div
            className={`${styles.accordionHeader} ${
              activeIndex === index ? styles.active : ""
            }`}
            onClick={() => handleToggle(index)}
          >
            <span className={styles.accordionTitle}>{section.title}</span>
            <span className={styles.accordionIcon}>
              {activeIndex === index ? <ArrowUp /> : <ArrowDown />}
            </span>
          </div>
          {activeIndex === index && (
            <div className={styles.accordionContent}>{section.content}</div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Accordion;
