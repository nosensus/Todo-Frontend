import { useState } from "react"
import { ITodoItemCard } from "../components/todo-item-card";
import { getTodoList } from "../api";

const useTodoList = () => {
  const [todoList, setTodoList] = useState<ReadonlyArray<ITodoItemCard> | undefined>(undefined);
  const [query, setQuery] = useState<{
    isLoading: boolean,
    error: undefined
  }>({ isLoading: false, error: undefined });

  const queryTodoList = async () => {
    setQuery({ isLoading: true, error: undefined });

    try {
      const response = await getTodoList();
      const data = await response.json();
      setTodoList(data);
      setQuery({ ...query });
    } catch (e) {
      // console.log(e);
      // setQuery({ ...query, });
    } finally {
      // this setQuery - re-write list to undefined, I have commented this call
      setQuery({ ...query, isLoading: false });
    }
  }

  return { todoList, query, queryTodoList };
}

export { useTodoList }
