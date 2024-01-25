import { useEffect, useState } from "react";
import axios from 'axios';
// import { Produto } from "./components/produto";
import Produto from "./components/produto";

function App() {
  const [descricao, setDescricao] = useState("");
  const [valor, setValor] = useState("");
  const [produtos, setProdutos] = useState([]);

  useEffect(() => {
    axios({
      method: 'get',
      url: 'http://localhost:3006/db_produtos',
    }).catch(err => console.log(err))
    .then( (response) => { 
      setProdutos(response.data);
    })
  },[produtos]);

  const salvarValor = (event) => {
    axios({
      method: 'post',
      url: 'http://localhost:3006/db_produtos',
      data: {
        id_produto: Date.now(),
        descricao: descricao,
        valor: valor,
        date_created: JSON.stringify(new Date())
      }
    }).catch(err => console.log(err))
    .then( response => console.log(response))
  }

  const handleValue = (event) => {
    const {name, value} = event.target;

    if (name === "descricao") setDescricao(value);
    if (name === "valor") setValor(value)

  }

  return (
    <>
      <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN" crossOrigin="anonymous" />
      <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-C6RzsynM9kWDrMNeT87bh95OGNyZPhcTNXj1NW7RuBCsyN/o0jlpcV8Qyq46cDfL" crossOrigin="anonymous" />
      <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.8/dist/umd/popper.min.js" integrity="sha384-I7E8VVD/ismYTF4hNIPjVp/Zjvgyol6VFvRkX/vR+Vc4jQkC+hVqc2pM8ODewa9r" crossOrigin="anonymous" />
      <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.min.js" integrity="sha384-BBtl+eGJRgqQAUMxJ7pMwbEyER4l1g+O15P+16Ep7Q9Q+zqX6gSbd85u4mG4QzX+" crossOrigin="anonymous" />
      <div className="row">
        <div className="col-6 container" style={{marginTop: "100px"}}>
          <table className="table table-bordered">
            <thead>
              <tr>
                <th>#</th>
                <th>Descrição</th>
                <th>Valor</th>
                <th>Data de criação</th>
                <th>Opções</th>
              </tr>
            </thead>
              <tbody>
                { produtos.length > 0 && 
                    produtos.map((produto, key)=>{
                      return (
                        <Produto 
                          key={key}
                          id = {produto.id_produto}
                          descricao = {produto.descricao}
                          valor = {produto.valor}
                          data_criacao = {produto.date_created}
                        />
                      );
                    })
                }
              </tbody>
          </table>
        </div>
      </div>
      <form onSubmit={salvarValor} className="row container">
        <div className="col-12">
          <label>Descrição</label>
          <input className="form-control col-3" type="text" name="descricao" onChange={handleValue} />
        </div>
        <div className="col-12">
          <label>Valor</label>
          <input className="form-control col-3" type="number" name="valor" onChange={handleValue} />
        </div>
        <div>
          <button type="submit">Salvar</button>
        </div>
      </form>
    </>
  );
}

export default App;
