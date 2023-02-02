function InputForm({text, type, metodo, valor, name}) {
    return (
        <div className="mb-3">
            <label className="form-label">{text}</label>
            <input type={type} className="form-control" name={name} onChange={metodo} value={valor} />
        </div>
    )
}

export default InputForm