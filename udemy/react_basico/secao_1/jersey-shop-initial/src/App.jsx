import './App.css';
import { OrderDetails } from './components/OrderDetails.jsx';
import { Item } from './components/Item/index.jsx';
import { useState } from 'react';

function App() {

    const [items, setItems] = useState([
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
    ]);

    const itemsInBag = items.filter(item => item.isInBag);

    const SelectedHandle = (item_id) => {
        let itemSelected = items.filter((item) => item.id === item_id)[0];
        // altera o valor do state
        itemSelected.isInBag = !itemSelected.isInBag;

        setItems(items.map(el => el.id === item_id ? itemSelected : el))

    }

    const calcularTotal = (itemsInBag) => {
        let orderTotal = 0;
        itemsInBag.forEach(item => orderTotal += item.price * item.quantity);
        console.log(orderTotal);
        // return orderTotal.toFixed(2)
    }

    return ( 
        <>
            <section className="items">
                <h4>Jersey Shop Made with React JS</h4>

                {
                    items.map(item =>
                        <Item
                            selectedProduct = {(id) => SelectedHandle(id)}
                            key={item.id} 
                            item={item} 
                        />
                    )
                }
            </section>
            

            { itemsInBag.length > 0  && <OrderDetails itemsInBag={itemsInBag} calcularTotal={() => calcularTotal(itemsInBag)} /> }
            
        </>
    );
}

export default App
