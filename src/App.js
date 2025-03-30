import React from "react";
import Header from "./sections/Header/Header";
import MainSection from "./sections/MainSection/MainSection";
import CardsSection from "./sections/CardsSection/CardsSection";
import SignUpSection from "./sections/SignUpSection/SignUpSection";
import Container from "./components/Container/Container";
import useUsers from "./hooks/useUsers";

const App = () => {
  const { users, isLoading, nextPage, error, loadMore, setCurrentPage } =
    useUsers();

  const cardProps = {
    users,
    isLoading,
    nextPage,
    error,
    loadMore,
  };

  return (
    <div>
      <Header />
      <main>
        <Container>
          <MainSection />
          <CardsSection {...cardProps} />
          <SignUpSection setCurrentPage={setCurrentPage} />
        </Container>
      </main>
    </div>
  );
};

export default App;
