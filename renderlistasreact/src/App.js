import './App.css';
import ListaReact from './components/ListaReact';

function App() {
  const lista = ['react', 'vue', 'angular']
  return (
    <div className="App">
      <ListaReact items={lista}/>
      <ListaReact items={[]}/>
    </div>
  );
}

export default App;
