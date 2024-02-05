import { Button } from "../Button";
import "./Modal.css";

interface ModalProps {
  onClose: () => void;
}

function Modal({ onClose }: ModalProps) {
  return (
    <>
      <div className="modal">
        <div className="modal__container">
          <div className="mb-4">
            <form action="">
              <label htmlFor="title">Title</label>
              <input id="title" type="text" />

              <label htmlFor="description">Description</label>
              <textarea name="" id="description"></textarea>

              <label htmlFor="category">Category</label>
              <select name="" id="category">
                <option value="">Car</option>
                <option value="">Market</option>
                <option value="">Home</option>
                <option value="">Family</option>
              </select>
            </form>
          </div>
          <div className="flex justify-between">
            <Button onClick={() => {}}>Add</Button>
            <Button onClick={onClose}>Close</Button>
          </div>
        </div>
      </div>
    </>
  );
}

export { Modal };
