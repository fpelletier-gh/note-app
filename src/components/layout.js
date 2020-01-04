/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useSiteMetadata } from "../hooks/useSiteMetadata"
import Header from "./header"
import Footer from "./footer"
import BackgroundImage from "./backgroundImage"
import "./layout.scss"

const Layout = ({ children }) => {
  const { title } = useSiteMetadata()

  return (
    <BackgroundImage className="siteLayout">
      <div className="backdrop">
        <Header siteTitle={title} />
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
