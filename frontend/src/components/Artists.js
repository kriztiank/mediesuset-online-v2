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
        <div className="grid">A-Å</div>
        <div className="grid"><Link to="/redStage" className="white">RØD SCENE</Link></div>
        <div className="grid"><Link to="/blueStage" className="white">BLÅ SCENE</Link></div>
        <div className="grid"><Link to="/greenStage" className="white">GRØN SCENE</Link></div>
        <div className="grid"><Link to="/purpleStage" className="white">LILLA SCENE</Link></div>
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
