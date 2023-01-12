import PropTypes from 'prop-types'

function Marca({marca, ano_lancamento}){
    return (
        <>
            <li>
                {marca} - {ano_lancamento}
            </li>
        </>
    )
}

// declarando o tipo de var das props
Marca.propTypes = {
    marca: PropTypes.string,
    ano_lancamento: PropTypes.number 
}

// colocando valores padroes

Marca.defaultProps = {
    marca: 'Faltou a marca',
    ano_lancamento: 0
}

export default Marca;