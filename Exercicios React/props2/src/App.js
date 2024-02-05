import './App.css';
import Marca from './components/Marca';

function App() {
  return (
    <>
      <Marca marca= "Ferrari" ano_lancamento={1997} />
      <Marca />
    </>
  );
}

export default App;
