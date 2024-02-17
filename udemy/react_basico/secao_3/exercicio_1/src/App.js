import './App.css'
import { counterReducer } from './counterReducer';
import { useReducer } from 'react';
import React from 'react';



// Não altere o nome do componente "App"
export default function App() {
    
    // useReducer é criado assim porque este exercício não suporta a importação direta
    const count = 0;
    const [contador, dispatch] = useReducer(counterReducer, count);

    const increment = () => {
      count += count + 1; 
      dispatch({
        type: 'increment',
        countValue: contador
      });
    }

    const decrement = () => {
      dispatch({
        type: 'decrement',
        countValue: contador
      })
    }

    const zerar = () => {
      dispatch({
        type: "zerar",
        countValue: contador
      })
    }
    
    return (
    
        <>
               
            <div className="container">
              
              <h2>Counter App</h2>
              <p className="counter">{contador}</p>
              
              <div className="buttons">
                <button className="increment" onClick={increment}>
                  Aumentar
                </button>
                <button className="decrement" onClick={decrement}>
                  Diminuir
                </button>
                <button className="reset" onClick={zerar}>
                  Zerar
                </button>
              </div>
            </div>
    
        </>
    
    )
}
