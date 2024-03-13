import { useEffect } from 'react';
import { useTodoList } from '@todo/hooks';

const TodoList = () => {
  const {
    queryProps: { todoList },
    queryTodoList,
  } = useTodoList();

  useEffect(() => {
    queryTodoList();
  }, []);

  return (
    <div>
      <h1>Data:</h1>
      {todoList.map((card) => (
        <div key={card.id}>{card.title}</div>
      ))}
    </div>
  );
};

export { TodoList };
