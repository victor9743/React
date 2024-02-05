import { useState } from "react";

function Condicional() {
    
    const [email, setEmail] = useState();
    const [userEmail, setUserEmail] = useState();

    function enviarEmail(e) {
        e.preventDefault();
        setUserEmail(email)
    }

    function limparEmail(){
        setUserEmail("")
    }

    return(
        <>
            <h2>Cadastre seu e-mail</h2>
            <form>
                <input type="email" placeholder="Digite o seu e-mail" onChange={(e) => setEmail(e.target.value)}/>
                <button type="submit" onClick={enviarEmail}>Cadastrar</button>
            </form>
            <br />
            {userEmail && (
                <div>
                    O e-mail do usuario eh: { userEmail }
                    <button onClick={limparEmail}>Limpar-email</button>
                </div>
            )}
        </>
    )
}

export default Condicional;
