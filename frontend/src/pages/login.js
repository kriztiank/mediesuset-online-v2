import React from "react"
import Layout from "../components/Layout"
import SEO from "../components/SEO"

import HeroLogin from "../components/HeroLogin"
import Login from "../components/Login"

const loginPage = () => {
  return (
    <Layout>
      <SEO title="Login" />
      <HeroLogin />
      <Login title="LOGIN" />
    </Layout>
  )
}

export default loginPage
