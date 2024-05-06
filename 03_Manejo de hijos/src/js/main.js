console.log("Manejo de hijos en el DOM")

const body = document.querySelector('body')
// Los métodos de metodoChild afecta a los hijos directos. Ej Body > main

function createButtonSuccess() {
    const button = document.createElement('button')
    button.setAttribute("type", "button")
    // button.type = "button" // -> Hace lo mismo que la línea de arriba
    button.classList.add("btn", "btn-success") // -> Recibe varios parametros para varias clases
    
    


}

const btnExecute = document.querySelector("#btn-execute")
btnExecute.addEventListener('click', () => {
    alert("Hola Mundo")
})