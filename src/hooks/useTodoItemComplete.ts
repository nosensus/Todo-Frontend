import { useState } from "react";
import { ITodoItemCard } from "../components/todo-item-card";
import { editTodoItem } from "../api";

const useTodoItemComplete = () => {
  const [query, setQuery] = useState<{
    isLoading: boolean,
    error: unknown | undefined
  }>({ isLoading: false, error: undefined });

  const todoItemComplete = async (todoItemCard: ITodoItemCard) => {
    setQuery({ ...query, isLoading: true });

    todoItemCard.isCompleted = true;

    try {
      await editTodoItem(todoItemCard);
    } catch (error) {

    } finally {

    }
  }

  return { query, todoItemComplete };
}

export { useTodoItemComplete }
