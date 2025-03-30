import styles from "./ErrorMessage.module.scss";

const ErrorMessage = ({ errorMessage }) => (
  <div className={styles.error_message}>{errorMessage}</div>
);

export default ErrorMessage;
