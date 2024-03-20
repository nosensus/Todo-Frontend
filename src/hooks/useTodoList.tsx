import { useContext } from 'react';
import { TodoListContext, type TodoListQueryProps } from '@todo/store';

const useTodoList = (): TodoListQueryProps => {
  return useContext(TodoListContext);
};

export { useTodoList };
