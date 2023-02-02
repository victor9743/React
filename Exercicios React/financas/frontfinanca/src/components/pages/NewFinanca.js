import styles from './NewFinanca.module.css'
function NewFinanca() {

    function submit() {
        
    }
    return (
        <div>
            <h3>Cadastrar financa</h3>
            <form onSubmit={submit} className={styles.form}>

            </form>
        </div>
    )
}

export default NewFinanca