import { useState } from "react";
import "./Style.css";
import { NumericFormat } from 'react-number-format';
export default function Header({salvar}) {
    const [descricao, setDescricao] =  useState("");
    const [tipo, setTipo] = useState(0);
    const [valor, setValor] = useState("");

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
                                <select className="form-control" id="tipo" onChange={(e) => setTipo(e.target.value)}>
                                    <option value="0">Entrada</option>
                                    <option value="1">Saída</option>
                                </select>
                            </div>
                            <div className="mt-3">
                                <label>Valor</label>
                                <NumericFormat
                                    className="form-control"
                                    thousandSeparator="."
                                    decimalSeparator=","
                                    prefix="R$ "
                                    decimalScale={2}
                                    fixedDecimalScale={true}
                                    allowNegative={false}
                                    placeholder="Digite o valor"
                                    valueIsNumericString={true}
                                    onValueChange={(values) => {
                                    const { formattedValue, value } = values;
                                        setValor(formattedValue, value); // Você pode usar `formattedValue` e `value` conforme necessário
                                    }}
                                />
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
                            <button type="button" className="btn btn-primary" onClick={() => salvar(descricao, tipo, valor)}>
                                Salvar
                            </button>
                        </div>
                    </div>
                </div>
            </div>
                
        </>
    );
}