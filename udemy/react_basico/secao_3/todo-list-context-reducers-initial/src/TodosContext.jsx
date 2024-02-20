import { createContext, useContext, useEffect, useReducer, useState } from "react";
export const TodosContext = createContext("");

// const initialTodos = [
  
//   { id: 0, title: 'Do Groceries', description: 'Buy apples, rice, juice and toilet paper.', isDone: true },
//   { id: 1, title: 'Study React', description: 'Understand context & reducers.', isDone: false},
//   { id: 2, title: 'Learn Redux', description: 'Learn state management with Redux', isDone: false }
// ];
const initialTodos = localStorage.getItem('todos') ? 
JSON.parse(localStorage.getItem('todos')) : [];

export function TodosProvider({children}) {
  // dispatch: executa a função que estar dentro do arquivo todosReducer
  const [todos, dispatch] = useReducer(todosReducer, initialTodos);

  // controlar o abrir e fechar do modal
  const [modalIsActive, setModalIsActive] = useState(false);

  // aplicar filtro
  const [filterBy, setFilterBy] = useState('');

  function filteredTodos() {
    switch(filterBy) {
      case 'todo':
        return todos.filter(todo => !todo.isDone);
      case 'done':
        return todos.filter(todo => todo.isDone);
      default:
        return todos;
    }
  }

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  return (
    <>
      <main>
        <TodosContext.Provider 
          value={
            {
              todos, 
              dispatch,
              modalIsActive, 
              setModalIsActive,
              filterBy, 
              setFilterBy,
              filteredTodos
            }
          }>
          {children}
        </TodosContext.Provider>
      </main>
    </>
  )
}

export function useTodos () {
  return useContext(TodosContext);
}

function todosReducer (todos, action) {

  switch (action.type) {
    case 'deleted': {
        // confirm: cria uma caixa de confirmação
        if(confirm("Are you sure you want to delete the to-do?")) {
          // retorna um novo a partir do filtro de condição do antigo array
          // retorna um estado novo modificado
          return todos.filter(todo => todo.id !== action.id);
        } else {
          return todos;
        }
    }
    case 'added': {
      let newTodo =action.newTodo;
      newTodo.id = todos.length ? Math.max(...todos.map(todo => todo.id)) + 1 : 1;

      return [...todos, newTodo];
    }
    case 'toggleIsDone': {
      // atualizando um item do state usando map
      return todos.map(todo => {
          if (todo.id === action.id ) {
              todo.isDone = !todo.isDone;
              return todo;
          } else {
              return todo;
          }
      });
    }
  }
}