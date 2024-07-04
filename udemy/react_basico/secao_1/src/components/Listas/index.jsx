export default function Listas () {

    const lista = [
        {
            id: 1,
            nome: "José",
            idade: 36
        },
        {
            id: 2,
            nome: "Maria",
            idade: 6
        },
        {
            id: 3,
            nome: "Bia",
            idade: 20,
        },
        {
            id: 4,
            nome: "Carlos",
            idade: 10,
        },
        {
            id: 5,
            nome: "Júliana",
            idade: 70
        },
    ]

    return(
        <>
            { lista.length > 0 && lista.map(item =>
                <div key={item.id}>
                    {item.id} -
                    {item.nome} -
                    {item.idade}
                </div>
            )}
        </>
    );
}