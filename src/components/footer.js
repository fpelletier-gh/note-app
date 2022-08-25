import React from "react"
import { Link } from "gatsby"
import { useSiteMetadata } from "../hooks/useSiteMetadata"
import {
  BsGithub,
  BsCodeSlash,
  BsEnvelope,
  BsPersonCircle,
} from "react-icons/bs"

const Footer = () => {
  const { author } = useSiteMetadata()
  return (
    <footer>
      <div>Created by {author}</div>
      <nav className="footer-navigation">
        <Link
          class="footer-icon"
          target="_blank"
          rel="noopener noreferrer"
          href="https://francispelletier.ca/#contact"
        >
          <BsEnvelope className="icon" />
        </Link>
        <Link
          class="footer-icon"
          target="_blank"
          rel="noopener noreferrer"
          href="https://github.com/fpelletier-gh"
        >
          <BsGithub className="icon" />
        </Link>
        <Link
          class="footer-icon"
          target="_blank"
          rel="noopener noreferrer"
          href="https://francispelletier.ca"
        >
          <BsPersonCircle className="icon" />
        </Link>
        <Link
          class="footer-icon"
          target="_blank"
          rel="noopener noreferrer"
          href="https://github.com/fpelletier-gh/note-app"
        >
          <BsCodeSlash className="icon" />
        </Link>
      </nav>
    </footer>
  )
}
export default Footer
/* <Tooltip hasArrow label="Contact me" placement="top"> */
/*   <Box> */
/*     <ActiveLink href="/contact"> */
/*       <Icon as={BsEnvelope} w={5} h={5} /> */
/*     </ActiveLink> */
/*   </Box> */
/* </Tooltip> */
/* <Tooltip hasArrow label="Github Profile" placement="top"> */
/*   <Box> */
/*     <ActiveLink href="https://github.com/fpelletier-gh"> */
/*       <Icon as={BsGithub} w={5} h={5} /> */
/*     </ActiveLink> */
/*   </Box> */
/* </Tooltip> */
/* <Tooltip hasArrow label="Portfolio" placement="top"> */
/*   <Box> */
/*     <ActiveLink href="https://francispelletier.ca"> */
/*       <Icon as={BsPersonCircle} w={5} h={5} /> */
/*     </ActiveLink> */
/*   </Box> */
/* </Tooltip> */
/* <Tooltip hasArrow label="This Project Repository" placement="top"> */
/*   <Box> */
/*     <ActiveLink href="https://github.com/fpelletier-gh/web-development-notes"> */
/*       <Icon as={BsCodeSlash} w={5} h={5} /> */
/*     </ActiveLink> */
/*   </Box> */
/* </Tooltip> */
