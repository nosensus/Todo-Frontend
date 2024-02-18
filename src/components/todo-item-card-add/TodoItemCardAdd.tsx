import React, { useState } from "react";
import DatePicker from "react-datepicker";
import { ErrorMessage } from "../error-message/ErrorMessage";
import { Category, Color, ITodoItemCard } from "../todo-item-card";
import "react-datepicker/dist/react-datepicker.css";
import "./TodoItemCardAdd.css";
import { useTodoItemCardAdd } from "../../hooks/useTodoItemCardAdd";
import { Loader } from "../loader";

interface TodoItemCardAddProps {
  onCardCreate: (card: ITodoItemCard) => void;
  onCloseModal: () => void;
}

const emptyTodoItem: ITodoItemCard = {
  title: "",
  description: "",
  category: 0,
  cardColor: 0,
  isImportant: false,
  isCompleted: false
};

const TodoItemCardAdd = ({
  onCardCreate,
  onCloseModal,
}: TodoItemCardAddProps) => {
  const [dueDate, setDueDate] = useState(new Date());
  const [post, setPost] = useState<ITodoItemCard>(emptyTodoItem);
  const [isImportant, setIsImportant] = useState(false);
  const { todoItemState, todoItemCardAdd } = useTodoItemCardAdd();

  const changeHandler = (event: any) => {
    setPost({ ...post, [event.target.name]: event.target.value });
  };

  const changeHandlerDate = (date: any) => {
    setDueDate(date);
  };

  const importantHandler = (event: any) => {
    setIsImportant(event.target.checked);
  };

  const submitHandler = async (event: React.FormEvent) => {
    event.preventDefault();
    await todoItemCardAdd(post, dueDate, isImportant);
    onCloseModal();
  };

  return (
    <>
      <div className="modal_bg" onClick={onCloseModal}></div>
      <div className="modal_container">
        <h1 className="mb-3 font-medium">Add Todo</h1>

        {todoItemState.isLoading && <Loader />}

        {todoItemState.error && <ErrorMessage error={todoItemState.error} />}

        <div className="mb-4">
          <form action="" onSubmit={submitHandler}>
            <div className="mb-3">
              <label className="form-label" htmlFor="title">
                Title
              </label>
              <input
                className="form-control"
                id="title"
                name="title"
                type="text"
                onChange={changeHandler}
              />
            </div>

            <div className="mb-3">
              <label className="form-label" htmlFor="description">
                Description
              </label>
              <textarea
                className="form-control"
                name="description"
                id="description"
                onChange={changeHandler}
              ></textarea>
            </div>

            <div className="mb-3">
              <label className="form-label" htmlFor="category">
                Category
              </label>
              <select
                className="form-control"
                name="category"
                id="category"
                onChange={changeHandler}
              >
                <option value={Category.None}>None</option>
                <option value={Category.Home}>Home</option>
                <option value={Category.Work}>Work</option>
                <option value={Category.Main}>Main</option>
                <option value={Category.Children}>Children</option>
                <option value={Category.Car}>Car</option>
                <option value={Category.Products}>Products</option>
                <option value={Category.Holiday}>Holiday</option>
              </select>
            </div>

            <div className="mb-3">
              <label className="form-label" htmlFor="cardColor">
                Card color
              </label>
              <select
                className="form-control"
                name="cardColor"
                id="cardColor"
                onChange={changeHandler}
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

            <div className="mb-3">
              <label className="form-label" htmlFor="dueDate">
                Due date
              </label>
              <div className="form-control customDatePickerWidth">
                <DatePicker
                  minDate={new Date()}
                  name="dueDate"
                  id="dueDate"
                  selected={dueDate}
                  onChange={changeHandlerDate}
                />
              </div>
            </div>

            <div className="form-check mb-3">
              <input
                className="form-check-input"
                type="checkbox"
                id="isImportant"
                name="isImportant"
                defaultChecked={emptyTodoItem.isImportant}
                onChange={importantHandler}
              />
              <label className="form-check-label" htmlFor="isImportant">
                Important
              </label>
            </div>

            <div className="d-flex justify-end">
              <button className="btn btn-primary mb-0" onClick={submitHandler}>
                Add
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export { TodoItemCardAdd };
