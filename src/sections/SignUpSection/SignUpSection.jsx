import React from "react";
import SignUpForm from "../../components/SignUpForm/SignUpForm";
import SuccessfullyRegistered from "../../components/SuccessfullyRegistered/SuccessfullyRegistered";
import styles from "./SignUpSection.module.scss";

const SignUpSection = ({ setCurrentPage, getUsers }) => {
  const [isRegistered, setIsRegistered] = React.useState(false);

  return (
    <section className={styles.sign_up} id="sign-up">
      {isRegistered ? (
        <SuccessfullyRegistered />
      ) : (
        <SignUpForm
          setIsRegistered={setIsRegistered}
          setCurrentPage={setCurrentPage}
          getUsers={getUsers}
        />
      )}
    </section>
  );
};

export default SignUpSection;
