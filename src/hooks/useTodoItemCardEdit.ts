import { useState } from "react";
import { ITodoItemCard } from "../components/todo-item-card";
import { format } from "date-fns"
import { apiRequestEdit } from "../api";

const useTodoItemCardEdit = () => {
  const [status, setStatus] = useState({ isLoading: false, error: "" });
  const { todoItemState, editData, refetchData } = apiRequestEdit();

  async function todoItemCardEdit(todoItemCard: ITodoItemCard, dueDate: Date, isImportant: boolean) {
    todoItemCard.dueDate = format(dueDate, "yyyy-MM-dd'T'HH:mm:ss.SSSxxx");
    todoItemCard.isImportant = isImportant;
    todoItemCard.category = +todoItemCard.category;
    todoItemCard.cardColor = +todoItemCard.cardColor;
    editData(todoItemCard);
    refetchData();

    setStatus({ isLoading: todoItemState.isLoading, error: todoItemState.error });
  }

  return { status, todoItemCardEdit }
}

export { useTodoItemCardEdit }
