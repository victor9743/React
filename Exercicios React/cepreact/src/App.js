import './App.css';
import BuscaCep from './components/BuscaCep';
import Endereco from './components/Endereco';
import { useState } from "react";


function App() {
  const [cep, setCep] = useState()
  
  return (
    <div className="App">
      <h3>Busca cep</h3>
      <BuscaCep setCep= {setCep}/>
      <Endereco getCep={cep} />
    </div>
  );
}

export default App;
