import React, { useState } from "react";
import styles from "./Slider.module.css"; // Importing the CSS module
import SliderArrowLeft from "../../shared/icons/SliderArrowLeft";
import SliderArrowRight from "../../shared/icons/SliderArrowRight";

const Slider = ({ news }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const goToNextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % news.length);
  };

  const goToPreviousSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide - 1 + news.length) % news.length);
  };

  return (
    <div className={styles.sliderContainer}>
      <div
        className={styles.sliderContent}
        style={{ transform: `translateX(-${currentSlide * 100}%)` }} 
      >
        {news.map((slide, index) => (
          <div key={index} className={styles.slide}>
            {slide.map((item, i) => (
              <div key={i} className={styles.slideItem}>
                <img src={`assets/icons/slider/${item.icon}`} alt={item.title} className={styles.icon} />
                <h2 className={styles.title}>{item.title}</h2>
                <p className={styles.text}>{item.text}</p>
              </div>
            ))}
          </div>
        ))}
      </div>

      <div className={styles.indicators}>
        {news.map((_, index) => (
          <span
            key={index}
            className={`${styles.indicator} ${
              index === currentSlide ? styles.active : ""
            }`}
          ></span>
        ))}
      </div>

      <div className={styles.sliderControls}>
        <button onClick={goToPreviousSlide} className={styles.controlButton}>
          <span className={styles.arrow}>
            <SliderArrowRight />
          </span>
        </button>
        <button onClick={goToNextSlide} className={styles.controlButton}>
          <span className={styles.arrow}>
            <SliderArrowLeft />
          </span>
        </button>
      </div>
    </div>
  );
};

export default Slider;
