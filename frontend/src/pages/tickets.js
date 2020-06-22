import React from "react"
import Layout from "../components/Layout"
// import { Link } from "gatsby"
import SEO from "../components/SEO"
import HeroTickets from "../components/HeroTickets"
import './tickets.scss'

const ticketsPage = () => {
  return (
    <Layout>
      <SEO title="tickets" />
      {/* <Tickets title="KØB BILLET" /> */}
      <HeroTickets />
      <header className='contact__header'>
        <section className='contact__section'>
          <div className='contact__form'>
            <h1>KØB BILLET</h1>

            <form method='post' name='contact' action='/thanks' data-netlify='true' netlify-honeypot='bot'>
              <input type='hidden' name='form-name' value='contact' />
              <div className='field__hidden'>
                <label htmlFor="bot">Don't fill this out, human</label>
                <input name='bot' />
              </div>
              <div className='field'>
                <label htmlFor="name">Name</label>
                <input type='text' name='name' />
              </div>
              <div className='field'>
                <label htmlFor="email">Email</label>
                <input type='text' name='email' />
              </div>
              <div className='field'>
                <label htmlFor="message">Message</label>
                <textarea name='message' rows='6'></textarea>
              </div>
              <div className='submit'>
                <button type='submit' className='btn__grey'>Send</button>
              </div>
            </form>

          </div>
        </section>
      </header>
    </Layout>
  )
}

export default ticketsPage
