import { useEffect, useState } from "react"
import { ITodoItemCard } from "../components/todo-item-card";

const apiRequestGet = () => {
  const [request, setRequest] = useState({ isLoading: true, error: null });
  const [todoItems, setTodoItems] = useState<ITodoItemCard[]>([]);

  const getData = async () => {
    try {
      const response = await fetch("https://aufgabenliste.azurewebsites.net/api/todo")
      if (!response.ok) {
        throw new Error("Network error")
      }
      setTodoItems(await response.json());
      setRequest({ isLoading: false, error: null });
    } catch (e) {
      console.log(e);
      setRequest({ isLoading: false, error: null });
    }
  }

  useEffect(() => {
    getData();
  }, []);

  return { todoItems, request, getData }
}

export { apiRequestGet }
