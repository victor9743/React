function ListaReact({items}) {
    return(
        <>
            <h3>Lista</h3>
            {items.length > 0 ?(
                items.map((item, index) =>(
                <p key={index}>{item}</p>
                ))
            ):(
                <p>sem items</p>
            )}

        </>
    )
}

export default ListaReact;