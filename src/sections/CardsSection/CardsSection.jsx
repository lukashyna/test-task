import React from "react";
import Card from "../../components/Card/Card";
import Button from "../../components/Button/Button";
import Loader from "../../components/Loader/Loader";
import ErrorMessage from "../../components/ErrorMessage/ErrorMessage";

import styles from "./CardSection.module.scss";

const CardsSection = ({ users, isLoading, nextPage, error, loadMore }) => (
  <section className={styles.cards_section} id="users">
    <h2>Working with GET request</h2>
    <ul className={styles.card_list}>
      {users?.map((user) => (
        <Card key={user.id} user={user} />
      ))}
    </ul>
    {isLoading && <Loader />}
    <ErrorMessage errorMessage={error} />
    {nextPage && (
      <Button onClick={loadMore} disabled={isLoading} text="Show more" />
    )}
  </section>
);

export default CardsSection;
