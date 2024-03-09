import { useState } from "react";
import { deleteTodoItem } from "../api";
import { useTodoList } from ".";

const useTodoItemDelete = () => {
  const [query, setQuery] = useState<{
    isLoading: boolean,
    error: unknown | undefined
  }>({ isLoading: false, error: undefined });

  const { queryTodoList } = useTodoList();

  const todoItemDelete = async (id: string) => {
    setQuery({ ...query, isLoading: true });

    try {
      await deleteTodoItem(id);
    } catch (error) {
      setQuery({ isLoading: false, error: error });
    } finally {
      setQuery({ ...query, isLoading: false });
      queryTodoList();
    }
  }

  return { query, todoItemDelete };
}

export { useTodoItemDelete }
