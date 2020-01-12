import React, { useState, useEffect } from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import "../components/note.scss"
import FormNote from "../components/formNote"
import NoteDisplay from "../components/noteDisplay"
import Landing from "../components/landing"
import uuidv4 from "uuid/v4"

const IndexPage = () => {
  const [title, setTitle] = useState("")
  const [note, setNote] = useState("")
  const [savedNote, setSavedNote] = useState([])
  const [width, setWidth] = useState(400)
  const [search, setSearch] = useState("")
  const [focusNoteId, setFocusNoteId] = useState("")
  const [lastFocusNoteId, setLastFocusNoteId] = useState("")
  const [displayNote, setDisplayNote] = useState(false)
  const [visited, setVisited] = useState(true)

  const handleTitleChange = e => {
    console.log(e.target.value)
    setTitle(e.target.value)
  }

  const handleNoteChange = e => {
    setNote(e.target.value)
  }

  const handleKeyPress = e => {
    if(e.key === 'Enter') {
      handleSubmit(e)
    }
  }

  useEffect(() => {
    setSavedNote(JSON.parse(localStorage.getItem("localSavedNote")) || [])
    setWidth(window.innerWidth)
    console.log(JSON.parse(localStorage.getItem("visited")))
    if (JSON.parse(localStorage.getItem("visited")) !== true) {
      setVisited(false)
    }
  }, [])

  useEffect(() => {
    localStorage.setItem("visited", JSON.stringify(visited))
  }, [visited])

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

  const handleLandingBtn = () => {
    setVisited(true)
  }

  return (
    <>
      {!visited ? (
        <Landing handleLandingBtn={handleLandingBtn} />
      ) : (
        <Layout>
          <SEO title="Note App" />
          <div className="container">
            {!displayNote || width >= 768 ? (
              <>
              <h1 className='app-title'>Notes App</h1>
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
                <button
                  type="submit"
                  className="submit-btn"
                  onClick={handleSubmit}
                >
                  Save
                </button>
                <button className="cancel-btn" onClick={cancelNewNote}>
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
                handleKeyPress={ handleKeyPress }
                handleSubmit={handleSubmit}
                title={title}
                note={note}
              />
            ) : null}
          </div>
        </Layout>
      )}
    </>
  )
}
export default IndexPage
