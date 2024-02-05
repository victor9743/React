function Button(props) {
    return (
        <button onClick={props.evento}>{props.texto}</button>
    )
}

export default Button;