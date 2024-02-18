import axios, { AxiosError } from "axios";
import { useState } from "react";

const useTodoItemCardDelete = () => {
  const [todoItemState, setTodoItemState] = useState({
    isLoading: false,
    error: "",
  });

  async function todoItemCardDelete(todoItemCardId: string) {
    try {
      setTodoItemState({ isLoading: true, error: "" })
      await axios.delete("https://aufgabenliste.azurewebsites.net/api/todo" + "/" + todoItemCardId)
      setTodoItemState({ isLoading: false, error: "" })
    } catch (e: unknown) {
      const error = e as AxiosError;
      setTodoItemState({ isLoading: false, error: error.message })
    }
  }

  return { todoItemState, todoItemCardDelete };
}

export { useTodoItemCardDelete }
