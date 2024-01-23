import { useState } from "react";
function App() {
  const [descricao, setDescricao] = useState("");

  const pegar_inputs_salvos = (evento) => {
    setDescricao(evento.target.value);
  }

  const salvarValor = () => {
    console.log(descricao);
  }

  return (
    <>
      <div>
        <input type="text" value={descricao}  onChange={pegar_inputs_salvos} />
      </div>
      <div>
        <button type="button" onClick={salvarValor}>Salvar</button>
      </div>
    </>
  );
}

export default App;
