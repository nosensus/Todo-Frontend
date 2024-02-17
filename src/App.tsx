import { Header } from "./components/header";
import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Routes } from "react-router-dom";
import { Complete } from "./pages/Complete";
import { All } from "./pages/All";
import { Active } from "./pages/Active";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Active />} />
        <Route path="/all" element={<All />} />
        <Route path="/complete" element={<Complete />} />
      </Routes>
    </>
  );
}

export default App;
