import styles from "./PageTopDescription.module.css";

const PageTopDescription = ({
  children,
  backgroundClass,
  backgroundImage,
  layout
}) => {
  const layoutClass = layout === 'reverse' ? styles.reverseLayout : styles.defaultLayout;

  return (
    <div
      className={`${styles.pageTopDescription} ${backgroundClass} ${layoutClass} d-flex align-items-center justify-content-center`}
      style={{ backgroundImage: backgroundImage ? `url(${backgroundImage})` : 'none' }}
    >
      <div className="container d-flex align-items-center justify-content-between">
        {children}
      </div>
    </div>
  );
};


export default PageTopDescription;
