export default function FinancaList({financa_db}){
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
                                <td>{ item.tipo }</td>
                                <td>{ item.valor }</td>
                                <td>Opção</td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    )

}