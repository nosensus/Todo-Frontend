import React, { useState } from "react";
import axios from "axios";
import DatePicker from "react-datepicker";
import { Button } from "../Button";
import { ErrorMessage } from "../ErrorMessage/ErrorMessage";
import { format } from "date-fns";
import { ICard } from "../Card";
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
  isImportant: false,
  isCompleted: false,
};

const CardAddModal = ({ onCardCreate, onCloseModal }: CardAddModalProps) => {
  const [dueDate, setDueDate] = useState(new Date());
  const [error, setError] = useState("");
  const [post, setPost] = useState<ICard>(card);

  const changeHandler = (event: any) => {
    setPost({ ...post, [event.target.name]: event.target.value });
  };

  const changeHandlerDate = (date: any) => {
    setDueDate(date);
  };

  const submitHandler = async (event: React.FormEvent) => {
    event.preventDefault();
    setError("");

    post.dueDate = format(dueDate, "yyyy-MM-dd'T'HH:mm:ss.SSSxxx");
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
                <option value="None">None</option>
                <option value="Home">Home</option>
                <option value="Work">Work</option>
                <option value="Main">Main</option>
                <option value="Children">Children</option>
                <option value="Car">Car</option>
                <option value="Products">Products</option>
                <option value="Holiday">Holiday</option>
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
