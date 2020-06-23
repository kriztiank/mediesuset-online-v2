import React from "react"
import Layout from "../components/Layout"
// import { Link } from "gatsby"
import SEO from "../components/SEO"
import HeroTickets from "../components/HeroTickets"
import "./tickets.scss"

const ticketsPage = () => {
  return (
    <Layout>
      <SEO title="tickets" />
      {/* <Tickets title="KØB BILLET" /> */}
      <HeroTickets />
      <main>
        <div class="main-inner">
          <form class="main-form">
            <p>Reserver Camp pladser. (Vælg område og forsendelsesmetode)</p>

            <label htmlFor="name">Navn:</label>
            <input
              type="text"
              id="name_id"
              className="name-field"
              placeholder="Indtast dit navn"
            />
            {/* adresse, postnummer, by */}

            <label htmlFor="email">Email/brugernavn:</label>
            <input
              type="text"
              id="email_id"
              className="email-field"
              placeholder="Indtast din email"
            />
            {/* adgangskode, gentag adgangskode */}

            <div class="radio-buttons">
              <input type="radio" name="coding" value="Yes" id="like" />{" "}
              <span class="radio-text"> Jeg ønsker billetterne tilsendt</span>
              <input type="radio" name="coding" value="No" id="dislike" />{" "}
              <span class="radio-text"> Jeg udskriver billetterne selv</span>
            </div>

            <div>
              <select name="gender" id="gender" class="select-box">
                <option value="">Vælg område:</option>
                <option value="f">Camp Colorit</option>
                <option value="m">Camp Kultunaut</option>
              </select>
            </div>

            {/* <button type='submit'>Send</button> */}
            <div class="buttons">
              <div class="button">
                <button type="reset" class="btn">
                  Ryd Felter
                </button>
              </div>

              <div class="button">
                <button type="button" id="send" class="btn">
                  Send Formular
                </button>
              </div>
            </div>
          </form>
        </div>
      </main>
    </Layout>
  )
}

export default ticketsPage
