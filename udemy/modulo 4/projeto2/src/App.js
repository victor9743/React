// import logo from './logo.svg';
import './App.css';
import { useState, useEffect } from 'react';
// import { Component } from 'react';

// component stateless
function App () {
  const [count, setCount] = useState(0);

  // componentDidUpdate - executa toda vez que o component atualiza
  useEffect(()=> {
    console.log("hello wolrd");
  });

  // componentDidMount - Executa apenas 1 vez
  useEffect(()=> {
    console.log("Hello wolrd apenas 1x");
  }, []);

  // com dependencia - executa toda vez que a dependencia mudar
  // soh ira mudar caso uma determinada depndencia chamada dentro de useeffect mudar
  useEffect(() => {
    console.log("Contador Mudou para", count);
  }, [count]);

  return (
    <div className='App'>
      <h1>Contador: {count}</h1>

      <button type='button' onClick={ () => { setCount(count + 1) }} >Incrementar</button>
    </div>
  );
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
