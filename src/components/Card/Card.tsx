import Moment from "moment";
import { ICard } from "./ICard";
import CardItem from "react-bootstrap/Card";
import { useContext, useState } from "react";
import { ModalContext } from "../../context/ModalContext";

interface CardProps {
  card: ICard;
}

function Card({ card }: CardProps) {
  const [editedName, setEditedName] = useState(card);
  const { modal, open, close } = useContext(ModalContext);

  const handleEditClick = () => {
    open();
    setEditedName(card);
    console.log("From Card.tsx", editedName);
    console.log(modal);
  };

  return (
    <CardItem>
      <CardItem.Body>
        <CardItem.Title className="mb-4">
          {modal && editedName.title}
          {!modal && card.title}
        </CardItem.Title>
        <CardItem.Text className="mb-4">
          {modal && editedName.description}
          {!modal && card.description}
        </CardItem.Text>
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
            onClick={handleEditClick}
          >
            Edit
          </a>
          <a href="#" className="btn btn-danger">
            Delete
          </a>
        </div>
      </CardItem.Body>
    </CardItem>
  );
}

export { Card };
