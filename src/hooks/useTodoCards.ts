import { useState, useEffect } from "react"
import { ITodoItemCard } from "../components/todo-item-card/ITodoItemCard";
import axios, { AxiosError } from "axios";

const useTodoCards = () => {
  const [todoCards, setTodoCards] = useState<ITodoItemCard[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  function cardHook(todoItemCard: ITodoItemCard) {
    setTodoCards(prev => [...prev, todoItemCard]);
  }

  async function fetchCards() {
    try {
      setError("");
      setIsLoading(true);
      const response = await axios.get<ITodoItemCard[]>("https://aufgabenliste.azurewebsites.net/api/todo")
      setTodoCards(response.data);
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

  return { error, isLoading, todoCards, cardHook };
}

export { useTodoCards }