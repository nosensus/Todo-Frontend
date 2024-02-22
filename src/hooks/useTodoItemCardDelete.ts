import { useState } from "react";
import { apiRequestDelete } from "../api";

const useTodoItemCardDelete = () => {
  const [status, setStatus] = useState({ isLoading: false, error: "" });
  const { todoItemState, deleteData, refetchData } = apiRequestDelete();

  async function todoItemCardDelete(id: string) {
    await deleteData(id);
    refetchData();
    setStatus({ isLoading: todoItemState.isLoading, error: todoItemState.error })
  }

  return { status, todoItemCardDelete };
}

export { useTodoItemCardDelete }
