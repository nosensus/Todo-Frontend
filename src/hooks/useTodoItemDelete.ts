import { useState } from "react";
import { deleteTodoItem } from "../api";

const useTodoItemDelete = () => {
  const [query, setQuery] = useState<{
    isLoading: boolean,
    error: unknown | undefined
  }>({ isLoading: false, error: undefined });


  const todoItemDelete = async (id: string) => {
    setQuery({ ...query, isLoading: true });

    try {
      await deleteTodoItem(id);
    } catch (error) {

    } finally {
      setQuery({ ...query, isLoading: false });
    }
  }

  return { query, todoItemDelete };
}

export { useTodoItemDelete }
