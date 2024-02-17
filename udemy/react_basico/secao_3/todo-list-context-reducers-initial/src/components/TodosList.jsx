import { useState } from 'react';
import Todo from './Todo.jsx';

const initialTodos = [
  { id: 0, title: 'Do Groceries', description: 'Buy apples, rice, juice and toilet paper.', isDone: false },
  { id: 1, title: 'Study React', description: 'Understand context & reducers.', isDone: false},
  { id: 2, title: 'Learn Redux', description: 'Learn state management with Redux', isDone: false }
];

function TodosList() {
  const [todos, setTodos] = useState(initialTodos)

  function deleteHandler(id) {
    // confirm: cria uma caixa de confirmação
    if(confirm("Are you sure you want to delete the to-do?")) {
      // retorna um novo a partir do filtro de condição do antigo array
      setTodos(todos.filter(todo => todo.id !== id))
    }
  }

  function toggleIsDoneHandler(id) {
    // atualizando um item do state usando map
    setTodos(todos.map(todo => {
      if (todo.id === id ) {
        todo.isDone = !todo.isDone;
        return todo;
      } else {
        return todo;
      }
    }));    
  }

  return (
    <>
        <div className="todos">
          {todos.map(todo => 
            <Todo
              deleteTodo={(id) => deleteHandler(id)}
              toggleIsDone={(id) => toggleIsDoneHandler(id)}
              key={todo.id}
              todo = {todo}
            />  
          )}
            

        </div>
    </>
  )
}

export default TodosList