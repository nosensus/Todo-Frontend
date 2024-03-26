import { useState } from 'react';
import { createPortal } from 'react-dom';
import Moment from 'moment';
import { Category } from '@todo/enums';
import { TodoItem } from '@todo/store';
import { TodoListEditModal } from '@todo/components';

type TodoItemProps = {
  item: TodoItem;
};

const TodoListItem = ({ item }: TodoItemProps) => {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <div
        className="rounded border border-gray-400 p-3 cursor-pointer"
        key={item.id}
        onClick={() => setShowModal(true)}
      >
        <div className="flex justify-between">
          <h2 className="text-xl font-serif mb-2 text-slate-500">{item.title}</h2>
          <span className="text-blue-400 text-sm">{Category[item.category]}</span>
        </div>
        <p className="font-mono mb-2 text-slate-500">{item.description}</p>
        <p className="text-sm text-slate-500">Due Date: {Moment(item.dueDate).format('DD MMMM YY')}</p>
      </div>

      {showModal &&
        createPortal(
          <TodoListEditModal todoItem={item} isEdit={true} onClose={() => setShowModal(false)} />,
          document.body,
        )}
    </>
  );
};

export { TodoListItem };
