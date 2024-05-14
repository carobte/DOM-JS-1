// Import our custom CSS
import '../scss/styles.scss'
// Import all of Bootstrap's JS
import * as bootstrap from 'bootstrap'

// Import our database from data
import { coders } from '../../public/data/database.js'

// Import functions from operations.j
import { index, create, deleteCoder, editCoder, createRow } from './operations.js'

// Import alerts from alerts.s
import { alertSmallSuccess } from './alerts.js'

const table = document.querySelector("table")
const tbody = document.querySelector("tbody")

const name = document.getElementById("name")
const lastName = document.getElementById("last-name")
const email = document.getElementById("email")
const form = document.querySelector("form")
let idActualizar

form.addEventListener("submit", (e) => {
    // Prevenimos el refrescado de la página
    e.preventDefault()

    if (idActualizar === undefined) {
        // Creamos un nuevo coder con los datos del formulario en la database
        create(name, lastName, email, coders)
        
        // Confirmamos que fue agregado
        alertSmallSuccess("Coder saved!")
    } else {
        for (const coder of coders) {
            if (coder.id === idActualizar) {
                coder.name = name.value
                coder.lastName = lastName.value
                coder.email = email.value
            }
        }
        alertSmallSuccess("Updated!!")
        idActualizar = undefined
    }

    // Actualizamos la tabla para que se muestre con los datos del coder recién agregado
    // createRow()
    index(coders, tbody)

    // Limpiamos los campos del formulario
    form.reset()
})


table.addEventListener("click", (event) => {
    // Si el click fue dado en un btn con la clase btn-danger
    if (event.target.classList.contains("btn-danger")) {
        // Obtenemos id del target
        const id = parseInt(event.target.getAttribute("data-id"))

        deleteCoder(coders, id)
        index(coders, tbody)
        alertSmallSuccess("Coder deleted!")

        // Otra manera de obtener id
        // const idEliminar = parseIn(event.target.parentElement.parentElement.firstElementChild.textContent)
        // console.log(idEliminar)

        // Si el click fue en un btn con la clase btn-warning
    } else if (event.target.classList.contains("btn-warning")) {
        // Obtenemos id del target
        idActualizar= parseInt(event.target.getAttribute("data-id"))
        const coderFound = coders.find(coder => coder.id === idActualizar)
        console.log(coderFound)
        alertSmallSuccess("Coder found!")
        name.value = coderFound.name
        lastName.value = coderFound.lastName
        email.value = coderFound.email
    }
})


index(coders, tbody)