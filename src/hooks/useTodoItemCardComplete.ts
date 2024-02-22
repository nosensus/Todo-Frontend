import { useState } from "react";
import { ITodoItemCard } from "../components/todo-item-card";
import { apiRequestEdit } from "../api";

const useTodoItemCardComplete = () => {
  const [status, setStatus] = useState({ isLoading: false, error: "" });
  const { todoItemState, editData, refetchData } = apiRequestEdit();

  async function todoItemCardComplete(todoItemCard: ITodoItemCard) {
    todoItemCard.isCompleted = true;
    editData(todoItemCard);
    refetchData();

    setStatus({ isLoading: todoItemState.isLoading, error: todoItemState.error });
  }

  return { status, todoItemCardComplete };
}

export { useTodoItemCardComplete }
