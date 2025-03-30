import Button from "../../components/Button/Button";
import { scrollToSection } from "../Header/helpers";

import styles from "./MainSection.module.scss";

const MainSection = () => {
  return (
    <section className={styles.main_section}>
      <div className={styles.main_container}>
        <h1>Test assignment for front-end developer</h1>
        <p className={styles.main_text}>
          What defines a good front-end developer is one that has skilled
          knowledge of HTML, CSS, JS with a vast understanding of User design
          thinking as they'll be building web interfaces with accessibility in
          mind. They should also be excited to learn, as the world of Front-End
          Development keeps evolving.
        </p>
        <Button text="Sign up" onClick={() => scrollToSection("sign-up")} />
      </div>
    </section>
  );
};

export default MainSection;
