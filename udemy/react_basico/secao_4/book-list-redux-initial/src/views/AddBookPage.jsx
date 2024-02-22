import Header from '../components/Header.jsx';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addBooks } from '../store/booksSlice.js';

function AddBookPage() {
    
    const navigate = useNavigate();
    const dispatch = useDispatch();

    function handleAddBook (e) {
        e.preventDefault();

        const newBook = {
            title: document.querySelector('input[name=title]').value,
            cover: document.querySelector('input[name=cover]').value,
            isRead: false,
            author: document.querySelector('input[name=author]').value,
            synopsis: document.querySelector('textarea[name=synopsis]').value
        }

        if (newBook.title && newBook.cover && newBook.author) {
            dispatch(addBooks(newBook));
            navigate("/");
        } else {
            alert("please fill the mandatory fields");
        }
    }

    const pageTitle = "Add Book";

    return (
      <>
        <div className="container">
            <Header pageTitle={pageTitle} />

            <form className="add-form">
                <div className="form-control">
                    <label>Title *</label>
                    <input type="text" name="title" placeholder="Add Book Title" />
                </div>
                <div className="form-control">
                    <label>Book Cover *</label>
                    <input type="text" name="cover" placeholder="Add Cover" />
                </div>

                <div className="form-control">
                <label>Author *</label>
                <input
                    type="text" name="author" placeholder="Add Author" />
                </div>

                <div className="form-control">
                <label>Synopsis</label>
                <textarea
                    type="text" name="synopsis" placeholder="Add a synopsis..." />
                </div>
                
                <button className="btn btn-block" onClick={(e) => handleAddBook(e)}>Save Book</button>
            </form>

        </div>

        
      </>
    )
  }
  
  export default AddBookPage
  