export default function FinancaList({financa_db}){

    function format_valor (valor) {

        return valor.toLocaleString('pt-BR', {
            style: 'currency',
            currency: 'BRL',
        });

    }
    return (
        <div className="table-responsive mt-3 container">
            <table className="table table-bordered">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Descrição</th>
                        <th>Tipo</th>
                        <th>Valor</th>
                        <th>Opção</th>
                    </tr>
                </thead>
                <tbody>
                    { financa_db.length > 0 && financa_db.map((item) => {
                        return (
                            <tr key={item.id}>
                                <td>{ item.id }</td>
                                <td>{ item.descricao }</td>
                                <td>{ item.tipo === 0 ? "Entrada" : "Saída" }</td>
                                <td>{ format_valor(item.valor) }
                                </td>
                                <td>Opção</td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    )

}