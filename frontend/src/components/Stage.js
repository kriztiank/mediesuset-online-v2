import React from "react"
// import Image from "gatsby-image"
import { Link } from "gatsby"

// pull out data from ...stage in components/Stages.js = allStrapiArtist (holds all the data needed in one collection)
const Stage = ({ id, slug, stageTime, name, description }) => {
  return (
    <Link to={`/artists/${slug}`} key={id} className="stages">
      <article>
        <div className="stages-card">
          <div className="stages-footer">
            <h3> {stageTime} </h3>
            <h3> {name} </h3>
          </div>
        </div>
      </article>
    </Link>
  )
}

export default Stage

// EXPORT AND RENDER IN stages.js PAGE
