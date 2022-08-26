import React from "react"

const noteDisplay = ({ search, savedNote, handleDeleteNote }) => {
  let filteredNote = savedNote.filter((note) =>
    note.title.toLowerCase().includes(search.toLowerCase())
  )
  return (
    <>
      {savedNote.length <= 0 ? (
        <h5 className="empty-note">There are no notes yet.</h5>
      ) : null}
      {filteredNote.reverse().map(({ title, note, id }) => (
        <div className="note-container" key={id} name={id}>
          <button className="link-button" onClick={handleDeleteNote} name={id}>
            <h5 className="delete-btn" name={id}>
              X
            </h5>
          </button>
          <h4>{title}</h4>
          <textarea value={note} readOnly></textarea>
        </div>
      ))}
    </>
  )
}
export default noteDisplay
