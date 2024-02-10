import axios, { AxiosError } from "axios";
import { useState } from "react";

const useCardDelete = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  async function cardDelete(cardId: string) {
    try {
      setError("");
      setIsLoading(true);
      await axios.delete("https://aufgabenliste.azurewebsites.net/api/todo/" + cardId)
      setIsLoading(false);
    } catch (e: unknown) {
      const error = e as AxiosError;
      setIsLoading(false);
      setError(error.message);
    }
  }

  return { error, isLoading, cardDelete };
}

export {useCardDelete}
