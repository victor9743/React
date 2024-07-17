import { useState, useEffect } from "react";
import { TodosContext } from "./TodosContext";
import TodoList from "./component/TodoList";

function App() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos")
    .then( r => r.json())
    .then(data => setTodos(data.slice(0, 10)));
  }, [setTodos]);
  
  return (
    <div>
      <TodosContext.Provider value={{todos, setTodos}} >
        <TodoList />
      </TodosContext.Provider>
    </div>
  );
}

export default App;
