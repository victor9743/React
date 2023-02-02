import styles from './Button.module.css'
function Button({type, value}) {
    return (
        <button type={type} className={styles.btn} >{value}</button>
    )
}

export default Button