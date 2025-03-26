import { Link, useParams } from "react-router-dom";
import pageData from "../../data/pages";

const Breadcrumb = () => {
  const { slug } = useParams();
  const currentPage = pageData.find((page) => page.slug === slug);

  return (
    <nav style={{ padding: "20px", backgroundColor: "#1C2526", color: "#fff" }}>
      <ul
        style={{
          listStyle: "none",
          display: "flex",
          gap: "8px",
          margin: 0,
          padding: 0,
        }}
      >
        <li>
          <Link to="/" style={{ color: "#fff", textDecoration: "none" }}>
            Главная
          </Link>
        </li>

        <li style={{ color: "#fff" }}>/</li>

        <li>
          {currentPage ? (
            <span style={{ color: "#fff" }}>
              {currentPage.topDescription.title}
            </span>
          ) : (
            <span style={{ color: "#fff" }}>Page Not Found</span>
          )}
        </li>
      </ul>
    </nav>
  );
};

export default Breadcrumb;
