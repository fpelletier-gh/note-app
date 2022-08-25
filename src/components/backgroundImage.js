import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import { getImage } from "gatsby-plugin-image"

import { convertToBgImage } from "gbimage-bridge"
import BackgroundImage from "gatsby-background-image"

const GbiBridged = ({ className, children }) => {
  const { placeholderImage } = useStaticQuery(
    graphql`
      query {
        placeholderImage: file(relativePath: { eq: "backgroundImg.jpg" }) {
          childImageSharp {
            gatsbyImageData(width: 1920, placeholder: BLURRED, formats: [JPG])
          }
        }
      }
    `
  )
  const image = getImage(placeholderImage)
  const bgImage = convertToBgImage(image)

  return (
    <BackgroundImage
      Tag="section"
      {...bgImage}
      className={className}
      preserveStackingContext
    >
      {children}
    </BackgroundImage>
  )
}
export default GbiBridged
