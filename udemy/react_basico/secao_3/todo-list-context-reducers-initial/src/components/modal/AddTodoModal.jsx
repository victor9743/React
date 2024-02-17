import { useTodos } from "../../TodosContext";
function AddTodoModal() {
 
    return (
    <>
        <div className="form">      
            <h3>Add a new task</h3>
            <label htmlFor="title">Title *</label>
            <input type="text" name="title" placeholder="Enter a title..." /><br />
            <label htmlFor="description">Description *</label>
            <textarea name="description" rows="4" placeholder="Enter a description..." /><br />
            <button className="btn gray">Add Task</button>
        </div>
    </>
    )
  }
  
  export default AddTodoModal