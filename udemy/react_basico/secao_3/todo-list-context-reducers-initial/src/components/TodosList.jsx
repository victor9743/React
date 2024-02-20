
import { useTodos } from '../TodosContext.jsx';
import Todo from './Todo.jsx';



function TodosList() {
  // recupera valores no context
  const store = useTodos();

  return (
    <>
        <div className="todos">
          { store.filteredTodos().length ? store.filteredTodos().map(todo => 
            <Todo
              key={todo.id}
              todo = {todo}
            />
          ) 
          :
          'No to-dos to be shown. Try clearing the filter or add a new to-do'
        
        }
            

        </div>
    </>
  )
}

export default TodosList