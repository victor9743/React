function Produto ({key, id, descricao, valor, data_criacao}) {
    return (
        <tr key={key}>
            <td>{id}</td>
            <td>{descricao}</td>
            <td>{valor}</td>
            <td>{data_criacao}</td>
            <td>X</td>
        </tr>
    );
}

export default Produto;