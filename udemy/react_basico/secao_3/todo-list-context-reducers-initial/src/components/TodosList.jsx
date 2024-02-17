
import { useTodos } from '../TodosContext.jsx';
import Todo from './Todo.jsx';



function TodosList() {
  // recupera valores no context
  const store = useTodos();

  return (
    <>
        <div className="todos">
          {store.todos.map(todo => 
            <Todo
              key={todo.id}
              todo = {todo}
            />  
          )}
            

        </div>
    </>
  )
}

export default TodosList