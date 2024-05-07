console.log("Manejo de hermanos")

const main = document.querySelector("main")
const btnExample = createBtnInfo()

// reference.before(element) -> inserts the element before the reference
// main.before(btnExample) 

// reference.after(element) -> inserts the element after the reference
// main.after(btnExample)

// reference.prepend(element) -> inserts the element in the 1st position of the reference (a child). Opposite of the appendChild
// main.prepend(btnExample)

// reference.append(element) -> same as appendChild, but receives more than one child
// main.append(btnExample, createBtnInfo())

// reference.replaceChildren(element) -> replace ALL children with the element, receives more than one child
// main.replaceChildren(btnExample, createBtnInfo())

// reference.replaceWith(element) -> replace the reference with the element
// main.replaceWith(btnExample)

// reference.remove() -> remove the reference
// main.remove()




function createBtnInfo() {
    const btn = document.createElement("button")
    btn.classList.add("btn", "btn-info")
    btn.textContent = "Point"
    return btn
}

