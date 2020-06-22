import React from "react"
import Image from "gatsby-image"
import { Link } from "gatsby"

// pull out data from ...artist in components/Artists.js = allStrapiArtist
const Artist = ({ id, slug, name, stageTime, image }) => {
  return (
    <Link to={`/artists/${slug}`} key={id} className="artists">
      <article>
        <div className="artists-card">
          <Image fluid={image.childImageSharp.fluid} className="artists-img" />
          <div className="artists-footer">
            <h3> {name} </h3>
            <p> {stageTime} </p>
          </div>
        </div>
      </article>
    </Link>
  )
}

export default Artist

// EXPORT AND RENDER IN artists.js PAGE
