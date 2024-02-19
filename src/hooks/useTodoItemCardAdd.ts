import { format } from "date-fns";
import { ITodoItemCard } from "../components/todo-item-card";
import axios, { AxiosError } from "axios";
import { useState } from "react";

const useTodoItemCardAdd = () => {
  const [todoItemState, setTodoItemState] = useState({
    isLoading: false,
    error: "",
  });

  async function todoItemCardAdd(todoItemCard: ITodoItemCard, dueDate: Date, isImportant: boolean) {
    try {
      setTodoItemState({ isLoading: true, error: "" })

      todoItemCard.dueDate = format(dueDate, "yyyy-MM-dd'T'HH:mm:ss.SSSxxx");
      todoItemCard.isImportant = isImportant;
      todoItemCard.category = +todoItemCard.category;
      todoItemCard.cardColor = +todoItemCard.cardColor;

      await axios.post<ITodoItemCard>(
        "https://aufgabenliste.azurewebsites.net/api/todo",
        todoItemCard
      );

      setTodoItemState({isLoading: false, error: ""})
    } catch (e: unknown) {
      const error = e as AxiosError;
      setTodoItemState({ isLoading: false, error: error.message })
    }
  }

  return { todoItemState, todoItemCardAdd }
}

export { useTodoItemCardAdd }
