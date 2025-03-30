import styles from "./Button.module.scss";

const Button = ({ text, disabled, onClick, type }) => (
  <button
    className={styles.button}
    disabled={disabled}
    onClick={onClick}
    type={type}
  >
    {text}
  </button>
);

export default Button;
