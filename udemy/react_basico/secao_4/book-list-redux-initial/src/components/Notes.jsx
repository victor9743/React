
function Notes() {
    
   

    let notes = [
        {
          id: 1,
          book_id: 1,
          title:"Page 18 - On Europe's Decline",
          text: "The leading states of the European Union, and in particular of the eurozone, were dogged by a growing sense of decline. Their production systems and their societies that were said to be in decline, rather than Europe as a whole."
        },
        {
          id: 2,
          book_id: 1,
          title:"Page 55 - Treaty on Friendship and Cooperation",
          text: "The Portuguese and Spanish Governments signed the Treaty on Friendship and Cooperation at the 32nd Luso-Spanish Summit held in Trujillo in October 2021. This followed on from the commitment undertaken at the Guarda Summit in October 2020."
        },
        {
          id: 3,
          book_id: 2,
          title:"Page 61 - On Mesopotamia",
          text: "Jane R. McIntosh wrote the first general introduction to Mesopotamia that covers all four of the area's major ancient civilizations―Sumer, Akkad, Assyria, and Babylonia."
        }
        
    ];
    
    return (
      <>

        <div className="notes-wrapper">

            <h2>Reader's Notes</h2>

            <div className="notes">
                {notes.map(note => 
                    <div key={note.id} className="note">
                        <div className="erase-note">Erase note</div>
                        <h3>{note.title}</h3>
                        <p>{note.text}</p>
                    </div>
                    )}
            </div>

            <details>
                <summary>Add a note</summary>
                <form className="add-note">
                    <div className="form-control">
                        <label>Title *</label>
                        <input type="text" name="title" placeholder="Add a note title" />
                    </div>
                    <div className="form-control">
                        <label>Note *</label>
                        <textarea type="text" name="note" placeholder="Add note" />
                    </div>
                    
                    <button className="btn btn-block">Add Note</button>
                </form>
            </details>

        </div>

      </>
    )
  }
  
  export default Notes
  