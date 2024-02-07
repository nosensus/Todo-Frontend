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
      <div className="modal_container">
        <h1 className="mb-3 font-medium">{title}</h1>
        {children}
      </div>
    </>
  );
}

export { Modal };
