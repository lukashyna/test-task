import Avatar from "../Avatar/Avatar";
import styles from "./Card.module.scss";

const Card = ({ user }) => {
  const { photo, name, position, email, phone } = user;

  return (
    <li className={styles.card}>
      <Avatar photo={photo} />
      <p className={styles.truncate}>{name}</p>
      <div className={styles.inherit_width}>
        <p className={styles.truncate}>{position}</p>
        <div className={styles.email}>
          <a
            href={`mailto:${email}`}
            className={`${styles.link} ${styles.truncate}`}
          >
            {email}
          </a>
          <div className={`${styles.tooltip} ${styles.truncate}`}>{email}</div>
        </div>
        <a
          href={`tel:${phone}`}
          className={`${styles.link} ${styles.truncate}`}
        >
          {phone}
        </a>
      </div>
    </li>
  );
};
export default Card;
