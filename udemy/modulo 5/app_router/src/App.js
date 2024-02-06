import logo from './logo.svg';
import './App.css';

/* 
  para trabalhar com router

  1- instalar o react-router-dom: 
    npm i react-router-dom

  2- adicionar importação no index.js
    import { BrowserRouter, Switch, Route } from 'react-router-dom';

*/
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
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

export default App;
