import React, { useState, useEffect } from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import "../components/note.scss"
import FormNote from "../components/formNote"
import NoteDisplay from "../components/noteDisplay"
import uuidv4 from "uuid/v4"

const IndexPage = () => {
  const [title, setTitle] = useState("")
  const [note, setNote] = useState("")
  const [savedNote, setSavedNote] = useState(
    JSON.parse(localStorage.getItem("localSavedNote")) || []
  )
  const [search, setSearch] = useState("")
  const [focusNoteId, setFocusNoteId] = useState("")
  const [lastFocusNoteId, setLastFocusNoteId] = useState("")
  const [displayNote, setDisplayNote] = useState(false)
  const [width, setWidth] = useState(window.innerWidth)

  const handleTitleChange = e => {
    setTitle(e.target.value)
  }

  const handleNoteChange = e => {
    setNote(e.target.value)
  }

  useEffect(() => {
    localStorage.setItem("localSavedNote", JSON.stringify(savedNote))
  }, [savedNote])

  const handleSubmit = e => {
    e.preventDefault()
    if (focusNoteId === "" && (title !== "" || note !== "")) {
      const newId = uuidv4()
      setSavedNote(savedNote => [...savedNote, { title, note, id: newId }])
      setFocusNoteId(newId)
      setDisplayNote(false)
    } else if (title !== "" || note !== "") {
      const filteredSavedNote = savedNote.filter(
        note => note.id !== focusNoteId
      )
      if (filteredSavedNote === []) {
        setSavedNote(() => [
          ...savedNote,
          { title: title, note: note, id: focusNoteId },
        ])
      }
      setSavedNote(() => [
        ...filteredSavedNote,
        { title: title, note: note, id: focusNoteId },
      ])
      setDisplayNote(false)
    }
  }

  const handleDeleteNote = e => {
    const noteId = e.target.getAttribute("name")
    setSavedNote(savedNote => savedNote.filter(note => note.id !== noteId))
  }

  const updateWidth = () => {
    setWidth(window.innerWidth)
  }

  useEffect(() => {
    window.addEventListener("resize", updateWidth)
    return () => window.removeEventListener("resize", updateWidth)
  })

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
      setDisplayNote(true)
    }
  }

  const handleNewNote = () => {
    const newId = uuidv4()
    if (title !== "" || (note !== "" && focusNoteId !== "")) {
      setLastFocusNoteId(focusNoteId)
      setTitle("")
      setNote("")
      setFocusNoteId(newId)
    }
    setDisplayNote(true)
  }

  const cancelNewNote = () => {
    setDisplayNote(false)
    setFocusNoteId(lastFocusNoteId)
  }

  const handleSearchChange = e => {
    setSearch(e.target.value)
  }

  console.log(width)
  return (
    <Layout>
      <SEO title="Note" />
      <div className="container">
        {!displayNote || width >= 768 ? (
          <>
            {displayNote || width >= 768 ? (
              <button
                type="submit"
                className="submit-btn"
                onClick={handleSubmit}
              >
                Save
              </button>
            ) : null}
            <button className="primary-btn" onClick={handleNewNote}>
              New note
            </button>
          </>
        ) : (
          <>
            <button type="submit" className="submit-btn" onClick={handleSubmit}>
              Save
            </button>
            <button className="primary-btn" onClick={cancelNewNote}>
              Cancel
            </button>
          </>
        )}
        {!displayNote || width >= 768 ? (
          <input
            type="text"
            className="search-bar"
            placeholder="Search"
            onChange={handleSearchChange}
            value={search}
          />
        ) : null}
        {!displayNote || width >= 768 ? (
          <aside className="aside" onClick={showNote}>
            <NoteDisplay
              savedNote={savedNote}
              handleDeleteNote={handleDeleteNote}
              search={search}
            />
          </aside>
        ) : null}
        {displayNote || width >= 768 ? (
          <FormNote
            className="main"
            handleTitleChange={handleTitleChange}
            handleNoteChange={handleNoteChange}
            handleSubmit={handleSubmit}
            title={title}
            note={note}
          />
        ) : null}
      </div>
    </Layout>
  )
}
export default IndexPage
