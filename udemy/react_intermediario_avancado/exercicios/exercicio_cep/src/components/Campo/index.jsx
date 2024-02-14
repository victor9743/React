export const Campo = ({label, valor, placeholder}) => {
    return (
        <div className="mb-3">
            <label className="form-label">{label}</label>
            <div className="form-control">
                {valor && (
                    valor
                )}
                {!valor && (
                    placeholder
                )}
            </div>
        </div>
    )
}