import { useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import styles from './NewsSlider.module.css';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const news = [
  {
    icon: 'fit-word.svg',
    title: '1е место в FIT-WORD',
    subtitle: 'Международный турнир',
    text: 'Мы участвовали в самом знаменитом конкурсе в мире и заняли 1е место.'
  },
  {
    icon: 'trophy.svg',
    title: 'Нас уже более 50000+',
    subtitle: 'Гордость клуба',
    text: 'Количество наших дорогих спортсменов растет с каждым днём.'
  },
  {
    icon: 'schedule.svg',
    title: 'Улучшили расписание',
    subtitle: 'Удобство для всех',
    text: 'Теперь мы работаем и ночью для комфортного распределения графика.'
  }
];

export default function NewsSlider() {
  useEffect(() => {
    const next = document.querySelector('.swiper-button-next');
    const prev = document.querySelector('.swiper-button-prev');
    if (next && prev) {
      next.classList.add(styles.navButton);
      prev.classList.add(styles.navButton);
    }
  }, []);

  return (
    <section className={styles.sliderSection}>
      <h2 className={styles.sliderTitle}>Новости нашего фитнеса</h2>

      <Swiper
        modules={[Navigation, Pagination]}
        slidesPerView={1}
        spaceBetween={30}
        pagination={{
          clickable: true,
          el: '.custom-pagination'
        }}
        navigation={{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        }}
        breakpoints={{
          768: { slidesPerView: 3 }
        }}
      >
        {news.map((item, index) => (
          <SwiperSlide key={index}>
            <div className={styles.slide}>
              <img src={`/assets/icons/${item.icon}`} alt="" className={styles.slideIcon} />
              <h3 className={styles.slideTitle}>{item.title}</h3>
              <div className={styles.slideSubtitle}>{item.subtitle}</div>
              <p className={styles.slideText}>{item.text}</p>
              <button className={styles.slideButton}>Подробнее</button>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Индикаторы над стрелками */}
      <div className={`custom-pagination ${styles.pagination}`} />

      {/* Кнопки навигации */}
      <div className={styles.navButtons}>
        <button className={`${styles.navButton} swiper-button-prev`}>
        </button>
        <button className={`${styles.navButton} swiper-button-next`}>
        </button>
      </div>
    </section>
  );
}
