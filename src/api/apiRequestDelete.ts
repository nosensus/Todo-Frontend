import { useState } from "react";
import { apiRequestGet } from ".";

const apiRequestDelete = () => {
  const [todoItemState, setTodoItemState] = useState({ isLoading: false, error: "" });
  const { getData } = apiRequestGet();

  const deleteData = async (id: string) => {
    try {
      setTodoItemState({ isLoading: true, error: "" });
      await fetch(`https://aufgabenliste.azurewebsites.net/api/todo/${id}`, {
        method: 'DELETE'
      });
      setTodoItemState({ isLoading: false, error: "" });
    } catch (e) {
      setTodoItemState({ isLoading: false, error: "Error happened" });
    }
  }

  const refetchData = async () => {
    await getData();
  }

  return { todoItemState, deleteData, refetchData }
}

export { apiRequestDelete }
