import axios, { AxiosError } from "axios";
import { useState } from "react";

const useTodoItemCardDelete = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  async function todoItemCardDelete(todoItemCardId: string) {
    try {
      setError("");
      setIsLoading(true);
      await axios.delete("https://aufgabenliste.azurewebsites.net/api/todo" + "/" + todoItemCardId)
      setIsLoading(false);
    } catch (e: unknown) {
      const error = e as AxiosError;
      setIsLoading(false);
      setError(error.message);
    }
  }

  return { error, isLoading, todoItemCardDelete };
}

export { useTodoItemCardDelete }
