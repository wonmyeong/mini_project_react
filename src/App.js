import "./App.css";
import Navbar from "./component/Navbar";
import ProductCard from "./component/ProductCard";
import { Container } from "react-bootstrap";
import MenProductPage from "./pages/MenProductPage";
import "bootstrap/dist/css/bootstrap.min.css";
import ButtonCategory from "./component/ButtonCategory";
import { Route, Routes } from "react-router-dom";
import WomenProductPage from "./pages/WomenProductPage";

function App() {
  return (
    <div>
      <Navbar />
      <ButtonCategory />

      <Routes>
        <Route path="/" element={<MenProductPage />} />
        <Route path="/women" element={<WomenProductPage />} />
      </Routes>
    </div>
  );
}

export default App;
// json-server --watch db.json --port 5000
