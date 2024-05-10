// Import our custom CSS
import '../scss/styles.scss'
// Import all of Bootstrap's JS
import * as bootstrap from 'bootstrap'

// Import our database from data
import { coders } from '../../public/data/database.js'

// Import functions from operations.j
import { index, create } from './operations.js'

// Import alerts from alerts.s
import { alertSmallSuccess } from './alerts.js'

const tbody = document.querySelector('tbody')

/* function createRow() {
    tbody.innerHTML = ``
    for (const coder of coders) {
        // Creamos un tr
        let row = document.createElement("tr")
        
        // Creamos un th con el id del coder
        let th = document.createElement("th")
        th.textContent = coder.id
        th.scope = "row"
        
        // Creamos un td con el nombre del coder
        let tdName = document.createElement("td")
        tdName.textContent = coder.name
        
        // Creamos un td con el apellido del coder
        let tdLastName = document.createElement("td")
        tdLastName.textContent = coder.lastName

        // Creamos el último td con el email del coder
        let tdEmail = document.createElement("td")
        tdEmail.textContent = coder.email
        tdEmail.classList.add("text-lowercase")

        // Insertamos los th y td creados en el row
        row.append(th, tdName, tdLastName, tdEmail)

        // Insertamos el tr en el tbody
        tbody.appendChild(row)
    }
} */

const name = document.getElementById("name")
const lastName = document.getElementById("last-name")
const email = document.getElementById("email")
const form = document.querySelector("form")

form.addEventListener("submit", (e) => {
    // Prevenimos el refrescado de la página
    e.preventDefault()

    // Creamos un nuevo coder con los datos del formulario en la database
    create(name,lastName,email, coders)

    // Actualizamos la tabla para que se muestre con los datos del coder recién agregado
    // createRow()
    index(coders, tbody)

    // Confirmamos que fue agregado
    alertSmallSuccess("Coder saved!")

    // Limpiamos los campos del formulario
    form.reset()
})
