import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { ModalState } from "./context/ModalContext";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <ModalState>
    <App />
  </ModalState>
);
