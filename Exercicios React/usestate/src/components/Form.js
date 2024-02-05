import { useState } from "react";

function Form () {
    function cadastrarUsuario(e) {
        e.preventDefault();
        console.log(nome)
        console.log(senha)

    }

    const [nome, setNome] = useState()
    const [senha, setSenha] = useState()

    return (
        <>
            <h1>Meu Cadastro</h1>
            <form onSubmit={cadastrarUsuario}>
                <div>
                    <label htmlFor="nome">Usuario</label>
                    <input type="text" id="nome" name="nome" placeholder="Digite o seu nome" onChange={(e) => setNome(e.target.value) }/>
                </div>
                <div>
                    <label htmlFor="nome">Senha</label>
                    <input type="password" id="senha" name="senha" placeholder="Digite a senha" onChange={(e) => setSenha(e.target.value) }/>
                </div>
                <div>
                    <input type="submit" value="Cadastrar" />
                </div>
            </form>
        </>
    )
}

export default Form;