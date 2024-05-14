/* 
function withForOf(coders, tbody) {
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

function withClasicFor(coders, tbody) {
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

function withForIn(coders, tbody) { // el for in devuelve keys en los objetos, en arrays el indice
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
 */

export function index(coders, tbody) { // normalmente el método que se encarga de listar en apis se llama index
    tbody.innerHTML = ""

    coders.forEach(coder => {
        tbody.innerHTML += `
        <tr>
            <th scope="row" id="${coder.id}">${coder.id}</th>
            <td>${coder.name}</td>
            <td>${coder.lastName}</td>
            <td class="text-lowercase ">${coder.email}</td>
            <td>
                <button data-id=${coder.id} class="btn btn-primary">Details</button>
                <button data-id=${coder.id} class="btn btn-warning">Edit</button>
                <button data-id=${coder.id}  class="btn btn-danger">Delete</button>
            </td>
        </tr>
        `
    })
}

// otra mandera de index

export function createRow() {
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
}

export function create(name, lastName, email, coders) {
    const newCoder = {
        id: Date.now(),
        name: name.value,
        lastName: lastName.value,
        email: email.value
    }
    coders.push(newCoder)
}

export function deleteCoder(coders, id) {
    coders.forEach((coder, i) => {
        if (coder.id === id) {
            coders.splice(i,1)
        } else {
            console.error("No se encontro el coder")
        }
    })
}

export function editCoder(coders, id){           

}
