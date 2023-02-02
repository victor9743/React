import styles from './Financa.module.css'
import Linkbutton from '../layout/LinkButton'
function Financa() {
    return (
        <div>
            <div className={styles.titulo}>
                <h3>Página Inicial</h3>
            </div>
            <div className={styles.paginaInicial}>
                <div className={styles.telaNumeros}>
                    <div className={styles.entrada}>
                        <h3>Entradas</h3>
                        <div className={styles.valor}>
                            R$ <span>0</span>
                        </div>
                    </div>

                    <div className={styles.despesa}>
                        <h3>Saídas</h3>
                        <div className={styles.valor}>
                            R$ <span>0</span>
                        </div>
                    </div>

                    <div className={styles.saldo}>
                        <h3>Saldo</h3>
                        <div className={styles.valor}>
                            R$ <span>0</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.cadastrarFinanca}>
                <Linkbutton to="/Financa/NewFinanca" text="Cadastrar" />
            </div>
        </div>
    )
}

export default Financa