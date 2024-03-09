import { Loader } from "../components/loader";
import { createPortal } from "react-dom";
import { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { TodoItemCard } from "../components/todo-item-card";
import { TodoItemCardAdd } from "../components/todo-item-card-add";
import { useTodoList } from "../hooks/useTodoList";
import { ErrorMessage } from "../components/error-message";

const TodoItemsActivePage = () => {
  const [showModal, setShowModal] = useState(false);
  const {
    queryProps: { isLoading, error, todoList },
    queryTodoList,
  } = useTodoList();

  useEffect(() => {
    queryTodoList();
  }, []);

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

        {isLoading && <Loader />}

        {/* {<ErrorMessage message={{ error }} />} */}

        {
          <div className="grid grid-cols-4 gap-4">
            {todoList
              ?.filter((c) => c.isCompleted != true)
              .map((card) => (
                <TodoItemCard
                  isImportant={card.isImportant}
                  key={card.id}
                  todoItemCard={card}
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
