import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { Link } from "gatsby"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div className='main-text'>
      <h1>Note App</h1>
      <h3>A simple open source note taking app</h3>
      <Link to="/note" className='main-btn'>Note</Link>
    </div>
  </Layout>
)

export default IndexPage
