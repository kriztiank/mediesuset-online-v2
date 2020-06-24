import React from "react"
import Layout from "../components/Layout"
import { graphql } from "gatsby"
import Artists from "../components/Artists"
import SEO from "../components/SEO"

// with page query you can access graphql in the data object
// artists holds the data, pass to components/Artists.js plural
export default ({ data }) => {
  // console.log(data)
  // destructuring the graphql data
  // rename nodes to artists with alias
  const {
    allStrapiArtists: { nodes: artists },
  } = data

  return (
    <Layout>
      <SEO title="Artists" />
      <Artists artists={artists} title="LINEUP" />
    </Layout>
  )
}

// Filter stageName equal to blue
export const query = graphql`
  {
  allStrapiArtists(filter: {stageDay: {eq: "Torsdag"}}) {
    nodes {
      id
      slug
      name
      stageTime
      stageName
      stageDay
      image {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  }
}
`
// ...GatsbyImageSharpFluid
