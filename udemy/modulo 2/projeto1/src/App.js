import logo from './logo.svg';
import './App.css';
import { Component } from 'react';

class App extends Component {

  // criando um método construtor
  // constructor(props) {
  //   super(props);
    // adicionando metodos da propria classe usando boundfunction
    // this.metodoclick = this.metodoclick.bind(this);

    state = {
      name: 'Victor Costa',
      counter: 0
    };
  // }

  metodoclick = () => {
    // mudando valor de um estado de um objeto
    this.setState({ name: 'Outro Nome' });
  }

  counterteste = (e) => {
    let { counter } = this.state;

    this.setState({ counter : counter + 1});
    e.preventDefault();
  }

  render () {

    const { name, counter }  = this.state;

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p onClick={ this.metodoclick}>
            {name} - {counter}
          </p>
          <a
            onClick={ this.counterteste }
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}
// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Hello Wolrd
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

export default App;
