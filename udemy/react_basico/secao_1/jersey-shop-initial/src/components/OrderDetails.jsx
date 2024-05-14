function OrderDetails () {
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
                        <tr>
                            <td>1x Real Madrid</td>
                            <td>$ 119.99</td>
                        </tr>
                        
                        <tr>
                            <th>Total</th>
                            <th>$ 119.99</th>
                        </tr>
                    </tbody>
                </table>
            </section>
        </>
    )
}

export default OrderDetails;