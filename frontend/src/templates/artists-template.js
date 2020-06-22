import React from "react"
// import { graphql, Link } from "gatsby"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
// import ReactMarkdown from "react-markdown"

// with page query you can access graphql in the data object
const ComponentName = ({ data }) => {
  // console.log("%cThis is a green text", "color:green", data);
  // const { contentRich } = data.camp
  // console.log("%cThis is a red text", "color:red", contentRich)
  return (
    <Layout>
      <section className="news-template">
        <div className="section-center">
          <article className="news-content">
            {/* <ReactMarkdown source={contentRich} /> */}
            <h2>this is artist the subpage / template used for program and lineup</h2>
          </article>
        </div>
      </section>
    </Layout>
  )
}

// page query
export const query = graphql`
  query GetSingleArtist($slug: String) {
    artist: strapiArtists(slug: { eq: $slug }) {
      # graphql fields goes here, title, description, contentRich etc.
      slug
      name
      description

    }
  }
`

export default ComponentName
