import styles from './Pessoa.module.css'
function Pessoa({nome, foto, idade, profissao}) {
    return(
        <div className={styles.pessoaContainer}>
            <img src={foto} alt={nome} />
            <h2>Nome: {nome}</h2>
            <p>Idade: {idade}</p>
            <p>Profissao: {profissao}</p>
        </div>
    )
}

export default Pessoa;