import { useState, useEffect } from "react"
import { ICard } from "../components/Card/ICard";
import axios, { AxiosError } from "axios";

function useCards() {
  const [cards, setCards] = useState<ICard[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function fetchCards() {
    try {
      setError("");
      setLoading(true);
      const response = await axios.get<ICard[]>("https://aufgabenliste.azurewebsites.net/api/todo")
      setCards(response.data);
      setLoading(false);
    } catch (e: unknown) {
      const error = e as AxiosError;
      setLoading(false);
      setError(error.message);
    }
  }

  useEffect(() => {
    fetchCards();
  }, []);

  return {error, loading, cards};
}

export {useCards}