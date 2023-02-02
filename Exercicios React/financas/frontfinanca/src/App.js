import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/pages/Login";
import Cadastro from "./components/pages/Cadastro";
import Financa from "./components/pages/Financa";
import NewFinanca from "./components/pages/NewFinanca";
function App() {
  return (
    <>
      <Router>
        <Routes>
            <Route exact path="/" element={<Login />} />
            <Route path="/cadastrarUsuario" element={<Cadastro />} />
            <Route path="/Financa/PaginaInicial" element={<Financa />} />
            <Route path="/Financa/NewFinanca" element={<NewFinanca />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
