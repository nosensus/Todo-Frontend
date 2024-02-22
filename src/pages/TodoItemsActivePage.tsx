import { Loader } from "../components/loader";
import { ErrorMessage } from "../components/error-message";
import { createPortal } from "react-dom";
import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { TodoItemCard, ITodoItemCard } from "../components/todo-item-card";
import { TodoItemCardAdd } from "../components/todo-item-card-add";
import { apiRequestGet } from "../api";

const TodoItemsActivePage = () => {
  // const { todoItemState, todoItems, cardHook } = useTodoCards();
  const [showModal, setShowModal] = useState(false);
  const [cardDelete, setCardDelete] = useState(String);
  const [cardComplete, setCardComplete] = useState(false);
  const [todoItemCardEdit, setCardEdit] = useState<ITodoItemCard>();

  const { todoItems, request } = apiRequestGet();

  return (
    <>
      <section className="container mx-auto">
        <h1 className="text-3xl font-bold mb-4">Active</h1>

        <button
          className="btn btn-primary mb-3"
          onClick={() => setShowModal(true)}
        >
          Add Todo
        </button>

        {request.isLoading && <Loader />}

        {request.error && <ErrorMessage error={request.error} />}

        {
          <div className="grid grid-cols-4 gap-4">
            {todoItems
              .filter((c) => c.id != cardDelete && c.isCompleted != true)
              .map((card) => (
                <TodoItemCard
                  isImportant={card.isImportant}
                  key={card.id}
                  todoItemCard={card}
                  onCardComplete={() => setCardComplete(card.isCompleted)}
                  onCardDelete={() => setCardDelete(card.id!)}
                  onCardEdit={() => setCardEdit(card)}
                />
              ))}
          </div>
        }

        {showModal &&
          createPortal(
            <TodoItemCardAdd
              onCloseModal={() => setShowModal(false)}
            ></TodoItemCardAdd>,
            document.body
          )}
      </section>
    </>
  );
};

export { TodoItemsActivePage };
