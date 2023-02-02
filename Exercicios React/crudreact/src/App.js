import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PaginaInicial from "./Pages/PaginaIncial";
import NewItem from "./Pages/NewItem";
function App() {
  return (
    <Router>
          <Routes>
              <Route exact path="/" element={<PaginaInicial />} />
              <Route exact path="/newItem" element={<NewItem />} />
          </Routes>
      </Router>
  );
}

export default App;
