import axios, { AxiosError } from "axios";
import { useState } from "react";
import { ICard } from "../components/Card";

const useCardComplete = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  async function cardComplete(card: ICard) {
    try {
      setError("");
      setIsLoading(true);
      card.isCompleted = true;
      await axios.put<ICard>(
        "https://aufgabenliste.azurewebsites.net/api/todo" + "/" + card.id + "?id=" + card.id,
        card)
      setIsLoading(false);
    } catch (e: unknown) {
      const error = e as AxiosError;
      setIsLoading(false);
      setError(error.message);
    }
  }

  return { error, isLoading, cardComplete };
}

export { useCardComplete }