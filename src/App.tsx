import { Header } from "./components/Header";
import { Card, CardCreateEdit } from "./components/Card";
import { useCards } from "./hooks";
import { Loader } from "./components/Loader";
import { ErrorMessage } from "./components/ErrorMessage";
import { createPortal } from "react-dom";
import { Button } from "./components/Button";
import { Modal } from "./components/Modal";
import { useContext, useState } from "react";
import { ICard } from "./components/Card/ICard";
import { ModalContext } from "./context/ModalContext";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const { cards, loading, error, addCard } = useCards();
  const { modal, open, close } = useContext(ModalContext);
  const { editCard, setEditCard } = useState<ICard[]>([]);

  const createHandler = (card: ICard) => {
    close();
    addCard(card);
  };

  const handleEdit = (editedItem: ICard) => {
    const updatedItems = cards.map((item) =>
      item.id === editedItem.id ? editedItem : item
    );
    console.log("updatedItems", updatedItems);
    setEditCard(updatedItems);
  };

  return (
    <>
      <Header />
      <section className="container mx-auto">
        <h1 className="text-3xl font-bold mb-4">Dashboard</h1>

        <Button onClick={open}>Add Todo</Button>

        {loading && <Loader />}
        {error && <ErrorMessage error={error} />}
        {
          <div className="grid grid-cols-4 gap-4">
            {cards.map((card) => (
              <Card key={card.id} card={card} onEdit={handleEdit} />
            ))}
          </div>
        }
        <div>
          {modal &&
            createPortal(
              <Modal title="Add Todo" onClose={close}>
                <CardCreateEdit onCreate={createHandler} />
              </Modal>,
              document.body
            )}
        </div>
      </section>
    </>
  );
}

export default App;
