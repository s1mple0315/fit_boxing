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

            <Route
              path={`/:slug`}
              element={<GenericPage pageData={pageData} />}
              caseSensitive={false}
            />
        </Routes>
      </Layout>
    </Router>
  );
};

export default AppRouter;
