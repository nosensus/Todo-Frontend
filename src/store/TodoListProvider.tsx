import { useState, createContext, ReactNode } from 'react';
import { getTodoList } from '@todo/api';
import { TodoItem } from './TodoItem';

type TodoListQuery = {
  isLoading: boolean;
  error?: unknown | undefined;
  todoList: ReadonlyArray<TodoItem>;
};

type TodoListQueryProps = {
  queryProps: TodoListQuery;
  queryTodoList: () => Promise<void>;
};

const TodoListContext = createContext<TodoListQueryProps>({
  queryProps: { isLoading: false, error: '', todoList: [] },
  queryTodoList: async () => {},
});

const TodoListProvider = ({ children }: { children: ReactNode }) => {
  const [queryProps, setQueryProps] = useState<TodoListQuery>({
    isLoading: false,
    error: '',
    todoList: [],
  });

  const queryTodoList = async () => {
    setQueryProps({ isLoading: true, error: undefined, todoList: [] });
    try {
      const response = await getTodoList();
      setQueryProps({ isLoading: false, error: '', todoList: response.json() });
    } catch (error) {
      setQueryProps({ isLoading: false, error: error, todoList: [] });
    }
  };

  return <TodoListContext.Provider value={{ queryProps, queryTodoList }}>{children}</TodoListContext.Provider>;
};

export { TodoListContext, TodoListProvider, type TodoListQuery, type TodoListQueryProps };
