import React from "react"
import Title from "./Title"
import Artist from "./Artist"
import { Link } from "gatsby"

// recieve data from artists page, pull out the graphql fields with destructuring, pass to Artist single
const Artists = ({ artists, title }) => {
  return (
    <section className="section section-center">
      {/* title is passed as a prop from index.js */}
      <Title title={title} />
      <header className="grid-container-lineup">
        <Link to="/artists" className="grid white">A-Å</Link>
        <Link to="/redStage" className="grid white">RØD SCENE</Link>
        <Link to="/blueStage" className="grid white">BLÅ SCENE</Link>
        <Link to="/greenStage" className="grid white">GRØN SCENE</Link>
        <Link to="/purpleStage" className="grid white">LILLA SCENE</Link>
      </header>

      <div className="artists-center">
        {artists.map(artist => {
          // use object spread operator to get all properties
          return <Artist key={artist.id} {...artist} />
        })}
      </div>
    </section>
  )
}

export default Artists
