import Listas from "./components/Listas";
import RenderizacaoCondicional from "./components/RenderizacaoCondicional";
import MostrarEsconderItem from "./components/MostrarEsconderItem";

function App() {
  const titulo = "Seção 1 do react básico";

  return (
    <>
      <div>
        <h3>{titulo}</h3>
      </div>
      <Listas />
      <hr />
      <RenderizacaoCondicional />
      <hr />
      <MostrarEsconderItem />
    </>
  );
}

export default App;
