import styles from "./Header.module.css";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className={styles.navbar}>
      <Link to="/">
        <img src="./assets/logo.png" alt="Logo" />
      </Link>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/about">Sobre</Link>
        <Link to="/specialty">Especialidade</Link>
        <Link to="/contact">Contato</Link>
      </nav>
    </div>
  );
};

export default Header;
