import styles from './Button.module.css'
function Button({type, value}) {
    return(
        <input type={type} value={value} className={styles.btn}/>
    )
}

export default Button