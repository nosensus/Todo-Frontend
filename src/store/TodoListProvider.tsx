import { type ReactNode, createContext, useState } from "react";
import { ITodoItemCard } from "../components/todo-item-card";
import { getTodoList } from "../api";

type TodoListQuery = {
  isLoading: boolean;
  error?: unknown;
  todoList: ReadonlyArray<ITodoItemCard>;
};

type TodoListQueryProps = {
  queryProps: TodoListQuery;
  queryTodoList: () => Promise<void>;
};

const TodoListContext = createContext<TodoListQueryProps>({
  queryTodoList: async () => {},
  queryProps: { isLoading: false, error: "", todoList: [] },
});

const TodoListProvider = ({ children }: { children: ReactNode }) => {
  const [queryProps, setQueryProps] = useState<TodoListQuery>({
    isLoading: false,
    todoList: [],
  });

  const queryTodoList = async () => {
    setQueryProps({ isLoading: true, error: undefined, todoList: [] });
    try {
      const response = await getTodoList();
      const data = await response.json();
      setQueryProps({ isLoading: false, error: undefined, todoList: data });
    } catch (e) {
      setQueryProps({ isLoading: false, error: e, todoList: [] });
    }
  };

  return (
    <TodoListContext.Provider
      value={{
        queryProps,
        queryTodoList,
      }}
    >
      {children}
    </TodoListContext.Provider>
  );
};

export {
  TodoListContext,
  TodoListProvider,
  type TodoListQuery,
  type TodoListQueryProps,
};
