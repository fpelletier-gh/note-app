import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import  './header.scss'

const Header = () => (
  <header>
    <div className="logo"><Link to="/">Notes App</Link></div>
    <ul>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/note">Note</Link>
      </li>
    </ul>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
