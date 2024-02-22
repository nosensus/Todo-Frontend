import { useState } from "react";
import { ITodoItemCard } from "../components/todo-item-card";
import { apiRequestGet } from ".";

const apiRequestAdd = () => {
  const [todoItemState, setTodoItemState] = useState({ isLoading: false, error: "" });
  const { getData } = apiRequestGet();

  const addData = async (newTodoItem: ITodoItemCard) => {
    try {
      setTodoItemState({ isLoading: true, error: "" });

      await fetch("https://aufgabenliste.azurewebsites.net/api/todo", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newTodoItem)
      });

      setTodoItemState({ isLoading: false, error: "" })
    } catch (e) {
      setTodoItemState({ isLoading: false, error: "Error happened" })
    }
  }

  const refetchData = async () => {
    await getData();
  }

  return { todoItemState, addData, refetchData }
}

export { apiRequestAdd }
