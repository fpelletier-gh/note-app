import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { Link } from "gatsby"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div className='main-text'>
      <h1>Note App</h1>
      <p>A simple note taking app</p>
      <Link to="/note">Note</Link>
    </div>
  </Layout>
)

export default IndexPage
