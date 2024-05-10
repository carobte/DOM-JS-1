console.log("Manejo de hijos en el DOM")

const main = document.querySelector('main')
// Los métodos de metodoChild afecta a los hijos directos. Ej Body > main

const btnExecute = document.querySelector("#btn-execute")
btnExecute.addEventListener('click', () => {
    // Crear
    // const btnResponse = createButtonSuccess()

    // Borrar
/*     const btnForDelete = selectInfoButton()
    removeBtn(btnForDelete) */

    // Reemplazar
/*     const newBtn = createButtonSuccess()
    const existentBtn = selectInfoButton()
    main.replaceChild(newBtn, existentBtn) */

    // insertBefore -> Permite elegir dónde insertar el elemento con otro de referencia.
/* 
    const newBtn = createButtonSuccess()
    const existentBtn = selectInfoButton()
    main.insertBefore(newBtn, existentBtn) */
})

function createButtonSuccess() {
    const button = document.createElement('button') 
    button.setAttribute("type", "button")
    // button.type = "button" // -> Hace lo mismo que la línea de arriba
    button.classList.add("btn", "btn-success") // -> Recibe varios parametros para varias clases
    button.textContent = "hello"
    // main.appendChild(button) // -> Crea el boton al final de lo que haya en main, permite mejores manipulaciones
    /* main.innerHTML += `
        <button type="button" class="btn btn-success"> Hello </button>
    `// innerHTML -> lo que hace es sobreescribir lo que hay en main, insertar HTML */
    return button
}

function selectInfoButton() {
    const btnFound = document.querySelector(".btn-info")
    return btnFound
}

function removeBtn(btn) {
    main.removeChild(btn)
}
