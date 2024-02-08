import { useState, useEffect } from "react"
import { ICard } from "../components/Card/ICard";
import axios, { AxiosError } from "axios";

const useCards = () => {
  const [cards, setCards] = useState<ICard[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  function cardHook(card: ICard) {
    setCards(prev =>[...prev, card]);
  }

  async function fetchCards() {
    try {
      setError("");
      setIsLoading(true);
      const response = await axios.get<ICard[]>("https://aufgabenliste.azurewebsites.net/api/todo")
      setCards(response.data);
      setIsLoading(false);
    } catch (e: unknown) {
      const error = e as AxiosError;
      setIsLoading(false);
      setError(error.message);
    }
  }

  useEffect(() => {
    fetchCards();
  }, []);

  return {error, isLoading, cards, cardHook};
}

export {useCards}