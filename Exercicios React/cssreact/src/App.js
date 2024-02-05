import './App.css';
import Pessoa from './components/Pessoa';

function App() {
  return (
    <div className="App">
      <Pessoa nome='Victor Costa' idade='25' profissao='analista de sistemas' foto='https://via.placeholder.com/150' />
    </div>
  );
}

export default App;
