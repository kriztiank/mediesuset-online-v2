import React from "react"
import Title from "./Title"
import Stage from "./Stage"
// import { Link } from "gatsby"

// recieve data from stages page, pull out the graphql fields with destructuring, pass to Stage single
const Stages = ({ stages, title }) => {
  return (
    <section className="section section-center">
      {/* title is passed as a prop from index.js */}
      <Title title={title} />
      <header class="grid-container-stages">
        <div class="grid white">ONSDAG</div>
        <div class="grid white">TORSDAG</div>
        <div class="grid white">FREDAG</div>
        <div class="grid white">LØRDAG</div>
      </header>

      <div className="stages-center">
        {stages.map(stage => {
          return <Stage key={stage.id} {...stage} />
        })}
      </div>
    </section>
  )
}

export default Stages
