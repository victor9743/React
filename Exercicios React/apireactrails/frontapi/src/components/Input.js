function Input({tipo, name, textLabel, metodo, valor}) {
    return (
        <div className="mb-3">
            <label className="form-label">{textLabel}</label>
            <input type={tipo} className="form-control" name={name} onChange={metodo} value={valor} />
        </div>
    )
}

export default Input