import { useState } from "react";
import { ITodoItemCard } from "../components/todo-item-card";
import { format } from "date-fns"
import { editTodoItem } from "../api";

const useTodoItemEdit = () => {
  const [query, setQuery] = useState<{
    isLoading: boolean,
    error: unknown | undefined
  }>({ isLoading: false, error: undefined });

  const todoItemEdit = async (todoItemCard: ITodoItemCard, dueDate: Date, isImportant: boolean) => {
    setQuery({ ...query, isLoading: true });

    todoItemCard.dueDate = format(dueDate, "yyyy-MM-dd'T'HH:mm:ss.SSSxxx");
    todoItemCard.isImportant = isImportant;
    todoItemCard.category = +todoItemCard.category;
    todoItemCard.cardColor = +todoItemCard.cardColor;

    try {
      editTodoItem(todoItemCard);
    } catch (error) {

    } finally {

    }
  }

  return { query, todoItemEdit }
}

export { useTodoItemEdit }
