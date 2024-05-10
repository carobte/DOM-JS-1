// Import our custom CSS
import '../scss/styles.scss'
// Import all of Bootstrap's JS
import * as bootstrap from 'bootstrap'

// Import our database from data
import { coders } from '../../public/data/database.js'

// Import functions from operations.j
import { index, create, deleteCoder, createRow } from './operations.js'

// Import alerts from alerts.s
import { alertSmallSuccess } from './alerts.js'

const table = document.querySelector("table")
const tbody = document.querySelector("tbody")

const name = document.getElementById("name")
const lastName = document.getElementById("last-name")
const email = document.getElementById("email")
const form = document.querySelector("form")

form.addEventListener("submit", (e) => {
    // Prevenimos el refrescado de la página
    e.preventDefault()

    // Creamos un nuevo coder con los datos del formulario en la database
    create(name, lastName, email, coders)

    // Actualizamos la tabla para que se muestre con los datos del coder recién agregado
    // createRow()
    index(coders, tbody)

    // Confirmamos que fue agregado
    alertSmallSuccess("Coder saved!")

    // Limpiamos los campos del formulario
    form.reset()
})


table.addEventListener("click", (event) => {
    if (event.target.classList.contains("btn-danger")) {
        const id = parseInt(event.target.getAttribute("data-id"))

        deleteCoder(coders, id)
        index(coders, tbody)

        // Otra manera de obtener id
        // const idEliminar = parseIn(event.target.parentElement.parentElement.firstElementChild.textContent)
        // console.log(idEliminar)
    }
})


index(coders, tbody)