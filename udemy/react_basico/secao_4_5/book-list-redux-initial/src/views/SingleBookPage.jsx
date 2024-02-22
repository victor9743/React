import { useParams, Link, useNavigate } from 'react-router-dom';
import Notes from '../components/Notes.jsx'
import { useSelector, useDispatch } from 'react-redux';
import { selectBooks, eraseBook, ToggleRead } from '../store/booksSlice.js';
import { eraseBookNotes } from '../store/noteSlice.js';

function SingleBookPage() {

  const dispatch = useDispatch();
  const navigate = useNavigate();

  function handleEraseBook(id) {
    if (confirm('Are you sure you want to erase this book ?')){
      dispatch(eraseBook(id));
      dispatch(eraseBookNotes(id));
      navigate("/");
    }
  }
    
  const {id} = useParams();

  const books = useSelector(selectBooks);
  
  const book = books.filter(book => book.id == id)[0];

  return (
    <>
      <div className="container">
        <Link to="/">
          <button className="btn">
              ← Back to Books
          </button>
        </Link>
        
        {
          book ? 
              <div>
                <div className="single-book">
                  <div className="book-cover">
                    <img src={book.cover} />
                  </div>

                  <div className="book-details">
                    <h3 className="book-title">{ book.title }</h3>
                    <h4 className="book-author">{ book.author }</h4>
                    <p>{book.synopsis}</p>
                    <div className="read-checkbox">
                      <input type="checkbox"
                      onClick={() => dispatch(ToggleRead(book.id))}
                      defaultChecked={book.isRead} />
                      <label>{ book.isRead ? "Already Read It" : "Haven't Read it yet" }</label>
                    </div>
                    <div onClick={()=> handleEraseBook(book.id)} className="erase-book">
                      Erase book
                    </div>
                  </div>
                </div>

                <Notes bookId={id} />
              </div>
          :
          <div>
            <p>Book not found</p>
          </div>
        }
          

      </div>

      
    </>
  )
}
  
export default SingleBookPage
  