import Button from "../../components/Button/Button";
import Logo from "../../components/Logo/Logo";
import Container from "../../components/Container/Container";
import { buttonsData } from "./constants";
import { scrollToSection } from "./helpers";
import styles from "./Header.module.scss";

const Header = () => (
  <header>
    <Container>
      <nav className={styles.nav}>
        <Logo />
        <div className={styles.buttons_list}>
          {buttonsData.map((button, index) => (
            <Button
              key={index}
              text={button.text}
              onClick={() => scrollToSection(button.href)}
            />
          ))}
        </div>
      </nav>
    </Container>
  </header>
);

export default Header;
