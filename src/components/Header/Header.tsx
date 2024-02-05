import { useState } from "react";
import { Button } from "../Button";
import { Modal } from "../Modal";
import { createPortal } from "react-dom";

function Header() {
  const [showModal, setShowModal] = useState(false);

  return (
    <header className="py-4 px-4 bg-gray-100 w-100 mb-4">
      <div className="container mx-auto flex justify-between">
        <a href="#">Logo</a>
        <div>
          <Button onClick={() => setShowModal(true)}>New Todo</Button>
          {showModal &&
            createPortal(
              <Modal onClose={() => setShowModal(false)} />,
              document.body
            )}
        </div>
      </div>
    </header>
  );
}

export { Header };
