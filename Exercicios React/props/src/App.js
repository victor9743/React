import './App.css';
import SalvarNome from './components/SalvarNome';
import Pessoa from './components/Pessoa';
function App() {
  return (
    <div className="App">
      <SalvarNome nome="Victor" />
      <SalvarNome nome="Maria" />
      <Pessoa nome='Victor Costa' idade='25' profissao='analista de sistemas' foto='https://via.placeholder.com/150' />
    </div>
  );
}

export default App;
