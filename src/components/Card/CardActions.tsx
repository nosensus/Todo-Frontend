import { FaTrash } from "@react-icons/all-files/fa/FaTrash";
import { FaPen } from "@react-icons/all-files/fa/FaPen";
import { FaCheck } from "@react-icons/all-files/fa/FaCheck";
import "./Card.css";

function CardActions() {
  return (
    <div className="flex justify-center">
      <FaTrash className="ml-2" />
      <FaPen className="ml-2" />
      <FaCheck className="ml-2" />
    </div>
  );
}

export { CardActions };
