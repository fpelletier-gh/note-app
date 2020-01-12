import React from "react"

const formNote = ({
  handleTitleChange,
  handleNoteChange,
  className,
  title,
  note,
}) => {
  return (
    <form action="#" className={className}>
      <input
        type="text"
        className="note-title"
        name="title"
        placeholder="Title"
        onChange={handleTitleChange}
        value={title}
      />
      <textarea
        className="note"
        name="note"
        placeholder="Note"
        onChange={handleNoteChange}
        value={note}
      />
    </form>
  )
}

export default formNote
