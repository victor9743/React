import Header from "./components/Header";
import FinancaList from "./components/FinancaList";
import { useEffect, useState } from "react";

function App() {
  const [financas_db, getFinancaDb] = useState([]);

  useEffect(() => {
    
    if (localStorage.getItem("financas_db") == null) {
      getFinancaDb(localStorage.setItem("financas_db", []));
    } else {
      getFinancaDb(localStorage.getItem("financas_db"));
    }

  }, []);

  let ultimo_id = financas_db === "" ? 1 : financas_db.length + 1;

  return (
    <>
      <Header ultimo_id= {ultimo_id}  />
      <FinancaList financa_db={financas_db} />

    </>
  );
}

export default App;
