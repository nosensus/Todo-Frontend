import { Header } from "./components/header";
import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Routes } from "react-router-dom";
import {
  TodoItemsCompletePage,
  TodoItemsPage,
  TodoItemsActivePage,
} from "./pages/index";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<TodoItemsActivePage />} />
        <Route path="/all" element={<TodoItemsPage />} />
        <Route path="/complete" element={<TodoItemsCompletePage />} />
      </Routes>
    </>
  );
}

export default App;
