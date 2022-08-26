/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import Footer from "./footer"
import BackgroundImage from "./backgroundImage"
import "./layout.scss"

const Layout = ({ children }) => {
  return (
    <BackgroundImage className="siteLayout">
      <div className="backdrop">
        <header className="header">
          <h1 className="app-title mobile-heading">Notes App</h1>
        </header>
        <main>{children}</main>
        <Footer />
      </div>
    </BackgroundImage>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
