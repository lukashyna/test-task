import React from "react";
import { Formik, Form } from "formik";
import Button from "../Button/Button";
import TextField from "../TextField/TextField";
import RadioGroup from "../RadioGroup/RadioGroup";
import FileUpload from "../FileUpload/FileUpload";
import ErrorMessage from "../ErrorMessage/ErrorMessage";
import { registerUser, fetchPositions } from "../../services/userService";
import { validationSchema } from "./helpers";
import { initialValues, formFields } from "./constants";
import styles from "./SignUpForm.module.scss";

const SignUpForm = ({ setIsRegistered, setCurrentPage, getUsers }) => {
  const [isLoading, setIsLoading] = React.useState(true);
  const [positions, setPositions] = React.useState([]);
  const [errorMessage, setErrorMessage] = React.useState(null);

  const handleSubmit = async (values, { setSubmitting }) => {
    try {
      await registerUser(values);
      setIsRegistered(true);
      setCurrentPage(1);
      setErrorMessage(null);
      getUsers(1);
    } catch (error) {
      setErrorMessage(error.response.data.message);
    } finally {
      setSubmitting(false);
    }
  };

  React.useEffect(() => {
    (async () => {
      try {
        const positionsData = await fetchPositions();
        setPositions(positionsData);
      } catch (error) {
        console.error(error);
      } finally {
        setIsLoading(false);
      }
    })();
  }, []);

  if (isLoading) return null;

  return (
    <>
      <h2>Working with POST request</h2>

      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ setFieldValue, values, setFieldTouched, errors, touched }) => {
          const isSubmitDisabled =
            !values.name || !values.email || !values.phone || !values.photo;
          return (
            <Form className={styles.form}>
              <div>
                {formFields.map((field) => (
                  <TextField key={field.name} {...field} />
                ))}
              </div>
              <RadioGroup positions={positions} setFieldValue={setFieldValue} />
              <FileUpload
                setFieldValue={setFieldValue}
                setFieldTouched={setFieldTouched}
                errors={errors}
                touched={touched}
              />
              <Button
                type="submit"
                disabled={isSubmitDisabled}
                text="Sign up"
              />
              <ErrorMessage errorMessage={errorMessage} />
            </Form>
          );
        }}
      </Formik>
    </>
  );
};

export default SignUpForm;
