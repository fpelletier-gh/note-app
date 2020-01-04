import React from "react"
import { graphql, StaticQuery } from "gatsby"
import BackgroundImage from "gatsby-background-image"

const BackgroundSection = ({ children, className, backdropClassName }) => (
  <StaticQuery
    query={graphql`
      query {
        desktop: file(relativePath: { eq: "backgroundImg.jpg" }) {
          childImageSharp {
            fluid(quality: 90, maxWidth: 1920) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    `}
    render={data => {
      // Set ImageData.
      const imageData = data.desktop.childImageSharp.fluid
      return (
        <BackgroundImage
          Tag="section"
          fluid={imageData}
          className={className}
          backgroundColor={`#040e18`}
        >
            {children}
        </BackgroundImage>
      )
    }}
  />
)

export default BackgroundSection
