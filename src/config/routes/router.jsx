import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "../../pages/HomePage/HomePage";
import Layout from "../../app/Layout";
import GenericPage from "../../pages/GenericPage/GenericPage";
import pageData from "../../data/pages";

const AppRouter = () => {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />

          {pageData.map((page) => (
            <Route
              key={page.slug}
              path={`/${page.slug}`}
              element={<GenericPage pageData={pageData} />}
            />
          ))}
        </Routes>
      </Layout>
    </Router>
  );
};

export default AppRouter;
