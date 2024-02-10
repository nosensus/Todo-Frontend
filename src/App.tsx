import { Header } from "./components/Header";
import { useCards } from "./hooks";
import { Loader } from "./components/Loader";
import { ErrorMessage } from "./components/ErrorMessage";
import { createPortal } from "react-dom";
import { Button } from "./components/Button";
import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { CardAddModal } from "./components/CardAddModal/CardAddModal";
import { Card, ICard } from "./components/Card";

function App() {
  const { cards, isLoading, error, cardHook } = useCards();
  const [showModal, setShowModal] = useState(false);
  const [deleteCard, setDeleteCard] = useState(String);

  const cardAddHandler = (card: ICard) => {
    cardHook(card);
  };

  const cardDeleteHandler = (id: string) => {
    setDeleteCard(id);
  };

  return (
    <>
      <Header />

      <section className="container mx-auto">
        <h1 className="text-3xl font-bold mb-4">Dashboard</h1>

        <Button onClick={() => setShowModal(true)}>Add Todo</Button>

        {isLoading && <Loader />}

        {error && <ErrorMessage error={error} />}

        {
          <div className="grid grid-cols-4 gap-4">
            {cards
              .filter((c) => c.id != deleteCard)
              .map((card) => (
                <Card
                  isImportant={card.isImportant}
                  key={card.id}
                  card={card}
                  onCardDelete={() => cardDeleteHandler(card.id!)}
                />
              ))}
          </div>
        }

        {showModal &&
          createPortal(
            <CardAddModal
              onCardCreate={cardAddHandler}
              onCloseModal={() => setShowModal(false)}
            ></CardAddModal>,
            document.body
          )}
      </section>
    </>
  );
}

export default App;
