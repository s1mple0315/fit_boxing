import Header from "../components/Layout/Header/Header";
import Footer from "../components/Layout/Footer/Footer";
import styles from "./Layout.module.css";

const Layout = ({ children }) => {
  return (
    <div className={styles.layout}>
      <Header />
      <main className="container">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
