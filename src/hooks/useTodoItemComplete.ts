import { useState } from "react";
import { ITodoItemCard } from "../components/todo-item-card";
import { editTodoItem } from "../api";
import { useTodoList } from "./useTodoList";


const useTodoItemComplete = () => {
  const [query, setQuery] = useState<{
    isLoading: boolean,
    error: unknown | undefined
  }>({ isLoading: false, error: undefined });

  const { queryTodoList } = useTodoList();

  const todoItemComplete = async (todoItemCard: ITodoItemCard) => {
    setQuery({ ...query, isLoading: true });

    todoItemCard.isCompleted = true;

    try {
      await editTodoItem(todoItemCard);
    } catch (error) {
      setQuery({ isLoading: false, error: error });
    } finally {
      setQuery({ ...query, isLoading: false });
      queryTodoList();
    }
  }

  return { query, todoItemComplete };
}

export { useTodoItemComplete }
