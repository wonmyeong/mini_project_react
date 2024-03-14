import "./App.css";
import Navbar from "./component/Navbar";
import ProductCard from "./component/ProductCard";
import { Container } from "react-bootstrap";
import MenProductPage from "./pages/MenProductPage";
import "bootstrap/dist/css/bootstrap.min.css";
import ButtonCategory from "./component/ButtonCategory";

function App() {
  return (
    <div>
      <Navbar />
      <Container className="main-container">
        <MenProductPage />
        {/* <ButtonCategory /> */}
      </Container>
    </div>
  );
}

export default App;
// json-server --watch db.json --port 5000
