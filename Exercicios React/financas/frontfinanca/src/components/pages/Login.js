import styles from './Login.module.css'
import Input from '../layout/Input'
function Index() {
    return (
        <div>
            <form className={styles.form}>
                <div>
                    <h3>Login</h3>
                </div>

                <Input tipo="text" placeholder="usuario" name="usuario" textoLabel="Usuario" />
                <Input tipo="password" placeholder="senha" name="senha" textoLabel="Senha" />
                <div>
                    <input type="submit" value="Entrar" />
                </div>
            </form>
        </div>
    )
}

export default Index