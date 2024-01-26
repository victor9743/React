import P from 'prop-types';
// import logo from './logo.svg';
import './App.css';
import React, { useState, useCallback } from 'react';
// import { Component } from 'react';

// const eventFn = () => {
//   console.log("h1 clicado");
// }

// React.memo: memoriza o componente caso ele não mudar. Possui algo semelhante ao useCallback, porém ele salva valores
const Button = ({ incrementButton }) => {
  console.log("Filho, renderizou");
  return <button onClick={() => incrementButton(10) } >+</button>
};

// adicionando prototypes ao button
// P.func, significa que o incrementButton será uma funcionalidade
Button.propTypes = {
  incrementButton: P.func,
}

// component stateless
// useCallBack: é utilizado para renderizar funções pesadas. retorna uma função salva
function App () {
  const [counter, setCounter] = useState(0);

  const incrementCounter = useCallback(
    (number) => {
      // setCounter(counter + number);
      // toda vez que a alguma funcionalidade dentro do app é executada ex: clique no botão, todas as funcionalidade do método app são recarregadas
      //  impede que a funcionalidade seja recriada cada vez que a função app for recarregada
      setCounter((c) => c + number);
    },[]
  );


  console.log("Pai, renderizou");

  return (
    <div className='App'>
      <p>Teste 3</p>
      <h1>C1: {counter}</h1>
      <Button incrementButton={incrementCounter} />
    </div>
  )

  // const [count, setCount] = useState(0);

  // // componentDidUpdate - executa toda vez que o component atualiza
  // useEffect(()=> {
  //   console.log("hello wolrd");
  // });

  // // componentDidMount - Executa apenas 1 vez
  // useEffect(()=> {
  //   console.log("Hello wolrd apenas 1x");
  // }, []);

  // useEffect(()=> {
  //   document.querySelector('h1')?.addEventListener('click', eventFn);

  //   // componentWillUmount - limpeza
  //   return () => {
  //     document.querySelector('h1')?.removeEventListener('click', eventFn);
  //   }
  // }, []);

  // // com dependencia - executa toda vez que a dependencia mudar
  // // soh ira mudar caso uma determinada depndencia chamada dentro de useeffect mudar
  // useEffect(() => {
  //   console.log("Contador Mudou para", count);
  // }, [count]);

  // return (
  //   <div className='App'>
  //     <h1>Contador: {count}</h1>

  //     <button type='button' onClick={ () => { setCount(count + 1) }} >Incrementar</button>
  //   </div>
  // );
}


// function App() {
//     // const { reverse } = this.state;
//     const [reverse, setReverse] = useState(false);
//     const [count, setCount] = useState(0);
//     const reverseClass = reverse ? 'reverse' :  ''

//     const handleClick = () => {
//       // this.setState({ reverse: !reverse });
//       setReverse(!reverse);
//     }

//     const incrementar = () => {
//       setCount(count + 1);
//     }

//     return (
//       <div className="App">
//         <header className="App-header">
//           <img src={logo} className={`App-logo ${reverseClass}`} alt="logo" />
//           <h2>Contador: {count}</h2>
//           <button type='button' onClick={ handleClick }>
//             Reverse {reverseClass} 
//           </button>
//           <button type='button' onClick={ incrementar }>
//             Incrementar + 1
//           </button>
//         </header>
//       </div>
//     );
// }

// component com estado
// class App extends Component {

//   // constructor(props) {
//   //   super(props);

//   //   this.state = {
//   //     reverse: false
//   //   }
//   // }
//   state = {
//     reverse: false
//   }

  // handleClick = () => {
  //   const { reverse } = this.state;
  //   this.setState({ reverse: !reverse });
  // }

  // render () {
  //   const { reverse } = this.state;
  //   const reverseClass = reverse ? 'reverse' :  ''

  //   return (
  //     <div className="App">
  //       <header className="App-header">
  //         <img src={logo} className={`App-logo ${reverseClass}`} alt="logo" />
  //         <button type='button' onClick={ this.handleClick }>
  //           Reverse {reverseClass} 
  //         </button>
  //       </header>
  //     </div>
  //   );
       
//   }
// }


export default App;
