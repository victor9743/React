import styles from './PaginaInicial.module.css'
import LinkButton from '../components/LinkButton'
function PaginaInicial() {
    return (
        <div className="container">
            <h3>Página Inicial Crud</h3>
            <LinkButton to="/newItem" text="Cadastrar"/>
        </div>
    )
}

export default PaginaInicial