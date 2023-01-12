function Evento({user, pass}) {

    function meuEvento() {
        console.log("Hello wolrd");
        console.log(`Usuario: ${user}`);
        console.log(`Senha: ${pass}`)
    }

    return (
        <>
            <p>Clique para ativar o evento</p>
            <button onClick={meuEvento} >Ativar</button>
        </>
    )
}

export default Evento;