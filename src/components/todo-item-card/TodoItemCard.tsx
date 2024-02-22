import Moment from "moment";
import { ITodoItemCard } from "./ITodoItemCard";
import CardItem from "react-bootstrap/Card";
import { useState } from "react";
import { createPortal } from "react-dom";
import { TodoItemCardEdit } from "../todo-item-card-edit";
import { useTodoItemCardDelete } from "../../hooks";
import { Category } from ".";
import { useTodoItemCardComplete } from "../../hooks/useTodoItemCardComplete";

interface TodoItemCardProps {
  todoItemCard: ITodoItemCard;
  isImportant: boolean;
  onCardDelete: (id: string) => void;
  onCardComplete: (complete: boolean) => void;
  onCardEdit: (card: ITodoItemCard) => void;
}

const TodoItemCard = ({
  todoItemCard,
  isImportant,
  onCardComplete,
  onCardDelete,
  onCardEdit,
}: TodoItemCardProps) => {
  const [todoItemCardEdit, setTodoItemCardEdit] = useState(todoItemCard);
  const [showModal, setShowModal] = useState(false);
  const { todoItemCardDelete } = useTodoItemCardDelete();
  const { todoItemCardComplete } = useTodoItemCardComplete();

  const EditCardHandle = () => {
    setShowModal(true);
    setTodoItemCardEdit(todoItemCard);
    onCardEdit(todoItemCard);
  };

  const DeleteCardHandler = () => {
    todoItemCardDelete(todoItemCard.id!);
    onCardDelete(todoItemCard.id!);
  };

  const CompleteCardHandler = () => {
    todoItemCardComplete(todoItemCard);
    onCardComplete(todoItemCard.isCompleted);
  };

  return (
    <>
      <CardItem className={isImportant ? "border-red-600 bg-red-200" : ""}>
        <CardItem.Body
          className={todoItemCard.isCompleted ? "bg-gray-100" : ""}
        >
          <CardItem.Title className="mb-4">
            {todoItemCard.title}
            <span className="float-right text-sm text-cyan-700 ml-2">
              {Category[todoItemCard.category]}
            </span>
          </CardItem.Title>
          <CardItem.Text className="mb-4">
            {todoItemCard.description}
          </CardItem.Text>
          <CardItem.Subtitle className="mb-4 text-muted">
            Due Date: {Moment(todoItemCard.dueDate).format("DD MMMM YY")}
          </CardItem.Subtitle>
          <div className="display-flex justify-content-between">
            {!todoItemCard.isCompleted && (
              <>
                <a
                  href="#"
                  className="btn btn-primary mr-2"
                  onClick={CompleteCardHandler}
                >
                  Complete
                </a>
                <a
                  href="#"
                  className="btn btn-warning mr-2"
                  onClick={EditCardHandle}
                >
                  Edit
                </a>
                <a
                  href="#"
                  className="btn btn-danger mr-0"
                  onClick={DeleteCardHandler}
                >
                  Delete
                </a>
              </>
            )}
          </div>
        </CardItem.Body>
      </CardItem>

      {showModal &&
        createPortal(
          <TodoItemCardEdit
            todoItemCard={todoItemCardEdit}
            onClose={() => setShowModal(false)}
          ></TodoItemCardEdit>,
          document.body
        )}
    </>
  );
};

export { TodoItemCard };
