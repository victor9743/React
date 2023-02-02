import styles from './Login.module.css'
import Input from '../layout/Input'
import Button from '../layout/Button'
import Linkbutton from '../layout/LinkButton'
import { useNavigate } from 'react-router-dom'
function Index() {

    const history = useNavigate()
    
    function submit(e) {
        e.preventDefault()
        history("/Financa/PaginaInicial")
    }

    return (
        <div>
            <form onSubmit={submit} className={styles.form}>
                <div>
                    <h3>Login</h3>
                </div>

                <Input tipo="text" placeholder="usuario" name="usuario" textoLabel="Usuario" />
                <Input tipo="password" placeholder="senha" name="senha" textoLabel="Senha" />
                <div className={styles.botoes}>
                    <div className={styles.login}>
                        <Linkbutton to="/cadastrarUsuario" text="Cadastrar" />
                    </div>
                    <div className={styles.cadastrar}>
                        <Button type="submit" value="Entrar" />
                    </div>
                </div>
            </form>
        </div>
    )
}

export default Index
