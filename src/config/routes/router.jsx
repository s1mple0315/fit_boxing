import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "../../pages/HomePage/HomePage";
import Layout from "../../app/Layout";
import ScrollToTop from "./scrollToTop";
import PageResolver from "../../pages/PageResolver";

const AppRouter = () => {
  return (
    <Router>
      <ScrollToTop />
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />

          <Route
            path={`/:slug`}
            element={<PageResolver />}
            caseSensitive={false}
          />
        </Routes>
      </Layout>
    </Router>
  );
};

export default AppRouter;
