import './App.css';

function App() {

    const items = [
        {
            
            id: 1, 
            photo: "real_madrid.webp",
            name: "Real Madrid",
            price: 119.99,
            active: false,
            quantity: 1, 
            isInBag: false
        },
        {
            id: 2, 
            photo: "milan.png",
            name: "Milan",
            price: 99.99,
            active: false,
            quantity: 1, 
            isInBag: false
        },
        {
            id: 3, 
            photo: "chelsea.webp",
            name: "Chelsea",
            price: 99.99,
            active: false,
            quantity: 1, 
            isInBag: false
        },
        {
            id: 4, 
            photo: "barcelona.png",
            name: "Barcelona",
            price: 109.99,
            active: false,
            quantity: 1, 
            isInBag: false
        },
        {
            id: 5, photo: "benfica.png",
            name: "Benfica",
            price: 89.49,
            active: false,
            quantity: 1, 
            isInBag: false
        },
        {
            id: 6, 
            photo: "manchester.webp",
            name: "Manchester City",
            price: 129.79,
            active: false,
            quantity: 1, 
            isInBag: false
        },
        {
            id: 7, 
            photo: "bayern.webp",
            name: "Bayern",
            price: 119.99,
            active: false,
            quantity: 1, 
            isInBag: false
        },
        {
            id: 8, 
            photo: "psg.png",
            name: "PSG",
            price: 94.99,
            active: false,
            quantity: 1, 
            isInBag: false
        },
        {
            id: 9, 
            photo: "ajax.webp",
            name: "Ajax",
            price: 89.99,
            active: false,
            quantity: 1, 
            isInBag: false
        }
    ];

    return ( 
        <>
            <section className="items">
                <h4>Jersey Shop Made with React JS</h4>

                {
                    items.map(item =>
                        <div key={item.id} className="product selected">
                            <div className="photo">
                                <img src= {"/img/"  + item.photo} />
                            </div>
                            <div className="description">
                                <span className="name">{item.name}</span>
                                <span className="price">{item.price}</span>
                                <div className="quantity-area">
                                    <button>-</button>
                                    <span className="quantity">{item.quantity}</span>
                                    <button>+</button>
                                </div>
                            </div>
                        </div>
                    )
                }
                {/*
                <div className="product selected">
                    <div className="photo">
                        <img src="././img/real_madrid.webp" />
                    </div>
                    <div className="description">
                        <span className="name">Real Madrid</span>
                        <span className="price">$ 119.99</span>
                        <div className="quantity-area">
                            <button>-</button>
                            <span className="quantity">1</span>
                            <button>+</button>
                        </div>
                    </div>
                </div>
                <div className="product">
                    <div className="photo">
                        <img src="./img/milan.png" />
                    </div>
                    <div className="description">
                        <span className="name">Milan</span>
                        <span className="price">$ 99.99</span>
                        <div className="quantity-area">
                            <button>-</button>
                            <span className="quantity">1</span>
                            <button>+</button>
                        </div>
                    </div>
                </div>
                <div className="product">
                    <div className="photo">
                        <img src="./img/chelsea.webp" />
                    </div>
                    <div className="description">
                        <span className="name">Chelsea</span>
                        <span className="price">$ 99.99</span>
                        <div className="quantity-area">
                            <button>-</button>
                            <span className="quantity">1</span>
                            <button>+</button>
                        </div>
                    </div>
                </div>
                <div className="product">
                    <div className="photo">
                        <img src="./img/barcelona.png" />
                    </div>
                    <div className="description">
                        <span className="name">Barcelona</span>
                        <span className="price">$ 109.99</span>
                        <div className="quantity-area">
                            <button>-</button>
                            <span className="quantity">1</span>
                            <button>+</button>
                        </div>
                    </div>
                </div>
                <div className="product">
                    <div className="photo">
                        <img src="./img/benfica.png" />
                    </div>
                    <div className="description">
                        <span className="name">Benfica</span>
                        <span className="price">$ 89.49</span>
                        <div className="quantity-area">
                            <button>-</button>
                            <span className="quantity">1</span>
                            <button>+</button>
                        </div>
                    </div>
                </div>
                <div className="product">
                    <div className="photo">
                        <img src="./img/manchester.webp" />
                    </div>
                    <div className="description">
                        <span className="name">Manchester City</span>
                        <span className="price">$ 129.79</span>
                        <div className="quantity-area">
                            <button>-</button>
                            <span className="quantity">1</span>
                            <button>+</button>
                        </div>
                    </div>
                </div>
                <div className="product">
                    <div className="photo">
                        <img src="./img/bayern.webp" />
                    </div>
                    <div className="description">
                        <span className="name">Bayern</span>
                        <span className="price">$ 119.99</span>
                        <div className="quantity-area">
                            <button>-</button>
                            <span className="quantity">1</span>
                            <button>+</button>
                        </div>
                    </div>
                </div>
                <div className="product">
                    <div className="photo">
                        <img src="./img/psg.png" />
                    </div>
                    <div className="description">
                        <span className="name">PSG</span>
                        <span className="price">$ 94.99</span>
                        <div className="quantity-area">
                            <button>-</button>
                            <span className="quantity">1</span>
                            <button>+</button>
                        </div>
                    </div>
                </div>
                
                <div className="product">
                    <div className="photo">
                        <img src="./img/ajax.webp" />
                    </div>
                    <div className="description">
                        <span className="name">Ajax</span>
                        <span className="price">$ 89.99</span>
                        <div className="quantity-area">
                            <button>-</button>
                            <span className="quantity">1</span>
                            <button>+</button>
                        </div>
                    </div>
                </div>
    */}
            </section>
            

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
    );
}

export default App
