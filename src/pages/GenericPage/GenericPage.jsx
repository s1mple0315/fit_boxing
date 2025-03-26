// src/pages/GenericPage.jsx
import { useParams } from "react-router-dom";
import styles from "./GenericPage.module.css";

import PageTopDescription from "../../components/PageTopDescription/PageTopDescription";
import Stages from "../../components/Stages/Stages";

const GenericPage = ({ pageData }) => {
  const { slug } = useParams();
  
  const page = pageData.find(
    (p) => p.slug.toLowerCase() === (slug || "").toLowerCase()
  );

  if (!page) {
    return (
      <div className={styles.genericPage}>
        <h1 style={{ textAlign: "center", padding: "40px 20px", color: "#fff" }}>
          Page Not Found
        </h1>
      </div>
    );
  }

  return (
    <div className={styles.genericPage}>
      <PageTopDescription
        title={page.topDescription.title}
        description={page.topDescription.description}
      />
      {page.stages && page.stages.length > 0 && <Stages stages={page.stages} />}
    </div>
  );
};

export default GenericPage;