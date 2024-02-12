import { Header } from "./components/Header";
import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Routes } from "react-router-dom";
import { CompletePage } from "./pages/CompletePage";
import { AllPage } from "./pages/AllPage";
import { ActivePage } from "./pages/ActivePage";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<ActivePage />} />
        <Route path="/all" element={<AllPage />} />
        <Route path="/complete" element={<CompletePage />} />
      </Routes>
    </>
  );
}

export default App;
