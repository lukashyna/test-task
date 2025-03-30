import React from "react";
import { ErrorMessage, useField } from "formik";
import styles from "./TextField.module.scss";

const TextField = ({ label, name, type = "text", extra }) => {
  const [field, meta] = useField(name);
  const [focused, setFocused] = React.useState(false);

  return (
    <div className={styles.textfield_wrapper}>
      <div
        className={`${styles.textfield_container} ${
          focused || field.value ? styles.focused : ""
        } ${meta.touched && meta.error ? styles.error : ""}`}
      >
        <input
          {...field}
          type={type}
          placeholder=" "
          className={styles.textfield_input}
          onFocus={() => setFocused(true)}
          onBlur={(e) => {
            setFocused(e.target.value !== "");
            field.onBlur(e);
          }}
        />
        <label htmlFor={name} className={styles.textfield_label}>
          {label}
        </label>
      </div>
      {extra && <small className={styles.textfield_extra}>{extra}</small>}
      <ErrorMessage
        name={name}
        component="div"
        className={styles.textfield_error}
      />
    </div>
  );
};

export default TextField;
