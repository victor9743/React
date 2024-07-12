import { useState } from "react";
import "./Style.css";
export default function Header({ultimo_id}) {
    const [descricao, setDescricao] =  useState("");
    const [tipo, setTipo] = useState("");
    const [valor, setValor] = useState("");

    function salvar() {
        setTipo(document.getElementById("tipo").value);

        let financas = localStorage.getItem("financas_db") === null ? [] : localStorage.getItem("financas_db");
        // financas = [...financas,
        //     {
        //         id: ultimo_id,
        //         descricao: descricao,
        //         tipo: tipo,
        //         valor: valor
        //     }
        // ];
        console.log({
            id: ultimo_id,
            descricao: descricao,
            tipo: tipo,
            valor: valor
        });
        // localStorage.setItem("financas_db", {
        //     id: ultimo_id,
        //     descricao: descricao,
        //     tipo: tipo,
        //     valor: valor
        // });

        // console.log(localStorage.getItem("financas_db"));
    }

    return(
        <>
            <div className="header d-flex align-items-center justify-content-end">
                <button
                    type="button"
                    className="btn btn-sm btn-primary"
                    data-bs-toggle="modal"
                    data-bs-target="#exampleModal"
                    id="botao_adicionar"
                >
                    + Adicionar
                </button>
            </div>
                
            <div
                className="modal fade"
                id="exampleModal"
                tabIndex={-1}
                aria-labelledby="exampleModalLabel"
                aria-hidden="true"
            >
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h1 className="modal-title fs-5" id="exampleModalLabel">
                            Adicionar Finança
                        </h1>
                        <button
                            type="button"
                            className="btn-close"
                            data-bs-dismiss="modal"
                            aria-label="Close"
                        />
                        </div>
                        <div className="modal-body">
                            <div>
                                <label>Descrição</label>
                                <input type="text" className="form-control" onChange={(e) => setDescricao(e.target.value)} />
                            </div>
                            <div className="mt-3">
                                <label>Tipo</label>
                                <select className="form-control" id="tipo">
                                    <option value="0">Entrada</option>
                                    <option value="1">Saída</option>
                                </select>
                            </div>
                            <div className="mt-3">
                                <label>Valor</label>
                                <input type="text" className="form-control" onChange={(e) => setValor(e.target.value)} />
                            </div>
                        </div>
                        <div className="modal-footer">
                            <button
                                type="button"
                                className="btn btn-secondary"
                                data-bs-dismiss="modal"
                            >
                                Fechar
                            </button>
                            <button type="button" className="btn btn-primary" onClick={() => salvar()}>
                                Salvar
                            </button>
                        </div>
                    </div>
                </div>
            </div>
                
        </>
    );
}