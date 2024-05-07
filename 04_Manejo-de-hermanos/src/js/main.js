console.log("Manejo de hermanos")

const header = document.querySelector("header")
const main = document.querySelector("main")
const footer = document.querySelector("footer")

// const btnExample = createBtnInfo()

// reference.before(element) -> inserts the element before the reference, equivalent to beforebegin
// main.before(btnExample) 

// reference.after(element) -> inserts the element after the reference, equivalent to afterend
// main.after(btnExample)

// reference.prepend(element) -> inserts the element in the 1st position of the reference (a child). Opposite of the appendChild, equivalent to afterbegin
// main.prepend(btnExample, createBtnInfo()) // receives more than one child

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

// .children -> returns a list with the children
// console.log(main.children)

// .parentElement -> returns the parent element
// const btnDark = document.querySelector(".btn-dark")
// console.log(btnDark.parentElement.parentElement.parentElement) // article -> section -> main

// .firstElementChild -> returns the first child
// console.log(main.firstElementChild)

// .lastElementChild -> returns the last child
// console.log(main.lastElementChild)

// .previousElementSibling -> returns the previous sibling
// console.log(main.previousElementSibling)

//.nextElementSibling -> returns the next sibling
// console.log(main.nextElementSibling)