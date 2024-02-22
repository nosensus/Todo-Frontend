import { format } from "date-fns";
import { ITodoItemCard } from "../components/todo-item-card"
import { useState } from "react";
import { apiRequestAdd } from "../api";

const useTodoItemCardAdd = () => {
  const [status, setStatus] = useState({ isLoading: false, error: "" });
  const { todoItemState, addData, refetchData } = apiRequestAdd();

  function todoItemCardAdd(todoItemCard: ITodoItemCard, dueDate: Date, isImportant: boolean) {
    todoItemCard.dueDate = format(dueDate, "yyyy-MM-dd'T'HH:mm:ss.SSSxxx");
    todoItemCard.isImportant = isImportant;
    todoItemCard.category = +todoItemCard.category;
    todoItemCard.cardColor = +todoItemCard.cardColor;
    addData(todoItemCard);
    refetchData();

    setStatus({ isLoading: todoItemState.isLoading, error: todoItemState.error });
  }

  return { status, todoItemCardAdd }
}

export { useTodoItemCardAdd }
