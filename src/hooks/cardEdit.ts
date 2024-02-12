import { useState } from "react";
import { ICard } from "../components/Card";
import { format } from "date-fns";
import axios, { AxiosError } from "axios";

const useCardEdit = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  async function cardEdit(card: ICard, dueDate: Date, isImportant: boolean) {
    try {
      setError("");
      setIsLoading(true);

      card.dueDate = format(dueDate, "yyyy-MM-dd'T'HH:mm:ss.SSSxxx");
      card.isImportant = isImportant;
      card.category = +card.category;
      card.cardColor = +card.cardColor;

      await axios.put<ICard>(
        "https://aufgabenliste.azurewebsites.net/api/todo" +
        "/" +
        card.id +
        "?id=" +
        card.id,
        card
      );

      setIsLoading(false);
    } catch (e: unknown) {
      const error = e as AxiosError;
      setIsLoading(false);
      setError(error.message);
    }
  }

  return { isLoading, error, cardEdit }
}

export { useCardEdit }