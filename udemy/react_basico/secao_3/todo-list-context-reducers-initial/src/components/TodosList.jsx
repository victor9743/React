import { useContext } from 'react';
import { TodosContext } from './TodosContext.js';
import Todo from './Todo.jsx';



function TodosList() {
  // recupera valores no context
  const store = useContext(TodosContext);

  function deleteHandler(id) {
      store.dispatch({
        type: 'deleted',
        id: id
      });
      // store.setTodos(store.todos.filter(todo => todo.id !== id))
  }

  function toggleIsDoneHandler(id) {
    // atualizando um item do state usando map
    store.dispatch({
      type: 'toggleIsDone',
      id: id
    })
  }

  return (
    <>
        <div className="todos">
          {store.todos.map(todo => 
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