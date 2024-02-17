import axios, { AxiosError } from "axios";
import { useState } from "react";
import { ITodoItemCard } from "../components/todo-item-card";

const useTodoItemCardComplete = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  async function todoItemCardComplete(todoItemCard: ITodoItemCard) {
    try {
      setError("");
      setIsLoading(true);
      todoItemCard.isCompleted = true;
      await axios.put<ITodoItemCard>(
        "https://aufgabenliste.azurewebsites.net/api/todo" + "/" + todoItemCard.id + "?id=" + todoItemCard.id,
        todoItemCard)
      setIsLoading(false);
    } catch (e: unknown) {
      const error = e as AxiosError;
      setIsLoading(false);
      setError(error.message);
    }
  }

  return { error, isLoading, todoItemCardComplete };
}

export { useTodoItemCardComplete }