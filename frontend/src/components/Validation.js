import React from "react"
// import Image from "gatsby-image"
// import { Link } from "gatsby"

const Validation = () => {
  const button = document.getElementById("send")

  button.onclick = function () {
    const name = document.getElementById("name_id")
    // if the name field do not have a value, display warning
    if (name.value === "" || name.value.length < 6) {
      alert("Feltet navn må ikke være tomt, indtast mindst 8 bogstaver")
      name.focus()
      name.classList.add("error")
      return false
    }

    const email = document.getElementById("email_id")
    if (!email.value) {
      alert("Feltet email må ikke være tomt")
      email.focus()
      email.classList.add("error")
      return false
    } else {
      if (!isValidEmail(email.value)) {
        alert("Intast en gyldig email")
        email.focus()
        email.classList.add("error")
        return false
      }
    }

    const phone = document.getElementById("phone_id")
    // if the phone field do not have a value, display warning
    if (phone.value === "" || phone.value.length < 8) {
      alert("Feltet telefon må ikke være tomt, intast 8 tal")
      phone.focus()
      phone.classList.add("error")
      return false
    }

    //  checks to see if an option has been selected before continuing
    // .checked is a property of a radio button (that the radio button has been checked)
    const checkedYes = document.getElementById("like").checked
    const checkedNo = document.getElementById("dislike").checked

    if (checkedYes === false && checkedNo === false) {
      alert(
        'Vælg "Jeg ønsker billetterne tilsendt" eller "Jeg udskriver billetterne selv"'
      )
      return false
    }

    const gender = document.getElementById("gender")
    if (!gender.value) {
      alert("Vælg et område")
      gender.focus()
      gender.classList.add("error")
      return false
    }

    alert("Tak! formularen blev sendt")
  }

  //Tjekker om værdi har en gyldig email syntaks
  function isValidEmail(value) {
    let pattern = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i
    return pattern.test(value)
  }
}

export default Validation
