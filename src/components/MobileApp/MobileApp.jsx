import styles from "./MobileApp.module.css";

const MobileApp = () => {
  return (
    <div className={`${styles.mobileAppContaier} d-flex`}>
      <div className={styles.mobileAppImage}>
        <img
          src="assets/icons/mobileApp/phone.png"
          alt="mobile representation of the app"
        />
      </div>
      <div className={styles.mobileAppDescriptionContainer}>
        <div className={`${styles.mobileAppDescription} d-flex flex-column`}>
          <h3>Мобильное приложение</h3>
          <p>
            Личный кабинет, расписание занятий, онлайн запись, уведомления о
            тренировке, новости клуба и акции
          </p>
        </div>
        <div className={`${styles.downloadImages} d-flex flex-column`}>
          <img
            src="assets/icons/mobileApp/playmarket.png"
            alt="download from Play Market"
          />
          <img
            src="assets/icons/mobileApp/appstore.png"
            alt="download from App Store"
          />
          <img
            src="assets/icons/mobileApp/appgallery.png"
            alt="download from App Gallery"
          />
        </div>
      </div>
    </div>
  );
};

export default MobileApp;
