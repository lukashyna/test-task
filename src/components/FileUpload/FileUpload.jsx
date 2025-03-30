import React from "react";
import { ErrorMessage } from "formik";
import styles from "./FileUpload.module.scss";

const FileUpload = ({ setFieldValue, setFieldTouched, errors, touched }) => {
  const [fileName, setFileName] = React.useState("");

  const uploadText = fileName || "Upload your photo";

  return (
    <div className={styles.file_upload}>
      <div
        className={`${styles.file_upload_container} ${
          fileName ? styles.filled : ""
        } ${errors.photo && touched.photo ? styles.error : ""}`}
      >
        <label className={styles.file_upload_button}>
          Upload
          <input
            type="file"
            className={styles.hidden}
            accept="image/jpeg, image/jpg"
            onChange={(e) => {
              setFieldTouched("photo", true, false);
              const file = e.target.files[0];
              setFileName(file ? file.name : "");
              setFieldValue("photo", file);
            }}
          />
        </label>
        <span className={styles.file_upload_text}>{uploadText}</span>
      </div>
      <ErrorMessage
        name="photo"
        component="div"
        className={styles.error_text}
      />
    </div>
  );
};

export default FileUpload;
