import './App.css';
import { Component } from 'react';

// componente de classe

class App extends Component {
  state = {
    name: 'Victor Costa',
    counter: 0
  }

  handlePClick () {
    // manipulando estados
    this.setState({ name: "Hello Update"});
  }

  // event= manipulando eventos de onclick e outros
  handleAClick = (event) => {
    event.preventDefault();
    const {counter} = this.state;

    this.setState({ counter: counter + 1});
  }

  render(){
    const {name, counter} = this.state;
    return ( 
      <>
        <p onClick={this.handlePClick } >{name}</p>
        <div>
          <h3>Contador: {counter}</h3>
        </div>

        <div>
          <a onClick={this.handleAClick} href="https://reactjs.org">Link</a>
        </div>
      </>
    )
  }
}

// componentes de funcao
// function App() {
//   return (
//     <div className="App">
//       <h1>{1+1} Hello Wolrd</h1>
//     </div>
//   );
// }

export default App;
