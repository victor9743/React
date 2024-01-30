// import P from 'prop-types';
// import logo from './logo.svg';
import './App.css';
import React, { useState, useCallback, useMemo, useEffect, Component, useRef } from 'react';

const globalState = {
  title: 'titulo do contexto',
  counter: 0,
};

function App () 
{
  return (
    <div className='App'>
      <h3>Hello Wolrd</h3>
    </div>
  );
}

// const Post = ({id, titulo, corpo, handleClick}) => {
//   // console.log("filho rendereizou");
//   return (
//     <div key={id}>
//       <h1 onClick={() => handleClick(titulo)}>{titulo}</h1>
//       <p>{corpo}</p>
//     </div>
//   );
// }

// function App() {
//   const [posts, setPosts] = useState([]);
//   const [value, setValue] = useState("");
//   // useRef : pega a referencia de um elemento: input, div, h1, etc. Funciona de forma semelhante ao document. e $("") do js e jquery
//   // input.current : pega o valor atribuido ao useref
//   const input = useRef(null);

//   // console.log("pai renderizou");

//   useEffect(()=> {
//     fetch('https://jsonplaceholder.typicode.com/posts')
//     // primeiro then: lida com o retorno obtido do fetch
//     .then((r) => r.json())
//     // segundo fetch: lida com o retorno do r.json()
//     .then((r) => setPosts(r));
//   }, []);

//   useEffect(() => {
//     // pega o elemento salvo e aplica o focus
//     input.current.focus();
//   }, [value])

//   const handleClick = (value) => {
//     setValue(value);
//   }

//   return (
//     <div className='App'>
//       <p>
//         <input 
//           // pega a referencia do input search e atribui a variavel useref input
//           ref={input}
//           type='search'
//           value={value}
//           onChange={(e) => setValue(e.target.value)}
//          />
//       </p>

//       { 
//         useMemo(() => {
//           return (
//             posts.length > 0 && 
//             posts.map((post) => {
//               return (
//                 <Post 
//                 key={post.id}
//                 titulo={post.title}
//                 corpo={post.body} 
//                 handleClick={handleClick}

//                 />
//               );
//             })
//           );
//         }, [posts])
//       }

//       { posts.length === 0 && <h3>Nenhum dado encontrado</h3> }

//     </div>
//   );
// }


// const eventFn = () => {
//   console.log("h1 clicado");
// }

// React.memo: memoriza o componente caso ele não mudar. Possui algo semelhante ao useCallback, porém ele salva valores
// const Button = ({ incrementButton }) => {
//   console.log("Filho, renderizou");
//   return <button onClick={() => incrementButton(10) } >+</button>
// };

// // adicionando prototypes ao button
// // P.func, significa que o incrementButton será uma funcionalidade
// Button.propTypes = {
//   incrementButton: P.func,
// }

// // component stateless
// // useCallBack: é utilizado para renderizar funções pesadas. retorna uma função salva
// function App () {
//   const [counter, setCounter] = useState(0);

//   const incrementCounter = useCallback((number) => {
//     // setCounter(counter + number);
//     // toda vez que a alguma funcionalidade dentro do app é executada ex: clique no botão, todas as funcionalidade do método app são recarregadas
//     //  impede que a funcionalidade seja recriada cada vez que a função app for recarregada
//     setCounter((c) => c + number);
//   },[] );

//   console.log("Pai, renderizou");

//   const btn = useMemo(() => {
//     return <Button incrementButton={incrementCounter} />;
//   }, [incrementCounter]);

//   return (
//     <div className='App'>
//       <p>Teste 3</p>
//       <h1>C1: {counter}</h1>
//       {
//         btn
//       }
//     </div>
//   )

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
// }


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
