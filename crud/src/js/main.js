// Import our custom CSS
import '../scss/styles.scss'
// Import all of Bootstrap's JS
import * as bootstrap from 'bootstrap'
// Import sweetAlert2
import Swal from 'sweetalert2'

// Import our data from Bootstrap
import { coders } from '../../public/data/database.js'

import { index } from './operations.js'

const tbody = document.querySelector('tbody')

const name = document.getElementById("name")
const lastName = document.getElementById("last-name")
const email = document.getElementById("email")
const form = document.querySelector("form")

form.addEventListener("submit", (e) => {
    // Prevenimos el refrescado de la página
    e.preventDefault()

    // Creamos un nuevo coder con los datos del formulario
    const newCoder = {
        id: Date.now(),
        name: name.value,
        lastName: lastName.value,
        email: email.value
    }

    // Agregamos el nuevo coder a la lista de coders
    coders.push(newCoder)
    index(coders, tbody)

    // Confirmamos que fue agregado
    const Toast = Swal.mixin({
        toast: true,
        position: "top-end",
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        didOpen: (toast) => {
            toast.onmouseenter = Swal.stopTimer;
            toast.onmouseleave = Swal.resumeTimer;
        }
    });
    Toast.fire({
        icon: "success",
        title: "Saved successfully"
    });


    // Limpiamos los campos del formulario
    form.reset()
})
