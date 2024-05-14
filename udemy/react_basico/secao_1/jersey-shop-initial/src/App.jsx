import './App.css';
import { useState } from 'react';
import OrderDetails from './components/OrderDetails';
import Item from './components/Item';
function App() {

    const [items, setItems] =  useState([
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

    // o filter retornará um novo array contendo um lista de items que foram adicionados ao carrinho
    const itemsInBag = items.filter(item => item.isInBag);

    function selectHandle (id) {
        const item = items.filter(item => item.id === id)[0];
        item.isInBag = !item.isInBag;

        setItems(items.map(item_lista => item_lista.id === id ? item : item_lista));
    }

    function quantityHandler(e, id , increment){
        e.stopPropagation();
        const item = items.filter(item => item.id === id)[0];
        item.quantity += increment;

        setItems(items.map(item_lista => item_lista.id === id ? item : item_lista))
    }

    return ( 
        <>
            <section className="items">
                <h4>Jersey Shop Made with React JS</h4>

                { items.map(item =>
                        <Item
                            selectProduct = {(id) => selectHandle(item.id)}
                            changeQuantity = {(e, id, increment) => quantityHandler(e, id, increment)}
                            key={item.id}
                            item={item}
                        />
                )}
            </section>

            { itemsInBag.length > 0 && <OrderDetails /> }
            
        </>
    );
}

export default App
