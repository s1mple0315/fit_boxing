import styles from "./MobileApp.module.css";

const MobileApp = () => {
  return (
    <div
      className={`${styles.mobileAppContainer} d-flex justify-content-center`}
    >
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
          <a
            href="https://play.google.com/store/apps/details?id=com.mobifitness.mishkateam546274"
            target="_blank"
          >
            <img
              src="assets/icons/mobileApp/playmarket.png"
              alt="download from Play Market"
            />
          </a>
          <a
            href="https://apps.apple.com/app/mishkateam/id6587568030"
            target="_blank"
          >
            <img
              src="assets/icons/mobileApp/appstore.png"
              alt="download from App Store"
            />
          </a>
          <a
            href="https://appgallery.huawei.com/#/app/C111697587"
            target="_blank"
          >
            <img
              src="assets/icons/mobileApp/appgallery.png"
              alt="download from App Gallery"
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default MobileApp;
