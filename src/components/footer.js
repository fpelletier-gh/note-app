import React from "react"
import {useSiteMetadata} from '../hooks/useSiteMetadata'

const Footer = () => {
  const {author} = useSiteMetadata()
  return (
    <footer>
      <div>Created by {author}</div>
    </footer>
  )
}
export default Footer
