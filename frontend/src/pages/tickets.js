import React from "react"
import Layout from "../components/Layout"
// import { Link } from "gatsby"
import SEO from "../components/SEO"
import HeroTickets from "../components/HeroTickets"
import Validation from "../components/Validation"
import Styles from './tickets.module.scss';

const ticketsPage = () => {
  return (
    <Layout>
      <SEO title="tickets" />
      {/* <Tickets title="KØB BILLET" /> */}
      <HeroTickets />
      <main>
        <div className={Styles.mainInner}>
          <form className={Styles.mainForm}>
            <p>Reserver Camp pladser. (Vælg område og forsendelsesmetode)</p>

            <label htmlFor="name">Navn:</label>
            <input
              type="text"
              id="name_id"
              className={Styles.nameField}
              placeholder="Indtast dit navn"
            />
            {/* adresse, postnummer, by */}

            <label htmlFor="email">Email/brugernavn:</label>
            <input
              type="text"
              id="email_id"
              className={Styles.emailField}
              placeholder="Indtast din email"
            />
            {/* adgangskode, gentag adgangskode */}

            <div className={Styles.radioButtons}>
              <input type="radio" name="coding" value="Yes" id="like" />{" "}
              <span className={Styles.radioText}> Jeg ønsker billetterne tilsendt</span>
              <input type="radio" name="coding" value="No" id="dislike" />{" "}
              <span className={Styles.radioText}> Jeg udskriver billetterne selv</span>
            </div>

            <div>
              <select name="gender" id="gender" className={Styles.selectBox}>
                <option value="">Vælg område:</option>
                <option value="f">Camp Colorit</option>
                <option value="m">Camp Kultunaut</option>
              </select>
            </div>

            {/* <button type='submit'>Send</button> */}
            <div className={Styles.buttons}>
              <div className={Styles.button}>
                <button type="reset" className={Styles.btn}>
                  Ryd Felter
                </button>
              </div>

              <div className={Styles.button}>
                <button type="button" id="send" className={Styles.btn}>
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
