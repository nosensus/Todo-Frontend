import { useState } from "react";
import { ITodoItemCard } from "../components/todo-item-card";
import { format } from "date-fns";
import axios, { AxiosError } from "axios";

const useTodoItemCardEdit = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  async function todoItemCardEdit(todoItemCard: ITodoItemCard, dueDate: Date, isImportant: boolean) {
    try {
      setError("");
      setIsLoading(true);

      todoItemCard.dueDate = format(dueDate, "yyyy-MM-dd'T'HH:mm:ss.SSSxxx");
      todoItemCard.isImportant = isImportant;
      todoItemCard.category = +todoItemCard.category;
      todoItemCard.cardColor = +todoItemCard.cardColor;

      await axios.put<ITodoItemCard>(
        "https://aufgabenliste.azurewebsites.net/api/todo" +
        "/" +
        todoItemCard.id +
        "?id=" +
        todoItemCard.id,
        todoItemCard
      );

      setIsLoading(false);
    } catch (e: unknown) {
      const error = e as AxiosError;
      setIsLoading(false);
      setError(error.message);
    }
  }

  return { isLoading, error, todoItemCardEdit }
}

export { useTodoItemCardEdit }