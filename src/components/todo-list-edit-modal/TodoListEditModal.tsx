import DatePicker from 'react-datepicker';
import { Category, Color } from '@todo/enums';
import { TodoItem } from '@todo/store';
import 'react-datepicker/dist/react-datepicker.css';

const dateToday = new Date().toDateString();

type TodoItemProps = {
  todoItem: TodoItem;
  isEdit: false;
  onClose: boolean;
};

const TodoListEditModal = ({ todoItem, isEdit, onClose }: TodoItemProps) => {
  return (
    <>
      <div className="relative">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 top-20">
          <div
            className="bg-white shadow-xl p-7 rounded-md border border-slate-300 overflow-hidden"
            style={{ width: '500px' }}
          >
            <button className="absolute text-blue-600 underline" style={{ top: '0', right: '-50px' }} onClick={onClose}>
              Close
            </button>
            <form action="">
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="title">
                  Title
                </label>
                <input
                  id="title"
                  name="title"
                  type="text"
                  defaultValue={isEdit ? todoItem.title : ''}
                  placeholder="Enter title"
                  className="shadow border rounded w-full py-2 px-3 text-gray-700 leading-tight"
                />
              </div>

              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="description">
                  Description
                </label>
                <textarea
                  id="description"
                  name="description"
                  defaultValue={isEdit ? todoItem.description : ''}
                  placeholder="Description"
                  className="shadow border rounded w-full py-2 px-3 text-gray-700 leading-tight"
                />
              </div>

              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="category">
                  Category
                </label>
                <select
                  id="category"
                  name="category"
                  defaultValue={isEdit ? todoItem.category : ''}
                  className="shadow border rounded w-full py-2 px-3 text-gray-700 leading-tight"
                >
                  <option value={Category.Home}>Home</option>
                  <option value={Category.Work}>Work</option>
                  <option value={Category.Main}>Main</option>
                  <option value={Category.Children}>Children</option>
                  <option value={Category.Car}>Car</option>
                  <option value={Category.Products}>Products</option>
                  <option value={Category.Holiday}>Holiday</option>
                </select>
              </div>

              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="dueDate">
                  Due date
                </label>
                <div className="shadow border rounded w-full py-2 px-3 text-gray-700 leading-tight">
                  <DatePicker
                    id="dueDate"
                    name="dueDate"
                    minDate={new Date()}
                    selected={isEdit ? todoItem.dueDate : dateToday}
                  />
                </div>
              </div>

              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="cardColor">
                  Card color
                </label>
                <select
                  id="cardColor"
                  name="cardColor"
                  defaultValue={isEdit ? todoItem.cardColor : ''}
                  className="shadow border rounded w-full py-2 px-3 text-gray-700 leading-tight"
                >
                  <option value={Color.White}>White</option>
                  <option value={Color.Red}>Red</option>
                  <option value={Color.Green}>Green</option>
                  <option value={Color.Black}>Black</option>
                  <option value={Color.Blue}>Blue</option>
                  <option value={Color.Yellow}>Yellow</option>
                  <option value={Color.Purple}>Purple</option>
                  <option value={Color.Pink}>Pink</option>
                </select>
              </div>

              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="createdDate">
                  Created date
                </label>
                <div className="shadow border rounded w-full py-2 px-3 text-gray-700 leading-tight">
                  <DatePicker
                    id="createdDate"
                    name="createdDate"
                    selected={isEdit ? todoItem.createdDate : dateToday}
                  />
                </div>
              </div>

              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="updatedDate">
                  Updated date
                </label>
                <div className="shadow border rounded w-full py-2 px-3 text-gray-700 leading-tight">
                  <DatePicker
                    id="updatedDate"
                    name="updatedDate"
                    minDate={new Date()}
                    selected={isEdit ? todoItem.updatedDate : dateToday}
                  />
                </div>
              </div>

              <div className="flex mb-6">
                <div className="w-1/2">
                  <label className="md:w-2/3 block text-gray-500 font-bold" htmlFor="isImportant">
                    <input
                      id="isImportant"
                      name="isImportant"
                      type="checkbox"
                      defaultChecked={isEdit ? todoItem.isImportant : false}
                      className="mr-2 leading-tight"
                    />
                    <span className="text-sm">Important</span>
                  </label>
                </div>

                <div className="w-1/2">
                  <label className="md:w-2/3 block text-gray-500 font-bold" htmlFor="isCompleted">
                    <input
                      id="isCompleted"
                      name="isCompleted"
                      type="checkbox"
                      defaultChecked={isEdit ? todoItem.isCompleted : false}
                      className="mr-2 leading-tight"
                    />
                    <span className="text-sm">Completed</span>
                  </label>
                </div>
              </div>

              {isEdit ? (
                <button className="float-right px-4 py-2 font-semibold text-sm bg-sky-500 text-white rounded-md shadow-sm opacity-100">
                  Save
                </button>
              ) : (
                <button className="float-right px-4 py-2 font-semibold text-sm bg-yellow-500 text-white rounded-md shadow-sm opacity-100">
                  Add
                </button>
              )}
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export { TodoListEditModal };
