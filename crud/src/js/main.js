// Import our custom CSS
import '../scss/styles.scss'
// Import all of Bootstrap's JS
import * as bootstrap from 'bootstrap'
// Import our data from Bootstrap
import { coders } from './database.js'

const tbody = document.querySelector('tbody')

function withForOf() {
    for (const coder of coders) {
        tbody.innerHTML += `
    <tr>
        <th scope="row">${coder.id}</th>
        <td>${coder.name}</td>
        <td>${coder.lastName}</td>
        <td class="text-lowercase">${coder.email}</td>
    </tr>
    `
    }
}

function withForEach() {
    coders.forEach(coder => {
        tbody.innerHTML += `
        <tr>
            <th scope="row">${coder.id}</th>
            <td>${coder.name}</td>
            <td>${coder.lastName}</td>
            <td class="text-lowercase ">${coder.email}</td>
        </tr>
        `
    });
}

function withClasicFor() {
    for (let i = 0; i < coders.length; i++) {
        tbody.innerHTML += `
        <tr>
            <th scope="row">${coders[i].id}</th>
            <td>${coders[i].name}</td>
            <td>${coders[i].lastName}</td>
            <td class="text-lowercase ">${coders[i].email}</td>
        </tr>
        `
    }
}

function withForIn() { // el for in devuelve keys en los objetos, en arrays el indice
    for (const iterador in coders) {
        tbody.innerHTML += `
        <tr>
            <th scope="row">${coders[iterador].id}</th>
            <td>${coders[iterador].name}</td>
            <td>${coders[iterador].lastName}</td>
            <td class="text-lowercase ">${coders[iterador].email}</td>
        </tr>
        `
    }
}

