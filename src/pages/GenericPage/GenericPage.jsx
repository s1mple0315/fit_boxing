import { useParams } from "react-router-dom";
import styles from "./GenericPage.module.css";

import PageTopDescription from "../../components/PageTopDescription/PageTopDescription";

const GenericPage = ({ pageData }) => {
  const { slug } = useParams();
  const page = pageData.find((p) => p.slug === slug);

  return (
    <div className={styles.genericPage}>
      <PageTopDescription title={""} description={""}/>
    </div>
  );
};

export default GenericPage;
