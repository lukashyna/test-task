import { Field, ErrorMessage } from "formik";
import styles from "./RadioGroup.module.scss";

const RadioGroup = ({ positions, setFieldValue }) => (
  <div className={styles.radio_group}>
    <p>Select your position</p>
    {positions.map((position) => (
      <label key={position.id}>
        <Field
          type="radio"
          name="position_id"
          value={position.id}
          onChange={() => setFieldValue("position_id", +position.id)}
        />
        <span>{position.name}</span>
      </label>
    ))}
    <ErrorMessage
      name="position"
      component="div"
      className={styles.error_text}
    />
  </div>
);

export default RadioGroup;
