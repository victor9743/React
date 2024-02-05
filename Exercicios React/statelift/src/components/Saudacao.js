function Saudacao({nome}) {
    return (
        <>  
            { nome && (
                <h1> Hello Wolrd: {nome}</h1>
            )}
        </>
    )
}

export default Saudacao;