import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/pages/Login";
import Cadastro from "./components/pages/Cadastro";
function App() {
  return (
    <>
      <Router>
        <Routes>
            <Route exact path="/" element={<Login />} />
            <Route path="/cadastrarUsuario" element={<Cadastro />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
