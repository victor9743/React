import { useState } from 'react';
import './App.css';

function App() {
  const [nome, setNome] = useState("");
  const [sobrenome, setSobrenome] = useState("");
  const [nomecompleto, setNomeCompleto] = useState("");

  function salvar() {
    setNomeCompleto(`${nome} ${sobrenome}`);
  }

  return (
    <div className="App">
      <div>
        <h3>Nome Completo: {nomecompleto && nomecompleto}</h3>
      </div>
      <div>
        <input type='text' onChange={(e)=> setNome(e.target.value)} />
      </div>
      <div>
        <input type='text' onChange={(e)=> setSobrenome(e.target.value)} />
      </div>
      <div>
        <button onClick={salvar}>Salvar</button>
      </div>
    </div>
  );
}

export default App;
