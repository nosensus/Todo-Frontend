import Moment from "moment";
import { ICard } from "./ICard";
import CardItem from "react-bootstrap/Card";
import { useState } from "react";
import { createPortal } from "react-dom";
import { CardEditModal } from "../CardEditModal";
import { useCardDelete } from "../../hooks";
import { Loader } from "../Loader";
import { ErrorMessage } from "../ErrorMessage";
import { Category } from ".";

interface CardProps {
  card: ICard;
  isImportant: boolean;
  onCardDelete: (id: string) => void;
}

const Card = ({ card, isImportant, onCardDelete }: CardProps) => {
  const [editCard, setEditCard] = useState(card);
  const [showModal, setShowModal] = useState(false);
  const { isLoading, error, cardDelete } = useCardDelete();

  const EditCardHandle = () => {
    setShowModal(true);
    setEditCard(card);
  };

  const DeleteCardHandler = () => {
    cardDelete(card.id!);
    onCardDelete(card.id!);
  };

  return (
    <>
      {isLoading && <Loader />}

      {error && <ErrorMessage error={error} />}

      <CardItem className={isImportant ? "border-red-600 bg-red-200" : ""}>
        <CardItem.Body>
          <CardItem.Title className="mb-4">
            {card.title}{" "}
            <span className="float-right text-sm text-cyan-700">
              {Category[card.category]}
            </span>
          </CardItem.Title>
          <CardItem.Text className="mb-4">{card.description}</CardItem.Text>
          <CardItem.Subtitle className="mb-4 text-muted">
            Due Date: {Moment(card.dueDate).format("DD MMMM YY")}
          </CardItem.Subtitle>
          <div className="display-flex justify-content-between">
            <a href="#" className="btn btn-primary mr-2">
              Complete
            </a>
            <a
              href="#"
              className="btn btn-warning mr-2"
              onClick={EditCardHandle}
            >
              Edit
            </a>
            <a href="#" className="btn btn-danger" onClick={DeleteCardHandler}>
              Delete
            </a>
          </div>
        </CardItem.Body>
      </CardItem>

      {showModal &&
        createPortal(
          <CardEditModal
            card={editCard}
            onClose={() => setShowModal(false)}
          ></CardEditModal>,
          document.body
        )}
    </>
  );
};

export { Card };
