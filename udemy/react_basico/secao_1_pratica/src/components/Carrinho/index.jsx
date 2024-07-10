export default function Carrinho ({carrinho}) {
    let soma_carrinho = 0;

    if (carrinho.length > 0 ) {
        carrinho.forEach(c => {
            soma_carrinho += c.preco_final;
        });
    }
    

    return (
        <div className="d-flex justify-content-center">
            <div className="card p-3 col-6">
                <div className="text-center">
                    <h3>Carrinho</h3>
                </div>
                <div className="table-responsive col-12">
                    <table className="table table-bordered">
                    <thead>
                        <tr>
                            <th>Descrição</th>
                            <th>Quantidade</th>
                            <th>Preço</th>
                        </tr>
                    </thead>
                    <tbody>
                        { carrinho.length > 0 ? carrinho.map((c) => {
                            return (
                                <tr key={c.id}>
                                    <th>{ c.nome }</th>
                                    <th>{ c.quantidade_unitaria } </th>
                                    <th>{ c.preco_final.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' }) }</th>
                                </tr>
                            )

                            })
                            : 
                            <tr>
                                <td colSpan={3}>Nenhum Item Adicionado</td>
                            </tr>
                        }
                        
                    </tbody>
                    </table>
                </div>
                <div className="border-top mt-3" style={{textAlign: "right"}}>
                    Preço Final: <strong>{soma_carrinho.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</strong>
                </div>
            </div>
        </div>
    );
}