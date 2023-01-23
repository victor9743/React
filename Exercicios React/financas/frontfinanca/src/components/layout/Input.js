import styles from './Input.module.css'

function Input({tipo, placeholder, nome, textoLabel}) {
    return (
        <div className={styles.campos}>
            <div className={styles.camposInput}>
                <label>{textoLabel}</label><br/>
                <input type={tipo} placeholder={placeholder} name={nome} id={nome} className={styles.input} />
            </div>
        </div>
    )
}

export default Input