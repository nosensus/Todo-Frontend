import axios, { AxiosError } from "axios";
import { useState } from "react";
import { ITodoItemCard } from "../components/todo-item-card";

const useTodoItemCardComplete = () => {
  const [todoItemState, setTodoItemState] = useState({
    isLoading: false,
    error: "",
  });

  async function todoItemCardComplete(todoItemCard: ITodoItemCard) {
    try {
      setTodoItemState({ isLoading: true, error: "" })
      todoItemCard.isCompleted = true;
      await axios.put<ITodoItemCard>(
        "https://aufgabenliste.azurewebsites.net/api/todo" + "/" + todoItemCard.id + "?id=" + todoItemCard.id,
        todoItemCard)
      setTodoItemState({ isLoading: false, error: "" })
    } catch (e: unknown) {
      const error = e as AxiosError;
      setTodoItemState({ isLoading: false, error: error.message })
    }
  }

  return { todoItemState, todoItemCardComplete };
}

export { useTodoItemCardComplete }
