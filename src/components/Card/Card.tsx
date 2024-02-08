import Moment from "moment";
import { ICard } from "./ICard";
import CardItem from "react-bootstrap/Card";
import { useState } from "react";
import { createPortal } from "react-dom";
import { CardEditModal } from "../CardEditModal";

interface CardProps {
  card: ICard;
}

const Card = ({ card }: CardProps) => {
  const [editCard, setEditCard] = useState(card);
  const [showModal, setShowModal] = useState(false);

  const EditCardHandle = () => {
    setShowModal(true);
    setEditCard(card);
  };

  return (
    <>
      <CardItem>
        <CardItem.Body>
          <CardItem.Title className="mb-4">{card.title}</CardItem.Title>
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
            <a href="#" className="btn btn-danger">
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
