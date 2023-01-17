function Endereco({getCep}) {
    return(
        <div>
            { getCep.length > 1 ? (
                <div>
                    <label>Cep:</label><strong>{getCep[1]}</strong><br/>
                    <label>Endereco:</label><strong>{getCep[0]}</strong><br/>
                    <label>Cidade:</label><strong>{getCep[2]}</strong><br/>
                    <label>Bairro:</label><strong>{getCep[3]}</strong>
                </div>
            ) : (
                <div>
                    <h4>{getCep[0]}</h4>
                </div>
            )}
            
        </div>
    )
}

export default Endereco;