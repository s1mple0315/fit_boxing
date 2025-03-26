import styles from "./PageTopDescription.module.css";

const PageTopDescription = ({title, description}) => {
  return (
    <div className={`${styles.pageTopDescription} align-items-center justify-content-center`}>
      <div className="container align-items-center justify-content-between">
        <h1>{title}</h1>
        <p>
          {description}
        </p>
      </div>
    </div>
  );
};

export default PageTopDescription;
