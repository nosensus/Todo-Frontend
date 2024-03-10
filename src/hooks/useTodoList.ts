import { useContext } from "react";
import { type TodoListQueryProps, TodoListContext } from "../store";

const useTodoList = (): TodoListQueryProps => {
  return useContext(TodoListContext);
}

export { useTodoList }
