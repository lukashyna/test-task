import styles from "./Loader.module.scss";
import loader from "../../assets/images/loader.svg";

const Loader = () => (
  <img src={loader} className={styles.loader} alt="loader" />
);

export default Loader;
