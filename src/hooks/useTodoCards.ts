import { useState } from "react"
import { apiRequestGet } from "../api";

const useTodoCards = () => {
  const [todoItemState, setTodoItemState] = useState({ isLoading: false, error: null });
  const { todoItems, request, getData } = apiRequestGet();

  getData();
  setTodoItemState({ isLoading: request.isLoading, error: request.error });

  return { todoItems, todoItemState };
}

export { useTodoCards }
