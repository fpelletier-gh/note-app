import React, { useState } from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import "../components/note.scss"
import FormNote from "../components/formNote"
import NoteDisplay from "../components/noteDisplay"
import uuidv4 from "uuid/v4"

const IndexPage = () => {
  const [title, setTitle] = useState("")
  const [note, setNote] = useState("")
  const [savedNote, setSavedNote] = useState([])
  const [search, setSearch] = useState("")
  const [focusNoteId, setFocusNoteId] = useState("")

  const handleTitleChange = e => {
    setTitle(e.target.value)
  }

  const handleNoteChange = e => {
    setNote(e.target.value)
  }

  const handleSubmit = e => {
    e.preventDefault()
    if (focusNoteId === "") {
      const newId = uuidv4()
      setSavedNote(savedNote => [...savedNote, { title, note, id: newId }])
      setFocusNoteId(newId)
    } else {
      const filteredSavedNote = savedNote.filter(
        note => note.id !== focusNoteId
      )
      setSavedNote(() => [
        ...filteredSavedNote,
        { title: title, note: note, id: focusNoteId },
      ])
    }
  }

  const handleDeleteNote = e => {
    const noteId = e.target.getAttribute("name")
    setSavedNote(savedNote => savedNote.filter(note => note.id !== noteId))
  }

  const showNote = e => {
    const noteId = e.target.parentElement.getAttribute("name")
      ? e.target.parentElement.getAttribute("name")
      : e.target.getAttribute("name")
    const selectedNote = savedNote.filter(note => note.id === noteId)
    if (e.target.getAttribute("class") !== "delete-btn" && noteId !== null) {
      setFocusNoteId(noteId)
      //setCurrentNote(() => savedNote.filter(note => note.id === noteId))
      setTitle(selectedNote[0].title)
      setNote(selectedNote[0].note)
    }
  }

  const handleNewNote = () => {
    const newId = uuidv4()
    if (title !== "" || (note !== "" && focusNoteId !== "")) {
      setTitle("")
      setNote("")
      setSavedNote(savedNote => [
        ...savedNote,
        { title: "", note: "", id: newId },
      ])
      setFocusNoteId(newId)
    }
  }

  const handleSearchChange = e => {
    setSearch(e.target.value)
  }

  console.log(focusNoteId)
  console.log(savedNote)
  console.log(search)
  return (
    <Layout>
      <SEO title="Note" />
      <div className="container">
        <button className="new-note" onClick={handleNewNote}>
          New note
        </button>
        <input
          type="text"
          className="search-bar"
          placeholder="Search"
          onChange={handleSearchChange}
          value={search}
        />
        <aside className="aside" onClick={showNote}>
          <NoteDisplay
            savedNote={savedNote}
            handleDeleteNote={handleDeleteNote}
            search={search}
          />
        </aside>
        <FormNote
          className="main"
          handleTitleChange={handleTitleChange}
          handleNoteChange={handleNoteChange}
          handleSubmit={handleSubmit}
          title={title}
          note={note}
        />
      </div>
    </Layout>
  )
}
export default IndexPage
