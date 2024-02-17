import Header from './components/Header.jsx';
import Home from './views/Home.jsx';
import './App.scss';

function App() {

  return (
    <>
      <main>
        
        <Header appName="To-Do List with React" />

        <Home />

      </main>
    </>
  )
}

export default App
