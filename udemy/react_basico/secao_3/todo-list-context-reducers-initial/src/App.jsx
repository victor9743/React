import Header from './components/Header.jsx';
import Home from './views/Home.jsx';
import './App.scss';
import { TodosContext } from './components/TodosContext.js';
// importando reducer e a função que que eu vou utilizar no reducer
import { useReducer } from 'react';
import todosReducer from './TodosReducer.js';

const initialTodos = [
  { id: 0, title: 'Do Groceries', description: 'Buy apples, rice, juice and toilet paper.', isDone: false },
  { id: 1, title: 'Study React', description: 'Understand context & reducers.', isDone: false},
  { id: 2, title: 'Learn Redux', description: 'Learn state management with Redux', isDone: false }
];

function App() {
  // dispatch: executa a função que estar dentro do arquivo todosReducer
  const [todos, dispatch] = useReducer(todosReducer, initialTodos);

  return (
    <>
      <main>
        <TodosContext.Provider value={{todos, dispatch}} >
          <Header appName="To-Do List with React" />

          <Home />
        </TodosContext.Provider>
      </main>
    </>
  )
}

export default App
