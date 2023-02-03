import {Link} from 'react-router-dom'
function LinkButton({to, text}) {
    return (
        <Link className='btn btn-primary' to={to}>{text}</Link>
    )
}

export default LinkButton;