import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { useTodoList } from '@todo/hooks';
import { TodoListItem } from '../todo-list-item';
import { TodoListEditModal } from '../todo-list-edit-modal';

const TodoList = () => {
  const [showModal, setShowModal] = useState(false);
  const {
    queryProps: { todoList },
    queryTodoList,
  } = useTodoList();

  useEffect(() => {
    queryTodoList();
  }, []);

  return (
    <div>
      <h1 className="text-xl mb-5">Current tasks</h1>

      <button
        onClick={() => setShowModal(true)}
        className="px-4 py-2 font-semibold text-sm bg-sky-500 text-white rounded-md shadow-sm opacity-100 mb-4"
      >
        Add todo
      </button>

      <div className="grid gap-x-5 gap-y-5 grid-cols-3">
        {todoList.map((item) => (
          <TodoListItem key={item.id} item={item} />
        ))}
      </div>

      {showModal && createPortal(<TodoListEditModal onClose={() => setShowModal(false)} />, document.body)}
    </div>
  );
};

export { TodoList };
