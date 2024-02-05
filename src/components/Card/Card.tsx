import Moment from "moment";
import { CardActions } from ".";
import { FaCalendarDay } from "@react-icons/all-files/fa/FaCalendarDay";
import "./Card.css";
import { ICard } from "./ICard";

interface CardProps {
  card: ICard;
}

function Card({ card }: CardProps) {
  return (
    <section className="card">
      <div className="flex justify-between mb-4">
        <h1 className="font-medium underline decoration-sky-500 text-lg">
          {card.title}
        </h1>
        <CardActions />
      </div>
      <p className="text-base font-mono mb-4">{card.description}</p>
      <span className="flex justify-start items-center">
        <FaCalendarDay className="mr-1" />
        Due Date: {Moment(card.dueDate).format("DD MMMM YY")}
      </span>
    </section>
  );
}

export { Card };
