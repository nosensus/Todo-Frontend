import axios from "axios";
import { Button } from "../Button";
import { ICard } from "./ICard";
import React, { useState } from "react";
import { ErrorMessage } from "../ErrorMessage/ErrorMessage";

interface ICreateProps {
  onCreate: (card: ICard) => void;
}

function CardCreate({ onCreate }: ICreateProps) {
  const [value, setValue] = useState("");
  const [error, setError] = useState("");

  const [post, setPost] = useState({
    title: "",
    description: "",
    category: 1,
  });

  const changeHandler = (event: any) => {
    setPost({ ...post, [event.target.name]: event.target.value });
  };

  const submitHandler = async (event: React.FormEvent) => {
    event.preventDefault();
    setError("");

    if (value.trim().length === 0) {
      setError("Required field");
      return;
    }

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
          <label htmlFor="title">Title</label>
          <input id="title" name="title" type="text" onChange={changeHandler} />

          <label htmlFor="description">Description</label>
          <textarea
            name="description"
            id="description"
            onChange={changeHandler}
          ></textarea>

          <label htmlFor="category">Category</label>
          <select name="category" id="category" onChange={changeHandler}>
            <option value="None">None</option>
            <option value="Home">Home</option>
            <option value="Work">Work</option>
            <option value="Main">Main</option>
            <option value="Children">Children</option>
            <option value="Car">Car</option>
            <option value="Products">Products</option>
            <option value="Holiday">Holiday</option>
          </select>
        </form>
      </div>

      {error && <ErrorMessage error={error} />}

      <Button onClick={submitHandler}>Create</Button>
    </>
  );
}

export { CardCreate };
