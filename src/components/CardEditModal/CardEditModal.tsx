import "./CardEditModal.css";
import React, { useRef, useState } from "react";
import axios from "axios";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Button } from "../Button";
import { ErrorMessage } from "../ErrorMessage/ErrorMessage";
import { format } from "date-fns";
import { ICard } from "../Card";
import { useCards } from "../../hooks";

interface EditModalProps {
  card: ICard;
  onClose: () => void;
}

const CardEditModal = ({ card, onClose }: EditModalProps) => {
  const [dueDate, setDueDate] = useState(new Date());
  const [error, setError] = useState("");
  const [post, setPost] = useState(card);
  const { cardHook } = useCards();
  const inputRef = useRef(null);

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
    const response = await axios.put<ICard>(
      "https://aufgabenliste.azurewebsites.net/api/todo" +
        "/" +
        card.id +
        "?id=" +
        card.id,
      post
    );

    cardHook(response.data);
    onClose();
  };

  return (
    <>
      <div className="modal_bg" onClick={onClose}></div>
      <div className="modal_container">
        <h1 className="mb-3 font-medium">Edit - {card.title}</h1>

        {error && <ErrorMessage error={error} />}

        <div className="mb-4">
          <form action="" onSubmit={submitHandler}>
            <div className="mb-3">
              <label className="form-label" htmlFor="title">
                Title
              </label>
              <input
                ref={inputRef}
                className="form-control"
                id="title"
                name="title"
                type="text"
                defaultValue={card.title}
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
                defaultValue={card.description}
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
                defaultValue={card.category}
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
              <div className="form-control customDatePickerWidth">
                <DatePicker
                  minDate={new Date()}
                  name="dueDate"
                  id="dueDate"
                  value={card.dueDate}
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
                checked={card.isImportant}
                onChange={changeHandler}
              />
              <label className="form-check-label" htmlFor="isImportant">
                Important
              </label>
            </div>

            <div className="d-flex justify-end">
              <Button onClick={submitHandler}>Save</Button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export { CardEditModal };
