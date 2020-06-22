import React from "react"
import Title from "./Title"
import Artist from "./Artist"

// recieve data from artists page, pull out the graphql fields with destructuring, pass to Artist single
const Artists = ({ artists, title }) => {
  return (
    <section className="section section-center">
      {/* title is passed as a prop from index.js */}
      <Title title={title} />
      <header class="grid-container-lineup">
        <div class="grid white">A-Å</div>
        <div class="grid white">RØD SCENE</div>
        <div class="grid white">BLÅ SCENE</div>
        <div class="grid white">GRØN SCENE</div>
        <div class="grid white">LILLA SCENE</div>
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
