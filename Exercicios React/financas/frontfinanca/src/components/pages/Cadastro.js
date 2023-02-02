import styles from './Cadastro.module.css'
import Input from '../layout/Input'
import Linkbutton from '../layout/LinkButton'
import Button from '../layout/Button'
import {useNavigate} from 'react-router-dom'
function Cadastro() {
    const history = useNavigate()
    function submit(e){
        e.preventDefault()
        history("/")
    }
    return(
        <>
            <div>
                <form onSubmit={submit} className={styles.form}>
                    <h3>Cadastrar Usuário</h3>
                    
                    <Input tipo="text" placeholder="Email" name="email" textoLabel="Email" />
                    <Input tipo="password" placeholder="Senha" name="senha" textoLabel="Senha" />
                    
                    <div className={styles.botoes}>
                        <div className={styles.login}>
                            <Linkbutton to="/" text="Voltar" />
                        </div>
                        <div className={styles.cadastrar}>
                            <Button type="submit" value="Salvar" />
                        </div>
                    </div>
                    
                </form>
            </div>
        </>
    )
}

export default Cadastro