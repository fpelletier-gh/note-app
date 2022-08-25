import React from "react"
import Layout from "../components/layout"

const IndexPage = ({ handleLandingBtn }) => (
  <Layout>
    <div className="main-text">
      <h1>Note App</h1>
      <h3>A simple open source note taking app</h3>
      <button className="main-btn" onClick={handleLandingBtn}>
        Welcome
      </button>
    </div>
  </Layout>
)

export default IndexPage
