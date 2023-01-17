import { useState } from "react";
import axios from "axios";
function BuscaCep({setCep}) {
    const [meuCep, setMeuCep] = useState()
    function searchCep() {
        axios
        .get(`https://cep.awesomeapi.com.br/json/${meuCep}`)
        .then(function ({ data, status }) {
            if (status === 200) {
                setCep([data.address, data.cep, data.city, data.district])
            } else {
                console.log("erro")
                setCep(["Cep nao encontrado"])
            }
        })
        .catch(function (err) {
          console.log(err);
          setCep(["Cep nao encontrado"])
        })
      
    }

    return (
        <>
            <input type="number" placeholder="Digite o numero do Cep" onChange={(e) => setMeuCep(e.target.value)}/>
            <button onClick={searchCep}>Pesquisar</button>
        </>
    )
}

export default BuscaCep;