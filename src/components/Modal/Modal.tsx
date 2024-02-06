import "./Modal.css";

interface ModalProps {
  children: React.ReactNode;
  title: string;
  onClose: () => void;
}

function Modal({ children, title, onClose }: ModalProps) {
  return (
    <>
      <div className="modal_bg" onClick={onClose}></div>
      <div className="modal">
        <h2>{title}</h2>
        {children}
      </div>
    </>
  );
}

export { Modal };
