import { useState } from "react";
import { ITodoItemCard } from "../components/todo-item-card";
import { apiRequestGet } from ".";

const apiRequestEdit = () => {
  const [todoItemState, setTodoItemState] = useState({ isLoading: false, error: "" });
  const { getData } = apiRequestGet();

  const editData = async (editTodoItem: ITodoItemCard) => {
    try {
      setTodoItemState({ isLoading: true, error: "" });
      await fetch(`https://aufgabenliste.azurewebsites.net/api/todo/${editTodoItem.id}?id=${editTodoItem.id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(editTodoItem)
      });
      setTodoItemState({ isLoading: false, error: "" });
    } catch (e) {
      setTodoItemState({ isLoading: false, error: "Error happened" });
    }
  }

  const refetchData = async () => {
    await getData();
  }

  return { todoItemState, editData, refetchData }
}

export { apiRequestEdit }
