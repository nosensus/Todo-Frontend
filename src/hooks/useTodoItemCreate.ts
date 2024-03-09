import { format } from "date-fns";
import { ITodoItemCard } from "../components/todo-item-card"
import { useState } from "react";
import { createTodoItem } from "../api";
import { useTodoList } from ".";

const useTodoItemCreate = () => {
  const { queryTodoList } = useTodoList();
  const [query, setQuery] = useState<{
    isLoading: boolean,
    error: unknown | undefined
  }>({ isLoading: false, error: undefined });

  const todoItemCreate = async (todoItemCard: ITodoItemCard, dueDate: Date, isImportant: boolean) => {
    setQuery({ isLoading: true, error: undefined });

    todoItemCard.dueDate = format(dueDate, "yyyy-MM-dd'T'HH:mm:ss.SSSxxx");
    todoItemCard.isImportant = isImportant;
    todoItemCard.category = +todoItemCard.category;
    todoItemCard.cardColor = +todoItemCard.cardColor;

    try {
      await createTodoItem(todoItemCard);
    } catch (error) {
      setQuery({ isLoading: false, error: error });
    }
    finally {
      setQuery({ ...query, isLoading: false });
      queryTodoList();
    }
  }

  return { query, todoItemCreate }
}

export { useTodoItemCreate }
