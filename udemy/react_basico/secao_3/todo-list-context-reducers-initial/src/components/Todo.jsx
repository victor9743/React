import './Todo.scss';

function Todo({ todo, deleteTodo, toggleIsDone }) {
  return (
    <>
        <div className={`todo ${todo.isDone ? 'done' : ''}`}>
            <button 
                onClick={() => deleteTodo(todo.id)}
                className="erase"
            >
                x erase
            </button>
            <h3>
                {todo.title}
            </h3>
            <p>
                {todo.description}
            </p>
            <div className="task-check">
                <input 
                    type="checkbox" 
                    onClick={() => toggleIsDone(todo.id)} 
                    defaultChecked={todo.isDone} 
                />

                <label>
                    {!todo.isDone ? 'To-Do' : 'Done'}
                </label>
            </div>
        </div>

    </>
  )
}

export default Todo