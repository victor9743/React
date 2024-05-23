import Book from '../components/Book.jsx';
import Header from '../components/Header.jsx';
import {useSelector, useDispatch} from 'react-redux';
import {selectBooks, fetchBooks} from '../store/booksSlice.js';
import { useEffect, useState } from 'react';

function BooksPage() {
  const dispatch = useDispatch(fetchBooks);
  const books = useSelector(selectBooks).books;
  const pageTitle = "📖 Book List with Router, Redux & Firebase";
  let bookStatus = useSelector(selectBooks).status;

  useEffect(() => {
    if (bookStatus == 'idle') {
      dispatch(fetchBooks());
    }
  }, []);
    
    return (
      <>
        <div className="container">
            <Header pageTitle={pageTitle} />
            <div className="books-container">
                <div className="books-list">
                    
                    {books.map(book => 
                    
                    <Book key={book.id} book={book}  />
                    
                    )}

                </div>
            </div>
        </div>
      </>
    )
  }
  
  export default BooksPage
  