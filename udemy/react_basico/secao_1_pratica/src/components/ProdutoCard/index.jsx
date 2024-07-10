import { useState } from "react";
import ButtonAlterarValor from "../ButtonAlterarValor";
import Carrinho from "../Carrinho";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleUp } from "@fortawesome/free-solid-svg-icons";
import { faCircleDown } from "@fortawesome/free-solid-svg-icons";
import { faCartPlus } from "@fortawesome/free-solid-svg-icons";
import { faCartArrowDown } from "@fortawesome/free-solid-svg-icons";

export default function ProdutoCard ({items}) {

    const [itemlist, setList] = useState(items);
    const [carrinho, setCarrinho] = useState([]);
    
    function aumentar_valor(id) {

        let item = itemlist.map(i => {
            if (i.id === id) {
                i.quantidade_unitaria +=  1;
                i.preco_final = i.preco * i.quantidade_unitaria;
            }

            return i;
        })

        setList(item);
    }

    function diminuir_valor(id) {

        let item = itemlist.map(i => {

            if (i.id === id) {
                i.quantidade_unitaria -= 1;
                i.preco_final = i.preco_final - i.preco;
            }

            return i;
        });

        setList(item);
    }

    function item_selecionado (id) {
        let array_carrinhos = carrinho;

        let items = itemlist.map(i => {

            if (i.id === id) {
                i.selecionado = !i.selecionado;

                if (i.selecionado) {
                    array_carrinhos.push(i);
                } else {
                    i.quantidade_unitaria = 1;
                    i.preco_final = i.preco;

                    array_carrinhos = array_carrinhos.filter(a => a.id !== id );
                }

                
            }


            return i;
        });

        setList(items);
        setCarrinho(array_carrinhos);
    }

    return (
        <>
            <div className="row p-5">
                { itemlist && itemlist.map((item) =>
                <div className={`card ${item.selecionado ? "border-success" : ""} col-md-2 mx-2 text-center`} key={item.id} >
                    <div className="py-3 d-flex justify-content-end">
                        { !item.selecionado ? 
                            <button className="btn btn-success" onClick={() => item_selecionado(item.id) }>
                                <FontAwesomeIcon icon={faCartPlus} />
                            </button>
                        : 
                            <button className="btn btn-danger" onClick={() => item_selecionado(item.id) }>
                                <FontAwesomeIcon icon={faCartArrowDown} />
                            </button>
                        }
                    </div>
                    <div className="text-center p-3">
                        <img src={`${item.imagem}`} alt={`${item.nome}`} style={{width: "120px"}} />
                    </div>
                    <div>
                        {item.nome}
                    </div>
                    <div>
                        Preço Unitário: <strong>{item.preco.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</strong>
                    </div>
                    <div className="mb-3">
                        Preço Final: <strong>{item.preco_final.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</strong>
                    </div>
                    { item.selecionado && 
                        <div className="row p-3">
                            <ButtonAlterarValor alterar_tipo={false} funcao={(id) => diminuir_valor(id)} item={item.id} desativar_button = { item.quantidade_unitaria <= 1 ?  true : false } botao_texto ={<FontAwesomeIcon icon={faCircleDown} />} />
                            <div className="col-4">
                                { item.quantidade_unitaria }
                            </div>
                            <ButtonAlterarValor alterar_tipo={true} funcao={(id) => aumentar_valor(id)} item={item.id} botao_texto ={<FontAwesomeIcon icon={faCircleUp} />} />
                        </div>
                    }
                </div>
                ) }
            </div>

            <Carrinho carrinho={carrinho} />
        </>
    )
}