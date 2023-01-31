import styles from './LinkButton.module.css'
import { Link } from 'react-router-dom'
function Linkbutton({to, text}) {

    function planoFundo() {

    }

    return (
        <Link className={styles.btn} to={to} >{text}</Link>
    )
}

export default Linkbutton