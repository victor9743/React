import Filter from '../components/Filter.jsx';
import TodosList from '../components/TodosList.jsx';
import ModalWindow from '../components/modal/ModalWindow.jsx';
import AddTodoModal from '../components/modal/AddTodoModal.jsx';
import { useTodos } from '../TodosContext.jsx';
function Home() {
    const store = useTodos();
    return (
    <>
        { store.modalIsActive && 
            <ModalWindow>
                <AddTodoModal/>
            </ModalWindow>
        }

        <div className="container">
            <Filter />   
            <TodosList />
        </div>

    </>
    )
  }
  
  export default Home
