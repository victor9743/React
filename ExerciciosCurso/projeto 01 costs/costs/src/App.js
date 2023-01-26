import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// components
import Home from "./components/pages/Home";
import Company from "./components/pages/Company";
import Contact from "./components/pages/Contact";
import NewProject from "./components/pages/NewProject";
import Projects from "./components/pages/Projects";
import Project from "./components/pages/Project";

// layouts
import Container from "./components/layout/Container";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Container customClass="minHeight">
          <Routes>
              <Route exact path="/" element={<Home />} />
              <Route path="/empresa" element={<Company />} />
              <Route path="/contato" element={<Contact />} />
              <Route path="/novoProjeto" element={<NewProject />} />
              <Route path="/projetos" element={<Projects />} />
              <Route path="/projeto/:id" element={<Project />} />
          </Routes>
        </Container>
        <Footer />
      </Router>
    </>
  );
}

export default App;

