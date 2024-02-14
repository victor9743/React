import './App.css';

function App() {
  const products = [
    {
      name: 'Backpack, Fits 2 Laptops',
      price: 109,
      discountedPrice: 94,
      image: 'https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg'
    },
    {
      name: 'Mens Casual Premium Slim Fit T-Shirts',
      price: 22,
      discountedPrice: null,
      image: 'https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg'
    },
    {
      name: 'Womens Legends Chain Bracelet',
      price: 695,
      discountedPrice: 499,
      image: 'https://fakestoreapi.com/img/71pWzhdJNwL._AC_UL640_QL65_ML3_.jpg'
    },
    {
      name: 'Rain Jacket Women Windbreaker',
      price: 39,
      discountedPrice: null,
      image: 'https://fakestoreapi.com/img/71HblAHs5xL._AC_UY879_-2.jpg'
    },
    {
      name: 'WD 4TB Gaming Drive',
      price: 114,
      discountedPrice: null,
      image: 'https://fakestoreapi.com/img/61mtL65D4cL._AC_SX679_.jpg'
    },
    {
      name: 'Samsung 49-Inch CHG90 Monitor',
      price: 890,
      discountedPrice: 819,
      image: 'https://fakestoreapi.com/img/81Zt42ioCgL._AC_SX679_.jpg'
    }
  ];


  return (
    <>
      <div className="App">
        <h2>Lista de Produtos</h2>
        {
          products.map((produto, key) =>
            <div className='produtos' key={key}>
              <div className="product">
                <img src={produto.image} />
                <div className="info">
                  <p>{produto.name}</p>
                  <h4 className={`${produto.discountedPrice ? 'riscado' : ''}`} >${produto.price}</h4>
                  {produto.discountedPrice && <h4>${produto.discountedPrice}</h4>}
                </div>
              </div>
            </div>
          )
        }
      </div>
    </>
    
  );
}

export default App;
