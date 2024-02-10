import React, { useState } from "react";
import axios from "axios";
import DatePicker from "react-datepicker";
import { Button } from "../Button";
import { ErrorMessage } from "../ErrorMessage/ErrorMessage";
import { format } from "date-fns";
import { Category, Color, ICard } from "../Card";
import "react-datepicker/dist/react-datepicker.css";
import "./CardAddModal.css";

interface CardAddModalProps {
  onCardCreate: (card: ICard) => void;
  onCloseModal: () => void;
}

const card: ICard = {
  title: "",
  description: "",
  category: 1,
  dueDate: "",
  cardColor: 1,
  isImportant: false,
  isCompleted: false,
};

const CardAddModal = ({ onCardCreate, onCloseModal }: CardAddModalProps) => {
  const [dueDate, setDueDate] = useState(new Date());
  const [error, setError] = useState("");
  const [post, setPost] = useState<ICard>(card);
  const [isImportant, setIsImportant] = useState(false);

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
    setError("");

    post.dueDate = format(dueDate, "yyyy-MM-dd'T'HH:mm:ss.SSSxxx");
    post.isImportant = isImportant;
    post.category = +post.category;
    post.cardColor = +post.cardColor;

    const response = await axios.post<ICard>(
      "https://aufgabenliste.azurewebsites.net/api/todo",
      post
    );

    onCardCreate(response.data);
    onCloseModal();
  };

  return (
    <>
      <div className="modal_bg" onClick={onCloseModal}></div>
      <div className="modal_container">
        <h1 className="mb-3 font-medium">Add Todo</h1>

        {error && <ErrorMessage error={error} />}

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
              <div className="form-control">
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
                checked={isImportant}
                onChange={importantHandler}
              />
              <label className="form-check-label" htmlFor="isImportant">
                Important
              </label>
            </div>

            <div className="d-flex justify-end">
              <Button onClick={submitHandler}>Add</Button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export { CardAddModal };
