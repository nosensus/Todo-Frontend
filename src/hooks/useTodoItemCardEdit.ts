import { useState } from "react";
import { ITodoItemCard } from "../components/todo-item-card";
import { format } from "date-fns";
import axios, { AxiosError } from "axios";

const useTodoItemCardEdit = () => {
  const [todoItemState, setTodoItemState] = useState({
    isLoading: false,
    error: "",
  });

  async function todoItemCardEdit(todoItemCard: ITodoItemCard, dueDate: Date, isImportant: boolean) {
    try {
      setTodoItemState({ isLoading: true, error: "" })
      todoItemCard.dueDate = format(dueDate, "yyyy-MM-dd'T'HH:mm:ss.SSSxxx");
      todoItemCard.isImportant = isImportant;
      todoItemCard.category = +todoItemCard.category;
      todoItemCard.cardColor = +todoItemCard.cardColor;

      await axios.put<ITodoItemCard>(
        "https://aufgabenliste.azurewebsites.net/api/todo" +
        "/" +
        todoItemCard.id +
        "?id=" +
        todoItemCard.id,
        todoItemCard
      );

      setTodoItemState({ isLoading: false, error: "" })
    } catch (e: unknown) {
      const error = e as AxiosError;
      setTodoItemState({ isLoading: false, error: error.message })
    }
  }

  return { todoItemState, todoItemCardEdit }
}

export { useTodoItemCardEdit }
