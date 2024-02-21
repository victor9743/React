import { useParams, Link } from 'react-router-dom';
import Notes from '../components/Notes.jsx'

function SingleBookPage() {
    
  const {id} = useParams();

  const books = [
    {
      id: 1,
      title: "A Short History of Europe",
      cover:
        "https://printpress.cmsmasters.net/default/wp-content/uploads/sites/11/2019/05/printpress-product-6-540x861.jpg",
      isRead: true,
      author: "Simon Jenkins",
      synopsis: "In this dazzling new history, bestselling author Simon Jenkins grippingly tells the story of its evolution from warring peoples to peace, wealth and freedom - a story that twists and turns from Greece and Rome, through the Dark Ages, the Reformation and the French Revolution, to the Second World War and up to the present day."
    },
    {
      id: 2,
      title: "Penguin Classics",
      cover:
        "https://printpress.cmsmasters.net/default/wp-content/uploads/sites/11/2019/05/printpress-product-2-540x861.jpg",
      isRead: false,
      author: "Henry Eliot",
      synopsis: "The Penguin Classics Book covers all the greatest works of fiction, poetry, drama, history, and philosophy in between, this reader's companion encompasses 500 authors, 1,200 books, and 4,000 years of world literature, from ancient Mesopotamia to World War I."
    },
    {
      id: 3,
      title: "Becoming",
      cover:
        "https://printpress.cmsmasters.net/default/wp-content/uploads/sites/11/2019/05/printpress-product-7-540x861.jpg",
      isRead: false,
      author: "Michelle Obama",
      synopsis: "“Becoming” is an autobiography detailing the highs and lows of Michelle Obama's incredible journey from humble beginnings in the less glamourous South Side of Chicago, to the grandeur of the White House and life as America's first African-American First Lady."
    },
    {
      id: 4,
      title: "Sonnets",
      cover:
        "https://printpress.cmsmasters.net/default/wp-content/uploads/sites/11/2019/05/printpress-product-5-540x861.jpg",
      isRead: false,
      author: "James Anthony",
      synopsis: "Shakespeare wrote 154 sonnets published in his 'quarto' in 1609, covering themes such as the passage of time, mortality, love, beauty, infidelity, and jealousy. The first 126 of Shakespeare's sonnets are addressed to a young man, and the last 28 addressed to a woman – a mysterious 'dark lady'."
    }
  ];
  
  const book = books.filter(book => book.id == id)[0];

  return (
    <>
      <div className="container">
        <Link to="/">
          <button className="btn">
              ← Back to Books
          </button>
        </Link>
          
          <div className="single-book">
                  <div className="book-cover">
                      <img src={book.cover} />
                  </div>

                  <div className="book-details">
                      <h3 className="book-title">{ book.title }</h3>
                      <h4 className="book-author">{ book.author }</h4>
                      <p>{book.synopsis}</p>
                      <div className="read-checkbox">
                          <input type="checkbox" defaultChecked={book.isRead} />
                          <label>{ book.isRead ? "Already Read It" : "Haven't Read it yet" }</label>
                      </div>
                      <div className="erase-book">
                          Erase book
                      </div>
                  </div>
          </div>

          <Notes />

      </div>

      
    </>
  )
}
  
export default SingleBookPage
  