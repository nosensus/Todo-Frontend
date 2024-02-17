import { format } from "date-fns";
import { ITodoItemCard } from "../components/todo-item-card";
import axios, { AxiosError } from "axios";
import { useState } from "react";

const useTodoItemCardAdd = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  async function todoItemCardAdd(todoItemCard: ITodoItemCard, dueDate: Date, isImportant: boolean) {
    try {
      setError("");
      setIsLoading(true);

      todoItemCard.dueDate = format(dueDate, "yyyy-MM-dd'T'HH:mm:ss.SSSxxx");
      todoItemCard.isImportant = isImportant;
      todoItemCard.category = +todoItemCard.category;
      todoItemCard.cardColor = +todoItemCard.cardColor;

      await axios.post<ITodoItemCard>(
        "https://aufgabenliste.azurewebsites.net/api/todo",
        todoItemCard
      );

      setIsLoading(false);
    } catch (e: unknown) {
      const error = e as AxiosError;
      setIsLoading(false);
      setError(error.message);
    }
  }

  return { isLoading, error, todoItemCardAdd }
}

export { useTodoItemCardAdd }