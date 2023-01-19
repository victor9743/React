import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./components/pages/Home";
import Company from "./components/pages/Company";
import Contact from "./components/pages/Contact";
import NewProject from "./components/pages/NewProject";
import Container from "./components/layout/Container";

function App() {
  return (
    <>
      <Router>
        <ul>
          <Link to="/">Home</Link>
          <Link to="/empresa">Empresa</Link>
          <Link to="/contato">Contato</Link>
          <Link to="/newProject">Novo Projeto</Link>
        </ul>

        <Container customClass="minHeight">
          <Routes>
              <Route exact path="/" element={<Home />} />
              <Route path="/empresa" element={<Company />} />
              <Route path="/contato" element={<Contact />} />
              <Route path="/newProject" element={<NewProject />} />
          </Routes>
        </Container>
        <p>Footer</p>
      </Router>
    </>
  );
}

export default App;

