import Moment from "moment";
import { ITodoItemCard } from "./ITodoItemCard";
import CardItem from "react-bootstrap/Card";
import { useState } from "react";
import { createPortal } from "react-dom";
import { TodoItemCardEdit } from "../todo-item-card-edit";
import {
  useTodoItemDelete,
  useTodoItemComplete,
  useTodoList,
} from "../../hooks";
import { Category } from "./TodoItemCardEnums";

interface TodoItemCardProps {
  todoItemCard: ITodoItemCard;
  isImportant: boolean;
}

const TodoItemCard = ({ todoItemCard, isImportant }: TodoItemCardProps) => {
  const [showModal, setShowModal] = useState(false);
  const { todoItemDelete } = useTodoItemDelete();
  const { todoItemComplete } = useTodoItemComplete();
  const { queryTodoList } = useTodoList();

  const EditCardHandle = async () => {
    setShowModal(true);
  };

  const DeleteCardHandler = () => {
    todoItemDelete(todoItemCard.id!);
  };

  const CompleteCardHandler = () => {
    todoItemComplete(todoItemCard);
  };

  const closeEditModal = async () => {
    await queryTodoList();
    setShowModal(false);
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
            todoItemCard={todoItemCard}
            onClose={closeEditModal}
          ></TodoItemCardEdit>,
          document.body
        )}
    </>
  );
};

export { TodoItemCard };
