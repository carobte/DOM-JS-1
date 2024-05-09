// Import our custom CSS
import '../scss/styles.scss'
// Import all of Bootstrap's JS
import * as bootstrap from 'bootstrap'
// Import our data from Bootstrap
import { coders } from '../../public/data/database.js'

import { index } from './operations.js'

const tbody = document.querySelector('tbody')

const name = document.getElementById("name")
const lastName = document.getElementById("last-name")
const email = document.getElementById("email")
const form = document.querySelector("form")

form.addEventListener("submit", (e) => {
    e.preventDefault()
    const newCoder ={
        id: Date.now(),
        name: name.value,
        lastName: lastName.value,
        email: email.value
    }

    coders.push(newCoder)
    index(coders, tbody)


    form.reset()
})
