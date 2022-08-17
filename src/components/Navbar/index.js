import styles from "./Navbar.module.css";
import shoppingIcon from "./../../assets/activity.gif";

const Navbar = () => {
  return (
    <nav className={styles.nav}>
      <img className={styles.navIcon} src={shoppingIcon} alt="" />
      <h1 className={styles.navTitle}>Hello, Take Your Activity..</h1>
    </nav>
  );
};

export default Navbar;
