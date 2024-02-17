import { createContext, useContext, useReducer, useState } from "react";
export const TodosContext = createContext("");

const initialTodos = [
    { id: 0, title: 'Do Groceries', description: 'Buy apples, rice, juice and toilet paper.', isDone: false },
    { id: 1, title: 'Study React', description: 'Understand context & reducers.', isDone: false},
    { id: 2, title: 'Learn Redux', description: 'Learn state management with Redux', isDone: false }
];

export function TodosProvider({children}) {
  // dispatch: executa a função que estar dentro do arquivo todosReducer
  const [todos, dispatch] = useReducer(todosReducer, initialTodos);

  // controlar o abrir e fechar do modal
  const [modalIsActive, setModalIsActive] = useState(false);

  return (
    <>
      <main>
        <TodosContext.Provider 
          value={
            {
              todos, 
              dispatch,
              modalIsActive, 
              setModalIsActive
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
  console.log(action);
  switch (action.type) {
    case 'deleted': {
        // confirm: cria uma caixa de confirmação
        if(confirm("Are you sure you want to delete the to-do?")) {
            // retorna um novo a partir do filtro de condição do antigo array
            // retorna um estado novo modificado
            return todos.filter(todo => todo.id !== action.id);
        }
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