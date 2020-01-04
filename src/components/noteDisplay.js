import React from "react"

const noteDisplay = ({ search, savedNote, handleDeleteNote }) => {
  let filteredNote = savedNote.filter(
    notes => notes.title !== "" || notes.note !== ""
  )

  if (search !== "") {
    filteredNote = filteredNote.filter(
      note => note.title.toLowerCase().includes(search.toLowerCase())
    )
  }
  console.log(filteredNote)
  return (
    <>
      {filteredNote.reverse().map(({ title, note, id }) => (
        <div className="note-container" key={id} name={id}>
          <h4>{title}</h4>
          <h5 className="delete-btn" onClick={handleDeleteNote} name={id}>
            X
          </h5>
          <textarea value={note} readOnly></textarea>
        </div>
      ))}
    </>
  )
}
export default noteDisplay
