import { useState, useEffect } from "react"
import { ITodoItemCard } from "../components/todo-item-card/ITodoItemCard";
import axios, { AxiosError } from "axios";

  const useTodoCards = () => {
    const [todoItems, setTodoItems] = useState<ITodoItemCard[]>([]);
  const [todoItemState, setTodoItemState] = useState({
    isLoading: false,
    error: "",
  });

  function cardHook(todoItemCard: ITodoItemCard) {
    setTodoItems(prev => [...prev, todoItemCard]);
  }

  async function fetchCards() {
    try {
      setTodoItemState({ isLoading: false, error: "" })
      const response = await axios.get<ITodoItemCard[]>("https://aufgabenliste.azurewebsites.net/api/todo")
      setTodoItems(response.data);
      setTodoItemState({ isLoading: false, error: "" })
    } catch (e: unknown) {
      const error = e as AxiosError;
      setTodoItemState({ isLoading: false, error: error.message })
    }
  }

  useEffect(() => {
    fetchCards();
  }, []);

    return { todoItemState, todoItems, cardHook };
}

export { useTodoCards }
