import styles from './Cadastro.module.css'
function Cadastro() {
    function submit(e){
        e.preventDefault()
    }
    return(
        <>
            <h1>Tela de cadastro</h1>
            <div>
                <form onSubmit={submit} className={styles.form}>
                </form>
            </div>
        </>
    )
}

export default Cadastro