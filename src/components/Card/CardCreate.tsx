import React, { useState } from "react";
import axios from "axios";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Button } from "../Button";
import { ICard } from "./ICard";
import { ErrorMessage } from "../ErrorMessage/ErrorMessage";
import { format } from "date-fns";

interface ICreateProps {
  onCreate: (card: ICard) => void;
}

function CardCreate({ onCreate }: ICreateProps) {
  const [dueDate, setDueDate] = useState(new Date());
  const [error, setError] = useState("");

  const [post, setPost] = useState({
    title: "",
    description: "",
    category: 1,
    dueDate: "",
    isImportant: false,
  });

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

    onCreate(response.data);
  };

  return (
    <>
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
              value=""
              id="isImportant"
              name="isImportant"
            />
            <label className="form-check-label" htmlFor="isImportant">
              Important
            </label>
          </div>
        </form>
      </div>

      {error && <ErrorMessage error={error} />}

      <div className="d-flex justify-end">
        <Button onClick={submitHandler}>Add</Button>
      </div>
    </>
  );
}

export { CardCreate };
