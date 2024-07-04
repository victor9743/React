import Listas from "./components/Listas";
function App() {
  const titulo = "Seção 1 do react básico";

  return (
    <>
      <div>
        <h3>{titulo}</h3>
      </div>
      <Listas />
    </>
  );
}

export default App;
