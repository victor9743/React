
export default function todosReducer (todos, action) {
    
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