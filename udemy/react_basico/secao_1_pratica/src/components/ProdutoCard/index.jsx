import { useEffect, useState } from "react";
import ButtonAlterarValor from "../ButtonAlterarValor";
import Carrinho from "../Carrinho";

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
                i.preco_final = i.preco_final * i.quantidade_unitaria;

            }

            return i;
        })


        setList(item);
    }

    function item_selecionado (id, event) {
        event.stopPropagation();
        let item = itemlist.filter((i) => i.id === id ? i.selecionado = !i.selecionado : i.selecionado);

        setCarrinho(item);
    }

    return (
        <>
            <div className="row p-5">
                { itemlist && itemlist.map((item) =>
                <div className="card col-md-2 mx-2 text-center" key={item.id} onClick={(e) => item_selecionado(item.id, e) }>
                    <div className="text-center p-3">
                        <img src={`${item.imagem}`} alt={`${item.nome}`} style={{width: "120px"}} />
                    </div>
                    <div>
                        {item.nome}
                    </div>
                    <div>
                        Preço Unitário: <strong>{item.preco.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</strong>
                    </div>
                    <div>
                        Preço Final: <strong>{item.preco_final.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</strong>
                    </div>
                    <div className="row mt-3 p-3">
                        <ButtonAlterarValor alterar_tipo={false} funcao={(id) => diminuir_valor(id)} item={item.id} desativar_button = { item.quantidade_unitaria <= 1 ?  true : false } />
                        <div className="col-4">
                            { item.quantidade_unitaria }
                        </div>
                        <ButtonAlterarValor alterar_tipo={true} funcao={(id) => aumentar_valor(id)} item={item.id} />
                    </div>
                </div>
                ) }
            </div>
            <Carrinho carrinho={carrinho}/>
        </>
    )
}