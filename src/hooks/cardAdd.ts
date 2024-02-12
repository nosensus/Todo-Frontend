import { format } from "date-fns";
import { ICard } from "../components/Card";
import axios, { AxiosError } from "axios";
import { useState } from "react";

const useCardAdd = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  async function cardAdd(card: ICard, dueDate: Date, isImportant: boolean) {
    try {
      setError("");
      setIsLoading(true);

      card.dueDate = format(dueDate, "yyyy-MM-dd'T'HH:mm:ss.SSSxxx");
      card.isImportant = isImportant;
      card.category = +card.category;
      card.cardColor = +card.cardColor;

      await axios.post<ICard>(
        "https://aufgabenliste.azurewebsites.net/api/todo",
        card
      );

      setIsLoading(false);
    } catch (e: unknown) {
      const error = e as AxiosError;
      setIsLoading(false);
      setError(error.message);
    }
  }

  return { isLoading, error, cardAdd }
}

export { useCardAdd }