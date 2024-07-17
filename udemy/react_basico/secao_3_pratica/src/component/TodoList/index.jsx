import { useContext } from "react";
import { TodosContext } from "../../TodosContext";

export default function TodoList () {
    
    const store = useContext(TodosContext);
    return (
        <table>
            <thead>
                <tr>
                    <th>#</th>
                    <th>Título</th>
                    <th>Completado</th>
                </tr>
            </thead>
            <tbody>
                { store.todos.map(s => 
                    <tr key={s.id}>
                        <td>{ s.id }</td>
                        <td>{ s.title}</td>
                        <td> <input type="checkbox" name="" id="" defaultChecked = {s.completed === true && true} /></td>
                    </tr>
                )}
            </tbody>
        </table>
    )
}