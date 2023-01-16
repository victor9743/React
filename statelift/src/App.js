import './App.css';
import { useState } from 'react';
import SeuNome from './components/SeuNome';
import Saudacao from './components/Saudacao';

function App() {
  const [nome, setNome] = useState();
  return (
    <div className="App">
      <SeuNome setNome={setNome}/>
      <Saudacao nome={nome} />
    </div>
  );
}

export default App;
