import './App.css';
import Button from './components/Button';

function App() {
  function meuEvento() {
    console.log("hello wolrd")
  }

  function outroEvento(){
    console.log("outro evento")
  }

  return (
    <>
      <Button evento={meuEvento} texto="Primeiro Evento"/>
      <Button evento={outroEvento} texto="Outro Evento"/>
    </>
  );
}

export default App;
