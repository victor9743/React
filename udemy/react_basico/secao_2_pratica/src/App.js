import Header from "./components/Header";
import FinancaList from "./components/FinancaList";
import { useEffect, useState } from "react";

function App() {
  const [financas_db, setFinancaDb] = useState([]);

  useEffect(() => {
    
    if (localStorage.getItem("financas_db")) {
      setFinancaDb(JSON.parse(localStorage.getItem("financas_db")));
    }
    
  }, []);

  function salvar (descricao, tipo, valor) {
    valor = valor.replace("R$", "").replace(",", "").replace(".", "");
  
    financas_db.push({
      id: financas_db.length + 1 ,
      descricao: descricao,
      tipo: tipo,
      valor: (parseFloat(valor) / 100).toFixed(2)
    });

    localStorage.setItem("financas_db", JSON.stringify(financas_db));
    setFinancaDb(JSON.parse(localStorage.getItem("financas_db")));
    window.location.reload();

  }

  return (
    <>
      <Header salvar={salvar} />
      <FinancaList financa_db={financas_db} />

    </>
  );
}

export default App;
