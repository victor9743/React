export const OrderDetails = ({itemsInBag, calcularTotal}) => {

    return (
        <>
            <section className="summary">
                <strong>Order Details</strong>
                <table>
                    <thead>
                        <tr>
                            <th>Item</th>
                            <th>Total</th>
                        </tr>
                    </thead>
                    <tbody>
                        {itemsInBag.map(item =>
                            <tr key={item.id}>
                                <td>{item.quantity}x {item.nome}</td>
                                <td>$ {(item.price * item.quantity).toFixed(2)}</td>
                            </tr>  
                        )}
                        
                        <tr>
                            <th>Total</th>
                            {/* <th>$ {calcularTotal}</th> */}
                        </tr>
                    </tbody>
                </table>
            </section>
        </>
    )
}
